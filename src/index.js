const checkInput = require("./js-api/check-input");
const getFiles = require("./js-api/get-files");
const filterFiles = require("./js-api/filter-files");
const getLinks = require("./js-api/get-links");
const request = require("./js-api/validate");

const mdLinks = (input, cwd, validate = false, stats = false) =>
  new Promise((resolve, reject) => {
    const paths = checkInput(input);
    let files = [];
    if (paths.length == 2) files = getFiles(paths[1], paths[0]);
    else files = [paths[0]];
    const mdFiles = filterFiles(files);
    const info = [];
    mdFiles.forEach((file) => {
      const fileLinks = getLinks(file);
      if (fileLinks.length > 0) info.push(...fileLinks);
    });
    const links = info.map((object) => object.href);
    const allInfo = request(links, info);
    if (validate === false && stats === false)
      resolve(info);
    else if (validate === false && stats === true) {
      resolve(info);
    } else if (validate === true && stats === false) {
      resolve(allInfo);
    } else if (validate === true && stats === true) {
      resolve(allInfo);
    }
    reject(new Error("Something went wrong, please try with another path"));
  });

module.exports = mdLinks;
