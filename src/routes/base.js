"use strict";
exports.__esModule = true;
exports.baseRoutes = void 0;
var door_1 = require("../modules/door");
var express_1 = require("express");
var router = express_1.Router();
var help = function (req, res) {
    return res.send("Sample Help");
};
router.get('/', help);
router.get('/help', help);
router.get('/open', function (req, res) {
    try {
        door_1.DoorModule.open();
    }
    catch (err) {
        console.log(err.message);
        return res.status(500).send({ error: err.message });
    }
    return res.send('Door Opened');
});
router.get('/close', function (req, res) {
    try {
        door_1.DoorModule.close();
    }
    catch (err) {
        console.log(err.message);
        return res.status(500).send({ error: err.message });
    }
    return res.send('Door Closed');
});
router.get('/lock', function (req, res) {
    try {
        door_1.DoorModule.lock();
    }
    catch (err) {
        console.log(err.message);
        return res.status(500).send({ error: err.message });
    }
    return res.send('Door Locked');
});
router.get('/unlock', function (req, res) {
    try {
        door_1.DoorModule.unlock();
    }
    catch (err) {
        console.log(err.message);
        return res.status(500).send({ error: err.message });
    }
    return res.send('Door Unlocked');
});
exports.baseRoutes = router;
