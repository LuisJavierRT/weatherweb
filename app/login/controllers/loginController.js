(function(){
  "use strict";
  angular
    .module("Redes")
    .controller("LoginController", ["$scope", "$state", "LoginService", "ShareSessionService",
    function($scope, $state, loginService, shareSessionService) {
      $scope.userData = {
        username: "",
        password: ""
      }

      $scope.login = function(pData) {
        loginService.login(pData).then(function(result) {
          if(result.success){
            var user = {
              _id: result.data._id,
              name: result.data.name,
              email: result.data.email
            }
            console.log(user);
            shareSessionService.setSession(user);
            $state.go("sensors");
          }
          else{
            console.log(result);
          }
        });
      };

      $scope.signup = function() {
        $state.go("signup");
      };
    }]);
})();
