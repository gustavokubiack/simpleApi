// rota padrão do projeto.

const express = require("express");
const router = express.Router();

// (GET) ==> localhost:7777/api/v1/
router.get("/api/v1", (req, res) => {
  try {
    res.status(200).json({
      title: "simpleApi",
      message:
        "Bem vindo ao simpleaApi, um servidor que realiza o cadastro de usuários e suas informações",
      version: "1.0.0",
    });
  } catch (err) {
    console.log({ message: err });
  }
});

module.exports = router;
