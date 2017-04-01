angular.module('app').factory('app_service', function($http){
  return {
    getMens: function() {
      return $http.get('/api/products/men');
    }
  };
});
