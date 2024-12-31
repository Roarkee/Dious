const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res)=>{
    res.send('I am a trillionaire; I will rule the world')

});


module.exports =  app;