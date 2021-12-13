import React from "react";
import "./Footer.scss";

const Footer = React.memo((props) => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer__inner">
            <div className="footer__info">
              <div className="footer__img">
                <img src="assets/images/footer-img.svg" alt="" />
              </div>
              <div className="footer__current">
                <div className="footer__name">Current Gas</div>
                <div className="footer__content">
                  <div className="footer__content--item">
                    <p>Base Fee:</p>
                    <span>90 GWEI</span>
                  </div>
                  <div className="footer__content--item">
                    <p>Rapid Price:</p>
                    <span>90 GWEI</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer__time">Last block: 0 seconds ago</div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Footer;
