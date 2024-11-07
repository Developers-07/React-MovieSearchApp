import React, { useState } from 'react'
import './login.css'

const Login = (props) => {

    const {setUser} = props

    const [inputValue, setInputValue]=useState("");
  return (
    <>
        <div className='login-contain'>
            
            <label htmlFor="">Enter Your Name :</label><br />
            <input type="text" value={inputValue} onChange={(e) => {
                setInputValue(e.target.value);
            }}/>

            <button onClick={() =>{
                setUser(inputValue);
                setInputValue("");
            }}>Enter as {inputValue}</button>
            
        </div>
    </>
  )
}

export default Login
