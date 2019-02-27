// This is a JavaScript file
/*$(document).on('click','#btn7',function(){
  var valor;
  valor = $("#display").val();
  valor += "7";
  $("#display").val(valor);
});*/

$(document).on('click','.botao',function(){
  var valor;
  valor = $("#display").val();
  valor += $(this).val();
  $("#display").val(valor);
});

$(document).on('click','#ce',function(){
  $("#display").val("");
});

