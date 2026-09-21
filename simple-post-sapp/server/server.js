import express from "express";
import connection from "./DB/connection.js";
import { Server } from "socket.io";
import postModel from "./DB/models/post.js";

const app = express();

const port = 4000;

// app.use(express.json());

connection();

app.get("/", (req, res) => {
  res.send("Hello From Server");
});

const server = app.listen(port, () => {
  console.log("Server is running on " + port);
});

const io = new Server(server, {
  cors: "*",
});

io.on("connection", (socket) => {
  console.log(socket.id);
  console.log("hello");



socket.on("searchPosts", async (query) => {
  
    const posts = await postModel.find({
      title: { $regex: query, $options: 'i' }
    });

    socket.emit("posts", posts);
  
});




  socket.on("addPost", async (data) => {
    console.log(data);

    await postModel.insertMany(data);

    let posts = await postModel.find();

    io.emit("posts", posts);
  });


  socket.on("load", async()=>{

    let posts = await postModel.find();

    io.emit("posts", posts);
  })



  socket.on("Delete", async (id)=>{
    await postModel.findByIdAndDelete(id)

    let posts = await postModel.find();

    io.emit("posts", posts);
  })


});
