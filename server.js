const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const folderRoutes = require('./routes/folderRoutes')

const app = express();

// listen for requests
app.listen(3000);

var corsOptions = {
  origin: "http://localhost:8081"
};

app.get('/', (req, res) => {

  res.send("<p>TEST</p>");

});

//folder routes
app.use('/folders', folderRoutes);
