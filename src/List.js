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
        <Link to="/wallet-empty">WalletEmpty</Link>
      </li>
      <li  style={{ margin: '10px 0', fontSize: '18px'}}>
        <Link to="/wallet">Wallet</Link>
      </li>
      <li  style={{ margin: '10px 0', fontSize: '18px'}}>
        <Link to="/settings">Settings</Link>
      </li>
    </ul>
  )
})

export default List
