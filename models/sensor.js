var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var sensor_schema = new Schema({
  apiKey: {
    type: String,
    require: true
  },
  humidity: {
    type: String
  },
  temperature: {
    type: String
  },
  gas: {
    type: String
  }
});

var Sensor = mongoose.model("Sensor", sensor_schema);
exports.Sensor = Sensor;
