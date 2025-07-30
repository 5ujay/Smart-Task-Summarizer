import axios from "axios";

const api = axios.create({
  baseURL: "https://smart-task-summarizer.onrender.com/api",
});

export default api;
