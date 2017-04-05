/*jshint esversion: 6 */

angular.module('app').factory('app_service', function($http){
  return {
    //oneProduct: null,

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
    } //Didn't let the data persist. Returned the promise and the data was kept on the controller.

    // getProduct: function(id) {
    //   $http.get(`/api/products/${id}`)
    //     .then((response) => this.oneProduct = response.data[0]);
    // }

  //   getProduct: function(id) {
  //    $http.get(`/api/products/${id}`)
  //      .then(function(response){
  //        this.oneProduct = response.data[0];
  //      });
  //  }

  };
});
