const btnCalcular = document.getElementById("Calcular");
btnCalcular.addEventListener("click", function () {
   let Peso = document.getElementById("Peso").value;
   let Altura = document.getElementById("Altura").value;
   let calculo = (Peso/(Altura*Altura));
   let conceito = '';

   if ( calculo <= 18.5) {
    conceito = 'Baixo peso';
   } else if( calculo > 18.5 && calculo < 24.9){
    conceito = 'Peso Normal'
   } else if(){

   } 
});

