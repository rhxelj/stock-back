var express = require('express');
var router = express.Router();
var path = require('path');
var conexion = require('../conexion');


conexion.connect(function(err) {
    if (!err) {
        console.log("base de datos conectada en stkubfisicaleercod");
    } else {
        console.log("no se conecto en stkubfisicaleercod");
    }
});




var router = express();

router.get('/', async function(req, res, next) {
   StkUbFisicaGeo1 = req.query.id;
   console.log('req.query.id')
   console.log(req.query.id)
    conexion.query('Select * from StkUbFisica  where StkUbFisicaGeo = "' + StkUbFisicaGeo1 + '"', 
        function(err, result) {
            if (err) {
                console.log(err);
            } else {
                res.json(result);
            }
        });

});

module.exports = router;