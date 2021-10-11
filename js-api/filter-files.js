const util = require("util");
const getFiles = require("./get-files");
const path = require("path");

//Receives an array with ONLY document files
module.exports = (files) => {
  const mdFiles = files.filter((file) => path.extname(file) === ".md");
  return mdFiles
};
