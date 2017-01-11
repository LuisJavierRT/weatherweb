var express = require("express"),
    app = express(),
    server = require("http").createServer(app),
    io = require("socket.io").listen(server)
    serialport = require("serialport"),
    SerialPort = serialport.SerialPort,
    bodyParser = require("body-parser"),
    sessionController = require("./controllers/sessionController"),
    signUpController = require("./controllers/signUpController"),
    sensorController = require("./controllers/sensorController");

var myPort = new SerialPort("COM3", {
  baudrate: 9600,
  parser: serialport.parsers.readline("\n")
});

io.on("conecction", function(socket) {
  console.log("Someone just connected");
});

myPort.on("open", function(){
  console.log("Arduino connected");
});

myPort.on("data", function(data){
  io.sockets.emit("lectura", data);
});

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use("/", express.static(__dirname + "/app"))

app.post("/signup", signUpController.signup);
app.post("/login", sessionController.login);

app.post("/setData", sensorController.sensors);

server.listen(8080, function(){
  console.log("Listening at port 8080");
});
