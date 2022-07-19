let musicas = [
    {título: 'Demons', artista:' Imagine Dragons', src:'musicas/demonsmusic.mp3'
    , img: 'images/demonsimage.jpg'},

    {título: 'Elcho', artista:' Hardwell', src:'musicas/wolfmusic.mp3 '
    , img: 'images/wolfimage.jpg'}
];


//Incio
let musica = document.querySelector('audio');
let indexmusica = 0;

let duracaomusica = document.querySelector('.fim');

let imagem = document.querySelector('img');

let nomemusica = document.querySelector('.autoria h2');

let nomeartista = document.querySelector ('.autoria i');


nomemusica.textContent = musicas[indexmusica].título;
nomeartista.textContent = musicas[indexmusica].artista;
imagem.setAttribute('src', musicas[indexmusica].img);

duracaomusica.textContent = SegundosParaMinutos(Math.floor(musica.duration));

//Eventos

document.querySelector('.botao-play').addEventListener ('click',TocarMusica);

document.querySelector('.botao-pause').addEventListener ('click',PararMusica);

musica.addEventListener("timeupdate", atualizarBarra);


document.querySelector ('.proximo').addEventListener('click',() => {
    indexmusica ++;
    if (indexmusica  > 2) {

        indexmusica = 0;

    }
    rendermusica(indexmusica);

});

document.querySelector('.anterior').addEventListener('click', () =>{
    indexmusica++;

    if (indexmusica >  0 ) {

        indexmusica = 0;
    }

    rendermusica(indexmusica);

});






//Funcoes


function rendermusica (indexmusica) {
    musica.setAttribute ('src', musicas[indexmusica].src);
    musica.addEventListener('loadeddata', () => {


        nomemusica.textContent = musicas[indexmusica].título;
        nomeartista.textContent = musicas[indexmusica].artista;
        imagem.src =  musicas[indexmusica].img;
        duracaomusica.textContent = SegundosParaMinutos(Math.floor(musica.duration));

    });


}


function TocarMusica () {
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';


}

function PararMusica () {

    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra () {

    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = SegundosParaMinutos(Math.floor(musica.currentTime));

}

function SegundosParaMinutos (segundos) {
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos;

    }

    return campoMinutos+ ':'+ campoSegundos;

}
