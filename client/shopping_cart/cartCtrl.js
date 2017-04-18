angular.module('app').controller('cartCtrl', function($scope, cartService){

    $scope.shoppingCart = cartService.shoppingCart;

});
