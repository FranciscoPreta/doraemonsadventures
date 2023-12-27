define(['views/game-view', 'views/nobita-view', 'views/sailor-view', 'views/namek-view', 'views/pokemon-view', 'services/game-service', 'dialogues/dialogues'], function(loginView, nobitaView, sailorView, namekView, pokemonView, service, dialogue) {
    var externals = {
       player: {}
    };
    var internals = {};

    let player;
    externals.start = function() {
        internals.bindEventHandlers();
        loginView.render();
    };

    internals.bindEventHandlers = function() {       
        loginView.bind('newuser_input', internals.newUserHandler);
        loginView.bind('olduser_input', internals.oldUserHandler);
        loginView.bind('noBtn', internals.noBtnHandler);
        loginView.bind('yesBtn', internals.yesBtnHandler);
        loginView.bind('loginButton', internals.loginbtnHandler);
    };


    internals.noBtnHandler = function(){
        loginView.renderOldUser();
        //window.location.hash = '#namek'
    }

    internals.yesBtnHandler = function(){
        loginView.renderNewUser();
    }

    internals.loginbtnHandler = function() {

        loginView.renderLoginView();

    }

    internals.newUserHandler = function(input) {
        console.log('Gonna create a new user called ' + input);
        
        service.createUser(input);
        
            service.getUser(input, function(user){
            let planet = user.planet
           
            externals.player = user;
            console.log(user);
            console.log(planet);
            window.location.hash = '#nobita';
            

        });
    
       
    };

    internals.oldUserHandler = function(input) {

       
        console.log('Gonna login old user called ' + input);
        
        //TODO: must create function that starts correct controller according to user that logged in --> window.location.hash = '#...'

        service.getUser(input, function(user){
            let planet = user.planet
           
            externals.player = user;
            console.log( user);
            console.log(planet);
            window.location.hash = '#'+planet;

        });
        
    };

    externals.dialogue = function() {

        return dialogue.dialogues
    }



    return externals;
});
