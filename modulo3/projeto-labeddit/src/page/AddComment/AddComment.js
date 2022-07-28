import React from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import  useProtectedPage  from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";

const AddComment = () => {
  useProtectedPage()
  const params = useParams()
  console.log(params)
  const post = useRequestData({}, `${BASE_URL}/posts/${params.id}/comments`)
  return (
    <div>
      <h1>AddComment</h1>
    </div>
  );
};
export default AddComment;
