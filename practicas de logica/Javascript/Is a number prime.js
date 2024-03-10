
function isPrime(num) {
    //TODO
    var number_divisor = []
    
    for(var i = 0; i <= num;i++){
      var numeroAleatorio = Math.floor(Math.random() * (num - 0 + 1)) + 0      
      console.log(numeroAleatorio)
      if((num/numeroAleatorio) % 1 == 0){
        number_divisor.push(numeroAleatorio)
      }}
    
    if(number_divisor.length == 2){
        return true 
    }
    else{
        return false
    }
    
}

console.log(isPrime(7))

// mi_nivel = 7kyu
// nivel_del_problema = 6kyu
// Perdi el problema no a sido completado
/*la mejor forma de hacerlo segun codewar:

*/