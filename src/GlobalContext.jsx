import React, { createContext, useState, useContext } from 'react';

import { getItem, setItem } from './utils';

const GlobalContext = createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

// eslint-disable-next-line react/prop-types
const GlobalContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(getItem('userInfo'));
  const [isAuth, setIsAuth] = useState(!!getItem('token'));

  const updateUserAuth = (token) => {
    setIsAuth(true);
    setItem('token', token);
  };

  const updateUserInfo = (userInfo) => {
    setUserInfo(userInfo);
    setItem('userInfo', userInfo);
  };

  return (
    <GlobalContext.Provider value={{ userInfo, isAuth, updateUserAuth, updateUserInfo }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
