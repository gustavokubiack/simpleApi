const express = require("express");
const router = express.Router();

// rotas dos produtos

// ==> rotas dos produtos

router.get("/api/v1/all-products"); // listar todos os produtos
router.post("api/v1/product"); // criar produto
router.patch("api/v1/product"); // atualizar produto
router.delete("api/v1/product"); // deletar produto
