import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import MeetupController from './app/controllers/MeetupController';
import UserMeetupController from './app/controllers/UserMeetupController';
import RegisterController from './app/controllers/RegisterController';

import authMiddleware from './app/middlewares/auth';

import validatorUserStore from './app/validators/UserStore';
import validatorUserUpdate from './app/validators/UserUpdate';
import validatorSessionStore from './app/validators/SessionStore';
import validatorMeetupStore from './app/validators/MeetupStore';
import validatorRegistrationStore from './app/validators/RegistrationStore';

const routes = new Router();
const upload = multer(multerConfig);

/**
 * Routes without token validation
 */
routes.post('/users', validatorUserStore, UserController.store);
routes.post('/sessions', validatorSessionStore, SessionController.store);
routes.get('/meetups', MeetupController.index);

routes.use(authMiddleware);

/**
 * Routes with token validation
 */
routes.put('/users', validatorUserUpdate, UserController.update);
routes.post('/files', upload.single('file'), FileController.store);
routes.get('/usermeetups', UserMeetupController.index);
routes.get('/usermeetups/:id', UserMeetupController.index);
routes.post('/usermeetups', validatorMeetupStore, UserMeetupController.store);
routes.put(
  '/usermeetups/:id',
  validatorMeetupStore,
  UserMeetupController.update
);
routes.delete('/usermeetups/:id', UserMeetupController.delete);
routes.post(
  '/registrations',
  validatorRegistrationStore,
  RegisterController.store
);
routes.get('/registrations', RegisterController.index);
routes.delete('/registrations/:id', RegisterController.delete);

export default routes;
