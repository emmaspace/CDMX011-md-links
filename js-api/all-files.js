const getFiles = require("./get-files");
const fsPromises = require("fs").promises;
const path = require("path");

// const allPaths = [];
const allFiles = async (files) => {
  const unfiltered = await files;
//   unfiltered.forEach(async (file) => {
//     //https://code.medula.cl/article_Check-if-folder-exists-in-nodejs.html
//     if (file.includes(".")) allPaths.push(file);
//     else allPaths.push(await getFiles(file));
//   });
  console.log(unfiltered);
};

module.exports = allFiles;
