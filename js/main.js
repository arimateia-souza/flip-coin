let img = document.getElementById('imagem');
let btn = document.getElementById('btn');
let mensagem = document.getElementById('mensagem');


function gif() {
    mensagem.innerHTML = '';
    img.src = 'imgs/caraoucoroa.gif';
    img.alt = 'jogando moeda';
    setTimeout(function() {
        caraCoroa();
    }, 3500); 
}

function caraCoroa() {
    let numeroSorteado = parseInt(Math.random() * 10 + 1);
    console.log(numeroSorteado);
    verificaCaraCoroa(numeroSorteado);

}

function verificaCaraCoroa(numero){
    let resultado = '';
    if (numero >= 5) {
        //cara
        resultado = 'Cara';
        img.src = `imgs/${resultado}.png`;
        img.alt = resultado;
        mensagem.innerHTML = resultado;
    } else {
        //coroa
        resultado = 'Coroa';
        img.src = `imgs/${resultado}.png`;
        img.alt = resultado;
        mensagem.innerHTML = resultado;
    }
}



