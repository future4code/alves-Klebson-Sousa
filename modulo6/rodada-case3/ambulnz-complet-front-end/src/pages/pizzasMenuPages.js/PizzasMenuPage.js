import React, { useContext } from "react";
import Header from "../../components/Header";
import PizzaCard from "../../components/PizzaCard";
import { GlobalStateContext } from "../../global/GlobalContex";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { ContainerSection } from "./style";

function PizzasMenuPage() {
  const { pizzas } = useContext(GlobalStateContext);

  useProtectedPage()

  return (
    <ContainerSection>
      <Header back2 back3/>
      <ul>
        {pizzas.map((pizza) => {
          return <PizzaCard key={pizza.name} pizza={pizza} />;
        })}
      </ul>
      <a
        href="https://www.flaticon.com/br/icones-gratis/adicionar-ao-carrinho"
        title="adicionar ao carrinho ícones"
      >
        Ícones carrinho criados por Uniconlabs - Flaticon
      </a>
    </ContainerSection>
  );
}

export default PizzasMenuPage;
