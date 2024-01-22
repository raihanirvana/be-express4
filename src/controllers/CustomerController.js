export default class CustomerController {
  #customerService;

  constructor(customerService) {
    this.#customerService = customerService;
    this.createCustomer = this.createCustomer.bind(this);
    this.getCustomer = this.getCustomer.bind(this);
    this.updateCustomer = this.updateCustomer.bind(this);
  }

  async createCustomer(request, response) {
    const { body } = request;
    const addCustomer = await this.#customerService.addCustomer(body);
    response.status(201).json(addCustomer);
  }

  async getCustomer(request, response) {
    const { id } = request.params;
    const getCustomer = await this.#customerService.getCustomer(id);
    response.status(200).json(getCustomer);
  }

  async updateCustomer(request, response) {
    const { id } = request.params;
    const { body } = request;
    const updateCustomer = await this.#customerService.updateCustomer(id, body);
    response.status(201).json(updateCustomer);
  }
}
