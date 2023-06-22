const express = require("express");

const app = express();

app.get("/favicon.ico", (req, res) => res.status(204));

app.use("/users", (req, res, next) => {
  console.log("usuarios");
  res.send("<h1>Usuarios</h1>");
});

app.use("/", (req, res, next) => {
  console.log("inicio");
  res.send("<h1>Inicio</h1>");
});

app.listen(3001);
