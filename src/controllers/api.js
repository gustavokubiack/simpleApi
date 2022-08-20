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

// adiciona um produto
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

// pega um produto pelo id
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(401).json({
      message: "Erro ao listar produtos" + console.log(err),
    });
  }
};
// atualiza um produto pelo id
exports.updateProductById = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id);
    res.status(201).json({
      message: "Produto atualiado com sucesso",
    });
  } catch (err) {
    res.status(401).json({
      message: "Erro ao atulizar um produto pelo id" + console.log(err),
    });
  }
};

// deleta um produto pelo id
exports.deleteProductById = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(201).json({
      message: "Produto deletado com sucesso",
    });
  } catch (err) {
    res.status(401).json({
      message: "Erro ao deletar o produto" + console.log(err),
    });
  }
};
