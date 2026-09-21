let posts = [
  {
    id: 1,
    title: "Omar Marmoosh to Man City",
    description: "Marmooosh to Man Cirt in winter transfers bla bla bla bla bla",
  },
  {
    id: 2,
    title: "Plastine is Free",
    description: "Plastine is Free bla bla bla bla bla",
  },
  {
    id: 3,
    title: "Abuzaid and 163$",
    description: "Ahmed abuzaid Garbia Tanta Egypt bla bla bla bla bla",
  },
];


const getPosts = (req, res) => {

  res.status(200).send(posts);
}

const addPost = (req, res) => {
  // console.log(req.body);
  req.body.id = posts.length ? posts[posts.length - 1].id + 1 : 1;
  posts.push(req.body)

  res.status(200).send(posts);
}

const searchPost = (req, res) => {
  let postId = parseInt(req.params.id); 
  let foundPost = posts.find((post) => post.id === postId);

  if (!foundPost) {
    return res.status(404).send("Post not found");
  }

  res.status(200).send(foundPost);
}

const revesePosts = (req, res) => {
  let reversedPosts = [...posts].reverse();

  res.status(200).send(reversedPosts);
}

const updatePost = (req, res)=>{
  let foundedPost = posts.find((element) => element.id === parseInt(req.params.id));
  if (!foundedPost) res.send("Not Found");
  if (req.body.title) {
    foundedPost.title = req.body.title;
  }
  if (req.body.description) {
    foundedPost.description = req.body.description;
  }

  res.status(200).send(posts);
}

const deletePost = (req, res)=>{

  if (!posts.find((element) => element.id ==  parseInt(req.params.id))) {
    return res.status(404).send("not found")
  }
  posts = posts.filter((element) => element.id != parseInt(req.params.id));

  res.status(200).send(posts);
}

export {
  getPosts,
  addPost,
  searchPost,
  revesePosts,
  updatePost,
  deletePost
}