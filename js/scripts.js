// business logic

//ui logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("input#english").val().toLowerCase();
    var userArray = userInput.split('');

    if ((userArray[0] === "a") || (userArray[0] === "e")|| (userArray[0] === "i")|| (userArray[0] === "o")|| (userArray[0] === "u")){
      userArray = userArray + "ay";
      alert(userArray);
    } else {
    return false;
    }
  });
});

// hello
// userArray[i];
