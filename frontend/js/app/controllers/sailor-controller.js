define(['views/game-view', 'services/game-service', 'views/sailor-view', 'controllers/game-controller', 'dialogues/dialogues', 'controllers/game-over-controller'], function(loginView, service, sailorView, gameController, dialogues, gameoverController) {
    var externals = {};
    var internals = {};

    externals.start = function() {

        if (gameController.player.name === undefined){
            window.location.hash = '#game'
            return;
        }

        internals.bindEventHandlers();
        sailorView.render(gameController.player);
        sailorView.renderDialogue(gameController.dialogue().dialogue9(gameController.player.name));
    };

    internals.bindEventHandlers = function() {       
        sailorView.bind('optionA', internals.optionA);
        sailorView.bind('optionB', internals.optionB);
        sailorView.bind('optionC', internals.optionC);
        sailorView.bind('optionD', internals.optionD);
        
    };

    internals.checkHealth = function() {

        if(gameController.player.hp < 1){

                service.deleteUser(gameController.player);
                gameoverController.render()

        }; 
    }


    internals.optionA = function(){
        gameController.player.hp -= 1 
        service.updatePlanet(gameController.player);
        sailorView.updateInfoBar(gameController.player);

        sailorView.renderDialogue(gameController.dialogue().dialogue10(gameController.player.name),"/img/sailormoonAngry.jpeg")
    }

    internals.optionB = function(){
        sailorView.renderDialogue(gameController.dialogue().dialogue11(gameController.player.name),"/img/flowerShop.jpeg")
    }

    internals.optionC = function(){
        if (gameController.player.item === "rose") {
        gameController.player.item = "senzu"
        service.updatePlanet(gameController.player);

        sailorView.renderDialogue(gameController.dialogue().dialogue12(gameController.player.name),"/img/smWin.jpeg")
        
        } else {
            sailorView.renderDialogue(gameController.dialogue().dialogue16(gameController.player.name),"/img/sailorMoonInTrouble.png")
        }






    }

    internals.optionD = function(){
        gameController.player.planet = 'nobita'
        service.updatePlanet(gameController.player);

        window.location.hash = '#nobita';
    }




    return externals;
});
