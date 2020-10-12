import { Router } from 'express';
import appointmentsRouter from './appointments.routes';
import userRouter from './user.routes';
import authRouter from './auth.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/user', userRouter);
routes.use('/auth', authRouter);

export default routes;