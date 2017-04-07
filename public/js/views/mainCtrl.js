angular.module('app').controller('mainCtrl', function($scope, app_service, $cookies){

//goes to the service which hits the API endpoint and serves a promise back.
  app_service.getMens()
    .then(function mensProducts(response){
      $scope.mensProducts = response.data;
      //I have to do response.data to get the one key from a large object that the response sends back
    });

//goes to the service which hits the API endpoint and serves a promise back.
  app_service.getWomens()
    .then(function womensProducts(response){
      $scope.womensProducts = response.data;
    });

//goes to the service which hits the API endpoint and serves a promise back.
  app_service.getKids()
    .then(function kidsProducts(response){
      $scope.kidsProducts = response.data;
    });

  console.log($cookies.getAll());

});
