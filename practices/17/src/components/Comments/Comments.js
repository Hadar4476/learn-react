import React, { useState } from "react";

import NewCommentForm from "./NewCommentForm/NewCommentForm";

import classes from "./Comments.module.css";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const contentRenderer = isAddingComment ? (
    <NewCommentForm />
  ) : (
    <button className="btn" onClick={startAddCommentHandler}>
      Add a Comment
    </button>
  );

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {contentRenderer}
      <p>Comments...</p>
    </section>
  );
};

export default Comments;
