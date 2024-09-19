const mysql = require("mysql2")
require('dotenv').config()

// class Connectionn {
//     constructor() {
//         if (!this.pool) {
//             console.log("creating database connection...")
//             this.pool = mysql.createPool({
//                 connectionLimit: 100,
//                 connectTimeout: 60 * 60 * 1000,
//                 acquireTimeout: 60 * 60 * 1000,
//                 timeout: 60 * 60 * 1000,
//                 host: process.env.HOST_NAME,
//                 user: process.env.USER,
//                 password: process.env.PASSWORD,
//                 insecureAuth:true
//             })

//             return this.pool
//         }

//         return this.pool
//     }
// }

const connection = mysql.createConnection({
    host: process.env.HOST_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.PASSWORD, 
    database: process.env.DATABASE,
})

// const instance = new Connectionn()
module.exports = connection