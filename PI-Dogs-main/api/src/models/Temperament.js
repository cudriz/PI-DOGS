const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Temperaments', {
        ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        timestamps: false
    })
}