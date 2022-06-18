require('dotenv').config();

module.exports = {
    // development: {
    //     username: 'postgres',
    //     password: 'password',
    //     database: 'postgres',
    //     host: 'db',
    //     dialect: 'postgres'
    // },
    development: {
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        host: 'db',
        dialect: 'postgres'
    },
    // test: {
    //     username: process.env.CI_DB_USERNAME,
    //     password: process.env.CI_DB_PASSWORD,
    //     database: process.env.CI_DB_NAME,
    //     host: '127.0.0.1',
    //     dialect: 'mysql'
    // },
    // production: {
    //     username: process.env.PROD_DB_USERNAME,
    //     password: process.env.PROD_DB_PASSWORD,
    //     database: process.env.PROD_DB_NAME,
    //     host: process.env.PROD_DB_HOSTNAME,
    //     dialect: 'mysql'
    // }
};