var User = require("../models/user").User;
exports.validateUser = function(userData, callback) {
  User.findOne({username: userData.username, password: userData.password}, function(err, data){
    if(err) {
      callback({
        status: false,
        message: "Error en la conexion",
        data: null
      });
    }
    else{
      if(data != null) {
        callback({
          status: true,
          message: "Usuario valido",
          data: data
        });
      }
      else{
        callback({
          status: false,
          message: "No existe ningun usuario con esos datos",
          data: null
        });
      }
    }
  });
};
