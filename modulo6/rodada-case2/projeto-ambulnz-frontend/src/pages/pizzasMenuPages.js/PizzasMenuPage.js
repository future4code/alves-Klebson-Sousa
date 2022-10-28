import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import PizzaCard from "../../components/PizzaCard";
import { GlobalStateContext } from "../../global/GlobalContex";
import { goToOrderSummaryCard } from "../../routes/coordinator";
import { ContainerSection } from "./style";

function PizzasMenuPage() {
  const { pizzas } = useContext(GlobalStateContext);

  const navigate = useNavigate()

  return (
    <ContainerSection>
      <Header/>
      <button onClick={() => goToOrderSummaryCard(navigate)}>Cart</button>
      <ul>
        {pizzas.map((pizza) => {
          return <PizzaCard key={pizza.name} pizza={pizza} />;
        })}
      </ul>
    </ContainerSection>
  );
}

export default PizzasMenuPage;
