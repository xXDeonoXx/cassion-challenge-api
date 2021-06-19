import path from 'path';
import { Express, ErrorRequestHandler } from 'express';
import {
  RoutingControllersOptions,
  useExpressServer,
} from 'routing-controllers';

export const routes = (app: Express): void => {
  const options: RoutingControllersOptions = {
    defaultErrorHandler: false,
    validation: true,
    classTransformer: false,
    // authorizationChecker: null,
    // currentUserChecker: null,
    controllers: [path.join(__dirname, '..', '/controllers/**/*{.ts,.js}')],
  };
  useExpressServer(app, options);

  useExpressServer(app, {
    middlewares: [path.join(__dirname, '..', '/middlewares/**/*{.ts,.js}')],
  });
};
