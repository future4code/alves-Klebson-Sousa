export const BASE_URL = "https://labeddit-2.herokuapp.com";
// "https://labeddit.herokuapp.com"
export const HEADER = {
  headers: {
    Authorization: localStorage.getItem("token"),
  },
};
