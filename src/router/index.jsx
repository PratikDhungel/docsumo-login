import { Navigate, Routes, Route } from 'react-router-dom';
import { Dashboard, Login, NotFound } from '../pages';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import { useGlobalContext } from '../GlobalContext';

const AppRouter = () => {
  const { isAuth } = useGlobalContext();

  return (
    <Routes>
      <Route
        path='/'
        element={
          isAuth ? <Navigate to='/dashboard' replace /> : <Navigate to='/login' replace />
        }
      />

      <Route element={<PublicRoutes isAuth={isAuth} />}>
        <Route path='/login' element={<Login />} />
      </Route>

      <Route path='/dashboard' element={<PrivateRoutes isAuth={isAuth} />}>
        <Route index element={<Dashboard />} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
