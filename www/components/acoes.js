// This is a JavaScript file
/*$(document).on('click','#btn7',function(){
  var valor;
  valor = $("#display").val();
  valor += "7";
  $("#display").val(valor);
});*/
var pegar;

$(document).on('click','.botao',function(){
  var valor;
  valor = $("#display").val();
  valor += $(this).val();
  $("#display").val(valor);
  if($("#display").val().length == 1){
    $("#vir").attr("disabled", false);
  }
});

$(document).on('click','#ce',function(){
  $("#display").val("");
  pegar = 0;
});

$(document).on('click','#vir',function(){
  var valor;
  valor = $("#display").val();
  valor += $(this).val();
  $("#display").val(valor);
  $("#vir").attr("disabled", true);
});


$(document).on('click','#plus',function(){
  var valor;
  if($("#display").val().length == 1){
    $("#vir").attr("disabled", false);
  }
  valor = parseFloat($("#display").val());
  $("#display").val("");
  if(pegar == null){
    pegar = valor;
  }else{
    pegar = pegar + valor;
  }
});


