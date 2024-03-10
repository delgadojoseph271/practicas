function filter_list(l) {
    // Return a new array with the strings filtered out

    for(var i = 0; i <=l.length; i++){
        var item = l[i]
        var index =l.indexOf(item);
        if(typeof item == 'string'){
            console.log(item)
            l.splice(index,1)
            i--
        }
    }
    console.log(l)
    return l


  }

filter_list([1,2,'a','b'])

//// mi_nivel = 8kyu
// nivel_del_problema = 7kyu
//Completado exitosamente
/* la mejor forma de haccerlo segun codewar: 
function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number'})
}
*/