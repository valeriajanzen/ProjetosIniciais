const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()

/*Quando uma função é declarada dentro de javascript ela 
nao tem apenas o seu conteudo interno, o seu nome, os paramentros que ela recebe
e aquilo que ela retorna, ela tambem tem conciência no local que ela foi definida
- A função carrega consigo o local em que foi definida.*/