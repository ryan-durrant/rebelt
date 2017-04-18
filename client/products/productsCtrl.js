angular.module('app').controller('productsCtrl', function($scope, productService){

//goes to the service which hits the API endpoint and serves a promise back.
  productService.getMens()
    .then(function mensProducts(response){
      $scope.mensProducts = response.data;
      //I have to do response.data to get the one key from a large object that the response sends back
    });

//goes to the service which hits the API endpoint and serves a promise back.
  productService.getWomens()
    .then(function womensProducts(response){
      $scope.womensProducts = response.data;
    });

//goes to the service which hits the API endpoint and serves a promise back.
  productService.getKids()
    .then(function kidsProducts(response){
      $scope.kidsProducts = response.data;
    });

  productService.getProducts()
    .then(function allProducts(response){
      $scope.allProducts = response.data;
    });

  });