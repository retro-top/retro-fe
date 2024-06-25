'use client'

import React from 'react'
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";

const TopNavBar = () => {
  return (
    <nav className='flex items-center justify-between p-2 px-4'>
      <div className='text-white'>Logo</div>
      <WalletSelector />
    </nav>
  )
}

export default TopNavBar