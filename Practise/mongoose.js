
const mongoose = require('mongoose');



var dataProvider = function(){

  var result;

mongoose.connect('mongodb://tgl-onprem11.rctanalytics.com/identity');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we are connected"); 
  

});
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
}

module.exports = new dataProvider();
