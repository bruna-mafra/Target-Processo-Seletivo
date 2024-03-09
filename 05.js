const originalString = 'Bruna'  // Informar aqui a string que deseja inverter 
const arrayString = originalString.split('')
let inversedString = ''

for (let i = (arrayString.length - 1); i >= 0; i--) {
    inversedString += arrayString[i]
}

console.log(inversedString)

