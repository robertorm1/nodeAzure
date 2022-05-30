const sql = require('mssql')

const db = new sql.ConnectionPool({
  user: "admin_sa",
  password: "Usuariom1",
  database: "Marie_DB_2.0",
  server: "marieserver.database.windows.net", 
  port:1433,
  options: {
      encrypt: true, 
      trustServerCertificate: false 
    }
})

db.connect(err => {
  if (err) {
    console.log(err)
} else {
    console.log('Base conectada')
}
})


module.exports = db;
