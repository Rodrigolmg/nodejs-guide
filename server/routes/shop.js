const path = require('path');

const rootDir = require('../util/path')

const express = require('express');
const routerShop = express.Router();

routerShop.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop-page.html'))
});

module.exports = routerShop;