"use strict";
exports.__esModule = true;
exports.DoorModule = void 0;
var rpi_gpio_1 = require("rpi-gpio");
var pinList = {
    OPEN: {
        channel: 3,
        state: false
    },
    LOCK: {
        channel: 5,
        state: false
    }
};
var readSignal = function (pinChannel) {
    rpi_gpio_1.promise.setup(pinChannel, rpi_gpio_1.promise.DIR_IN).then(function () {
        console.log('Reading value from', pinChannel);
        return rpi_gpio_1.promise.read(pinChannel);
    })["catch"](function (err) {
        throw Error('Pin setup error :' + pinChannel);
    });
};
var writeSignal = function (pinChannel, state) {
    rpi_gpio_1.promise.setup(pinChannel, rpi_gpio_1.promise.DIR_OUT).then(function () {
        console.log('Setting ', pinChannel, ' to ', state);
        return rpi_gpio_1.promise.write(pinChannel, state);
    })["catch"](function (err) {
        throw Error('Pin setup error ' + pinChannel);
    });
};
var setState = function (pin, state) {
    var readValue = readSignal(pin.channel);
    if (readValue === state)
        throw Error('Door state matches desired state');
    writeSignal(pin.channel, state);
    pin.state = state;
};
exports.DoorModule = {
    open: function () {
        setState(pinList.OPEN, true);
    },
    close: function () {
        setState(pinList.OPEN, false);
    },
    lock: function () {
        setState(pinList.LOCK, true);
    },
    unlock: function () {
        setState(pinList.LOCK, false);
    }
};
