import { useState } from 'react';
import AppRouter from './router';
import { BrowserRouter } from 'react-router-dom';
// import reactLogo from './assets/react.svg';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <BrowserRouter>
      <AppRouter isAuth={isAuth} />
    </BrowserRouter>
  );
}

export default App;
