(function(){
  "use strict"
  angular
    .module("Redes")
    .service("ShareSessionService", function(){
      var setCurrentSession = function(user) {
        localStorage.setItem("idUser", user._id);
        localStorage.setItem("nameUser", user.name);
        localStorage.setItem("email", user.email);
      };

      var getCurrentSession = function() {
        return {
          _id: localStorage.getItem("idUser"),
          name: localStorage.getItem("nameUser"),
          email: localStorage.getItem("email")
        };
      };

      var removeSession = function(){
        localStorage.setItem("idUser", null);
        localStorage.setItem("nameUser", null);
        localStorage.setItem("email", null);
      };

      return {
          setSession: function(pData) {
            return setCurrentSession(pData);
          },

          getSession: function() {
            return getCurrentSession();
          },

          removeSession: function() {
            return removeSession();
          }
      };
    })
})();
