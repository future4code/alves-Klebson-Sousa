import styled from "styled-components";

export const MainSignUp = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  width: 428px;
  height: 926px;
  position: relative;
  
  background: #ffffff;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* margin-top: 100px; */
  background: #ffffff;

  position: absolute;
  top: 35%;

  input {
    display: flex;
    flex-direction: row;
    justify-content: left;
    padding: 0.813rem 7.063rem;
    margin-top: 10px;
    width: 22.813rem;
    height: 3.188rem;
    background: #ffffff;
    border: 1px solid #d5d8de;
    border-radius: 4px;
    cursor: pointer;
  }
  p {
    position: absolute;
    width: 378px;
    height: 21px;
   
    bottom: 25%;

    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 21px;    
    text-align: center;
    color: #000000;
  }
`;
export const ButtonCreate = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.813rem 7.063rem;
  border-radius: 27px;
  width: 22.813rem;
  height: 3.188rem;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  border: none;
  font-family: "Noto Sans";
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
  margin-top: 4.5rem;
  cursor: pointer;
`;