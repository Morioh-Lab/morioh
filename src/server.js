"use strict";

var Hapi = require("@hapi/hapi");

(async () => {
  var server = Hapi.server({
    port: 8080,
    host: '127.0.0.1',
    router: {
      isCaseSensitive: true,
      stripTrailingSlash: true
    }
  });
  await server.register([
    { plugin: require("@hapi/inert") }
  ]);


  server.route([
    {
      method: 'GET',
      path: '/docs/{file*}',
      handler: {
        directory: {
          path: './docs'
        }
      }
    },
    {
      method: "GET",
      path: "/{p*}",
      handler: (request, h) => {
        return h.file("./docs/index.html");
      }
    }
  ]);

  await server.start();

  console.log("Worker %s started and running at: %s", process.pid, server.info.uri);


})();