const getLinks = require("./lib/js-api/get-links");
// const path = require("path");
// const filterFiles = require("./lib/js-api/filter-files");

let input = process.argv[2];

const print = (callback) => {
  console.log(callback);
};

/*print(
  getFiles(
    input,
    path
      .resolve(input)
      .substr(0, path.resolve(input).length - input.length)
  )
);*/

print(getLinks(input));

