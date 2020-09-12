const express = require('express');
const path = require('path');
const {sequelize} = require('./database/sequelize-common')

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.static(__dirname + '/public'));
app.listen(PORT, ()=> console.log("http://localhost:5000/"));

app.get('/home', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/public/index.html'))
})

// connects to db
sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

