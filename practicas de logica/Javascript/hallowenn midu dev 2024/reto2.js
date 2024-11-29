function battleHorde(zombies, humans) {
    // Code here
    var zombies = zombies.split('').forEach(element => {
        parseInt(element)
    });
    var humans = humans.split('').forEach(element => {
        parseInt(element)
    });
    
    var long = humans.length
    
    for (let index = 0; index < long; index++) {
        const humansWarriors = humans[index];
        const zombiesWarriors = zombies[index];

        if(humansWarriors > zombiesWarriors){
            humans[i+1] += (humansWarriors - zombiesWarriors)
        }

        if(humansWarriors > zombiesWarriors){
            zombies[i+1] += (zombiesWarriors - humansWarriors)
        }
    }
    
}

console.log(battleHorde('242', '334'))