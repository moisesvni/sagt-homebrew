const mysql = require('mysql');

exports.execSQLQuery = (sqlQry, res) => {
    const connection = mysql.createConnection({
      host     : 'localhost',
      port     : 3306,
      user     : 'root',
      password : 'root',
      database : 'pochete_memory'
    });
    connection.query(sqlQry, function(error, results, fields){
        if(error) 
          res.json(error);
        else
          res.json(results);
        connection.end();
        console.log('executou!');
    });
}