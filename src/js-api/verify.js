const axios = require("axios");

module.exports = (link) => {
  return axios
    .get(link)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      if (error.response) return error.response;
      else error
    })
};
