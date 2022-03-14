const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const folderRoutes = require('./routes/folderRoutes')

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

//folder routes
app.use('/folders', folderRoutes);
