import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import MeetupController from './app/controllers/MeetupController';
import authMiddleware from './app/middlewares/auth';

import validatorUserStore from './app/validators/UserStore';
import validatorUserUpdate from './app/validators/UserUpdate';
import validatorSessionStore from './app/validators/SessionStore';
import validatorMeetupStore from './app/validators/MeetupStore';

const routes = new Router();
const upload = multer(multerConfig);

/**
 * Routes without token validation
 */
routes.post('/users', validatorUserStore, UserController.store);
routes.post('/sessions', validatorSessionStore, SessionController.store);

routes.use(authMiddleware);

/**
 * Routes with token validation
 */
routes.put('/users', validatorUserUpdate, UserController.update);
routes.post('/files', upload.single('file'), FileController.store);
routes.get('/meetups', MeetupController.index);
routes.post('/meetups', validatorMeetupStore, MeetupController.store);
routes.put('/meetups/:id', validatorMeetupStore, MeetupController.update);
routes.delete('/meetups/:id', MeetupController.delete);

export default routes;
