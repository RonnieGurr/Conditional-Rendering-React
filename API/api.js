const express = require('express')
const app = express()
var cors = require('cors')

app.use(cors({origin: 'http://localhost:3000'}));

app.get('/string', function (req, res) {
    res.send('Hello World!')
})

app.get('/number', function (req, res) {
    res.send('109876543210')
})

app.get('/boolean', function (req, res) {
    let picker = Math.floor(Math.random() * (2 - 1 + 1) + 1)
    if (picker === 1) {
        res.send('true')
    } else {
        res.send(false)
    }
    console.log(picker)
})

app.get('/object', function (req, res) {
    res.send([{id: 1, name: 'Ronnie', age: 21, job: 'Coder'},{id: 2, name: 'Amy', age: 25},{id: 3, name: 'Billy', job: 'UI Design'}])
})

app.get('/array', function (req, res) {
    res.send([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})

app.listen(3002, function () {
  console.log('Example app listening on port 3002!')
})

app.use(function (req, res, next) {
    res.send({error: 404, errorMessage: 'API route not found!'})
})