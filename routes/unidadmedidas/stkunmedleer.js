var express = require('express');
var router = express.Router();
var path = require('path');
var conexion = require('../conexion');

conexion.connect(function(err) {
    if (!err) {
        console.log("base de datos conectada en stkunmedleer");
    } else {
        console.log("no se conecto en stkunmedleer");
    }
});



//console.log(conexion.ip);


var router = express();

router.get('/', function(req, res, next) {
  
    conexion.query('Select * from StkUnMed ' ,
        function(err, result) {
            if (err) {
                console.log(err);
            } else {
                res.json(result);
            }
        });
  

});
conexion.end;
module.exports = router;