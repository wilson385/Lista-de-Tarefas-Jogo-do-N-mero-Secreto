
// lista vazia
// escopo global ambas funçoes terao acesso a essa lista
let tarefasLista = []
const mensagem = document.getElementById("mensagem")

     // id do caixa de buttons
    let buttons = document.getElementById("buttons")    

    let botaoApagarTudo = document.createElement("button")
    botaoApagarTudo.className = "botao_lista"
    botaoApagarTudo.textContent = "Apagar Tudo"
    botaoApagarTudo.onclick = () => limparLista()

function adicionarTarefa () {
 
    // // exibirá uma caixa na tela 
    // let nome = prompt("Qual seu nome ?")

    // pegando o id do input
    const inputTarefa = document.getElementById("inputTarefa")

    // pegando o valor do input 
    // trim() > remove espaço vazio
    const tarefa = inputTarefa.value.trim()

    

    if (tarefa == "") {
        let digiteTarefa = "Por favor digite uma tarefa!"

        // alterandoa cor da mensagem
        mensagem.style.color = "#9e120aff"

        mensagem.textContent = digiteTarefa
        
    }
    else {
        
        // armazenando a mensagem que será exibida na tela dentro do p
    const mensagemSucesso = "Tarefa adicionada com sucesso"

    // alterandoa cor da mensagem
        mensagem.style.color = "#09681fff"

    // pegando o id do paragrafo que será adicionado na tela com a mensagem da variável
    mensagem.textContent = mensagemSucesso;

    // adicionando ou empurrando
    // os valores do input dentro da lista tarefa
    tarefasLista.push(tarefa)

    // chamando a função renderizar tarefas
    renderizarTarefas()

    // limpando o campo de input
    inputTarefa.value = ""

    }

  


    // + " " + > espaçamento entre as variáveis
    // mensagem.textContent = mensagemTarefa + " " + nome

    // let frutas = "maçã"
    // frutas = "banana"
    // frutas = ["banana", "maça", "abacate", "abacaxi"]
    // alert(frutas.length)
    // indexOf > indice dos valores da variavel frutas
    // alert(frutas.indexOf("abacaxi"))

    // exibindo frutas com base em seu indice
    // alert(frutas[2])

    // empurrando ou adicionando novos
    // valores na variavel frutas
    // frutas.push("tangerina")
    // alert(frutas)


}

function renderizarTarefas () {
    // pegando id da ul
    const listaTarefas = document.getElementById("listaTarefas")
    
    // Se você não limpar com innerHTML = "", os itens 
    // vão se repetir sempre que adicionar uma nova tarefa
    listaTarefas.innerHTML = ""

    // enquanto ou para
    // 1. item inicial (iterador)
    // 2. item final (condição)
    // 3. se vai de 1 em 1 elemento ou se pula
    // iterador , condição frequencia
    
    // enquanto i for menor que tarefas.length o loop vai correr
    for (let i = 0; i < tarefasLista.length; i++) { 

        // criando elemento li
    const novaTarefa = document.createElement("li")

    // adicionando o valor do input dentro da li
    novaTarefa.textContent = tarefasLista[i]

    let botaoRemover = document.createElement("button")

    // Toda vez que esse botão for clicado, a função removerTarefa() será chamada.
    // enviando indice das tarefas que esta presente no renderizar 
    // para a função remover
    botaoRemover.onclick = () => removerTarefa(i)

       // criando classe para button
    botaoRemover.className = "remover"

    // adicionando nome dentro do button
    botaoRemover.textContent = "Remover"

    let botaoEditar = document.createElement("button")
    botaoEditar.className = "editar"
    botaoEditar.textContent = "Editar"
    botaoEditar.onclick = () => editarTarefa(i)

    
    
    
    
        

      // adicionando botaoRemover dentro do li
    novaTarefa.appendChild(botaoRemover)
    novaTarefa.appendChild(botaoEditar)
     
    // adicionando o li dentro do ul
    listaTarefas.appendChild(novaTarefa)







    }
      const number = 2
   if(tarefasLista.length >= 2 ) {
    // adicionando o botao apagar tudo, dentro da caixa buttons 
    buttons.appendChild(botaoApagarTudo)

   }

}

     
    
// recebendo o indice
function removerTarefa (i) {

    // splice > 
// Remover elementos
// Adicionar elementos
// Ou fazer os dois ao mesmo tempo
// remover cada elemento com base no indice 

    tarefasLista.splice(i,1)
    mensagem.style.color = "#960b39ff"
    mensagem.textContent = "Tarefa removida"
    
    // exibi na tela
    renderizarTarefas()


}

function editarTarefa(i) {
    let tarefaEditada = prompt("Edite a Tarefa:")
    if (tarefaEditada.trim() != "") {
        // indice da tarefa que eu quero altera
        tarefasLista[i] = tarefaEditada
        mensagem.textContent = "Tarefa editada com sucesso!"
        renderizarTarefas()
    }
}

function limparLista () {
    // tamanho da lista igual a 0
    tarefasLista.length = 0
    mensagem.style.color = "#991313ff"
    mensagem.textContent = "Lista Limpa com sucesso!"
    renderizarTarefas()
}