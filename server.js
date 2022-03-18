const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const folderRoutes = require('./routes/folderRoutes')
const { sequelize } = require('./models')

require('dotenv').config();

const app = express();
app.use(express.json())

var corsOptions = {
  origin: "http://localhost:8081"
};

app.get('/', (req, res) => {

  res.redirect('/folders')

});

//folder routes
app.use('/folders', folderRoutes);

// listen for requests
const PORT = 3000
app.listen(PORT, async () => {
  console.log(`Server Running on port ${PORT}`);
  await sequelize.authenticate();
  console.log('Database Connected!');
 });
