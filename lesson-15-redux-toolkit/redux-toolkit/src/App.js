import { Fragment } from "react";
import { useSelector } from "react-redux";

import Header from "./components/Header/Header";
import Auth from "./components/Auth/Auth";
import UserProfile from "./components/UserProfile/UserProfile";
import Counter from "./components/Counter/Counter";

const App = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  const authRenderer = !isAuthenticated ? <Auth /> : <UserProfile />;

  return (
    <Fragment>
      <Header />
      {authRenderer}
      <Counter />
    </Fragment>
  );
};

export default App;
