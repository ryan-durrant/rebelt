var app = angular.module('app', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state({
        name: 'home',
        url:'/',
        templateUrl: "./js/views/home.html",
        // controller: "controller"
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
        templateUrl: "./js/views/womens_belts.html"
      })
      .state({
        name: 'kids_belts',
        url: '/kids',
        templateUrl: "./js/views/kids_belts.html"
      })
      .state({
        name: 'about',
        url: '/about',
        templateUrl: "./js/views/about_us.html"
      });

      //MUST DO!!! This sends your page to the home state upon arrival.
      $urlRouterProvider
          .otherwise('/');
  });
