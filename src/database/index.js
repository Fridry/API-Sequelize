const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Produto = require("../app/models/Produto");
const Setor = require("../app/models/Setor");
const Usuario = require("../app/models/Usuario");

const connection = new Sequelize(dbConfig);

Produto.init(connection);
Setor.init(connection);
Usuario.init(connection);

Usuario.associate(connection.models);
Setor.associate(connection.models);

module.exports = connection;
