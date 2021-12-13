import React from "react";
import "./index.scss";

const WalletView = React.memo((props) => {
  const { isTransaction } = props;
  return (
    <>
      <div className={`wallet-view ${isTransaction ? 'wallet-view-transaction' : ''}`}>
        <div className="container">
          <div className="wallet-view__inner">
            <div className="wallet-view__info">
              <div className="wallet-view__content">
                <div className="wallet-view__img">
                  <img src="assets/images/tasks-img.png" alt="" />
                </div>
                <div className="wallet-view__text">
                  <p>0 Wallets</p>
                  <span>Current saved wallets</span>
                </div>
              </div>
              <a href="#" className="wallet-view__btn">
                <img src="assets/images/add-wallet.svg" alt="" />
                <span>Add Wallet</span>
              </a>
            </div>
            {isTransaction ? (
              <div className="wallet-view__transaction">
                <div className="wallet-view__transaction--close">
                  <img src="assets/images/transaction-close.svg" alt="" />
                </div>
                <div className="wallet-view__transaction--flag">
                  <img src="assets/images/transaction-flag.svg" alt="" />
                </div>
                <span className="wallet-view__transaction--name">
                  Transaction Successful
                </span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
});

export default WalletView;
