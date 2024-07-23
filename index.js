import express from "express";
import { createPost, deletePost, getPost, getPosts, updatePost } from "./controllers/posts.js";

const PORT = process.env.PORT ?? 5000;
const app = express();

app.use(express.json());

app.get("/posts", getPosts);
app.post("/posts", createPost);
app.get("/posts/:id", getPost);
app.put("/posts:id", updatePost);
app.delete("/posts:id", deletePost);


// Server Listener
app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}/`);
});
