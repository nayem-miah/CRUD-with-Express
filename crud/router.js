const express = require('express');
const { homePage, create,singleData, update} = require('./controller');
const router = express.Router();


router.get('/',homePage);
router.post('/create',create);
router.get('/detail/:id',singleData);
router.patch('/update/:id', update);

module.exports = router;