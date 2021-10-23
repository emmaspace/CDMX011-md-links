const getLinks = require("../lib/js-api/get-links");

describe("getLinks", () => {
  it("should be a function", () => {
    expect(typeof getLinks).toBe("function");
  });
  const output = [
    {
      href: "https://curriculum.laboratoria.la/es/topics/css/01-css/02-boxmodel-and-display",
      text: "Box Model &amp; Display",
      file: "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/readme.md",
    },
    {
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model",
      text: "Introduction to the CSS box model - MDN",
      file: "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/readme.md",
    },
    {
      href: "https://developer.mozilla.org/pt-BR/docs/Web/CSS/display",
      text: "CSS display - MDN",
      file: "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/readme.md",
    },
    {
      href: "https://css-tricks.com/almanac/properties/d/display/",
      text: "display - CSS Tricks",
      file: "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/readme.md",
    },
  ];
  it("should return all the links in the file in an object like this {href, text, file}", () => {
    expect(
      getLinks(
        "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/readme.md"
      )
    ).toEqual(output);
  });
});
