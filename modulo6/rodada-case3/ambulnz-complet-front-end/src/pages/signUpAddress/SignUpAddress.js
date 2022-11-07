import React from "react";
import { Form, Main, MainContainer, ShowInput } from "./style";
import { useForm} from "../../hooks/useForm"

function SignUpAddress() {
  const { form, onChangeForm, clean } = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const onSubmitFormAddress = (event) => {
    event.preventDefault();
  };

  return (
    <MainContainer>
      <Main>
        <h2>SignUpAddress</h2>
        <Form onSubmit={onSubmitFormAddress}>
          <ShowInput
            id="outlined-basic"
            label={"Logradouro"}
            name="logradouro"
            type={"text"}
            placeholder={"Digite seu nome"}
            variant="outlined"
            value={form.name}
            onChange={onChangeForm}
          />
        </Form>
      </Main>
    </MainContainer>
  );
}

export default SignUpAddress