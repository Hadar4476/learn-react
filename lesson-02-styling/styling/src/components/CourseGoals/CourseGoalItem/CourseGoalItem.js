import React from "react";

import styles from "./CourseGoalItem.module.scss";

const CourseGoalItem = (props) => {
  const { id, children, onDelete } = props;
  const { GoalItem } = styles;
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    onDelete(id);
  };

  return (
    <li className={GoalItem} onClick={deleteHandler}>
      {children}
    </li>
  );
};

export default CourseGoalItem;
