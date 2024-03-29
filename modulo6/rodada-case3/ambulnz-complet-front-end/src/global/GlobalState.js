import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/baseUrl";
import { GlobalStateContext } from "./GlobalContex";

const GlobalState = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0)
  const [orderSuccessPopupState, setOrderSuccessPopupState] = useState({
    isActive: false,
    summary: {
      id: null,
      pizzas: null,
      total: null
    }
  })

  useEffect(() => {
    const token = localStorage.getItem("token")
    axios
      .get(`${BASE_URL}/pizzas/menu`, {
        headers: {
          Authorization: token
        }
      })
      .then((res) => {
        setPizzas(res.data.pizzas);
      })
      .catch((error) => {
      });
  }, []);

  useEffect(() => {
    calculateTotal()
  }, [cart])

  const addToCart = (pizzaToAdd) => {
    const foundIndex = cart.findIndex(
      (pizzaInCart) => pizzaInCart.name === pizzaToAdd.name
    );

    if (foundIndex >= 0) {
      const newCart = [...cart];
      newCart[foundIndex].quantity += 1;

      setCart(newCart);
    } else {
      const newCart = [...cart];
      const newPizza = {
        name: pizzaToAdd.name,
        price: pizzaToAdd.price,
        imageUrl: pizzaToAdd.imageUrl,
        quantity: 1,
      };

      newCart.push(newPizza);
      setCart(newCart);
    }
  };

  const remoFromCart = (pizzaToRemove) => {
    if (pizzaToRemove.quantity > 1) {
      const newCart = cart.map((pizza) => {
        if (pizza.name === pizzaToRemove.name) {
          pizza.quantity -= 1
        }
        return pizza
      })
      
      setCart(newCart)
    } else {
      const newCart = cart.filter((pizza) => {
        return pizza.name !== pizzaToRemove.name
      })
      setCart(newCart)
    }
  }

  const calculateTotal = () => {
    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(total)
  };

  const confirmOrder = async () => {
    try {
      const body = {
      pizzas: cart
    }

    const res = await axios.post(`${BASE_URL}/orders`, body)
    setOrderSuccessPopupState({
      isActive: true,
    summary: res.data
    })
    setCart([])

    } catch (error) {
      alert(error.response.data.message)
    }    
   
  }  

  const priceFormated = (price) => {
    const formated = price.toLocaleString(
      "pt-br", { style: "currency", currency: "USD" }
      );
      return formated
  };

  const closePopup = () => {
    setOrderSuccessPopupState({
      isActive: false,
      summary: {
        id: null,
        pizzas: null,
        total: null
      }
    })
  }

  const data = {
    pizzas,
    addToCart,
    cart,
    remoFromCart,
    calculateTotal,
    total,
    confirmOrder,
    orderSuccessPopupState,
    closePopup,
    priceFormated
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
