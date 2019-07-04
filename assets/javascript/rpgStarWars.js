
$(document).ready(function() {

    let characters = {
      "General Grievous": {
        name: "General Grievous",
        health: 150,
        attack: 8,
        imageUrl: "assets/images/Grievous.jpg",
        enemyAttackBack: 15
      },
      "Emperor Palpatine": {
        name: "Emperor Palpatine",
        health: 100,
        attack: 14,
        imageUrl: "assets/images/Palp.jpg",
        enemyAttackBack: 5
      },
      "Darth Vader": {
        name: "Darth Vader",
        health: 180,
        attack: 8,
        imageUrl: "assets/images/Vader.jpg",
        enemyAttackBack: 20
      },
      "Darth Maul": {
        name: "Darth Maul",
        health: 120,
        attack: 7,
        imageUrl: "assets/images/Maul.jpg",
        enemyAttackBack: 25
      }
    };
  
    let attacker;
    let combatants = [];
    let defender;
    let turnCounter = 1;
    let killCount = 0;
  
    let renderCharacter = function(character, renderArea) {

      let charDiv = $("<div class='character' data-name='" + character.name + "'>");
      let charName = $("<div class='character-name'>").text(character.name);
      let charImage = $("<img alt='image' class='character-image'>").attr("src", character.imageUrl);
      let charHealth = $("<div class='character-health'>").text(character.health);
      charDiv.append(charName).append(charImage).append(charHealth);
      $(renderArea).append(charDiv);
    };
  
    let initializeGame = function() {
 
      for (let key in characters) {
        renderCharacter(characters[key], "#characters-section");
      }
    };
  
    initializeGame();
  
    let updateCharacter = function(charObj, areaRender) {

      $(areaRender).empty();
      renderCharacter(charObj, areaRender);
    };
  
    let renderEnemies = function(enemyArr) {
      for (let i = 0; i < enemyArr.length; i++) {
        renderCharacter(enemyArr[i], "#available-to-attack-section");
      }
    };
  
    let renderMessage = function(message) {
    
      let gameMessageSet = $("#game-message");
      let newMessage = $("<div>").text(message);
      gameMessageSet.append(newMessage);
    };
  
    let restartGame = function(resultMessage) {

      let restart = $("<button>Restart</button>").click(function() {
        location.reload();
      });
  
      let gameState = $("<div>").text(resultMessage);
  
      $("body").append(gameState);
      $("body").append(restart);
    };
  
    let clearMessage = function() {
      let gameMessage = $("#game-message");
  
      gameMessage.text("");
    };
  
    $("#characters-section").on("click", ".character", function() {
      let name = $(this).attr("data-name");

      if (!attacker) {
        attacker = characters[name];
        for (let key in characters) {
          if (key !== name) {
            combatants.push(characters[key]);
          }
        }
  
        $("#characters-section").hide();
  
        updateCharacter(attacker, "#selected-character");
        renderEnemies(combatants);
      }
    });
  
    $("#available-to-attack-section").on("click", ".character", function() {
      let name = $(this).attr("data-name");

      if ($("#defender").children().length === 0) {
        defender = characters[name];
        updateCharacter(defender, "#defender");
  
        $(this).remove();
        clearMessage();
      }
    });

    $("#attack-button").on("click", function() {
      if ($("#defender").children().length !== 0) {
        let attackMessage = "You attacked " + defender.name + " for " + attacker.attack * turnCounter + " damage.";
        let counterAttackMessage = defender.name + " attacked you back for " + defender.enemyAttackBack + " damage.";
        clearMessage();
  
        defender.health -= attacker.attack * turnCounter;
  
        if (defender.health > 0) {
          updateCharacter(defender, "#defender");
  
          renderMessage(attackMessage);
          renderMessage(counterAttackMessage);
 
          attacker.health -= defender.enemyAttackBack;
  
          updateCharacter(attacker, "#selected-character");
  

          if (attacker.health <= 0) {
            clearMessage();
            renderMessage("You have been defeated...GAME OVER!!!");
            restartGame();
            $("#attack-button").off("click");
          }
        }
        else {
          $("#defender").empty();
  
          let gameStateMessage = "You have defeated " + defender.name + ", you can choose to fight another enemy.";
          renderMessage(gameStateMessage);
  
          killCount++;
  
          if (killCount >= combatants.length) {
            clearMessage();
            $("#attack-button").off("click");
            renderMessage("You Won!!!! GAME OVER!!!");
            restartGame();
          }
        }

        turnCounter++;
      }
      else {
        clearMessage();
        renderMessage("No enemy here.");
      }
    });
  });
  