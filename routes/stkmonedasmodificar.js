var express = require('express');
var router = express.Router();
var path = require('path');
var conexion = require('./conexion');


conexion.connect(function(err) {
    if (!err) {
        console.log("base de datos conectada");
    } else {
        console.log("no se conecto");
    }
});



var router = express();



var router = express();
console.log('estamos aca');

router.post('/?:id', function(req, res, next) {
let indice = " ";
indice = req.params.id;

 descr = req.body.StkMonedasDescripcion;
 cotiz = req.body.StkMonedasCotizacion;

   conexion.query ('UPDATE StkMonedas SET StkMonedasDescripcion = "' + descr + '", StkMonedasCotizacion = ' + cotiz + ' WHERE idStkMonedas = "' + indice + '"',

        function(err, result) {
            if (err) {
                if (err.errno == 1264) 
                    {
                    return res.status(412).send({message : "El campo numérico más dígitos de los que corresponde"});
                    }
                else {
                    if (err.errno == 1406) 
                        {
                        return res.status(410).send({message : "El campo alfanumérico dígitos de los que corresponde"});
                        }
                    else
                    console.log(err);
                }
            }
            else {
                res.json(result);
                };
            });
        });


module.exports = router;