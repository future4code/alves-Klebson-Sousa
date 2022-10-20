import styled from "styled-components"

export const MainLi = styled.li`
    display: flex;
    flex-direction: column;
    background-color: rgb(213, 235, 227);
    div {
        height: 8vh;
        display: flex;
        justify-content: space-between;
        margin: 20px;
        color: rgb(45, 167, 122);
        button {
            width: 10% ;
            height: 35%;
            font-size: 1.5em;
            background-color: transparent;
            border: none;
            margin: 10px;
            text-align: center;
            :hover {
                font-size: 2rem;
            }
        }
    }
    
`
export const Container = styled.span`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 10px;    
`