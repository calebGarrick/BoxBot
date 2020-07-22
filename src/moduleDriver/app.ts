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
import * as dotenv from 'dotenv';
import * as env from 'env-var';

import {initMainConfig} from './config/main-config';
import {initRouteConfig} from './config/route-config';

dotenv.config();

const app = express();
const PORT:number = env.get('PORT').asPortNumber() || 5000;

initMainConfig(app);
initRouteConfig(app);

app.listen(PORT,()=>{
    console.log('Listening...');
});







