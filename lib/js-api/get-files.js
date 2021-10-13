const fs = require("fs");


const getFiles = (dirPath, absolute) => {
  const paths = [];
  const content = fs.readdirSync(absolute + dirPath);

  if (content.length > 0) {
    content.forEach((element) => {
      if (element.includes(".") === true)
        paths.push(absolute + dirPath + "/" + element);
      else paths.push(...getFiles(element, absolute + dirPath + "/"));
    });
  }
  return paths;
};

module.exports = getFiles;
