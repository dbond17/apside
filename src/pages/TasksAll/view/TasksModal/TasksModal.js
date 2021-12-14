import React, { useState } from "react";
import Modal from "react-modal";
import Field from "../../../../components/Field/Field";
import Select from "../../../../components/Select/Select";
import "./TasksModal.scss";

const TasksModal = React.memo((props) => {
  const [name, setName] = useState("");
  const [params, setParams] = useState("");
  const [cost, setCost] = useState("");
  const [addres, setAddres] = useState("");

  const wallet = [
    {
      value: "Wallet:1",
      label: "Wallet:1",
    },
    {
      value: "Wallet:2",
      label: "Wallet:2",
    },
    {
      value: "Wallet:3",
      label: "Wallet:3",
    },
  ];

  const price = [
    {
      value: "Price",
      label: "Price",
    },
    {
      value: "Price 1",
      label: "Price 1",
    },
    {
      value: "Price 2",
      label: "Price 2",
    },
  ];

  const network = [
    {
      value: "Transaction Network",
      label: "Transaction Network",
    },
    {
      value: "Transaction Network 1",
      label: "Transaction Network 1",
    },
    {
      value: "Transaction Network 2",
      label: "Transaction Network 2",
    },
  ];

  const limit = [
    {
      value: "Limit 1",
      label: "Limit 1",
    },
    {
      value: "Limit 2",
      label: "Limit 2",
    },
    {
      value: "Limit 3",
      label: "Limit 3",
    },
  ];

  const { modalIsOpen, closeModal } = props;

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
      >
        <form className="modal create-tasks">
          <div className="modal__header">
            <div className="create-tasks__top">
              <img src="assets/images/create-task.svg" alt="" />
              <h2 className="modal__title title">Add Task</h2>
            </div>
            <div className="modal__close" onClick={closeModal}>
              <img src="assets/images/modal-close.svg" alt="" />
            </div>
          </div>
          <div className="create-tasks__items">
            <div className="create-tasks__item">
              <div className="field__label">Wallet</div>
              <Select options={wallet} placeholder="Wallet:" />
            </div>
            <div className="create-tasks__item">
              <Field
                label="Function Name"
                placeholder="Function Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="create-tasks__item">
              <div className="field__label">
                Transaction Network Transaction Network
              </div>
              <Select options={network} placeholder="Transaction Network" />
            </div>
            <div className="create-tasks__item">
              <Field
                label="Function Parameters"
                placeholder="Function Parameters (Seperated by commas)"
                value={params}
                onChange={(e) => setParams(e.target.value)}
              />
            </div>
            <div className="create-tasks__item">
              <Field
                label="Transaction Cost"
                placeholder="Transaction Cost"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
              />
            </div>
            <div className="create-tasks__item">
              <div className="field__label">
                Gas Price Method{" "}
                <span>Sends rapid gas price (Displayed at the bottom)</span>
              </div>
              <Select options={price} placeholder="Rapid Price" />
            </div>
            <div className="create-tasks__item">
              <Field
                label="Contract Address"
                placeholder="Contract Address"
                value={addres}
                onChange={(e) => setAddres(e.target.value)}
              />
            </div>
            <div className="create-tasks__item">
              <div className="field__label">Gas Limit Method</div>
              <Select options={limit} placeholder="Auto (Recommended)" />
            </div>
          </div>
          <div className="create-tasks__buttons">
            <a href="#" className="create-tasks__cancel">
              Cancel
            </a>
            <a href="#" className="create-tasks__save">
              <span>Add Task</span>
            </a>
          </div>
        </form>
      </Modal>
    </>
  );
});

export default TasksModal;
