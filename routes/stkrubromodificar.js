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

/*
idStkRubro
*/

var router = express();



router.post('/', async function(req, res, next) {
 //?:id/?:id2
  //  console.log('req.params.id  ' + req.query.id1 +  '   req.params.id2    ' + req.query.id2);

var idStkRubro = req.query.id;
var StkRubroCodGrp = req.query.id2;
var StkRubroDesc = req.body.StkRubroDesc;
var StkRubroAbr = req.body.StkRubroAbr;
var StkRubroProv = req.body.StkRubroProv;
var StkRubroAncho = req.body.StkRubroAncho;
var StkRubroPresDes = req.body.StkRubroPresDes;
var StkRubroPres = req.body.StkRubroPres;
var StkRubroUM = req.body.StkRubroUM;
var StkRubroCosto = req.body.StkRubroCosto;
var StkRubroTM = req.body.StkRubroTM;


 
   // conexion.query('Select * from TipoMonedas where idTipoMonedas = "' + indice + '"',
    conexion.query('UPDATE StkRubro SET StkRubroDesc = "' + StkRubroDesc +
                                     '", StkRubroAbr = "' + StkRubroAbr + 
                                     '", StkRubroProv = '+ StkRubroProv + 
                                     ', StkRubroAncho = '+ StkRubroAncho + 
                                     ', StkRubroPresDes = "'+ StkRubroPresDes +
                                     '", StkRubroPres = '+ StkRubroPres +
                                     ', StkRubroUM = "'+ StkRubroUM +
                                     '", StkRubroCosto = '+ StkRubroCosto +
                                     ', StkRubroTM = "'+ StkRubroTM + 

                                     '" WHERE idStkRubro = ' + idStkRubro + ' and  StkRubroCodGrp = ' + StkRubroCodGrp,
        function(err, result) {
            if (err) {
                console.log(err);
            } else {
                res.json(result);
                };
            });
        });


module.exports = router;