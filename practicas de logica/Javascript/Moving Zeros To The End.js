function moveZeros(arr) {
    var length_arr = arr.length;
    var i = 0;

    while (i < length_arr) {
        var item = arr[i];

        if (item === 0) { 
            arr.push(item); 
            arr.splice(i, 1); 
            length_arr--; 
        } else {
            i++; 
    }

    return arr;
}

  console.log(moveZeros([ 9, +0, 9, 1, 2, 1, 1, 3, 1, 9, +0, +0, 9, +0, +0, +0, +0, +0, +0, +0 ]))}

  //// mi_nivel = 8kyu
// nivel_del_problema = 7kyu //este problema me subio a 6kyu
//Completado exitosamente
/* la mejor forma de haccerlo segun codewar: 
var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}
}

//que de echo habia pensado en esta manera pero nose porque no decidi hacerla asi xd
*/
