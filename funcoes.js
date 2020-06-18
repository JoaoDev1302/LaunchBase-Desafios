const alunosTurmaA = [
    {
        nome:"João",
        nota: 8
    },
    {
        nome:"Jurema",
        nota: 5
    },
    {
        nome:"Amora",
        nota:9
    }
]

const alunosTurmaB = [
    {
        nome: "Pandora",
        nota: 8
    },
    
    {
        nome: "Juma",
        nota: 5
    },

    {
        nome:"Tililico",
        nota: 5
    }
]

function calculaMediaTurma(alunos){
    return(alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}



const MediaTurmaA = calculaMediaTurma(alunosTurmaA)
const MediaTurmaB = calculaMediaTurma(alunosTurmaB)

enviaMensagemMedia(MediaTurmaA,"Turma A")
enviaMensagemMedia(MediaTurmaB,"Turma B")

function enviaMensagemMedia(Media,Turma){
    if(Media > 5){
        console.log(`A ${Turma} está na media esperada ${Media}, parabéns continuem assim!`)
    }else{
        console.log(`A ${Turma} está abaixo da Média esperada ${Media}, se esforcem mais!`)
    }
}
