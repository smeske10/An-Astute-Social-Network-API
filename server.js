const express = require("express");
const db = require("./config/connection");
const { Thoughts } = require("./models");

const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/new-thoughts/:thoughts", (req, res) => {
  const newThoughts = new Thoughts({});
});
