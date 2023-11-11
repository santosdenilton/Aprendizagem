// Por Denilton Santos - para desafio de código do DIO

// informações em arrays
const nomesHerois = ["Jinx", "Soraka", "Katarina", "Ahri", "Akali"];
const xpHerois = [8659, 1569, 5321, 2898, 10892];
const posicaoHerois = ["Atiradora", "Suporte", "Jungle", "Maga", "Lutadora"];
const lineHerois = ["Bot", "Bot", "Selva", "Mid", "Solo"];
const tipoAtaqueHerois = ["Físico-Crítico", "Mágico", "Mágico", "Mágico", "Mágico"];
const hpHerois = ["3802", "5056", "4128", "5679", "7987"];

// Função para verificar o nível com base na XP
function verificarNivelXP(xp) {
  if (xp < 1000) {
    return "Ferro";
  } else if (xp >= 1001 && xp <= 2000) {
    return "Bronze";
  } else if (xp >= 2001 && xp <= 5000) {
    return "Prata";
  } else if (xp >= 5001 && xp <= 7000) {
    return "Ouro";
  } else if (xp >= 7001 && xp <= 8000) {
    return "Platina";
  } else if (xp >= 8001 && xp <= 9000) {
    return "Ascendente";
  } else if (xp >= 9001 && xp <= 10000) {
    return "Imortal";
  } else {
    return "Radiante";
  }
}

// Iteração
for (let i = 0; i < nomesHerois.length; i++) {
  const heroi = nomesHerois[i];
  const xp = xpHerois[i];
  const posicao = posicaoHerois[i];
  const line = lineHerois[i];
  const tipoAtaque = tipoAtaqueHerois[i];
  const hp = hpHerois[i];
  const nivel = verificarNivelXP(xp);

// Apresentação dos resultados detalhados
  console.log("Herói: " + heroi + " tem nível " + nivel + " com " + xp + " de experiência e " + hp + " pontos de vida")
  console.log("   Tem a função de " + posicao)
  console.log("   Tendo como força " + tipoAtaque)
  console.log("   Normalmente vai na rota " + line)
}

//Resultado:

//Herói: Jinx tem nível Ascendente com 8659 de experiência e 3802 pontos de vida
//Tem a função de Atiradora
//Tendo como força Físico-Crítico
//Normalmente vai na rota Bot
//Herói: Soraka tem nível Bronze com 1569 de experiência e 5056 pontos de vida  
//Tem a função de Suporte
//Tendo como força Mágico
//Normalmente vai na rota Bot
//Herói: Katarina tem nível Ouro com 5321 de experiência e 4128 pontos de vida  
//Tem a função de Jungle
//Tendo como força Mágico
//Normalmente vai na rota Selva
//Herói: Ahri tem nível Prata com 2898 de experiência e 5679 pontos de vida     
//Tem a função de Maga
//Tendo como força Mágico
//Normalmente vai na rota Mid
//Herói: Akali tem nível Radiante com 10892 de experiência e 7987 pontos de vida
//Tem a função de Lutadora
//Tendo como força Mágico
//Normalmente vai na rota Solo