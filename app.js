const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    if(req.url === '/api/emps') {
        res.write(JSON.stringify([{id:1,name:'Name1'},{id:2,name:'Name2'}]));
    } else {
        res.write('Hello World');
    }
    res.end();
});

server.listen(3000, null, () => {
    console.log('Server running at http://localhost:3000');
});

// node app.js