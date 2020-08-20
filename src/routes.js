const express = require("express");

const routes = express.Router();

const ProdutoController = require("./app/controllers/ProdutosController");
const SetorController = require("./app/controllers/SetorController");
const UsuarioController = require("./app/controllers/UsuarioController");

routes.get("/produtos", ProdutoController.index);
routes.get("/produtos/:id", ProdutoController.show);
routes.post("/produtos", ProdutoController.store);
routes.put("/produtos/:id", ProdutoController.update);
routes.delete("/produtos/:id", ProdutoController.destroy);

routes.get("/setores", SetorController.index);
routes.get("/setores/:id", SetorController.show);
routes.post("/setores", SetorController.store);
routes.put("/setores/:id", SetorController.update);
routes.delete("/setores/:id", SetorController.destroy);

routes.get("/usuarios", UsuarioController.index);
routes.get("/usuarios/:id", UsuarioController.show);
routes.post("/usuarios", UsuarioController.store);
routes.put("/usuarios/:id", UsuarioController.update);
routes.delete("/usuarios/:id", UsuarioController.destroy);

module.exports = routes;
