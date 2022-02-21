const mysql = require('mysql');

const conectionSql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'prueba',
    multipleStatements: true
})

conectionSql.connect(function (err) {
    if (err) {
        console.error(err);
        return;
        
    } else{
        console.log("la conexion se establacio con exito")
    }
})
module.exports = conectionSql;