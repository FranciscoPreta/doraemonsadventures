define(function () {




    let dialoguesURLs = {

        dialogues: {},
        URL: {}
    };

    dialoguesURLs.dialogues.dialogue1 = function (playerName) {

        let dialogue = "Doraemon wakes you. \n " + playerName + ", your childhood is in danger! Travel to all the different worlds and save your heroes! Take this dorayaki!"

        return dialogue
    }

    dialoguesURLs.dialogues.dialogue2 = function () {

        let dialogue = "He takes out the Anywhere Door, a magical door from the future. \n Where would you like to go?"

        return dialogue
    }

    dialoguesURLs.dialogues.dialogue3 = function () {

        let dialogue = "You travel through the Anywhere Door to the Kanto region, you find Ash huddled with his Pokemon. He seems a bit depressed. I will never be the Pokemon Champion...' He sniffles. I can't catch them all. \n What will you do?"

        return dialogue
    }

    dialoguesURLs.dialogues.dialogue4 = function () {

        let dialogue = "Pikachu is far too cute, you pat his head. Sparks fly from his cheeks, before you know it Pikachu is electrifying you with his Thunderbolt! \n -2 HP \n Maybe you shouldn't try that again..."

        return dialogue
    }

    dialoguesURLs.dialogues.dialogue5 = function () {

        let dialogue = "Yeah that will cheer me up! Ash exclaims! Together, you go out and find Team Rocket and easily kick their butts. As Team Rocket blasts off again you find a rose, surely dropped by James. \n Even after that, Ash still seems depressed. \n <h4>Rose added to your inventory.</h4> "

        return dialogue
    }

    dialoguesURLs.dialogues.dialogue6 = function () {

        let dialogue = "Team Rocket is nowhere to be seen..."

        return dialogue
    }

    dialoguesURLs.dialogues.dialogue7 = function () {

        let dialogue = "There's just no way I can do it, Pikachu and I aren't strong enough... Ash sighs. If only there was an object that could grant your deepest desires. "



        return dialogue
    }

    dialoguesURLs.dialogues.dialogue8 = function () {


        let dialogue = "You wish hard upon the dragon balls, summoning Shenron. You ask him for your one and only childhood wish; for Ash to become the Pokemon Champion. You wake up 25 years later; Ash has become the champion of a new region. His and your dream has finally been realized. \n You shed a single tear of joy, and as you do notice that your wallet feels heavier. \n During the 25 year timeskip you became a Fullstack Developer and are making mad bank. \n On your way out of the stadium you buy a bunch of dorayakis for Doraemon! \n 99 dorayakis added to your inventory!";


        return dialogue
    }

    dialoguesURLs.dialogues.dialogue9 = function () {


        let dialogue = "You travel through the Anywhere Door and find yourself in Tokyo! \n Through the bright neon lights you catch a glimpse of Sailor Moon fighting a monster, and as per usual she is losing! \n To the side you notice Tuxedo Mask clearly wanting to help. \n <h4 class='dialoguebold'>However, he is missing a rose! What will you do?</h4> "


        return dialogue
    }

    dialoguesURLs.dialogues.dialogue10 = function () {


        let dialogue = "You suit up, ready to replace Tuxedo Mask! You charge in, making a dramatic entrance but Sailor Moon is not impressed. \n Tuxedo Mask is far more handsome than you... \n <h4>Words hurt... -1 HP.</h4>"


        return dialogue
    }

    dialoguesURLs.dialogues.dialogue11 = function () {


        let dialogue = "You run into a nearby flower shop finding it somehow open so late at night. You find several roses but as you go to purchase them you remember; \n You are unemployed and NOT a fullstack developer. <h4> You cannot afford even a single rose...</h4>"


        return dialogue
    }

    dialoguesURLs.dialogues.dialogue12 = function (playerName) {


        let dialogue = "Thank you " + playerName + "! I am in your debt. Tuxedo Mask says as you hand him the rose. He joins Sailor Moon in fighting the monster and together they swiftly defeat him. As the monster is defeated he turns into a small magical bean... \n <h4>Senzu Bean added to your inventory.</h4>"


        return dialogue
    }

    dialoguesURLs.dialogues.dialogue13 = function () {


        let dialogue = "Walking through the Anywhere Door you arrive at Namek 5 minutes before its destruction! \n You see Goku and Frieza fighting fiercely. Goku however seems to be at his limit.\n Whatever shall you do to stop Frieza?"



        return dialogue
    }

    dialoguesURLs.dialogues.dialogue13 = function () {


        let dialogue = "You attempt to help Goku fight, however Frieza is far too powerful. He turns his ki blast in your direction. \n Foolish human, take this! \n <h4>You barely escape with your life... -2 hp</h4>"


        return dialogue
    }
    dialoguesURLs.dialogues.dialogue14 = function () {


        let dialogue = "You sing the GT Theme Song with all your heart, unfortunately Goku does not understand Portuguese. Both he and Frieza look at your dumbfounded before returning to their battle."

        return dialogue
    }

    dialoguesURLs.dialogues.dialogue15 = function (playerName) {


        let dialogue = "You hand Goku the Senzu Bean which regenerates his stamina. \n Thank you," + playerName + " Goku exclaims as he powers up and in a single strike defeats Frieza. \n Here" + playerName + ", you deserve these! He hands you the Dragon Balls. \n <h4>The dragon balls were added to your inventory!</h4>"


        return dialogue
    }

    dialoguesURLs.dialogues.dialogue16 = function () {
        let dialogue = "\n You do not have a rose...";

        return dialogue;
    }

    dialoguesURLs.dialogues.dialogue17 = function () {
        let dialogue = "\n You do not have a Senzu Bean...";

        return dialogue;
    }

    dialoguesURLs.dialogues.dialogue18 = function () {
        let dialogue = "Doraemon greets you and hurries you on a mission: you must use the Any Where Door to save your childhood heroes.";

        return dialogue;
    }

    dialoguesURLs.dialogues.dialogue19 = function () {
        let dialogue = "Walking through the Anywhere Door you arrive at Namek 5 minutes before its destruction! \n You see Goku and Frieza fighting fiercely. Goku however seems to be at his limit.\n Whatever shall you do to stop Frieza?"
        return dialogue;
    }

    dialoguesURLs.dialogues.dialogue20 = function () {
        let dialogue = "Serena needs Tuxedo Mask to help on her fight, but he lost his rose and can't use his powers. Make a move!";

        return dialogue;
    }

    dialoguesURLs.dialogues.dialogue21 = function () {
        let dialogue = "";

        return dialogue;
    }


    return dialoguesURLs
});