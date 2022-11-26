import styled from "styled-components";
import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";

export const Container = styled.li`
  width: 15.625rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: red;
  border-radius: 0.625rem;

  box-shadow: rgb(155, 61, 227) 0px 0px 13px 3px;
  -webkit-box-shadow: rgb(155, 61, 227) 0px 0px 13px 3px;
  -moz-box-shadow: rgb(155, 61, 227) 0px 0px 13px 6px;

  h3,
  .card-price {
    text-align: center;
    margin: 0.625rem 0;
  }
`;

export const Ingrdients = styled.p`
  width: auto;
  margin-left: 5px;
  margin-right: 5px;
`;
export const ImageCard = styled.img`
  width: 15.625;
`;
export const AddCartButton = styled(AddShoppingCartSharpIcon)`
  && {
    width: 2.5rem;
    font-size: 2.5rem;
    color: #e0c529;
    margin: 10px auto;
    display: block;
    cursor: pointer;
    :hover {
      font-size: 2.75rem;
      margin-bottom: 6px;
    }
    :active {
      position: relative;
      top: 5px;
    }
  }
`;
