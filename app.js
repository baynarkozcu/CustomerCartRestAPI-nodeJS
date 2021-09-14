const express = require('express');
const app = express();
require('./db/mongoDBConnection');
// require('./db/mysqlDBConnection');

const generateRouter = require('./routers/randomGenerator');
const analizRouter = require('./routers/sehirBazliAnaliz');

app.use(express.json());

app.get('/', (req, res)=>{
    res.send("Home Dizinine Hoş Geldiniz..");
});

app.use('/generate', generateRouter);
app.use('/analiz', analizRouter);



app.listen(8000, ()=>{
    console.log("8000 Portu Başlatıldı...");
});