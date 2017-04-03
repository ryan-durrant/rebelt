/*jshint esversion: 6 */

angular.module('app').factory('app_service', function($http){
  return {
    getMens: function() {
      return $http.get('/api/products/men');
    },

    getWomens: function() {
      return $http({
        method: 'GET',
        url: '/api/products/women'
      });
    },

    getKids: function() {
      return $http.get('/api/products/kids');
    },

    getProduct: function(id) {
      return $http.get(`/api/products/${id}`);
    }

  };
});
