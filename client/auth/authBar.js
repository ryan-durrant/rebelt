angular.module('app').component('authBar', {
  templateUrl: './auth/authBar.html',
  controller: Controller,
  controllerAs: 'model',
  bindings: {
    modalLoad: '=',
    userCredentials: '='
  }
});

function Controller(authService, $cookies){
  var model = this;

  //SIGNUP FORM
  //Everything is assigned to $scope.customerData keys
  model.newCustomer = function(){
    authService.createCustomer(model.customerData).then(function(response){
      authService.user = response.data;
      model.user = authService.user;
    });
    //Resets the form input boxes
    model.customerData = undefined;
  };

  model.findCookieUser = function(){
    if(document.cookie.indexOf('loggedInUser') > -1){
      model.cookieUser = JSON.parse($cookies.getAll().loggedInUser).displayName;
      model.cookieUserF_Name = model.cookieUser.slice(0, model.cookieUser.indexOf(" "));
      model.cookieUserL_Name = model.cookieUser.slice(model.cookieUser.indexOf(" ") + 1);
    }
    else {
      model.cookieUser = "";
    }
  };
  model.findCookieUser();

  model.login = function(){
    authService.login(model.credentials).then(function(response){
      authService.user = response.data;
      model.user = authService.user;
    });

    //Resets the form input boxes
    model.credentials = undefined;
  };

  model.logout = function(){
    model.user = undefined;
    $cookies.remove('loggedInUser');
    model.cookieUser = "";
  };
}
