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

});
