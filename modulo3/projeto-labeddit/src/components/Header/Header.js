import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import vector1 from "../../assets/vector1.png";
import vector2 from "../../assets/vector2.png";
import vector3 from "../../assets/vector3.png";
import vector4 from "../../assets/vector4.png";
import { goToLoginPage, goToPostPage } from "../../routes/cordinator";

const Header = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token")
    goToLoginPage(navigate)
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
          <button onClick={() => goToLoginPage(navigate)}>Login</button>
        </div>
      );
    } else if (window.location.pathname.includes("/adicionar-comentario/")
    ) {
      return (
        <div>
          <button onClick={() => goToPostPage(navigate)}>X</button>
          <img src={vector1} />
          <img src={vector2} />
          <img src={vector3} />
          <img src={vector4} />
          <button onClick={() => goToLoginPage(navigate)}>Logout</button>
        </div>
      );
    }
  };
  return <div>{showButton()}</div>;
};
export default Header;
