const mongoose = require('mongoose');




const houseSchema = new mongoose.Schema({
	address: String
})

module.exports = mongoose.model('House', houseSchema)