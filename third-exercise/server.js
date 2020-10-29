const path = require('path')

const express = require('express');
const bodyParser = require('body-parser')
const homeRouter = require('./routes/home')

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(homeRouter)




app.listen(3000);