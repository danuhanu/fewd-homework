$(document).ready(function() {

$(".readmore").click(showAdditionalText)
$(".readless").click(hideAdditionalText)

function showAdditionalText (){
  console.log(this)

  $("#show-this-on-click").slideDown()
  $(".readless").show()
  $(this).hide()
  event.preventDefault()

}
  function hideAdditionalText (){
    $("#show-this-on-click").hide()
    $(".readless").hide()
    $(".readmore").show()
    event.preventDefault()
}

});
