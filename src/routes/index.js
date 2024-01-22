import { Router } from 'express';
import customerRoute from './customerRoute';
import transactionRoute from './transactionRoute';

const router = Router();

const indexRoutes = (app) => {
  app.use('/', router);
  router.use('/customers', customerRoute(app));
  router.use('/wallet', transactionRoute(app));
};

export default indexRoutes;
