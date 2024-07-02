const moongose = require("mongoose");
//const moongoUrl ="mongodb://127.0.0.1:27017/Hotel"

const moongoUrl =  "mongodb+srv://alokkumarkgr12:Anita52214735@cluster0.cnxshlo.mongodb.net/HotelSystem?retryWrites=true&w=majority&appName=Cluster0";
// moongose.connect(moongoUrl ,{
//     useNewUrlParser: true,
//      useUnifiedTopology: true
// })
moongose.connect(moongoUrl)
.then(() => {
    console.log('MongoDB connection connected');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

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