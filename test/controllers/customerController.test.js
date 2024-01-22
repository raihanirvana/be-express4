import request from 'supertest';
import app from '../../src/app';
import customerModel from '../../src/models/customerModel';
import CustomerNotExistError from '../../src/errors/CustomerNotExistError';

jest.mock('../../src/models/customerModel', () => ({
  create: jest.fn(),
  findOne: jest.fn(),
  findById: jest.fn(),
  save: jest.fn()
}));

describe('customerController', () => {
  describe('POST /customers', () => {
    it('should return response and status code 201 created when given a new name customer', async () => {
      const newCustomer = {
        name: 'Raihan'
      };
      const expectedResult = {
        id: '1',
        name: 'Raihan',
        wallet: {
          balance: 0
        },
        createdAt: '1',
        updatedAt: '1'
      };
      customerModel.create.mockResolvedValue(expectedResult);

      const { body } = await request(app).post('/customers').send(newCustomer).expect(201);

      expect(body).toEqual(expectedResult);
    });

    it('should throw error JOI and status code 400 created when given unvalid body', async () => {
      const newCustomer = {
        name: 123
      };
      const expectedResult = '"name" must be a string';

      const { body } = await request(app).post('/customers').send(newCustomer).expect(400);

      expect(body).toEqual(expectedResult);
    });
  });
  describe('GET /customers', () => {
    it('should return response and status code 200 success when try to get all list of customer', async () => {
      const expectedResult = {
        id: '1',
        name: 'Raihan'
      };
      customerModel.findOne.mockResolvedValue(expectedResult);

      const { body } = await request(app).get('/customers/1').expect(200);

      expect(body).toEqual(expectedResult);
    });
  });
  describe('PUT /customers/:id', () => {
    it('should return response and status code 201 created when try to update customers', async () => {
      const expectedResult = {
        id: '1',
        name: 'Raihan'
      };
      const name = {
        name: 'Raihan'
      };
      customerModel.findOne.mockReturnThis();
      customerModel.save.mockResolvedValue(expectedResult);

      const { body } = await request(app).patch('/customers/1').send(name).expect(201);

      expect(body).toEqual(expectedResult);
    });
    it('should throw error CustomerNotExistError and status code 404 created when try to update an unexisting customer', async () => {
      const name = {
        name: 'Raihan'
      };
      const error = new CustomerNotExistError();
      const expectedResult = { message: error.message };
      customerModel.findOne.mockResolvedValue(null);

      const { body } = await request(app).patch('/customers/1').send(name).expect(404);

      expect(body).toEqual(expectedResult);
    });
  });
});
