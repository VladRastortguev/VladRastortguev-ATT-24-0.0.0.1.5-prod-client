import React, { useContext, useState } from 'react'
import '../Login/Login.css'
import { Context } from '../../index'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [singIn, setSingIn] = useState(true)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [emailReg, setEmailReg] = useState("")
  const [passwordReg, setPasswordReg] = useState("")

  const navigate = useNavigate()

  const {store} = useContext(Context)

  return (
    <div className='loginContainer'>

      <div className='loginFrame'>

        <div className='loginChecbox'>
          <ul>
            <li><a onClick={() => setSingIn(true)} className={singIn ? 'singInActive' : 'singUpActive'}>Вход</a></li>
            <li><a onClick={() => setSingIn(false)} className={singIn ? 'singUpActive' : 'singInActive'}>Регистрация</a></li>
          </ul>
        </div>
        

        {singIn ? 
          <div className='singIn'>
            <div className='singContainer'>
              <p>Email:</p>
              <input 
                type="text" 
                // placeholder='Email' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
          
              <p>Пароль:</p>
              <input 
                type="text" 
                // placeholder='Пароль'
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>

              <a onClick={() => {store.login(email, password)
                      navigate("/")}}>
                  Войти</a>
            </div>
          </div> 
            : 
          <div className='singUp'>
            <div className='singContainer'>
              <p>Введите вашу почту:</p>
              <input 
                type="text" 
                // placeholder='email' 
                value={emailReg} 
                onChange={(e) => setEmailReg(e.target.value)}/>

              <p>Придумайте ваш пароль:</p>
              <input 
                type="text" 
                // placeholder='Пароль' 
                value={passwordReg} 
                onChange={(e) => setPasswordReg(e.target.value)}/>

              <a onClick={() => {
                store.registration(emailReg, passwordReg)
                navigate("/")}
              }>Зарегестрироваться</a>
            </div>
          </div>}


      </div>

    </div>
  )
}

export default Login