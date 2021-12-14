import React, { useState } from "react";
import Modal from "react-modal";
import Field from "../../../../components/Field/Field";
import "./ModalAdd.scss";

const ModalAdd = React.memo((props) => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [info, setInfo] = useState("");

  const { modalIsOpen, closeModal } = props;


  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
      >
        <form className="modal create-wallet">
          <div className="modal__header">
            <div className="create-wallet__top">
              <img src="assets/images/create-wallet-modl.svg" alt="" />
              <h2 className="modal__title title">Create Wallet</h2>
            </div>
            <div className="modal__close" onClick={closeModal}>
              <img src="assets/images/modal-close.svg" alt="" />
            </div>
          </div>
          <div className="create-wallet__items">
            <Field
              label="Wallet Address"
              placeholder="Wallet Address"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Field
              label="Wallet Private Key"
              placeholder="Private Key"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            <Field
              label="Wallet Nickname"
              placeholder="Nickname"
              value={info}
              onChange={(e) => setInfo(e.target.value)}
            />
          </div>
          <div className="create-wallet__buttons">
            <a href="#" className="create-wallet__cancel">
              Cancel
            </a>
            <a href="#" className="create-wallet__save">
              <img src="assets/images/wallet-modal.svg" alt="" />
              <span>Save changes</span>
            </a>
          </div>
        </form>
      </Modal>
    </>
  );
});

export default ModalAdd;
