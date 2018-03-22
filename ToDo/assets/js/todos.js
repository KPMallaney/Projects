// Check off by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

//Delete
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(400,function(){
    $(this).remove();
  });
  event.stopPropagation();
});

//New
$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    //gather input
    var todoInput = ($(this).val());
    $(this).val("");
    //add li
    $("ul").append("<li><span><i class='fa fa-trash'></i> </span>" + todoInput + "</li>");
  }
});


//Collapse
$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});
