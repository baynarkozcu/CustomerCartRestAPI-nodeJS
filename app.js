const express = require('express');
const app = express();
require('./db/mongoDBConnection');

const customerRouter = require('./routers/customerRouter');
app.use(express.json());

app.get('/', (req, res)=>{
    res.send("Home Dizinine Hoş Geldiniz..");
});

app.use('/customer', customerRouter);




app.listen(8000, ()=>{
    console.log("8000 Portu Başlatıldı...");
});