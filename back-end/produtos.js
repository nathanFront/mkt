var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('./configMySql.js');


router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();

});

//inserir/atualizar produtos
router.post('/produtos/novos', function(req, res) {

    var connection = mysql.createConnection(config);

    var sql = 'CALL insertProduto(?,?,?,?,?,?,?)';
    connection.query(sql, [req.body.idProduto, req.body.nomeProd, req.body.qntProd, req.body.valorUnit, req.body.genero, req.body.tipoProd, req.body.modeloProd], function(error, results, fields) {
        if (error) {
            return console.error(error.message);
        }
        res.send(results);
    })
    connection.on('error', function(err) {
        console.log("[mysql erro]", err);

    });
    connection.end();
});

//insert de SOLICITAÇÃO

router.post('/pedidos/novos', function(req, res) {

    var connection = mysql.createConnection(config);

    var sql = 'CALL insertPedidos(?,?,?,?,?,?,?,?)';
    connection.query(sql, [req.body.idPedido, req.body.nomeGestor, req.body.nomeSolic, req.body.codProj, req.body.centroCust, req.body.qntProduto, req.body.genero, req.body.modelo], function(error, results, fields) {
        if (error) {
            return console.error(error.message);
        }
        res.send(results);
    })
    connection.on('error', function(err) {
        console.log("[mysql erro]", err);

    });
    connection.end();


});
//DELETE PRODUTOS

router.delete('/delete/:idProduto', function(req, res) {
    var connection = mysql.createConnection(config);

    var sql = 'CALL deleteProdutos(?)';

    connection.query(sql, [req.body.idProduto], function(error, results) {
        if (error) {
            return console.error(error.message);
        }
        debugger;
        res.send(results);
        console.log(results);
    })
    connection.on('error', function(err) {
        console.log("[mysql erro", err);
    });
    connection.end();
})


//GET

//all produtos

router.get('/produtos', function(req, res) {

    var connection = mysql.createConnection(config);
    var sql = 'CALL getallprodutos()';
    connection.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        res.send(results);
    });

    connection.end();
});


router.get('/pedidos', function(req, res) {

    var connection = mysql.createConnection(config);
    var sql = 'CALL getallpedidos()';
    connection.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        res.send(results);
    });

    connection.end();
});



module.exports = router;