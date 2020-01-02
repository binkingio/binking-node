var binking = require("binking-js");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
binking._XMLHttpRequest = XMLHttpRequest;
module.exports = binking;
