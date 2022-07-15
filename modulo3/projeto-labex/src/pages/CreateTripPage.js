import React from "react";
import { useNavigate } from "react-router-dom";
import { goToBack } from "../routes/coordinator";
import useForm from "../hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../constants/Urls";

const CreateTripPage = () => {
  const navigate = useNavigate();
  const { form, onChangeForm, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const onSubmitCreateTip = (event) => {
    event.preventDefault()
    const token = localStorage.getItem("token")
    axios.post(`${BASE_URL}/trips`, form,{
      headers: {
        auth: token
      }
    })
    .then((response) => {
      alert("Viagen criada com sucesso")
      console.log(response.data)
      cleanFields()
    })
    .catch((error) => {
      console.log(error.response)
    })
  }

  return (
    <div>
      <h1>Criar Viagem</h1>
      <button onClick={() => goToBack(navigate)}>Voltar</button>
      <form onSubmit={onSubmitCreateTip}>
        <input
          placeholder="Nome"
          name="name"
          pattern={"^.{5,}"}
          title={"O nome da viagem deve ter no mínimo 5 caracteres"}
          required
          type="text"
          value={form.name}
          onChange={onChangeForm}
        />
        <select placeholder="Planeta" name="planet" required onChange={onChangeForm}>
          <option value disabled selected>
            Escolha um Planeta
          </option>
          <option value="Mercúrio">Mercúrio</option>
          <option value="Vênus">Vênus</option>
          <option value="Terra">Terra</option>
          <option value="Marte">Marte</option>
          <option value="Jupter">Jupter</option>
          <option value="Saturno">Saturno</option>
          <option value="Urano">Urano</option>
          <option value="Netuno">Netuno</option>
          <option value="Plutão">Plutão</option>
        </select>
        <input
          placeholder="Data"
          name="date"
          type="date"
          required
          min="14-07-2022"
          value={form.date}
          onChange={onChangeForm}
        />
        <input
          placeholder="Descrição"
          name="description"
          required=""
          pattern={"^.{30,}"}
          title={"O nome deve ter no mínimo 30 caracteres"}
          value={form.description}
          onChange={onChangeForm}
        />
        <input
          placeholder="Duração em dias"
          type="number"
          name="durationInDays"
          required=""
          min="50"
          value={form.durationInDays}
          onChange={onChangeForm}
        />
        <button>Criar</button>
      </form>
    </div>
  );
};

export default CreateTripPage;
