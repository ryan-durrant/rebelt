/*jshint esversion: 6 */
angular.module('app').factory('productService', function($http){

  return {

    getProduct: function(id) {
      return $http.get(`/api/products/${id}`);
    },

    getProducts: function(type) {
      var endpoint = '/api/products/';
      if(type){
        endpoint = endpoint + type;
      }
      return $http.get(endpoint);
    }

  };
});
