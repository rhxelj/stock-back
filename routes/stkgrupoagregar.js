var express = require('express');
var router = express.Router();
var path = require('path');
var moment = require('moment');
var conexion = require('./conexion');

moment.locale('es');

//router = express();
conexion.connect(function(err) {
    if (!err) {
        console.log("base de datos conectada en stkgrupo");
    } else {
        console.log("no se conecto en stkgrupo");
    }
});



router.post('/', function(req, res, next) {

  var registro = {
  //  idStkGrupo : req.body.idStkGrupo,
    StkGrupoDesc : req.body.StkGrupoDesc,
    StkGrupoAbr : req.body.StkGrupoAbr,
    StkGrupoContRubro : req.body.StkGrupoContRubro
    
  }
 
   

        conexion.query('INSERT INTO StkGrupo SET ?', registro, 
        function(err, result) {
            if (err) {
                if (err.errno == 1062) {
                    return res.status(409).send({message : "error clave duplicada"});
                      }
                      else {
                          console.log('ERROR ' );
                          console.log(err.errno);
                          }
                } else {
                res.json(result.rows);
            }
        });
});


/* router.use((req, res, next) => {
    res.status(404);
    res.json({
      error: 'Error. Route not found'
    });
  });
 */

module.exports = router;