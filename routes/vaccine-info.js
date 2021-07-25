var express = require('express');
var router = express.Router();

router.get('/types', (req,res)=>{
    res.send('NOT IMPLEMENTED: vaccine/types')
})

router.get('/stats/local', (req,res)=>{
    res.send('NOT IMPLEMENTED: vaccine/stats/local')
})

router.get('/stats/world', (req,res)=>{
    res.send('NOT IMPLEMENTED: vaccine/stats/world')
})

module.exports=router;