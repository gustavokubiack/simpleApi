const express = require("express");
const router = express.Router();
const productController = require("../controllers/api.js");
// rotas dos produtos

// ==> rotas dos produtos

router.get("/", productController.getAllProducts); // listar todos os produtos
router.get("/:id", productController.getProductById); // buscar pelo produto pelo id
router.post("/add", productController.addProduct); // criar produto
router.patch("/update/:id", productController.updateProductById); // atualizar produto
router.delete("/delete/:id", productController.deleteProductById); // deletar produto

module.exports = router;
