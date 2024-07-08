export const createTodoValidationSchema = {
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
  content: {
    notEmpty: {
      errorMessage: "Content shouldn't be empty.",
    },
    isString: {
      errorMessage: 'Content should be a string.',
    },
  },
};

export const deleteTodoValidationSchema = {
  id: {
    isNumeric: {
      errorMessage: 'Todo id should be a number.',
    },
    notEmpty: {
      errorMessage: "Todo id shouldn't be empty.",
    },
  },
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

export const updateTodoValidationSchema = {
  id: {
    isNumeric: {
      errorMessage: 'Todo id should be a number.',
    },
    notEmpty: {
      errorMessage: "Todo id shouldn't be empty.",
    },
  },
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
  content: {
    notEmpty: {
      errorMessage: "Content shouldn't be empty.",
    },
    isString: {
      errorMessage: 'Content should be a string.',
    },
  },
};
