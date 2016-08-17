// business logic

//ui logic
$(document).ready(function(){
  $("form").submit(function(event){
  console.log("hello");
    event.preventDefault();
    var userInput = $("input#english").val().toLowerCase();
    var userArray = userInput.split('');

    if (userArray[0] === "a"){
      userArray = userArray + "ay";
      alert(userArray);
    } else {
    return false;
    }
  });
});

// hello
// userArray[i];
