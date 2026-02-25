export async function fetchPost(id) {
  const res = await (!id ? 
    fetch('http://localhost:5000/api/posts') : fetch(`http://localhost:5000/api/posts/${id}`));

    const data = await res.json();
    
    if (!res.ok && data.message) {
      throw new Error(data.message);
    } else if (!res.ok && !data.message) {
      throw new Error('Fail to fetch the data');
    }

    return data;
}

export async function newPost(title) {
  const res = await fetch('http://localhost:5000/api/posts', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title })
  });

    const data = await res.json();
    
    if (!res.ok) {
      throw new Error(data.message);
    }

    return data;
}

export async function editPost(id, title) {
  const res = await fetch(`http://localhost:5000/api/posts/${id}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title })
  });

    const data = await res.json();
    
    if (!res.ok) {
      throw new Error(data.message);
    }

    return data;
}

export async function deleteReq(id) {
  const res = await fetch(`http://localhost:5000/api/posts/${id}`, {
    method: 'DELETE',
  });

    const data = await res.json();
    
    if (!res.ok) {
      throw new Error(data.message);
    }

    return data;
}