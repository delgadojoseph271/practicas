console.log("hola mundo")
function toCamelCase(str){
  console.log(str)
    var string = str.split("")
    console.log(string)
    for (var i = 0; i < string.length;i++){
      var char = str[i]
       if (char === `-` || char === `_`){
        var index =string.indexOf(char);

         string.splice(index,1)
         var caracterMayuscula = str[i+1].toUpperCase()
         string.splice(index,1,caracterMayuscula)
  };
       };
       string = string.join("")
    return  string
      
    };

toCamelCase("The-stealth-warrior")
// mi_nivel = 8kyu
// nivel_del_problema = 6kyu
//Completado exitosamente
/*la mejor forma de haccerlo segun codewar:
    function toCamelCase(str){
      var regExp=/[-_]\w/ig;
      return str.replace(regExp,function(match){
            return match.charAt(1).toUpperCase();
       });
}
*/