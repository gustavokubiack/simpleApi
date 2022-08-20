// arquivo onde é armazenado todo o coração do projeto, a rota de execução do projeto é server.js

require("dotenv").config();
const express = require("express");
const connectionDB = require("./config/connection.config");

const app = express();

// ==> importando rotas do projeto
const index = require("./routes/index"); // rota padrão do projeto
const products = require("./routes/produts.routes"); // rota dos produtos

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ type: "application/vnd.api+json" }));

// ==> rotas do projeto
app.use(index); // ==> rota principal
app.use("/api/v1/product/", products); // ==> rota dos produtos

// ==> conexão com o mongoDB
app.set("connection", connectionDB);

module.exports = app;
