var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost/redes");
var user_schema = new Schema({
  username: {
    type: String,
    require: true
  },
  email: {
    type: String,
    required: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Email invalido"]
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

var User = mongoose.model("User", user_schema);

exports.User = User;
