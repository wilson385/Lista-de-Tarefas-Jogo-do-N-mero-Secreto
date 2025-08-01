
function numeroSecreto () {
     let numeroAleatorio = Math.floor(Math.random() * 10)
    let nome = prompt("Qual o seu nome ?")

    while (nome.trim() == "") {
        alert("digite algo válido!")

        let nome = prompt("Qual o seu nome ?")

        if(nome.trim() != "" ) {
            
        }
    
    }

    let idade = prompt("Qual a sua idade ?")
   
    
    
    // se idade for um espaço vazio
    // ou se for algo que não seja número
    while (idade.trim() == "" || isNaN(idade)) {
        alert("Por favor digite uma idade válida!")

    }

    

    // if (selecioneNumero == numeroAleatorio) {
    //     alert("parabéns você descobriu o número secreto!")

    // }
    let selecioneNumero = prompt("Selecione um número entre 1 e 9!")
    
    while (selecioneNumero != numeroAleatorio) {

        alert("tente de novo, Não desista!")
        let selecioneNumero = prompt("Selecione um número entr 1 e 9!")

        if(selecioneNumero == numeroAleatorio) {

            alert("parabéns você descobriu o número secreto!")
            return;
        }
    }

    
   
}

function fundo () {
    let body = document.querySelector("body")
     body.style.background = "url('assets/fundo.jpg') no-repeat top center / cover";

   let a = document.querySelector("a")
   a.style.color = "#00ff2aff"

}