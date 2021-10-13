// const { cwd } = require("process");
const path = require("path");

module.exports = (input) => {
  if (input === undefined) {
    //input = cwd();
    return console.log("Please introduce a path to a file or directory");
  }
  if (input[input.length - 1] === "/") input = input.substr(0, input.length - 1);
  if (input.includes(".")) {
    if (path.isAbsolute(input) === false) {
      const absolute = path.resolve(input);
      return [
        absolute,
        path
          .resolve(input)
          .substr(0, path.resolve(input).length - input.length),
        input,
      ];
    } else {
      return [
        input,
        input.substr(0, input.lastIndexOf("/") + 1),
        input.substr(input.lastIndexOf("/") + 1, input.length - 1),
      ];
    }
  } else {
    if (path.isAbsolute(input) === false) {
      const absolute = path.resolve(input);
      return [
        path
          .resolve(input)
          .substr(0, path.resolve(input).length - input.length),
        input,
      ];
    } else {
      return [
        input.substr(0, input.lastIndexOf("/") + 1),
        input.substr(input.lastIndexOf("/") + 1, input.length - 1),
      ];
    }
  }
};

/*
Ejemplo de lo que retorna:
[
  '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md',
  '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/',
  'README.md'
]
*/

// Contar el caso en el que el input sea relativo de la carpeta donde se pone el comando a la carpeta que se quiere analizar
