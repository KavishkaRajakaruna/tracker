var express = require('express');
var router = express.Router();
const vaccineStats = require('../controllers/vaccine-stats')

router.get('/types', vaccineStats.getTypes)

router.get('/stats/local', vaccineStats.getLocal)

router.get('/stats/world', vaccineStats.worldStats)

module.exports=router;