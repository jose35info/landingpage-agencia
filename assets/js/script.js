function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}

let time = 3000,
currentImageIndex = 0,
images = document
         .querySelectorAll("#slider img"),
max = images.length;
         
function nextImage() {
    images[currentImageIndex].classList.remove("selected");
    currentImageIndex++;
    if (currentImageIndex >= max)
        currentImageIndex = 0;
    images[currentImageIndex].classList.add("selected");
}

function start() {
    setInterval(nextImage, time); // Usando setInterval para chamar nextImage a cada 2000ms (2 segundos)
}

window.addEventListener("load", start);


const cardsContainer = document.getElementById('cards-container');
const cards = cardsContainer.querySelectorAll('.container');
let currentCardIndex = 0;
const intervaloDeTempo = 5000; // Tempo em milissegundos (5 segundos neste caso)

// function trocarParaProximoCard() {
//     // Esconde o card atual
//     cards[currentCardIndex].style.display = 'none';

//     // Incrementa o índice para mostrar o próximo card
//     currentCardIndex++;

//     // Se chegarmos ao último card, voltamos para o primeiro
//     if (currentCardIndex >= cards.length) {
//         currentCardIndex = 0;
//     }

//     // Mostra o próximo card
//     cards[currentCardIndex].style.display = 'block';
// }

// // Inicialmente, esconde todos os cards, exceto o primeiro
// for (let i = 1; i < cards.length; i++) {
//     cards[i].style.display = 'none';
// }

// // Configura um temporizador para trocar os cards automaticamente
// setInterval(trocarParaProximoCard, intervaloDeTempo);

// seção meus depoimentos//
// Função para verificar se a seção está visível

  