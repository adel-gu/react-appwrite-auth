import React, { useMemo, useState } from 'react';
import { createContext, useContext } from 'react';

const UserContext = createContext(null);

const AuthContext = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  const loginUser = (userInfo) => {};
  const logoutUser = () => {};
  const rergisterUser = (userInfo) => {};
  const checkUserStatus = () => {};

  const value = useMemo(() => {
    return {
      user,
      loginUser,
      logoutUser,
      rergisterUser,
    };
  }, [user]);

  return (
    <UserContext.Provider value={value}>
      {isLoading ? <p>'loading...'</p> : children}
    </UserContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(UserContext);
};

export default AuthContext;
