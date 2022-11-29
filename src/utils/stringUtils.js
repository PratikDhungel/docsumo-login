const emailRegex =
  /^([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)$/;

export const checkEmailValidity = (emailString) => {
  const isEmailValid = emailRegex.test(emailString);

  if (emailString === '' || !isEmailValid)
    return { isValid: false, message: 'Please enter a valid email' };

  return { isValid: true };
};
