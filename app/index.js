const mysql = require('./mysql')
const server = require('./servers')
const sqlite = require('./sqlite')

module.exports = {
    server,
    mysql,
    sqlite
}