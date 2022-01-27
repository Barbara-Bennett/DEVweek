/*
    quando clicar na seta oara avancar temos que esconder todas 
    as imagens  e mostrar a proxima imagem 

        a imagem atual comeca no 0  porque eh a primeira imagem
        assim que for clicado no acancar eu preciso adicionar mais 1 
        ao contador de imagens para poder saber que agora eu vou mostrar 
        a segunda imagem
        
        esconder todas as imagens 
            pegar todas as imagens usando o DOM e remover a classe mostrar

        mostrar a proxima imagem
            pegar todas as imagens, descobrir qual eh a proxima e colocar
            a classe mostrar nela
*/

// const imagens = document

//console.log() para ver no site se esta no programa, usando F12 e console

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderImagens() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
}

function mostrarImagens() {
    imagensPainel[imagemAtual].classList.add('mostrar');
}


setaAvancar.addEventListener('click', function () {

    const totalDeImagens = imagensPainel.length - 1
    if (imagemAtual === totalDeImagens) {
        console.log('nao pode avancar mais')
        return;
    }

    imagemAtual++;

    esconderImagens();
    mostrarImagens();
});

setaVoltar.addEventListener('click', function () {
    if (imagemAtual === 0) {
        console.log('nao tem mais como voltar');
        return;
    }

    imagemAtual--;

    esconderImagens();
    mostrarImagens();
})