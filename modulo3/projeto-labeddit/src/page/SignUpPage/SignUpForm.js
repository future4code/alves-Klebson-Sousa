import React from "react";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { ButtonCreate, Form } from "./styled";
import {registerUser} from "../../services/users"


const SignUpForm = () => {
  const { form, onChangeForm, cleanFields } = useForm({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const onSubmitSignUp = (event) => {
    event.preventDefault();
    registerUser(form, cleanFields, navigate)
  };
  
    

  return (   
      <Form onSubmit={onSubmitSignUp}>
        <input
          name="username"
          placeholder="Nome de usuário"
          type="text"
          value={form.username}
          onChange={onChangeForm}
          required
        />
        <input
          name="email"
          placeholder="E-mail"
          type="email"
          value={form.email}
          onChange={onChangeForm}
          required
        />
        <input
          name="password"
          placeholder="password"
          type="password"
          value={form.password}
          onChange={onChangeForm}
          required
          pattern={"^.{8,}"}
          title={"Senha deve ter no mínimo 8 caracteres"}
        />
        <p>          
            Ao continuar você concorda com o nosso Contrato de usuário e nossa
            Política de Privacidade          
        </p>
        <ButtonCreate>Cadastrar</ButtonCreate>
      </Form>    
  );
};
export default SignUpForm;
