const mysql = require('mysql2');
const Sequelize = require('sequelize');

module.exports = {
    connect: () => {
        return new Sequelize('lms', 'root', 'admin', {
            host: 'localhost',
            port: '3306',
            dialect: 'mysql'
        });
    }
};