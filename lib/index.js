const getFiles = require("./js-api/get-files");
const filterFiles = require("./js-api/filter-files");
const getLinks = require("./js-api/get-links");
const request = require("./js-api/validate");

const mdLinks = (input, validate = false, stats = false) =>
  new Promise((resolve, reject) => {
    let files = getFiles(input);
    const mdFiles = filterFiles(files);
    if (mdFiles.length === 0)
      reject(new Error("There are no markdown files in this directory or in any nested directories"));
    const info = [];
    mdFiles.forEach((file) => {
      const fileLinks = getLinks(file);
      if (fileLinks.length > 0) info.push(...fileLinks);
    });
    if (info.length === 0) reject(new Error("No links were found"));
    const links = info.map((object) => object.href);
    if (validate === false && stats === false) resolve(info);
    else if (validate === false && stats === true) {
      resolve(info);
    } else if (validate === true && stats === false) {
      resolve(request(links, info));
    } else if (validate === true && stats === true) {
      resolve(request(links, info));
    }
    reject(new Error("Something went wrong, please try with another path"));
  });

module.exports = mdLinks;
