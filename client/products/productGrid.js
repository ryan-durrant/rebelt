//angular component is similar to a directive. Components come with the version 1.6 of Angular
angular.module('app').component('productGrid', {
  templateUrl: './products/products.html',
  controller: Controller,
  controllerAs: 'model',
  bindings: {
    type: '@'
  }
});

//by default the component binds to the $scope, so $scope isn't necessary but you can still have it if you want.
function Controller(productService){
  var model = this;

  //$onInit waits for the bindings to be ready before running the function.
  model.$onInit = function(){
    productService.getProducts(model.type)
      .then(function products(response){
        model.products = response.data;
      });
  };

  model.getPageTitle = function(){
    if(!model.type){
      return 'All Belts';
    }
    var title = model.type + "'";
    if(model.type.substring(model.type.length-1).toLowerCase() !== 's'){
      title = title + 's';
    }
    return title + ' Belts';
  };


}
