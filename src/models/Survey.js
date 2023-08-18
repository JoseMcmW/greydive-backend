const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Survey",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
        allowNull: false,
        primaryKey: true,
      },
      full_name: {
        type: DataTypes.STRING,
        allowNull:false
      },
      email: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: false
      },
      birth_date: {
        type: DataTypes.STRING,
        allowNull:false
      },
      country_of_origin: {
        type: DataTypes.STRING,
        allowNull:false
      },
      terms_and_conditions: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    },
    {
      timestamps: true,
    }
  )
}