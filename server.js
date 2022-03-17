const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const folderRoutes = require('./routes/folderRoutes')

require('dotenv').config();

const app = express();

const PORT = 3000

// listen for requests
app.listen(PORT, ()=>{
  console.log(`Server Running on port ${PORT}`);
 });

var corsOptions = {
  origin: "http://localhost:8081"
};

app.get('/', (req, res) => {

  res.send("<p>TEST</p>");

});

//folder routes
app.use('/folders', folderRoutes);
