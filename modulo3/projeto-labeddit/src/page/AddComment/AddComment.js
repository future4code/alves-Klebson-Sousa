import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import GlobalStateContext from "../../global/GlobalStateContext";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { CardBody, CardButton, CardName, CardPost, MainContainer } from "./styled";
import Comment from "../../assets/Comment.svg";
import Like from "../../assets/Like.svg";
import Dislike from "../../assets/Dislike.svg";

const AddComment = () => {
  useProtectedPage();
  const [selectedPost, setSelectedPost] = useState({});
  const { listPosts } = useContext(GlobalStateContext);
  // const params = useParams()
  // console.log("Aqui está params", params.id)
  const idPost = useParams();
  // console.log(selectedPost )
  // console.log(idPost)
  console.log(listPosts);
  useEffect(() => {
    // const currentPost = listPosts && listPosts.map((item) => {
    //   console.log(item)
    //   if (item.id === idPost)
    //    return item
    // })
    const currentPost =
      listPosts &&
      listPosts.find((item) => {
        console.log(item);
        return item.id === idPost.id;
      });
    // console.log(currentPost)
    setSelectedPost(currentPost);
  }, []);
  // const post = useRequestData([], `${BASE_URL}/posts/${params.id}`);

  // const teste = listPosts && listPosts.map((post) => {
  //   if (post.id === params.id){
  //     return (<div key={post.id}>
  //       <p>{post.username}</p>
  //       <p>{post.body}</p>
  //       </div>)
  //   } else {
  //     return <div></div>
  //   }
  // })

  return (
    <MainContainer>
      <h1>AddComment</h1>

      {selectedPost ? (
        <CardPost key={selectedPost.id}>
          <CardName>
            <p>Enviado por: {selectedPost.username}</p>
            </CardName>
          <CardBody>
            <h6>{selectedPost.title}</h6>
            <h6>{selectedPost.body}</h6>
          </CardBody>
          <CardButton>            
            <img src={Like}/>
            <img src={Dislike}/>
            <img src={Comment}/>
          </CardButton>
        </CardPost>
      ) : (
        <div>
          <h4>Carregando...</h4>
        </div>
      )}
    </MainContainer>
  );
};
export default AddComment;
