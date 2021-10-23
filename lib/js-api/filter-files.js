const path = require("path");

//Receives an array with ONLY document paths
module.exports = (files) => {
  const mdFiles = files.filter(
    (file) =>
      path.extname(file) === ".md" ||
      path.extname(file).toLowerCase() === ".markdown"
  );
  return mdFiles;
};
