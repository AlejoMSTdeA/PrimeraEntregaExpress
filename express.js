const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send(texto)
})
 
module.exports = {
  app
};