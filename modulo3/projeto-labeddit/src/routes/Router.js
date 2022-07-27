import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddComment from "../page/AddComment/AddComment";
import LoginPage from "../page/LoginPage/LoginPage"
import PostPage from "../page/PostPage/PostPage";
import SignUpPage from "../page/SignUpPage/SignUpPage";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Header from "../components/Header/Header";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/posts" element={<PostPage />} />
        <Route path="/cadastro" element={<SignUpPage />} />
        <Route path="/adicionar-comentario/:id" element={<AddComment />} />
        <Route element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  );
};
