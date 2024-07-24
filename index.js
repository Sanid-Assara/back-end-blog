import express from "express";
import { postsRouter } from "./routers/postsRouter.js";

const PORT = process.env.PORT ?? 5000;

const app = express();

app.use(express.json());

app.use("/API/posts", postsRouter);

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}/API/posts`);
});
