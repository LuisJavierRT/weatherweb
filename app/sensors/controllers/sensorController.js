(function(){
  "use strict";
  angular
    .module("Redes")
    .controller("SensorController", ["$scope", "SensorService", "ShareSessionService", function($scope, sensorService, shareSessionService) {
      var socket = io();
      $scope.apiKey = null
      $scope.hiddenApiKey = false;
      $scope.getApiKey = function(){
        $scope.apiKey = shareSessionService.getSession()._id;
      };

      $scope.showApiKey = function() {
        $scope.hiddenApiKey = !$scope.hiddenApiKey;
      }

      $scope.setData = function(){
        socket.on("lectura", function(lectura) {
          var allData = lectura.split("\t");
          if(allData[0] === $scope.apiKey){
            $scope.$apply(function() {
              var data = {
                apiKey: allData[0],
                humidity: allData[1],
                temperature: allData[2],
                gas: allData[3]
              };
              sensorService.setData(data).then(function(result) {
                if(result.success) {
                  console.log("Bien");
                }
                else{
                  console.log("mal");
                }
              });
            });
          }
          else {
            console.log("lol");
          }
        });
      };

      $scope.getApiKey();
    }]);
})();
