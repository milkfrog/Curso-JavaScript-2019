const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice, array, x){ // sempre valor, indice e o proprio array
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
    console.log(x) // undefined
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)