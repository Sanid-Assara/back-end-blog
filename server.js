import express from "express";
import { postsRouter } from "./routes/posts.js";
const PORT = process.env.PORT ?? 5000;
const app = express();

app.use(express.json());

app.use("/posts", postsRouter);

// Server Listener
app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}/`);
});
