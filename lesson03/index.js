// const os = require('os');

// //console.log(os);
// console.log(os.userInfo());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.totalmem());
// console.log(os.freemem());

// console.log(__dirname);
// console.log(__filename);

const path = require('path');
console.log(path);

const abc = path.extname("index.html");
console.log(abc);

//const joinName = path.join(__dirname + "/views");
const joinName = path.join(__dirname + "/../views");
console.log(joinName);