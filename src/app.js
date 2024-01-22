import express from 'express';
import swaggerUI from 'swagger-ui-express';
import cors from 'cors';
import indexRoutes from './routes';
import CustomerController from './controllers/CustomerController';
import CustomerService from './services/CustomerService';
import customerModel from './models/customerModel';
import errorMiddleware from './middleware/errorMiddleware';
import swaggerDef from './swagger/configuration';
import TransactionController from './controllers/TransactionController';
import transactionModel from './models/transactionModel';
import TransactionService from './services/TransactionService';

const app = express();
app.use(express.json());
app.use(cors());

const createService = () => {
  const customerService = new CustomerService(customerModel);
  const transactionService = new TransactionService(transactionModel, customerService);
  return {
    customerService,
    transactionService
  };
};

const createControllers = (service) => {
  const { customerService, transactionService } = service;
  return {
    customerController: new CustomerController(customerService),
    transactionController: new TransactionController(transactionService)
  };
};

const registerDependencies = () => {
  const service = createService();
  app.locals.controllers = createControllers(service);
};

const main = async () => {
  registerDependencies();
  indexRoutes(app);
};

main();

app.use(errorMiddleware).use('/swagger-ui', swaggerUI.serve, swaggerUI.setup(swaggerDef));

export default app;
