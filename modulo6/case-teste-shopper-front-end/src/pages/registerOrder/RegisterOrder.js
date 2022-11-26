import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../../constants/baseUrl";
import { Form, Main, ButtonStyled, InputMaterial } from "./style";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { goToProductsPage } from "../../routes/cordinator";

const RegisterOrder = () => {
  const { form, handleInputChange, clear } = useForm({
    name: "",
    deliveryDate: "",
  });
  const navigate = useNavigate();

  const onSubmitRegister = (event) => {
    event.preventDefault();
    createOrder(form, clear);
    // console.log(form.deliveryDate)
  };

  const createOrder = async () => {
    const newForm = {
      ...form,
      deliveryDate: form.deliveryDate.replaceAll("-", "/")
    };

    const orderId = localStorage.getItem("orderId")

    await axios
      .post(`${BASE_URL}/client/register`, newForm)
      .then((res) => {        
        localStorage.setItem("orderId", res.data.id);
        
        alert(`Boas compras ${res.data.name}`);
        goToProductsPage(navigate);
        
      })
      .catch((error) => {
        alert(error.response.data.message); 
        if (orderId) {
        window.confirm("Deseja acessar-la?")
         return goToProductsPage(navigate)        
      }       
      });
      
  };

  return (
    <Main>
      <p>Cadastre seu nome e uma data de entrega</p>
      <Form onSubmit={onSubmitRegister}>
        <InputMaterial
          id="outlined-basic"
          label="Nome"
          name="name"
          type={"text"}
          placeholder={"digite seu nome completo"}
          variant="outlined"
          value={form.name}
          onChange={handleInputChange}
          required
        />

        <InputMaterial
          id="outlined-basic"
          name="deliveryDate"
          // label="date"
          type="date"
          placeholder={"Data da entrega"}
          variant="outlined"
          value={form.deliveryDate}
          onChange={handleInputChange}
          required
        />

        <ButtonStyled type="submit">criar</ButtonStyled>
      </Form>
    </Main>
  );
};

export default RegisterOrder;
