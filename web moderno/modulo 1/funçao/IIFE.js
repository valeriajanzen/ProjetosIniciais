// Padão IIFE -> Immediately Invoked Function Expression

(function () {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})

/*Padão muito utilizado quando desejamos fugir do escopo global,
 dentro da função podem ser difinidos, constantes, variáveis, definir outras
  funções entre varias outras coisas. */