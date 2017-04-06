angular.module('app').controller('contactCtrl', function($scope){
  $scope.load = function() {
    //jquery won't initialize the select form as expected because of the routing
    //that is why we add a controller for the page that is routed in.
    $('select').material_select();
  };
  $scope.load();

});
