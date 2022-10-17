import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../constants/baseUrl";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [listPurchase, setListPurchase] = useState([]);
  // console.log("listPurchase", listPurchase);
  console.log("cart", cart);

  const orderId = localStorage.getItem("orderId");

  useEffect(() => {
    productsStock();
    getListpurchase(orderId);
  }, []);

  const productsStock = () => {
    axios
      .get(`${BASE_URL}/products`)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const getListpurchase = (orderId) => {
    axios
      .get(`${BASE_URL}/client/show-order/${orderId}`)
      .then((res) => {
        setListPurchase(res.data.listPurchase);
      })
      .catch((error) => {
        console.log(error.response);
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
        setCart(res.data.order.products);
        productsStock();
        for (let product of res.data.order.products)
          if (foundIndex >= 0) {
            const newCart = [...cart];
            newCart[foundIndex].quantity += 1;
            setCart(newCart);
          } else {
            const newCart = [...cart];
            const newListPurchase = {
              name: product.productName,
              price: product.price,
              id: product.id,
              quantity: 1,
            };
            newCart.push(newListPurchase);
            setCart(newCart);
          }
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const removeFormCart = (products) => {
    const body = {
      productName: products.name,
    };
    console.log(products.name)

    if (products.quantity > 1) {
      const newCart = cart.map((product) => {
        if (product.name === products.name) {
          product.quantity -= 1;
        }
        return product;
      });
      setCart(newCart);
    } else {
      const newCart = cart.filter((product) => {
        return product.name !== products.name;
      });
      setCart(newCart);
    }

    console.log(body.productName);
    // console.log(orderId, "pro", purchaseToRemove);

    axios
      .delete(`${BASE_URL}/client/products/delete/${orderId}`, body)
      .then((res) => {
        getListpurchase(orderId);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const data = {
    cart,
    setCart,
    aaddToCart,
    productsStock,
    products,
    setProducts,
    removeFormCart,
    listPurchase,
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
