import axios from "axios";

const api = axios.create({
  baseURL: "https://smart-task-summarizer.onrender.com/",
});

export default api;
