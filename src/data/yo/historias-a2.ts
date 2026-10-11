import type { StorySeed } from '../types';

/**
 * Histórias do A2: a do A2.1 foi montada só com frases já revisadas da unidade do mercado (curriculo.ts, A2.1);
 * a do A2.2 acompanha a unidade da família (fontes no comentário dela).
 */
export const STORIES_YO_A2: StorySeed[] = [
  {
    id: 'yo-h07',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Ẹja ní ọjà',
    emoji: '🐟',
    summary: 'Numa feira de Ibadan, você compra peixe e laranjas e pechincha o preço com a vendedora.',
    cultural_context:
      'Na feira iorubá (ọjà), pechinchar faz parte da conversa: a vendedora diz um preço alto, o comprador reclama com bom humor, e os dois chegam a um meio-termo. Cumprimentar antes de perguntar o preço é sinal de educação.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ẹ kú àbọ̀ o, ẹ wá ra ọjà! Kí ni ẹ fẹ́ rà lónìí?',
        translation: 'Bem-vindo, venha comprar! O que o senhor quer comprar hoje?',
        emoji: '🧺',
        choices: [
          { text: 'Mo fẹ́ ra ẹja méjì àti ọsàn mẹ́wàá.', translation: 'Quero comprar dois peixes e dez laranjas.', next: 'preco' },
          { text: 'Ọmọ ọdún mẹ́ẹ̀ẹ́dógún ni àbúrò mi.', translation: 'O meu irmão mais novo tem quinze anos.', wrong: 'A vendedora perguntou o que você quer comprar, não a idade do seu irmão.' },
        ],
      },
      preco: {
        text: 'Ẹja yìí dára gan-an. Ẹgbẹ̀rún méjì náírà ni.',
        translation: 'Este peixe está ótimo. São duas mil nairas.',
        emoji: '💸',
        choices: [
          { text: 'Ó wọ́n jù! Ẹ jọ̀ọ́, ẹ dín in kù díẹ̀.', translation: 'Está caro demais! Por favor, abaixe um pouco.', next: 'desconto' },
          { text: 'Mẹ́ta àti mẹ́ta jẹ́ mẹ́fà.', translation: 'Três e três são seis.', wrong: 'Na feira se pechincha: reclame do preço com “Ó wọ́n jù!” e peça desconto.' },
        ],
      },
      desconto: {
        text: 'Ó dáa.',
        translation: 'Está bem.',
        emoji: '🤝',
        choices: [
          { text: 'Ó dáa, mo máa rà á. Ẹ ṣé!', translation: 'Está bem, vou levar. Obrigado!', next: 'final_bom' },
          { text: 'Mi ò ní owó tó bẹ́ẹ̀.', translation: 'Não tenho tanto dinheiro.', wrong: 'A vendedora já aceitou baixar o preço: agora é hora de fechar a compra.' },
        ],
      },
      final_bom: {
        text: 'Ẹ ṣé o!',
        translation: 'Obrigada!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Negócio fechado!', message: 'Você pechinchou como se faz no ọjà e saiu com o peixe e as laranjas.' },
      },
    },
    glossary: [
      ['ọjà', 'feira, mercado'],
      ['èló', 'quanto (custa)?'],
      ['Ó wọ́n jù!', 'Está caro demais!'],
      ['ẹ dín in kù díẹ̀', 'abaixe um pouco (o preço)'],
      ['Ó dáa', 'está bem'],
    ],
  },
  /*
   * História do A2.2 (10/10/2026), sobre a unidade da família. Os fatos do casamento vêm da Wikipédia
   * em iorubá («Àṣà Yorùbá»: o casamento une as famílias dos dois lados; os convidados “jogam”
   * dinheiro, fọ́n owó, sobre os noivos, e alguém recolhe as notas, gba owó náà láti ilẹ̀, e põe num
   * saco, fi sínú àpò, para o casal) e da Wikipédia em inglês («Yoruba traditional wedding»: o noivo
   * e os amigos se prostram diante da família da noiva; a noiva se ajoelha para cumprimentar e põe
   * o fìlà na cabeça do noivo; o asoebi). “Ìyàwó àti ọkọ ìyàwó” (a noiva e o noivo) e “tọkọtaya náà”
   * (o casal) como na Wikipédia em iorubá («Àṣà Yorùbá»). Palavras e tons conferidos no Wikcionário em inglês
   * (dọ̀bálẹ̀, kúnlẹ̀, jó, fìlà, ìgbéyàwó, tàbí). As frases são montadas por mim com as regras e
   * frases já revisadas do pacote (unidades A1.1 a A2.2, histórias yo-h01 e yo-h04 e os tópicos de
   * gramática), sem nenhuma construção nova.
   */
  {
    id: 'yo-h08',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Ìgbéyàwó Bọ́lá',
    emoji: '💍',
    summary: 'Em Ibadan, o Linu vai ao casamento da irmã mais velha da amiga Kẹ́mi, conhece a família dela e aprende a separar ẹ̀gbọ́n de àbúrò.',
    cultural_context:
      'Para os iorubás, o casamento (ìgbéyàwó) não une só o marido e a esposa: une as famílias dos dois lados. Na festa, o noivo e os amigos se prostram no chão (dọ̀bálẹ̀) diante da família da noiva, e a noiva se ajoelha (kúnlẹ̀) para cumprimentar os pais e o noivo; depois ela põe o fìlà, o gorro tradicional, na cabeça dele. Amigos e parentes vão com roupas do mesmo tecido, o asoebi. Enquanto os noivos dançam, os convidados “jogam” notas de dinheiro sobre eles (fọ́n owó), em sinal de alegria, e alguém recolhe as notas do chão para o casal.',
    start: 'start',
    glossary: [
      ['ìgbéyàwó', 'casamento (“ì-gbé-yà-wó”: o “gb” é uma batida só)'],
      ['ìyàwó / ọkọ', 'esposa, noiva / marido'],
      ['ọkọ ìyàwó', 'o noivo (“o marido da noiva”)'],
      ['tọkọtaya', 'o casal, marido e mulher'],
      ['ẹ̀gbọ́n / àbúrò', 'irmão ou irmã mais velha / mais nova (vale a idade, não o sexo)'],
      ['ẹbí', 'família, parentes'],
      ['tàbí', 'ou'],
      ['àti / sì', 'e (entre nomes) / e (entre frases, depois do sujeito)'],
      ['dọ̀bálẹ̀ / kúnlẹ̀', 'prostrar-se / ajoelhar-se'],
      ['fọ́n owó', '“jogar” dinheiro sobre os noivos, na dança'],
      ['àlejò', 'convidado, visitante'],
    ],
    nodes: {
      start: {
        emoji: '🏡',
        text: 'Ìbàdàn. Lónìí ni ìgbéyàwó Bọ́lá. Bọ́lá ni ẹ̀gbọ́n Kẹ́mi, ọ̀rẹ́ Linu.',
        translation: 'Ibadan. Hoje é o casamento da Bọ́lá. A Bọ́lá é a irmã mais velha da Kẹ́mi, amiga do Linu.',
        choices: [
          { text: 'Linu wọ aṣọ tuntun, ó sì lọ sí ìgbéyàwó náà.', translation: 'O Linu veste uma roupa nova e vai ao casamento.', next: 'ebi' },
          { text: 'Linu kọ́kọ́ ra ẹ̀bùn fún ìyàwó àti ọkọ ìyàwó.', translation: 'O Linu primeiro compra um presente para a noiva e o noivo.', next: 'ebun' },
        ],
      },
      ebun: {
        emoji: '🎁',
        text: 'Linu ra ẹ̀bùn kan fún ìyàwó àti ọkọ ìyàwó.',
        translation: 'O Linu compra um presente para a noiva e o noivo.',
        choices: [{ text: 'Linu lọ sí ìgbéyàwó náà.', translation: 'O Linu vai ao casamento.', next: 'ebi' }],
      },
      ebi: {
        emoji: '👨🏾‍👩🏾‍👧🏾',
        text: 'Kẹ́mi rẹ́rìn-ín: “O káàbọ̀, Linu! Èyí ni bàbá mi, èyí sì ni ìyá mi.”',
        translation: 'A Kẹ́mi sorri: “Bem-vindo, Linu! Este é o meu pai, e esta é a minha mãe.”',
        choices: [
          { text: '“Ẹ kú ọ̀sán, Bàbá! Ẹ kú ọ̀sán, Màmá!”', translation: '“Boa tarde, senhor! Boa tarde, senhora!”', next: 'baba' },
          {
            text: '“O ṣé, Bàbá!”',
            translation: '“Valeu, senhor!”',
            wrong: '“O ṣé” é o obrigado entre amigos, e nem é cumprimento. Aos pais da Kẹ́mi, que são mais velhos, cumprimente com respeito: “Ẹ kú ọ̀sán, Bàbá! Ẹ kú ọ̀sán, Màmá!”.',
          },
        ],
      },
      baba: {
        emoji: '👨🏾',
        text: 'Bàbá Kẹ́mi rẹ́rìn-ín: “Ṣé o ní ẹ̀gbọ́n tàbí àbúrò, Linu?”',
        translation: 'O pai da Kẹ́mi sorri: “Você tem irmãos mais velhos ou mais novos, Linu?”',
        choices: [
          { text: '“Mo ní ẹ̀gbọ́n kan àti àbúrò méjì, Bàbá.”', translation: '“Tenho um irmão mais velho e dois mais novos, senhor.”', next: 'iyawo' },
          {
            text: '“Mo ní ìyá àgbà méjì, Bàbá.”',
            translation: '“Tenho duas avós, senhor.”',
            wrong: 'O pai da Kẹ́mi perguntou por “ẹ̀gbọ́n tàbí àbúrò”, os irmãos mais velhos ou mais novos, e não pelas avós (ìyá àgbà). Responda com “Mo ní ẹ̀gbọ́n… àti àbúrò…”.',
          },
        ],
      },
      iyawo: {
        emoji: '💃🏾',
        text: 'Ìyàwó àti ọkọ ìyàwó dé! Túndé àti àwọn ọ̀rẹ́ rẹ̀ dọ̀bálẹ̀. Bọ́lá kúnlẹ̀. Kẹ́mi bèèrè: “Linu, ta ni ọkọ Bọ́lá?”',
        translation: 'A noiva e o noivo chegaram! O Túndé e os amigos dele se prostram no chão. A Bọ́lá se ajoelha. A Kẹ́mi pergunta: “Linu, quem é o marido da Bọ́lá?”',
        choices: [
          { text: '“Túndé ni ọkọ rẹ̀.”', translation: '“O Túndé é o marido dela.”', next: 'egbon' },
          {
            text: '“Túndé ni ìyàwó rẹ̀.”',
            translation: '“O Túndé é a esposa dela.”',
            wrong: '“Ìyàwó” é a esposa, a noiva: a Bọ́lá. O noivo, o marido, é “ọkọ”: “Túndé ni ọkọ rẹ̀”.',
          },
        ],
      },
      egbon: {
        emoji: '👭🏾',
        text: 'Kẹ́mi rẹ́rìn-ín: “Ta ni ẹ̀gbọ́n, ta ni àbúrò: èmi tàbí Bọ́lá?”',
        translation: 'A Kẹ́mi ri: “Quem é a mais velha, quem é a mais nova: eu ou a Bọ́lá?”',
        choices: [
          { text: '“Bọ́lá ni ẹ̀gbọ́n rẹ, ìwọ sì ni àbúrò rẹ̀.”', translation: '“A Bọ́lá é a sua irmã mais velha, e você é a irmã mais nova dela.”', next: 'owo' },
          {
            text: '“Ìwọ ni ẹ̀gbọ́n Bọ́lá.”',
            translation: '“Você é a irmã mais velha da Bọ́lá.”',
            wrong: 'No começo da história: “Bọ́lá ni ẹ̀gbọ́n Kẹ́mi”, a Bọ́lá é a irmã mais velha da Kẹ́mi. Então a Kẹ́mi é a àbúrò, a mais nova.',
          },
        ],
      },
      owo: {
        emoji: '💸',
        text: 'Ìyàwó àti ọkọ ìyàwó ń jó. Gbogbo ènìyàn ń kọrin, wọ́n sì ń jó! Àwọn àlejò ń fọ́n owó.',
        translation: 'A noiva e o noivo estão dançando. Todo mundo canta e dança! Os convidados “jogam” dinheiro sobre eles.',
        choices: [
          { text: 'Linu fọ́n owó, ó sì jó pẹ̀lú ẹbí Kẹ́mi.', translation: 'O Linu “joga” dinheiro e dança com a família da Kẹ́mi.', next: 'final_bom' },
          { text: 'Linu gba owó náà láti ilẹ̀, ó sì fi sínú àpò rẹ̀.', translation: 'O Linu pega o dinheiro do chão e põe na bolsa dele.', next: 'final_owo' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Wọ́n jó títí di alẹ́. Bọ́lá àti Túndé sọ pé: “Ẹ ṣé o, Linu!”',
        translation: 'Eles dançam até a noite. A Bọ́lá e o Túndé dizem: “Obrigado, Linu!”',
        ending: { tone: 'bom', title: 'Festa de família', message: 'O Linu cumprimentou os pais da Kẹ́mi com respeito, separou ẹ̀gbọ́n de àbúrò e “jogou” dinheiro nos noivos, como manda a festa.' },
      },
      final_owo: {
        emoji: '😳',
        text: 'Kẹ́mi rẹ́rìn-ín: “Linu! Owó náà kì í ṣe tìrẹ: ti tọkọtaya náà ni!”',
        translation: 'A Kẹ́mi ri: “Linu! O dinheiro não é seu: é do casal!”',
        ending: { tone: 'neutro', title: 'Dinheiro dos noivos', message: 'As notas jogadas na dança são para o casal: quem as recolhe do chão guarda tudo para os noivos. Da próxima vez, jogue o seu dinheiro e dance!' },
      },
    },
  },
];
