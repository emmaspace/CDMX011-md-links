const fs = require("fs");

const path = require("path");

const {
  cwd
} = require("process");

const getFiles = async input => {
  // ---------------------------------
  // Ver si esta parte la pongo en otra función[]
  if (input === undefined) {
    console.log(input);
    return console.log("input please");
  } //input = cwd();


  if (path.isAbsolute(input) === false) input = path.resolve(input); // ------------------------------------

  const array = [];
  const files = new Promise((resolve, reject) => {
    fs.readdir(input, (err, content) => {
      if (err && err["errno"] === -20) resolve(input);else if (err && err["errno"] === -2) reject(new Error("There's no such file or directory"));else if (err) reject(err);else {
        content = content.map(element => input + "/" + element);
        resolve(content);
      }
    });
  });
  await files.then(content => {
    // if (content.length > 0 && typeof content !== "string") {
    //   //console.log(content);
    //   content.forEach((element) => getFiles(element));
    // } else
    return content;
  }).catch(err => console.log(err));

  if (typeof files !== "string") {
    const content = await files;
    console.log("No es string" + content);
    content.forEach(async file => await getFiles(file));
  } else {
    //array.push(files);
    console.log(typeof files);
    console.log(files);
    console.log("else");
  }

  ; //return array;
};

module.exports = getFiles;