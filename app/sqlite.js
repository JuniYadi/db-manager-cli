const knex = require('knex')

const mypath = () => {
    return process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE
}

class Sql {
    constructor() {
        this.knex = knex({
            client: 'sqlite3',
            connection: {
                filename: mypath() + '/.dbmservers.db'
            },
            useNullAsDefault: true
        })
    }

    connect() {
        return this.knex
    }

    install() {
        this.knex.schema
            .createTable('servers', (table) => {
                table.increments('id')
                table.string('ip')
                table.text('username')
                table.text('password')
                table.string('port')
                table.timestamp('created_at').defaultTo(this.knex.fn.now())
                table.timestamp('updated_at').defaultTo(this.knex.fn.now())
            })
            .then(() => {
                console.log('ok')
                process.exit()
            })
            .catch((err) => {
                console.error('cannot create a database')
                process.exit()
            })
    }
}


module.exports = Sql