import CustomerNotExistError from '../errors/CustomerNotExistError';

export default class CustomerService {
  #customerModel;

  constructor(customerModel) {
    this.#customerModel = customerModel;
  }

  async addCustomer(body) {
    const addCustomer = await this.#customerModel.create({
      name: body.name,
      wallet: { balance: body.balance }
    });
    return addCustomer;
  }

  async getCustomer(id) {
    const customer = await this.#customerModel.findOne({ _id: id });
    if (!customer) {
      throw new CustomerNotExistError();
    }
    return customer;
  }

  async updateCustomer(id, body) {
    const customer = await this.getCustomer(id);
    customer.name = body.name;
    const updateCustomer = await customer.save();
    return {
      id: updateCustomer.id,
      name: updateCustomer.name
    };
  }

  async updateBalance(id, amount, operation) {
    const customerData = await this.getCustomer(id);
    const updateBalance = await customerData[operation](amount).save();
    return updateBalance;
  }

  async increaseBalance(id, amount) {
    return this.updateBalance(id, amount, 'increaseBalance');
  }

  async decreaseBalance(id, amount) {
    return this.updateBalance(id, amount, 'decreaseBalance');
  }
}
