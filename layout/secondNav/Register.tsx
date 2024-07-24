import { Button, Checkbox, Form, FormProps, Input } from 'antd';
import React, { useState } from 'react'

export default function Register() {    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [FullName, setFullName] = useState("")
    const onFinish = () => {
        
    }
return <div className="login">
    <h1 className="login__title">Register</h1>
    <Input  placeholder='Full Name' value={FullName} onChange={(e) => setFullName(e.target.value)}></Input>
    <Input type='email' placeholder='Email' value={email} onChange={(e) => setemail(e.target.value)} ></Input>
    <Input type='password' placeholder='Password' value={password} onChange={(e) => setpassword(e.target.value)}></Input>

</div>
}