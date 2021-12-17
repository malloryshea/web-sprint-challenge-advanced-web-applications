import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const articleService = () => {
  return axiosWithAuth()
    .get("http://localhost:5000/api/articles")
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

export default articleService;
