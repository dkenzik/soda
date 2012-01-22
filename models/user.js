require('./db_connect');

var Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

var User = new Schema({
    name     : { type: String, default: 'Anonymous' }
  , lname    : { type: String, default: 'Man' }
  , joined   : { type: Date, default: Date.now }
  , uname	 : { type: String, required: true }
  , password : { type: String, required: true }
});

var exports = module.exports = mongoose.model('User', User);