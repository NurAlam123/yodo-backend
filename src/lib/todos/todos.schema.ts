export const createTodoValidationSchema = {
  id: {
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

export const deleteTodoValidationSchema = {
  id: {
    notEmpty: {
      errorMessage: "Todo id shouldn't be empty.",
    },
  },
};

export const updateTodoValidationSchema = {
  id: {
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
    optional: true,
  },
  done: {
    isBoolean: true,
    optional: true,
  },
};

export const checkExistTodoValidationSchema = {
  id: {
    notEmpty: {
      errorMessage: "Todo id shouldn't be empty.",
    },
  },
};
