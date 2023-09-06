const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dogs', {
    ID: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue:DataTypes.UUIDV4
    },
    Imagen: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Altura: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
        min: 0
      }
    },
    Peso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
        min: 0
      }
    },
    Añosdevida: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
        min: 0
      }
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
  }
  },
  {
    timestamps: false,
  }
);
};
