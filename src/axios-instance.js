import axios from "axios";

const axiosInstance = axios.create({
  baseURL : "https://fir-f0f31.firebaseio.com/"
})

export default axiosInstance