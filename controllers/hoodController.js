const express = require("express");
const router = express.Router();
const Hood = require("../models/hood.js")



// Index Route
router.route("/")
	.get((req, res) => {
		Hood.find({}, (err, foundHoods) => {
			if (err) {
				console.log(err)
			} else {
				res.render("hoods/index.ejs", {
					hoods: foundHoods
				})		
			}
		})
	})
	.post((req, res) => {
		Hood.create(req.body, (err, hoodCreated) => {
			if (err) {
				console.log(err)
			} else {
				console.log(hoodCreated)
				res.redirect("/hoods")
			}
		})
	})

router.route("/new")
	.get((req, res) => {
		res.render("hoods/new.ejs")
	})




module.exports = router;