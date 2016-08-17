// business logic

function myFunction (userInput){
  var vowelArray = ["a", "e", "i", "o", "u"];
  for (var index = 0; index < userInput.length; index += 1){
      if (!vowelArray.includes(userInput[0])){
           userInput.push(userInput.shift());
     } else {
         userInput.push("ay");
         userInput= userInput.join("");
         return userInput;
       }
     }
}

//ui logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("input#english").val().toLowerCase().split("");
    // var userArray = userInput.split('');

  // if (userInput.charAt[0] === "a"){
  //   userInput = userInput + "ay";
  // }
  //  else if (userInput.charAt[0]) === "e"{
  //    userInput = userInput + "ay";
  //  }
  //  //...
  //  else {
  //    return;
  //  }
    // if (vowelArray.includes(userInput[0])){
    //     userInput = userInput + "ay";
    //     $(".output").text(userInput);
    // } else {
    //     userInput.push(userInput.shift());
    //     $(".output").text(userInput);
    //
    //     if (!vowelArray.includes(userInput[1])){
    //         userInput.push(userInput.shift());
       $(".output").text(myFunction(userInput));
    //   }
    // }
  });
});

// hello
// userInput[i];
