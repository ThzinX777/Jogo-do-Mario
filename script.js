// Selecionando os elementos necessários
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

// Função para o Mario pular
const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
};

// Loop para verificar colisão e parar o jogo
const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition < 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './img/gameover.png';
        mario.style.width = '75px';o
        mario.style.marginLeft = '50px';

        clearInterval(loop); // Parando o loop
    }
}, 10);

// Adicionando o evento de teclado
document.addEventListener('keydown', jump);
