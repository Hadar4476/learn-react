import React, { Fragment, useState } from "react";
import { Transition } from "react-transition-group";

import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

import "./App.css";

const App = () => {
  const [shouldDisplayModal, setShouldDisplayModal] = useState(false);

  const onShowModal = () => {
    setShouldDisplayModal(true);
  };

  const onCloseModal = () => {
    setShouldDisplayModal(false);
  };

  return (
    <div className="App">
      <h1>React Animations</h1>
      <Transition
        in={shouldDisplayModal}
        timeout={400}
        mountOnEnter
        unmountOnExit
        children={(state) => (
          <Fragment>
            <Modal displayState={state} emitClose={onCloseModal} />
            <Backdrop displayState={state} emitClose={onCloseModal} />
          </Fragment>
        )}
      />
      <button className="Button" onClick={onShowModal}>
        Open Modal
      </button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
};

export default App;
