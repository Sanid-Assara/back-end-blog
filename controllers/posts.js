import { query } from "../utils.js";

// 1- Homepage (this include Nav and footer) a list of post + get request to retrieve all the post //Erika
export const getPosts = async (req, res) => {
  res.send("getProducts Test");
};

// 2- Form to add new post and display post detail + Post request and get request posts/:id  //Berkan
export const createPost = async (req, res) => {
  res.send("createProduct Test");
};
export const getPost = async (req, res) => {
  res.send("getProduct Test");
};

// 3- Form to edit post and function to delete - put and delete request //Sanid
export const updatePost = async (req, res) => {
  res.send("updateProduct Test");
};

export const deletePost = async (req, res) => {
  res.send("deleteProduct Test");
};
