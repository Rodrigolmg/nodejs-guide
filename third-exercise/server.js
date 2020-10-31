const path = require('path')

const express = require('express');
const bodyParser = require('body-parser')
const homeRouter = require('./routes/home')
const userRouter = require('./routes/user')

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(homeRouter)
app.use(userRouter)

app.use((req, res, next) => res.status(404).sendFile(path.join(__dirname, 'pages', 'error', 'not-found-page.html')));

app.listen(3000);