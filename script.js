const btnCalcular = document.getElementById("Calcular");
btnCalcular.addEventListener("click", function () {
   let Peso = document.getElementById("Peso").value;
   let Altura = document.getElementById("Altura").value;
   let calculo = (Peso/(Altura*Altura));
   let conceito = '';

   if ( calculo <= 18.5) {
    conceito = 'Baixo peso';
   } else if( calculo > 18.5 && calculo < 24.9){
    conceito = 'Peso Normal';
   } else if( calculo >= 25 && calculo < 29.9){
    conceito = 'Excesso de Peso';
   } else if (calculo  >= 30) {
    conceito = 'Obesidade';  
   } else if (calculo >= 30 && calculo < 34.9) {
    conceito = 'Obesidade Classe 1';
   } else if (calculo >= 35 && calculo < 39.9) {
    conceito = 'Obesidade Classe 2'; 
   } else{
      conceito = 'Obesidade Mórbida';
   }
   document.getElementById("resultado").innerHTML = calculo+' '+conceito;
});

