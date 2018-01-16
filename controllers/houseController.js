const express = require('express');

const router = express.Router();

const House = require('../models/house.js')

router.get('/', (req, res)=>{
	res.render('houses/index.ejs')
})

router.get('/new', (req, res)=>{
	res.render('houses/new.ejs')
})

router.post('/', (req, res)=>{
	House.create(req.body, (err, houseCreated)=>{
		if(err){
			console.log(err)

		}else{
			console.log(houseCreated)
			res.redirect('/houses')
		}
	})
})























module.exports = router; 