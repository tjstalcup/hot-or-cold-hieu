
$(document).ready(function(){
  //Here is the website for the random numbers from 1 to 100 below this line.
  //https://github.com/rlynn523/hot-or-cold-starter/blob/master/js/app.js  
	var randomNumber = Math.floor((Math.random() * 100) + 1);
  //Create variables for numbers count and guess (var) starting at zero all positive numbers.
	var countNumber = 0; 
    var guessNumber = 0;
  //Given in the assignment
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});
  // Given in the assignment
  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
   //Create a number input for the program and also have a prevent default  
  	$("input.button").click(function(event){ //have a click function opn the mouse.
  		event.preventDefault();//prevent and reset once the number is inputted and reset to try again.
  		guessNumber = $("#userGuess").val();
  			if (guessNumber > 0 && guessNumber % 1 === 0 && guessNumber < 100){ //creating a or statements in the for loop with the following conditions if they are in between 1 to 100.
  				$("ul.guessBox").append("<li>"+ guessNumber +"</li>");
  				$("#userGuess").val("");//Display the number value output on the screen.
  				$("#count").text(countNumber + 1);
  				countNumber =+ 1; //iterates the numbers until the number is correct after many guesses.b Same as countNumber = countNumber + 1.
  				testNumber();//
  			}
  			else {
  				window.alert("Please enter a valid integer between 1 and 100.");//pop up windows alert if instructions are not followed when if the number does not match the conditions
  				$("#userGuess").val("");//Display the number output on the screen.
  			}
  	});

  	$(".new").click(function(){
  		newGame();//Creates a new game with the click function.
  	});
    //Create a functon for the test number and adding conditions to make sure its gets from VERY ICE COLD to VERY HOT to the RIGHT.
  	function testNumber(){
  		if (Math.abs(randomNumber - guessNumber) >= 50){
  			$("#feedback").text("VERY ICE COLD"); //Display the results of the condition above. 
  		}
  		else if (Math.abs(randomNumber - guessNumber) <= 50 && Math.abs(randomNumber - guessNumber) >= 30){
  			$("#feedback").text("COLD");//Display the results of the condition above.
  		}
  		else if (Math.abs(randomNumber - guessNumber) >= 20 && Math.abs(randomNumber - guessNumber) <= 30){
  			$("#feedback").text("WARM"); //Display the results of the condition above.
  		}
  		else if (Math.abs(randomNumber - guessNumber) <= 20 && Math.abs(randomNumber - guessNumber) >= 10){
  			$("#feedback").text("HOT"); //Display the results of the condition above.
  		}
  		else if (Math.abs(randomNumber - guessNumber) <= 10 && Math.abs(randomNumber - guessNumber) !== 0){
  			$("#feedback").text("VERY HOT"); //Display the results of the condition above.
  		}
  		else{
  			$("#feedback").text("YOU FINALLY GOT IT, HIP HIP HOORAY!"); //Display the results when the numbers RIGHT.
  		}
  	}
    //This creates a new game with the functions recalled from above with all the details.
  	function newGame(){
  	    randomNumber = Math.floor((Math.random() * 100) + 1);
		     count = 0;
		     guess = 0;
		$("#feedback").text("Make your Guess!");
		$("#count").text(count);
		$("#userGuess").val("");
		$("ul.guessBox").empty();
  	}
});


