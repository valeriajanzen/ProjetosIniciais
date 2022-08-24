function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max,min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rand([50, 40])) // navega entre 40 e 50
console.log(rand([992])) // o minimo é 992 navega dele ate o 1000
console.log(rand([,10])) // aqui o maxi é 10 
console.log(rand([]))