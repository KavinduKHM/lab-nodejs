const myPromise = new Promise((resolve, reject) => {
  let condition = true;

  if (condition) {
    resolve('Success!');
  } else {
    reject('Failure!');
  }
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

}).on('error', (err) => {
  console.log("Error: " + err.message);
});


const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('Hello World!');
  res.end();
}).listen(8080);

console.log("Server running at http://localhost:8080");
fs.readFile('file.txt', 'utf8', function (err, data) {
  if (err) throw err;
  console.log(data);
});
