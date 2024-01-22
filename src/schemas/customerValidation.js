import Joi from 'joi';

const customerSchema = Joi.object({
  name: Joi.string().required()
});

export default customerSchema;
