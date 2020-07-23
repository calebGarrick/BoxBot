# [BoxBot](https://calebgarrick.github.io/BoxBot/)
This is a repo to consolidate code relating to a wood box on my desk

### moduleDriver

This module is a server which sends signals to the appropriate pins on the raspberry pi running inside the box.

Currently it contains the door module which provides the api to open/close and lock/unlock the door of the box. I tested this with postman to make sure the routing was correct. All of the messages printed successfully, however until I receive the Pi in the mail and wire it up, I cannot truly test the `rpi-gpio` code.

### discordBot

This was added as a result of PR#1, which allows the moduleDriver to be asked via a discord bot. The rpi still has not arrived, so the testing still resulted in the pin setup errors.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.
