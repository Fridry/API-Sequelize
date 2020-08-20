const { Model, DataTypes } = require("sequelize");

class Setor extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        ramal: DataTypes.INTEGER,
      },
      {
        sequelize,
        tableName: "setores",
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Usuario, {
      foreignKey: "id",
    });
  }
}

module.exports = Setor;
