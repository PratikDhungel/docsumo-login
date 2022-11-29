import { Navigate, Outlet } from 'react-router-dom';

const PublicRoutes = ({ isAuth }) => {
  return !isAuth ? <Outlet /> : <Navigate to='/dashboard' replace />;
};

export default PublicRoutes;
