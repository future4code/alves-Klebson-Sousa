import React, { useContext, useEffect, useState } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import useForm from "../../hooks/useForm";
import useProtectedPage from "../../hooks/useProtectedPage";
import {
  MainContainer,
  CardPost,
  Title,
  InputPost,
  ButtonPost,
  ContainerCard,
  CardButton,
} from "./styled";
import { goToAddComment } from "../../routes/cordinator";
import { useNavigate, useParams } from "react-router-dom";
import Comment from "../../assets/Comment.svg";
import Like from "../../assets/Like.svg";
import Dislike from "../../assets/Dislike.svg";
// import useRequestData from "../../hooks/useRequestData";
import * as P from "./styled"

const PostPage = () => {
  useProtectedPage();
  const navigate = useNavigate();
  // const [listPosts, setListPosts] = useState([]);
  const { listPosts, getPosts, like, disLike } = useContext(GlobalStateContext);
  const { form, onChangeForm, cleanFields } = useForm({
    title: "",
    body: "",
  });

  // const listPosts = useRequestData([], `${BASE_URL}/posts`)
  // const onClickCard = (id) => {
  //   goToAddComment(navigate, id)
  // }
  const creatPost = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    axios
      .post(`${BASE_URL}/posts`, form, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        alert("Post criado com sucesso");
        cleanFields();
        getPosts();

        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  const posts =
    listPosts &&
    listPosts.map((post) => {      
      return (
        <P.CardPost
          key={post.id}          
        >
          <div onClick={() => goToAddComment(navigate, post.id)}>
            <p>Enviado por: {post.username}</p>
            <h6>{post.title}</h6>
            <h6>{post.body}</h6>
          </div>
          <P.CardButton>
            <button onClick={() => like("posts",post.id)}>
              <img src={Like} /> {post.voteSum}
            </button>
            
            <button onClick={() => disLike("posts",post.id)}>
              <img src={Dislike} /> {post.voteSum}
            </button>
            <button>
              <img src={Comment} /> {post.commentCount}
            </button>
          </P.CardButton>
        </P.CardPost>
      );
    });
  return (
    <P.MainContainer>
      <form onSubmit={creatPost}>
        <P.Title
          name="title"
          placeholder="Título do Post"
          type="text"
          value={form.title}
          onChange={onChangeForm}
          required
        />
        <P.InputPost
          name="body"
          placeholder="Post"
          type="text"
          value={form.body}
          onChange={onChangeForm}
          required
        />
        <P.ButtonPost>Postar</P.ButtonPost>
      </form>
      <P.ContainerCard>{posts}</P.ContainerCard>
    </P.MainContainer>
  );
};
export default PostPage;
