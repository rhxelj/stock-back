var express = require('express');
var path = require('path');
var cors = require('cors');
//var favicon = require('serve-favicon');
var cors = require ('cors');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//  var routes = require('./routes/index');

var proveedoresleer = require('./routes/proveedores/proveedoresleer');
var proveedoresleercod = require('./routes/proveedores/proveedoresleercod');
var proveedoresagregar = require('./routes/proveedores/proveedoresagregar');
var proveedoresborrar = require('./routes/proveedores/proveedoresborrar');
var proveedoresmodificar = require('./routes/proveedores/proveedoresmodificar');
var proveedoresimprime = require('./routes/proveedores/proveedoresimprime');


var stkmonedasleer = require('./routes/monedas/stkmonedasleer');
var stkmonedasleercod = require('./routes/monedas/stkmonedasleercod');
var stkmonedasagregar = require('./routes/monedas/stkmonedasagregar');
var stkmonedasmodificar = require('./routes/monedas/stkmonedasmodificar');
var stkmonedasborrar = require('./routes/monedas/stkmonedasborrar');


// var stkbgsubrubroleer = require('./routes/stkbgsubrubroleer');

var stktipoproveedleer = require('./routes/proveedores/stktipoproveedleer');


var stkunmedleer = require('./routes/unidadmedidas/stkunmedleer');
var stkunmedleercod = require('./routes/unidadmedidas/stkunmedleercod');
var stkunmedagregar = require('./routes/unidadmedidas/stkunmedagregar');
var stkunmedmodificar = require('./routes/unidadmedidas/stkunmedmodificar');
var stkunmedborrar = require('./routes/unidadmedidas/stkunmedborrar');

var stkgrupoleer = require('./routes/grupos/stkgrupoleer');
var stkgrupoleercod = require('./routes/grupos/stkgrupoleercod');
var stkgrupoagregar = require('./routes/grupos/stkgrupoagregar');
var stkgrupomodificar = require('./routes/grupos/stkgrupomodificar');
var stkgrupoborrar = require('./routes/grupos/stkgrupoborrar');


var stkubfisicaleer = require('./routes/ubfisica/stkubfisicaleer');
var stkubfisicaleercod = require('./routes/ubfisica/stkubfisicaleercod');
var stkubfisicaagregar = require('./routes/ubfisica/stkubfisicaagregar');
var stkubfisicamodificar = require('./routes/ubfisica/stkubfisicamodificar');
var stkubfisicaborrar = require('./routes/ubfisica/stkubfisicaborrar');
var stkubfisicaleerUbG = require('./routes/ubfisica/stkubfisicaleerUbG');


var stkrubroleer = require('./routes/rubros/stkrubroleer');
var stkrubroleermezcla = require('./routes/rubros/stkrubroleermezcla');
var stkrubroleercod = require('./routes/rubros/stkrubroleercod');
var stkrubroagregar = require('./routes/rubros/stkrubroagregar');
var stkrubromodificar = require('./routes/rubros/stkrubromodificar');
var stkrubroborrar = require('./routes/rubros/stkrubroborrar');
var stkrubroleecodgrupo = require('./routes/rubros/stkrubroleecodgrupo');
var stkrubroleecodgryrb = require('./routes/rubros/stkrubroleecodgryrb');




var stkitemsleer = require('./routes/items/stkitemsleer');
var stkitemsagregar = require('./routes/items/stkitemsagregar');
var stkitemsmodificar = require('./routes/items/stkitemsmodificar');
var stkitemsborrar = require('./routes/items/stkitemsborrar');
var stkitemsleecod = require('./routes/items/stkitemsleecod');
var stkitemsleecodgryrb = require('./routes/items/stkitemsleecodgryrb');
var stkitemsleecodgrrbit = require('./routes/items/stkitemsleecodgrrbit');
var stkitemsleedetalles = require('./routes/items/stkitemsleedetalles');


var stkitemsmodificacant = require('./routes/items/stkitemsmodificacant');
var stkitemsmoddisp = require('./routes/items/stkitemsmoddisp');
var stkverificadisp = require('./routes/movimientos/stkverificadisp');
var stkitemsmodstock = require('./routes/items/stkitemsmodstock');

var stkitemsventa = require('./routes/items/stkitemsventa'); //una prueba

var stkmovvtaagregar = require('./routes/envase/stkmovvtaagregar');
var stkenvaseagregar = require('./routes/envase/stkenvaseagregar');
var stkenvaseleeimp = require('./routes/envase/stkenvaseleeimp');
var stkenvasecambiaimp = require('./routes/envase/stkenvasecambiaimp');

