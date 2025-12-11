//Multiplicando os termos
function funcao(num, valMax){

    var inc = 1, soma = 0
    
    while(num * inc < valMax){
        soma += num * inc
        inc ++
    }

    return soma
}

//Resolvendo por P.A.
function funcao2(valorInic, valMax){

    var qntdeTermos = Math.trunc(valMax / valorInic)
    if(valMax % valorInic == 0)
        qntdeTermos -= 1
    
    return (valorInic * (qntdeTermos + 1)) * qntdeTermos / 2

}

const valMax = 1000
console.log('O valor será: ' + (funcao(5, valMax) + funcao(7, valMax)))
console.log('O valor será: ' + (funcao2(5, valMax) + funcao2(7, valMax)))