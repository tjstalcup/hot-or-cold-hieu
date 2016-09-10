
$(document).ready(function(){
	
	var chosenNumber = Math.floor((Math.random() * 100) + 1);
	//console.log(chosenNumber);
	var count = 0;

	var guess = 0;

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$("input.button").click(function(event){
  		event.preventDefault();
  		guess= $("#userGuess").val();
  			if (guess>0 && guess%1===0 && guess<100){
  				$("ul.guessBox").append("<li>"+ guess +"</li>");
  				$("#userGuess").val("");
  				$("#count").text(count+1);
  				count =+ 1;
  				testNumber();
  			}
  			else {
  				window.alert("Please enter a valid integer between 1 and 100.");
  				$("#userGuess").val("");
  			}
  	});

  	$(".new").click(function(){
  		newGame();
  	});

  	function testNumber(){
  		//console.log(guess);
  		if (Math.abs(chosenNumber-guess)>=50){
  			$("#feedback").text("Ice Cold");
  		}
  		else if (Math.abs(chosenNumber-guess)<50 && Math.abs(chosenNumber-guess)>=30){
  			$("#feedback").text("Cold");
  		}
  		else if (Math.abs(chosenNumber-guess)>=20 && Math.abs(chosenNumber-guess)<30){
  			$("#feedback").text("warm");
  		}
  		else if (Math.abs(chosenNumber-guess)<20 && Math.abs(chosenNumber-guess)>=10){
  			$("#feedback").text("hot");
  		}
  		else if (Math.abs(chosenNumber-guess)<10 && Math.abs(chosenNumber-guess)!==0){
  			$("#feedback").text("very hot");
  		}
  		else{
  			$("#feedback").text("YOU GOT IT! YAY!");
  		}
  	}

  	function newGame(){
  		chosenNumber = Math.floor((Math.random() * 100) + 1);
		//console.log(chosenNumber);
		count = 0, guess = 0;
		$("#feedback").text("Make your Guess!");
		$("#count").text(count);
		$("#userGuess").val("");
		$("ul.guessBox").empty();
  	}

});


