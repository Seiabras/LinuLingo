import type { UnitSeed } from '../types';

/**
 * Trilha do crioulo haitiano: por enquanto só as duas unidades do nível A1 (pacote incompleto — ver
 * `incomplete` em index.ts). Fontes da história e da cultura: Wikipédia (inglês), artigo “Haitian
 * Creole” (origem em Saint-Domingue nos séculos XVII-XVIII, no contato entre colonos franceses e
 * africanos escravizados; ~13 milhões de falantes nativos em 2020; a Constituição de 1987 tornou o
 * crioulo língua nacional e oficial ao lado do francês; ortografia fonêmica oficial desde 1979, com 32
 * símbolos; diglossia histórica entre o francês “alto” e o crioulo “baixo”); e Wiktionary, para as
 * etimologias francesas, taino e bantas citadas no guia de caracteres e nas dicas de cultura.
 */
export const UNITS_HT: UnitSeed[] = [
  {
    id: 'ht-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Bonjou! Premye pa yo',
    emoji: '👋',
    card: {
      id: 'ht-c1',
      title: 'A língua que todo haitiano tem em comum',
      emoji: '🇭🇹',
      history:
        'O crioulo haitiano (kreyòl ayisyen) nasceu em Saint-Domingue, a colônia francesa que depois virou o Haiti, no contato entre colonos franceses e africanos escravizados, entre os séculos XVII e XVIII. A maior parte do vocabulário vem do francês do século XVIII, mas a gramática — segundo a Wikipédia, artigo “Haitian Creole” — segue o padrão de línguas da África Ocidental do ramo Volta-Congo, sobretudo o fon e o igbo: o verbo não muda por pessoa, e palavrinhas antes dele marcam o tempo. A Constituição de 1987 tornou o crioulo língua nacional do Haiti, oficial ao lado do francês; hoje é a língua materna de praticamente todo haitiano (cerca de 13 milhões de falantes em 2020) e, segundo a própria Wikipédia, “a única língua que todos os haitianos têm em comum” — o francês, por séculos considerado a língua “alta”, nunca chegou a ser falado com fluência pela maioria da população.',
      culture_tip:
        'Por muito tempo o francês foi visto como a língua da escola e do governo, e o crioulo como a língua de casa e da rua — uma diglossia que vem mudando devagar desde 1987. Em 28 de outubro de 2004, no “Dia do Crioulo”, o jornal Le Matin publicou pela primeira vez uma edição inteira em crioulo haitiano.',
      grammar_why:
        'O crioulo haitiano não conjuga o verbo: é sempre “mwen pale”, “ou pale”, “li pale” — o verbo fica igual, e por isso o pronome nunca pode faltar. Para “ser”, há duas formas: “se” no meio da frase e “ye” no fim, como em “Kijan ou ye?” (como você está?, literalmente “como você é”).',
      grammar_examples: [
        ['Bonjou! Mwen rele Ana.', 'Oi! Eu me chamo Ana.'],
        ['Kijan ou rele?', 'Como você se chama?'],
        ['Kijan ou ye?', 'Como você está?'],
        ['Mwen byen, mèsi.', 'Eu estou bem, obrigado(a).'],
      ],
      character_guide: [
        ['è / ò', 'as únicas letras que levam acento grave na ortografia oficial de 1979; marcam a vogal aberta', 'mèsi (obrigado), pòt (porta)'],
        ['an / en / on', 'vogais nasais, como em português “ã”, mas sem o til', 'anpil (muito), byen (bem)'],
        ['ou', 'soa como o “u” do português', 'ou (você), bouch (boca)'],
        ['ch', 'como o “ch” do português', 'chat (gato), chanm (quarto)'],
        ['j', 'como o “j” do português', 'je (olho), jòn (amarelo)'],
      ],
    },
    lessons: [
      {
        id: 'ht-u1-l1',
        title: 'Bonjou, mèsi, orevwa',
        kind: 'licao',
        words: ['bonjou', 'bonswa', 'orevwa', 'mèsi', 'wi', 'non'],
        cloze: [
          { sentence: '___, Jak! Kijan ou ye?', answer: 'Bonjou', options: ['Bonjou', 'Orevwa', 'Non'], translation: 'Oi, Jak! Como você está?' },
          { sentence: '___ anpil, Jak!', answer: 'Mèsi', options: ['Mèsi', 'Wi', 'Bonswa'], translation: 'Muito obrigado, Jak!' },
          { sentence: 'Nou ale: ___, Jak!', answer: 'Orevwa', options: ['Orevwa', 'Mèsi', 'Wi'], translation: 'Nós vamos: tchau, Jak!' },
        ],
        voice: {
          bot: 'Bonjou! Kijan ou ye?',
          botTranslation: 'Oi! Como você está?',
          expected: ['Mwen byen, mèsi.', 'mwen byen', 'byen'],
          hint: 'Responda que está bem com “Mwen byen, mèsi.”.',
        },
        communityPrompt: 'Escreva três cumprimentos em crioulo haitiano: um ao encontrar alguém (“Bonjou”), um à noite (“Bonswa”) e uma despedida (“Orevwa”).',
      },
      {
        id: 'ht-u1-l2',
        title: 'Mwen, ou, li, nou, yo',
        kind: 'licao',
        words: ['mwen', 'ou', 'li', 'nou', 'yo', 'ye'],
        cloze: [
          { sentence: '___ rele Ana.', answer: 'Mwen', options: ['Mwen', 'Li', 'Nou'], translation: 'Eu me chamo Ana.' },
          { sentence: 'Kijan ___ rele?', answer: 'ou', options: ['ou', 'li', 'yo'], translation: 'Como você se chama?' },
          { sentence: '___ se zanmi mwen.', answer: 'Li', options: ['Li', 'Nou', 'Yo'], translation: 'Ele é meu amigo.' },
        ],
        voice: {
          bot: 'Kijan ou rele?',
          botTranslation: 'Como você se chama?',
          expected: ['Mwen rele Ana.', 'mwen rele', 'rele'],
          hint: 'Diga o seu nome com “Mwen rele…”.',
        },
        communityPrompt: 'Apresente-se em crioulo haitiano: diga seu nome com “Mwen rele…” e pergunte o nome de alguém com “Kijan ou rele?”.',
      },
      {
        id: 'ht-u1-l3',
        title: 'Test: premye pa yo',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Bonjou! Mwen rele Jak. Kijan ou rele, e kijan ou ye?',
          botTranslation: 'Oi! Eu me chamo Jak. Como você se chama, e como você está?',
          expected: ['Bonjou! Mwen rele Lucia, e mwen byen, mèsi.', 'mwen rele', 'mwen byen', 'bonjou'],
          hint: 'Devolva o cumprimento (“Bonjou”), diga o nome com “Mwen rele…” e como está com “Mwen byen, mèsi.”.',
        },
        communityPrompt: 'Escreva uma apresentação completa em crioulo haitiano: cumprimento (“Bonjou”), nome (“Mwen rele…”), como você está (“Mwen byen”) e uma despedida (“Orevwa”).',
      },
    ],
  },
  {
    id: 'ht-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Fanmi mwen ak mache a',
    emoji: '👪',
    card: {
      id: 'ht-c2',
      title: 'Do francês ao crioulo: palavras que grudaram o artigo',
      emoji: '🧺',
      history:
        'Boa parte do vocabulário do crioulo haitiano vem do francês, mas com uma curiosidade: em muitas palavras, o artigo francês ficou grudado para sempre. “Lajan” (dinheiro) vem de “l’argent”; “diri” (arroz), de “du riz”; “zanmi” (amigo) vem do plural francês “les amis/des amis”, em que o “s” que soava como “z” antes de vogal foi reanalisado como parte da palavra. Nem toda palavra é francesa, porém: segundo a Wikipédia, “mayi” (milho) vem do taino “mahis” — língua indígena falada no Haiti antes da colonização, de onde também vem o próprio nome “Ayiti” (terra de altas montanhas) — e “zonbi”, segundo o Wiktionary, vem de línguas bantas da África central (kikongo “nzumbe”, quimbundo “nzumbi”), trazida pelo tráfico transatlântico de pessoas escravizadas.',
      culture_tip:
        '“Blan”, além de “branco”, também quer dizer “estrangeiro” em crioulo haitiano — não importa a cor da pele de quem chega de fora. No mercado (mache, do francês “marché”), pechinchar faz parte da conversa do dia a dia.',
      grammar_why:
        'A negação é simples: “pa” vem sempre antes do verbo, como em “Mwen pa gen lajan” (eu não tenho dinheiro). O plural pode ser marcado pondo “yo” depois do substantivo, sem mudar a palavra: “timoun yo” são “as crianças”. E três palavrinhas antes do verbo contam o tempo: “te” (passado), “ap” (contínuo) e “pral” (futuro próximo) — sem nenhum sufixo.',
      grammar_examples: [
        ['Mwen gen yon fanmi gwo.', 'Eu tenho uma família grande.'],
        ['Timoun yo piti.', 'As crianças são pequenas.'],
        ['Mwen pa gen lajan.', 'Eu não tenho dinheiro.'],
        ['Mwen vle yon kafe.', 'Eu quero um café.'],
      ],
      character_guide: [
        ['yo (depois do substantivo)', 'marca o plural sem mudar a palavra', 'timoun yo (as crianças)'],
        ['la / nan (depois do substantivo)', 'o artigo definido vem depois da palavra, não antes', 'kay la (a casa), chanm nan (o quarto)'],
      ],
    },
    lessons: [
      {
        id: 'ht-u2-l1',
        title: 'Fanmi mwen',
        kind: 'licao',
        words: ['fanmi', 'manman', 'papa', 'zanmi', 'timoun', 'gen'],
        cloze: [
          { sentence: 'Mwen ___ yon fanmi gwo.', answer: 'gen', options: ['gen', 'se', 'vle'], translation: 'Eu tenho uma família grande.' },
          { sentence: '___ mwen rele Woz.', answer: 'Manman', options: ['Manman', 'Papa', 'Timoun'], translation: 'Minha mãe se chama Woz.' },
          { sentence: '___ yo piti.', answer: 'Timoun', options: ['Timoun', 'Zanmi', 'Papa'], translation: 'As crianças são pequenas.' },
        ],
        voice: {
          bot: 'Ou gen yon fanmi gwo?',
          botTranslation: 'Você tem uma família grande?',
          expected: ['Wi, mwen gen yon fanmi gwo.', 'mwen gen', 'fanmi'],
          hint: 'Responda com “Wi, mwen gen…” ou “Non, mwen pa gen…”.',
        },
        communityPrompt: 'Descreva sua família em crioulo haitiano: você tem “yon fanmi gwo” (uma família grande)? Fale de “manman”, “papa” e “timoun”.',
      },
      {
        id: 'ht-u2-l2',
        title: 'Nan mache a',
        kind: 'licao',
        words: ['dlo', 'pen', 'kafe', 'vle', 'pa', 'konbyen'],
        cloze: [
          { sentence: 'Mwen ___ yon kafe.', answer: 'vle', options: ['vle', 'gen', 'pa'], translation: 'Eu quero um café.' },
          { sentence: 'Mwen ___ gen lajan.', answer: 'pa', options: ['pa', 'vle', 'non'], translation: 'Eu não tenho dinheiro.' },
          { sentence: '___ dlo ou bwè?', answer: 'Konbyen', options: ['Konbyen', 'Kijan', 'Kisa'], translation: 'Quanta água você bebe?' },
        ],
        voice: {
          bot: 'Kisa ou vle nan mache?',
          botTranslation: 'O que você quer no mercado?',
          expected: ['Mwen vle dlo ak pen.', 'mwen vle', 'dlo'],
          hint: 'Diga o que você quer com “Mwen vle…”.',
        },
        communityPrompt: 'Escreva o que você quer comprar no mercado: “Mwen vle…” (dlo, pen, kafe) e diga se tem dinheiro com “Mwen gen lajan” ou “Mwen pa gen lajan”.',
      },
      {
        id: 'ht-u2-l3',
        title: 'Test: fanmi ak mache a',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Konbyen moun nan fanmi ou, e kisa ou vle bwè?',
          botTranslation: 'Quantas pessoas há na sua família, e o que você quer beber?',
          expected: ['Mwen gen yon fanmi gwo, e mwen vle dlo.', 'mwen gen', 'mwen vle'],
          hint: 'Fale do tamanho da família com “Mwen gen…” e do que quer beber com “Mwen vle…”.',
        },
        communityPrompt: 'Escreva cinco frases sobre sua família e uma compra no mercado, usando “mwen gen”, “mwen vle” e “mwen pa gen”.',
      },
    ],
  },
];
