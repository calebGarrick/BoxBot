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

import * as https from 'https';
import * as express from 'express';
import * as dotenv from 'dotenv';
import * as env from 'env-var';
import * as fs from 'fs';

import {initMainConfig} from './config/main-config';
import {initRouteConfig} from './config/route-config';

dotenv.config();

const privateKeyPath = env.get('PRIVATE_KEY').asString();
const certPath = env.get('CERTIFICATE').asString();

const certificate = fs.readFileSync(certPath, 'utf8');
const privateKey = fs.readFileSync(privateKeyPath,'utf8');
const credentials = { key: privateKey, cert: certificate };

const app = express();
const PORT:number = env.get('PORT').asPortNumber() || 5000;

initMainConfig(app);
initRouteConfig(app);

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(PORT);

app.listen(PORT,()=>{
    console.log('Listening...');
});







