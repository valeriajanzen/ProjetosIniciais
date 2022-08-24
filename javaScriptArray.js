const valores = [7.7, 8.9, 6.3, 9.2] 
//  é um tipo de dados dinamico que cresce e diminui a partir do momento que voce vai  //
// adicionando ou excluindo dados 
// 
console.log(valores[0],  valores[3]) // Array usar [] //

valores[4] = 10
console.log(valores)
console.log(valores.length) // quantos elementos tem no array usando o length

valores.push({id:3}, false, null, 'test') //metodo push adiciona dados
console.log(valores)

console.log(valores.pop()) // metodo pop remove 
delete valores[0]
console.log("")

console.log(typeof valores) // array é um objeto em javaScript 




