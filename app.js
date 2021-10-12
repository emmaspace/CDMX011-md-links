const getFiles = require("./index");

let input = process.argv[2];

getFiles(input)
  .then((files) => console.log(files))
  .catch((err) => console.log(err));