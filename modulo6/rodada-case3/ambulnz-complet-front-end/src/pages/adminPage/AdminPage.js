import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "../../components/Header";
import { BASE_URL } from "../../constants/baseUrl";
import { GlobalStateContext } from "../../global/GlobalContex";
import { useForm } from "../../hooks/useForm";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { goToPizzasMenuPage } from "../../routes/coordinator";
import { ButtonStyled, Form, Main, MainContainer, ShowInput } from "./style";

function AdminPage() {
  const [newIngredients, setNewIngredients] = useState("");
  const { pizzas } = useContext(GlobalStateContext);
  const { form, onChangeForm, clear } = useForm({
    name: "",
    price: "",
    imageUrl: "",
    ingredients: [
      {
        ingredientName: "",
      },
    ],
  });
  form.ingredients.map(
    (ingredient) => (ingredient.ingredientName = newIngredients)
  );

  useProtectedPage();
  const navigate = useNavigate();

  const onChangeIngredents = (event) => {
    setNewIngredients(event.target.value);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    insertPizza();
  };

  const insertPizza = async () => {
    const token = localStorage.getItem("token");
    await axios
      .post(`${BASE_URL}/pizzas/insert`, form, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {        
        clear();
        Swal.fire({
            title: res.data.message,
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
      });
  };

  return (
    <MainContainer>
      <Header back2 />
      <Main>
        <h2>Cadastrar</h2>
        <Form onSubmit={onSubmitForm}>
          <ShowInput
            id="outlined-basic"
            label={"Pizza"}
            name="name"
            type={"text"}
            placeholder={"Nome da Pizza"}
            variant="outlined"
            value={form.name}
            onChange={onChangeForm}
            required
          />
          <ShowInput
            id="outlined-basic"
            label={"Preço"}
            name="price"
            type={"number"}
            placeholder={"Digite um valor"}
            variant="outlined"
            value={form.price}
            onChange={onChangeForm}
            required
          />
          <ShowInput
            id="outlined-basic"
            label={"Imagem"}
            name="imageUrl"
            type={"text"}
            placeholder={"Digite a url da imagem"}
            variant="outlined"
            value={form.imageUrl}
            onChange={onChangeForm}
            required
          />
          <ShowInput
            id="outlined-basic"
            label="Ingrediente"
            // name={"newIngredients"}
            type={"text"}
            placeholder={"Ingrediente"}
            variant="outlined"
            value={newIngredients}
            onChange={onChangeIngredents}
            required
          />
          <ButtonStyled type="submit">Adicionar</ButtonStyled>
        </Form>
      </Main>
    </MainContainer>
  );
}

export default AdminPage;
