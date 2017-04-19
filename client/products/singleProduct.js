angular.module('app').component('singleProduct', {
  templateUrl: './products/single_product.html',
  controller: Controller,
  controllerAs: 'model'
});

//by default the component binds to the $scope, so $scope isn't necessary but you can still have it if you want.
function Controller(productService, cartService, $stateParams){
  var model = this;

  // console.log($stateParams);
  //$stateParams allows me to see whatever is in the url

    productService.getProduct($stateParams.id).then(function(response){
      model.oneProd = response.data[0];
    });

    model.addToCart = function(id, image, name, price){
      cartService.addToCart(id, image, name, price);
      //the problem is that the data doesn't persist. Everytime I come to the controller shoppingCart is empty.
      //which is why I am storing shoppingCart on the service.

    };

    //This function will run everytime the page loads, then the shopping cart modal will be ready when called on.
    model.load = function() {
      //jquery won't initialize the select form as expected because of the routing
      //that is why we add a controller for the page that is routed in.
      $("#myModal").modal();
    };
    model.load();
}
