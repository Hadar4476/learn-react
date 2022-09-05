import { useDispatch, useSelector } from "react-redux";
import { globalActions } from "../../store";

import classes from "./Header.module.css";

const { auth: actions } = globalActions;

const Header = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(actions.logout());
  };

  const userActionsRenderer = isAuthenticated && (
    <nav>
      <ul>
        <li>
          <a href="/">My Products</a>
        </li>
        <li>
          <a href="/">My Sales</a>
        </li>
        <li>
          <button onClick={onLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {userActionsRenderer}
    </header>
  );
};

export default Header;
