import React, { useState } from "react";
import { Link } from "react-router-dom";
import TasksModal from "./TasksModal/TasksModal";
import "./ViewTasks.scss";

const ViewTasks = React.memo((props) => {
  const [modalTask, setIsModalTask] = useState(false);

  const handleTask = (e) => {
    e.preventDefault();
    setIsModalTask(true);
  };

  const { isUpdate } = props;

  return (
    <>
      <div className={`tasks-view ${isUpdate ? "tasks-view-update" : ""}`}>
        <div className="container">
          <div className="tasks-view__inner">
            <div className="tasks-view__aside">
              <div className="tasks-view__info">
                <div className="tasks-view__content">
                  <div className="tasks-view__img">
                    <img src="assets/images/tasks-img.svg" alt="" />
                  </div>
                  <div className="tasks-view__text">
                    <p>7 Tasks</p>
                    <span>Current created tasks</span>
                  </div>
                </div>
                <Link to={'/manage-task'} className="tasks-view__btn">
                  <span>Manage Tasks</span>
                </Link>
              </div>
              <div className="tasks-view__navs">
                <div className="tasks-view__nav" onClick={(e) => handleTask(e)}>
                  <div className="tasks-view__nav--img">
                    <img src="assets/images/create.svg" alt="" />
                  </div>
                  <div className="tasks-view__nav--text">Create Task</div>
                </div>
                <div className="tasks-view__nav">
                  <div className="tasks-view__nav--img">
                    <img src="assets/images/start.svg" alt="" />
                  </div>
                  <div className="tasks-view__nav--text">Start</div>
                </div>
                <div className="tasks-view__nav">
                  <div className="tasks-view__nav--img">
                    <img src="assets/images/stop.svg" alt="" />
                  </div>
                  <div className="tasks-view__nav--text">Stop</div>
                </div>
                <div className="tasks-view__nav">
                  <div className="tasks-view__nav--img">
                    <img src="assets/images/delete.svg" alt="" />
                  </div>
                  <div className="tasks-view__nav--text">Delete</div>
                </div>
              </div>
            </div>
            {isUpdate ? (
              <div className="tasks-view__update">
                <div className="tasks-view__update--item">
                  <span>Force Gas (GWEI)</span>
                  <p>Gas (GWEI)</p>
                </div>

                <a href="#" className="tasks-view__update--btn">
                  Update
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <TasksModal
        modalIsOpen={modalTask}
        closeModal={() => setIsModalTask(false)}
      ></TasksModal>
    </>
  );
});

export default ViewTasks;
