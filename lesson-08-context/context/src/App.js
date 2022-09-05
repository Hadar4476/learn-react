import React, { useContext } from "react";
import AuthContext from "./context/auth-context";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  const mainContent = !isLoggedIn ? <Login /> : <Home />;

  return (
    <React.Fragment>
      <MainHeader />
      <main>{mainContent}</main>
    </React.Fragment>
  );
}

export default App;
