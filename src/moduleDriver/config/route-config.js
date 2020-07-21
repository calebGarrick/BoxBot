"use strict";
exports.__esModule = true;
exports.initRouteConfig = void 0;
var base_1 = require("../routes/base");
function initRouteConfig(app) {
    console.log(base_1.baseRoutes);
    app.use('/', base_1.baseRoutes);
}
exports.initRouteConfig = initRouteConfig;
;
