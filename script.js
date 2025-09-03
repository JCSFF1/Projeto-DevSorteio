const botaoSorteador = document.querySelector(".sorteador")
const aparente = document.querySelector(".aparente")
const ocultada = document.querySelector(".oculta")
const sorteado = document.querySelector(".sorteado")
const novoSorteio = document.querySelector(".reiniciar")
const botaoRecomeco = document.querySelector(".novo")


function sorteio() {
    const min = Math.ceil(document.querySelector(".primeiro-numero").value)
    const max = Math.floor(document.querySelector(".segundo-numero").value)
    
    const resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    
    aparente.style.display = "none"
    ocultada.style.display = "flex"
    sorteado.innerHTML = resultado
    novoSorteio.style.display = "flex"
}

function reiniciar() {
    window.location.reload();
}


botaoRecomeco.addEventListener("click", reiniciar)
botaoSorteador.addEventListener("click", sorteio)