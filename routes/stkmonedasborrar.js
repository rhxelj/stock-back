var express = require('express');
var router = express.Router();
var path = require('path');
var conexion = require('./conexion');
var mysql = require('mysql');

var router = express();
conexion.connect(function(err) {
    if (!err) {
        console.log("base de datos conectada");
    } else {
        console.log("no se conecto");
    }
});


router.delete('/?:id', function(req, res, next) {
    indice = req.params.id;

  conexion.query('delete from StkMonedas where idStkMonedas = "' + indice + '"', 
                                         function(err, result) {
                                            if (err) {
                                                if (err.errno == 1451) 
                                                    {
                                                      return res.status(411).send({message : "error Código de moneda usado en otra tabla"});
                                                     }
                                                  {
                                                console.log(err);
                                                  }
                                            } 
                                            else {
                                                res.json(result.rows);
                                            }
                                        }); 
                                    });   

module.exports = router;
