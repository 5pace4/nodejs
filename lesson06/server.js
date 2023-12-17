const http = require('http');
const fs = require('fs');

const port = 3000;
const hostname = '127.0.0.1';
const myserver = http.createServer((req, res) => {
   
    const handleFile = (statuscode, fileLocation) => {
        fs.readFile(fileLocation, (err, data) => {
            res.writeHead(statuscode, {"content-Type" : "text/html" });
            res.write(data);
            res.end();
        });
    }
   
    if(req.url === '/home') {
         handleFile(200, './views/index.html');

        // fs.readFile("./views/index.html", (err, data) => {
        //     res.writeHead(200, {"content-Type" : "text/html" });
        //     res.write(data);
        //     res.end();
        // });
    }
    else if(req.url === '/about') {
        handleFile(200, './views/about.html');

        // fs.readFile("./views/about.html", (err, data) => {
        //     res.writeHead(200, {"content-Type" : "text/html" });
        //     res.write(data);
        //     res.end();
        // });
    }
    else if(req.url === '/contact') {
        handleFile(200, './views/contact.html');

        // fs.readFile("./views/contact.html", (err, data) => {
        //     res.writeHead(200, {"content-Type" : "text/html" });
        //     res.write(data);
        //     res.end();
        // });
    }

    else {
        handleFile(400, './views/contact.html');
    }
});

myserver.listen(port, hostname, ()=> {
    console.log(`your server is running at http://${hostname}:${port}`);
});
