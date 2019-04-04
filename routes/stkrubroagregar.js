var express = require('express');
var router = express.Router();
var path = require('path');
var moment = require('moment');
var conexion = require('./conexion');


moment.locale('es');

conexion.connect(function(err) {
    if (!err) {
        console.log("base de datos conectada en stkrubro");
    } else {
        console.log("no se conecto");
    }
});



router.all('/', async function(req, res) {
   var codgrupo = req.query.id;
    


  conexion.query('Select StkGrupoContRubro as CuentaRubro from StkGrupo where idStkGrupo = ' + codgrupo,
  function(err, result) {
      if (err) {
          console.log(err);
      } else {
          res.json(result);
      
      CuentaRubro  = result[0].CuentaRubro + 1;
    var registro = {
      idStkRubro :  CuentaRubro,
      StkRubroCodGrp : codgrupo,
      StkRubroDesc : req.body.StkRubroDesc,
      StkRubroAbr : req.body.StkRubroAbr,
      StkRubroProv : req.body.StkRubroProv,
      StkRubroAncho : req.body.StkRubroAncho,
      StkRubroPres : req.body.StkRubroPres,
      StkRubroUM : req.body.StkRubroUM,
      StkRubroCosto : req.body.StkRubroCosto,
      StkRubroTM : req.body.StkRubroTM
    }
      }


  console.log(registro)
        conexion.query('INSERT INTO StkRubro SET ?', registro, 
        function(err, result) {
            if (err) {
                console.log('ERROR ');
                console.log(err);
            } else {
                res.json(result.rows);
            
            }
        });

        conexion.query('UPDATE StkGrupo SET StkGrupoContRubro = ' + CuentaRubro + ' where idStkGrupo = ' + codgrupo,
        function(err, result) {
            if (err) {
                console.log(err);
            } else {
                res.json(result);
            }
        });
});
});




module.exports = router;