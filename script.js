let contadorDOM = document.getElementById('contador')//innerHTML
let preço = document.getElementById('PreçoDoProduto')//innerHTML
let total = document.getElementById('PreçoTotal')//innerHTML

let contador = 1 //variavel ++ ou --
let PreçoDoProduto = 100 //variavel ++ ou --
let PreçoTotal = 100 //variavel ++ ou --

//Botao de remover um item
document.getElementById('buttonRemove-1').addEventListener('click', () => {
    contador--
    contadorDOM.innerHTML = `${contador}`

    preço.innerHTML = `R$${PreçoDoProduto - 100}`
    PreçoDoProduto -= 100

    total.innerHTML = `R$${PreçoDoProduto}`

    if(contador <= 0){
        contadorDOM.innerHTML = `0`
        contador = 0

        PreçoDoProduto = 0 
        preço.innerHTML = `R$${PreçoDoProduto}`

        total.innerHTML = `0`
        PreçoTotal = 0
    }
})


//Botao de adicionar mais um item
document.getElementById('buttonADD-1').addEventListener('click', () => {
    contador++
    contadorDOM.innerHTML = `${contador}`

    preço.innerHTML = `R$${PreçoDoProduto + 100}`
    PreçoDoProduto += 100

    total.innerHTML = `R$${PreçoDoProduto}`
})
