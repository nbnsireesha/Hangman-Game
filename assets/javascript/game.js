var words = ["dog","monkey","cat","cow","horse"];
var limit = 13;//we can try max of 13 times
var wrongGuessArray = [];//this array will store the wrong guesses user made
var randomWord = [];
var userChar;
var answerArray = [];
var remainingLetters = 0;
var flag = 0;
var winCount = 0;

document.onkeyup = function(event)
      {
        var lit = event.key;
        console.log(lit);
        if (lit == 'k') {
         randamWordGenerator();

        }
 }

function alphaOnly(event){

                var keycode=event.keyCode;
                var KeyWord = String.fromCharCode(keycode);
                console.log(KeyWord);
                if ((keycode < 97 || keycode > 122) && keycode>31){
                    alert("only charecters are allowed");
                }
                    
                else{
                    
                    campareFunction(KeyWord);
                    console.log(KeyWord);
                }
           
}

function randamWordGenerator(){

             randomWord = words[Math.floor(Math.random() * words.length)];//computer will pick a randam word
             console.log("random word is :"+randomWord);

            // Set up the answer array which have ---- whith the size of the word computer selects
             //var answerArray = [];
             //this loop replaces letters from the word selected by computer with ---- with eql length of the word
            for (var i = 0; i < randomWord.length; i++) {

                      answerArray[i] = "_";
                      

            }
            var s = answerArray.join(" ");
            document.getElementById("inputbox").value = s;

}//end of randamWordGenerator function
function campareFunction(char){
     remainingLetters = randomWord.length;
    if (remainingLetters > 0 && limit>=1) {
        for (var j = 0; j < randomWord.length; j++) {

                  if (randomWord[j] == char && answerArray[j]=="_") {

                    console.log(remainingLetters);
                    answerArray[j] = char;
                    var temp = answerArray.join(" ");
                    document.getElementById("inputbox").value = temp;
                    flag = 1;
                    remainingLetters--;

                  }//end of if 
                  //if user guessed 
                  else if(randomWord[j] == char && answerArray[j]!="_")
                  {
                    alert("you choose one you have already choosen ");
                    limit++;
                  }
                  //if user guessed the already wrong guessed one 
                  else if (char == wrongGuessArray[j] ) {
                      alert("you already guessed it and it's wrong");
                      limit++;
                  }
                 

            }
            //wrong guess are pushed int the wrongGuessArray 
            if (flag == 0 ){

                        wrongGuessArray.push(char);
                        var temp1 = wrongGuessArray.join(" ");
                        document.getElementById("guessedLett").innerHTML = temp1;
            }
            flag = 0;
            limit--;
            document.getElementById("noOfGuessRem").innerHTML = limit;
            //if last chance to guess
            if(limit==1){
              alert("this is your last chance of guessing");

            }
            //if there are no lifes
            if(limit == 0){
                alert("you are out of lifes try again");
            }
            if(randomWord == answerArray){
                      alert("congrates you won");
                      winCount++;
                      document.getElementById("currWins").innerHTML = winCount;

            }
            document.getElementById("currWins").innerHTML = winCount;
           


    }
    
}
