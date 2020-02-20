import { Router } from 'express';

import userController from './app/controllers/UserController';
import sessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', sessionController.store);
routes.post('/users', userController.store);

routes.use(authMiddleware);

routes.put('/users', userController.update);

export default routes;
