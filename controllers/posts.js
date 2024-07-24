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

// CREATE POST BERKAN
export const createPost = async (req, res) => {
  try {
    const result = await Post.create(red.body);
    res.status(200).json({message: "Post created", result});
    // const { author, title, content, cover } = req.body;

  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
};


// GET POST BERKAN
export const getPost = async (req, res) => {

const  {id} = req.params();

try {
  const result = await Post.findByPk({id});
  res.status(200).json({message: "got worked", result});

} catch (error) {
  console.log(error);
  res.status(500).send("Something went wrong");
}
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
  try {
    const {
      params: { id },
    } = req;
    const user = await Post.findByPk(id);
    if (!user) return res.status(404).json({ error: "Post not found" });
    await user.destroy();
    res.json({ message: "Post deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//Sanad