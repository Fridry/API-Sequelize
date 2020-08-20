const Usuario = require("../models/Usuario");

module.exports = {
  async index(req, res) {
    try {
      const usuarios = await Usuario.findAll();

      return res.json(usuarios);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async show(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.params.id);

      if (!usuario) return res.json({ message: "Usuario não encontrado." });

      return res.json(usuario);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async store(req, res) {
    try {
      const usuario = await Usuario.create(req.body);

      return res.json(usuario);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.params.id);

      if (!usuario) return res.json({ message: "Usuario não encontrado." });

      await usuario.update(req.body);

      return res.json({ usuario });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async destroy(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.params.id);

      if (!usuario) return res.json({ message: "Usuario não encontrado." });

      await usuario.destroy();

      return res.json({ message: "Usuario excluido." });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
};
