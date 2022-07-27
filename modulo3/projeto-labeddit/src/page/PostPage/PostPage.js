import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../global/GlobalContext";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import useForm from "../../hooks/useForm";

const PostPage = () => {
  const [listPosts, setListPosts] = useState([]);
  const { form, onChangeForm, cleanFields } = useForm({
    title: "",
    body: "",
  });
  const [newPost, setNewPost] = useState({})

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${BASE_URL}/posts`, {
        headers: {
            Authorization: token,
        },
      })
      .then((response) => {       
        console.log(response.data);
        setListPosts(response.data)
        
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [])

  const creatPost = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token")
    axios
    .post(`${BASE_URL}/posts`, form, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => {       
        alert("Post criado com sucesso")
        cleanFields()
        console.log(response)
      })
      .catch((error) => {
        console.log(error.response);
      });
}
  console.log(listPosts)
  const posts = listPosts && listPosts.map((post) => {
    console.log(post)
    return (
      <div key={post.id}>
        <p>{post.title}</p>
        <p>{post.body}</p>
      </div>
    );
  });
  return (
    <div>
      <h1>PostPage</h1>
      <form onSubmit={creatPost}>
        <input
          name="title"
          placeholder="Título do Post"
          type="text"
          value={form.title}
          onChange={onChangeForm}
          required
        />
        <input
          name="body"
          placeholder="Post"
          type="text"
          value={form.body}
          onChange={onChangeForm}
          required
          
         
        />
        <button>Postar</button>
      </form>
      {posts}
    </div>
  );
};
export default PostPage;
