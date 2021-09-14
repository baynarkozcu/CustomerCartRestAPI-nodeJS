const analizRouter = require('express').Router();
const Customer = require('../models/musteri');
const Sepet = require('../models/sepet');
const SepetUrun = require('../models/sepeturun');


analizRouter.get('/', async (req, res)=>{

    const sehirler = ["Ankara", "İstanbul", "İzmir", "Bursa", "Edirne", "Konya", "Antalya", "Diyarbakır", "Van", "Rize"];

    const customerList = [];

    const allUser = await Customer.find({});

    const allSepet = await Sepet.find({});

    const allProduct = await SepetUrun.find({}); 

    allUser.forEach(user=>{
        allSepet.forEach(sepet=>{
            if(sepet.musteriId === user.index){
                allProduct.forEach(sepetUrun=>{
                    if(sepetUrun.sepetId == sepet.index){
                        customerList.push({
                    userID: user.index,
                    sehir: user.sehir,
                    sepetID: sepet.index,
                    tutar: sepetUrun.tutar
                });
                    }
                });
            
            }
        });
    });

    const logDetail= [];

    sehirler.forEach(sehir=>{
        let sehirSepet = 0;
        let sehirTutar = 0;
        customerList.forEach(user=>{
            if(sehir === user.sehir){
                sehirSepet++;
                sehirTutar += user.tutar;
            }
        });

        logDetail.push(` ${sehir} -- ${sehirSepet} -- ${sehirTutar}`);
    });

    res.json(logDetail);

});



module.exports = analizRouter;
