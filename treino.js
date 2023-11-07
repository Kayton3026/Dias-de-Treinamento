const name = "Kayton";// meu nome 

function getEventoAleatorio() { //função para gerar o evento aleatorio 
    const numeroAleatorio = Math.floor(Math.random() * 3);
    if (numeroAleatorio === 0) {
        return "Maratona";
    } else if (numeroAleatorio === 1)
        return "Triathlon";
    else if (numeroAleatorio === 2) {
        return "Pentathlon";
    } else {
        return "Evento não encontrado";
    }
}
const evento = getEventoAleatorio();/// variavel evento recebendo função getEventoAleatorio 

function getDiasTreino(evento) {// função com os dias de treino de cada evento 
    if (evento === "Maratona") {
        return 50;
    } else if (evento === "Triathlon") {
        return 100;
    } else if (evento === "Pentathlon") {
        return 200;
    } else {
        return "Evento não encontrado";
    }
}

const dias = getDiasTreino(evento); // variavel dias recebendo função getDiasTreino 

function logEvento(nomeAtleta, evento) {// função que mostra qual evento o atleta vai participar
    console.log(`Olá ${nomeAtleta}, você vai participar do evento ${evento}.`);
}
function logTempo(nomeAtleta, dias) { // função que mostra o tempo de treino do atleta 
    console.log(`${nomeAtleta}, seu treino vai ser de ${dias} dias. Bom Treino!`);
}

const nomeAtleta = "Renato Augusto";// nome do atleta 
logEvento(nomeAtleta, evento);//chamando a função
logTempo(nomeAtleta, dias);//chamando a função
