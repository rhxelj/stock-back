var express = require('express');
var router = express.Router();
var path = require('path');
var moment = require('moment');
var conexion = require('./conexion');
// var stkiemsinsertar = require('./stkitemsinsertar');

var nroitem = 0;


moment.locale('es');

//router = express();
conexion.connect(function(err) {
    if (!err) {
        console.log("base de datos conectada en stkrubro");
    } else {
        console.log("no se conecto");
    }
});


//SELECT max(idStkItems) FROM BasesGenerales.StkItems  where StkItemsRubro = 10 and StkItemsGrupo = 1;
//select hecho en mysql para buscar el item más grande y agregar 1

router.get('/', async function(req, res) {
    var StkItemsGrupo = req.query.id2;
    var StkItemsRubro = req.query.id3;



    // StkItemsDesc : req.body.StkItemsDesc,
    // StkItemsCantidad : req.body.StkItemsCantidad,
    // StkItemsFAct : req.body.StkItemsFAct,
    // StkItemsMin : req.body.StkItemsMin,
    // StkItemsMax: req.body.StkItemsMax,
 
  conexion.query('Select max(idStkItems) as UltItem from StkItems where StkItemsGrupo  = ' + StkItemsGrupo  + ' and  StkItemsRubro  = ' + StkItemsRubro, 
  function(err, result) {
    if (err) {
        console.log(err);
    } else {
        res.json(result);
      console.log(result[0].UltItem);
      console.log([result]);
      nroitem = result[0].UltItem + 1;
      console.log(nroitem);
      var registro = {
        idStkItems : nroitem,
        StkItemsGrupo : StkItemsGrupo,
        StkItemsRubro : StkItemsRubro,
        StkItemsDesc : req.body.StkItemsDesc,
        StkItemsCantidad : req.body.StkItemsCantidad,
        StkItemsFAct : req.body.StkItemsFAct,
        StkItemsMin : req.body.StkItemsMin,
        StkItemsMax: req.body.StkItemsMax
      
      }
    }
    
    conexion.query('INSERT INTO StkItems SET ?', registro, 
        function(err, result) {
            if (err) {
                console.log('ERROR ');
                console.log(err);
            } else {
                res.json(result.rows);
            
            }
        //    return
        });
    })
});



// stkiemsinsertar.insertar(nroitem)


   
  // StkItemsGrupo : req.body.StkItemsDesc,
    // StkItemsRubro : req.body.StkItemsRubro,
    // StkItemsDesc : req.body.StkItemsDesc,
    // StkItemsCantidad : req.body.StkItemsCantidad,
    // StkItemsFAct : req.body.StkItemsFAct,
    // StkItemsMin : req.body.StkItemsMin,
    // StkItemsMax: req.body.StkItemsMax,

module.exports =router;