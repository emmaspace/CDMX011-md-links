const getFiles = require("../lib/js-api/get-files");

describe("getFiles", () => {
  it("should be a function", () => {
    expect(typeof getFiles).toBe("function");
  });
  const output = [
    "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/.DS_Store",
    "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/Readme.md",
    "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/Readme2.md",
    "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/ReadmeData.md",
    "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/chunches.js",
    "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/prueba-sin-md/hola.js",
    "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/prueba2/.DS_Store",
    "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/prueba2/Readme-gym.md",
    "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/prueba2/Readme.md",
    "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/prueba2/Readme2.md",
    "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/prueba2/mas-chunches.js",
    "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/prueba2/prueba3/.DS_Store",
    "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/prueba2/prueba3/Readme.md",
    "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/prueba2/prueba3/ReadmeRed.md",
    "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/prueba2/prueba3/hola.js",
    "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/prueba2/prueba3/prueba4/Readme.md",
    "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/prueba2/prueba3/prueba4/Readme2.md",
    "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/prueba2/prueba3/prueba4/ReadmeLab.md",
  ];
  it("should return all the files in the directory", () => {
    expect(getFiles("prueba")).toEqual(output);
  });
  it("should return the same file", () => {
    expect(getFiles("prueba/Readme.md")).toEqual(
      ["/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/Readme.md"]
    );
  });
});
