/*jshint esversion: 6 */

angular.module('app').factory('app_service', function($http){
  var user = undefined;

  return {

    user: user,

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

    addToCart: function(id, image, name, price) {
      var total = Number(price.replace(/[^0-9\.]+/g,""));
      if(this.shoppingCart.length > 0){
        for (var i = 0; i < this.shoppingCart.length; i++){
          var number = Number(this.shoppingCart[i].price.replace(/[^0-9\.]+/g,""));
          //console.log(number * 1);
          total = total + number;
        }
        total = Math.round(total*100)/100;
      }

      this.shoppingCart.push({id: id, image_url: image, title: name, price: price, total: total});
      //console.log(this.shoppingCart);

      return this.shoppingCart;
    }

  };
});
