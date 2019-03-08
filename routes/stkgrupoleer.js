var express = require('express');
var router = express.Router();
var path = require('path');
var conexion = require('./conexion');


conexion.connect(function(err) {
    if (!err) {
        console.log("base de datos conectada en stkgrupo");
    } else {
        console.log("no se conecto stkgrupo");
    }
});




var router = express();

router.get('/', function(req, res, next) {
  
    conexion.query('Select * from StkGrupo ' ,
        function(err, result) {
            if (err) {
                console.log(err);
            } else {
                res.json(result);
            }
        });
  

});

module.exports = router;