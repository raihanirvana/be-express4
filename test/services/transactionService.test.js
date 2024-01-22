import TransactionService from '../../src/services/TransactionService';

describe('TransactionService', () => {
  const transactionModel = {
    create: jest.fn(),
    find: jest.fn()
  };
  const customerService = {
    updateBalance: jest.fn(),
    increaseBalance: jest.fn()
  };
  describe('^createTransaction', () => {
    it('should return response and status code 201 when creating transaction', async () => {
      const expectedResult = {
        description: '1',
        type: '1',
        date: '1'
      };
      const requestBody = {
        description: 'bayar pinjol',
        amount: 1000,
        type: 'deposit'
      };
      customerService.increaseBalance.mockReturnThis();
      transactionModel.create.mockResolvedValue(expectedResult);
      const transactionService = new TransactionService(transactionModel, customerService);

      const actualResult = await transactionService.createTransaction('1', requestBody);

      expect(actualResult).toEqual(expectedResult);
    });
  });

  describe('^fetchTransaction', () => {
    it('should return list of transaction from customer when fetch transaction by customer id', async () => {
      const expectedResult = [
        {
          description: 'bayar pinjol',
          type: 'deposit',
          amount: 1000,
          date: '10/17/2023, 7:39:54 PM'
        }
      ];
      transactionModel.find.mockResolvedValue(expectedResult);
      const transactionService = new TransactionService(transactionModel, customerService);

      const actualResult = await transactionService.fetchTransaction('652e80609826988a4d3c3f5c');

      expect(actualResult).toEqual(expectedResult);
    });
  });
});
