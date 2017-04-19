var app = angular.module('app', ['ui.router', 'ngCookies'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state({
        name: 'home',
        url:'/',
        templateUrl: "./homepage/home.html"
      })
      .state({
        name: 'mens_belts',
        url:'/men',
        template: '<product-grid type="men"></product-grid>'
      })
      .state({
        name: 'womens_belts',
        url: '/women',
        template: '<product-grid type="women"></product-grid>'
      })
      .state({
        name: 'kids_belts',
        url: '/kids',
        template: '<product-grid type="kids"></product-grid>'
      })
      .state({
        name: 'products',
        url: '/products',
        template: '<product-grid></product-grid>'
      })
      .state({
        name: 'about',
        url: '/about',
        templateUrl: "./about_us/about_us.html"
      })
      .state({
        name: 'singleProduct',
        url: '/product_details/:id',
        template: '<single-product></single-product>'
      })
      .state({
        name: 'contactUs',
        url: '/contact',
        templateUrl: "./contact_us/contact_us.html",
        controller: "contactCtrl"
      })
      .state({
        name: 'shoppingCart',
        url: '/cart',
        template: '<shopping-cart></shopping-cart>'
      });

      //MUST DO!!! This sends your page to the home state upon arrival.
      $urlRouterProvider
          .otherwise('/');
  });
