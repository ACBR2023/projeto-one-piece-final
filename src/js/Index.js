const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        const botaoselecionado = document.querySelector(".botao.selecionado");
        
        // Remova a classe 'selecionado' do botão atualmente selecionado (se houver).
        if (botaoselecionado) {
            botaoselecionado.classList.remove("selecionado");
        }

        // Adicione a classe 'selecionado' ao botão clicado.
        botao.classList.add("selecionado");

        // Remova a classe 'selecionado' de todos os personagens.
        personagens.forEach(personagem => {
            personagem.classList.remove("selecionado");
        });

        // Adicione a classe 'selecionado' apenas ao personagem correspondente ao botão.
        personagens[indice].classList.add("selecionado");
    });
});

