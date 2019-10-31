const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const firebase = require('firebase');

const questionPaperRoutes = require('./api/routes/questionPapers');
const userProfiles = require('./api/routes/userProfiles');
const paper = require('./api/routes/Paper');

app.use(cors());
//morgan is a great logging tool that anyone who works with HTTP servers in Node.js
app.use(morgan('dev'));
//extract json data and make more easy to read
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Routes which should handle requests
app.use('/questionPaper', questionPaperRoutes);
app.use('/userProfiles', userProfiles);
app.use('/paper', paper);

//if request comes with wrong routes(other than/questionPaper)
app.use((req, res, next) => {
   const error = new Error('Not found');
   error.status = 404;
   next(error);
});

//to handle all kinds of error within the application
app.use((error, req, res, next) => {
   res.status(error.status || 500);
   res.json({
       error: {
           message: error.message
       }
   })
});

module.exports = app;

