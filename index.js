

const http = require('http')
const url = require("url")

const app = {};

app.config = {
    port:3000
};

app.createServer= ()=>{
    const server = http.createServer(app.handleReqRes)
    server.listen(app.config.port,()=>{
        console.log("Server 3000 is running")
    })
}
// Handle request reponse

app.handleReqRes = (req,res) =>{
    // request handling
    // request handling
    const parsedUrl = url.parse(req.url,true);
    console.log(parsedUrl)
    res.end("Hello world2")
}

// Start The server

app.createServer();
