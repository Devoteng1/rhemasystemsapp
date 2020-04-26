const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const EventEmitter = require('events');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

//app middleware
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors());


//import routes
const authRoutes = require('./routes/auth.router')



//middleware
app.use('api/v1', authRoutes)


app.get('/', (req,res) => {
    res.json({message:'first route'})
})

const PORT = process.env.PORT || 9000;

const emitter = new EventEmitter()
emitter.setMaxListeners(100)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//console.log(b);