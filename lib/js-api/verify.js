const axios = require("axios");

module.exports = (link) => {
  return axios
    .get(link)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    })
};
