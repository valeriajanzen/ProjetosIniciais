{
    {
        {
            {
                var sera = 'Será???'
            }
        }
    }
}
console.log(sera) // variavel dentro do bloco sem ser uma funcao fica visivel 
// dentro e fora 

function teste() {
    var local = 123
    console.log(local)
}
teste()
console.log(local) // variave dentro uma funcao fica visivel apenas dentro da funcao 