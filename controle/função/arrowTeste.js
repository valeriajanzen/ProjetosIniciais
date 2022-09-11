const numero = 3;

arrow = () =>{
    return console.log("Eu sou uma arrow function")
}



function imprimir (parameter) {
    return parameter()
}

imprimir(arrow)