var listaprecios = require('./routes/listaprecios/listaprecios');

// function agregada por el error CROS
function perimitirCrossDomain(req, res, next) {
    //en vez de * se puede definir SÓLO los orígenes que permitimos
    res.header('Access-Control-Allow-Origin', '*'); 
    //metodos http permitidos para CORS
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'); 
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  }


var app = express();
app.use(cors());
// routes.initialize(app);

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(perimitirCrossDomain);


app.use('/', proveedoresleer);

app.use('/proveedoresleer', proveedoresleer);
app.use('/proveedoresleercod', proveedoresleercod);
app.use('/proveedoresagregar', proveedoresagregar);
app.use('/proveedoresmodificar', proveedoresmodificar);
app.use('/proveedoresborrar', proveedoresborrar);
app.use('/proveedoresimprime', proveedoresimprime);

app.use('/stkmonedasleer', stkmonedasleer);
app.use('/stkmonedasleercod', stkmonedasleercod);
app.use('/stkmonedasagregar', stkmonedasagregar);
app.use('/stkmonedasmodificar', stkmonedasmodificar);
app.use('/stkmonedasborrar', stkmonedasborrar);


// app.use('/stkbgsubrubroleer', stkbgsubrubroleer);

app.use('/stktipoproveedleer', stktipoproveedleer);
// app.use('/stktipoproveedleercod', stktipoproveedleercod);
// app.use('/stktipoproveedagregar', stktipoproveedagregar);
// app.use('/stktipoproveedmodificar', stktipoproveedmodificar);
// app.use('/stktipoproveedborrar', stktipoproveedborrar);

app.use('/stkunmedleer', stkunmedleer);
app.use('/stkunmedleercod', stkunmedleercod);
app.use('/stkunmedagregar', stkunmedagregar);
app.use('/stkunmedmodificar', stkunmedmodificar);
app.use('/stkunmedborrar', stkunmedborrar);

app.use('/stkgrupoleer', stkgrupoleer);
app.use('/stkgrupoleercod', stkgrupoleercod);
app.use('/stkgrupoagregar', stkgrupoagregar);
app.use('/stkgrupomodificar', stkgrupomodificar);
app.use('/stkgrupoborrar', stkgrupoborrar);

app.use('/stkubfisicaleer', stkubfisicaleer);
app.use('/stkubfisicaleercod', stkubfisicaleercod);
app.use('/stkubfisicaagregar', stkubfisicaagregar);
app.use('/stkubfisicamodificar', stkubfisicamodificar);
app.use('/stkubfisicaborrar', stkubfisicaborrar);
app.use('/stkubfisicaleerUbG', stkubfisicaleerUbG);

app.use('/stkrubroleer', stkrubroleer);
app.use('/stkrubroleermezcla', stkrubroleermezcla);
app.use('/stkrubroleercod', stkrubroleercod);
app.use('/stkrubroagregar', stkrubroagregar);
app.use('/stkrubromodificar', stkrubromodificar);
app.use('/stkrubroborrar', stkrubroborrar);
app.use('/stkrubroleecodgrupo', stkrubroleecodgrupo);
app.use('/stkrubroleecodgryrb', stkrubroleecodgryrb);


app.use('/stkitemsleer', stkitemsleer);
app.use('/stkitemsagregar', stkitemsagregar);
app.use('/stkitemsmodificar', stkitemsmodificar);
app.use('/stkitemsborrar', stkitemsborrar);
app.use('/stkitemsleecod', stkitemsleecod);
app.use('/stkitemsleecodgryrb', stkitemsleecodgryrb);
app.use('/stkitemsleecodgrrbit', stkitemsleecodgrrbit);
app.use('/stkitemsleedetalles', stkitemsleedetalles);



app.use('/stkitemsmodificacant', stkitemsmodificacant);
app.use('/stkitemsmoddisp', stkitemsmoddisp);
app.use('/stkverificadisp', stkverificadisp);
app.use('/stkitemsmodstock', stkitemsmodstock);

app.use('/stkitemsventa', stkitemsventa);
app.use('/stkenvaseagregar', stkenvaseagregar);
app.use('/stkenvaseleeimp', stkenvaseleeimp);
app.use('/stkenvasecambiaimp', stkenvasecambiaimp);

// app.use('/imprime1', imprime1);
app.use('/stkmovvtaagregar', stkmovvtaagregar);

app.use('/listaprecios', listaprecios);

// app.use('/clientesleer', clientesleer);

app.use(function(req, res, next) {
    var err = new Error('El programa de backend no se encuentra');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');

   
});
  
module.exports = app;