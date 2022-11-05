import React from "react"; 
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { goToPizzasMenuPage } from "../../routes/coordinator";

function AdminPage() {
const navigate = useNavigate()

useProtectedPage()

    return(
        <div>
            <h2>AdminPage</h2>
            <button onClick={() => goToPizzasMenuPage(navigate)}></button>
        </div>
    )
}

export default AdminPage