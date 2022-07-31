import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, HEADER } from "../../constants/urls";
import GlobalStateContext from "../../global/GlobalStateContext";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import {
  CardBody,
  CardButton,
  CardName,
  CardPost,
  MainContainer,
} from "./styled";
import Comment from "../../assets/Comment.svg";
import Like from "../../assets/Like.svg";
import Dislike from "../../assets/Dislike.svg";
import axios from "axios";
import CommentForm from "./CommentForm";

const AddComment = () => {
  useProtectedPage();
  const [selectedPost, setSelectedPost] = useState({});
  const { listPosts, like, dislike } = useContext(GlobalStateContext);
  const [listComments, setListComments] = useState([]);

  const idPost = useParams();
  console.log(selectedPost);
  useEffect(() => {
    const currentPost =
      listPosts &&
      listPosts.find((item) => {
        return item.id === idPost.id;
      });
    setSelectedPost(currentPost);
  }, []);

  useEffect(() => {
    getComments();
  }, []);

 const getComments = () => {
    console.log("Entrou aqui");
    axios
      .get(`${BASE_URL}/posts/${idPost.id}/comments`, HEADER)
      .then((response) => {
        setListComments(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  console.log(listComments);
  const comments =
    listComments &&
    listComments.map((comment) => {
      return (
        <CardPost key={comment.id}>
          <CardName>
            <p>Enviado por: {comment.username}</p>
          </CardName>
          <CardBody>
            <h6>{comment.body}</h6>
          </CardBody>
          <CardButton>
            <button onClick={() => like("comments", comment.id)}>
              <img src={Like} />
            </button>
            <button onClick={() => dislike("comments", comment.id)}>
              <img src={Dislike} />
            </button>
          </CardButton>
        </CardPost>
      );
    });

  return (
    <MainContainer>
      <h1>AddComment</h1>

      {selectedPost && (
        <CardPost key={selectedPost.id}>
          <CardName>
            <p>Enviado por: {selectedPost.username}</p>
          </CardName>
          <CardBody>
            <h6>{selectedPost.title}</h6>
            <h6>{selectedPost.body}</h6>
          </CardBody>
          <CardButton>
            <button onClick={() => like("posts", selectedPost.id)}>
              <img src={Like} /> {selectedPost.voteSum}
            </button>
            <button onClick={() => dislike("posts", selectedPost.id)}>
              <img src={Dislike} /> {selectedPost.voteSum}
            </button>
            <button>
              <img src={Comment} /> {selectedPost.commentCount}
            </button>
          </CardButton>
        </CardPost>
      )}
      <CommentForm getComments={getComments}/>
      {comments}
    </MainContainer>
  );
};
export default AddComment;
