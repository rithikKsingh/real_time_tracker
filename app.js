const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Set up EJS as the view engine
app.set("view engine", "ejs");

// Use app.use to serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

io.on("connection", function (socket) {
    socket.on("send-location",(data)=>{
        io.emit("receive-location",{id:socket.id,...data})
    })

    socket.on("disconnect",()=>{
        io.emit("user-disconnected",socket.id);
    })
});

app.get("/", (req, res) => {
    res.render("index");
    // res.send("Hey");
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
