let campoIdade;
let campoAventura;
let campoDrama;
let campoInvestigacao;
let campoRomance;
let campoFiccaoCientifica;
let campoDivulgacaoCientifica; //Aviso: Nunca crie variáveis com palavras especiais, tipo "ç" ou "~"
let campoSobrenatural;
let campoFantasia;
let resposta;
let caso;

function setup() {
    createCanvas(600, 400);
    createElement("h2", "Recomendador de filmes")
    createSpan("Sua Idade");
    campoIdade = createInput();
    campoAventura = createCheckbox("Gosta de Aventura?");
    campoDrama = createCheckbox("Gosta de Drama?");
    campoInvestigacao = createCheckbox("Gosta de Investigação?");
    campoRomance = createCheckbox("Gosta de Romance?");
    campoFiccaoCientifica = createCheckbox("Gosta de Ficção Científica?");
    campoDivulgacaoCientifica = createCheckbox("Gosta de Divulgação Científica?");
    campoSobrenatural = createCheckbox("Gosta de Sobrenatural?");
    campoFantasia = createCheckbox("Gosta de Fantasia?");
}

function draw() {
    background("rgb(250,249,249)");
    let idade = campoIdade.value();
    let gostaDeAventura = campoAventura.checked();
    let gostaDeDrama = campoDrama.checked();
    let gostaDeInvestigacao = campoInvestigacao.checked();
    let gostaDeRomance = campoRomance.checked();
    let gostaDeFiccaoCientifica = campoFiccaoCientifica.checked();
    let gostaDeDivulgacaoCientifica = campoDivulgacaoCientifica.checked();
    let gostaDeSobrenatural = campoSobrenatural.checked();
    let gostaDeFantasia = campoFantasia.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeAventura, gostaDeDrama, gostaDeInvestigacao, gostaDeRomance, gostaDeFiccaoCientifica, gostaDeDivulgacaoCientifica, gostaDeSobrenatural, gostaDeFantasia);

    fill("black");
    textAlign(CENTER, CENTER);
    textSize(30);
    text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeAventura, gostaDeDrama, gostaDeInvestigacao, gostaDeRomance, gostaDeFiccaoCientifica, gostaDeDivulgacaoCientifica, gostaDeSobrenatural, gostaDeFantasia) {
    if (idade < 10) {
        caso = 1;
    } else if (idade >= 10 && idade < 12) {
        caso = 2;
    } else if (idade >= 12 && idade < 15) {
        caso = 3;
    } else {
        caso = 4;
    }

    //Basicamente o "switch case" é um if "otimizado", quando o assunto é mexer com condições que envolvem apenas números. Caso o número seja 1, tal coisa, caso seja 2, outra coisa, e assim vai. Mas, não só com números, condições que não envolvem mais de um elemento ou variável também se encaixam perfeitamente no switch case.
    switch (caso) {
        case 1:
            if (gostaDeAventura == true) {
                if (gostaDeInvestigacao == true) {
                    resposta = "O Gênio do Crime (João Carlos Marinho)";
                } else if (gostaDeFiccaoCientifica == true) {
                    resposta = "Viagem ao Centro da Terra (Júlio Verne)";
                } else {
                    resposta = "A Ilha Perdida (José Dupré)";
                }
            } else {
                resposta = "Não tenho uma recomendação para você";
            }

            break; //Sempre utilize o break ao finalizar o switch case.

        case 2:
            if (gostaDeAventura == true) {
                if (gostaDeInvestigacao == true) {
                    resposta = "O Gênio do Crime (João Carlos Marinho)";
                } else if (gostaDeFiccaoCientifica == true) {
                    resposta = "Viagem ao Centro da Terra (Júlio Verne) ou O Jogador Nº 1 (Ernest                                 Cline)";
                } else if (gostaDeRomance == true) {
                    resposta = "Um Certo Capitão Rodrigo (Érico Veríssimo)";
                } else {
                    resposta = "A Ilha Perdida (José Dupré)";
                }
            } else {
                resposta = "Não tenho uma recomendação para você";
            }
            break;

        case 3:
            if (gostaDeAventura == true) {
                if (gostaDeInvestigacao == true) {
                    resposta = "O Gênio do Crime (João Carlos Marinho)";
                } else if (gostaDeFiccaoCientifica == true) {
                    resposta = "Viagem ao Centro da Terra (Júlio Verne) ou O Jogador Nº 1 (Ernest                                 Cline)";
                } else if (gostaDeRomance == true) {
                    resposta = "Um Certo Capitão Rodrigo (Érico Veríssimo)";
                } else if (gostaDeFantasia == true) {
                    resposta = "O Nome do Vento (Patrick Rothfuss)";
                } else if (gostaDeDivulgacaoCientifica == true) {
                    resposta = "Cosmos (Carl Sagan)";
                } else {
                    resposta = "A Ilha Perdida (José Dupré)";
                }
            } else if (gostaDeDrama == true) {
                if (gostaDeInvestigacao == true) {
                    resposta = "O Misterioso Caso de Styles (Agatha Cristie)";
                } else {
                    resposta = "Não tenho uma recomendação para você";
                }
            } else {
                resposta = "Não tenho uma recomendação para você";
            }
            break;

        case 4:
            if (gostaDeAventura == true) {
                if (gostaDeInvestigacao == true) {
                    resposta = "O Gênio do Crime (João Carlos Marinho)";
                } else if (gostaDeFiccaoCientifica == true) {
                    resposta = "Viagem ao Centro da Terra (Júlio Verne) ou O Jogador Nº 1 (Ernest                                 Cline)";
                } else if (gostaDeRomance == true) {
                    resposta = "Um Certo Capitão Rodrigo (Érico Veríssimo)";
                } else if (gostaDeFantasia == true) {
                    resposta = "O Nome do Vento (Patrick Rothfuss)";
                } else if (gostaDeDivulgacaoCientifica == true) {
                    resposta = "Cosmos (Carl Sagan)";
                } else {
                    resposta = "A Ilha Perdida (José Dupré)";
                }
            } else if (gostaDeDrama == true) {
                if (gostaDeInvestigacao == true) {
                    if (gostaDeRomance == true) {
                        if (gostaDeSobrenatural == true) {
                            resposta = "Princesas Mortas Não Se Apaixonam (Raíssa Selvaticci)";
                        } else {
                            resposta = "Não tenho uma recomendação para você";
                        }
                    } else {
                        resposta = "O Misterioso Caso de Styles (Agatha Cristie)";
                    }
                } else if (gostaDeFiccaoCientifica == true) {
                    resposta = "A Biblioteca da Meia-Noite (Matt Halg)";
                } else {
                    resposta = "Não tenho uma recomendação para você";
                }
            } else {
                resposta = "Não tenho uma recomendação para você";
            }
            break;

    }//Fecha Switch

    return resposta;
}


