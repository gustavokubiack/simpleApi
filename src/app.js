// arquivo onde é armazenado todo o coração do projeto, a roda de execução do projeto é server.js

// importando bibliotecas e as rotas

require("dotenv").config();
const express = require("express");
const connectionDB = require("./config/connection.config");

const app = express();

// ==> importando rotas do projeto
const index = require("./routes/index"); // rota padrão do projeto
// importar rota dos produtos

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ type: "application/vnd.api+json" }));

// ==> rotas do projeto
app.use(index); // ==> rota principal

// ==> rota dos produtos

app.set("connection", connectionDB);

module.exports = app;
