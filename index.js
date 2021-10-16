const checkInput = require("./lib/js-api/check-input");
const getFiles = require("./lib/js-api/get-files");
const filterFiles = require("./lib/js-api/filter-files");
const getLinks = require("./lib/js-api/get-links");
const verify = require("./lib/js-api/verify");

let input = process.argv[2];

const mdLinks = async (input) => {
  const paths = checkInput(input);
  let files = undefined;
  if (paths.length == 2) files = getFiles(paths[1], paths[0]);
  else files = [paths[0]];
  const mdFiles = filterFiles(files);
  let linksInfo = [];
  mdFiles.forEach((file) => linksInfo.push(...getLinks(file)));
  const links = linksInfo.map((object) => object.href);
  const stats = Promise.all(
    links.map((link) =>
      verify(link)
        .then((response) => {
          if (response.status===200) return { status: response.status, message: "ok" }
          else return { status: response.status, message: "fail" };
        })
        .catch((err) => {
          const obj = { status: err.response.status, message: "fail" }
          return obj
        })
    )
  )
  linksInfo = Promise.all(linksInfo.map(async (obj, index) => {
    const properties = await stats;
    return Object.assign(obj, properties[index]);
  }));
  return await linksInfo
};

/*
const print = async () => {
  console.log(await mdLinks(input));
};

print();
*/