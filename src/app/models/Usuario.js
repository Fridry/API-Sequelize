const { Model, DataTypes } = require("sequelize");

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        data_nascimento: {
          type: DataTypes.DATEONLY,
          isDate: {
            args: true,
            msg: "Data de nascimento inválida.",
          },
        },
        cpf: {
          type: DataTypes.INTEGER,
          unique: true,
          len: {
            args: [11],
            msg: "CPF inválido.",
          },
        },
        telefone: {
          type: DataTypes.INTEGER,
          min: 9,
        },
        email: {
          type: DataTypes.STRING,
          unique: true,
          isEmail: {
            args: true,
            msg: "Email inválido.",
          },
        },
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Setor, { foreignKey: "setor_id", as: "setor" });
  }
}

module.exports = Usuario;
