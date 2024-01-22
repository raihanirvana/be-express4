import CustomerNotExistError from '../../src/errors/CustomerNotExistError';
import CustomerService from '../../src/services/CustomerService';

describe('CustomerService', () => {
  const customerModel = {
    create: jest.fn(),
    findOne: jest.fn(),
    findById: jest.fn(),
    save: jest.fn()
  };
  describe('^addCustomer', () => {
    it('should return a new customer when given name Raihan', async () => {
      const expectedResult = {
        id: '1',
        name: 'Raihan',
        wallet: {
          balance: 0
        },
        createAt: '1',
        updatedAt: '1'
      };
      const newCustomer = 'Raihan';
      customerModel.create.mockResolvedValue(expectedResult);
      const customerService = new CustomerService(customerModel);

      const actualResult = await customerService.addCustomer(newCustomer);

      expect(actualResult).toEqual(expectedResult);
    });
  });
  describe('^getCustomer', () => {
    it('should return a list of customer when try to get all customers', async () => {
      const expectedResult = {
        id: '1',
        name: 'Raihan'
      };
      customerModel.findOne.mockResolvedValue(expectedResult);
      const customerService = new CustomerService(customerModel);

      const actualResult = await customerService.getCustomer();

      expect(actualResult).toEqual(expectedResult);
    });
  });
  describe('^updateCustomer', () => {
    it('should return a new of update customer when updating customer', async () => {
      const expectedResult = {
        id: '1',
        name: 'Raihan'
      };
      const body = {
        name: 'raihan'
      };
      const id = '1';

      customerModel.findOne.mockReturnThis();
      customerModel.save.mockResolvedValue(expectedResult);
      const customerService = new CustomerService(customerModel);

      const actualResult = await customerService.updateCustomer(id, body);

      expect(actualResult).toEqual(expectedResult);
    });
    it('should throw CustomerNotExistError when customer id is wrong', async () => {
      const expectedResult = new CustomerNotExistError();
      const body = {
        name: 'raihan'
      };
      const id = '1';

      customerModel.findOne.mockResolvedValue(null);
      const customerService = new CustomerService(customerModel);

      const actualResult = async () => {
        await customerService.updateCustomer(id, body);
      };

      expect(actualResult).rejects.toThrow(expectedResult);
    });
  });
});
