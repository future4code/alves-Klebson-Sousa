import styled from "styled-components";

export const MainLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 428px;
  height: 926px;
  position: relative;
  p {
    position: absolute;
    width: 378px;
    height: 21px;
    left: 26px;
    top: 275px;

    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 21px;    
    text-align: center;
    color: #000000;
  }
  background: #ffffff;
`;
export const ContainerLogo = styled.div`
  position: absolute;
  width: 152px;
  height: 142px;    
  top: 10%;  
  h1 {
    margin-top: 120px;
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 47px;
    color: #373737;
  }
`;
export const Vetor5 = styled.img`
  position: absolute;
  /* left: 25%; */
  right: 50%;
  top: 10%;
  /* bottom: 81.1%; */

  background: transparent;
`;
export const Vetor6 = styled.img`
  position: absolute;
  left: 49.5%;
  /* right: 41.36%; */
  top: 10%;
  /* bottom: 81.1%; */
  background: transparent;
`;
export const Vetor7 = styled.img`
  position: absolute;
  /* left: 25%; */
  right: 50%;
  /* top: 30%; */
  bottom: 30%;
  background: transparent;
`;
export const Vetor8 = styled.img`
  position: absolute;
  left: 50%;
  /* right: 41.36%; */
  /* top: 18.9%; */
  bottom: 30%;
  background: transparent;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* margin-top: 100px; */
  background: #ffffff;

  position: absolute;
  top: 40%;

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
  }
`;
export const ButtonContinue = styled.button`
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
  margin-top: 3.5rem;
  cursor: pointer;
`;
export const ButtonCreate = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.813rem 7.063rem;
  border-radius: 27px;
  width: 22.813rem;
  height: 3.188rem;
  border: 1px solid #fe7e02;
  background-color: transparent;
  color: #fe7e02;
  font-family: "Noto Sans";
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  position: absolute;
  bottom: 25%;
`;
