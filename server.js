const express = require('express');

const app = express();

const bodyParser = require('body-parser');

require('./db/db.js');


app.use(bodyParser.urlencoded({extended: false}));

const housesController = require('./controllers/houseController.js');
app.use('/houses', housesController);


// Index Router
app.get('/', (req, res)=>{
	res.send('homepage')
})







app.listen(3000, ()=>{
	console.log('listening on port 3000')
})