var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('./configMySql.js');


router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();

});

//inserir/atualizar produtos
router.post('/produtos/novos', function (req, res) {

    var connection = mysql.createConnection(config);

    var sql = 'CALL insertProdutos(?,?,?,?,?,?)';
    connection.query(sql, [req.body.idProduto, req.body.nomeProduto, req.body.qntProduto, req.body.valorUnitario, req.body.tamanho, req.body.sexo], function (error, results, fields) {
        if (error) {
            return console.error(error.message);
        }
        res.send(results);
    })
    connection.on('error', function (err) {
        console.log("[mysql erro]", err);

    });
    connection.end();
});

//insert de SOLICITAÇÃO

router.post('/solicitacao/nova', function (req, res) {

    var connection = mysql.createConnection(config);

    var sql = 'CALL solicitacaoPedidos(?,?,?,?,?,?,?,?)';
    connection.query(sql, [req.body.nomeSolicitante, req.body.nomeProduto, req.body.qntProduto, req.body.centroCusto, req.body.codProjeto, req.body.valorUnitario, req.body.tamanho, req.body.sexo], function (error, results, fields) {
        if (error) {
            return console.error(error.message);
        }
        res.send(results);
    })
    connection.on('error', function (err) {
        console.log("[mysql erro]", err);

    });
    connection.end();

});



//GET

//all produtos

router.get('/produtos', function (req, res) {

    var connection = mysql.createConnection(config);
    var sql = 'CALL getProdutos()';
    connection.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        res.send(results);
    });

    connection.end();
});

//GEL FOR ID
//EX PRODUTO/1
router.get('/produtos/:id', function (req, res) {

    var connection = mysql.createConnection(config);
    var sql = 'CALL getProdutos(?)';
    connection.query(sql, [req.params.idProduto], function (error, results, fields) {
        if (error) {
            return console.error(error.message);
        }
        res.send(results);
    });

    connection.end();
});


//Delete FOR ID
//PRODUTOS/1
router.delete('produtos/idproduto/:idProduto', function () {
    var sql = 'CALL deleteProdutos' + req.params.idProduto;
    console.log(req.params.idProduto);

    connection.query(sql, function (err, result) {
        if (!err) {
            console.log("Produto apagado com sucesso");

        } else {
            console.log("error: produto nao apagado");

        }
    })


});

router.get('/solicitacao', function (req, res) {

    var connection = mysql.createConnection(config);
    var sql = 'CALL getSolicitacao()';
    connection.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        res.send(results);
    });

    connection.end();
});
module.exports = router;



