const { ValidationError } = require("yup");

const { login_schema, signup_schema, addResume_schema } = require("./schemas");

module.exports.login = (req, res, next) => {
  const { body } = req;
  try {
    login_schema.validateSync(body, { abortEarly: false, stripUnknown: true });
    next();
  } catch (e) {
    let response = { "Bad Request": e.errors };
    return res.status(400).send(response);
  }
};

module.exports.signup = (req, res, next) => {
  const { body } = req;
  try {
    signup_schema.validateSync(body, { abortEarly: false, stripUnknown: true });
    next();
  } catch (e) {
    let response = { "Invalid-Payload": e.errors };
    return res.status(400).send(response);
  }
};

module.exports.addResume = (req, res, next) => {
  const { body } = req;
  try {
    addResume_schema.validateSync(body, {
      abortEarly: false,
      stripUnknown: true,
    });
    next();
  } catch (e) {
    let response = { "Invalid-Payload": e.errors };
    return res.status(400).send(response);
  }
};
