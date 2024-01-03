import axios from "axios";

const baseURL = `${import.meta.env.VITE_API_URL}`;

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const token = localStorage.getItem("token");

if (token) {
    headers.Authorization = `Bearer ${token}`;
}

//Creating an axios instance with some basic configuration
export const axiosInstance = axios.create({
  baseURL,
  headers,
});
