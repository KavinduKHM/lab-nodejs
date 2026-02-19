console.log("Hello Node.js Lab!");

const fs = require('fs');

fs.readFile('ReadFile.txt', 'utf8', function (err, data) {
  if (err) throw err;
  console.log(data);
});



const fs = require('fs');

fs.writeFile('file.txt', 'Hello World!', function (err) {
  if (err) throw err;
  console.log('File saved!');
});
