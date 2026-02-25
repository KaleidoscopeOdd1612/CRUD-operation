import { useState, useRef, useEffect } from "react";

export default function ActionDropdown({
  getPosts,
  createPost,
  updatePost,
  deletePost,
}) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // close when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={menuRef} className="absolute top-[-1] right-0">
      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-gray-200 hover:bg-gray-300 px-2 py-1 shadow-md border border-black"
      >
        Actions ▾
      </button>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute right-0 w-40 bg-white border shadow-md rounded-md overflow-hidden">
          <button
            onClick={() => {
              getPosts();
              setOpen(false);
            }}
            className="block bg-lime-200 hover:bg-lime-300 w-full text-left px-4 py-2"
          >
            Get Posts
          </button>

          <button
            onClick={() => {
              createPost();
              setOpen(false);
            }}
            className="block bg-yellow-100 hover:bg-yellow-200 w-full text-left px-4 py-2"
          >
            Create Post
          </button>

          <button
            onClick={() => {
              updatePost();
              setOpen(false);
            }}
            className="block bg-cyan-100 hover:bg-cyan-200 w-full text-left px-4 py-2"
          >
            Update Post
          </button>

          <button
            onClick={() => {
              deletePost();
              setOpen(false);
            }}
            className="block bg-red-300 hover:bg-red-400 w-full text-left px-4 py-2"
          >
            Delete Post
          </button>
        </div>
      )}
    </div>
  );
}