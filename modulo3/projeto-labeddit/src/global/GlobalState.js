import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants/urls";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
    const [listPosts, setListPosts] = useState([])
    const [listComments, setListComments] = useState([])

    useEffect(() => {
        getPosts();
      }, []);

    const getPosts = () => {
    const token = localStorage.getItem("token");
    axios
      .get(`${BASE_URL}/posts`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {        
        setListPosts(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

    const values = {
        listPosts, setListPosts, listComments, setListComments, getPosts
    }
    const Provider = GlobalStateContext.Provider    

    return <Provider value={values}>{props.children}</Provider>
}
export default GlobalState