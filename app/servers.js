const Database = require('./mysql')
const Sql = require('./sqlite')
const { keys } = require('/etc/dbmanager/config.json')

const login = (host, user, password, port) => {
    const connection = new Database({
        host: host,
        user: user,
        password: password,
        port: port,
        multipleStatements: true
    })

    return connection.test()
}

const install = () => {
    const knex = new Sql()

    knex.install()
}

const add = (host, user, password, port) => {
    const db = login(host, user, password, port)

    db.then((res) => {
        const knex = new Sql().connect()
        const crypt = require('cryptr')
        const encryption = new crypt(keys)

        knex('servers')
            .insert({
                ip: host,
                username: encryption.encrypt(user),
                password: encryption.encrypt(password),
                port: port,
                created_at: knex.fn.now(),
                updated_at: knex.fn.now()
            })
            .then((res) => {
                console.log('Success, server has been added to scripts')
                process.exit()
            })

    })
        .catch((err) => {
            console.error('Error: ' + err.errno + ' [' + err.code + ']')

            if (err.sqlMessage) {
                console.error('Message: ' + err.sqlMessage)
            }
        })
}

module.exports = {
    login,
    install,
    add
}