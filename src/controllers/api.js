const Product = require("../models/product.model");

// lista todos os produtos
exports.getAllProducts = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (err) {
    res.status(401).json({
      message: "Erro ao listar produtos" + console.log(err),
    });
  }
};

// adiciona um produto no mercado
exports.addProduct = async (req, res) => {
  const product = req.body;
  try {
    await Product.create(product);
    res.status(201).json({
      message: "Produto criado com sucesso",
    });
  } catch (err) {
    res.status(401).json({
      message: "Erro ao adicionar produto" + console.log(err),
    });
  }
};

// atualiza um produto no mercado
