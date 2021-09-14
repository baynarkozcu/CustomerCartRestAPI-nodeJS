const faker = require('faker');
const generateRouter = require('express').Router();
const Customer = require('../models/musteri');
const Sepet = require('../models/sepet');
const SepetUrun = require('../models/sepeturun');


generateRouter.post('/', async (req,res)=>{
    const sehirler = ["Ankara", "İstanbul", "İzmir", "Bursa", "Edirne", "Konya", "Antalya", "Diyarbakır", "Van", "Rize"];
    try{
        const lastCustomerIndex = (await Customer.find({})).length;
        for(var i =0; i<req.query.musteriAdet; i++){
            const musteriLength = (await Customer.find({})).length;
            //Faker Packages
            const firstname = faker.name.findName();
            const lastname = faker.name.lastName();

            //New Customer
            const customer = new Customer({
                ad:firstname, 
                soyad: lastname, 
                sehir:sehirler[Math.floor(Math.random() * 10)],
                index: musteriLength+1,
            });
            await customer.save();
        }
        const newCustomerList = await Customer.find({index: {$gt: lastCustomerIndex}} );
        const newCustomerIdList = [];
        newCustomerList.forEach((customer)=>{
            newCustomerIdList.push(customer.index);
        });
        for(var y = 0; y<req.query.sepetAdet; y++){
            const sepetCount = (await Sepet.find({})).length;

            //New Sepet
            const sepet = new Sepet({
                musteriId : newCustomerIdList[Math.floor(Math.random() * newCustomerList.length)],
                index: sepetCount+1,
            });
            await sepet.save();
            for(var z=0; z<Math.floor(Math.random()*(5-1)+1); z++){

                //New SepetUrun
                const sepetUrun = new SepetUrun({
                    sepetId: sepet.index,
                    tutar: Math.floor(Math.random() * (1000 - 100) + 100),
                    aciklama: faker.lorem.lines(1)
                });
                sepetUrun.save();
            }
        }
        return res.json({
            message : "Kayıt Başarılı"
        });
    }catch(error){
        console.log(`generateRouter Method Errors : ${error}`);
    }
    
});

module.exports = generateRouter;