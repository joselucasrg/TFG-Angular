const express = require('express')
const router = express.Router();

const criteriF = require('../controllers/criterios.controller')

router.get('/',criteriF.getCriterios);
router.post('/', criteriF.createCriterio);
router.get('/:id', criteriF.getCriterio);


//router.get('/alternativas',criteriF.getAlternativas);
module.exports = router;