const express = require("express");
const router = express.Router();
const productController = require("../controllers/api.js");
// rotas dos produtos

// ==> rotas dos produtos

router.get("/all", productController.getAllProducts); // listar todos os produtos
router.post("/add", productController.addProduct); // criar produto
router.patch("update"); // atualizar produto
router.delete("delete"); // deletar produto

module.exports = router;
