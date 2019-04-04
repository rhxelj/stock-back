var express = require('express');
var router = express.Router();
var path = require('path');
var moment = require('moment');
var conexion = require('./conexion');
var gencodrubro = require('./stkgennrorubro');
var ultnrorubro = require('./stkleeultnrorubro')


moment.locale('es');

conexion.connect(function(err) {
    if (!err) {
        console.log("base de datos conectada en stkrubro");
    } else {
        console.log("no se conecto");
    }
});


router.all('/', function(req, res) {
    codgrupo = req.query.id;
    gencodrubro.buscacodigo(codgrupo);
    ultnrorubro.codigorubronuevo(codgrupo);
  var registro = {
      idStkRubro        : codrubro,
      StkRubroCodGrp    : codgrupo,
      StkRubroDesc      : req.body.StkRubroDesc,
      StkRubroAbr       : req.body.StkRubroAbr,
      StkRubroProv      : req.body.StkRubroProv,
      StkRubroAncho     : req.body.StkRubroAncho,
      StkRubroPres      : req.body.StkRubroPres,
      StkRubroUM        : req.body.StkRubroUM,
      StkRubroCosto     : req.body.StkRubroCosto,
      StkRubroTM        : req.body.StkRubroTM
    }
      
    
      conexion.query('INSERT INTO StkRubro SET ?', registro, 
        function(err, result) {
            if (err) {
                console.log('Error  INSERT INTO StkRubro')
                console.log(err);
            } else {
                res.json(result);
            
            }
        });
     
       
});


module.exports = router;
