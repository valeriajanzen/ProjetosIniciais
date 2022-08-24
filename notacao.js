console.log(Math.ceil(6.1))//objeto da popria APi de JavaScript

const obj1 = {}
obj1.nome = 'Bola'   // isto é notacao litera 
// obj1['nome'] = 'Bola2'
console.log(obj1.nome)

function Obj (nome) {
    this.nome = nome // ao usar 'this.' vc deixa visivel fora do scoop da funcao,
    this.exec = function () { // isto e uma funcao
        console.log('Exec...')
    }
}                      // se fosse utilizado var, ficaria visivel apenas deno fa funcao

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()