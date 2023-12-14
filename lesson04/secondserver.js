const http = require('http');


const port = 3000;
const hostname = '127.0.0.1';
// http.createServer((req, res) => {

//     res.end("Hello, I am your first server");
// }).listen(3000);

const myserver = http.createServer((req, res) => {
    //set status code : 202
    res.writeHead(202, {'content-type': 'text/html'});
    res.write("<h1>Hello, I am your second server</h1>");
    res.end();
});

// myserver.listen(3000, ()=> {
//     console.log("Server is runnning....");
// });

myserver.listen(port, hostname, ()=> {
    console.log(`Server is runnning successfully at http://${hostname}:${port}`);
});

