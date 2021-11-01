const mdLinks = require("../lib/index");

describe("mdLinks", () => {
  it("should be a function", () => {
    expect(typeof mdLinks).toBe("function");
  });
  it("should fail with an error", () => {
    return expect(mdLinks("prueba/prueba-sin-md")).rejects.toThrow(
      "There are no markdown files in this directory or in any nested directories"
    );
  });
  it("should fail with an error", () => {
    return expect(mdLinks("prueba/prueba2/Readme.md")).rejects.toThrow(
      "No links were found"
    );
  });
  const output = [
    {
      href: "https://curriculum.laboratoria.la/es/topics/css/01-css/02-boxmodel-and-display",
      text: "Box Model &amp; Display",
      file: "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/Readme.md",
    },
    {
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model",
      text: "Introduction to the CSS box model - MDN",
      file: "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/Readme.md",
    },
    {
      href: "https://developer.mozilla.org/pt-BR/docs/Web/CSS/display",
      text: "CSS display - MDN",
      file: "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/Readme.md",
    },
    {
      href: "https://css-tricks.com/almanac/properties/d/display/",
      text: "display - CSS Tricks",
      file: "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/Readme.md",
    },
  ];
  it("should resolve to the info of the links without validation", () => {
    return expect(mdLinks("prueba/Readme.md")).resolves.toEqual(output);
  });
  it("should resolve to the info of the links without validation", () => {
    return expect(mdLinks("prueba/Readme.md", false, true)).resolves.toEqual(
      output
    );
  });
  const outputVal = [
    {
      file: "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/Readme.md",
      href: "https://curriculum.laboratoria.la/es/topics/css/01-css/02-boxmodel-and-display",
      message: "ok",
      status: 200,
      text: "Box Model &amp; Display",
    },
    {
      file: "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/Readme.md",
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model",
      message: "ok",
      status: 200,
      text: "Introduction to the CSS box model - MDN",
    },
    {
      file: "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/Readme.md",
      href: "https://developer.mozilla.org/pt-BR/docs/Web/CSS/display",
      message: "ok",
      status: 200,
      text: "CSS display - MDN",
    },
    {
      file: "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/Readme.md",
      href: "https://css-tricks.com/almanac/properties/d/display/",
      message: "ok",
      status: 200,
      text: "display - CSS Tricks",
    },
  ];
  it("should resolve to the info of the links with validation", (done) => {
    expect.assertions(1);
    mdLinks("prueba/Readme.md", true, false).then((res) => {
      expect(res).toEqual(outputVal);
      done();
    });
  }, 30000);
});

// https://github.com/babel/babel/issues/8829
