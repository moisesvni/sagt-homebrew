const express = require('express');
const router = express.Router();
router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "PocheteMemory API",
        version: "0.0.1"
    });
});
module.exports = router;


// const express = require('express');
// const app = express();         
// const bodyParser = require('body-parser');
// const port = 3024; //porta padrão
// const mysql = require('mysql');

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// //definindo as rotas
// const router = express.Router();
// router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
// app.use('/', router);

// router.get('/fornecedor', (req, res) =>{
//     execSQLQuery('SELECT * FROM fornecedor', res);
// });

// router.get('/fornecedor/:id?', (req, res) =>{
//     let filter = '';
//     if(req.params.id) filter = ' WHERE idfornecedor=' + parseInt(req.params.id);
//     execSQLQuery('SELECT * FROM fornecedor' + filter, res);
// });

// router.delete('/fornecedor/:id', (req, res) =>{
//     execSQLQuery('DELETE FROM fornecedor WHERE ID=' + parseInt(req.params.id), res);
// });

// router.post('/fornecedor', (req, res) =>{
//     const nome = req.body.nome.substring(0,64);
//     const descricao = req.body.cpf.substring(0,128);
//     execSQLQuery(`INSERT INTO fornecedor(nome, descricao) VALUES('${nome}','${descricao}')`, res);
// });

// //inicia o servidor
// app.listen(port);
// console.log('API funcionando!');



// function execSQLQuery(sqlQry, res){
//     const connection = mysql.createConnection({
//       host     : 'localhost',
//       port     : 3306,
//       user     : 'root',
//       password : 'root',
//       database : 'pochete_memory'
//     });
//     connection.query(sqlQry, function(error, results, fields){
//         if(error) 
//           res.json(error);
//         else
//           res.json(results);
//         connection.end();
//         console.log('executou!');
//     });
// }