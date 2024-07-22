import express from "express";
const PORT = process.env.PORT ?? 5000;
const app = express();

// 1- Homepage (this include Nav and footer) a list of post + get request to retrieve all the post
app.get("/", (req, res) => {
  res.send("Test");
});

app.post("/posts", (req, res) => {
  res.send("A post");
});

// 2- Form to add new post and display post detail + Post request and get request posts/:id
app.get("/posts/:id", (req, res) => {
  res.send("Test");
});

app.post("/posts/:id", (req, res) => {
  res.send("A post");
});

// 3- Form to edit post and function to delete - put and delete request
app.put("/posts/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  // find the user based on the id and return the updated user

  res.json(body);
});

app.delete("/posts/:id", async (req, res) => {
  const { id } = req.params;
  // delete the user based on the id
  // const result = await client.query("DELETE FROM USERS WHERE id=$1", [id])

  res.send(`DELETE user ${id}`);
});

// Server Listener
app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}/`);
});

test;
