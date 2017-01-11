var User = require("../models/user").User;
exports.signUpUser = function(userData, callback) {
  console.log(userData);
  var user = new User({
    name: userData.name,
    username: userData.username,
    email: userData.email,
    password: userData.password,
  });
  user.save().then(function(user) {
    callback({
      status: true,
      message: "El usuario se almacenó correctamente",
      data: user
    });
  },
  function(err) {
    callback({
      status: false,
      message: "Error guardando los datos",
      data: null
    });
  });
}
