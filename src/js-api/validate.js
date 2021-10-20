const verify = require("./verify");

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
          else
            return Object.assign(linksInfo[index], {
              status: response.status,
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
          } else err;
        })
    )
  );
