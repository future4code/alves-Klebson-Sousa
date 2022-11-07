import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";
import {
  ButtonStyled,
  DivPassword,
  Form,
  Main,
  MainContainer,
  ShowButton,
  ShowInput,
} from "./style";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { BASE_URL } from "../../constants/baseUrl";
import { goToAdminPage, goToSignUpAddress } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function SignUp() {
  const { form, onChangeForm, clean } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showCheckPassword, setShowCheckPassword] = useState(false);
  const [checKErrorPassword, setCheckErrorPassword] = useState(false);

  const navigate = useNavigate()

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleClickShowCheckPassword = () => {
    setShowCheckPassword(!showCheckPassword);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (form.password !== confirmPassword) {
      setCheckErrorPassword(true);
    } else {
      setCheckErrorPassword(false);
      createUser();
    }
  };

  const createUser = async () => {
    await axios
      .post(`${BASE_URL}/user/signup`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        if(res.data.user.role === "NORMAL"){
          goToSignUpAddress(navigate)
          Swal.fire({
            title: `Olá ${res.data.user.name}! Cadastre um endereço de entrega.`,
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
      });
  };
  return (
    <MainContainer>
      <Main>
        <h2>Cadastrar</h2>
        <Form onSubmit={onSubmitForm}>
          <ShowInput
            id="outlined-basic"
            label={"Nome e Sobrenome"}
            name="name"
            type={"text"}
            placeholder={"Digite seu nome"}
            variant="outlined"
            value={form.name}
            onChange={onChangeForm}
          />

          <ShowInput
            id="outlined-basic"
            label={"Email"}
            name="email"
            type={"email"}
            placeholder={"Digite seu email"}
            variant="outlined"
            value={form.emal}
            onChange={onChangeForm}
            required
          />

          <DivPassword>
            <ShowInput
              id="outlined-adorment-password"
              label={"Password"}
              name="password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              placeholder={"Mínimo 6 caracteres"}
              inputProps={{
                minLength: 6,
                title: "A senha deve conter no mínimo 6 caracteres",
              }}
              value={form.password}
              onChange={onChangeForm}
              required
            />
            <ShowButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </ShowButton>
          </DivPassword>
          <DivPassword>
            <ShowInput
              error={checKErrorPassword}
              helperText={
                checKErrorPassword ? "Senha deve ser igual a anterior" : ""
              }
              id="outlined-adorment-password"
              label={"Confirmar"}
              type={showCheckPassword ? "text" : "password"}
              variant="outlined"
              placeholder={"Mínimo 6 caracteres"}
              inputProps={{
                minLength: 6,
                title: "A senha deve conter no mínimo 6 caracteres",
              }}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              // onChange={onChangeForm}
              required
            />
            <ShowButton
              aria-label="toggle password visibility"
              onClick={handleClickShowCheckPassword}
              edge="end"
            >
              {showCheckPassword ? <Visibility /> : <VisibilityOff />}
            </ShowButton>
          </DivPassword>
          <ButtonStyled type="submit">Confirmar</ButtonStyled>
        </Form>
      </Main>
    </MainContainer>
  );
}

export default SignUp;
