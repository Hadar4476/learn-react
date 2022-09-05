import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const ModalPortal = (props) => {
  const { children, emitCloseModal } = props;

  const closeModal = () => {
    emitCloseModal();
  };

  return (
    <Fragment>
      <div className={classes.backdrop} onClick={closeModal}></div>
      <div className={classes.modal}>{children}</div>
    </Fragment>
  );
};

const Modal = (props) => {
  const { children, emitCloseModal } = props;

  const modalPortalElement = document.getElementById("modal_portal");

  const modalPortal = ReactDOM.createPortal(
    <ModalPortal children={children} emitCloseModal={emitCloseModal} />,
    modalPortalElement
  );

  return <Fragment>{modalPortal}</Fragment>;
};

export default Modal;
