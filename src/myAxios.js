import Axios from "axios";

const myAxios = Axios.create({
  baseURL: "http://localhost:7999/api/post",
});

export default myAxios;