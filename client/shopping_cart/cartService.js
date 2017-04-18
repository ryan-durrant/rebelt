angular.module('app').factory('cartService', function($http){

  return {
    shoppingCart: [],

    addToCart: function(id, image, name, price) {
      var total = Number(price.replace(/[^0-9\.]+/g,""));
      if(this.shoppingCart.length > 0){
        for (var i = 0; i < this.shoppingCart.length; i++){
          var number = Number(this.shoppingCart[i].price.replace(/[^0-9\.]+/g,""));
          total = total + number;
        }
        total = Math.round(total*100)/100;
      }

      this.shoppingCart.push({id: id, image_url: image, title: name, price: price, total: total});

      return this.shoppingCart;
    }
  };
});
