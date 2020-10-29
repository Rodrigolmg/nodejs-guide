const path = require('path')
const rootDir = require('../util/path')

const express = require('express')
const routerHome = express.Router()


routerHome.get('/', (req, resp, next) => {
    resp.sendFile(path.join(rootDir, 'pages', 'home.html'))
})


module.exports = routerHome
