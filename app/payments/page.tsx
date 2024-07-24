"use client"
import { useAddPayments } from '@/apis/auth'
import SecondHeader from '@/layout/secondNav/SecondHeader'
import useAuthModalStore from '@/states/AuthModelStates'
import useAuthState from '@/states/AuthState'
import { Button } from 'antd'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function Page() {
  const {mutate,data,isSuccess} = useAddPayments()
  const {isAuthenticated} =useAuthState()
  const {openModal} = useAuthModalStore()

  const router = useRouter();
  const onFinish = (price:number,attemps:number) => {
    if (!isAuthenticated) {
      openModal()
      return
    }
    mutate({price:price,attemps:attemps})
  }

  useEffect(() => {
    if (data) {
      console.log(data);
      
      router.push(data);
    }
  }, [isSuccess]);
  return (
    <>
    <SecondHeader/>
    <div className="payments">
        <div className="payments__cart">
          <h1>Basic</h1>
          <h1>100$</h1>
          <h3>4 attemps</h3>
            <Button onClick={() => onFinish(2500,4)} >Buy</Button>
        </div>
        <div className="payments__cart">
        <h1 style={{color:'#87CEEB'}}>Stander</h1>
        <h1 style={{color:'#87CEEB',opacity:'0.7'}}>200$</h1>
        <h3>10 attemps</h3>

        <Button onClick={() => onFinish(2000,10)}  >Buy</Button>

        </div>
        <div className="payments__cart">
        <h1 style={{color:'gold'}}>Premium</h1>
        <h1 style={{color:'gold',opacity:'0.7'}}>400$</h1>
        <h3>40 attemps</h3>

        <Button onClick={() => onFinish(4000,10)} >Buy</Button>
        </div>

    </div>
    </>
  )
}
