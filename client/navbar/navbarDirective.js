angular.module('app').directive('navbarDirective', function(){
  return {
    templateUrl: './navbar/navbar.html',
    restrict: 'E',
    controller: 'authCtrl'
  };
});
