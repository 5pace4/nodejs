const http = require('http');


const port = 3000;
const hostname = '127.0.0.1';
// http.createServer((req, res) => {

//     res.end("Hello, I am your first server");
// }).listen(3000);

const myserver = http.createServer((req, res) => {

    res.end("Hello, I am your first server");
});

// myserver.listen(3000, ()=> {
//     console.log("Server is runnning....");
// });

myserver.listen(port, hostname, ()=> {
    console.log(`Server is runnning at http://${hostname}:${port}`);
});