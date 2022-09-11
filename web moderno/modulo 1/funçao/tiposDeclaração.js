console.log(soma(3, 4))
// com a function declaration eu posso chamar a função antes de ser declarada
// function declaration
function soma(x,y) {
    return x + y
}
// se estiver usando uma function expression devo chamar ela depois da declaração
// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression 
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))