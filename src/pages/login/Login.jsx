import './login.css';
import appLogo from '../../assets/docsumoLogo.png';
import { LoginForm } from '../../components';

const Login = () => {
  return (
    <div className='login-wrapper'>
      <div className='form-container'>
        <div className='app-logo'>
          <img src={appLogo} />
        </div>

        <div className='login-form-container'>
          <h1 className='login-form-title'>Login to your Docsumo account</h1>

          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
