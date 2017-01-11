(function(){
  "user strict";
  angular
    .module("Redes")
    .factory("RequestService", function($http) {
      return {
        getRequest: function(data, configs) {
          return $http({
            method: "GET",
            url: configs.url + data.params,
            data: data.data
          })
          .then(function succesCallBack(res) {
                  return res.data;
                },
                function errorCallBack(res){
                  res.data.sucess = false;
                  res.data.message = null;
                  return res.data;
                }
          );
        },

        postRequest: function(data, configs) {
          return $http({
            method: "POST",
            url: configs.url + data.params,
            data: data.data
          })
          .then(function(res) {
                  return res.data;
                },
                function errorCallBack(res){
                  res.data.success = false;
                  res.data.message = null;
                  return res.data;
                }
          );
        },

        putRequest: function(data, configs) {
          return $http({
            method: "PUT",
            url: configs.url + data.params,
            data: data.data
          })
          .then(function succesCallBack(res) {
                  return res.data;
                },
                function errorCallBack(res){
                  res.data.success = false;
                  res.data.message = null;
                  return res.data;
                }
          );
        },

        deleteRequest: function(data, configs) {
          console.log(data);
          return $http({
            method: "DELETE",
            url: configs.url + data.params,
            data: data.data
          })
          .then(function succesCallBack(res) {
                  return res.data;
                },
                function errorCallBack(res){
                  res.data.success = false;
                  res.data.message = null;
                  return res.data;
                }
          );
        }
      };
    });
})();
