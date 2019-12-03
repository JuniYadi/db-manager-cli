#!/usr/bin/env node

const program = require('commander')

// call controller
const { server } = require('./app')

program.version('1.0.0')
    .description('Database Manager by CLI Command')

program.command('install')
    .alias('i')
    .description('Install Database Manager CLI')
    .action(() => {
        server.install()
    })

program.command('add <ip> <user> <pass> [port]')
    .alias('a')
    .description('Added Database Servers')
    .action((ip, user, pass, port) => {
        let serport = '3306'

        if(port) {
            serport = port    
        }

        server.add(ip, user, pass, serport)
    })

program.command('delete')
    .alias('d')
    .description('Delete Database Servers')
    .action(() => {
        console.log('delete')
    })

program.parse(process.argv)