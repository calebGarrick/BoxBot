## Module Driver

___

This is an HTTPS [express](https://www.npmjs.com/package/express) server which listens for several get routes, and sends the appropriate signal to pins on the raspberry pi via [rpi-gpio](https://www.npmjs.com/package/rpi-gpio).

It requires a self-signed certificate, which I generated using [this tutorial](https://stackoverflow.com/questions/10175812/how-to-create-a-self-signed-certificate-with-openssl).

### Routes

**"/" and "/help"**: Display possible commands or command categories. The route tested successfully however is not implemented.

**"/open" and "/close"**: Send a signal over pin 3, so long as the door isn't already opened/closed.

**"/lock" and "/unlock"**: Send a signal over pin 5, so long as the door isn't already locked/unlocked.
