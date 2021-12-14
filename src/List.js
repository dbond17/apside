import React from 'react'
import { Link } from 'react-router-dom'

const List = React.memo(props => {
  return (
    <ul style={{ padding: '40px'}}>
      <li  style={{ margin: '10px 0', fontSize: '18px'}}>
        <Link to="/tasks-empty">Tasks-Empty</Link>
      </li>
      <li  style={{ margin: '10px 0', fontSize: '18px'}}>
        <Link to="/tasks">Tasks</Link>
      </li>
      <li  style={{ margin: '10px 0', fontSize: '18px'}}>
        <Link to="/wallet-empty">WalletEmpty (Модальное окно Create Wallets находиться на кнопке add wallets)</Link>
      </li>
      <li  style={{ margin: '10px 0', fontSize: '18px'}}>
        <Link to="/wallet">Wallet (Модальное окно Save Wallets состояние сразу открытое)</Link>
      </li>
      <li  style={{ margin: '10px 0', fontSize: '18px'}}>
        <Link to="/wallet-eth">WalletEth (Модальное окно Distribute ETH to Wallets? находиться на кнопке add wallets)</Link>
      </li>
      <li  style={{ margin: '10px 0', fontSize: '18px'}}>
        <Link to="/settings">Settings</Link>
      </li>
      <li  style={{ margin: '10px 0', fontSize: '18px'}}>
        <Link to="/manage-task">Manage Tasks</Link>
      </li>
    </ul>
  )
})

export default List
