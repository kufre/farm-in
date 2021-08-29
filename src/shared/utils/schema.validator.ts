const schemaValidator = (schema, data) => {
  console.log(data);
  data = data == null ? {} : data;

  const validateOptions = {
    abortEarly: false,
    converse: true,
    stripUnknown: true,
  };
  const { error, value } = schema.validate(data, validateOptions);
  const errors = error ? formatErrors(error.details) : false;
  return { data: value, errors };
};

const formatErrors = errors => {
  const formattedErrors = {};
  for (const err of errors) {
    const message = err.message.replace(/"/g, '');
    formattedErrors[err.context.key] = message;
  }
  return formattedErrors;
};

export default schemaValidator;
