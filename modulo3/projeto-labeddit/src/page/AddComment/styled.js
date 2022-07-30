import styled from "styled-components";

export const MainContainer = styled.div`
  width: 428px;
  height: 1134px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
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
  cursor: pointer;
`;
export const CardName = styled.div`
  width: 132px;
  height: 16px;
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: left;
  color: #6f6f6f;
  flex: none;
  order: 0;
  flex-grow: 0;
  /* border: solid 1px black; */
`;
export const CardBody = styled.div`
  width: 335px;
  height: 69px;
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: #000000;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const CardButton = styled.div`
  width: 174.33px;
  height: 28px;
  img {
    margin-right: 10px;
  }
`;
