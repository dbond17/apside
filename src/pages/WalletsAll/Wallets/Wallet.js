import React, { useState } from "react";
import "./Wallet.scss";
import Laoyut from "../../../components/Layout/Layout";
import WalletView from "../views";
import ModalSave from "../views/ModalSave/ModalSave";
import CheckBox from "../../../components/Checkbox/Checkbox";

const Wallet = React.memo((props) => {
  const [modalSave, setIsModalSave] = useState(true);

  const handleSave = (e) => {
    e.preventDefault();
    setIsModalSave(true);
  };

  const [checked, setChecked] = useState(true);

  // let msg;
  // if (checked) {
  //   msg = <span style={({background: 'red'})}>галочка есть</span>;
  // } else {
  //   msg = <span style={({background: 'green'})}>галочки есть</span>;
  // }

  return (
    <>
      <Laoyut page="Wallet">
        {/* <div>
          <span>{msg}</span>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
        </div> */}

        <WalletView isTransaction={true} />
        <div className="wallet">
          <div className="container">
            <div className="wallet__inner">
              <div className="wallet__table">
                <table>
                  <thead>
                    <tr>
                      <th>
                        <div className="wallet__table--checked"></div>
                      </th>
                      <th>Nickname</th>
                      <th>Wallet Address</th>
                      <th>Balance</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <CheckBox />
                      </td>
                      <td>Wallet 1</td>
                      <td className="bold">
                        0x8F9ba38419F089706a53c310ea0Aa26B7f4032d1
                      </td>
                      <td className="blue">Check Balance</td>
                      <td>
                        <a href="#" className="wallet__table--delete">
                          <img src="assets/images/actions-true.svg" alt="" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <CheckBox />
                      </td>
                      <td>Wallet 1</td>
                      <td className="bold">
                        0x8F9ba38419F089706a53c310ea0Aa26B7f4032d1
                      </td>
                      <td className="blue">Check Balance</td>
                      <td>
                        <a href="#" className="wallet__table--delete">
                          <img src="assets/images/delete-brown.svg" alt="" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <CheckBox />
                      </td>
                      <td>Wallet 1</td>
                      <td className="bold">
                        0x8F9ba38419F089706a53c310ea0Aa26B7f4032d1
                      </td>
                      <td className="blue">Check Balance</td>
                      <td>
                        <a href="#" className="wallet__table--delete">
                          <img src="assets/images/delete-brown.svg" alt="" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <CheckBox />
                      </td>
                      <td>Wallet 1</td>
                      <td className="bold">
                        0x8F9ba38419F089706a53c310ea0Aa26B7f4032d1
                      </td>
                      <td className="blue">Check Balance</td>
                      <td>
                        <a href="#" className="wallet__table--delete">
                          <img src="assets/images/delete-brown.svg" alt="" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <CheckBox />
                      </td>
                      <td>Wallet 1</td>
                      <td className="bold">
                        0x8F9ba38419F089706a53c310ea0Aa26B7f4032d1
                      </td>
                      <td className="blue">Check Balance</td>
                      <td>
                        <a href="#" className="wallet__table--delete">
                          <img src="assets/images/delete-brown.svg" alt="" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <CheckBox />
                      </td>
                      <td>Wallet 1</td>
                      <td className="bold">
                        0x8F9ba38419F089706a53c310ea0Aa26B7f4032d1
                      </td>
                      <td className="blue">Check Balance</td>
                      <td>
                        <a href="#" className="wallet__table--delete">
                          <img src="assets/images/delete-brown.svg" alt="" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <CheckBox />
                      </td>
                      <td>Wallet 1</td>
                      <td className="bold">
                        0x8F9ba38419F089706a53c310ea0Aa26B7f4032d1
                      </td>
                      <td className="blue">Check Balance</td>
                      <td>
                        <a href="#" className="wallet__table--delete">
                          <img src="assets/images/delete-brown.svg" alt="" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <CheckBox />
                      </td>
                      <td>Wallet 1</td>
                      <td className="bold">
                        0x8F9ba38419F089706a53c310ea0Aa26B7f4032d1
                      </td>
                      <td className="blue">Check Balance</td>
                      <td>
                        <a href="#" className="wallet__table--delete">
                          <img src="assets/images/delete-brown.svg" alt="" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <ModalSave
          modalIsOpen={modalSave}
          closeModal={() => setIsModalSave(false)}
        ></ModalSave>
      </Laoyut>
    </>
  );
});

export default Wallet;
