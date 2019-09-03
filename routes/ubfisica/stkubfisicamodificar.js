var express = require('express');
var router = express.Router();
var path = require('path');
var conexion = require('../conexion');


conexion.connect(function(err) {
    if (!err) {
        console.log("base de datos conectada en stkubfisicamodificar");
    } else {
        console.log("no se conecto en stkubfisicamodificar");
    }
});



var router = express();



router.post('/', async function(req, res, next) {
 indice = req.query.id;
 
 StkUbFisicaGeo = req.body.StkUbFisicaGeo
 
 
    conexion.query('UPDATE StkUbFisica SET   StkUbFisicaGeo = "' + StkUbFisicaGeo + '" WHERE idStkUbFisica = "' + indice + '"',
        function(err, result) {
            if (err) {
                if (err.errno == 1062) 
                        {
                        return res.status(409).send({message : "Abreviatura de StkUbFisica inexistente"});
                        }
                    else
                console.log(err);
            } else {
                res.json(result);
                };
            });
        });


module.exports = router;