var winCount = 0;
var words = ["dog","monkey","cat","cow","horse"];
var limit = 13;//we can try max of 13 times
var wrongGuessArray = [];//this array will store the wrong guesses user made
var randomWord = [];
var userChar;
var answerArray = [];
var remainingLetters = 0;
var flag = 0;
var KeyWord;//user entered character

document.onkeyup = function(event)
      {
        //var lit = event.key;
        console.log(event.keyCode);
        if (event.keyCode == 32) {
         randamWordGenerator();


        }
 }

function alphaOnly(event){

  

                var keycode=event.keyCode;
                KeyWord = String.fromCharCode(keycode);
                console.log(KeyWord);
               if ((keycode < 97 || keycode > 122)){
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
              remainingLetters = randomWord.length;

            // Set up the answer array which have ---- whith the size of the word computer selects
             //var answerArray = [];
             //this loop replaces letters from the word selected by computer with ---- with eql length of the word
            for (var i = 0; i < randomWord.length; i++) {

                      answerArray[i] = "_";
                      

            }
            var s = answerArray.join(" ");
           document.getElementById("inputbox").value = s;
          // document.getElementById("inputbox").innerHTML = s;

}//end of randamWordGenerator function
function campareFunction(char){
     //remainingLetters = randomWord.length;
    if (remainingLetters > 0 && limit>=1) {
        for (var j = 0; j < randomWord.length; j++) {

                  if (randomWord[j] == char.toLowerCase() && answerArray[j]=="_") {

                    console.log(remainingLetters);
                    answerArray[j] = char.toLowerCase();
                    var temp = answerArray.join(" ");
                    document.getElementById("inputbox").value = temp;
                    flag = 1;
                    // document.getElementById("inputbox").value = "";
                    //remainingLetters--;
                    remainingLetters--;

                  }//end of if 
                  //if user guessed 
                  else if(randomWord[j] == char.toLowerCase() && answerArray[j]!="_")
                  {
                    alert("you choose one you have already choosen ");
                    limit++;
                  }
                  //if user guessed the already wrong guessed one 
                  else if (char.toLowerCase() == wrongGuessArray[j]) {
                      alert("you already guessed it and it's wrong");
                      limit++;
                  }
                 

            }//end of for loop
            //wrong guess are pushed int the wrongGuessArray 
            //even after guessing the complete word it is accepting the input and it is moving into the wrongGuessArray 
            if (flag == 0 && (wrongGuessArray.join().includes(KeyWord.toLowerCase()) == false) ){//need to modify here as wrongGuessArray is an array

                        wrongGuessArray.push(char.toLowerCase());
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
                resetGme();
            }
            var strWithCom = answerArray.join();//string with commas eg:c,a,t
            var str = strWithCom.replace( /,/g, "" );//sting with out commas eg:cat
            if(randomWord == str){
                      alert("congrates you won");
                      winCount++;
                      document.getElementById("currWins").innerHTML = winCount;
                      var audio = document.getElementById("myAudio");
                      audio.play();
                      resetGme();

            }
            document.getElementById("currWins").innerHTML = winCount;
            // if(str === "cow"){
            //   var header = document.getElementByTagName('header')[0];
            //   header.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr5uMooXGVK_Vufgwg9BdQduLbe_QFsxzmatrsdxOTCi9d-O-6")';
            // }
            function resetGme(){
              document.getElementById('inputbox').value='';
                randamWordGenerator();
                limit=13;
                document.getElementById("noOfGuessRem").innerHTML = limit;
                wrongGuessArray =[];
                //answerArray = [];
                document.getElementById("guessedLett").innerHTML = wrongGuessArray.join(" ");

            }
           


    }//end of if
    
}//end of compareFunction
