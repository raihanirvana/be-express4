import mongoose from 'mongoose';
import BalanceIsNotEnoughError from '../errors/BalanceIsNotEnoughError';

const customerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    wallet: {
      balance: { type: Number, default: 0 }
    }
  },
  {
    versionKey: false,
    methods: {
      decreaseBalance(amount) {
        if (this.wallet.balance < amount) {
          throw new BalanceIsNotEnoughError();
        }
        this.wallet.balance -= amount;
        return this;
      },
      increaseBalance(amount) {
        this.wallet.balance += amount;
        return this;
      }
    }
  }
);

customerSchema.set('timestamps', true);

export default mongoose.model('Customer', customerSchema, 'customer');
