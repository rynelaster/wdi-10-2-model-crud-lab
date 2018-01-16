const express = require("express");
const router = express.Router();



// Index Route
router.get("/", (req, res) => {
	// res.render("hoods/index.js")
	res.send("Hoods index route")
})




module.exports = router;