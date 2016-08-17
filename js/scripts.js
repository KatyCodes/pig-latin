// business logic

//ui logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("input#english").val().toLowerCase().split("");
    // var userArray = userInput.split('');


    if ((userInput[0] === "a") || (userInput[0] === "e")|| (userInput[0] === "i")|| (userInput[0] === "o")|| (userInput[0] === "u")){
      userInput = userInput + "ay";
    } else {
      userInput.push(userInput.shift());

      alert(userInput);
    }
  });
});

// hello
// userInput[i];
