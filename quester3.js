let pessoa ={
    nome: 'Anselmo',
    idade: 17
}


let pessoa2 ={
    nome: 'Bruno',
    idade: 16
}

if(pessoa.idade > pessoa2.idade)
    console.log('Mais velho' + pessoa.nome);
else if (pessoa2.idade > pessoa.idade){
    console.log('Mais velho'+ pessoa2.nome);
} else {
    console.log('idades iguas');
}
