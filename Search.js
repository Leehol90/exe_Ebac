var vetor = [8,103,47,92,55,4,17,72,34,20,67,99,24,76,81,6]
var menorValor = vetor[0], maiorValor = vetor[0]
var indMenor, indMaior

vetor.forEach(function(vetor, ind){
    if(menorValor >= vetor){
        menorValor = vetor
        indMenor = ind        
    }
    if(maiorValor <= vetor){
        maiorValor = vetor
        indMaior = ind
    }
})

console.log('O vetor tem ' + vetor.length + ' posições')
console.log('O menor valor está na posição ' + indMenor)
console.log('O maior valor está na posição ' + indMaior)