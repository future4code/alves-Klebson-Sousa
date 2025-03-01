import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, HEADER } from "../../constants/urls";
import GlobalStateContext from "../../global/GlobalStateContext";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import Comment from "../../assets/Comment.svg";
import Like from "../../assets/Like.svg";
import Dislike from "../../assets/Dislike.svg";
import axios from "axios";
import CommentForm from "./CommentForm";
import * as AA from "./styled";

const AddComment = () => {
  useProtectedPage();
  const [selectedPost, setSelectedPost] = useState({});
  const { listPosts, like, dislike } = useContext(GlobalStateContext);
  const [listComments, setListComments] = useState([]);

  const idPost = useParams();
  
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
    axios
      .get(`${BASE_URL}/posts/${idPost.id}/comments`, HEADER)
      .then((response) => {
        setListComments(response.data);
      })
      .catch((error) => {
        alert(error.response);
      });
  };

  const comments =
    listComments &&
    listComments.map((comment) => {
      return (
        <AA.CardPost key={comment.id}>
          <AA.CardName>
            <p>Enviado por: {comment.username}</p>
          </AA.CardName>
          <AA.CardBody>
            <h6>{comment.body}</h6>
          </AA.CardBody>
          <AA.CardButton>
            <button onClick={() => like("comments", comment.id)}>
              <img src={Like} /> {comment.voteSum}
            </button>
            <button onClick={() => dislike("comments", comment.id)}>
              <img src={Dislike} /> {comment.voteSum}
            </button>
          </AA.CardButton>
        </AA.CardPost>
      );
    });

  return (
    <AA.MainContainer>
      <h1>AddComment</h1>

      {selectedPost && (
        <AA.CardPost key={selectedPost.id}>
          <AA.CardName>
            <p>Enviado por: {selectedPost.username}</p>
          </AA.CardName>
          <AA.CardBody>
            <h6>{selectedPost.title}</h6>
            <h6>{selectedPost.body}</h6>
          </AA.CardBody>
          <AA.CardButton>
            <button onClick={() => like("posts", selectedPost.id)}>
              <img src={Like} /> {selectedPost.voteSum}
            </button>
            <button onClick={() => dislike("posts", selectedPost.id)}>
              <img src={Dislike} /> {selectedPost.voteSum}
            </button>
            <button>
              <img src={Comment} /> {selectedPost.commentCount}
            </button>
          </AA.CardButton>
        </AA.CardPost>
      )}
      <CommentForm getComments={getComments} />
      {comments}
    </AA.MainContainer>
  );
};
export default AddComment;
