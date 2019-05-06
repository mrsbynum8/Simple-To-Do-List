//Check off to-dos by clicking
$("ul").on('click','li', function(){
  $(this).toggleClass("completed")
})

$("ul").on('click', '.delete', function(event) {
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation();
});


$("input[type='text']").keypress(function(event) {
  if(event.which === 13) {
    let todoText = $(this).val();
    $("ul").append(`<li><span class="delete"><i class="far fa-trash-alt"></i></span> ${todoText}</li>`);
    $(this).val("")
  }
})

$("#plusBtn").click(function() {
  $("input[type='text']").fadeToggle();
})