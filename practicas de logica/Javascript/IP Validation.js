function isValidIP(str) {
    var separate_str = str.split('.')
    var return_false = /0\d/g
    if (separate_str.length === 4) {
        var isValidComponent = separate_str.every(function(component) {
            if (/^0\d+/.test(component)) {
                return false;
            }
            if (/[a-zA-Z\s]/.test(component)) {
                return false; // Componente contiene letras o espacios, no válido
            }

            var numero = parseInt(component);

            return numero >= 0 && numero <= 255;
        });

        return isValidComponent;
    }

    return false;
}




console.log(isValidIP('1.2.03.4'))

// mi_nivel = 7kyu
// nivel_del_problema = 6kyu
//Completado exitosamente
/*la mejor forma de hacerlo segun codewar:
function isValidIP(str) {
  return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
}
habia pensado algo asi peor no pense que se podia hacer algo tan masivo
*/