import { useDispatch } from "react-redux";
import { globalActions } from "../../store";

import classes from "./Auth.module.css";

const { auth: actions } = globalActions;

const Auth = () => {
  const dispatch = useDispatch();

  const onLogin = (event) => {
    event.preventDefault();

    dispatch(actions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={onLogin}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
