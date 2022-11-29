import { useEffect, useState } from 'react';
import { checkEmailValidity } from '../../../utils';
import { LinkButton, PrimaryButton, TextInput } from '../../atoms';
import { ReactComponent as ShowPassword } from '../../../assets/showPassword.svg';
import { ReactComponent as HidePassword } from '../../../assets/hidePassword.svg';

const checkEmailPasswordValidity = (email, password) => {
  const { isValid: isEmailValid, message: emailError } = checkEmailValidity(email);

  const isPasswordEmpty = password === '';

  return {
    emailError: isEmailValid ? '' : emailError,
    passwordError: isPasswordEmpty ? 'Please enter a password' : '',
  };
};

const LoginForm = ({ handleUserLogin }) => {
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [triggerValidation, setTriggerValidation] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Update state values when input changes
  const handleInputChange = (key, value) => {
    setFormValues((prev) => ({ ...prev, [key]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Set trigger validation to true when form is submitted
    setTriggerValidation(true);

    const { email, password } = formValues;

    const { emailError, passwordError } = checkEmailPasswordValidity(email, password);

    // If no errors present, handle user login
    if (emailError === '' && passwordError === '') {
      handleUserLogin(email, password);
    } else {
      // Else set form errors
      setErrors((prev) => ({ ...prev, email: emailError, password: passwordError }));
    }
  };

  // If submit button has been clicked once
  // trigger form validation on each input change
  useEffect(() => {
    if (triggerValidation) {
      const { emailError, passwordError } = checkEmailPasswordValidity(
        formValues.email,
        formValues.password
      );

      setErrors((prev) => ({ ...prev, email: emailError, password: passwordError }));
    }
  }, [formValues]);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextInput
          label='Work Email'
          placeholder='janedoe@abc.com'
          value={formValues.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          isError={!!errors.email}
          errorMsg={errors.email}
          showMargin
        />
        <TextInput
          type={showPassword ? 'text' : 'password'}
          label='Password'
          placeholder='Enter password here...'
          value={formValues.password}
          onChange={(e) => handleInputChange('password', e.target.value)}
          isError={!!errors.password}
          errorMsg={errors.password}
          Icon={showPassword ? HidePassword : ShowPassword}
          onIconClick={toggleShowPassword}
        />

        <div className='forgot-password-container'>
          <LinkButton>Forgot Password?</LinkButton>
        </div>

        <div className='mt-32' type='submit'>
          <PrimaryButton>Login</PrimaryButton>
        </div>
      </form>

      <div className='sign-up-button-container'>
        <span className='font-18'>
          Don't have an account?{' '}
          <LinkButton colored largerButton>
            {' '}
            Sign Up
          </LinkButton>
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
