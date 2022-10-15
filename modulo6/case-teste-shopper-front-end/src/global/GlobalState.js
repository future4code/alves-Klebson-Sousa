import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants/baseUrl";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  console.log("cart", cart);

  useEffect(() => {
    productsStock();
  }, []);

  const productsStock = () => {
    axios
      .get(`${BASE_URL}/products`)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((error) => {
        console.log(error.res);
      });
  };

  const aaddToCart = (addList) => {
    const foundIndex = cart.findIndex(
      (listInCart) => listInCart.name === addList.name
    );

    const body = {
      listPurchase: [
        {
          productName: addList.name,
          quantity: 1,
        },
      ],
    };

    const orderId = localStorage.getItem("orderId");

    axios
      .post(`${BASE_URL}/client/order-purchase/${orderId}`, body)
      .then((res) => {
        setCart(res.data.order)
        if (foundIndex >= 0) {
          const newCart = [...cart];
          newCart[foundIndex].quantity += 1;
          setCart(newCart);
        } else {
          const newCart = [...cart];
          const newListPurchase = {
            name: addList.name,
            price: addList.price,
            quantity: 1,
            productId: addList.productId
          };
          newCart.push(newListPurchase);
          setCart(newCart);
        }
        productsStock();
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  // const removeFormCart = (purchaseToRemove) => {
  //   const body = {
  //     productId: purchaseToRemove.productId
  //   }

  //   axios.delete(`${BASE_URL}/client/product/delete/${orderId}`, body);

  //   if (purchaseToRemove.quantity > 1) {
  //     const newCart = cart.map((product) => {
  //       if (product.name === purchaseToRemove.name) {
  //         product.quantity -= 1;
  //       }
  //       return product;
  //     });

  //     setCart(newCart);
  //   } else {
  //   }
  // };

  const data = {
    cart,
    setCart,
    aaddToCart,
    productsStock,
    products,
    setProducts,
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
