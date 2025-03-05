import axios from "axios";

export const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_ACCOUNT_SERVICE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
