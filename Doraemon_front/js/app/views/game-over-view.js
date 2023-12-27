define(function() {

    var internals = {
        handlers: {},
        elements: {}
    };

    var externals = {};

    internals.createMainStructure = function(){

        $('#mainScreen').empty();
        let gameOverText = $('<p>').attr('class', 'gameOverText').text("Game Over");

        $('#MainContainer').append(gameOverText);

        return mainScreen;

    }

    internals.createBackButton= function () {

        let buttonContainer = $('<div>').attr('id','buttonContainer');
        let backButton = $('<button>').attr('id', 'backButton').attr('class', 'button').text("Start Over");

        backButton.click(internals.handlers['backButton']);

        buttonContainer.append(backButton);

        return buttonContainer
    }

    internals.renderGameOVer = function () {

        internals.elements.createMainStructure = internals.createMainStructure();

    }

    internals.renderButtons = function(){

        internals.elements.buttons = internals.createBackButton();

    }
 
    externals.bind = function(event, handler) {
        internals.handlers[event] = handler;
    }
        externals.render = function() {
                console.log("Gui was here");
        internals.renderGameOVer();
        internals.renderButtons();
    };
});