//This controller is necessary bc the data comes from the URL of the page I am on with the id of each product
angular.module('app').controller('singleProductCtrl', function($scope, $stateParams, productService, cartService){

  // console.log($stateParams);
  //$stateParams allows me to see whatever is in the url

    productService.getProduct($stateParams.id).then(function(response){
      $scope.oneProd = response.data[0];
    });

    $scope.addToCart = function(id, image, name, price){
      cartService.addToCart(id, image, name, price);
      //the problem is that the data doesn't persist. Everytime I come to the controller shoppingCart is empty.
      //which is why I am storing shoppingCart on the service.

    };

    //This function will run everytime the page loads, then the shopping cart modal will be ready when called on.
    $scope.load = function() {
      //jquery won't initialize the select form as expected because of the routing
      //that is why we add a controller for the page that is routed in.
      $("#myModal").modal();
    };
    $scope.load();
});
