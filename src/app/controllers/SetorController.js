const Setor = require("../models/Setor");

module.exports = {
  async index(req, res) {
    try {
      const setores = await Setor.findAll();

      return res.json(setores);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async show(req, res) {
    try {
      const setor = await Setor.findByPk(req.params.id);

      if (!setor) return res.json({ message: "Setor não encontrado." });

      return res.json(setor);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async store(req, res) {
    try {
      const setor = await Setor.create(req.body);

      return res.json(setor);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const setor = await Setor.findByPk(req.params.id);

      if (!setor) return res.json({ message: "Setor não encontrado." });

      await setor.update(req.body);

      return res.json({ setor });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async destroy(req, res) {
    try {
      const setor = await Setor.findByPk(req.params.id);

      if (!setor) return res.json({ message: "Setor não encontrado." });

      await setor.destroy();

      return res.json({ message: "Setor excluido." });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
};
