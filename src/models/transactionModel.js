import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema(
  {
    customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', require: true },
    date: { type: Date, require: true, default: Date.now },
    description: { type: String, require: true },
    amount: { type: Number, require: true },
    type: { type: String, Enumerator: ['deposit', 'withdraw'], require: true }
  },
  {
    versionKey: false
  }
);

transactionSchema.set('timestamps', true);

export default mongoose.model('Transaction', transactionSchema, 'transaction');
