export const authValidationSchema = {
  email: {
    isEmail: {
      errorMessage: 'Not an email.',
    },
    isString: {
      errorMessage: 'Email should be a string.',
    },
    notEmpty: {
      errorMessage: "Email shouldn't be empty.",
    },
  },
};
