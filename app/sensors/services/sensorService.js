(function(){
  "use strict"
  angular
    .module("Redes")
    .factory("SensorService", ["RequestService", function(requestService){
      var setAllData = function(pData){
        var link = "/setData";
        return requestService.postRequest({data: pData, params: ""}, {url: link}).then(function(res){
            return res;
          },
          function(res){
            return res;
          });
      };

      return {
        setData : function(pData){
          return setAllData(pData);
        }
      };
    }]);
})();
