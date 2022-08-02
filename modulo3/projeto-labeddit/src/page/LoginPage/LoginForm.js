import React from "react";
import useForm from "../../hooks/useForm";
import * as LF from "./styled"
import { login } from "../../services/users";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { form, onChangeForm, cleanFields } = useForm({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const onSubmitLogin = (event) => {
    event.preventDefault();
    login(form, cleanFields, navigate);
  };

  return (
    <LF.Form onSubmit={onSubmitLogin}>
      <input
        name="email"
        placeholder="email"
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
      <LF.ButtonContinue>Continuar</LF.ButtonContinue>
    </LF.Form>
  );
};
export default LoginForm;
