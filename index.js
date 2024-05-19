require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require("./config/db.js");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

const fight = require('./routes/fight.js');
const info = require('./routes/info.js');

//connectDB()

app.use('/combat', fight);

app.use('/info', info);

app.listen(PORT, () => {
    console.log('Iniciado, Port is: ' + PORT);
})