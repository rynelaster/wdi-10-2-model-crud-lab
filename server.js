const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const methodOverride = require('method-override');



require('./db/db.js');


app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'))



const housesController = require('./controllers/houseController.js');
app.use('/houses', housesController);
const hoodsController = require('./controllers/hoodController.js');
app.use('/hoods', hoodsController);


// Index Router
app.get('/', (req, res)=>{
	res.send('homepage')
})







app.listen(3000, ()=>{
	console.log('listening on port 3000')
})