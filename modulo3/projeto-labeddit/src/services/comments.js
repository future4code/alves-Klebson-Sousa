import axios from "axios";
import { BASE_URL, HEADER } from "../constants/urls";

export const addComment = (body, cleanFields, id) => {
    axios.post(`${BASE_URL}/posts/${id}/comments`, body, HEADER)
    .then((response) => {
        alert(response.data)
        cleanFields()
        // getComments() 
    })
    .catch((error) => {
        alert(error.response)
               
    })
  }
