const filterFiles = require("../lib/js-api/filter-files");

describe("filterFiles", () => {
    it("should be a function", () => {
        expect(typeof filterFiles).toBe("function");
    });
    const input = [
      "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/.DS_Store",
      "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/README2.md",
      "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/chunches.js",
      "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/prueba2/.DS_Store",
      "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/prueba2/README2.md",
      "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/prueba2/mas-chunches.js",
      "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/prueba2/prueba3/.DS_Store",
      "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/prueba2/prueba3/README.md",
      "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/prueba2/prueba3/hola.js",
      "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/prueba2/prueba3/prueba4/README2.md",
      "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/prueba2/prueba3/prueba4/readme-lab.md",
      "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/prueba2/prueba3/prueba4/readme.md",
      "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/prueba2/prueba3/readme-red.md",
      "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/prueba2/readme-gym.md",
      "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/prueba2/readme.md",
      "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/readme-data.md",
      "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/readme.md",
    ];
    const output = [
      "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/README2.md",
      "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/prueba2/README2.md",
      "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/prueba2/prueba3/README.md",
      "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/prueba2/prueba3/prueba4/README2.md",
      "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/prueba2/prueba3/prueba4/readme-lab.md",
      "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/prueba2/prueba3/prueba4/readme.md",
      "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/prueba2/prueba3/readme-red.md",
      "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/prueba2/readme-gym.md",
      "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/prueba2/readme.md",
      "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/readme-data.md",
      "/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/prueba/readme.md",
    ];
    it("should return only markdown files", () => {
        expect(filterFiles(input)).toEqual(output);
    })
})