define(['views/game-view', 'services/game-service', 'views/game-over-view', 'controllers/game-controller'], function(loginView, service, gameoverView, gameController) {

    var externals = {};
    var internals = {};


    externals.start = function() {

        if (gameController.player.name === undefined){
            window.location.hash = '#game'
            return;
        }
        gameoverView.render();

    }
    
    externals.checkHealth = function(gameoverView) {

        if(gameController.player.hp < 1){

                service.deleteUser(gameController.player);
                gameoverView.render();

        }; 
    }

   

        internals.bindEventHandlers = function() {       
           /* pokemonView.bind('optionA', internals.optionA);
            pokemonView.bind('optionB', internals.optionB);
            pokemonView.bind('optionC', internals.optionC);
            pokemonView.bind('optionD', internals.optionD);*/
            gameoverView.bind('backButton', internals.backButton)
            //INCLUIR BUTTONS
            
        };
        internals.backButton = function () {

            window.location.hash = '#game';
        }
        
});