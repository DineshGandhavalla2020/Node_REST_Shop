const express = require('express');

const app = express();

const morgan = require('morgan'); //package to maintain logs....incoming request details

const bodyParser = require('body-parser');

//routing paths for requests
const productRoutes = require('./api/routes/products');

const orderRoutes = require('./api/routes/orders');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({}));

app.use('/products', productRoutes);

app.use('/orders', orderRoutes);

app.use((req, res, next)=>{

    const error = new Error("Not Found");

    error.status = 404;

    next(error);

});

app.use((error, req, res, next)=>{

    res.status(error.status || 500).json({
        error:{
            message: error.message
        }
        
    });

});
/*app.use((req, res, next) =>{

    res.status(200).json({
        message : "Welcome to the World of MEAN Stack"
    });
});*/

module.exports = app;