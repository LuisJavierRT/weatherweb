var sessionService = require("../bdLogic/sessionService");

exports.login = function(req, res) {
  sessionService.validateUser(req.body, function(result){
    var sessionResponse = {
      success: result.status,
      message: result.message,
      data: result.data
    }
    res.send(sessionResponse);
  });
}
