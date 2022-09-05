import React, { useCallback, useState } from "react";

import "./App.css";
import Button from "./components/Button/Button";
import Text from "./components/Text/Text";

const App = () => {
  console.log("App RUNNING");

  const [shouldDisplayText, setShouldDisplayText] = useState(false);
  const [shouldToggle, setShouldToggle] = useState(false);

  const onToggleTextHandler = useCallback(() => {
    if (shouldToggle) {
      setShouldDisplayText((prevState) => !prevState);
    }
  }, [shouldToggle]);

  const onAllowToggleHandler = () => {
    setShouldToggle(true);
  };

  return (
    <div className="App">
      <Text show={false} />
      <div className="actions">
        <Button number="1" text="Toggle text" emitClick={onToggleTextHandler} />
        <Button
          number="2"
          text="Allow toggle"
          emitClick={onAllowToggleHandler}
        />
      </div>
    </div>
  );
};

export default App;
