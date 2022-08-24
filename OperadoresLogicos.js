function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // operadores curto circuito, ex 'ou'
    const comprarTv50 = trabalho1 && trabalho2 // ex 'e'
    //const comprarTv32 = !!(trabalho1 ^ trabalho 2) // bitwise
    const comprarTv32 = trabalho1 != trabalho2 // diferente, ou exclusivo
    const manterSaudavel = !comprarSorvete //operador unário // negacao logina
    
    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false,false))

// v e v -> v quando trabalha com 'e' se 1 for f o resultadofinal é f
// v e f -> f op' e op2 e op3 e op4 -> v
// f e ? -> f   

// v ou ? -> v quando trab com v basta um ser v que o resultado final é v 
// f ou v -> v 
// f ou f -> f 

// v xor v -> f //com o ou exclusivo se os dois forem verdadeiros oo resultado é falso 
// v xor f -> v
// f xor v -> v
// f xor f -> f

// !v -> f
// !f -> v // negacao de falso vira verdadeiro e vice versa