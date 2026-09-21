const socket = io("http://localhost:4000/");

socket.on('connect', ()=>{
  socket.emit("load")
})

const title = document.getElementById("title");
const desc = document.getElementById("desc");


function addPost() {

  if(title.value && desc.value) {
    const post = {
      title: title.value,
      description: desc.value,
    };
    socket.emit("addPost", post);
    title.value = ''
    desc.value=''
  }

  
}

socket.on("posts", (data) => {
  displayPosts(data);
});

function displayPosts(data) {
  let post = ``;

  for (let i = 0; i < data.length; i++) {
    post += `<div class="col-md-3">
            <div class="card bg-light mb-4 p-3">
              <h2>${data[i].title}</h2>
              <p>${data[i].description}</p>
              <button class="btn btn-danger delete" onclick="deletePost('${data[i]._id}')" id="delete">Delete</button>
            </div>
          </div>`;
  }

  document.getElementById("data").innerHTML = post;
}

function deletePost(id) {
  socket.emit('Delete', id)
}



const searchInput = document.getElementById("search");

searchInput.addEventListener("input", () => {
  const searchQuery = searchInput.value.trim();
  socket.emit("searchPosts", searchQuery);
});

