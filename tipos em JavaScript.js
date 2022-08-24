const escola = 'cod3r' // sobre a posicao dos indices é contado 0,1,2,3...//

console.log(escola.charAt(4)) //busca um determinado caacteredento da string//
console.log(escola.charCodeAt(3)) //busca o cod do caractere que se encontra n tabela//
console.log(escola.indexOf('3')) //para saber em qual indice o digito se encontra//

console.log(escola.substring(1)) //vai a partir d indice 1//
console.log(escola.substring(0, 3)) //me de tres indices a partirdo zero//

console.log('Escola '.concat(escola) + ('!'))
console.log(escola.replace(3, 'e')) // substituitodosos digitos pela letra e//
