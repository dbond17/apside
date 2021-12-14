import React from "react";
import Laoyut from "../../../components/Layout/Layout";
import CheckBox from "../../../components/Checkbox/Checkbox";
import ViewTasks from "../view/ViewTasks";
import './Tasks.scss'

const Tasks = React.memo((props) => {
  return (
    <>
      <Laoyut page="Tasks">
        <ViewTasks isUpdate={true} />
        <div className="tasks">
          <div className="container">
            <div className="tasks__inner">
              <div className="tasks__table">
                <table>
                  <thead>
                    <tr>
                      <th>
                        <div className="tasks__table--checked"></div>
                      </th>
                      <th>Contract</th>
                      <th>Network</th>
                      <th>Wallet</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <CheckBox />
                      </td>
                      <td>Showcase (Flashbots)</td>
                      <td>Flashbots</td>
                      <td>Wallet 1</td>
                      <td className="blue">Included in Block: 1367231</td>
                      <td>
                        <div className="tasks__actions">
                          <a href="#" className="tasks__actions--play">
                            <img src="assets/images/task-play.svg" alt="" />
                          </a>
                          <a href="#" className="tasks__actions--delete">
                            <img src="assets/images/delete-brown.svg" alt="" />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <CheckBox />
                      </td>
                      <td>Showcase (Flashbots)</td>
                      <td>Flashbots</td>
                      <td>Wallet 1</td>
                      <td className="blue">Included in Block: 1367231</td>
                      <td>
                        <div className="tasks__actions">
                          <a href="#" className="tasks__actions--play">
                            <img src="assets/images/task-stop.svg" alt="" />
                          </a>
                          <a href="#" className="tasks__actions--delete">
                            <img src="assets/images/delete-brown.svg" alt="" />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <CheckBox />
                      </td>
                      <td>Showcase (Flashbots)</td>
                      <td>Flashbots</td>
                      <td>Wallet 1</td>
                      <td className="blue">Included in Block: 1367231</td>
                      <td>
                        <div className="tasks__actions">
                          <a href="#" className="tasks__actions--play">
                            <img src="assets/images/task-stop.svg" alt="" />
                          </a>
                          <a href="#" className="tasks__actions--delete">
                            <img src="assets/images/delete-brown.svg" alt="" />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <CheckBox />
                      </td>
                      <td>Showcase (Flashbots)</td>
                      <td>Flashbots</td>
                      <td>Wallet 1</td>
                      <td className="blue">Included in Block: 1367231</td>
                      <td>
                        <div className="tasks__actions">
                          <a href="#" className="tasks__actions--play">
                            <img src="assets/images/task-stop.svg" alt="" />
                          </a>
                          <a href="#" className="tasks__actions--delete">
                            <img src="assets/images/delete-brown.svg" alt="" />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <CheckBox />
                      </td>
                      <td>Showcase (Flashbots)</td>
                      <td>Flashbots</td>
                      <td>Wallet 1</td>
                      <td className="blue">Included in Block: 1367231</td>
                      <td>
                        <div className="tasks__actions">
                          <a href="#" className="tasks__actions--play">
                            <img src="assets/images/task-stop.svg" alt="" />
                          </a>
                          <a href="#" className="tasks__actions--delete">
                            <img src="assets/images/delete-brown.svg" alt="" />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <CheckBox />
                      </td>
                      <td>Showcase (Flashbots)</td>
                      <td>Flashbots</td>
                      <td>Wallet 1</td>
                      <td className="blue">Included in Block: 1367231</td>
                      <td>
                        <div className="tasks__actions">
                          <a href="#" className="tasks__actions--play">
                            <img src="assets/images/task-stop.svg" alt="" />
                          </a>
                          <a href="#" className="tasks__actions--delete">
                            <img src="assets/images/delete-brown.svg" alt="" />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <CheckBox />
                      </td>
                      <td>Showcase (Flashbots)</td>
                      <td>Flashbots</td>
                      <td>Wallet 1</td>
                      <td className="blue">Included in Block: 1367231</td>
                      <td>
                        <div className="tasks__actions">
                          <a href="#" className="tasks__actions--play">
                            <img src="assets/images/task-stop.svg" alt="" />
                          </a>
                          <a href="#" className="tasks__actions--delete">
                            <img src="assets/images/delete-brown.svg" alt="" />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <CheckBox />
                      </td>
                      <td>Showcase (Flashbots)</td>
                      <td>Flashbots</td>
                      <td>Wallet 1</td>
                      <td className="blue">Included in Block: 1367231</td>
                      <td>
                        <div className="tasks__actions">
                          <a href="#" className="tasks__actions--play">
                            <img src="assets/images/task-stop.svg" alt="" />
                          </a>
                          <a href="#" className="tasks__actions--delete">
                            <img src="assets/images/delete-brown.svg" alt="" />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <CheckBox />
                      </td>
                      <td>Showcase (Flashbots)</td>
                      <td>Flashbots</td>
                      <td>Wallet 1</td>
                      <td className="blue">Included in Block: 1367231</td>
                      <td>
                        <div className="tasks__actions">
                          <a href="#" className="tasks__actions--play">
                            <img src="assets/images/task-stop.svg" alt="" />
                          </a>
                          <a href="#" className="tasks__actions--delete">
                            <img src="assets/images/delete-brown.svg" alt="" />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <CheckBox />
                      </td>
                      <td>Showcase (Flashbots)</td>
                      <td>Flashbots</td>
                      <td>Wallet 1</td>
                      <td className="blue">Included in Block: 1367231</td>
                      <td>
                        <div className="tasks__actions">
                          <a href="#" className="tasks__actions--play">
                            <img src="assets/images/task-stop.svg" alt="" />
                          </a>
                          <a href="#" className="tasks__actions--delete">
                            <img src="assets/images/delete-brown.svg" alt="" />
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Laoyut>
    </>
  );
});

export default Tasks;
