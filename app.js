const getFiles = require("./js-api/get-files");
const filterFiles = require("./js-api/filter-files");
const allFiles = require("./js-api/all-files");

let input = process.argv[2];

// getFiles(input, (err, content) => {
//     if (err) console.log(err)
//     else console.log(typeof content);
// });

const print = async (callback) => {
  const files = await callback;
  console.log(files);
};

print(getFiles(input));

//console.log(filterFiles(["msdiffn.md", "ldskbhgk.js", "kdfjbgrosif.txt", "lksdfibholfi.md"]))
