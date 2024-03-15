const yup = require("yup");

const email_regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const mobile_regex =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const login_schema = yup
  .object({
    email: yup
      .string()
      .matches(email_regex, "Email Entered is Invalid.")
      .required()
      .trim(),
    password: yup.string().required().trim(),
  })
  .required();

const signup_schema = yup
  .object({
    uniqueKey: yup.string().required("username is required.").trim(),
    email: yup
      .string()
      .matches(email_regex, "Invalid Email!")
      .required("Email is required.")
      .trim(),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required.")
      .trim(),
    phone: yup.string().matches(mobile_regex, "Invalid phone no!").trim(),
  })
  .required();

const addResume_schema = yup
  .object({
    basic: yup.object({
      first: yup.string().required("First name is required").trim(),
      last: yup.string().required("Last name is required").trim(),
      email: yup
        .string()
        .matches(email_regex, "Invalid Email!")
        .required("Email is required.")
        .trim(),
      phone: yup
        .string()
        .matches(mobile_regex, "Invalid phone no!")
        .required("phone No. is required.")
        .trim(),
      profession: yup.string().required("Profession is required").trim(),
      city: yup.string().required("City is required").trim(),
      state: yup.string().required("State is required").trim(),
      about: yup.string().required("About is required").trim(),
    }),
  })
  .required();

module.exports = {
  login_schema,
  signup_schema,
  addResume_schema,
};
