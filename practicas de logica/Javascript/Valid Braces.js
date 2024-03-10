function validBraces(braces){
    //TODO 
    const stack = [];
    const delimitadores = {
      '(': ')',
      '[': ']',
      '{': '}'
    };
  
    for (let i = 0; i < texto.length; i++) {
      const char = texto[i];
  
      if (delimitadores[char]) {
        stack.push(char);
      } else if (char === ')' || char === ']' || char === '}') {
      
        if (stack.length === 0 || delimitadores[stack.pop()] !== char) {
          return false; 
        }
      }
    }
  
    return stack.length === 0;
  }
  
  


console.log(validBraces('(})'))

// mi_nivel = 6kyu
// nivel_del_problema = 6kyu
//Completado exitosamente
/*la mejor forma de hacerlo segun codewar:
function validBraces(braces){
  var matches = { '(':')', '{':'}', '[':']' };
  var stack = [];
  var currentChar;

  for (var i=0; i<braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) { // opening braces
      stack.push(currentChar);
    } else { // closing braces
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0; // any unclosed braces left?
}
}*/