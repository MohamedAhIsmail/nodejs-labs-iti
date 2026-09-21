// import { log } from "node:console";
import { createServer } from "node:http";
// const server = http.createServer()

let users = [
  { id: 1, name: "Mohamed", age: 20 },
  { id: 2, name: "Ahmed", age: 25 },
  { id: 3, name: "Sara", age: 23 },
  {id: 4, name: "Zeyad", age: 14},
  {id: 5, name: "Tamer", age: 17}
];

const sendRes = (res, status, data) => {
  res.writeHead(status, { "Content-type": "application/json" });
  res.end(JSON.stringify(data));
};

const server = createServer((req, res) => {
  const { url, method } = req;

  if (method == "GET" && url == "/users") {
    sendRes(res, 200, users);

  } else if (method == "GET" && url == "/users/sorted") {
    console.log(url)
    // start sorting
    const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));
    sendRes(res, 200, sortedUsers);

    //start search
  } else if (method === "GET" && url.startsWith("/users/search/")) {
    let id = parseInt(url.split("/")[3]);
    let foundUser = users.find((user) => user.id === id);

    if (foundUser) {
      sendRes(res, 200, foundUser);
    } else {
      sendRes(res, 404, { message: "User not found" });
    }


  } else if (method == "POST" && url == "/users") {
    req.on("data", (chunk) => {
      let newUser = JSON.parse(chunk);
      newUser.id = users.length ? users[users.length - 1].id + 1 : 1;
      users.push(newUser);
      sendRes(res, 201, users);
    });


  } else if (method == "PUT" && url.startsWith("/users/")) {
      let id = parseInt(url.split("/")[2]);
      let foundedUSer = users.find((element) => element.id === id);
      if (!foundedUSer) res.end("Not Found");
      
      req.on("data", (chunk) => {
        let updatedUser = JSON.parse(chunk);
        foundedUSer.name = updatedUser.name;
        sendRes(res, 200, users);
      });


  } else if (method == "DELETE" && url.startsWith("/users/")) {
    let id = parseInt(url.split("/")[2]);
    users = users.filter(element => element.id != id)

    sendRes(res, 200, users)
}
  // sendRes(res, 400, users);
});

server.listen(3000, function () {
  console.log("Server 'USERS' is running");
});
