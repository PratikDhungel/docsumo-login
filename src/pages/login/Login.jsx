import './login.style.css';
import appLogo from '../../assets/docsumoLogo.png';
import { LoginForm } from '../../components';
import { post } from '../../api';
import { useGlobalContext } from '../../GlobalContext';
import { setItem } from '../../utils';

const Login = () => {
  const { setIsAuth, setUserInfo } = useGlobalContext();

  const handleUserLogin = async (email, password) => {
    try {
      const loginResponse = await post('/login/', {
        email,
        password,
      });

      const responseData = loginResponse.data?.data;
      const token = responseData?.token || '';
      const userInfo = responseData?.user || {};

      // Set auth to true and set user info in global context
      setIsAuth(true);
      setUserInfo(userInfo);

      // Set both values to local storage
      setItem('token', token);
      setItem('userInfo', userInfo);
    } catch (err) {
      // Combine error message and alert on error
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
