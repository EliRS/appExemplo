// This is a JavaScript file
/*$(document).on('click','#btn7',function(){
  var valor;
  valor = $("#display").val();
  valor += "7";
  $("#display").val(valor);
});*/
var pegar;
var operacao = "";
var texto = "";
var texto1 = "";

// botoes 1 ao 9
$(document).on('click','.botao',function(){
  var valor;
  valor = $("#display").val();
  valor += $(this).val();
  $("#display").val(valor);
  if($("#display").val().length == 1){
    $("#vir").attr("disabled", false);
  }
});

//btn apagar
$(document).on('click','#ce',function(){
  $("#display").val("");
  operacao = "";
  pegar = null;
  texto = "";
});

//btn virgula
$(document).on('click','#vir',function(){
  var valor;
  valor = $("#display").val();
  valor += $(this).val();
  $("#display").val(valor);
  $("#vir").attr("disabled", true);
});


// btn +
$(document).on('click','#operadores',function(){
  var valor;
  if($("#display").val().length == 1){
    $("#vir").attr("disabled", false);
  }
  if(pegar == null){
    valor = parseFloat($("#display").val());
    texto = $("#display").val() + $(this).val();
    $("#display").val(texto);
  }else{
    texto1 = $("#display").val();
    valor = parseFloat($("#display").val().slice(texto.length,texto1.length));
    texto = $("#display").val() + $(this).val();
    $("#display").val(texto);
  }
  
  
  if(operacao == "+"){
    pegar = pegar + valor;
  }else if(operacao == "-"){
    pegar = pegar - valor;
  }else if(operacao == "*"){
    pegar = pegar * valor;
  }else if(operacao == "/"){
    pegar = pegar / valor;
  }else{
    pegar = valor;
  }

  // verificar qual é o operador
  
    operacao = $(this).val();
  
  
});

// btn igual
$(document).on('click','#igual',function(){
  texto1 = $("#display").val();
  valor = parseFloat($("#display").val().slice(texto.length,texto1.length));
  if(operacao == "+"){
    pegar = pegar + valor;
  }else if(operacao == "-"){
    pegar = pegar - valor;
  }else if(operacao == "*"){
    pegar = pegar * valor;
  }else{
    pegar = pegar / valor;
  }
  $("#display").val(pegar);
  operacao = "";
  pegar = null;
  texto = "";
});



