import { Button, Checkbox, Form, FormProps, Input } from 'antd'
import React, { useState } from 'react'

  
export default function Login() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const onFinish = () => {
        
    }
return <div className="login">
    <h1 className="login__title">Login</h1>
    <Input type='email' placeholder='Email' value={email} onChange={(e) => setemail(e.target.value)} ></Input>
    <Input type='password' placeholder='Password' value={password} onChange={(e) => setpassword(e.target.value)}></Input>

</div>
}