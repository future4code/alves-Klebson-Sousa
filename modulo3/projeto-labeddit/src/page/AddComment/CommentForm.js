import React from "react";
import { useParams } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { addComment } from "../../services/comments";
import * as A from "./styled";

const LoginForm = ({getComments}) => {
  const params = useParams();
  const { form, onChangeForm, cleanFields } = useForm({
    body: "",
  });

  const onSubmitComment = (event) => {
    event.preventDefault();
    addComment(form, cleanFields, params.id);
    getComments()
  };

  return (
    <A.Form onSubmit={onSubmitComment}>
      <input
        name="body"
        placeholder="Adicionar comentário"
        type="text"
        value={form.body}
        onChange={onChangeForm}
        required
      />
      <button>Continuar</button>
    </A.Form>
  );
};
export default LoginForm;
