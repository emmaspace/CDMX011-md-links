const checkInput = require("./lib/js-api/check-input");
const getFiles = require("./lib/js-api/get-files");
const filterFiles = require("./lib/js-api/filter-files");
const getLinks = require("./lib/js-api/get-links");

let input = process.argv[2];

const mdLinks = (input) => {
  const paths = checkInput(input);
  let files = undefined;
  if (paths.length == 2) files = getFiles(paths[1], paths[0])
  else files = [paths[0]];
  const mdFiles = filterFiles(files);
  const links = [];
  mdFiles.forEach((file) => links.push(...getLinks(file)));
  return links
}

console.log(mdLinks(input));


