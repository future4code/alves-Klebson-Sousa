import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { goToBack, goToAdminHome } from "../routes/coordinator";
import { BASE_URL } from "../constants/Urls";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  // const history = useHistory()


  
  const onChangeEmail = (event) => {
    setEmail(event.target.value)
    
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)
    
  }

  const onSubmitLogin = () => {
    console.log(email, password)
    const body = {
      email: email,
      password: password
    }
    axios.post(`${BASE_URL}/login`, body)
    .then((response) => {
      console.log("Deu certo",response.data.token)
      localStorage.setItem("token", response.data.token)
      goToAdminHome(navigate)

    })
    .catch((error) => {
      console.log("Deu errado",error.response)
    })
  }

  return (
    <div>
      <button onClick={() => goToBack(navigate)}>Voltar</button>
      <h1>Login</h1>
      <input 
      placeholder="email" 
      type="email"
      value={email}
      onChange={onChangeEmail}
      />
      <input 
      placeholder="password" 
      type="password"
      value={password}
      onChange={onChangePassword}
      />
      {/* <button onClick={() => goToAdminHome(navigate)}>x</button> */}
      <button onClick={onSubmitLogin} >Entrar</button>
    </div>
  );
};

export default LoginPage;
