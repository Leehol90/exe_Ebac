var num1 = 20, 
    num2 = 95 
    
var mem, MDC = 0

if(num1 < num2){
    mem = num1
    num1 = num2
    num2 = mem
}
if(num1 == num2){
    MDC = num2
}
if(num1 % num2 == 0){
    MDC = num2
}

if(MDC == 0){
    do{
        mem = num2
        num2 = num1 % num2
        num1 = mem
    }while((num1 % num2) > 0)
    MDC = num2
}

console.log(MDC)