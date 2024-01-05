define(function() {
    var internals = {
        handlers: {},
        elements: {}
    };

    var externals = {};


    internals.createGameView = function(){

        //let mainScreen = $("<div>").attr('id', 'mainScreen');
        let gameImage = $('<img>').attr('id', 'img1').attr('src','/img/pokemonCamping.jpeg')

        return gameImage;

    }


    internals.createInfoBar = function(data) {


        console.log(data.name)
        let infoContainer = $('<div>').attr('class','infoContainer');
        let nameInfo = $('<p>').attr('type', 'text').attr('id','userName');
        let healthInfo = $('<p>').attr('type', 'text').attr('id','health')
        
        nameInfo.text("Player name: " + data.name);
        healthInfo.text("Health: " + data.hp);

        infoContainer.append(nameInfo);
        infoContainer.append(healthInfo);
        internals.elements.app.append(infoContainer);
        

    }

     internals.injectDialogue = function(dialogueString, imgURL) {
        
        let dialogueText = $('<p>').attr('class', 'dialogueText').html(dialogueString);
          $('#img1').attr("src", imgURL);

        $('#textContainer').append(dialogueText);
        
    }


    internals.createTextBox = function() {

        let textBox = $('<div>').attr('id','textBox').attr('style', 'padding: 30px');
        let textContainer = $('<div>').attr('id','textContainer');
        let imgContainer = $('<div>').attr('id','imgContainer');

        textBox.append(textContainer);
        textBox.append(imgContainer);


        internals.elements.app.append(textBox);
        
    }


    internals.createButtons = function() {

        let buttonContainer = $('<div>').attr('id', 'buttonContainer');
        let buttonA = $('<button>').attr('id', 'optionA').attr('class', 'button').text("Pet Ash's Pikachu");
            buttonA.click(internals.handlers['optionA']);

        let buttonB = $('<button>').attr('id', 'optionB').attr('class', 'button').text('Fight Team Rocket!');
            buttonB.click(internals.handlers['optionB']);
            
        let buttonC = $('<button>').attr('id', 'optionC').attr('class', 'button').text('Go with Ash to Victory Road!');
            buttonC.click(internals.handlers['optionC']);
            
        let buttonD = $('<button>').attr('class', 'button').text("Go back to Nobita's room");
            buttonD.click(internals.handlers['optionD']);

        buttonContainer.append(buttonA);
        buttonContainer.append(buttonB);
        buttonContainer.append(buttonC);
        buttonContainer.append(buttonD);

        return buttonContainer;

    }

    internals.renderDialogue = function (dialogueString,imgURL) {
        $('#textContainer').empty();

        internals.elements.injectDialogue = internals.injectDialogue(dialogueString, imgURL);

    }

 
    internals.renderGameImage = function() {
     
        internals.elements.gameImage = internals.createGameView();
        internals.elements.app.append(internals.elements.gameImage);
    };

    internals.renderTextBox = function () {
       

        internals.elements.textBox = internals.createTextBox();
        
    }

    internals.renderInfoBar = function(data) {
        if (internals.elements.infoBar) {
            return;
        }
        
        internals.elements.infoBar = internals.createInfoBar(data);
        

    }

    internals.renderButtons = function(){
       
        
        internals.elements.buttons = internals.createButtons();
        internals.elements.app.append(internals.elements.buttons)
    }



    externals.bind = function(event, handler) {
        internals.handlers[event] = handler;
    };

    externals.render = function(data) {
        internals.elements.app = $('#app');
        $('#app').empty(); 
        internals.renderInfoBar(data);
        internals.renderGameImage();
        internals.renderTextBox();
        internals.renderButtons();
        
    };
    externals.renderDialogue = function(dialogueString, imgURL) {

        internals.renderDialogue(dialogueString,imgURL);

    }
    externals.updateInfoBar = function(data) {
        $('#health').text("Health: " + data.hp);
    }
    

    
    return externals;
});
