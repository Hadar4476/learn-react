import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

const ModalPortal = (props) => {
  const { emitCloseModal } = props;
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
          <span>Modal header</span>
        </div>
        <div className={ModalBody}>Modal body</div>
        <div className={ModalFooter}>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  );
};

const Modal = (props) => {
  const { emitCloseModal } = props;

  const modalPortalElement = document.getElementById("modal_portal");

  const modalPortal = ReactDOM.createPortal(
    <ModalPortal emitCloseModal={emitCloseModal} />,
    modalPortalElement
  );

  return <Fragment>{modalPortal}</Fragment>;
};

export default Modal;
