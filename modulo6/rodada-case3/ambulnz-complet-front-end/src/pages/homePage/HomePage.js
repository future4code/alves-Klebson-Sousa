import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { goToPizzasMenuPage } from "../../routes/coordinator";

function HomePage() {
    const navigate = useNavigate()
    return(
        <div>
            <Header back/>
            <h1>Pizzas para todos os gostos <br/>De vários sabores</h1>

        </div>
    )
}

export default HomePage