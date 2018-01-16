const express = require("express");
const router = express.Router();
const Hood = require("../models/hood.js")



// Index Route
router.get("/", (req, res) => {
	// res.render("hoods/index.ejs")
	res.send("Hoods index route")
})

router.get("/new", (req, res) => {
	res.render("hoods/new.ejs")
})




module.exports = router;