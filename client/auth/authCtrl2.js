angular.module('app').controller('authCtrl2', function($scope, authService, $cookies){

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

//-------------LOGIN AND SIGNUP MODAL----------------
  $scope.modalLoad = function(){


          //open sign-up form
          //mainNav.on('click', '.cd-signup', signup_selected);
          //open login-form form
          //mainNav.on('click', '.cd-signin', login_selected);

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
            ( $(event.target).is( tabLogin ) ) ? $scope.login_selected() : $scope.signup_selected();
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
          // forgotPasswordLink.on('click', function(event){
          //   event.preventDefault();
          //   forgot_password_selected();
          // });

          //back to login from the forgot-password form
          // backToLoginLink.on('click', function(event){
          //   event.preventDefault();
          //   login_selected();
          // });


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
  };

  $scope.signup_selected = function(){
    mainNav.children('ul').removeClass('is-visible');
    formModal.addClass('is-visible');
    formLogin.removeClass('is-selected');
    formSignup.addClass('is-selected');
    formForgotPassword.removeClass('is-selected');
    tabLogin.removeClass('selected');
    tabSignup.addClass('selected');
  };

  $scope.forgot_password_selected = function(){
    formLogin.removeClass('is-selected');
    formSignup.removeClass('is-selected');
    formForgotPassword.addClass('is-selected');
  };


});

//credits http://css-tricks.com/snippets/jquery/move-cursor-to-end-of-textarea-or-input/
jQuery.fn.putCursorAtEnd = function() {
	return this.each(function() {
    	// If this function exists...
    	if (this.setSelectionRange) {
      		// ... then use it (Doesn't work in IE)
      		// Double the length because Opera is inconsistent about whether a carriage return is one character or two. Sigh.
      		var len = $(this).val().length * 2;
      		this.focus();
      		this.setSelectionRange(len, len);
    	} else {
    		// ... otherwise replace the contents with itself
    		// (Doesn't work in Google Chrome)
      		$(this).val($(this).val());
    	}
	});
};
