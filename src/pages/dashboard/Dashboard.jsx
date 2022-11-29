import { PrimaryButton } from '../../components';
import { useGlobalContext } from '../../GlobalContext';
import { clearStorage } from '../../utils';

import './dashboard.style.css';

const Dashboard = () => {
  const { userInfo, setIsAuth, setUserInfo } = useGlobalContext();

  // Clear global state values and local storage
  const handleUserLogout = () => {
    setIsAuth(false);
    setUserInfo('');
    clearStorage();
  };

  return (
    <div className='dashboard-wrapper'>
      <h1>Hello {userInfo?.full_name || ''}</h1>

      <div className='mt-32'>
        <PrimaryButton handleOnClick={handleUserLogout}>Logout</PrimaryButton>
      </div>
    </div>
  );
};

export default Dashboard;
