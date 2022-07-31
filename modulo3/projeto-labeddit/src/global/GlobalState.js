import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL, HEADER } from "../constants/urls";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [listPosts, setListPosts] = useState([]);
  const [listComments, setListComments] = useState([]);
  const [likePost, setLikePost] = useState(false);
  const [disLikePost, setDisLikePost] = useState(false);

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

  const like = (postComment, id) => {
    if (likePost === true) {
      removeLike(setLikePost, likePost, id);
      setLikePost(!likePost);
    } else {
      const body = {
        direction: 1,
      };
      axios
        .post(`${BASE_URL}/${postComment}/${id}/votes`, body, HEADER)
        .then((response) => {
          setLikePost(!likePost);
          console.log("like")
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
  };
  const disLike = (postComment,id ) => {
    if (disLikePost === true) {
      removeLike(setDisLikePost, disLikePost, id);
      setDisLikePost(!disLikePost);
    } else {
      const body = {
        direction: -1,
      };
      axios
        .put(`${BASE_URL}/${postComment}/${id}/votes`, body, HEADER)
        .then((response) => {
          console.log("disLike")
          setDisLikePost(!disLikePost);
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
  };
  const removeLike = (setLike, like, id) => {
    axios
      .delete(`${BASE_URL}/posts/${id}/votes`, HEADER)
      .then((response) => {
        setLike(!like);
        console.log("Removeu")
      })
      .catch((error) => {
        alert(error.response);
      });
  };

  const values = {
    listPosts,
    setListPosts,
    listComments,
    setListComments,
    getPosts,
    like,
    disLike,
  };
  const Provider = GlobalStateContext.Provider;

  return <Provider value={values}>{props.children}</Provider>;
};
export default GlobalState;
