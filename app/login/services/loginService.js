(function(){
  "use strict"
  angular
    .module("Redes")
    .factory("LoginService", ["RequestService", function(requestService){
      var loginUser = function(pData){
        var link = "/login";
        return requestService.postRequest({data: pData, params: ""}, {url: link}).then(function(res){
            return res;
          },
          function(res){
            return res;
          });
      };

      return {
        login : function(pData){
          return loginUser(pData);
        }
      };
    }]);
})();
