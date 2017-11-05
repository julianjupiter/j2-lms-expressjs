const Sequelize = require('sequelize');
const sequelize = require('../utils/Database');
const connection = sequelize.connect();

const Book = connection.define('book', 
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.TEXT
        },
        published_in: {
            type: Sequelize.DATE
        },
        created_at: {
            type: Sequelize.STRING
        }
    }, {
        timestamps: false,
        underscored: true,
        freezeTableName: true
    }
);
    
exports.findAll = () => {
    return Book.findAll();
};

exports.findById = (id) => {
    return Book.findById(id);
};