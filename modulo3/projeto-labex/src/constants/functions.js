import { goToLoginPage } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const useProtecPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      console.log("Não está logado!!!");
      goToLoginPage(navigate);
    }
  }, []);
};
