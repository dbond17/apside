import React from 'react'
import './Wallet.scss'
import Laoyut from '../../../components/Layout/Layout'
import WalletView from '../views'

const Wallet = React.memo(props => {
  return (
    <>
      <Laoyut page="Wallet">
        <WalletView isTransaction={true} />
      </Laoyut>
    </>
  )
})

export default Wallet