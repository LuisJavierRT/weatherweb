var sensorService = require("../bdLogic/sensorService");

exports.sensors = function(req, res) {
  sensorService.setData(req.body, function(result){
    var sensorResponse = {
      success: result.status,
      message: result.message,
      data: result.data
    }
    res.send(sensorResponse);
  });
}
