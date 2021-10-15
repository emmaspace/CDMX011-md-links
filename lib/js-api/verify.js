const axios = require("axios");
//Recibe un arreglo de objetos; propiedad necesaria: href

module.exports = (link) => {
  
  
  return axios
    .get(link)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    })
    // .then(function () {
    //   // always executed
    // });
};
