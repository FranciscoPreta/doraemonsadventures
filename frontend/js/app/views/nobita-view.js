define(function() {
    var internals = {
        handlers: {},
        elements: {}
    };

    var externals = {};


    internals.createGameView = function(){

        //let mainScreen = $("<div>").attr('id', 'mainScreen');
        let gameImage = $('<img>').attr('id', 'img1').attr('src','/img/nobitas_room.webp');      
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

    internals.createTextBox = function() {

        let textBox = $('<div>').attr('id','textBox').attr('style', 'padding: 30px');
        let textContainer = $('<div>').attr('id','textContainer');
        
        textBox.append(textContainer);


        internals.elements.app.append(textBox);
        
    }

    internals.injectDialogue = function(dialogueString, imgURL) {
        
        let dialogueText = $('<p>').attr('class', 'dialogueText').html(dialogueString);
          $('#img1').attr("src", imgURL);

        $('#textContainer').append(dialogueText);
        
    }

    internals.createButtons = function() {

        let buttonContainer = $('<div>').attr('id', 'buttonContainer');
        let buttonA = $('<button>').attr('id', 'optionA').attr('class', 'button').text('Open door to Namek');
            buttonA.click(internals.handlers['optionA']);

        let buttonB = $('<button>').attr('id', 'optionB').attr('class', 'button').text('Open door to Tokyo');
            buttonB.click(internals.handlers['optionB']);
            
        let buttonC = $('<button>').attr('id', 'optionC').attr('class', 'button').text('Open door to Kanto');
            buttonC.click(internals.handlers['optionC']);
            
        // let buttonD = $('<button>').attr('class', 'button').text('Lets assume this text might be a bit longer');
        //     buttonD.click(internals.handlers['optionD']);

        buttonContainer.append(buttonA);
        buttonContainer.append(buttonB);
        buttonContainer.append(buttonC);
        //buttonContainer.append(buttonD);

        return buttonContainer;

    }


    internals.renderDialogue = function (dialogueString,imgURL) {
        $('#textContainer').empty();
       
        internals.elements.injectDialogue = internals.injectDialogue(dialogueString, imgURL);

    }


    internals.renderGameImage = function() {
        if (internals.elements.app.gameImage) {
            return;
        }

        internals.elements.gameImage = internals.createGameView();
        internals.elements.app.append(internals.elements.gameImage);
    };

    internals.renderTextBox = function () {
       
        internals.elements.app.append(internals.elements.textBox);
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
        console.log('Am I getting here? ' +data.planet);
        internals.elements.app = $('#app');
        $('#app').empty(); 
        internals.renderInfoBar(data);
        console.log('what about here?');
        internals.renderGameImage();
        internals.renderTextBox();
        internals.renderButtons();
        console.log('what about here? LOL');
        
    };
    externals.renderDialogue = function(dialogueString, imgURL) {
       
        internals.renderDialogue(dialogueString,imgURL);

    }

    

    

    
    return externals;
});
