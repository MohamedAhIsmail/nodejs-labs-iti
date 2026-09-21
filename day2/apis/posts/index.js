import express from "express";
import postsRoutes from "./modules/post/posts.routes.js";
// import { addPost, deletePost, getPosts, revesePosts, searchPost, updatePost } from "./modules/post/controller/posts.Controller.js";

const app = express();

app.use(express.json());

app.use(postsRoutes);

app.listen(4000, () => {
  console.log("Server 'POSTS' is now running");
});
