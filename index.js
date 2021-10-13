const getFiles = require("./lib/js-api/get-files");
const path = require("path");
// const filterFiles = require("./lib/js-api/filter-files");
// const allFiles = require("./lib/js-api/all-files");

let input = process.argv[2];

const print = (callback) => {
  console.log(callback);
};

print(
  getFiles(
    input,
    path
      .resolve(input)
      .substr(0, path.resolve(input).length - input.length)
  )
);

//module.exports = print();

