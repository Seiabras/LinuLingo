import type { LinguisticsArea } from '../types';

/** As 7 áreas da língua aplicadas ao francês (fonética … estilística), com os tópicos de gramática de cada uma. */
export const LINGUISTICS_FR: LinguisticsArea[] = [
  // ───────────────────────────── FONÉTICA ─────────────────────────────
  {
    area: 'fonetica',
    summary:
      'O francês tem vogais que o português não tem — as arredondadas da frente [y ø œ] —, quatro vogais nasais diferentes das nossas, o «e» mudo [ə] e o «r» raspado na garganta; e muitas letras escritas que não soam.',
    sections: [
      {
        heading: 'Vogais: as arredondadas e as nasais',
        text: "O brasileiro já tem quase todas as vogais orais do francês; faltam três, pronunciadas com a língua na frente da boca e os lábios em bico: [y] (tu), [ø] (deux) e [œ] (peur). Para treinar, diga «i» e, sem mexer a língua, arredonde os lábios: sai o [y]. Diga «ê» com os lábios de «ô»: sai o [ø]. As nasais também são outras: o francês tem [ɑ̃] (enfant), [ɔ̃] (bon), [ɛ̃] (vin) e, para parte dos falantes, [œ̃] (un); o [n] depois delas não se pronuncia, e a vogal não fecha como no nosso «tanto».",
        table: {
          head: ['Som', 'IPA', 'Exemplo', 'Dica para o brasileiro'],
          rows: [
            ['u', '[y]', 'tu, rue, salut', '«i» com os lábios em bico; nunca «u»'],
            ['ou', '[u]', 'tout, rouge, vous', 'o nosso «u»'],
            ['eu (fechado)', '[ø]', 'deux, bleu, peu', '«ê» com os lábios de «ô»'],
            ['eu (aberto)', '[œ]', 'peur, fleur, sœur', '«é» com os lábios de «ó»'],
            ['e mudo', '[ə]', 'le, petit, demain', 'um «â» fraco, que muitas vezes some'],
            ['an, en', '[ɑ̃]', 'enfant, temps', 'vogal de trás, bem aberta, sem fechar a boca'],
            ['on', '[ɔ̃]', 'bon, maison', 'como em «onda», sem o [n]'],
            ['in, ain', '[ɛ̃]', 'vin, pain, plein', 'um «é» nasal'],
          ],
        },
        examples: [
          ['tu × tout', '[ty] × [tu]: você × tudo'],
          ['deux × deuil', '[dø] × [dœj]: dois × luto'],
          ['vin × vent × vont', '[vɛ̃] × [vɑ̃] × [vɔ̃]: vinho × vento × vão'],
        ],
      },
      {
        heading: 'Consoantes: o «r» e as letras que não soam',
        text: "O «r» francês é uvular [ʁ]: a parte de trás da língua quase encosta no fundo da boca, como o «r» de «rato» no Rio de Janeiro, porém mais suave, e nunca vibra na ponta da língua. O «h» nunca se pronuncia. «ch» é [ʃ] (chat), «j» e «g» antes de e/i são [ʒ] (jour, rouge) e «gn» é [ɲ] (montagne). No fim das palavras, a maioria das consoantes não soa (petit, grand, trop, les), e o «e» final também cai (petite = [pətit]); as exceções costumam ser c, r, f e l — o truque «CaReFuL»: avec, bonjour, neuf, avril.",
        table: {
          head: ['Escrita', 'IPA', 'Exemplo'],
          rows: [
            ['r', '[ʁ]', 'Paris [paʁi], rouge [ʁuʒ]'],
            ['ch', '[ʃ]', 'chat [ʃa], chaud [ʃo]'],
            ['j, ge, gi', '[ʒ]', 'je [ʒə], rouge [ʁuʒ]'],
            ['gn', '[ɲ]', 'montagne [mɔ̃taɲ]'],
            ['ill (depois de vogal)', '[j]', 'fille [fij], travail [tʁavaj]'],
            ['consoante final', 'muda', 'petit [pəti], grand [ɡʁɑ̃], les [le]'],
            ['c, r, f, l no fim', 'soam', 'avec [avɛk], bonjour [bɔ̃ʒuʁ], neuf [nœf]'],
          ],
        },
      },
    ],
    topics: ['fr-g1'],
    quiz: [
      { question: 'Qual palavra tem o som [y], que não existe em português?', options: ['tu', 'tout', 'toi'], answer: 'tu', explanation: '«tu» é [ty]: «i» com os lábios em bico. «tout» é [tu] e «toi» é [twa].' },
      { question: 'Como soa «vin» (vinho)?', options: ['[vɛ̃]', '[vin]', '[vɑ̃]'], answer: '[vɛ̃]', explanation: '«in» é a nasal [ɛ̃], um «é» nasal; o [n] não se pronuncia. [vɑ̃] é «vent» (vento).' },
    ],
  },
  // ───────────────────────────── FONOLOGIA ─────────────────────────────
  {
    area: 'fonologia',
    summary:
      'No francês as palavras se emendam: a consoante muda do fim reaparece antes de vogal (liaison), a vogal do fim cai antes de outra (elisão), o «e» mudo some na fala e o acento cai sempre no fim do grupo de palavras.',
    sections: [
      {
        heading: 'Liaison, enchaînement e elisão',
        text: "A liaison é a consoante final muda que volta a soar quando a palavra seguinte começa com vogal: «les amis» [lez‿ami], «vous avez» [vuz‿ave], «un enfant» [œ̃n‿ɑ̃fɑ̃]. Ela é obrigatória entre artigo e substantivo, entre pronome e verbo e depois de palavras curtas como «très» e «chez»; é proibida depois de «et» e antes do «h aspirado» (les | héros, sem liaison). O enchaînement é quase igual, mas com uma consoante que já se pronuncia: «une amie» [y.na.mi]. E a elisão troca a vogal final por apóstrofo: le ami → l'ami, je ai → j'ai, si il → s'il. Por tudo isso, o francês falado soa como uma corrente contínua de sílabas.",
        examples: [
          ['les amis', '[lez‿ami]: liaison obrigatória'],
          ['les héros', '[le eʁo]: sem liaison, por causa do h aspirado'],
          ["l'ami, j'ai, s'il", 'elisão: a vogal final cai e vira apóstrofo'],
          ['six livres × six amis × il y en a six', '[si livʁ] × [siz‿ami] × [sis]: o mesmo número, três pronúncias'],
        ],
      },
      {
        heading: 'O «e» que some e o acento no fim',
        text: "O «e» mudo [ə] cai quando a pronúncia deixa: «samedi» vira [samdi], «je ne sais pas» vira, na fala rápida, [ʃ(ə)sɛpa]. Ele se mantém quando cairia um amontoado de consoantes difícil de pronunciar (vendredi [vɑ̃dʁədi]). O acento, diferente do português, não é da palavra: cai na última sílaba pronunciada do grupo rítmico. «Je voudrais un café» tem um acento só, no fim: [ʒə vudʁɛ œ̃ kaˈfe]. Por isso o brasileiro soa estrangeiro quando acentua cada palavra, e soa francês quando alonga só a última sílaba da frase.",
        examples: [
          ['samedi', '[samdi]: o «e» do meio cai'],
          ['Je ne sais pas.', '[ʒənəsɛpa], na fala rápida [ʃsɛpa]'],
          ['un café', '[œ̃ kaˈfe]: o acento cai no fim do grupo'],
        ],
      },
    ],
    topics: ['fr-g3'],
    quiz: [
      { question: 'Em «les héros», há liaison?', options: ['não', 'sim'], answer: 'não', explanation: 'O h de «héros» é aspirado: não se pronuncia, mas impede a liaison e a elisão (le héros, les | héros).' },
      { question: 'Como se pronuncia «six» em «six livres»?', options: ['[si]', '[sis]', '[siz]'], answer: '[si]', explanation: 'Antes de consoante, «six» perde o [s] final: [si livʁ]. Sozinho é [sis]; antes de vogal, [siz].' },
    ],
  },
  // ───────────────────────────── MORFOLOGIA ─────────────────────────────
  {
    area: 'morfologia',
    summary:
      'A morfologia do francês é mais rica na escrita do que na fala: muitas terminações de gênero, número e pessoa se escrevem mas não se ouvem, e o verbo tem tempos simples e compostos parecidos com os do português.',
    sections: [
      {
        heading: 'A gramática que se escreve e não se ouve',
        text: "Em «je parle, tu parles, il parle, ils parlent», as quatro formas soam iguais: [paʁl]. Por isso o sujeito é obrigatório — é ele que diz quem fala. O plural do substantivo quase nunca se ouve (le livre / les livres: só o artigo muda), e o feminino às vezes aparece só na escrita (ami / amie, os dois [ami]) e às vezes muda o som: petit [pəti] / petite [pətit], com a consoante final que volta a soar. Os plurais irregulares mudam também na fala: cheval / chevaux, œil / yeux, travail / travaux.",
        table: {
          head: ['Escrita', 'Fala', 'O que se ouve'],
          rows: [
            ['je parle, tu parles, il parle, ils parlent', '[paʁl] nas quatro', 'nada: só o pronome distingue'],
            ['nous parlons, vous parlez', '[paʁlɔ̃], [paʁle]', 'aqui a terminação soa'],
            ['le livre / les livres', '[lə livʁ] / [le livʁ]', 'só o artigo'],
            ['petit / petite', '[pəti] / [pətit]', 'o feminino faz o [t] soar'],
            ['cheval / chevaux', '[ʃəval] / [ʃəvo]', 'plural irregular, também na fala'],
          ],
        },
      },
      {
        heading: 'Os tempos do verbo',
        text: "Como no português, o francês tem tempos simples (présent, imparfait, futur, conditionnel, subjonctif, passé simple) e compostos, com auxiliar e particípio (passé composé, plus-que-parfait, futur antérieur, conditionnel passé). O auxiliar é avoir para a maioria dos verbos e être para uns vinte verbos de movimento e mudança e para todos os pronominais — e com être o particípio concorda com o sujeito: «elles sont parties». O futuro e o condicional se formam sobre o infinitivo, como no português antigo: partir-ai → je partirai, partir-ais → je partirais. O passé simple e o imparfait du subjonctif ficaram na literatura.",
        examples: [
          ["j'ai mangé / je suis allé(e)", 'passé composé com avoir e com être'],
          ['je partirai / je partirais', 'futuro e condicional, sobre o infinitivo'],
          ["il parla / qu'il parlât", 'passé simple e imparfait du subjonctif: só na escrita literária'],
        ],
      },
    ],
    topics: ['fr-g4', 'fr-g5', 'fr-g6', 'fr-g9', 'fr-g10', 'fr-g11', 'fr-g14', 'fr-g17', 'fr-g18', 'fr-g20', 'fr-g37', 'fr-g38'],
    quiz: [
      { question: 'Quantas pronúncias diferentes há em «je parle, tu parles, il parle, ils parlent»?', options: ['1', '2', '4'], answer: '1', explanation: 'As quatro soam [paʁl]; as terminações -e, -es, -e e -ent só existem na escrita.' },
      { question: 'Qual é o feminino de «beau»?', options: ['belle', 'beaue', 'bele'], answer: 'belle', explanation: 'beau / belle; antes de vogal, o masculino também vira «bel»: un bel homme.' },
    ],
  },
  // ───────────────────────────── SINTAXE ─────────────────────────────
  {
    area: 'sintaxe',
    summary:
      'A frase francesa segue a ordem sujeito-verbo-objeto, exige sempre um sujeito (até «il pleut»), põe os pronomes objeto antes do verbo numa ordem fixa e faz a negação em duas partes, em volta do verbo.',
    sections: [
      {
        heading: 'Os pronomes antes do verbo',
        text: "Os pronomes objeto vêm antes do verbo, numa ordem fixa: me/te/se/nous/vous, depois le/la/les, depois lui/leur, depois y e por último en. «Il me le donne» (ele me dá isso), «Je le lui dis» (eu digo isso a ele), «Il y en a» (há alguns). A negação abraça o verbo e os pronomes juntos: «Je ne le lui ai pas dit». Só no imperativo afirmativo os pronomes vão depois, com hífen: «Donne-le-moi !». Em português do Brasil colocamos o pronome onde a fala pede; em francês, a ordem não muda.",
        table: {
          head: ['1', '2', '3', '4', '5'],
          rows: [
            ['me, te, se, nous, vous', 'le, la, les', 'lui, leur', 'y', 'en'],
            ['Il me le donne.', '', '', '', ''],
            ['Je le lui dis.', '', '', '', ''],
            ['Il y en a trois.', '', '', '', ''],
          ],
        },
      },
      {
        heading: 'O sujeito obrigatório e as perguntas',
        text: "Em português dizemos «chove», «é preciso», «tem um café aqui». Em francês, o sujeito é obrigatório, e os verbos impessoais levam «il»: «il pleut», «il faut», «il y a un café ici». Para perguntar, há três construções: só a entonação («Tu viens ?»), «est-ce que» («Est-ce que tu viens ?») e a inversão, mais formal («Viens-tu ?»), que ganha um -t- entre duas vogais: «Parle-t-il français ?». As frases complexas usam relativos (qui, que, où, dont), e as orações com si seguem uma regra de tempos: si + presente → futuro; si + imparfait → condicional.",
        examples: [
          ['Il pleut.', 'Chove.'],
          ['Parle-t-il français ?', 'Ele fala francês? (inversão, com o -t- de ligação)'],
          ["S'il pleut, on restera à la maison.", 'Se chover, a gente fica em casa.'],
        ],
      },
    ],
    topics: ['fr-g7', 'fr-g8', 'fr-g12', 'fr-g13', 'fr-g15', 'fr-g16', 'fr-g19', 'fr-g21', 'fr-g22', 'fr-g23', 'fr-g24', 'fr-g29'],
    quiz: [
      { question: 'Qual é a ordem certa?', options: ['Je le lui donne.', 'Je lui le donne.', 'Je donne le lui.'], answer: 'Je le lui donne.', explanation: 'le/la/les vêm antes de lui/leur, e os dois antes do verbo.' },
      { question: 'Como se diz «Chove»?', options: ['Il pleut.', 'Pleut.', "C'est pleut."], answer: 'Il pleut.', explanation: 'O francês exige um sujeito; nos verbos impessoais, é «il».' },
    ],
  },
  // ───────────────────────────── SEMÂNTICA ─────────────────────────────
  {
    area: 'semantica',
    summary:
      'Francês e português são irmãos, e por isso cheios de falsos amigos; as expressões idiomáticas francesas raramente se traduzem palavra por palavra, e o estilo nominal muda o sentido de ação para ideia.',
    sections: [
      {
        heading: 'Falsos amigos',
        text: "Palavras que parecem portuguesas e querem dizer outra coisa são a maior armadilha para o brasileiro. «Attendre» é esperar (atender é répondre ou servir); «entendre» é ouvir (entender é comprendre); «rester» é ficar (restar é «il reste»); «prétendre» é afirmar; «le collège» é a escola do 6º ao 9º ano; «la location» é o aluguel; «les parents» são os pais — e também os parentes. Na aba dos falsos amigos há dezenas deles, com exemplos.",
        table: {
          head: ['Francês', 'Quer dizer', 'Parece'],
          rows: [
            ['attendre', 'esperar', 'atender'],
            ['entendre', 'ouvir', 'entender'],
            ['rester', 'ficar', 'restar'],
            ['la location', 'o aluguel', 'a locação (sim, mas no sentido de aluguel de moradia)'],
            ['exquis', 'delicioso', 'esquisito'],
          ],
        },
      },
      {
        heading: 'Expressões que não se traduzem ao pé da letra',
        text: "O sentido de uma expressão idiomática não é a soma das palavras. «Poser un lapin» (literalmente «pôr um coelho») é dar um bolo; «coûter les yeux de la tête» (custar os olhos da cabeça) é custar os olhos da cara — aqui o português está perto; «avoir le cafard» (ter a barata) é estar deprimido; «quand les poules auront des dents» (quando as galinhas tiverem dentes) é nunca. Aprenda-as como blocos, com a situação em que aparecem.",
        examples: [
          ["Il m'a posé un lapin.", 'Ele me deu um bolo.'],
          ['Ça coûte les yeux de la tête.', 'Isso custa os olhos da cara.'],
          ["J'ai le cafard.", 'Estou deprimido, na fossa.'],
        ],
      },
    ],
    topics: ['fr-g26', 'fr-g34', 'fr-g40'],
    quiz: [
      { question: '«Je vais rester chez moi» quer dizer:', options: ['Vou ficar em casa.', 'Vou descansar em casa.', 'Vou voltar para casa.'], answer: 'Vou ficar em casa.', explanation: '«Rester» é falso amigo: quer dizer ficar, não restar.' },
      { question: "«Il m'a posé un lapin» quer dizer:", options: ['Ele me deu um bolo.', 'Ele me deu um coelho.', 'Ele me fez um favor.'], answer: 'Ele me deu um bolo.', explanation: "«Poser un lapin à quelqu'un» é não aparecer a um encontro marcado." },
    ],
  },
  // ───────────────────────────── PRAGMÁTICA ─────────────────────────────
  {
    area: 'pragmatica',
    summary:
      'Em francês, a cortesia começa pelo «bonjour» e pela escolha entre tu e vous; o registro muda do verlan à carta formal, e cada país francófono tem os seus usos.',
    sections: [
      {
        heading: 'Tu, vous e o «bonjour»',
        text: "O «vous» é o pronome da distância respeitosa: com desconhecidos, pessoas mais velhas, no trabalho e no comércio. O «tu» é para amigos, família, crianças e, cada vez mais, colegas jovens — mas quem propõe passar ao «tu» é, em geral, a pessoa mais velha ou de posição mais alta: «On peut se tutoyer ?». Entrar numa loja sem dizer «bonjour» é considerado falta de educação. «Madame» e «Monsieur» se usam sem o sobrenome («Bonjour, madame»), e o «on» substitui o «nous» na fala, como o nosso «a gente».",
        examples: [
          ["Bonjour, madame. Je voudrais un pain, s'il vous plaît.", 'Cumprimentar antes de pedir'],
          ['On peut se tutoyer ?', 'A gente pode se tratar por «tu»?'],
        ],
      },
      {
        heading: 'Registros e variação francófona',
        text: "O francês distingue três registros bem marcados: o familiar (entre amigos), o corrente (o do dia a dia) e o formal (escrita, administração, literatura). A mesma ideia muda de palavra conforme o registro. E a variação não é só de registro: no Quebec, «magasiner» é fazer compras e «la fin de semaine» é o fim de semana; na Bélgica e na Suíça, 70 é «septante»; em Dacar, o francês convive com o uólofe. Escolher o registro e a variante certos para cada pessoa é a competência pragmática.",
        table: {
          head: ['Familiar', 'Corrente', 'Formal', 'Português'],
          rows: [
            ['une bagnole', 'une voiture', 'une automobile', 'carro'],
            ['bouffer', 'manger', 'se restaurer', 'comer'],
            ['un mec', 'un homme', 'un monsieur', 'homem, cara'],
            ['bosser', 'travailler', 'exercer une activité', 'trabalhar'],
          ],
        },
      },
    ],
    topics: ['fr-g2', 'fr-g25', 'fr-g27', 'fr-g28', 'fr-g30', 'fr-g31', 'fr-g32', 'fr-g33'],
    quiz: [
      { question: 'Numa loja em Paris, o primeiro que se diz é:', options: ['Bonjour', 'Je veux…', 'Salut'], answer: 'Bonjour', explanation: 'Pedir sem cumprimentar soa grosseiro; «salut» é informal demais com desconhecidos.' },
      { question: '«Une bagnole» é de que registro?', options: ['familiar', 'formal', 'técnico'], answer: 'familiar', explanation: 'É o carro na gíria: une bagnole (familiar), une voiture (corrente), une automobile (formal).' },
    ],
  },
  // ───────────────────────────── ESTILÍSTICA ─────────────────────────────
  {
    area: 'estilistica',
    summary:
      'O francês escrito gosta do estilo nominal e da frase bem construída; a imprensa e a academia têm regras próprias, e a literatura clássica usa o passé simple, a inversão e o verso alexandrino.',
    sections: [
      {
        heading: 'O estilo nominal e o jornalístico',
        text: "Manchetes e textos acadêmicos franceses transformam ações em substantivos: «Les prix augmentent» vira «L'augmentation des prix»; «On a lancé la fusée», «le lancement de la fusée». Isso deixa o texto mais denso e impessoal. A imprensa usa o condicional para informações não confirmadas («le ministre aurait démissionné») e o présent de narration para dar vivacidade a fatos passados. No texto acadêmico, o autor fala em «nous» e anuncia o plano: «Nous verrons d'abord…, puis…».",
        examples: [
          ["L'augmentation des prix inquiète.", 'Estilo nominal: o aumento dos preços preocupa.'],
          ['Le ministre aurait démissionné.', 'Condicional jornalístico: o ministro teria renunciado.'],
        ],
      },
      {
        heading: 'O estilo literário',
        text: "A prosa literária usa o passé simple para as ações da narrativa e o imparfait para o cenário, como no nosso romance usamos o pretérito perfeito e o imperfeito. A poesia clássica francesa tem como verso nobre o alexandrino, de doze sílabas, com uma pausa no meio, usado por Racine no teatro e por Victor Hugo e Baudelaire na poesia. Outros recursos marcantes são a inversão do sujeito («Ainsi parla-t-il»), o ritmo ternário (três elementos em sequência) e a elegância da frase longa, bem pontuada.",
        examples: [
          ['Il ouvrit la porte, regarda la rue et sortit.', 'Passé simple: três ações em sequência, ritmo ternário.'],
          ['Ainsi parla-t-il.', 'Inversão literária: assim falou ele.'],
        ],
      },
    ],
    topics: ['fr-g35', 'fr-g36', 'fr-g39'],
    quiz: [
      { question: 'Como se chama o verso clássico francês de doze sílabas?', options: ['alexandrino', 'decassílabo', 'soneto'], answer: 'alexandrino', explanation: 'O alexandrino, com pausa no meio, é o verso de Racine, de Hugo e de Baudelaire.' },
      { question: 'Qual frase está no estilo nominal?', options: ["L'augmentation des prix inquiète.", 'Les prix augmentent et ça inquiète.', "On s'inquiète parce que les prix augmentent."], answer: "L'augmentation des prix inquiète.", explanation: 'O verbo «augmenter» virou o substantivo «augmentation».' },
    ],
  },
];
