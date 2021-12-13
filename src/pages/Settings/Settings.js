import React, { useState } from "react";
import "./Settings.scss";
import Laoyut from "../../components/Layout/Layout";
import Field from "../../components/Field/Field";
import Select from "../../components/Select/Select";

const Settings = React.memo((props) => {
  const [search, setSearch] = useState("");
  const options = [
    {
      value: "https://relay.flashbots.net/",
      label: "https://relay.flashbots.net/",
    },
    {
      value: "https://relay.flashbots-2.net/",
      label: "https://relay.flashbots-2.net/",
    },
    {
      value: "https://relay.flashbots-3.net/",
      label: "https://relay.flashbots-3.net/",
    },
  ];

  const metamask = [
    {
      value: "Metamask 2",
      label: "Metamask 2",
    },
    {
      value: "Metamask 3",
      label: "Metamask 3",
    },
    {
      value: "Metamask",
      label: "Metamask",
    },
  ];

  return (
    <>
      <Laoyut page="Settings">
        <div className="settings">
          <div className="container">
            <div className="settings__inner">
              <div className="settings__info">
                <div className="settings__img">
                  <img src="assets/images/setting-img.png" alt="" />
                </div>
                <div className="settings__text">
                  <p>Settings</p>
                  <span>Configure your bot setup</span>
                </div>
              </div>
              <form className="settings__items">
                <div className="settings__item">
                  <Field
                    label="RPC Url"
                    value="http://seth-mainnet.alchemyapi.io/v2/RqCppC7h2EXscYUtc"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <div className="settings__name">
                    URL of ETH RPC of choice (Ex: Infura, Alchemy)
                  </div>
                  <div className="settings__buttons">
                    <button type="submit" className="settings__save">
                      Save
                    </button>
                    <button type="submit" className="settings__test">
                      Test
                    </button>
                  </div>
                </div>
                <div className="settings__item">
                  <Field
                    label="Discord Webhook"
                    value="https://discord.com/api/webhooks/590039881015885837/wl"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <div className="settings__name">
                    Webhook for Aspide.io alerts
                  </div>
                  <div className="settings__buttons">
                    <button type="submit" className="settings__save">
                      Save
                    </button>
                  </div>
                </div>
                <div className="settings__item">
                  <div className="field__label">Flashbots Relay Endpoint</div>
                  <Select
                    placeholder="https://relay.flashbots.net/"
                    options={options}
                  />
                  <div className="settings__name">
                    Which Flashbots endpoint to send Tx's to
                  </div>
                  <div className="settings__buttons">
                    <button type="submit" className="settings__save">
                      Save
                    </button>
                  </div>
                </div>
                <div className="settings__item">
                  <div className="field__label">Flashbots Priority Tester</div>
                  <Select placeholder="Metamask 2" options={metamask} />
                  <div className="settings__name">
                    Test to see if your wallet has Flashbots priority access
                  </div>
                  <div className="settings__buttons">
                    <button type="submit" className="settings__test">
                      Test
                    </button>
                    <div className="settings__description">
                      Wallet does have priority
                    </div>
                  </div>
                </div>
                <div className="settings__item settings__item--border">
                  <Field
                    label="Retry Delay"
                    value="2500"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <div className="settings__name">
                    How long to wait between tries (in milliseconds)
                  </div>
                  <div className="settings__buttons">
                    <button type="submit" className="settings__save">
                      Save
                    </button>
                  </div>
                </div>
                <div className="settings__item settings__item--border"></div>
              </form>
            </div>
          </div>
        </div>
      </Laoyut>
    </>
  );
});

export default Settings;
