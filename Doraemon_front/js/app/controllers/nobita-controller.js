define(['views/game-view', 'services/game-service', 'views/nobita-view', 'controllers/game-controller'], function(loginView, service, nobitaView, gameController) {
    var externals = {};
    var internals = {};
var testDialogue = "/img/nobitas_room.webp"
    externals.start = function() {
        if (gameController.player.name === undefined){
            window.location.hash = '#game'
            return;
        }
        internals.bindEventHandlers();
        nobitaView.render(gameController.player);
        nobitaView.renderDialogue(gameController.dialogue().dialogue18(gameController.player.name));
        // nobitaView.renderDialogue(gameController.dialogues,testDialogue);
        // nobitaView.nobitaDialogue();

    };

    internals.bindEventHandlers = function() {       
        nobitaView.bind('optionA', internals.optionA);
        nobitaView.bind('optionB', internals.optionB);
        nobitaView.bind('optionC', internals.optionC);
        //nobitaView.bind('optionD', internals.optionD);
        
        
    };

    internals.optionA = function(){
        gameController.player.planet = 'namek'
        service.updatePlanet(gameController.player);

        window.location.hash = '#namek';
    }

    internals.optionB = function(){
        gameController.player.planet = 'sailor'
        service.updatePlanet(gameController.player);

        window.location.hash = '#sailor';
    }

    internals.optionC = function(){
        gameController.player.planet = 'pokemon'
        service.updatePlanet(gameController.player);

        window.location.hash = '#pokemon';

    }
    
    internals.nobitaDialogue = () => {
        nobitaView.renderDialogue(gameController.dialogue().dialogue1(gameController.player.name), "/img/nobitas_room.webp"); 
        nobitaView.renderDialogue(gameController.dialogue().dialogue2(gameController.player.name), "/img/nobitas_room.webp");
 
    }

    return externals;
});
