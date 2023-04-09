const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("hello world")
})

app.get('/test', (req, res) => {
    res.send("hello world test")
})

app.listen(8080, (req, res) => {
    console.log('hello')
})