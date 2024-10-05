import { createContext, useContext, useEffect, useState } from "react";
import { getRequest } from "../utils/api";

// Create Auth Context
export const AuthContext = createContext();

// Create Auth Provider
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const setStoreLSToken = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };
  const getStoreLSToken = (serverToken) => {
    localStorage.getItem("token", serverToken);
  };
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken("");
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getUser = async () => {
    const response = await getRequest("auth/user", true);
    if (response) {
      localStorage.setItem("user", JSON.stringify(response));
    }
  };
  let loggedIn = !!token;

  useEffect(() => {
    loggedIn && getUser();
  }, [getUser, loggedIn]);

  return (
    <AuthContext.Provider
      value={{ loggedIn, setStoreLSToken, logout, getStoreLSToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use Auth Context
export const useAuth = () => {
  return useContext(AuthContext);
};
