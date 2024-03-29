import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("isLoggedIn");

    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (user) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", true);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const mainContent = !isLoggedIn ? (
    <Login onLogin={loginHandler} />
  ) : (
    <Home onLogout={logoutHandler} />
  );

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>{mainContent}</main>
    </React.Fragment>
  );
}

export default App;
