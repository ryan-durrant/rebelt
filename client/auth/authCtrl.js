angular.module('app').controller('authCtrl', function($scope, authService, $cookies){

  //SIGNUP FORM
  //Everything is assigned to $scope.customerData keys
  // $scope.newCustomer = function(){
  //   authService.createCustomer($scope.customerData).then(function(response){
  //     authService.user = response.data;
  //     $scope.user = authService.user;
  //   });
  //   //Resets the form input boxes
  //   $scope.customerData = undefined;
  // };
  //
  // $scope.findCookieUser = function(){
  //   if(document.cookie.indexOf('loggedInUser') > -1){
  //     $scope.cookieUser = JSON.parse($cookies.getAll().loggedInUser).displayName;
  //     $scope.cookieUserF_Name = $scope.cookieUser.slice(0, $scope.cookieUser.indexOf(" "));
  //     $scope.cookieUserL_Name = $scope.cookieUser.slice($scope.cookieUser.indexOf(" ") + 1);
  //   }
  //   else {
  //     $scope.cookieUser = "";
  //   }
  // };
  // $scope.findCookieUser();
  //
  // $scope.login = function(){
  //   authService.login($scope.credentials).then(function(response){
  //     authService.user = response.data;
  //     $scope.user = authService.user;
  //   });
  //
  //   //Resets the form input boxes
  //   $scope.credentials = undefined;
  // };
  //
  // $scope.logout = function(){
  //   $scope.user = undefined;
  //   $cookies.remove('loggedInUser');
  //   $scope.cookieUser = "";
  // };


//-------------LOGIN AND SIGNUP MODAL----------------
  $scope.modalLoad = function(){
          var formModal = $('.cd-user-modal'),
            formLogin = formModal.find('#cd-login'),
            formSignup = formModal.find('#cd-signup'),
            formForgotPassword = formModal.find('#cd-reset-password'),
            formModalTab = $('.cd-switcher'),
            tabLogin = formModalTab.children('li').eq(0).children('a'),
            tabSignup = formModalTab.children('li').eq(1).children('a'),
            forgotPasswordLink = formLogin.find('.cd-form-bottom-message a'),
            backToLoginLink = formForgotPassword.find('.cd-form-bottom-message a'),
            mainNav = $('.main-nav'),
            form = formModal.find('.cd-form'),
            formButton = formModal.find('#modalButton');

          //open modal
          mainNav.on('click', function(event){
            $(event.target).is(mainNav) && mainNav.children('ul').toggleClass('is-visible');
          });

          //open sign-up form
          mainNav.on('click', '.cd-signup', signup_selected);
          //open login-form form
          mainNav.on('click', '.cd-signin', login_selected);

          //close modal
          formModal.on('click', function(event){
            if( $(event.target).is(formModal) || $(event.target).is('.cd-close-form') ) {
              formModal.removeClass('is-visible');
            }
          });
          //close modal when clicking the esc keyboard button
          $(document).keyup(function(event){
              if(event.which=='27'){
                formModal.removeClass('is-visible');
              }
            });

          //switch from a tab to another
          formModalTab.on('click', function(event) {
            event.preventDefault();
            ( $(event.target).is( tabLogin ) ) ? login_selected() : signup_selected();
          });

          //hide or show password
          $('.hide-password').on('click', function(){
            var togglePass= $(this),
              passwordField = togglePass.prev('input');

            ( 'password' == passwordField.attr('type') ) ? passwordField.attr('type', 'text') : passwordField.attr('type', 'password');
            ( 'Hide' == togglePass.text() ) ? togglePass.text('Show') : togglePass.text('Hide');
            //focus and move cursor to the end of input field
            passwordField.putCursorAtEnd();
          });

          //show forgot-password form
          forgotPasswordLink.on('click', function(event){
            event.preventDefault();
            forgot_password_selected();
          });

          //back to login from the forgot-password form
          backToLoginLink.on('click', function(event){
            event.preventDefault();
            login_selected();
          });


        };
  $scope.modalLoad();

  $scope.login_selected = function(){
    mainNav.children('ul').removeClass('is-visible');
    formModal.addClass('is-visible');
    formLogin.addClass('is-selected');
    formSignup.removeClass('is-selected');
    formForgotPassword.removeClass('is-selected');
    tabLogin.addClass('selected');
    tabSignup.removeClass('selected');
  }

  $scope.signup_selected = function(){
    mainNav.children('ul').removeClass('is-visible');
    formModal.addClass('is-visible');
    formLogin.removeClass('is-selected');
    formSignup.addClass('is-selected');
    formForgotPassword.removeClass('is-selected');
    tabLogin.removeClass('selected');
    tabSignup.addClass('selected');
  }

  $scope.forgot_password_selected = function(){
    formLogin.removeClass('is-selected');
    formSignup.removeClass('is-selected');
    formForgotPassword.addClass('is-selected');
  }

});
