const emailRegex =
  /^([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)$/;

export const checkEmailValidity = (emailString) => {
  if (emailString === '') return { isValid: false, message: 'Email is required' };

  const isEmailValid = emailRegex.test(emailString);

  if (!isEmailValid) return { isValid: false, message: 'Invalid email address' };

  return { isValid: true };
};
