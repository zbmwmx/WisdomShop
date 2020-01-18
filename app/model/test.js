var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username : String,
    password : String
}); 

var User = mongoose.model('User',userSchema);

var kewin = new User({username:'kewin',password:'kewin567'});
var rude = new User({username:'rude',password:'rude123'});

kewin.save(function (err) {
    if (err) return handleError(err);
    // saved!
  });

rude.save(function (err) {
    if (err) return handleError(err);
    // saved!
  });