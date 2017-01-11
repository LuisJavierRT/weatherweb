var signUpService = require("../bdLogic/signUpService");

exports.signup = function(req, res) {
  signUpService.signUpUser(req.body, function(result) {
    var signUpResponse = {
      success: result.status,
      message: result.message
    }
    res.send(signUpResponse);
  });
}
