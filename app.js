const express =require("express");
const http=require("http");
const socketio=require("socket.io");
const path=require("path");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Set up EJS as the view engine
app.set("view engine", "ejs");

// Use app.use to serve static files from the "public" directory
app.set(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello");
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
