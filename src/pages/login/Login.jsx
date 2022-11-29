import './login.style.css';
import appLogo from '../../assets/docsumoLogo.png';
import { LoginForm } from '../../components';
import { post } from '../../api';
import { useGlobalContext } from '../../GlobalContext';

const Login = () => {
  const { updateUserAuth, updateUserInfo } = useGlobalContext();

  const handleUserLogin = async (email, password) => {
    try {
      const loginResponse = await post('/login/', {
        email,
        password,
      });

      const responseData = loginResponse.data?.data;
      const token = responseData?.token || '';
      const userInfo = responseData?.user || {};

      updateUserAuth(token);
      updateUserInfo(userInfo);
    } catch (err) {
      const { error, message } = err?.response?.data;
      const combinedMessage = `${error || ''}! ${message || ''}`;

      alert(combinedMessage);
    }
  };

  return (
    <div className='login-wrapper'>
      <div className='form-wrapper'>
        <div className='app-logo'>
          <img src={appLogo} />
        </div>

        <div className='login-form-container'>
          <h1 className='login-form-title'>Login to your Docsumo account</h1>

          <LoginForm handleUserLogin={handleUserLogin} />
        </div>
      </div>
    </div>
  );
};

export default Login;
