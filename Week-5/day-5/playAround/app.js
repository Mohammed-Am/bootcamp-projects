/*
const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('<h1>Home page</h1>')
    } else if (req.url === '/about') {
        res.end('<h1>About page</h1>')
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html'
        })
        res.end('<h1>Page not found</h1>')
    }    
})

server.listen(5000, 'localhost', () => {
    console.log('Server is listening at localhost on port 5000')
})
*/
/*
const http = require('http'); 
const server = http.createServer((req, res) => {
    //1.
    res.statusCode = 200;
    //2.
    res.setHeader('Content-Type', 'text/html');
    //3
    res.end('k3ko3');
});

server.listen(5000); 
console.log('Node.js web server at port 5000 is running..')
*/

const http = require('http'); 
const server = http.createServer((req, res) => {  
    //check the URL of the current request
    //check if the request URL is equal to /welcome.
    if (req.url == '/welcome') { 
        // 1. inform the client that we send a JSON response in the header with the appropriate content type.
        res.setHeader("Content-Type", "application/json");
        //2. 
       // res.writeHead(200);
       // res.end(JSON.stringify({ message: "Welcome New User"}));
        // OR
         res.write(JSON.stringify({ message: "Welcome New User"}));  
         res.end();  
    } else {
         res.end("Another page");  
    }
});
server.listen(5000);
console.log('Node.js web server at port 5000 is running..')