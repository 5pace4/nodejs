const fs = require('fs');

// console.log(fs);

fs.writeFile('demo1.txt', "This is a sample text", function(err) {
    if(err) {
        console.log(err);
    }
    else {
        console.log("successful");
    }
});

// (filename, filedata, callback function)

fs.appendFile('demo1.txt', "I am 23 years old.", (err) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log("successful");
    }
});

fs.readFile('demo1.txt', 'utf-8', (err, data) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
});

fs.rename('demo1.txt', 'demo.txt', (err) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log('successful');
    }
});

fs.exists('demo.txt', (result) => {
    if(result) {
        console.log('found');
    }
    else {
        console.log('Not Found!');
    }
})
fs.unlink('demo.txt', (err) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log('delete');
    }
})