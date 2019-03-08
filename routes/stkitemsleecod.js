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

router.get('/', async function(req, res, next) {
   
var idStkItems = req.query.id1;
var StkItemsGrupo = req.query.id2;
var StkItemsRubro = req.query.id3;

    conexion.query('Select * from StkItems where idStkItems = ' + idStkItems  + ' and  StkItemsGrupo  = ' + StkItemsGrupo  + ' and  StkItemsRubro  = ' + StkItemsRubro, 
        function(err, result) {
            if (err) {
                console.log(err);
            } else {
                res.json(result);
            }
            console.log(result)
        });
  

});

module.exports = router;