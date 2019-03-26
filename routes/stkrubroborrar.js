var express = require('express');
var router = express.Router();
var conexion = require('./conexion');

var router = express();

console.log('esta entrando  555');
conexion.connect(function(err) {
    if (!err) {
        console.log("base de datos conectada sktrubro");
    } else {
        console.log("no se conecto sktrubro");
    }
});

router.get('/', async function(req, res, next) {
    // idStkRubro  = req.query.id1;
    // StkRubroCodGrp = req.query.id2;
   console.log(req.query)
    idStkRubro  = req.query.idrubro;
    StkRubroCodGrp = req.query.idgrupo;
    conexion.query('delete from StkRubro where idStkRubro = ' + idStkRubro + ' and StkRubroCodGrp = ' + StkRubroCodGrp, 
        function(err, result) {
            if (err) {
                console.log(err);
            } else {
                res.json(result);
            }
        });
  

});
module.exports = router;
