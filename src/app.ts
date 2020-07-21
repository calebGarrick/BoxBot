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

import * as express from 'express';

const app = express();

import {initMainConfig} from './config/main-config';
import {initRouteConfig} from './config/route-config';

initMainConfig(app);
initRouteConfig(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);







