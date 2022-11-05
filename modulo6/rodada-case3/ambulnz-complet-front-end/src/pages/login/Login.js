import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/baseUrl";
import Swal from 'sweetalert2'
import { Main, Form, ButtonStyled, DivPassword, ShowButton, ShowInput, MainContainer } from "./style";
import { goToAdminPage, goToPizzasMenuPage } from "../../routes/coordinator";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  const onSubmitLogin = (event) => {
    event.preventDefault()
    loginAmbulnz()
  }

  const loginAmbulnz = async () => {
    const body = {
      email,
      password
    }
    await axios.post(`${BASE_URL}/user/login`, body)
    .then((res) => {
      console.log(res.data.user.role)
      setEmail("")
      setPassword("") 
      localStorage.setItem("token", res.data.token)
      if(res.data.user.role === "NORMAL"){
        goToPizzasMenuPage(navigate)
        Swal.fire({
          title: `Seja bem vindo ${res.data.message}`,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
      } else goToAdminPage(navigate)
    })
    .catch((error) => {
      Swal.fire({
        title: error.response.data.message,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    })
  }
  
  return (
    <MainContainer>
    <Main>
      <h2>Login</h2>
      <Form onSubmit={onSubmitLogin}>
        <ShowInput
          id="outlined-basic"
          label="Email"
          type="email"
          variant="outlined"
          placeholder="email@email.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <DivPassword>
          <ShowInput
            id="outlined-basic"
            label="Password"
            type={showPassword? 'password' : "text"}
            variant="outlined"
            placeholder="Mínimo 6 caracteres"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            inputProps={{minLength:6, title:"A senha deve conter no mínimo 6 caracteres"}}
          />
          <ShowButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </ShowButton>
        </DivPassword>

        <ButtonStyled type="submit">Entrar</ButtonStyled>
      </Form>
    </Main>
    </MainContainer>
  );
}

export default Login;
