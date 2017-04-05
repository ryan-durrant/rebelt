angular.module('app').controller('mainCtrl', function($scope, app_service){
  app_service.getMens()
    .then(function mensProducts(response){
      $scope.mensProducts = response.data;
      //I have to do response.data to get the one key from a large object that the response sends back
    });

  app_service.getWomens()
    .then(function womensProducts(response){
      $scope.womensProducts = response.data;
    });

  app_service.getKids()
    .then(function kidsProducts(response){
      $scope.kidsProducts = response.data;
    });

  // $scope.getProduct = function(id){
  //   app_service.getProduct(id)
  //   .then(function singleProduct(response){
  //     console.log('Response:', response.data[0]);
  //     $scope.singleProduct = response.data[0];
  //     // return response.data[0];
  //   });
  // };
  //THIS DIDN'T WORK BC THE CONTROLLER RESETS EVERYTIME A NEW PAGE PULLS UP
  //THE DATA HAD TO SUBSIST ON THE SERVICE.

  // $scope.getProduct = function(id){
  //   app_service.getProduct(id);
  //   // $scope.oneProd = app_service.oneProduct;
  //   // console.log('Second', $scope.oneProd);
  // }; //PUTS THE PRODUCT ON THE product key on the service.
  // // $scope.getProduct();
  // console.log($scope.oneProd);
  //
  // $scope.oneProd = app_service.oneProduct;

});
