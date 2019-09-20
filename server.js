const express = require('express');
const mongoose = require('mongoose');

// Iniciando o APP
const app = express();


// Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/jshunt', 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }
);

// Primeira rota
app.get('/', (req, res) => {
    res.send('Hello Rocket!');
});

app.listen(3001);