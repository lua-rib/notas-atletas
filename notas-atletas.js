class Atletas {
    constructor(nome, nota) {
        this.nome = nome
        this.nota = nota
    }


    calculaMedia(notas) {
            let max = Math.max(...notas);
            let min = Math.min(...notas);

            let soma = notas.reduce((a, b) => a + b) - max - min;

            return soma / (notas.length - 2)
        }
}

let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas: [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
]

atletas.forEach(function(item) {
    let atleta = new Atletas(item.nome, item.notas)
    let media = atleta.calculaMedia(item.notas)

    console.log("Atleta: " + item.nome)
    console.log("Notas: " + item.notas)
    console.log("Média: " + media)
    console.log("")

});




