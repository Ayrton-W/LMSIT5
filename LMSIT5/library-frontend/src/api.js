import axios from "axios";


const api = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // ✅ important for session cookies
});

export default api;