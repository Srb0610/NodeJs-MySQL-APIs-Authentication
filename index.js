const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const path = require("path");

// app.use(bodyparser.json);
app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.get("/:id", (req, res) => {
  res.send(`This is  a get request  ${req.params.id}`);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "form.html"));
});

app.post("/submit-form", (req, res) => {
  res.json(req.body);
});

app.put("/", (req, res) => {
  res.send("This is  a put request");
});

app.delete("/", (req, res) => {
  res.send("this is a delete request");
});

app.listen(8000, () => {
  console.log("server started");
});
