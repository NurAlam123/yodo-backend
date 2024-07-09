export const createTodoValidationSchema = {
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
  content: {
    notEmpty: {
      errorMessage: "Content shouldn't be empty.",
    },
    isString: {
      errorMessage: 'Content should be a string.',
    },
  },
};
