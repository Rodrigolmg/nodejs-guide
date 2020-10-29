const express = require('express');

const app = express();

// Second task
/**
app.use((req, res, next) => {
    console.log('Home page accessed')
    next();
})

 * app.use((req, res, next) => {
    console.log('Home page accessed')
    res.send('<h1>Any page</h1>')
})**/

// Third task
app.use('/users', (req, res, next) => {
    res.send('<h1>Users page</h1>')
})

app.use('/', (req, res, next) => {
    res.send('<h1>Home page</h1>')
})

app.listen(3000)