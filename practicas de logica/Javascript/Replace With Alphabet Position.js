function alphabetPosition(text) {
    let alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
   var text =text.replace(/[^a-zA-Z]/g,"")
    return text.replace(/[a-zA-Z]/g,function(char){
       var text = alfabeto.indexOf(char.toUpperCase())+1
        return text.toString() +" "
    } 
  ).trim()
  }


console.log(alphabetPosition("x@^+nv. "))

// mi_nivel = 7kyu
// nivel_del_problema = 6kyu
//Completado exitosamente
/*la mejor forma de hacerlo segun codewar:
function alphabetPosition(text) {
  var result = "";
  for (var i = 0; i < text.length; i++){
    var code = text.toUpperCase().charCodeAt(i)
    if (code > 64 && code < 91) result += (code - 64) + " ";
  }

  return result.slice(0, result.length-1);
}
*/
