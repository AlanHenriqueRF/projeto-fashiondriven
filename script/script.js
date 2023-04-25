let nome = prompt('Qual o seu nome ?')

function selecionablusa(elemento){
    const jaselecionado = document.querySelector('.modelo .selecionado')
    if (jaselecionado != null){
        jaselecionado.classList.remove('selecionado')
    }
    elemento.classList.add('selecionado')
}

function selecionagola(elemento){
    const jaselecionado = document.querySelector('.gola .selecionado')
    if (jaselecionado != null){
        jaselecionado.classList.remove('selecionado')
    }
    elemento.classList.add('selecionado')

}

function selecionatecido(elemento){
    const jaselecionado = document.querySelector('.tecido .selecionado')
    if (jaselecionado != null){
        jaselecionado.classList.remove('selecionado')
    }
    elemento.classList.add('selecionado')
}

