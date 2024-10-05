let contagemAluguel = 0; // Variável global para contar os cliques

function alterarStatus(id) {
    let altera = document.getElementById(`game-${id}`);
    let imagem = altera.querySelector('.dashboard__item__img');
    let botao = altera.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        alert('Tem certeza que deseja devolver o jogo?');
    } else {
        imagem.classList.add('dashboard__item__img--rented')
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
    }

}

const botoesAluguel = document.querySelectorAll('.dashboard__item__button');
botoesAluguel.forEach(botao => {
  botao.addEventListener('click', () => {
    if (botao.textContent === 'Alugar') {
      contagemAluguel++;
      console.log(`Os jogos foram alugados ${contagemAluguel}`);
    }
  });
});
