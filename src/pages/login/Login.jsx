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

      setIsAuth(true);
      setUserInfo(userInfo);

      setItem('token', token);
      setItem('userInfo', userInfo);
    } catch (err) {
      console.log(err);
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
