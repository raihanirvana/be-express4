import { Router } from 'express';
import asyncErrorHandler from '../middleware/asyncErrorHandler';
import validationMiddleware from '../middleware/validationMiddleware';
import transactionValidation from '../schemas/transactionValidation';

const router = Router();

const initializeRoutes = (app) => {
  const { transactionController } = app.locals.controllers;
  router.post(
    '/:id/transactions',
    validationMiddleware(transactionValidation),
    asyncErrorHandler(transactionController.create)
  );
  router.get('/:id/transactions', asyncErrorHandler(transactionController.fetchById));
  return router;
};
export default initializeRoutes;
