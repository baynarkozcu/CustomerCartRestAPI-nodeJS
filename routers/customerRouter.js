const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');

router.get('/', async (req,res)=>{
    try{
        const customerList = await Customer.find({});
        res.json(customerList);
    }catch(error){
        console.log(error);
    }
});

router.get('/:id', async (req,res)=>{
    try{
        const customer = await Customer.findById({_id: req.params.id});
        res.json(customer);
    }catch(error){
        console.log(error);
    }
});

router.post('/', async(req,res)=>{
    try{
        const customer = new Customer(req.body);
        const result = await customer.save();
        res.json(result);
    }catch(error){
        console.log(error);
    }
});

router.post('/:id', async(req,res)=>{
    try{
        const customer = await Customer.findById({_id: req.params.id});
        const orderList = customer.siparis;
        value = orderList.find((prod)=> prod.alindiMi == false);
        if(value==undefined){
            orderList.push({
                "sepet":[],
                "alindiMi": false
            })
        }else{
            value.sepet.push({
                "tutar": 150,
                "aciklama": "Ayakkabı"
            });
        }

       const result = await customer.save();
        res.json(result);
    }catch(error){
        console.log(error);
    }
});

module.exports = router;