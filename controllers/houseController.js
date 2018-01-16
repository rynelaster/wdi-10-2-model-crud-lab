const express = require('express');

const router = express.Router();

const House = require('../models/house.js')


// INDEX ROUTE
router.get('/', (req, res)=>{
	House.find({}, (err, foundHouses)=>{
		if(err){
			console.log(err)
		}
		else{
			res.render('houses/index.ejs', {
				houses: foundHouses
			})
		}
	})

})

router.get('/new', (req, res)=>{
	res.render('houses/new.ejs')
})


// POST NEW ROUTE
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


router.get('/:id', (req, res)=> {
	House.findById(req.params.id, (err, foundHouse)=>{
		if (err) {
			console.log(err)
		} else{
			console.log(foundHouse)
			res.render('houses/show.ejs', {
				house: foundHouse
			})
		}
	})
})





















module.exports = router; 