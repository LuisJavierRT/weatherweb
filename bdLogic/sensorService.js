var Sensor = require("../models/sensor").Sensor;

exports.setData = function(sensorData, callback) {
  var sensor = new Sensor({
    apiKey: sensorData.apiKey,
    humidity: sensorData.humidity,
    temperature: sensorData.temperature,
    gas: sensorData.gas
  });

  sensor.save().then(function(sensor) {
    callback({
      status: true,
      message: "El sensor se almacenó correctamente",
      data: sensor
    });
  },
  function(err) {
    callback({
      status: false,
      message: "Error guardando los datos",
      data: null
    });
  });
};
