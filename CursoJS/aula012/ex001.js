var idade = 12 //Minha variavel
console.log(`Você tem ${idade} anos`)//"console.log" usado para escrever na tela
if (idade < 16) {//Se a variavel idade for menor qu e 16
    console.log('Não vota')//aparece essa mensagem!
}else {//senão
    if (idade >= 16 && idade <18 || idade >= 65) {//posso colocar outro "if" junto com o "else". Repare nos operadores lógicos, "&&" significa "e" || significa "ou" entao fica assim: Se minha variavel for maior ou igual a 16 "E" menor que 18 "OU" minha variavel for maior ou igual a 65, recebo a mensagem a baixo
        console.log ('Voto opcional')
    }else {
        console.log ('voto obrigatório')
    }
}