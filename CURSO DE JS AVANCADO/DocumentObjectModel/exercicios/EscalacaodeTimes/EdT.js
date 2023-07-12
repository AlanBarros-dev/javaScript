const jogador = {}
const jogadores = []


function adicionar(){
    const escalacaoSection = document.getElementById('escalacao')

    const h3 = document.createElement('h3') 
    h3.innerText = 'Escalar: '
    const ul = document.createElement('ul')

   

    const nameLi = document.createElement('li')
    nameLi.innerText = 'Nome: '
    const nameJogador = document.createElement('input')
    nameJogador.type = 'text'
    nameJogador.name = 'fullname'
    nameJogador.class = 'nameJ'
    
    ul.appendChild(nameLi)
    nameLi.appendChild(nameJogador)
    ul.appendChild(document.createElement('br'))


    const posicaoLi = document.createElement('li')
    posicaoLi.innerText = 'Posicao: '
    const positionInput = document.createElement('input')
    positionInput.type = 'text'
    positionInput.name = 'position'
    positionInput.class = 'position'

    ul.appendChild(posicaoLi)
    posicaoLi.appendChild(positionInput)
    ul.appendChild(document.createElement('br'))


    const numberLi = document.createElement('li')
    numberLi.innerText = 'Numero Camisa: '
    const numberInput = document.createElement('input')
    numberInput.type = 'number'
    numberInput.id = 'number'
    numberInput.class = 'numero'

    ul.appendChild(numberLi)
    numberLi.appendChild(numberInput)
    ul.appendChild(document.createElement('br'))

    const confirmacao = document.createElement('button')
    confirmacao.innerText = 'Escalar Jogador'
    confirmacao.onclick = confirm

    ul.appendChild(confirmacao)


    escalacaoSection.append(h3, ul)
}

if (confirmacao = confirm){
    
}


function removeJogador(){

}






/*Construa uma pagina web que permita montar a escalacao de um time
Nele devera ser porssivel:

-Escala um jogador
 -informar a posicao do jogador a ser escalado para o time.
 -informar o nome do jogador
 -informar o numero da camisa do jogador
 -Ter um botao "escalar" que pergunta ao usuario se ele deseja confirmar a escalacao do jogador
  e entao insere as infromacoes em uma lista na pagina.
 -Apos o jogador ser escalado os campos de texto devem ser limpos.

-Remover um jogador
 -informar o Numero da camisa do jogador.
 -ter um botao "Remover" que pergunta ao usuario se ele deseja confirmar a remocao daquele jogadore entao exclui ele da lista na pagina.
 -Apos o jogador ser removido o campo de texto deve ser limpo

dica: Lembrando*/