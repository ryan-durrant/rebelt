//This controller is necessary bc the data comes from the URL of the page I am on with the id of each product
angular.module('app').controller('productCtrl', function($scope, $stateParams, app_service){

  // console.log($stateParams);
  //$stateParams allows me to see whatever is in the url

    app_service.getProduct($stateParams.id).then(function(response){
      $scope.oneProd = response.data[0];
    });

//This function will run everytime the page loads, then the modal will be ready when called on.
    $scope.load = function() {
      //jquery won't initialize the select form as expected because of the routing
      //that is why we add a controller for the page that is routed in.
      $("#myModal").modal();
    };
    $scope.load();

    $scope.shoppingCart = [];

    $scope.addToCart = function(image, name, price){
      app_service.addToCart();

      // $scope.shoppingCart.push({image_url: image, name: name, price: price});
      // console.log($scope.shoppingCart);
      //the problem is that the data doesn't persist. Everytime I come to the controller shoppingCart is empty.
    };

});
