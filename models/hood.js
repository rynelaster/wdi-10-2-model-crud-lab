const mongoose = require("mongoose");

const hoodSchema = new mongoose.Schema({
	name: String,
})

module.exports = mongoose.model("Hood", hoodSchema);
