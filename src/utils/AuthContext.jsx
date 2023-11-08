import React, {
  useEffect,
  useMemo,
  useState,
  createContext,
  useContext,
} from 'react';
import { account } from '../appwriteConfig';

const UserContext = createContext(null);

const AuthContext = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUserStatus();
  }, []);

  const loginUser = async (userInfo) => {
    setIsLoading(true);
    try {
      const response = await account.createEmailSession(
        userInfo.email,
        userInfo.password,
      );
      if (!response) throw Error;
      let accountDetails = await account.get();
      if (!accountDetails) throw Error;
      setUser(accountDetails);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  const logoutUser = () => {
    account.deleteSessions('current');
    setUser(null);
  };
  const rergisterUser = (userInfo) => {};
  const checkUserStatus = async () => {
    setIsLoading(true);
    try {
      const accountDetails = await account.get();
      if (!accountDetails) throw Error;
      setUser(accountDetails);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

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
