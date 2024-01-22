export default class CustomerNotExistError extends Error {
  #statusCode;

  constructor() {
    super('Customer is Not Exist');
    this.#statusCode = 404;
  }

  get statusCode() {
    return this.#statusCode;
  }
}
