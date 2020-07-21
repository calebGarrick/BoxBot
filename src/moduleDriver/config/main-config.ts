import * as bodyParser from 'body-parser';

export function initMainConfig(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
};