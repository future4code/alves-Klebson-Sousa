import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Main, Form, ButtonStyled, DivPassword, ShowButton, ShowInput, MainContainer } from "./style";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();
  return (
    <MainContainer>
    <Main>
      <h2>Login</h2>
      <Form>
        <ShowInput
          id="outlined-basic"
          label="Email"
          type="email"
          variant="outlined"
        />
        <DivPassword>
          <ShowInput
            id="outlined-basic"
            label="Password"
            type="password"
            variant="outlined"
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
