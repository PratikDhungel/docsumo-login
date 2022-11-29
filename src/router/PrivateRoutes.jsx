import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = ({ isAuth }) => {
  return isAuth ? <Outlet /> : <Navigate to='/login' replace />;
};

export default PrivateRoutes;
