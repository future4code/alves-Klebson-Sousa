import styled from "styled-components";

export const MainContainer = styled.div`
  position: relative;
  width: 428px;
  height: 1134px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
`;
export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  position: absolute;
  width: 364px;
  max-height: 629px;
  left: 32px;
  top: 427px;
`;
export const CardPost = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 9px 10px;
  gap: 18px;
  width: 364px;
  height: 167px;
  background: #fbfbfb;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  flex: none;
  order: 0;
  flex-grow: 0;

  position: relative;
  div {
    cursor: pointer;
  }
`;

export const ContainerVotes = styled.div`
  position: absolute;
  bottom: 10%;
  /* margin-right: 10px; */
`;
export const Title = styled.input`
  position: absolute;
  width: 364px;
  height: 53px;
  left: 30px;
  top: 122px;
  background: #ededed;
  border-radius: 12px;
`;
export const InputPost = styled.input`
  position: absolute;
  width: 364px;
  height: 131px;
  left: 30px;
  top: 187px;
  background: #ededed;
  border-radius: 12px;
`;
export const ButtonPost = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 145px;

  position: absolute;
  width: 359px;
  height: 47px;
  left: 33px;
  top: 330px;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%), #4088cb;
  border-radius: 12px;
`;
export const CardButton = styled.div`
  width: 174.33px;
  height: 28px;
  position: absolute;
  bottom: 8%;
  button {
    margin-right: 10px;
    border: none;
    background-color: transparent;
    cursor: pointer;    
  }
`;
