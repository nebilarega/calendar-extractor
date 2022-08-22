const proxy = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(proxy("/api/steps", { target: "http://localhost:3000/api/steps" }));
  app.use(
    proxy("/api/create-tokens", {
      target: "http://localhost:3000/api/create-tokens",
    })
  );
  app.use(
    proxy("/api/create-token-v2", {
      target: "http://localhost:3000/api/create-token-v2",
    })
  );
  app.use(proxy("/api/steps", { target: "http://localhost:3000/api/steps" }));
  app.use(proxy("/", { target: "http://localhost:3000/api/steps" }));
};
