require('marko-magic');

var express = require('express')
var app = express()
var home = require('./home.marko')
var counter = require('./counter.marko')
var colors = require('./colors.marko')

app.use('/static', express.static('./static'))

app.get('/', function(req, res) {
    res.marko(home, { name:'Marko' })
})

app.get('/counter', function(req, res) {
    res.marko(counter, { name:'Counter' })
})

app.get('/colors', function(req, res) {
    res.marko(colors, { name:'Colors' })
})

app.listen(8080, function(err) {
    if (err) {
        throw err;
    }

    if (process.send) {
        process.send('online')
    }
})