var express = require('express');
var router = express.Router();
var path = require('path');
var conexion = require('./conexion');




conexion.connect(function(err) {
    if (!err) {
        console.log("base de datos conectada en proveedoresleer");
    } else {
        console.log("no se conecto en proveedoresleer");
    }
});




var router = express();

router.get('/', function(req, res, next) {

      conexion.query(
          'SELECT * FROM medidasclientes.datosclientesdc',
        function(err, result) {
            if (err) {
                console.log(err.errnro);
            } else {
                res.json(result);
            }
        });
        
});
conexion.end;

module.exports = router;