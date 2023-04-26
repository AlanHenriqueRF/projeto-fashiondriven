let nome = prompt('Qual o seu nome ?');
let link = '';
axios.defaults.headers.common['Authorization'] = 'OdIdHp43nAdZeoW0W7UVQfKN';

function selecionablusa(elemento){
    const jaselecionado = document.querySelector('.modelo .selecionado');
    if (jaselecionado != null){
        jaselecionado.classList.remove('selecionado');
    }
    elemento.classList.add('selecionado');
    ativandobutao();
}

function selecionagola(elemento){
    const jaselecionado = document.querySelector('.gola .selecionado');
    if (jaselecionado != null){
        jaselecionado.classList.remove('selecionado');
    }
    elemento.classList.add('selecionado');
    ativandobutao();
}

function selecionatecido(elemento){
    const jaselecionado = document.querySelector('.tecido .selecionado');
    if (jaselecionado != null){
        jaselecionado.classList.remove('selecionado');
    }
    elemento.classList.add('selecionado');
    ativandobutao();
}

function verlink(elemento){
    link = elemento.value;
    ativandobutao();
}

function ativandobutao(){
    if (document.querySelectorAll('.selecionado').length === 3 && (link != '' && link.slice(0,3)=== "htt")){
        document.querySelector('button').classList.add('botaoativ');
        document.querySelector('button').removeAttribute('disabled');
    }
    else {
        document.querySelector('button').classList.remove('botaoativ');
        document.querySelector('button').setAttribute('disabled','disabled')
    }
}