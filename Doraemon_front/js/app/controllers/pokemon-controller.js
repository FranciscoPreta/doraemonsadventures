define(['views/game-view', 'services/game-service', 'views/pokemon-view', 'controllers/game-controller'], function (loginView, service, pokemonView, gameController) {
    var externals = {};
    var internals = {};

    externals.start = function () {

        if (gameController.player.name === undefined) {
            window.location.hash = '#game'
            return;
        }

        internals.bindEventHandlers();
        pokemonView.render(gameController.player);
        pokemonView.renderDialogue(gameController.dialogue().dialogue3(gameController.player.name));
    };

    internals.bindEventHandlers = function () {
        pokemonView.bind('optionA', internals.optionA);
        pokemonView.bind('optionB', internals.optionB);
        pokemonView.bind('optionC', internals.optionC);
        pokemonView.bind('optionD', internals.optionD);

    };

    internals.optionA = function () {
        gameController.player.hp -= 2
        service.updatePlanet(gameController.player);
        pokemonView.updateInfoBar(gameController.player);

        pokemonView.renderDialogue(gameController.dialogue().dialogue4(gameController.player.name), "/img/pikachuZap.jpeg");
    }

    internals.optionB = function () {
        gameController.player.item = "rose"
        service.updatePlanet(gameController.player);
        pokemonView.renderDialogue(gameController.dialogue().dialogue5(gameController.player.name), "/img/teamRocketLosing.jpeg")
    }

    internals.optionC = function () {
        if (gameController.player.item === "dragonballs") {
            gameController.player.item = "goldenticket"
            service.updatePlanet(gameController.player);

            pokemonView.renderDialogue(gameController.dialogue().dialogue8(gameController.player.name), "/img/ashChampion.jpeg")

        } else {
            pokemonView.renderDialogue(gameController.dialogue().dialogue7(gameController.player.name), "/img/PokemonCamping.jpg")
        }

    }

    internals.optionD = function () {
        gameController.player.planet = 'nobita'
        service.updatePlanet(gameController.player);

        window.location.hash = '#nobita';
    }

    return externals;
});
