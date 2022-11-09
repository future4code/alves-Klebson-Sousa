import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import HomeIcon from "@mui/icons-material/Home";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";

export const ContainerHeader = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  h1 {
    text-align: center;
    font-family: "Courgette", cursive;
  }
  background: red;

  @media (min-width: 300px) and (max-width: 500px) {
    position: unset;
    h1 {
      font-size: 1.5rem;
    }
  }
  @media (min-height: 300px) and (max-height: 500px) {
    position: unset;
    
  }
  
`;

export const ImgLogo = styled.img`
  width: 7.5rem;
  margin-left: 0.3125rem;

  @media (min-width: 300px) and (max-width: 500px) {
    width: 5rem;
  }
`;
export const LoginButton = styled.button`
  background-color: transparent;
  width: 6.25rem;
  height: 3.125rem;
  padding: 0.625rem 0.313rem;
  margin-right: 1.25rem;
  font-size: 1.5rem;
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
  border: none;
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
  width: 50px;
  margin: auto 1.25rem;
  display: block;
  cursor: pointer;
  background: rgb(82, 7, 138);
  border-radius: 30px;
  /* border-style: groove; */

  :hover {
    background-color: #ffffff;
    box-shadow: #ffffff 0 6px 0;
    width: 55px;
    margin: auto 15px auto 20px;
  }

  :active {
    position: relative;
    top: 5px;
    box-shadow: none;
  }

  @media (min-width: 300px) and (max-width: 500px) {
    width: 40px;
    margin: auto 5px;
  }

`;

export const GoTOBack = styled(ArrowBackIosNewIcon)`
  cursor: pointer;
  :hover {
    color: #fff;
    box-shadow: 0 5px 0;
  }

  :active {
    position: relative;
    top: 5px;
    box-shadow: none;
  }
`;
export const GoToHome = styled(HomeIcon)`
  && {
    cursor: pointer;
    font-size: 3rem;
    color: rgb(82, 7, 138);
    :hover {
      box-shadow: 0 10px 10px;
      color: #fff;
    }

    :active {
      position: relative;
      top: 5px;
      box-shadow: none;
    }

    @media (min-width: 300px) and (max-width: 500px) {
      font-size: 2.5rem;
      margin: auto 5px;
    }
  }
`;
export const LogoutButton = styled(LogoutSharpIcon)`
  && {
    cursor: pointer;
    font-size: 3rem;
    color: rgb(82, 7, 138);
    :hover {
      box-shadow: 0 10px 10px;
      color: #fff;
    }

    :active {
      position: relative;
      top: 5px;
      box-shadow: none;
    }

    @media (min-width: 300px) and (max-width: 500px) {
      font-size: 2.5rem;
      margin: auto 5px;
    }
  }
`;
