const fs = require("fs");
const path = require("path");
const { cwd } = require("process");
const util = require("util");

module.exports = (input) => {
  // ---------------------------------
  // Ver si esta parte la pongo en otra función
  if (input === undefined) input = cwd();
  if (path.isAbsolute(input) === false) input = path.resolve(input);
  // ------------------------------------
  let files = new Promise((resolve, reject) => {
    fs.readdir(input, (err, content) => {
      if (err && err["errno"] === -20) resolve([input]);
      else if (err && err["errno"] === -2)
        reject(new Error("There's no such file or directory"));
      else if (err) return reject(err);
      else resolve(content);
    });
  })
    .then((files) => {
      return files;
    })
    .catch((err) => console.log(err));
  
  return files
};

