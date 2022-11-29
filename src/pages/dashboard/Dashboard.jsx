import { useGlobalContext } from '../../GlobalContext';

import './dashboard.style.css';

const Dashboard = () => {
  const { userInfo } = useGlobalContext();

  return (
    <div className='dashboard-wrapper'>
      <h1>Hello {userInfo?.full_name || ''}</h1>
    </div>
  );
};

export default Dashboard;
