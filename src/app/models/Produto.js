const { Model, DataTypes } = require("sequelize");

class Produto extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        descricao: DataTypes.TEXT,
        preco: DataTypes.DECIMAL,
        quantidade: DataTypes.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Produto;
