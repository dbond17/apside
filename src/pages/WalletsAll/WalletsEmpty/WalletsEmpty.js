import React from "react";
import Laoyut from "../../../components/Layout/Layout";
import './WalletsEmpty.scss'
import WalletView from "../views";

const WalletEmpty = React.memo((props) => {
  return (
    <>
      <Laoyut page="Wallet">
        <WalletView />
        <div className="wallet">
          <div className="container">
            <div className="wallet__inner">
              <div className="wallet__table">
                <table>
                  <thead>
                    <tr>
                      <th>
                        <div className="wallet__table--checked">

                        </div>
                      </th>
                      <th>Nickname</th>
                      <th>Wallet Address</th>
                      <th>Balance</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className="wallet-empty">
                <div className="wallet-empty__img">
                  <img src="assets/images/wallet-empty-img.png" alt="" />
                </div>
                <div className="wallet-empty__title">No Wallets Yet!</div>
                <div className="wallet-empty__text">Add some wallets to get started.</div>
              </div>
            </div>
          </div>
        </div>
      </Laoyut>
    </>
  );
});

export default WalletEmpty;
