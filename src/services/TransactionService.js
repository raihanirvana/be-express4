export default class TransactionService {
  #transactionModel;

  #customerService;

  constructor(transactionModel, customerService) {
    this.#transactionModel = transactionModel;
    this.#customerService = customerService;
  }

  async processCreateTransaction(id, body) {
    const createTransaction = await this.#transactionModel.create({
      customer_id: id,
      description: body.description,
      amount: body.amount,
      type: body.type
    });
    return TransactionService.transforTransaction(createTransaction);
  }

  async createTransaction(id, body) {
    if (body.type === 'deposit') {
      await this.#customerService.increaseBalance(id, body.amount);
    }
    if (body.type === 'withdraw') {
      await this.#customerService.decreaseBalance(id, body.amount);
    }
    const createTransaction = await this.processCreateTransaction(id, body);
    return createTransaction;
  }

  static transforTransaction(createTransaction) {
    return {
      transactionId: createTransaction.id,
      customerId: createTransaction.customer_id,
      description: createTransaction.description,
      type: createTransaction.type,
      amount: createTransaction.amount,
      date: createTransaction.date.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })
    };
  }

  async fetchTransaction(id) {
    const fetchTransaction = await this.#transactionModel.find({ customer_id: id });
    return fetchTransaction.map((transaction) => ({
      transactionId: transaction.id,
      customerId: transaction.customer_id,
      description: transaction.description,
      type: transaction.type,
      amount: transaction.amount,
      date: transaction.date.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })
    }));
  }
}
