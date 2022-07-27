import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import vector1 from "../../assets/vector1.png";
import vector2 from "../../assets/vector2.png";
import vector3 from "../../assets/vector3.png";
import vector4 from "../../assets/vector4.png";
import { gotoLoginPage, goToPostPage } from "../../routes/cordinator";

const Header = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token")
    gotoLoginPage(navigate)
  }
  useEffect(() => {
    showButton()
  }, [navigate])
  const showButton = () => {
    if (window.location.pathname === "/posts") {
      return (
        <div>
          <img src={vector1} />
          <img src={vector2} />
          <img src={vector3} />
          <img src={vector4} />
          <button onClick={logout}>Logout</button>
        </div>
      );
    } else if (window.location.pathname === "/") {
      return <></>;
    } else if (window.location.pathname === "/cadastro") {
      return (
        <div>
          <img src={vector1} />
          <img src={vector2} />
          <img src={vector3} />
          <img src={vector4} />
          <button onClick={() => goToPostPage(navigate)}>Entrar</button>
        </div>
      );
    } else if (window.location.pathname === "/adicionar-comentario/:id") {
      return (
        <div>
          <button onClick={() => goToPostPage(navigate)}>X</button>
          <img src={vector1} />
          <img src={vector2} />
          <img src={vector3} />
          <img src={vector4} />
          <button onClick={() => gotoLoginPage(navigate)}>Logout</button>
        </div>
      );
    }
  };
  return <div>{showButton()}</div>;
};
export default Header;
