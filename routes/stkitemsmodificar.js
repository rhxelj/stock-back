var express = require('express');
var router = express.Router();
var path = require('path');
var conexion = require('./conexion');


conexion.connect(function(err) {
    if (!err) {
        console.log("base de datos conectada en stkitemsmodificar");
    } else {
        console.log("no se conecto en stkitemsmodificar");
    }
});

/*
idStkItems
*/

var router = express();



router.post('/', async function(req, res, next) {
 //?:id/?:id2
   console.log('req.params.id  ' + req.query.id1 +  '   req.params.id2    ' + req.query.id2 +  '   req.params.id3    ' + req.query.id3);

var idStkItems = req.query.id1;
var StkItemsGrupo = req.query.id2;
var StkItemsRubro = req.query.id3;
var StkItemsDesc = req.body.StkItemsDesc.toUpperCase();
var StkItemsCantidad = req.body.StkItemsCantidad;
var StkItemsFAct = req.body.StkItemsFAct;
var StkItemsMin = req.body.StkItemsMin;
var StkItemsMax = req.body.StkItemsMax;

// Desde Postman http://localhost:4000/stkitemsmodificar?id1=1&id2=1&id3=1
 
   // conexion.query('Select * from TipoMonedas where idTipoMonedas = "' + indice + '"',
    conexion.query('UPDATE StkItems SET StkItemsDesc = "' + StkItemsDesc +
                                     '", StkItemsCantidad = ' + StkItemsCantidad + 
                                     ', StkItemsFAct = '+ StkItemsFAct + 
                                     ', StkItemsMin = '+ StkItemsMin + 
                                     ', StkItemsMax = '+ StkItemsMax +
                                     ' WHERE idStkItems = ' + idStkItems + ' and  StkItemsGrupo = ' + StkItemsGrupo + ' and  StkItemsRubro = ' + StkItemsRubro,
        function(err, result) {
            if (err) {
                console.log(err);
            } else {
                res.json(result);
                };
            });
        });


module.exports = router;