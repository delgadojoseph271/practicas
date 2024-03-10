function pigIt(str){
    //Code here
    var ay = 'ay'
    return str.replace(/\b(\w)(\w*)\b/g, function(match, primeraLetra, restoPalabra) {
        return restoPalabra + primeraLetra +ay;
    });


  }

console.log(pigIt('hola mundo'))

// mi_nivel = 7kyu
// nivel_del_problema = 5kyu
//Completado exitosamente
/*la mejor forma de haccerlo segun codewar:
   function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}
}
*/