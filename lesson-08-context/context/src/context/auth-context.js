import React, { useEffect, useState } from "react";

const context = {
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: () => {},
};

const AuthContext = React.createContext(context);

export const AuthContextProvider = (props) => {
  const { children } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("isLoggedIn");

    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (user) => {
    localStorage.setItem("isLoggedIn", true);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
