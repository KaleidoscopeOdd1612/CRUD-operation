// hardcode database
let posts = [
    { id: 1, title: 'post one' },
    { id: 2, title: 'post two' },
    { id: 3, title: 'post three' },
];

// route: /api/posts , get all posts
export const getPosts = (req, res) => {
    const limit = parseInt(req.query.limit);

    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit));
    }

    res.status(200).json(posts);
}

// route: /api/posts/:id , get single posts
export const getPost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        const error = new Error(`post with id ${id} was not found`);
        error.status = 404;
        return next(error);
    }

    res.status(200).json(post);
}

// route: /api/posts , new post
export const newPost = (req, res, next) => {
    const post = req.body;

    const newPost = {
        id: posts.length + 1,
        ...post
    }

    if (!newPost.title) {
        const error = new Error('please include a title');
        error.status = 400;
        return next(error);
    }

    posts.push(newPost);
    res.status(201).json(newPost);
}

// route: /api/posts/:id , edit post by id
export const editPost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    const title = req.body.title;

    if (!post) {
        const error = new Error('User Id not founded');
        error.status = 400;
        return next(error);
    }

    if (!title) {
        const error = new Error('please include a title');
        error.status = 400;
        return next(error);
    }

    post.title = req.body.title;
    res.status(200).json(posts);
}

// route: /api/posts/:id , delete post by id
export const deletePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        const error = new Error('User Id not founded');
        error.status = 400;
        return next(error);
    }

    posts = posts.filter((post) => post.id !== id);
    res.status(200).json(posts);
}