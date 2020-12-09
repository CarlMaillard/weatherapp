var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology : true
  }
  mongoose.connect('mongodb+srv://carlmaillard:Pdsx3JXta74y0UcY@cluster0.73m7x.mongodb.net/weatherapp?retryWrites=true&w=majority', 
      options,         
      function(err) {
       console.log(err);
      }
  );

  module.exports = mongoose;