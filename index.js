var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var apiRoutes = require('./api_routes')
var app = express()
var port = process.env.PORT || 8080

app.use(bodyParser.urlencoded({
    extended : true
}))
app.use(bodyParser.json())

mongoose.connect("mongodb://localhost/contacts")
var db = mongoose.connection

app.use('/api',apiRoutes)

app.get('/',(req,res) => {
    res.send("Hello world")
})

app.listen(port,() => {
    console.log(`Listening to ${port}`)
})