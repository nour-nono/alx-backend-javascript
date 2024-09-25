const http = require('http');

// const host = '127.0.0.1';
// const port = 1245;

// const app = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello Holberton School!');
// });

// app.listen(port, host, () => {});
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});
app.listen(1245);

module.exports = app;
