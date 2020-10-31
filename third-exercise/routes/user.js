const path = require('path')
const rootDir = require('../util/path')

const express = require('express')
const routerUser = express.Router()


routerUser.get('/users', (req, resp, next) => {
    resp.sendFile(path.join(rootDir, 'pages', 'user', 'user-page.html'))
})


module.exports = routerUser