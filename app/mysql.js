const mysql = require('mysql')

class Database {

  constructor(config) {
    this.connection = mysql.createConnection(config);
  }

  test() {
    return new Promise((resolve, reject) => {
      this.connection.connect(err => {
        if (err) {
          return reject(err);
        }
        resolve(this.connection);
      });
    });
  }

  query(sql, args) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (err, rows) => {
        if (err) {
          return reject(err);
        }
        resolve(rows);
      });
    });
  }

  close() {
    return new Promise((resolve, reject) => {
      this.connection.end(err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  }
}

module.exports = Database

// const db = (host, user, password, port) => {
//   return mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'qweasd',
//     port: '3306',
//     multipleStatements: true
//   })
// }

// const login = (host, user, password, port) => {
//   const connection = db(host, user, password, port)

//   connection.connect(function (err) {
//     if (err) {
//       return err.stack
//     }

//     return 'connected as id ' + connection.threadId;
//   });
// }


// module.exports = {
//   db,
//   login
// }



// check connection
// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }

//   console.log('connected as id ' + connection.threadId);
// });

// connection.connect();

/**
 * create user with spesifict ip
 *
 * change ip 123.123.123.123 to localhost or % for all ips
 */
// const adduser = "CREATE USER 'okocetest'@'%' IDENTIFIED WITH mysql_native_password BY 'qwe123'"

// const adddb = "CREATE DATABASE mydb"

// const query = adduser + ';FLUSH PRIVILEGES;'

// connection.query(query, (error, results, fields) => {
//   if (error) {
//     throw error
//   }
//   console.log('The solution is: ', results);
// });

// connection.end();