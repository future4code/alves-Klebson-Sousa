import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  margin-top: 0;
`;
export const Header = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  padding: 20px 0;
  background-color: #E6E6E6;
`;
export const ImgAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
`;
export const MessageArea = styled.div`
  width: 60%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  overflow-y: hidden;
  background-color: #F2E5DF;  
`;
export const Chat = styled.div`
  width: 98%;
  min-height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  overflow-y: hidden;
  background-color: #F2E5DF; 
  margin-left: 2%;
`;
export const Chat2 = styled.div`
  width: 98%;
  min-height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  overflow-y: hidden;
  background-color: #F2E5DF; 
  margin-right: 2%;
`;
export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  height: 62px;
  background-color: #E6E6E6;
`;
export const Input1 = styled.input`
  width: 20%;
  height: 20px;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 25px;
  border: 0;
  margin-left: 10px;
`;
export const Input2 = styled.input`
  width: 50%;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 25px;
  border: 0;
  height: 20px;
`;
export const Botao = styled.button`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  width: 10%;
  border-radius: 25px;
  padding: 10px;
  border: 0;
  height: 40px;
  margin-right: 10px;
`;
