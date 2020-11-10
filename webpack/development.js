var docs = require('./docs');
var ui = require('./ui');
// var helm = require('./helm');
var server = require('./server');
// var tool = require('./tool');

module.exports = function (env) {
  return [server, ui, docs];
}
