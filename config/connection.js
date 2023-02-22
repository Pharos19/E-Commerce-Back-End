require('dotenv').config();

const Sequalize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
    ? new Sequalize(process.env.JAWSDB_URL)
    : new Sequalize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'mysql',
        dialectOptions: {
            decimalNumbers: true,
        },
    });

    module.exports = sequelize;