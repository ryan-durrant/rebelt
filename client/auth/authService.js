angular.module('app').factory('authService', function($http){
  var user = undefined;

  return {

    user: user,

    createCustomer: function(customer) {
      return $http.post('/api/customer', customer);
      //The second argument of this AJAX call is req.body
    },

    login: function(credentials){
      return $http.post('/api/login', credentials);
      //The second argument of this AJAX call is req.body
    },

  };
  });
