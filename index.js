const fs = require("fs");
const path = require("path");
const { cwd } = require("process");

//let input = process.argv[2];

module.exports = (input, callback) => {
  // ---------------------------------
  // Ver si esta parte la pongo en otra función
  if (input === undefined) input = cwd();
  if (path.isAbsolute(input) === false) input = path.resolve(input);
  // ------------------------------------
  fs.readdir(input, (err, content) => {
    if (err && err["errno"] === -20) callback(null, [input]);
    else if (err && err["errno"] === -2)
      return console.log("There's no such file or directory");
    else if (err) return console.log(err);
    else callback(null, content);
  });
};

/*getFiles(input, (err, content) => {
  if (err) return console.log(err);
  console.log(content);
});*/
