const usuarios ={
    usuario1: "Diego",
    Empresa1: {
        Nome: "Rocketseat",
        Endereco: " Rua Guilherme Gembala,",
        Numero: 260
    },

    usuario: "João",
    Empresa:{
        Nome: "Rocketseat",
        Endereco:"Rua Guilherme Gembala,",
        Numero: 260
    }
}    

console.log(`O úsuario ${usuarios.usuario}, trabalha na empresa ${usuarios.Empresa.Nome}, Situada em ${usuarios.Empresa.Endereco} ${usuarios.Empresa.Numero}`)
console.log(`O úsuario ${usuarios.usuario1}, Trabalha na empresa ${usuarios.Empresa1.Nome}, Situada em ${usuarios.Empresa1.Endereco} ${usuarios.Empresa1.Numero}`)

const programadores = [
    {
        Programador:"Carlos",
        Nome:"C++",
        Especialidade:"Desktop"
    },
    {
        Programador: "João",
        Nome: "SQL Server",
        Especialidade:"Desktop"
    }
]

console.log(`O programador ${programadores[0].Programador} usa a tecnologia ${programadores[0].Nome}, com especialidade em ${programadores[0].Especialidade}`)
console.log(`O programador ${programadores[1].Programador} usa a tecnologia ${programadores[1].Nome}, com especiaidade em ${programadores[1].Especialidade}`)