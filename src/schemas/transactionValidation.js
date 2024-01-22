import Joi from 'joi';

const transactionSchema = Joi.object({
  description: Joi.string().required(),
  amount: Joi.number().required(),
  type: Joi.string().valid('deposit', 'withdraw').required()
});

export default transactionSchema;
