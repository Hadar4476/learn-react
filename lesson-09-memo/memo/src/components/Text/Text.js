import React from "react";

const Text = (props) => {
  console.log("Text RUNNING");

  const { show } = props;

  return show && <div>Some text</div>;
};

export default React.memo(Text); // Check console to see if Text RUNNING is displayed
