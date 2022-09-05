import React, { useState, useRef } from "react";

import RefComponent from "./components/RefComponent/RefComponent";

import "./App.css";

const App = () => {
  const [username, setUsername] = useState("");
  const usernameInputRef = useRef();

  const refComponentRef = useRef();

  const onUsernameInputChange = () => {
    const usernameValue = usernameInputRef.current.value;
    setUsername(usernameValue);
  };

  const logRefComponentMessage = () => {
    refComponentRef.current.logMessage();
  };

  return (
    <div className="App">
      <label htmlFor="username">Username</label>
      <input
        id="username"
        name="username"
        type="text"
        value={username}
        onChange={onUsernameInputChange}
        ref={usernameInputRef}
      />
      <RefComponent ref={refComponentRef} />
      <button onClick={logRefComponentMessage}>
        Execute RefComponent function!
      </button>
    </div>
  );
};

export default App;
