import Post from "../models/Post.js";
// import pg from "pg";
// const { Client } = pg;

//Erika
// 1- Homepage (this include Nav and footer) a list of post + get request to retrieve all the post
export const getPosts = async (req, res) => {
  res.send("<h1>If you see me, it means it works</h1>"); //Delete this when you start coding
  // You code solution goes here!
};
//Erika

//Berkan
// 2- Form to add new post and display post detail + Post request and get request posts/:id
export const createPost = async (req, res) => {
  try {
    // const { author, title, content, cover } = req.body;
    // const client = new Client({connectionString: process.env.PG_URI});
    // client. connect();
    // const result = await client.query("INSERT INTO posts (author, title, content, cover) VALUES ($1, $2, $3, $4) RETURNING *;", [author, title, content, cover]);
    // client.end();
    // res.status(200).json(result.rows);
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
};

export const getPost = async (req, res) => {
  // You code solution goes here!
};
//Berkan

//Sanad
// 3- Form to edit post and function to delete - put and delete request
export const updatePost = async (req, res) => {
  try {
    const {
      body: { author, title, content, cover, date },
      params: { id },
    } = req;
    if (!author || !title || !content || !cover || !date)
      return res.status(400).json({
        error: "All field are required",
      });
    const post = await Post.findByPk(id);
    if (!post) return res.status(404).json({ error: "Post not found" });
    await post.update(req.body);
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deletePost = async (req, res) => {
  // You code solution goes here!
};
//Sanad
