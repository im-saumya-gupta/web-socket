const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;
const path = require("path");
const exp = require('constants');


app.use(express.static(path.resolve("./public")));

app.get("/",(req,res)=>{
    res.status(200).sendFile("/public/index.html")
})

server.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})