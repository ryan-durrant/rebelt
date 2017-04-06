// var app = require('./../../../index');
angular.module('app').controller('productCtrl', function($scope, $stateParams, app_service){
  // console.log($stateParams);
  //$stateParams allows me to see whatever is in the url
    app_service.getProduct($stateParams.id).then(function(response){
      $scope.oneProd = response.data[0];
    });

    $scope.load = function() {
      //jquery won't initialize the select form as expected because of the routing
      //that is why we add a controller for the page that is routed in.
      $("#myModal").modal();
    };
    $scope.load();
});
