import request from 'supertest';
import app from '../../src/app';
import transactionModel from '../../src/models/transactionModel';
import customerModel from '../../src/models/customerModel';

jest.mock('../../src/models/transactionModel', () => ({
  create: jest.fn(),
  find: jest.fn()
}));
jest.mock('../../src/models/customerModel', () => ({
  decreaseBalance: jest.fn(),
  increaseBalance: jest.fn(),
  findOne: jest.fn(),
  save: jest.fn()
}));

describe('transactionController', () => {
  describe('POST /transactions/:id', () => {
    it('should return response,status code 201, and decreasing the balance when try to create new transaction with deposit type', async () => {
      const requestBody = {
        description: 'bayar pinjol',
        amount: 1000,
        type: 'deposit'
      };
      const expectedResult = {
        description: '1',
        type: '1',
        date: '1'
      };

      customerModel.findOne.mockReturnThis();
      customerModel.increaseBalance.mockReturnThis();
      customerModel.save.mockResolvedValue({
        wallet: { balance: 997 },
        _id: '652e36016dec044f640bd5c9',
        name: 'wilsk',
        createdAt: '1',
        updatedAt: '1'
      });
      transactionModel.create.mockResolvedValue(expectedResult);

      const { body } = await request(app)
        .post('/wallet/1/transactions')
        .send(requestBody)
        .expect(201);

      expect(body).toEqual(expectedResult);
    });
    it('should return response,status code 201, and decreasing the balance when try to create new transaction with withdraw type', async () => {
      const requestBody = {
        description: 'bayar pinjol',
        amount: 1000,
        type: 'withdraw'
      };
      const expectedResult = {
        description: '1',
        type: '1',
        date: '1'
      };

      customerModel.findOne.mockReturnThis();
      customerModel.decreaseBalance.mockReturnThis();
      customerModel.save.mockResolvedValue({
        wallet: { balance: 997 },
        _id: '652e36016dec044f640bd5c9',
        name: 'wilsk',
        createdAt: '1',
        updatedAt: '1'
      });
      transactionModel.create.mockResolvedValue(expectedResult);

      const { body } = await request(app)
        .post('/wallet/1/transactions')
        .send(requestBody)
        .expect(201);

      expect(body).toEqual(expectedResult);
    });
  });
  describe('GET /transactions/:id', () => {
    it('should return response and status code 200 when try to fetch transaction by customer id', async () => {
      const expectedResult = [
        {
          description: '1',
          type: '1',
          amount: 1,
          date: '1'
        }
      ];
      transactionModel.find.mockResolvedValue(expectedResult);

      const { body } = await request(app).get('/wallet/1/transactions').expect(200);

      expect(body).toEqual(expectedResult);
    });
  });
});
