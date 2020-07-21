"use strict";
/**
 * Caleb Garrick
 * BoxBot
 *
 * This file starts the server and configs for the Box
 *
 * I modeled the configs after LearnDB
 * https://github.com/DASSL/LearnDB/blob/dev/src/app.js
 *
 */
exports.__esModule = true;
var express = require("express");
var app = express();
var main_config_1 = require("./config/main-config");
var route_config_1 = require("./config/route-config");
main_config_1.initMainConfig(app);
route_config_1.initRouteConfig(app);
var PORT = process.env.PORT || 5000;
app.listen(PORT);
