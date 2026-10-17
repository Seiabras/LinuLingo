import type { StorySeed } from '../types';

/**
 * Histórias interativas do asháninka, uma por subnível, do A1.1 ao A2.2. As do A2 citam as fontes no
 * comentário de cada uma.
 * Todas as falas são frases das fontes de vocabulario.ts (Kindberg 1980, no alfabeto oficial; MINEDU
 * 2021), com os mesmos dois encaixes de curriculo.ts (“¿Pokajimpi? — Nopokake.” e “Nojita Linu.”).
 * A primeira se passa no rio Tambo (Peru), onde se fala a variedade que Kindberg documenta; a segunda,
 * na aldeia Apiwtxa, no rio Amônia (Acre), a comunidade Ashaninka do Brasil (ISA, “Povos Indígenas no
 * Brasil — Ashaninka”: piyarentsi frequente, “geralmente todos os finais de semana”).
 */
export const STORIES_CNI: StorySeed[] = [
  {
    id: 'cni-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Kitaiteri! Chegando ao rio Tambo',
    emoji: '🛶',
    summary: 'Você desce de uma canoa numa comunidade asháninka do rio Tambo, na Selva Central do Peru, e alguém vem receber você.',
    cultural_context:
      'No asháninka, um jeito registrado de cumprimentar quem chega é perguntar “¿Pokajimpi?” — você veio? —, e a resposta é “Nopokake”, vim. De manhã, também se diz “Kitaiteri”, bom dia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Kitaiteri.',
        translation: 'Bom dia.',
        emoji: '🌅',
        choices: [
          { text: 'Kitaiteri.', translation: 'Bom dia.', next: 'veio' },
          { text: 'Tsame amaye.', translation: 'Vamos dormir (despedida da noite).', wrong: 'Isso é a despedida da noite, e você acabou de chegar. Devolva o bom dia: “Kitaiteri.”' },
        ],
      },
      veio: {
        text: '¿Pokajimpi?',
        translation: 'Você veio?',
        emoji: '👋',
        choices: [
          { text: 'Nopokake.', translation: 'Vim.', next: 'nome' },
          { text: '¿Pokajimpi?', translation: 'Você veio?', wrong: 'É a pergunta, não a resposta. Quem chegou responde com no- (eu): “Nopokake.”' },
        ],
      },
      nome: {
        text: '¿Jaoka pijitari?',
        translation: 'Como você se chama?',
        emoji: '🏷️',
        choices: [
          { text: 'Nojita Linu.', translation: 'Eu me chamo Linu.', next: 'comer' },
          { text: 'Pijitari Linu.', translation: '(você se chama Linu)', wrong: 'O prefixo pi- é “você”. Para falar de si mesmo, use no-: “Nojita Linu.”' },
        ],
      },
      comer: {
        text: 'Tsame ayea.',
        translation: 'Vamos comer.',
        emoji: '🍌',
        choices: [
          { text: 'Pasonki.', translation: 'Obrigado.', next: 'final' },
          { text: 'Te.', translation: 'Não.', wrong: 'Convidaram você para comer: agradeça com “Pasonki.”' },
        ],
      },
      final: {
        text: 'Kametsa.',
        translation: 'Que bom.',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Pasonki!',
          message: 'Você devolveu o bom dia, respondeu ao “você veio?” com “Nopokake”, disse o seu nome com “Nojita” e agradeceu o convite — uma primeira conversa inteira em asháninka.',
        },
      },
    },
    glossary: [
      ['Kitaiteri', 'bom dia'],
      ['¿Pokajimpi?', 'você veio?'],
      ['Nopokake', 'vim'],
      ['Tsame ayea', 'vamos comer'],
    ],
  },
  {
    id: 'cni-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Nojate nobankoki: uma tarde em Apiwtxa',
    emoji: '🏠',
    summary: 'Na aldeia Apiwtxa, no rio Amônia (Acre), uma família asháninka conversa com você sobre o pai e a casa, até a hora de dormir.',
    cultural_context:
      'Os Ashaninka do Brasil vivem sobretudo na Terra Indígena Kampa do Rio Amônia, no Acre, perto da fronteira com o Peru; a maior parte mora na aldeia Apiwtxa ou perto dela. Lá, a festa do masato (o “piyarentsi”, como se escreve nos textos brasileiros) acontece com frequência, muitas vezes todo fim de semana.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: '¿Pokajimpi?',
        translation: 'Você veio?',
        emoji: '👋',
        choices: [
          { text: 'Nopokake.', translation: 'Vim.', next: 'pai' },
          { text: 'Pasonki.', translation: 'Obrigado.', wrong: 'Perguntaram se você veio: responda primeiro com “Nopokake.” (vim).' },
        ],
      },
      pai: {
        text: 'Yamanantake apa aparoni tyobirimento.',
        translation: 'Meu pai comprou uma motosserra.',
        emoji: '👨',
        choices: [
          { text: 'Kametsa.', translation: 'Que bom.', next: 'casa' },
          { text: 'Tsame amaye.', translation: 'Vamos dormir (despedida).', wrong: 'Ainda é de tarde e a conversa mal começou. Comente a notícia: “Kametsa.” (bom, que bom).' },
        ],
      },
      casa: {
        text: 'Nojate nobankoki.',
        translation: 'Vou para a minha casa.',
        emoji: '🏠',
        choices: [
          { text: 'Tsame amaye.', translation: 'Vamos dormir (despedida).', next: 'final' },
          { text: 'Kitaiteri.', translation: 'Bom dia.', wrong: '“Kitaiteri” é para quando se chega, de manhã. Para se despedir no fim do dia, diga “Tsame amaye.”' },
        ],
      },
      final: {
        text: 'Pasonki.',
        translation: 'Obrigado.',
        emoji: '🌙',
        ending: {
          tone: 'bom',
          title: 'Tsame amaye!',
          message: 'Você respondeu ao “você veio?”, entendeu “apa” (meu pai) e “nobankoki” (para a minha casa) e se despediu como se faz à noite: “Tsame amaye”.',
        },
      },
    },
    glossary: [
      ['Nopokake', 'vim'],
      ['apa', 'pai'],
      ['nobankoki', 'para a minha casa (no- meu + banko + -ki para)'],
      ['Tsame amaye', 'vamos dormir (despedida)'],
    ],
  },
  {
    // falas: Kindberg 1980, p. 466 (¿Jaoca pijateri?; ¿Impoquempa?; Impoquerica, te nioteji), p. 107
    // (Nojate novancoqui), p. 462 (Oparii incani caari nopocanta), p. 18 (Tsame ayea), p. 359 (pasonqui);
    // MINEDU 2021, p. 68 (Osaitekera nojate noñeri sheripiyari — primeira oração da frase); escolas:
    // CPI-Acre, página “Ashaninka” (Escola Samuel Piãnko)
    id: 'cni-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: '¿Impokempa? Esperando o amigo',
    emoji: '⏳',
    summary: 'No fim da aula, na aldeia Apiwtxa, um colega pergunta aonde você vai, conta o que fará amanhã e espera com você um amigo que está atrasado.',
    cultural_context:
      'Na aldeia Apiwtxa, no rio Amônia (Acre), a escola é a Escola Samuel Piãnko, e as aulas são em asháninka. No asháninka, o futuro e a dúvida usam a mesma forma do verbo: “impoke” é “ele virá”, “¿impokempa?” é “será que ele vem?” e “impokerika”, “talvez ele venha”.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: '¿Jaoka pijateri?',
        translation: 'Aonde você vai?',
        emoji: '🏫',
        choices: [
          { text: 'Nojate nobankoki.', translation: 'Vou para a minha casa.', next: 'amanha' },
          { text: 'Nopokake.', translation: 'Vim.', wrong: '“Nopokake” é “vim”, e perguntaram aonde você VAI. Use “nojate” (vou): “Nojate nobankoki.”' },
        ],
      },
      amanha: {
        text: 'Osaitekera nojate noñeri sheripiyari.',
        translation: 'Amanhã vou visitar o curandeiro.',
        emoji: '🌿',
        choices: [
          { text: 'Kametsa.', translation: 'Que bom.', next: 'amigo' },
          { text: 'Oshaite.', translation: 'Ontem.', wrong: 'Ele falou de amanhã, “osaitekera”; “oshaite” é ontem. Comente a notícia: “Kametsa.”' },
        ],
      },
      amigo: {
        text: '¿Impokempa?',
        translation: 'Será que ele (o seu amigo) vem?',
        emoji: '🤔',
        choices: [
          { text: 'Impokerika, te nioteji.', translation: 'Talvez venha, não sei.', next: 'chegou' },
          { text: 'Te nojateji.', translation: 'Eu não fui.', wrong: '“Te nojateji” é “eu não fui”. A pergunta é se o amigo vem: “Impokerika, te nioteji.” (talvez venha, não sei).' },
        ],
      },
      chegou: {
        text: 'Opari inkani kaari nopokanta.',
        translation: 'Choveu; por isso não vim (antes).',
        emoji: '🌧️',
        choices: [
          { text: 'Tsame ayea.', translation: 'Vamos comer.', next: 'final' },
          { text: 'Eiro pijatitsi.', translation: 'Não vá.', wrong: 'O seu amigo acabou de chegar e não está indo embora. Convide para comer: “Tsame ayea.”' },
        ],
      },
      final: {
        text: 'Pasonki.',
        translation: 'Obrigado.',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Impoke!',
          message: 'Você disse aonde ia, entendeu o “osaitekera” (amanhã), respondeu à dúvida com “impokerika” (talvez venha) e entendeu o “por isso não vim” do seu amigo, com o -ant- de “nopokanta”.',
        },
      },
    },
    glossary: [
      ['¿Jaoka pijateri?', 'aonde você vai?'],
      ['osaitekera', 'amanhã'],
      ['¿Impokempa?', 'será que ele vem?'],
      ['Impokerika, te nioteji', 'talvez venha, não sei'],
      ['kaari nopokanta', 'por isso não vim'],
      ['ayompari', 'amigo'],
    ],
  },
  {
    // falas: Kindberg 1980, p. 112 (Nojate nomanaveete), p. 122 (Noneapaaqueri shintori), p. 118
    // (Nomotoncaqueri quemari te naaveriji), p. 383 (malo: te incameetsateji), p. 81 (Navitataqueri shima),
    // p. 121 (Noneamataro noari, coriqui — aqui só a primeira parte), p. 18 (Tsame ayea), p. 11 (Tsame
    // amaye); caça na Apiwtxa: ISA, “Ashaninka” (rodízio das áreas de caça desde 1992)
    id: 'cni-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Nojate nomanabete: um dia na mata',
    emoji: '🏹',
    summary: 'Um caçador asháninka chama você para a mata: vocês veem um cateto, a flecha erra a anta e o dia termina com peixe assado.',
    cultural_context:
      'Para os asháninka, a mata (“antami”) é de onde vêm a caça, o peixe e as frutas. No rio Amônia, a associação Apiwtxa faz um rodízio das áreas de caça e mantém zonas de refúgio, para que os bichos não acabem.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Nojate nomanabete.',
        translation: 'Vou caçar.',
        emoji: '🏹',
        choices: [
          { text: 'Tsame.', translation: 'Vamos.', next: 'cateto' },
          { text: 'Tsame amaye.', translation: 'Vamos dormir (despedida da noite).', wrong: '“Tsame amaye” é a despedida da noite. Para ir junto, diga só “Tsame.” (vamos).' },
        ],
      },
      cateto: {
        text: 'Noneapakeri shintori.',
        translation: 'Quando cheguei, vi o cateto.',
        emoji: '🐗',
        choices: [
          { text: 'Kametsa.', translation: 'Que bom.', next: 'anta' },
          { text: 'Nomai.', translation: 'Dormir.', wrong: '“Nomai” é dormir, e ninguém está com sono no meio da caçada. Comente a boa notícia: “Kametsa.”' },
        ],
      },
      anta: {
        text: 'Nomotonkakeri kemari te naberiji.',
        translation: 'Atiro a flecha na anta, mas não a pego.',
        emoji: '🐾',
        choices: [
          { text: 'Te inkametsateji.', translation: 'Que pena (não é bom).', next: 'peixe' },
          { text: 'Kametsa.', translation: 'Que bom.', wrong: 'A flecha errou a anta: isso não é bom. Diga “Te inkametsateji.” — com o te … -ji da negação.' },
        ],
      },
      peixe: {
        text: 'Nabitatakeri shima.',
        translation: 'Os peixes estão presos numa taquara partida, para assar.',
        emoji: '🐟',
        choices: [
          { text: 'Tsame ayea.', translation: 'Vamos comer.', next: 'final' },
          { text: 'Ijajeitake.', translation: 'Foram todos.', wrong: 'Ninguém foi embora: os peixes estão prontos para assar. Convide: “Tsame ayea.”' },
        ],
      },
      final: {
        text: 'Noneamataro noari.',
        translation: 'Gosto da comida.',
        emoji: '🔥',
        ending: {
          tone: 'bom',
          title: 'Tsame ayea!',
          message: 'Você foi caçar (“nomanabete”), entendeu o cateto e a anta, usou a negação “te inkametsateji” quando a flecha errou e terminou o dia com peixe assado.',
        },
      },
    },
    glossary: [
      ['nomanabete', 'caçar'],
      ['shintori', 'cateto'],
      ['kemari', 'anta'],
      ['te inkametsateji', 'não é bom, é mau'],
      ['shima', 'peixe'],
    ],
  },
];
