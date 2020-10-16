var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost/Chat3', {useNewUrlParser: true});
 
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/chats');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', indexRouter);
app.use('/api/chats', usersRouter);


module.exports = app;
