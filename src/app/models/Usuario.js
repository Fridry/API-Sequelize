const { Model, DataTypes } = require("sequelize");

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "O campo não pode ser vazio.",
            },
          },
        },

        data_nascimento: {
          type: DataTypes.DATEONLY,
          validate: {
            notEmpty: true,
            isDate: {
              msg: "Data de nascimento inválida.",
            },
          },
        },

        cpf: {
          type: DataTypes.INTEGER,
          unique: true,
          validate: {
            notEmpty: true,
            len: {
              args: [11, 11],
              msg: "CPF inválido.",
            },
          },
        },

        telefone: {
          type: DataTypes.INTEGER,
          validate: {
            notEmpty: true,
            len: {
              args: [9, 14],
              msg: "Número inválido.",
            },
          },
        },

        email: {
          type: DataTypes.STRING,
          unique: true,
          validate: {
            notEmpty: true,
            isEmail: {
              msg: "Email inválido.",
            },
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
