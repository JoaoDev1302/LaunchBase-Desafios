//Criar um programa para calcular o IMC nivel de 
//obsedidade de uma pessoa

//criando variaveis
//const nome = 'João';
//const peso = 75;
//const altura = 1.73;

//const imc = peso / (altura * altura);

//if(imc >= 30){
//    console.log(nome + ", Você está Obeso, Vá para academia! " + imc)
//}else{
//    console.log(nome + ", Você não está acima do peso! " + imc)
//}

//Calculo de Aposentadoria

const nomeAposetadoria = "Amora";
const Sexo = "F";
const idade = 80;
const contribuicao = 34;
const tempoMedio = idade + contribuicao

// a soma da idade com o tempo de contribuição 
//do homem precisa ser de no mínimo 95 anos, 
//enquanto a mulher precisa ter no mínimo 85 anos na soma

const homemPodeAposentar = Sexo === 'M' && contribuicao >= 35 &&  tempoMedio >= 95
const mulherPodeAposentar = Sexo === 'F' && contribuicao >= 30 && tempoMedio >= 85
console.log(mulherPodeAposentar)


if(homemPodeAposentar === true  || mulherPodeAposentar === true){
    if(homemPodeAposentar === true && mulherPodeAposentar === false){
        console.log(`Você pode Aposentar ${nomeAposetadoria} !`)
    }else{
        console.log(`Você pode Aposentar ${nomeAposetadoria} !`)
    }
    
}else{
    console.log(`Você não pode Aposentar ${nomeAposetadoria} !`)
}