module.exports = {
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: 'PHOTO_ALBUM',
        host: 'localhost',
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