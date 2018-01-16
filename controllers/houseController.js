const express = require('express');

const router = express.Router();

router.get('/', (req, res)=>{
	res.render('houses/index.ejs')
})

router.get('/new', (req, res)=>{
	res.render('houses/new.ejs')
})

module.exports = router; 