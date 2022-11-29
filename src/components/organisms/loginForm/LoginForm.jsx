import { LinkButton, TextInput } from '../../atoms';
import { ReactComponent as ShowPassword } from '../../../assets/showPassword.svg';

const LoginForm = () => {
  return (
    <div>
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
    </div>
  );
};

export default LoginForm;
