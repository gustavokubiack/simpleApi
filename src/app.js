// arquivo onde é armazenado todo o coração do projeto, a roda de execução do projeto é server.js

// importando bibliotecas e as rotas

require("dotenv").config();
const express = require("express");

const app = express();

// ==> importando rotas do projeto
const index = require("./routes/index");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ type: "application/vnd.api+json" }));

// ==> rotas do projeto
app.use(index);

module.exports = app;
