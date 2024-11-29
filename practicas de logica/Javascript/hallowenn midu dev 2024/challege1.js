function createMagicPotion(potions, target) {
    // Code here 
        for(let i = 0; i< potions.length;i++){
          let elemento = potions[i];
          let auxiliar = target - elemento;
          const condicion = (elemento) => elemento === auxiliar;
          const elemetosConsiguientes = potions.slice(i + 1);
          let indice = elemetosConsiguientes.findIndex(condicion)
          if (indice != -1) {
            console.log([i, i + 1 + indice])
          return [i, i + 1 + indice];
      }
    }
    return undefined;
  }

  createMagicPotion([10, 5, 2, 3, 7, 5], 10)

  function creatingPosio(posions,target){
    const seen = new Map()

    for (let i = 0; i < posions.length; i++){
      const currentPotion = posions[i]
      const complement = target - currentPotion

      if (seen.has(complement)){
        return [seen.get(complement), i]
      }

      seen.set(currentPotion,i)
    } 
  }