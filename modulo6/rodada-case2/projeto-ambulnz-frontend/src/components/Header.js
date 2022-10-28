import fornalias from "./../assets/fornalias.jpg"
import { ContainerHeader } from "./headerStyle"

function Header() {
    return(
        <ContainerHeader>
            <img src={fornalias} alt="Fornália de pizza"/>
            <h1>Pizza Al Forno</h1>
        </ContainerHeader>
    )
}
export default Header