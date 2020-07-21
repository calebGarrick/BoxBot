"use strict";
exports.__esModule = true;
exports.initMainConfig = void 0;
var bodyParser = require("body-parser");
function initMainConfig(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
}
exports.initMainConfig = initMainConfig;
;
