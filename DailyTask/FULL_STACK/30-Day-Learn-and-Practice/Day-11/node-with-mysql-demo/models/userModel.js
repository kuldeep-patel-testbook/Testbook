
//import db from '../db';

const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const UserModel = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = UserModel;