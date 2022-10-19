import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../constants/baseUrl";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [listProducts, setListProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [confirmedOrderPopup, setConfirmedOrderPopup] = useState({
    isActive:false,
    summary: {
      id: null,
      products: null,
      total: null
    }
  });

  const orderId = localStorage.getItem("orderId");

  useEffect(() => {
    
    calculateTotal();
  }, [cart]);

  useEffect(() => {
    productsStock();
    getListpurchase();
  }, [])

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
    const body = {
      data: {
        productId: products.id,
        quantity: 1,
      },
    };

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

    axios
      .delete(`${BASE_URL}/client/product/delete/${orderId}`, body)
      .then((res) => {})
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const confirmeOrder = async () => {
    try {
      const body = {
        listPurchase: cart
      };

      const response = await axios.post(
        `${BASE_URL}/client/order-purchase/${orderId}`,
        body
      )

      setConfirmedOrderPopup({
        isActive:true,
        summary: response.data.order
      })

      setCart([])
      productsStock();
    } catch (error) {
      console.log(error.response);
    }
  };

  const getListpurchase = () => {
    axios
      .get(`${BASE_URL}/client/show-order/${orderId}`)
      .then((res) => {
        setListProducts(res.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const closePopup = () => {
    setConfirmedOrderPopup({
      isActive:false,
      summary: {
        id: null,
        products: null,
        total: null
      }
    })
  }

  const data = {
    cart,
    setCart,
    aaddToCart,
    productsStock,
    products,
    setProducts,
    removeFromCart,
    listProducts,
    total,
    confirmeOrder,
    confirmedOrderPopup,
    closePopup
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
