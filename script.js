const buttonNao = document.querySelector('.buttonNao');
const h1 = document.querySelector('h1');
const pFrase = document.querySelector('.pFrase');
const pPergunta = document.querySelector('.pPergunta');
const buttonSim = document.querySelector('.buttonSim');
const img = document.querySelector('img');
let sim = 0;

function animeEscrever() {
    if(sim == 1) {
        pFrase.textContent = "Que bom que aceitou por livre e espontânea vontade! Agora a pergunta é a seguinte, você me ama mais do que sua familia?";
        pPergunta.textContent = "Você ama?"
    } else if (sim == 2) {
        pFrase.textContent = "Que legal! Você me ama mais do que seus amigos?";
    } else if (sim == 3) {
        pFrase.textContent = "Uhuuul! Você também me ama mais que Ryan Reynolds?";
    } else if (sim == 4) {
        pFrase.textContent = "MINHA NOSSA, por essa eu não esperava, você realmente me ama muito, mas me ama mais do que Canserbero?";
    } else if (sim == 5) {
        pFrase.textContent = "MEU DEUS, mais do que Ryan Reynolds e Canserbero juntos também?";
    } else if (sim == 6) {
        pFrase.textContent = "UAU, não sei se alguem já me amou assim, você disse SIM para todas as minhas perguntas, mesmo podendo dizer não (o que você não fez em nenhuma vez, mesmo tendo a possibilidade), você realmente gosta de mim, mas tenho algo a te dizer, está preparada?";
        pPergunta.textContent = 'Está?';
    } else if (sim == 7) {
        pFrase.textContent = "Tudo que você sente por mim, é minúsculo perto do que sinto por você meu amor, obrigado por ser uma mulher tão amável a ponto de ser impossível de expressar em palavras o que sinto por você, EU TE AMO MUITO! <3"
    }
    buttonNao.classList.add('hidden');
    buttonSim.classList.add('hidden');
    pPergunta.classList.add('hidden');

    if(sim == 7) {
        buttonNao.style.display = 'none';
        buttonSim.style.display = 'none';
        pPergunta.style.display = 'none';
        img.style.display = "block";
    }
    
    let getText = pFrase.textContent;
    let getTextInitial = pFrase.textContent;

    let textSplit = getText.split('');

    pFrase.textContent = "";

    textSplit.map((item, line) => {
        setTimeout(() => {
            pFrase.textContent += item;
            if(getTextInitial == pFrase.textContent) {
                if(sim < 7) {
                    buttonNao.classList.remove('hidden');
                    buttonSim.classList.remove('hidden');
                    pPergunta.classList.remove('hidden');
                }
            }
        }, 80 * line);
    })

}

animeEscrever();

buttonSim.addEventListener('click', () => {
    sim++;
    animeEscrever();
})

buttonNao.addEventListener('click', () => {
    buttonNao.style.color = 'red';
    buttonNao.style.borderColor = 'red';
    buttonNao.classList.add('shake');
    setTimeout(() => {
        buttonNao.classList.remove('shake');
        buttonNao.style.color = "#4b1f2d";
        buttonNao.style.borderColor = "#4b1f2d";
    }, 1000)
})
    