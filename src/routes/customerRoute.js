import { Router } from 'express';
import asyncErrorHandler from '../middleware/asyncErrorHandler';
import validationMiddleware from '../middleware/validationMiddleware';
import customerSchema from '../schemas/customerValidation';

const router = Router();

const initializeRoutes = (app) => {
  const { customerController } = app.locals.controllers;
  router.post(
    '/',
    validationMiddleware(customerSchema),
    asyncErrorHandler(customerController.createCustomer)
  );
  router.get('/:id', asyncErrorHandler(customerController.getCustomer));
  router.patch(
    '/:id',
    validationMiddleware(customerSchema),
    asyncErrorHandler(customerController.updateCustomer)
  );
  return router;
};
export default initializeRoutes;
