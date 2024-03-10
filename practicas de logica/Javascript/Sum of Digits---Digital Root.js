function digitalRoot(n) {
    // ...
    while (true){
       var String_number = n.toString()
        String_number = String_number.split("")
        var sum = String_number.reduce(function(acumulativo,numero){return acumulativo + parseInt(numero,10)},0)
        n = sum
    if (String_number.length <= 1 ){
      return sum 
      break
    }
    
  }

}
digitalRoot(132189)

// mi_nivel = 8kyu
// nivel_del_problema = 6kyu
//Completado exitosamente
/*la mejor forma de hacerlo segun codewar:
function digital_root(n) {
  return (n - 1) % 9 + 1;
}
literalmento utilizo una formula matematica
*/