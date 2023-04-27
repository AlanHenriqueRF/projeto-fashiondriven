let nome = prompt('Qual o seu nome ?');
let modelo, gola, tecido, obj;
let link = '';

axios.defaults.headers.common['Authorization'] = 'OdIdHp43nAdZeoW0W7UVQfKN';

function selecionablusa(elemento){
    const jaselecionado = document.querySelector('.modelo .selecionado');
    if (jaselecionado != null){
        jaselecionado.classList.remove('selecionado');
    }
    modelo = elemento.parentNode.innerText

    if (modelo === 'T-shirt'){
        modelo = "t-shirt"
    }else if(modelo === 'Camiseta'){
        modelo = "top-tank"
    }else{modelo = "long"}

    elemento.classList.add('selecionado');
    ativandobutao();
}

function selecionagola(elemento){
    const jaselecionado = document.querySelector('.gola .selecionado');
    if (jaselecionado != null){
        jaselecionado.classList.remove('selecionado');
    }
    gola = elemento.parentNode.innerText

    if (gola === 'Gola V'){
        gola = "v-neck";
    }else if(gola === 'Gola Redonda'){
        gola = "round";
    }else{gola = "polo";}

    elemento.classList.add('selecionado');
    ativandobutao();
}

function selecionatecido(elemento){
    const jaselecionado = document.querySelector('.tecido .selecionado');
    if (jaselecionado != null){
        jaselecionado.classList.remove('selecionado');
    }
    tecido = elemento.parentNode.innerText

    if (tecido === 'Seda'){
        tecido = "silk";
    }else if(tecido === 'Algodão'){
        tecido = "cotton";
    }else{tecido = "polyester"}
    
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
let x = ''
function pedeblusa(){
    let obj = {
        "model": modelo,
        "neck": gola,
        "material": tecido,
        "image": link,
        "owner": nome,
        "author": nome
    }
    let promessa = axios.post('https://mock-api.driven.com.br/api/v4/shirts-api/shirts',obj)   
    promessa.then(pediublusa)
    promessa.catch(deuruin)
}

function deuruin(erro){
    // alert(`O status do pedido é ${erro.response.status===422}.`);
    if (erro.response.status === 422){
        document.querySelector('.clothes').classList.add('some')
        let blocoblusa = document.querySelector('.blusa')
        blocoblusa.classList.remove('some')
        blocoblusa.innerHTML = `<h1>Algo deu errado!</h1><p class="p_cima">Um passarinho me contou que a imagem não é válida. Tente novamente!</p><img class="imgerro" src="./projeto__fashiondriven__imagens/image 1.png"><p>Voltando para a página principal em 10s</p>`;

        setTimeout(depoisdos10erro,10000);
    }
}

function pediublusa(resposta){
    // alert(`O status do pedido é ${resposta.status }.`);
    if (resposta.status === 201){
        document.querySelector('.clothes').classList.add('some')
        let blocoblusa = document.querySelector('.blusa')
        blocoblusa.classList.remove('some')
        blocoblusa.innerHTML = `<h1>Pedido feito com sucesso!</h1><img src="${resposta.data.image}"><p>Voltando para a página principal em 10s</p>`;

        setTimeout(depoisdos10,10000);
    }
}

function depoisdos10erro(){
    document.querySelector('.clothes').classList.remove('some');
    document.querySelector('.blusa').classList.add('some');
}

function depoisdos10(){
    document.querySelector('.clothes').classList.remove('some')
    document.querySelector('.blusa').classList.add('some')
    document.querySelector('input').value = '';
    document.querySelector('input').placeholder = placeholder=" Insira o link";
    document.querySelector('button').classList.remove('botaoativ');
    document.querySelector('button').setAttribute('disabled','disabled');

    link = '';
    while (document.querySelector('.selecionado') != null){
        document.querySelector('.selecionado').classList.remove('selecionado')
    }
}