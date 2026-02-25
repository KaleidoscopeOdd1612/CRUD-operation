import { useState } from "react";
import ActionDropdown from "./actionDropdown";
import { 
  fetchPost, 
  newPost,
  editPost,
  deleteReq
} from "./api/fetchData";

export function App() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");

  async function getPosts() {
    try {
      const data = await fetchPost(id);
      setPosts(Array.isArray(data) ? data : [data]);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  async function createPost() {
    try {
      const data = await newPost(title);
      setPosts(Array.isArray(data) ? data : [data]);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  async function updatePost() {
    try {
        const data = await editPost(id, title);
        setPosts(Array.isArray(data) ? data : [data]);
      } catch (error) {
        console.error(error);
        alert(error.message);
      }
  }

  async function deletePost() {
    try {
        const data = await deleteReq(id);
        setPosts(Array.isArray(data) ? data : [data]);
      } catch (error) {
        console.error(error);
        alert(error.message);
      }
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div
          className="grid grid-rows-[10%_75%_15%] 
                  w-screen max-w-[280px] h-[350px] scale-[150%] gap-1"
        >
          
          <div className="relative bg-gray-100 border-2 border-gray-500 text-center">
            <div className="flex items-center">
              <ActionDropdown
                getPosts={getPosts}
                createPost={createPost}
                updatePost={updatePost}
                deletePost={deletePost}
              />
              <h1 className="text-[20px] font-semibold flex-1 text-center">CRUD</h1>
            </div>
          </div>

          <div
            className="block bg-gray-100 w-full border-2 border-black
            text-center">
            <div className="py-2 overflow-y-scroll w-full h-full">
              {posts.map((post) => {
                return (
                  <div key={post.id}>
                    [ id: {post.id}, title: '{post.title}' ]
                  </div>
                );
              })}
            </div>
          </div>
          <div className="grid grid-cols-[50%_50%] bg-gray-100 place-items-stretch">
            <input
              className="
            w-full min-w-0 border-2 border-gray-500 px-2
            focus:border-black"
              type="text"
              placeholder="Enter an id"
              name="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <input
              className="w-full min-w-0
            border-2 border-gray-500 border-l-0 focus:border-l-2 px-2
            focus:border-black"
              type="text"
              placeholder="Enter a title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
