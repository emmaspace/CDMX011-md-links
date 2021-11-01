const validate = require("../lib/js-api/validate");

//prueba/Readme.md
describe("validte", () => {
  it("should be a function", () => {
    expect(typeof validate).toBe("function");
  });
  const links = [
    "https://curriculum.laboratoria.la/es/topics/css/01-css/02-boxmodel-and-display",
    "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model",
    "https://developer.mozilla.org/pt-BR/docs/Web/CSS/display",
    "https://css-tricks.com/almanac/properties/d/display/",
  ];
  const objects = [
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
  const output = [
    {
      href: "https://curriculum.laboratoria.la/es/topics/css/01-css/02-boxmodel-and-display",
      text: "Box Model &amp; Display",
      file: "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/Readme.md",
      status: 200,
      message: "ok",
    },
    {
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model",
      text: "Introduction to the CSS box model - MDN",
      file: "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/Readme.md",
      status: 200,
      message: "ok",
    },
    {
      href: "https://developer.mozilla.org/pt-BR/docs/Web/CSS/display",
      text: "CSS display - MDN",
      file: "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/Readme.md",
      status: 200,
      message: "ok",
    },
    {
      href: "https://css-tricks.com/almanac/properties/d/display/",
      text: "display - CSS Tricks",
      file: "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/Readme.md",
      status: 200,
      message: "ok",
    },
  ];
  it("should return an array of objects with href, text, file, status, message", (done) => {
    validate(links, objects).then((res) => {
      expect(res).toEqual(output);
      done();
    });
    /* return validate(links, objects).then((data) => {
      // console.log(data)
      expect(data).toStrictEqual(output);
    }); */
  });
});
