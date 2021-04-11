const axios = require("axios");
const api_url = "https://jsonplaceholder.typicode.com/posts";

exports.getIndex = (req, res, next) => {
  return res.json({ message: "successful" });
};

exports.getPosts = async (req, res, next) => {
  const response = await axios.get(api_url);
  res.json(response.data);
};

exports.getPostById = async (req, res, next) => {
  // console.log(req.params);
  const id = req.params.id;
  const response = await axios.get(`${api_url}/${id}`);
  res.json(response.data);
};
