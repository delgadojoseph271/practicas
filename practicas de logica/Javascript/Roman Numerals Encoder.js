function solution(number){
    // convert the number to a roman numeral
    var equivalencias = {
        "I" :         1,
        "V"  :        5,
        "X"   :       10,
        "L"    :      50,
        "C"     :     100,
        "D"      :    500,
        'M'       :   1000
    };

    var romanic_number = ""
    var number = number
    var claves = Object.keys(equivalencias);

    while (number > 0){
        console.log("number antes de procesar: ",number)

        for (var i = 0; i < claves.length; i++){
            var clave = claves[i]
            console.log("CLAVE: ", clave)
            console.log("la variable i es: ",i)
                var valor = equivalencias[clave];
                console.log("la variable valor:",valor)
                console.log('---resta---',number -valor)
                // Econtrar el valor mas cercano a la resta 
                if(number - valor <= number && number - valor >= 0 ){
                    var valor_maximo = valor
                    var key = clave
                    console.log("el valor maximo es: ",valor_maximo)

                }
                
                
            }
            console.log("la varinble number es:",number," el valor maximo es: ",valor_maximo)
            if((number - valor_maximo) >= 0)    
            {number -= valor_maximo
            romanic_number += key}
            console.log("number vale : ",number,"el numero romano es: ",romanic_number)
            
        }
    

    
    console.log(romanic_number)
    return romanic_number

}

console.log(solution(3793))

// mi_nivel = 7kyu
// nivel_del_problema = 6kyu
// Perdi el problema no a sido completado
/*la mejor forma de hacerlo segun codewar:

*/