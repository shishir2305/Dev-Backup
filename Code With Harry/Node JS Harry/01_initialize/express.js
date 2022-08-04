// understanding the basic use of express

import express from "express";
// const express = require("express");
const app = express(); // creates an express application
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Shishir Jha");
});

app.get("/about", (req, res) => {
  res.send("Blockchain Developer");
});

app.listen(port, () => {
  console.log("Machine Learning Engineer");
});
