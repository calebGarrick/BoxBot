"use strict";
exports.__esModule = true;
var Discord = require("discord.js");
var dotenv = require("dotenv");
var env = require("env-var");
dotenv.config();
var client = new Discord.Client();
var defaultChannelID = env.get('DEFAULT_CHANNEL').asString();
var devID = env.get('DEV_ID').asString();
var botToken = env.get('BOT_TOKEN').asString();
// console.log('Channel ID: ', defaultChannelID, '\n', 'Dev: ', devID, '\n','BotToken: ', botToken);
client.login(botToken).then(function () {
    console.log('Login success');
    var agent = new ;
})["catch"](function (err) {
    console.log('Error:', err);
});
client.once('ready', function () {
    client.channels.fetch(defaultChannelID)
        .then(function (botChannel) {
        console.log('');
        botChannel.send("<@" + (devID || defaultChannelID) + ">I'm up!");
    })["catch"](function () {
        console.log('Did not find a channel with matching ID');
    });
});
client.on('message', function (msg) {
    if (msg.content.match('^!box open')) {
        msg.reply("Opening...");
    }
    else if (msg.content.match('^!box close')) {
        msg.reply("Closing...");
    }
    else if (msg.content.match('^!box lock')) {
        msg.reply("Lock...");
    }
    else if (msg.content.match('^!box unlock')) {
        msg.reply("Unlock...");
    }
});
