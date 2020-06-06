// getting-started.js
var mongoose = require('mongoose');
const url =
    "mongodb+srv://coin:coin123@cluster0-p7ucd.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(url, {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("we are connected!");
});