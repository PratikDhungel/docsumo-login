import { LinkButton, PrimaryButton, TextInput } from '../../atoms';
import { ReactComponent as ShowPassword } from '../../../assets/showPassword.svg';

const LoginForm = () => {
  return (
    <div>
      <form>
        <TextInput label='Work Email' placeholder='janedoe@abc.com' showMargin />
        <TextInput
          type='password'
          label='Password'
          placeholder='Enter password here...'
          Icon={ShowPassword}
        />

        <div className='forgot-password-container'>
          <LinkButton>Forgot Password?</LinkButton>
        </div>

        <div className='mt-32'>
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
