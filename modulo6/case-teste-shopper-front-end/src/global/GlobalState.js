import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../constants/baseUrl";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [listsPurchase, setListsPurchase] = useState([]);
  const [total, setTotal] = useState(0);
  const [popuptCartState, setPopuptCartState] = useState(false);
  const [confirmedOrderPopupState, setConfirmedOrderPopupState] = useState({
    isActive: false,
    summary: {
      id: null,
      products: null,
      total: null,
    },
  });
  const popupCart = () => {
    setPopuptCartState(true);
  };

  const hideCart = () => {
    if (popuptCartState || cart.length <= 1) setPopuptCartState(false);
  }

  const orderId = localStorage.getItem("orderId");

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  useEffect(() => {
    productsStock();
    getListpurchase();
  }, []);

  const calculateTotal = () => {
    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(total);
  };

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

  const aaddToCart = (addList) => {
    const foundIndex = cart.findIndex(
      (listInCart) => listInCart.name === addList.name
    );
    if (foundIndex >= 0) {
      const newCart = [...cart];
      newCart[foundIndex].quantity += 1;
      setCart(newCart);
    } else {
      const newCart = [...cart];
      const newListPurchase = {
        name: addList.name,
        price: addList.price,
        id: addList.id,
        quantity: 1,
      };
      newCart.push(newListPurchase);
      setCart(newCart);
    }
  };

  const removeFromCart = (products) => {
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
      // if (newCart.length === 0)
      setCart(newCart);
    }
   
  };

  const confirmeOrder = async () => {
    try {
      const body = {
        listPurchase: cart,
      };

      const response = await axios.post(
        `${BASE_URL}/client/order-purchase/${orderId}`,
        body
      );

      setConfirmedOrderPopupState({
        isActive: true,
        summary: response.data
      });

      setCart([]);
      productsStock();
      setPopuptCartState(false);
    } catch (error) {
      alert(error.response);
    }
  };

  const removeFromDatabase = async () => {
    try {
      for (let product of listsPurchase.listPurchase)
        await axios.delete(`${BASE_URL}/client/product/delete/${orderId}`, {
          data: {
            idProduct: product.idProduct,
            quantity: product.quantity,
          },
        });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const getListpurchase = () => {
    axios
      .get(`${BASE_URL}/client/show-order/${orderId}`)
      .then((res) => {
        setListsPurchase(res.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const closePopup = () => {
    setConfirmedOrderPopupState({
      isActive: false,
      summary: {
        id: null,
        products: null,
        total: null,
      },
    });
  };

  const data = {
    cart,
    aaddToCart,
    productsStock,
    products,
    removeFromCart,
    listsPurchase,
    total,
    confirmeOrder,
    confirmedOrderPopupState,
    closePopup,
    removeFromDatabase,
    popupCart,
    popuptCartState,
    setPopuptCartState,
    hideCart,
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
