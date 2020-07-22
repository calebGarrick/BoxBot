## Module Driver

___

This is an [express](https://www.npmjs.com/package/express) server which listens for several get routes, and sends the appropriate signal to pins on the raspberry pi via [rpi-gpio](https://www.npmjs.com/package/rpi-gpio).

### Routes

**"/" and "/help"**: Display possible commands or command categories. The route tested successfully however is not implemented.

**"/open" and "/close"**: Send a signal over pin 3, so long as the door isn't already opened/closed.

**"/lock" and "/unlock"**: Send a signal over pin 5, so long as the door isn't already locked/unlocked.