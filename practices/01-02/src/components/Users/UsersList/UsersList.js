import React from "react";
import UserItem from "./UserItem/UserItem";

import styles from "./UsersList.module.scss";

const UsersList = (props) => {
  const { users } = props;
  const { UserList } = styles;

  const usersElements = users.map((u) => {
    return <UserItem key={u.id} username={u.username} age={u.age} />;
  });

  return <div className={UserList}>{usersElements}</div>;
};

export default UsersList;
