import styled from "styled-components";

export const Container = styled.li`
  width: 250px;
  /* height: 400px; */
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: red;
  border-radius: 10px;

  box-shadow: rgb(155, 61, 227) 0px 0px 13px 3px;
  -webkit-box-shadow: rgb(155, 61, 227) 0px 0px 13px 3px;
  -moz-box-shadow: rgb(155, 61, 227) 0px 0px 13px 6px;

  h3,
  .card-price {
    text-align: center;
    margin: 10px 0;
  }
`;

export const Ingrdients = styled.p`
  width: auto;
  margin-left: 5px;
  margin-right: 5px;
`;
export const ImageCard = styled.img`
  width: 250px;
`;
export const AddCartButton = styled.img`
  width: 40px;
  margin: 10px auto;
  display: block;
  cursor: pointer;
  :hover {
    width: 44px;
    margin-bottom: 6px;
  } 
  :active {
    position: relative;
    top: 5px;
  }
`;
export const Container3 = styled.li``;
