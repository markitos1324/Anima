require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const fight = require('./routes/fight.js');
const info = require('./routes/info.js');

app.use('/Anima/combat', fight);

app.use('/Anima/info', info);

app.listen(PORT, () => {
    console.log('Iniciado, Port is: ' + PORT);
})