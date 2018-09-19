
// import mongoose from 'mongoose';
const mongoose = require('mongoose');

mongoose.connect('mongodb://tgl-onprem11.rctanalytics.com:27017');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we are connected");
});