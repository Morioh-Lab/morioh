"use strict";

var Hapi = require("@hapi/hapi"),
    fs = require('fs');

(async () => {

    var server = Hapi.server(config.www);

    await require("./register")(server);

    await server.register([
        { plugin: require("@hapi/inert") }

    ]);

    server.route([

        {
            method: 'GET',
            path: '/js/{file*}',
            options: {
                auth: false
            },
            handler: {
                directory: {
                    path: './js'
                }
            }
        },
        {
            method: 'GET',
            path: '/css/{file*}',
            options: {
                auth: false
            },
            handler: {
                directory: {
                    path: './css'
                }
            }
        },

        {
            method: "GET",
            path: "/{p*}",
            options: {
                auth: false
            },
            handler: (request, h) => {
                return fs.readFileSync('./index.html');
            }
        },
    ]);


    console.log("Worker %s started and running at: %s", process.pid, server.info.uri);


})();

