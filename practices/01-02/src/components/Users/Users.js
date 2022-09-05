import React, { useState } from "react";

import NewUser from "./NewUser/NewUser";
import UsersList from "./UsersList/UsersList";

import styles from "./Users.module.scss";

const Users = () => {
  const { Users } = styles;

  const [users, setUsers] = useState([]);

  const addNewUser = (newUser) => {
    setUsers((prevState) => {
      const user = {
        id: "u" + (prevState.length + 1),
        ...newUser,
      };

      return [...prevState, user];
    });
  };

  const userListRender = users.length ? <UsersList users={users} /> : null;

  return (
    <div className={Users}>
      <NewUser emitAddNewUser={addNewUser} />
      {userListRender}
    </div>
  );
};

export default Users;
