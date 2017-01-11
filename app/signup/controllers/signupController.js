(function(){
  "use strict"
  angular
    .module("Redes")
    .controller("SignUpController", ["$scope", "$state", "SignUpService", function($scope, $state, signUpService) {
      $scope.userData = {
        name: "",
        email: "",
        username: "",
        password: ""
      }

      $scope.signUp = function(pData) {
        if(pData.email == "" || pData.username == "" || pData.password == "" || pData.name == ""){
          console.log("No debe dejar campos en blanco");
        }
        else{
          signUpService.signUp(pData).then(function(result) {
            if(result.success) {
              $state.go("login");
            }
            else{
              console.log(result);
            }
          });
        }
      };
    }]);
})();
