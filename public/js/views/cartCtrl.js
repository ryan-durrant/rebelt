angular.module('app').controller('cartCtrl', function($scope, app_service){


    $scope.shoppingCart = app_service.shoppingCart;

});
