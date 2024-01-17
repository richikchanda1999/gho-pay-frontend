'use client'

import React from 'react';
import { useEnsName,useAccount,useBalance} from "wagmi";
import { SendTransaction } from './sendTransaction';

const Connect: React.FC = () => {
  const { address, isConnecting, isDisconnected } = useAccount();
    
  const { data, error, status } = useEnsName({ address })
  const balance = useBalance({address});
  return (
    <React.Fragment>
        {(isConnecting)?<div>Connecting...</div>:<></>}
        {(isDisconnected)?<div>Disconnected</div>:<></>}
        {(address)?<><div>Balance: {balance.data?.formatted} {balance.data?.symbol}</div>
                  <SendTransaction/></>:<></>}
    </React.Fragment>
  )
}
export default Connect;