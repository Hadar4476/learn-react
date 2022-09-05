import React, { useState } from "react";
import "./App.css";

import Modal from "./components/UI/Modal/Modal";

const App = () => {
  const [shouldDisplayModal, setShouldDisplayModal] = useState(false);

  const displayModal = () => {
    setShouldDisplayModal(true);
  };

  const closeModal = () => {
    setShouldDisplayModal(false);
  };

  const modalRender = shouldDisplayModal && (
    <Modal emitCloseModal={closeModal} />
  );

  return (
    <div className="App">
      {modalRender}
      <button onClick={displayModal}>Display modal</button>
    </div>
  );
};

export default App;
