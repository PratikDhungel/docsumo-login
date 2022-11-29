import { TextInput } from '../../atoms';
import { ReactComponent as ShowPassword } from '../../../assets/showPassword.svg';

const LoginForm = () => {
  return (
    <div>
      <TextInput label='Work Email' placeholder='janedoe@abc.com' />
      <TextInput
        type='password'
        label='Password'
        placeholder='Enter password here...'
        Icon={ShowPassword}
      />
    </div>
  );
};

export default LoginForm;
