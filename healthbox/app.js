const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(morgan('dev'));
app.use(express.json());

//mongo database connection 
const mongo_url = process.env.MONGO_URL;
mongoose.connect(mongo_url)
    .then(() => console.log('MONGODB conected.'))
    .catch(error => console.log(error, 'DATABSE CONNECTION FAILED'))



//server listening 
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log('App running at port ', port);
})