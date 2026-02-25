import express from "express";
import {
  getPosts,
  getPost,
  newPost,
  editPost,
  deletePost,
} from "../Controllers/postController.js";
const router = express.Router();

// get all post & limit query
router.get("/", getPosts);

// get single post
router.get("/:id", getPost);

// POST request : new post
router.post("/", newPost);

// PUT request : edit the post
router.put("/:id", editPost);

// delete post
router.delete("/:id", deletePost);

export default router;
