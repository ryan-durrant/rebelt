var app = angular.module('app', ['ui.router', 'ngCookies'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state({
        name: 'home',
        url:'/',
        templateUrl: "./js/views/home.html",
        controller: "mainCtrl"
      })
      .state({
        name: 'mens_belts',
        url:'/mens',
        templateUrl: "./js/views/mens_belts.html",
        controller: "mainCtrl"
      })
      .state({
        name: 'womens_belts',
        url: '/womens',
        templateUrl: "./js/views/womens_belts.html",
        controller: "mainCtrl"
      })
      .state({
        name: 'kids_belts',
        url: '/kids',
        templateUrl: "./js/views/kids_belts.html",
        controller: "mainCtrl"
      })
      .state({
        name: 'about',
        url: '/about',
        templateUrl: "./js/views/about_us.html"
      })
      .state({
        name: 'singleProduct',
        url: '/product_details/:id',
        templateUrl: "./js/views/single_product.html",
        controller: "productCtrl"
      })
      .state({
        name: 'contactUs',
        url: '/contact',
        templateUrl: "./js/views/contact_us.html",
        controller: "contactCtrl"
      })
      .state({
        name: 'allProducts',
        url: '/products',
        templateUrl: "./js/views/all_products.html",
        controller: "mainCtrl"
      })
      .state({
        name: 'shoppingCart',
        url: '/cart',
        templateUrl: "./js/views/shopping_cart.html",
        controller: "cartCtrl"
      });

      //MUST DO!!! This sends your page to the home state upon arrival.
      $urlRouterProvider
          .otherwise('/');
  });
