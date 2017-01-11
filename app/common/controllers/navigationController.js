(function(){
  "use strict"
  angular
    .module("Redes")
    .controller("NavigationController", ["$scope", "$state", "ShareSessionService", function($scope, $state, shareSessionService) {
      $scope.logout = function(){
        shareSessionService.removeSession();
        $state.go("login");
      }
    }]);
})();
