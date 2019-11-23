const express = require('express');
const router = express.Router();

const Radio = require('../models/radio');

router.get('/', async (req,res) => {
    const radios = await Radio.find();
    res.render('index',{
        radios
    });
});

router.post('/add', async (req,res)=>{
    const radio = new Radio(req.body);
    await radio.save();
    res.redirect('/');
});

router.get('/update/:id', async (req,res)=>{
    const { id } = req.params;
    const radio = await Radio.findById(id);
    res.render('update', {
        radio
    });
});

router.post('/update/:id', async (req, res) => {
    const { id } = req.params;
    await Radio.update({_id: id}, req.body);
    res.redirect('/');
});

router.get('/delete/:id', async (req,res)=>{
    const { id } = req.params;
    await Radio.remove({_id: id});
    res.redirect('/');
});

module.exports = router;