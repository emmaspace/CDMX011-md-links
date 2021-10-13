const marked = require("marked");
const fs = require("fs");

module.exports = (file) => {
  const content = fs.readFileSync(file).toString();
  const links = [];
  const render = new marked.Renderer();
  render.link = (href, title, text) => {
    if (href.startsWith("#") === false) {
      links.push({
        href: href,
        text: text,
        file: file,
      });
    }
  };
  marked(content, { renderer: render });
  return links;
};
