import type { StorySeed } from '../types';

/**
 * Histórias interativas do novial — uma por subnível de A1.1 a A2.2 (pacote incompleto, falta do
 * B1.1 em diante — ver index.ts). Toda frase em novial usa só palavras confirmadas em
 * `vocabulario.ts` (fontes: Jespersen 1928/1930, interlanguages.net, Wikibooks, Omniglot) — nenhuma
 * palavra nova foi composta além do que a gramática documentada permite (genitivo -n, plural -s,
 * advérbio -m, particípio -t). Exceção atestada: "Plesure!" (prazer!), do diálogo de Mortimer em
 * Wikibooks Hound_Lesson_1 ("Plesure ke me renkontra vu"). Revisão de 10/10/2026: "pluva" sem sujeito
 * (verbo impessoal, Hound_Lesson_7), "mediko" para médico (Lexike: "doktore (non = medike)") e "qui"
 * só como adjetivo ("Qui laboro…?", "Qui rakonte…?"), como no Lexike.
 */
export const STORIES_NOV: StorySeed[] = [
  {
    id: 'nov-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Bon jorne, amike!',
    emoji: '👋',
    summary: 'Você chega a um encontro de falantes de novial e conhece Petro, outro participante, no saguão do hotel.',
    cultural_context: 'Otto Jespersen publicou o novial em 1928, depois de décadas estudando línguas e apoiando (e depois criticando) o ido. Hoje o novial tem uma pequena comunidade de entusiastas que trocam mensagens e organizam encontros on-line.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bon jorne! Qui es vun nome?',
        translation: 'Olá! Qual é o seu nome?',
        emoji: '🙋‍♂️',
        choices: [
          { text: 'Men nome es Ana. E vun?', translation: 'Meu nome é Ana. E o seu?', next: 'nome' },
          { text: 'Adie!', translation: 'Tchau!', wrong: 'Petro acabou de te perguntar seu nome — despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      nome: {
        text: 'Me es Petro. Ob vu sava parla Novial?',
        translation: 'Eu sou o Petro. Você sabe falar novial?',
        emoji: '😊',
        choices: [
          { text: 'Yes, me sava parla Novial.', translation: 'Sim, eu sei falar novial.', next: 'final_bo' },
          { text: 'Li pane es boni.', translation: 'O pão é bom.', wrong: 'Isso não responde se você sabe falar novial. Tente “Yes…” ou “Non…”.' },
        ],
      },
      final_bo: {
        text: 'Tre boni! Danka, Ana!',
        translation: 'Muito bom! Obrigado, Ana!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Danka, amike!', message: 'Petro sorri: você fez a sua primeira conversa em novial, num encontro internacional de verdade.' },
      },
    },
    glossary: [
      ['bon jorne / adie', 'olá / tchau'],
      ['men nome es…', 'meu nome é…'],
      ['danka', 'obrigado'],
    ],
  },
  {
    id: 'nov-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'In Petron hause',
    emoji: '🏠',
    summary: 'Você visita a casa do seu novo amigo Petro e conta um pouco sobre a sua própria família.',
    cultural_context: 'O “Novial Lexike” (1930), o dicionário oficial de Jespersen, tem milhares de palavras — incluindo “familie” e “hause”, bem parecidas com as de outras línguas europeias, de propósito, pra facilitar o aprendizado.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bon jorne! Ob vu have fratros?',
        translation: 'Olá! Você tem irmãos?',
        emoji: '📜',
        choices: [
          { text: 'Yes, me have un fratro e un fratra.', translation: 'Sim, eu tenho um irmão e uma irmã.', next: 'fam' },
          { text: 'Men hause es grandi.', translation: 'Minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “yes, me have…” ou “non”.' },
        ],
      },
      fam: {
        text: 'Tre boni! E qualim es vun hause?',
        translation: 'Muito bom! E como é a sua casa?',
        emoji: '🏠',
        choices: [
          { text: 'Men hause es mikri ma boni.', translation: 'Minha casa é pequena mas boa.', next: 'final_bo' },
          { text: 'Dek dies.', translation: 'Dez dias.', wrong: 'Isso não descreve a sua casa. Fale sobre ela: “men hause…”' },
        ],
      },
      final_bo: {
        text: 'Tre boni! Vu es men amike.',
        translation: 'Ótimo! Você é meu amigo.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Danka, Petro!', message: 'Petro gostou de saber da sua família — e já te chamou de amigo.' },
      },
    },
    glossary: [
      ['fratro / fratra', 'irmão / irmã'],
      ['men hause', 'minha casa'],
      ['have (me have)', 'ter (eu tenho)'],
    ],
  },
  {
    id: 'nov-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Li mediko kel me konosa',
    emoji: '🩺',
    summary: 'No mesmo encontro de falantes de novial, Ana apresenta você a um médico e vocês conversam sobre o trabalho de cada um.',
    cultural_context:
      'Na adaptação de “O Cão dos Baskerville” do curso de novial do Wikibooks, o Dr. Mortimer é chamado de “doktoro” — o título de doutor. A profissão de médico, segundo o dicionário de Jespersen (“Novial Lexike”, 1930), é outra palavra: “medike” (no masculino, “mediko”).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bon jorne! Lo es un mediko kel me konosa.',
        translation: 'Olá! Ele é um médico que eu conheço.',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Plesure! Qui laboro vu fa?', translation: 'Prazer! Que trabalho você faz?', next: 'laboro' },
          { text: 'Pluva.', translation: 'Está chovendo.', wrong: 'Isso não pergunta sobre o trabalho dele. Tente “Qui laboro vu fa?”' },
        ],
      },
      laboro: {
        text: 'Me es mediko. E vu, qui laboro vu fa?',
        translation: 'Eu sou médico. E você, que trabalho você faz?',
        emoji: '🩺',
        choices: [
          { text: 'Me es profesore.', translation: 'Eu sou professor.', next: 'final_bo' },
          { text: 'Trianti libres.', translation: 'Trinta livros.', wrong: 'Isso não responde sobre o seu trabalho. Diga “Me es…” com uma profissão.' },
        ],
      },
      final_bo: {
        text: 'Tre boni! Nus fa laboro kun homes.',
        translation: 'Muito bom! Nós fazemos trabalho com pessoas.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Mediko e profesore', message: 'Você conheceu um médico e falou do seu próprio trabalho, tudo em novial.' },
      },
    },
    glossary: [
      ['mediko / profesore', 'médico / professor'],
      ['laboro', 'trabalho'],
      ['kel', 'que, o qual (liga uma oração; a pergunta “quem?” é “que”)'],
    ],
  },
  {
    id: 'nov-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Let nus rakonta!',
    emoji: '📖',
    summary: 'Uma tarde de chuva no encontro de novial, Petro propõe contar histórias — chance de praticar o imperativo “let” e o verbo “pluva”.',
    cultural_context:
      'A construção “let” + sujeito + raiz do verbo (vamos…, que ele…) vem direto do capítulo sobre o imperativo de “An International Language” (1928) — a mesma frase, “Let nus starta!”, abre o curso de novial deste app.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ob pluva disdi?',
        translation: 'Está chovendo hoje?',
        emoji: '🌧️',
        choices: [
          { text: 'Yes, pluva. Let nus rakonta!', translation: 'Sim, está chovendo. Vamos contar histórias!', next: 'rakonte' },
          { text: 'Me prefera pane kam karne.', translation: 'Eu prefiro pão a carne.', wrong: 'Isso não responde sobre a chuva. Use “Yes, pluva.” ou “Non, non pluva.”' },
        ],
      },
      rakonte: {
        text: 'Tre boni! Qui rakonte vu rakonta?',
        translation: 'Muito bom! Que história você conta?',
        emoji: '📖',
        choices: [
          { text: 'Me rakonta men ansestren rakonte.', translation: 'Eu conto a história do meu ancestral.', next: 'final_bo' },
          { text: 'Men pede es grandi.', translation: 'Meu pé é grande.', wrong: 'Isso não conta uma história. Tente “Me rakonta un rakonte…”' },
        ],
      },
      final_bo: {
        text: 'Tre boni! Danka!',
        translation: 'Muito bom! Obrigado!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Un rakonte bon', message: 'Você usou o imperativo “let” e contou uma história em novial, numa tarde de chuva.' },
      },
    },
    glossary: [
      ['let nus…', 'vamos… (imperativo de 1ª pessoa do plural)'],
      ['pluva', 'chove (verbo de clima, sem sujeito)'],
      ['rakonta / rakonte', 'contar / história'],
    ],
  },
];
