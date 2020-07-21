import {baseRoutes} from '../routes/base';

export function initRouteConfig(app) {

  console.log(baseRoutes);
  app.use('/', baseRoutes);

};