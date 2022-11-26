import React from "react";
import { ButtonStyled, Form, Main, MainContainer, ShowInput } from "./style";
import { useForm} from "../../hooks/useForm"
import axios from "axios";
import { BASE_URL } from "../../constants/baseUrl";
import Swal from "sweetalert2";
import { goToPizzasMenuPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

function SignUpAddress() {
  const { form, onChangeForm, clear } = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const navigate = useNavigate()

  const onSubmitFormAddress = (event) => {
    event.preventDefault();
    addAddress()
  };

  const addAddress = async () => {
    const token = localStorage.getItem("token")
    await axios.put(`${BASE_URL}/user/address`, form, {
      headers: {
      Authorization: token
      }
    })
    .then((res) => {
      localStorage.setItem("token", res.data.token)
      clear()
      goToPizzasMenuPage(navigate)
      Swal.fire({
        title: `Aproveite nossas delícias.`,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      })
    })
    .catch((error) => {
      Swal.fire({
        title: error.response.data.message,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      })
    })
  }

  return (
    <MainContainer>
      <Header back4 />
      <Main>
        <h2>Cadastrar Endereço</h2>
        <Form onSubmit={onSubmitFormAddress}>
          <ShowInput
            id="outlined-basic"
            label={"Logradouro"}
            name="street"
            type={"text"}
            placeholder={"Rua / Av."}
            variant="outlined"
            value={form.street}
            onChange={onChangeForm}
            required
          />
          <ShowInput
            id="outlined-basic"
            label={"Número"}
            name="number"
            type={"text"}
            placeholder={"Número"}
            variant="outlined"
            value={form.number}
            onChange={onChangeForm}
            required
          />
          <ShowInput
            id="outlined-basic"
            label={"Complemento"}
            name="complement"
            type={"text"}
            placeholder={"Apto / Bloco"}
            variant="outlined"
            value={form.complement}
            onChange={onChangeForm}
          />
          <ShowInput
            id="outlined-basic"
            label={"Bairro"}
            name="neighbourhood"
            type={"text"}
            placeholder={"Bairro"}
            variant="outlined"
            value={form.neighbourhood }
            onChange={onChangeForm}
            required
          />
          <ShowInput
            id="outlined-basic"
            label={"Cidade"}
            name="city"
            type={"text"}
            placeholder={"Cidade"}
            variant="outlined"
            value={form.city }
            onChange={onChangeForm}
            required
          />
          <ShowInput
            id="outlined-basic"
            label={"Estado"}
            name="state"
            type={"text"}
            placeholder={"Estado"}
            variant="outlined"
            value={form.state }
            onChange={onChangeForm}
            required
          />
          <ButtonStyled type="submit">Confirmar</ButtonStyled>
        </Form>
      </Main>
    </MainContainer>
  );
}

export default SignUpAddress