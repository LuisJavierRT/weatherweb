(function(){
  "use strict"
  angular
    .module("Redes")
    .factory("SignUpService", ["RequestService", function(requestService){
      var signUpUser = function(pData){
        var link = "/signup";
        return requestService.postRequest({data: pData, params: ""}, {url: link}).then(function(res){
            return res;
          },
          function(res){
            return res;
          });
      };

      return {
        signUp : function(pData){
          return signUpUser(pData);
        }
      };
    }]);
})();
