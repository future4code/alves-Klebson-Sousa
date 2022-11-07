import styled from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    text-align: center;
    font-family: "Courgette", cursive;
  }
  background: red;
`;

export const ImgLogo = styled.img`
  width: 7.5rem;
  margin-left: 0.3125rem;
`;
export const LoginButton = styled.button`
  background-color: transparent;
  width: 6.25rem;
  height: 3.125rem;
  padding: 0.625rem 0.313rem;
  margin-right: 1.25rem;
  font-size: 1.5rem;
  text-decoration: underline;
  border: none;
  cursor: pointer;
  :hover {
    border-radius: 0.938rem;
    color: white;
    box-shadow: rgb(208, 4, 4) 0px 0px 37px 10px;
    -webkit-box-shadow: rgb(208, 4, 4) 0px 0px 37px 10px;
    -moz-box-shadow: rgb(208, 4, 4) 0px 0px 37px 10px;
  }

  :active {
    position: relative;
    top: 5px;
  }
`;
export const SignupButton = styled.button`
  background-color: transparent;
  width: 8rem;
  height: 3.125rem;
  padding: 0.625rem 0.313rem;
  margin: auto 10px auto;
  font-size: 1.5rem;
  text-decoration: underline;
  border: none;
  cursor: pointer;
  :hover {
    border-radius: 0.938rem;
    color: white;
    box-shadow: rgb(208, 4, 4) 0px 0px 37px 10px;
    -webkit-box-shadow: rgb(208, 4, 4) 0px 0px 37px 10px;
    -moz-box-shadow: rgb(208, 4, 4) 0px 0px 37px 10px;
  }

  :active {
    position: relative;
    top: 5px;
  }
`;

export const ButtonCart = styled.img`
  width: 4.375rem;
  margin: auto 1.25rem;
  display: block;
  cursor: pointer;
  background: blue;
  border-radius: 50%;
  border-style: groove;

  :hover {
    box-shadow: #ffffff 0 6px 0;
    width: 4.563rem;
    margin: auto 1.156rem;
  }

  :active {
    position: relative;
    top: 5px;
    box-shadow: none;
  }
`;
