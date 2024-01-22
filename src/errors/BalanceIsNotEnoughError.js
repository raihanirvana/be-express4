export default class BalanceIsNotEnoughError extends Error {
  #statusCode;

  constructor() {
    super('Your balance is not enough');
    this.#statusCode = 400;
  }

  get statusCode() {
    return this.#statusCode;
  }
}
