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
var https = require("https");
var express = require("express");
var dotenv = require("dotenv");
var env = require("env-var");
var fs = require("fs");
var main_config_1 = require("./config/main-config");
var route_config_1 = require("./config/route-config");
dotenv.config();
var privateKeyPath = env.get('PRIVATE_KEY').asString();
var certPath = env.get('CERTIFICATE').asString();
var certificate = fs.readFileSync(certPath, 'utf8');
var privateKey = fs.readFileSync(privateKeyPath, 'utf8');
var credentials = { key: privateKey, cert: certificate };
var app = express();
var PORT = env.get('PORT').asPortNumber() || 5000;
main_config_1.initMainConfig(app);
route_config_1.initRouteConfig(app);
var httpsServer = https.createServer(credentials, app);
httpsServer.listen(PORT);
app.listen(PORT, function () {
    console.log('Listening...');
});
