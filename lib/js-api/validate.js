const axios = require("axios").default;

const verify = (link) =>
  axios
    .get(link)
    .then((res) => res)
    .catch((err) => err);

module.exports = (links, linksInfo) => 
  Promise.all(
    links.map((link, index) =>
      verify(link)
        .then((response) => {
          if (response.status === 200)
            return Object.assign(linksInfo[index], {
              status: response.status,
              message: "ok",
            });
          else if (response.status)
            return Object.assign(linksInfo[index], {
              status: response.status,
              message: "fail",
            });
          else
            return Object.assign(linksInfo[index], {
              status: "444",
              message: "fail",
            });
        })
        .catch((err) => {
          if (err.response) {
            const obj = Object.assign(linksInfo[index], {
              status: err.response,
              message: "fail",
            });
            return obj;
          } else {
            const obj = Object.assign(linksInfo[index], {
              status: "444",
              message: "fail",
            });
            return obj;
          }
        })
    )
  );
  