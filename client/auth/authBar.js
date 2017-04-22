angular.module('app').component('authBar', {
    templateUrl: './auth/authBar.html',
    controller: Controller,
    controllerAs: 'model',
    bindings: {
        modalLoad: '='
    }
});

function Controller(authService, $cookies) {
    var model = this;

    // debugger;
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
    model.modalLoad = function() {

        //close modal
        formModal.on('click', function(event) {
            if ($(event.target).is(formModal) || $(event.target).is('.cd-close-form')) {
                formModal.removeClass('is-visible');
            }
        });

        //close modal when clicking the esc keyboard button
        $(document).keyup(function(event) {
            if (event.which == '27') {
                formModal.removeClass('is-visible');
            }
        });

        //hide or show password
        $('.hide-password').on('click', function() {
            var togglePass = $(this),
                passwordField = togglePass.prev('input');

            ('password' == passwordField.attr('type')) ? passwordField.attr('type', 'text'): passwordField.attr('type', 'password');
            ('Hide' == togglePass.text()) ? togglePass.text('Show'): togglePass.text('Hide');
            //focus and move cursor to the end of input field
            passwordField.putCursorAtEnd();
        });

    };
    model.modalLoad();

    model.login_selected = function() {
        mainNav.children('ul').removeClass('is-visible');
        formModal.addClass('is-visible');
        formLogin.addClass('is-selected');
        formSignup.removeClass('is-selected');
        formForgotPassword.removeClass('is-selected');
        tabLogin.addClass('selected');
        tabSignup.removeClass('selected');
    };

    model.signup_selected = function() {
        mainNav.children('ul').removeClass('is-visible');
        formModal.addClass('is-visible');
        formLogin.removeClass('is-selected');
        formSignup.addClass('is-selected');
        formForgotPassword.removeClass('is-selected');
        tabLogin.removeClass('selected');
        tabSignup.addClass('selected');
    };

    model.forgot_password_selected = function() {
        formLogin.removeClass('is-selected');
        formSignup.removeClass('is-selected');
        formForgotPassword.addClass('is-selected');
    };

    //---------------MODAL WORK-------------------//

    model.facebookAuth = function() {
        authService.facebookAuth();
    };

    //SIGNUP FORM
    //Everything is assigned to model.customerData keys
    model.newCustomer = function() {
        authService.createCustomer(model.customerData).then(function(response) {
            authService.user = response.data;
            model.user = authService.user;
        });
        //Resets the form input boxes
        model.customerData = undefined;
        formModal.removeClass('is-visible');
    };

    model.findCookieUser = function() {
        if (document.cookie.indexOf('loggedInUser') > -1) {
            model.cookieUser = JSON.parse($cookies.getAll().loggedInUser).displayName;
            model.cookieUserF_Name = model.cookieUser.slice(0, model.cookieUser.indexOf(" "));
            model.cookieUserL_Name = model.cookieUser.slice(model.cookieUser.indexOf(" ") + 1);
        } else {
            model.cookieUser = "";
        }
    };
    model.findCookieUser();

    model.login = function() {
        // debugger;
        authService.login(model.credentials).then(function(response) {
            authService.user = response.data;
            model.user = authService.user;
        });

        //Resets the form input boxes
        model.credentials = undefined;
        formModal.removeClass('is-visible');
    };

    model.logout = function() {
        model.user = undefined;
        $cookies.remove('loggedInUser');
        model.cookieUser = "";
    };
}
