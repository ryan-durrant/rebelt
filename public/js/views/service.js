/*jshint esversion: 6 */

angular.module('app').factory('app_service', function($http){
  return {

    getMens: function() {
      return $http.get('/api/products/men');
    },

//Just another syntax for $http
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
    },

    getProducts: function() {
      return $http.get('/api/products');
    },

    createCustomer: function(customer) {
      return $http.post('/api/customer', customer);
      //The second argument of this AJAX call is req.body
    },

    shoppingCart: [],

    addToCart: function() {
      this.shoppingCart.push('hello');
      console.log(this.shoppingCart);
    }

  };
});
