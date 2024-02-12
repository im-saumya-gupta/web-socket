const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;
const path = require("path");
const {Server} = require('socket.io');
const io = new Server(server);

app.use(express.static(path.resolve("./public")));

app.get("/",(req,res)=>{
    res.status(200).sendFile("/public/index.html");
});

io.on('connection',(socket)=>{
    socket.on("user-message",(message)=>{
        io.emit("message",message);
    });
//    console.log(`a new user connected with `,socket.id)
});

server.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
});