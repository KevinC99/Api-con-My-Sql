const express = require('express')
const employesRouter= require('./employes_routes')
const productsRouter= require('./products_routes')


function routerApi(app){
    const router = express.Router();
    app.use('/api',router);
    router.use('/employes',employesRouter);
    router.use('/productos',productsRouter);
}




module.exports = routerApi