import { Router } from "express";
import { addPost, deletePost, getPosts, searchPost, revesePosts, updatePost } from "./controller/posts.Controller.js";
const postsRoutes = Router();

postsRoutes.get("/posts", getPosts);

postsRoutes.post("/posts", addPost);

// Search
postsRoutes.get("/posts/search/:id", searchPost);

// reverse
postsRoutes.get("/posts/reversed", revesePosts);

postsRoutes.put("/posts/:id", updatePost)

postsRoutes.delete("/posts/:id", deletePost);

export default postsRoutes