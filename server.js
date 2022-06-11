const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const folderRoutes = require('./routes/folderRoutes')
const photoRoutes = require('./routes/photoRoutes')
const { sequelize } = require('./models')

require('dotenv').config();

const app = express();
app.use(express.json())

app.use(cors({
  origin: '*'
}))

app.get('/', (req, res) => {

  res.redirect('/folders')

});

//folder routes
app.use('/folders', folderRoutes);
app.use('/photos', photoRoutes);

// listen for requests
const PORT = 3000
app.listen(PORT, async () => {
  console.log(`Server Running on port ${PORT}`);
  await sequelize.authenticate();
  console.log('Database Connected!');
 });
