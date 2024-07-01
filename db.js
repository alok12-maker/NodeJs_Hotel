const moongose = require("mongoose");
const moongoUrl ="mongodb://127.0.0.1:27017/Hotel"
moongose.connect(moongoUrl ,{
    useNewUrlParser: true,
     useUnifiedTopology: true
})

const db = moongose.connection;

db.on('disconnected', function() {
    console.log('MongoDB connection disconnected');
  });
  
  // Connection reconnected event
  db.on('error', function(err) {
    console.log('MongoDB connection reconnected' , err);
  });
  
  // Connection connected event
  db.on('connected', function() {
    console.log('MongoDB connection connected');
  });
  module.exports = db;