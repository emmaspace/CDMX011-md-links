const axios = require("axios").default;

module.exports = async (link) => {
  try {
    const response = await axios.get(link);
    return response;
  } catch (error) {
    if (error.response)
      return error.response;
    else
      // no tienen status, ver si les puedo asignar un 404
      return error;
  }
};
