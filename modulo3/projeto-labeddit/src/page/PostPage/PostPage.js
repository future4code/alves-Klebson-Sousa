import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../global/GlobalContext";
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
} from "./styled";
import { goToAddComment } from "../../routes/cordinator";
import { useNavigate } from "react-router-dom";
// import useRequestData from "../../hooks/useRequestData";

const PostPage = () => {
  useProtectedPage();
  const navigate = useNavigate()
  const [listPosts, setListPosts] = useState([]);
  const { form, onChangeForm, cleanFields } = useForm({
    title: "",
    body: "",
  });
  // const listPosts = useRequestData([], `${BASE_URL}/posts`)
  console.log(listPosts)
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
        console.log(response.data);
        setListPosts(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  const onClickCard = (id) => {
    goToAddComment(navigate, id)
  }
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
      console.log(post);
      return (
        <CardPost key={post.id} onClick={() => onClickCard(post.id)}>
          <p>Enviado por: {post.username}</p>
          <h6>{post.title}</h6>
          <h6>{post.body}</h6>
        </CardPost>
      );
    });
  return (
    <MainContainer>
      <form onSubmit={creatPost}>
        <Title
          name="title"
          placeholder="Título do Post"
          type="text"
          value={form.title}
          onChange={onChangeForm}
          required
        />
        <InputPost
          name="body"
          placeholder="Post"
          type="text"
          value={form.body}
          onChange={onChangeForm}
          required
        />
        <ButtonPost>Postar</ButtonPost>
      </form>
      <ContainerCard>{posts}</ContainerCard>
    </MainContainer>
  );
};
export default PostPage;
