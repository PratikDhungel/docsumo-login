import { useState } from 'react';
import AppRouter from './router';
import { BrowserRouter } from 'react-router-dom';
import GlobalContextProvider from './GlobalContext';
// import reactLogo from './assets/react.svg';

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;
