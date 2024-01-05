define(function () {
    var internals = {
        handlers: {},
        elements: {}
    };

    var externals = {};


    internals.createMainStructure = function () {

        let mainScreen = $("<div>").attr('id', 'mainScreen');



        return mainScreen;

    }



    internals.createPopup = function () {


        let loginPopup = $("<div>").attr('id', 'loginPopup').attr('class', 'container1');

        let loginHeader = $('<h1>').attr('id', 'popupText').attr('class', 'display4').html('Welcome! <br> Is this your first time playing?  <div class="header-image"\> <img src="/img/DORgIF.gif"\> </div>')

        let buttonContainer = $("<div>").attr('id', 'buttonContainer');

        let yesBtn = $('<button>').attr('id', 'yesBtn').attr('class', 'button').text('Yes');
        yesBtn.click(internals.handlers['yesBtn']);

        let noBtn = $('<button>').attr('id', 'noBtn').attr('class', 'button').text('No');
        noBtn.click(internals.handlers['noBtn']);




        loginPopup.append(loginHeader);

        loginPopup.append(buttonContainer);
        buttonContainer.append(yesBtn);
        buttonContainer.append(noBtn);


        internals.elements.mainStructure.append(loginPopup);
    };

    internals.createPopupOldUser = function () {

        $('#yesBtn').remove();
        $('#noBtn').remove();
        $('#popupText').text('Insert your player name');
        let form = $('<form>').attr('id', 'loginForm');
        let div = $("<div>").attr('class', 'mb-3');
        let userNameField = $('<input>').attr('type', 'text').attr('id', 'oldUserName');
        userNameField.on('change', function () {
            var input = userNameField.val();
            console.log(input + '?! What a great name!')

            var handler = internals.handlers['olduser_input'];
            handler(input);


        });
        let submit = $('<button>').attr('class', 'button').attr('type', 'submit').attr('id', 'submitOldUser').text('Submit');


        form.append(div);
        div.append(userNameField);
        form.append(submit);

        $('#loginPopup').append(form);




    }


    internals.createPopupNewUser = function () {

        $('#yesBtn').remove();
        $('#noBtn').remove();
        $('#popupText').text('Insert your player name');
        let form = $('<form>').attr('id', 'loginForm');
        let div = $("<div>").attr('class', 'mb-3');
        let userNameField = $('<input>').attr('type', 'text').attr('id', 'newUserName');
        userNameField.on('change', function () {
            var input = userNameField.val();
            console.log(input + '?! What a great name!')

            var handler = internals.handlers['newuser_input'];
            handler(input);


        });

        internals.loginView = function() {

            $('#buttonContainer').empty();
            $('#popupText').text('Account Created Sussussfully! Please Log In.');
            let loginButton = $('<button>').attr('id', 'loginButton').attr('class', 'button').text("Log In");
            loginButton.click(internals.handlers['loginButton']);

            $('#buttonContainer').append(loginButton);

            
        }

        let submit = $('<button>').attr('class', 'button').attr('type', 'submit').attr('id', 'submitNewUser').text('Submit');


        form.append(div);
        div.append(userNameField);
        form.append(submit);

        $('#loginPopup').append(form);

        $('#submitNewUser').click(function (e) {
            e.preventDefault();

        });


    }

    internals.renderLoginView = function() {

        internals.elements.loginView = internals.loginView();

    }

    internals.renderResults = function (data) {
        console.log(data);

        if (!data) {
            return;
        }

        if (internals.elements.gameCardContainer) {
            internals.elements.gameCardContainer.empty();
        }

        console.log('Do I get here?');

        var game = data.results.forEach(element => {

            console.log('Im inside the loop');

            var card = $(internals.createGameCard(element));

            internals.elements.gameCardContainer.append(card);
        });
    };

    internals.renderMainStructure = function () {
        if (internals.elements.mainStructure) {
            return;
        }

        internals.elements.mainStructure = internals.createMainStructure();
        internals.elements.app.append(internals.elements.mainStructure);
    };

    internals.renderLoginPopup = function () {
        if (internals.elements.mainStructure.loginPopup) {
            return;
        }

        internals.elements.mainStructure.loginPopup = internals.createPopup();
    };

    internals.renderPopupOldUser = function () {
        internals.elements.mainStructure.loginPopup = internals.createPopupOldUser();
    }

    internals.renderPopupNewUser = function () {
        internals.elements.mainStructure.loginPopup = internals.createPopupNewUser();
    }


    externals.bind = function (event, handler) {
        internals.handlers[event] = handler;
    };

    externals.renderLoginView = function() {

        internals.renderLoginView();
    }

    externals.render = function () {
        internals.elements.app = $('#app');
        internals.renderMainStructure();
        internals.renderLoginPopup();
        internals.renderLoginView();

    };

    externals.renderResults = function (data) {
        internals.renderResults(data);
    };

    externals.renderOldUser = function () {
        internals.renderPopupOldUser();
    }

    externals.renderNewUser = function () {
        internals.renderPopupNewUser();
    }

    return externals;
});
