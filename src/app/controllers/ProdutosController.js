const Produto = require("../models/Produto");

module.exports = {
  async index(req, res) {
    try {
      const produtos = await Produto.findAll();

      return res.json(produtos);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async show(req, res) {
    try {
      const produto = await Produto.findByPk(req.params.id);

      if (!produto) return res.json({ message: "Produto não encontrado." });

      return res.json(produto);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async store(req, res) {
    try {
      const produto = await Produto.create(req.body);

      return res.json(produto);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const produto = await Produto.findByPk(req.params.id);

      if (!produto) return res.json({ message: "Produto não encontrado." });

      await produto.update(req.body);

      return res.json({ produto });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async destroy(req, res) {
    try {
      const produto = await Produto.findByPk(req.params.id);

      if (!produto) return res.json({ message: "Produto não encontrado." });

      await produto.destroy();

      return res.json({ message: "Produto excluido." });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
};
