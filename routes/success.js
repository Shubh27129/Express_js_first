

const express = require('express');

const successController= require('../controllers/successpage')


const router = express.Router();


router.get('/success', successController.getSuccessPage);


router.post('/success', successController.postSuccessPage);

module.exports = router;