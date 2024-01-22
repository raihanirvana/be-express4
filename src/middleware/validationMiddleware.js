const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400).json(error.details[0].message);
  } else {
    next();
  }
};

export default validate;
