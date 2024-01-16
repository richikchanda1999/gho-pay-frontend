import * as React from 'react'
import { useSendTransaction } from 'wagmi'
import { parseEther } from 'viem' 
 
export function SendTransaction() {
  const { data: hash, sendTransaction } = useSendTransaction() 
  const hs = hash?.hash
  async function submit(e: React.FormEvent<HTMLFormElement>) { 
    e.preventDefault() 
    const formData = new FormData(e.target as HTMLFormElement) 
    const to = formData.get('address') as `0x${string}` 
    const value = formData.get('value') as string 
    sendTransaction({ to, value: parseEther(value) }) 
  } 
  return (
    <form className="p-4" onSubmit={submit}>
      <input className="p-4 border-red-500 m-3 box-border rounded-lg border-width-5" name="address" placeholder="Address" required />
      <input className="p-4 border-red m-3-500 box-border rounded-lg border-width-5" name="value" placeholder="value" required />
      <button className="p-4 border-red m-3 rounded-lg border-width-5 bg-black text-slate-50" type="submit">Send</button>
      {hash && <div>Transaction Hash: {hash.hash}</div>} 
    </form>
  )
}