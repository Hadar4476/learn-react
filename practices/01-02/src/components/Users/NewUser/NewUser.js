import React, { useState } from "react";

import Modal from "../../UI/Modal/Modal";

import styles from "./NewUser.module.scss";

const NewUser = (props) => {
  const { emitAddNewUser } = props;
  const { NewUser, Form, Username, Age } = styles;

  const newUser = {
    username: "",
    age: "",
  };

  const [newUserState, setNewUser] = useState(newUser);
  const [shouldDisplayModal, setShouldDisplayModal] = useState(false);
  const [errorTextState, setErrorText] = useState("");

  const onInputChange = ({ target }) => {
    const { value, name, type } = target;

    setNewUser((prevState) => {
      const updatedState = { ...prevState };

      updatedState[name] = type === "number" ? +value.trim() : value.trim();

      return updatedState;
    });
  };

  const closeModal = () => {
    setShouldDisplayModal(false);
  };

  const addNewUser = (event) => {
    event.preventDefault();
    const isValid = validate();

    if (!isValid) {
      setShouldDisplayModal(true);
      return;
    }

    emitAddNewUser(newUserState);
    setNewUser(newUser);
    setErrorText("");
  };

  const validate = () => {
    let isValid = true;
    let errorText = "";

    if (!newUserState.username && !newUserState.age) {
      const emptyInputsText =
        "Please enter a valid username and age (non-empty values).";
      errorText = emptyInputsText;
    } else if (!newUserState.username) {
      const emptyUsernameText = "Please fill a username";
      errorText = emptyUsernameText;
    } else if (!newUserState.age || newUserState.age < 0) {
      const emptyAgeText = "Please enter a valid age (> 0).";
      errorText = emptyAgeText;
    }

    if (errorText) {
      isValid = false;
      setErrorText(errorText);
    }

    return isValid;
  };

  const modalRender = shouldDisplayModal && (
    <Modal headerText="Invalid input" emitCloseModal={closeModal}>
      {errorTextState}
    </Modal>
  );

  return (
    <div className={NewUser}>
      {modalRender}
      <form className={Form} onSubmit={addNewUser}>
        <div className={Username}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            value={newUserState.username}
            onChange={onInputChange}
          />
        </div>
        <div className={Age}>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            name="age"
            type="number"
            value={newUserState.age}
            onChange={onInputChange}
          />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default NewUser;
