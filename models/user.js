var Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

var User = new Schema({
    uid 	 : ObjectId
  , name     : String
  , lname    : String
  , joined   : Date
  , uname	 : String
  , password : String
});