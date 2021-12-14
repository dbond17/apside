import React from "react";
import { Route, Switch } from "react-router-dom";
import List from "./List";
import ManageTask from "./pages/ManageTask/ManageTask";
import Settings from "./pages/Settings/Settings";
import Tasks from "./pages/TasksAll/Tasks/Tasks";
import TasksEmpty from "./pages/TasksAll/TasksEmpty/TasksEmpty";
import Wallet from "./pages/WalletsAll/Wallets/Wallet";
import WalletEmpty from "./pages/WalletsAll/WalletsEmpty/WalletsEmpty";
import WalletEth from "./pages/WalletsAll/WalletsETH/WalletsETH";

const App = () => {
  return (
    <Switch>
      <Route path="/list" exact component={List} />
      <Route path="/" exact component={Wallet} />
      <Route path="/tasks" exact component={Tasks} />
      <Route path="/tasks-empty" exact component={TasksEmpty} />
      <Route path="/manage-task" exact component={ManageTask}/>
      <Route path="/wallet" exact component={Wallet} />
      <Route path='/wallet-eth' exact component={WalletEth}/>
      <Route path="/wallet-empty" exact component={WalletEmpty} />
      <Route path="/settings" exact component={Settings} />
    </Switch>
  );
};

export default App;
