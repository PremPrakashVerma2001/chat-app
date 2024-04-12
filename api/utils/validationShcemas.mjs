export const userValidationShcema = {
  username: {
    notEmpty: {
      errorMessage: "Username cannot be empty!",
    },
    isString: {
      errorMessage: "Username must be a string!",
    },
    isLength: {
      options: {
        min: 3,
        max: 20,
      },
      errorMessage: "Username must be between 3 to 15 characters long!",
    },
  },
  displayName: {
    notEmpty: {
      errorMessage: "Display name cannot be empty!",
    },
    isLength: {
      options: {
        max: 15,
      },
      errorMessage: "Display Name must be less than 15 characters !",
    },
  },
  password: {
    notEmpty: {
      errorMessage: "Password cannot be empty!",
    },
    isLength: {
      options: {
        min: 5,
        max: 15,
      },
      errorMessage: "Password must be between 5 to 15 characters long !",
    },
  },
};
