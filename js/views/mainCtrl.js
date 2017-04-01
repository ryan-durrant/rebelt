angular.module('app').controller('mainCtrl', function($scope, app_service){
  app_service.getMens()
    .then(function mensProducts(response){
      $scope.mensProducts = response;
    });

});
