import React from "react";

import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import styles from "./CourseGoalList.module.scss";

const CourseGoalList = (props) => {
  const { items, onDeleteItem } = props;
  const { GoalList } = styles;

  return (
    <ul className={GoalList}>
      {items.map((goal) => (
        <CourseGoalItem key={goal.id} id={goal.id} onDelete={onDeleteItem}>
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
