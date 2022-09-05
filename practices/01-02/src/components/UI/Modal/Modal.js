import React from "react";

import styles from "./Modal.module.scss";

const Modal = (props) => {
  const { headerText, children, emitCloseModal } = props;
  const { Modal, BackDrop, ModalContent, ModalHeader, ModalBody, ModalFooter } =
    styles;

  const closeModal = () => {
    emitCloseModal();
  };

  return (
    <div className={Modal}>
      <div className={BackDrop} onClick={closeModal}></div>
      <div className={ModalContent}>
        <div className={ModalHeader}>
          <span>{headerText}</span>
        </div>
        <div className={ModalBody}>{children}</div>
        <div className={ModalFooter}>
          <button onClick={closeModal}>Okay</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
