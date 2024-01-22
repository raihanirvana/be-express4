export default class TransactionController {
  #transactionService;

  constructor(transactionService) {
    this.#transactionService = transactionService;
    this.create = this.create.bind(this);
    this.fetchById = this.fetchById.bind(this);
  }

  async create(request, response) {
    const { id } = request.params;
    const { body } = request;
    const createTransaction = await this.#transactionService.createTransaction(id, body);
    response.status(201).json(createTransaction);
  }

  async fetchById(request, response) {
    const { id } = request.params;
    const fetchById = await this.#transactionService.fetchTransaction(id);
    response.status(200).json(fetchById);
  }
}
