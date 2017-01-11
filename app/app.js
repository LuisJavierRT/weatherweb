(function(){
  "use strict"
  angular
    .module("Redes", ["lumx", "ui.router"])
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/login");

      $stateProvider
        .state("base", {
          abstract: true,
          url: "",
          templateUrl: "common/views/base.html"
        })
        .state("login", {
          url: "/login",
          parent: "base",
          templateUrl: "login/views/login.html",
          controller: "LoginController"
        })
        .state("signup", {
          url: "/signup",
          parent: "base",
          templateUrl: "signup/views/signup.html",
          controller: "SignUpController"
        })
        .state("home", {
          url: "/home",
          parent: "base",
          templateUrl: "common/views/home.html"
        })
        .state("sensors", {
          url: "/sensors",
          parent: "home",
          templateUrl: "sensors/views/sensor.html",
          controller: "SensorController"
        })
    });
})();
