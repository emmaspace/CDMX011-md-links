const fs = require("fs");
const path = require("path");

const getFiles = (input) => {
  const arr = [];
  let absPath = path.resolve(input);
  if (fs.statSync(absPath).isDirectory()) {
    const list = fs.readdirSync(absPath);
    list.forEach((element) => {
      if (fs.statSync(path.join(absPath, element)).isDirectory()) {

        arr.push(...getFiles(path.join(absPath, element)));
      } else {
        arr.push(path.join(absPath, element));
      }
    });
  } else  {
    arr.push(absPath);
  }
  return arr;
};

module.exports = getFiles;
