// var app = require('./../../../index');
angular.module('app').controller('productCtrl', function($scope, $stateParams, app_service){
  // console.log($stateParams);
  //$stateParams allows me to see whatever is in the url
    app_service.getProduct($stateParams.id).then(function(response){
      $scope.oneProd = response.data[0];
    });

});
