var responses = ["yes", "no", "ask again", "later", "maybe", "reply hazy", "signs point to yes"]

// This waits till the page finishes loading before running the code inside the {}
$(document).ready(function() {

console.log ("JS is working")

  function buttonClicked(){
      var randomNumber = Math.floor(Math.random() * responses.length)
      var result = responses[randomNumber]
      $('#output').text(result)



  }


  function colorSwitch(){

    $("div").attr("class", "blue")


}

  function colorSwitch(){

    $("div").attr("class", "green")
  }

$('#submit').click(buttonClicked)
$('#submit').click(colorSwitch)

});
