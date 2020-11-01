const path = require('path');

const rootDir = require('../util/path')
const adminData = require('./admin')

const express = require('express');
const routerShop = express.Router();

routerShop.get('/', (req, res, next) => {
    console.log(adminData.products)
    res.sendFile(path.join(rootDir, 'views', 'shop-page.html'))
});

module.exports = routerShop;