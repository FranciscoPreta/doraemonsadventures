define(['views/game-view', 'services/game-service', 'views/namek-view', 'controllers/game-controller'], function(loginView, service, namekView, gameController) {
    var externals = {};
    var internals = {};

    externals.start = function() {

        console.log(gameController.player);

        if (gameController.player.name === undefined){
            window.location.hash = '#game'
            return;
        }


        
        internals.bindEventHandlers();
        namekView.render(gameController.player);
        namekView.renderDialogue(gameController.dialogue().dialogue19(gameController.player.name));
        
    };

    internals.bindEventHandlers = function() {       
        namekView.bind('optionA', internals.optionA);
        namekView.bind('optionB', internals.optionB);
        namekView.bind('optionC', internals.optionC);
        namekView.bind('optionD', internals.optionD);
        
    };

    internals.optionA = function(){
        gameController.player.hp -= 2 
        service.updatePlanet(gameController.player);
        namekView.updateInfoBar(gameController.player);
 
        if (gameController.player.hp < 1) {
            gameController.player.hp = 0;
            namekView.updateInfoBar(gameController.player);
            alert('You have died. Git Gud and try again.');
            service.deleteUser(gameController.player);
            location.reload();
        }

        namekView.renderDialogue(gameController.dialogue().dialogue13(gameController.player.name),"/img/friezaAttack.png")
    }

    internals.optionB = function(){
        gameController.player.item = "rose"
        namekView.renderDialogue(gameController.dialogue().dialogue14(gameController.player.name),"/img/sadGoku.jpeg")
    }

    internals.optionC = function(){
        if (gameController.player.item === "senzu") {
        gameController.player.item = "dragonballs"
        service.updatePlanet(gameController.player);
       namekView.renderDialogue(gameController.dialogue().dialogue15(gameController.player.name),"/img/gokuHappy.jpeg")
        
        } else {
            namekView.renderDialogue(gameController.dialogue().dialogue17(gameController.player.name),"/img/goku_vs_frieza4.jpeg")
        }

    }

    internals.optionD = function(){
        gameController.player.planet = 'nobita'
        service.updatePlanet(gameController.player);

        window.location.hash = '#nobita';
    }


    return externals;
});
