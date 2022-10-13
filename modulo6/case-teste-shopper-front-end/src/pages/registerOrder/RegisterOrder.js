import { useState } from "react"
import { Form, Main, ButtonStyled, InputMaterial } from "./styled"

const RegisterOrder = () => {
    const [name, setName] = useState("")
    const [date, setDate] = useState("")

    // onSubmitRegister = (event) => {
    //     event.preventDefault()
    // }
    // onSubmit={onSubmitRegister}

    return(
        <Main>
            <p>Cadastre seu nome e uma data de entrega</p>
            <Form >
                <InputMaterial 
                id="outlined-basic" 
                label="Nome completo" 
                type={"text"}
                variant="outlined"
                />
        
                <InputMaterial
                id="outlined-basic"              
                type="date"
                variant="outlined"               
                
                />                
                
                <ButtonStyled type="submit">criar</ButtonStyled>
            </Form>
        </Main>
    )
}

export default RegisterOrder