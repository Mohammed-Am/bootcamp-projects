    const http = require('http'); 


    const server = http.createServer((req, res) => {
                
        if(req.url == '/welcome') {
                 res.setHeader("Content-Type", "application/json");
            
                 res.writeHead(200);
                 res.end(JSON.stringify({"menu": {
                        "firstCourse": "Vegetable Soup",
                        "mainCourse": "Hamburger",
                        "dessert": "Fruit salad"
                    }}));
        }else{
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`<h1>Welcome to My Server</h1>`);
        }

    });


    const port = 3000;
    server.listen(port, () => {
      console.log(`Server running at http://localhost:${port}/`);
    });

