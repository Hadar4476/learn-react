import React from "react";

import styles from "./UserItem.module.scss";

const UserItem = (props) => {
  const { username, age } = props;
  const { UserItem } = styles;

  return (
    <div className={UserItem}>
      <span>{username + ` (${age} years old)`}</span>
    </div>
  );
};

export default UserItem;
