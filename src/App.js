import React from "react";
import { Route, Switch } from "react-router-dom";
import List from "./List";
import Settings from "./pages/Settings/Settings";
import Tasks from "./pages/TasksAll/Tasks/Tasks";
import TasksEmpty from "./pages/TasksAll/TasksEmpty/TasksEmpty";
import Wallet from "./pages/WalletsAll/Wallets/Wallet";
import WalletEmpty from "./pages/WalletsAll/WalletsEmpty/WalletsEmpty";

const App = () => {
  return (
    <Switch>
      <Route path="/list" exact component={List} />
      <Route path="/" exact component={Wallet} />
      <Route path="/tasks" exact component={Tasks} />
      <Route path="/tasks-empty" exact component={TasksEmpty} />
      <Route path="/wallet" exact component={Wallet} />
      <Route path="/wallet-empty" exact component={WalletEmpty} />
      <Route path="/settings" exact component={Settings} />
    </Switch>
  );
};

export default App;
