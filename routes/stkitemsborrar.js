var express = require('express');
var router = express.Router();
var path = require('path');
var conexion = require('./conexion');
var mysql = require('mysql');

var router = express();
conexion.connect(function(err) {
    if (!err) {
        console.log("base de datos conectada sktrubro");
    } else {
        console.log("no se conecto sktrubro");
    }
});


router.delete('/', async  function(req, res, next) {
var idStkItems = req.query.id1;
var StkItemsGrupo = req.query.id2;
var StkItemsRubro = req.query.id3;
//DELETE FROM `BasesGenerales`.`StkItems` WHERE `idStkItems`='2' and`StkItemsGrupo`='1' and`StkItemsRubro`='1';
  conexion.query('delete from StkItems where idStkItems = ' + idStkItems + ' and StkItemsGrupo = ' + StkItemsGrupo + ' and StkItemsRubro = ' + StkItemsRubro, 
                                         function(err, result) {
                                            if (err) {
                                                console.log(err);
                                            } else {
                                                res.json(result.rows);
                                            }
                                        }); 
                                    });   

module.exports = router;
