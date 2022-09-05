import React, { useImperativeHandle } from "react";

const RefComponent = React.forwardRef((props, ref) => {
  const logMessage = () => {
    console.log("Executed from outside!");
  };

  useImperativeHandle(ref, () => {
    return {
      logMessage,
    };
  });

  return <div>RefComponent</div>;
});

export default RefComponent;
