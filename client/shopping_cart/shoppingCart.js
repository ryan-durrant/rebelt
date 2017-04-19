angular.module('app').component('shoppingCart', {
  templateUrl: './shopping_cart/shopping_cart.html',
  controller: Controller,
  controllerAs: 'model'
});

function Controller(cartService){
  var model = this;

  model.shoppingCart = cartService.shoppingCart;
}
