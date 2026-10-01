import type { StorySeed } from '../types';

/** Histórias interativas do italiano: 3 por subnível, cada uma num lugar diferente. */
export const STORIES_IT: StorySeed[] = [
  // ───────────────────────── A1.1 ─────────────────────────
  {
    id: 'it-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Una moneta per Roma',
    emoji: '⛲',
    summary: 'Na Fontana di Trevi, em Roma, o Linu conhece a Giulia. Moeda na fonte ou sorvete?',
    cultural_context:
      'Diz a tradição que quem joga uma moeda de costas na Fontana di Trevi volta a Roma. As moedas são recolhidas regularmente e doadas à Caritas, que as usa para ajudar pessoas necessitadas.',
    start: 'start',
    glossary: [
      ['Buongiorno!', 'Bom dia!'],
      ['Buonanotte!', 'Boa noite! (só para ir dormir)'],
      ['Io sono… / Tu sei…', 'Eu sou… / Você é…'],
      ['la moneta', 'a moeda'],
      ['tre / tredici', 'três / treze'],
      ['la tasca', 'o bolso (falso amigo: não é “tasca”, boteco!)'],
      ['gentile', 'gentil, amável'],
    ],
    nodes: {
      start: {
        emoji: '☀️',
        text: 'Roma. È mattina. Ecco la Fontana di Trevi!',
        translation: 'Roma. É de manhã. Eis a Fontana di Trevi!',
        choices: [
          { text: '“Buongiorno!”', translation: '“Bom dia!”', next: 'giulia' },
          {
            text: '“Buonanotte!”',
            translation: '“Boa noite!”',
            wrong: 'É de manhã (“È mattina”)! “Buonanotte” é para quem vai dormir. De manhã se diz “Buongiorno”.',
          },
        ],
      },
      giulia: {
        emoji: '👧',
        text: '“Ciao! Io sono Giulia. E tu chi sei?”',
        translation: '“Oi! Eu sou a Giulia. E você, quem é?”',
        choices: [
          { text: '“Io sono Linu. Sono brasiliano.”', translation: '“Eu sou o Linu. Sou brasileiro.”', next: 'moneta' },
          {
            text: '“Tu sei Linu.”',
            translation: '“Você é o Linu.”',
            wrong: 'A Giulia perguntou “E tu chi sei?” (E você, quem é?). Para falar de você mesmo, use “Io sono…”: “Io sono Linu”.',
          },
        ],
      },
      moneta: {
        emoji: '🪙',
        text: '“Ecco una moneta. È per la fontana!”',
        translation: '“Aqui está uma moeda. É para a fonte!”',
        choices: [
          { text: 'Linu lancia la moneta.', translation: 'O Linu joga a moeda.', next: 'lancio' },
          { text: '“Grazie! Ma prima un gelato.”', translation: '“Obrigado! Mas antes um sorvete.”', next: 'gelato' },
        ],
      },
      lancio: {
        emoji: '💦',
        text: 'Uno, due, tre… splash! “Bravo, Linu! Ora torni a Roma.”',
        translation: 'Um, dois, três… splash! “Muito bem, Linu! Agora você volta para Roma.”',
        choices: [{ text: '“Grazie, Giulia! Sei gentile.”', translation: '“Obrigado, Giulia! Você é gentil.”', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu e Giulia sono amici. Roma è bellissima!',
        translation: 'O Linu e a Giulia são amigos. Roma é lindíssima!',
        ending: { tone: 'bom', title: 'Até a próxima, Roma', message: 'O Linu jogou a moeda na Fontana di Trevi e fez uma amiga romana. Agora ele volta com certeza!' },
      },
      gelato: {
        emoji: '🍨',
        text: 'La gelateria. “Un gelato: tre euro.”',
        translation: 'A sorveteria. “Um sorvete: três euros.”',
        choices: [
          { text: '“Ecco tre euro.”', translation: '“Aqui estão três euros.”', next: 'final_tasca' },
          {
            text: '“Ecco tredici euro.”',
            translation: '“Aqui estão treze euros.”',
            wrong: 'O sorvete custa “tre” (3) euros, não “tredici” (13). Cuidado com os números parecidos!',
          },
        ],
      },
      final_tasca: {
        emoji: '🤔',
        text: 'Il gelato è buono. E la moneta? È ancora in tasca!',
        translation: 'O sorvete é gostoso. E a moeda? Ainda está no bolso!',
        ending: { tone: 'neutro', title: 'Moeda no bolso', message: 'Sorvete delicioso, mas o Linu esqueceu a moeda da fonte. Tente de novo!' },
      },
    },
  },
  {
    id: 'it-h2',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Carnevale a Venezia',
    emoji: '🎭',
    summary: 'No Carnaval de Veneza, o Linu conhece um artesão de máscaras.',
    cultural_context:
      'O Carnaval de Veneza acontece nas semanas antes da Quaresma, com pessoas fantasiadas e mascaradas pelas ruas e pela praça San Marco. Nessa época se comem as “frittelle”, bolinhos fritos típicos.',
    start: 'start',
    glossary: [
      ['Buonasera!', 'Boa tarde! / Boa noite! (ao chegar)'],
      ['guardare', 'olhar (falso amigo: não é “guardar”!)'],
      ['la maschera', 'a máscara'],
      ['Lei è…?', 'O senhor é…? / A senhora é…? (formal)'],
      ['l’artigiano', 'o artesão'],
      ['il regalo', 'o presente (de dar)'],
      ['la frittella', 'bolinho frito típico do Carnaval'],
    ],
    nodes: {
      start: {
        emoji: '🎭',
        text: 'Venezia, piazza San Marco. È Carnevale!',
        translation: 'Veneza, praça San Marco. É Carnaval!',
        choices: [
          { text: 'Linu guarda le maschere.', translation: 'O Linu olha as máscaras.', next: 'marco' },
          { text: 'Linu mangia le frittelle.', translation: 'O Linu come os bolinhos.', next: 'frittelle' },
        ],
      },
      frittelle: {
        emoji: '🍩',
        text: 'Una frittella, due, tre… sei frittelle! Linu è pieno.',
        translation: 'Um bolinho, dois, três… seis bolinhos! O Linu está cheio.',
        ending: { tone: 'neutro', title: 'Carnaval de barriga cheia', message: 'Bolinhos deliciosos, mas o Linu não viu nenhuma máscara. Tente de novo!' },
      },
      marco: {
        emoji: '👺',
        text: 'Un signore con una maschera bianca. “Buonasera! Io sono Marco. Lei è turista?”',
        translation: 'Um senhor com uma máscara branca. “Boa noite! Eu sou o Marco. O senhor é turista?”',
        choices: [
          { text: '“Buonasera. Sì, sono turista.”', translation: '“Boa noite. Sim, sou turista.”', next: 'bottega' },
          {
            text: '“No, io sono Marco.”',
            translation: '“Não, eu sou o Marco.”',
            wrong: 'Marco é ELE! Ele perguntou “Lei è turista?” (O senhor é turista?). “Lei” com maiúscula é o tratamento formal.',
          },
        ],
      },
      bottega: {
        emoji: '🏚️',
        text: '“Io sono artigiano. Ecco le maschere: sono di carta.”',
        translation: '“Eu sou artesão. Aqui estão as máscaras: são de papel.”',
        choices: [{ text: '“Che bella la maschera rossa!”', translation: '“Que bonita a máscara vermelha!”', next: 'regalo' }],
      },
      regalo: {
        emoji: '🎁',
        text: '“Ecco la maschera rossa. È un regalo per Lei!”',
        translation: '“Aqui está a máscara vermelha. É um presente para o senhor!”',
        choices: [
          { text: '“Grazie mille, signor Marco!”', translation: '“Muito obrigado, seu Marco!”', next: 'final_bom' },
          {
            text: '“Quanto costa? Venti euro?”',
            translation: '“Quanto custa? Vinte euros?”',
            wrong: 'O Marco disse “È un regalo”: é um PRESENTE, não precisa pagar. “Regalo” em italiano é o presente que se dá.',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Ora Linu è una maschera rossa. Chi è? Mistero!',
        translation: 'Agora o Linu é uma máscara vermelha. Quem é? Mistério!',
        ending: { tone: 'bom', title: 'Pinguim mascarado', message: 'O Linu ganhou uma máscara de um artesão veneziano e entrou no Carnaval.' },
      },
    },
  },
  {
    id: 'it-h3',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Una margherita a Napoli',
    emoji: '🍕',
    summary: 'Em Nápoles, o Linu conhece o pizzaiolo Gennaro e prova uma margherita saída do forno.',
    cultural_context:
      'A arte do “pizzaiuolo” napolitano é Patrimônio Cultural Imaterial da UNESCO desde 2017. Segundo a tradição, a pizza margherita (tomate, muçarela e manjericão, as cores da bandeira) homenageia a rainha Margherita, que visitou Nápoles em 1889.',
    start: 'start',
    glossary: [
      ['guagliò', 'rapaz, garoto (napolitano)'],
      ['Uè!', 'Ei! (saudação napolitana)'],
      ['il pizzaiolo', 'o pizzaiolo'],
      ['il pomodoro', 'o tomate'],
      ['il forno', 'o forno'],
      ['caldo / calda', 'quente (falso amigo: não é caldo de sopa!)'],
      ['Attenzione!', 'Cuidado!'],
    ],
    nodes: {
      start: {
        emoji: '🌋',
        text: 'Napoli. Ecco il Vesuvio! Linu ha fame.',
        translation: 'Nápoles. Eis o Vesúvio! O Linu está com fome.',
        choices: [
          { text: 'Linu va in pizzeria.', translation: 'O Linu vai à pizzaria.', next: 'gennaro' },
          { text: 'Linu va al mare.', translation: 'O Linu vai ao mar.', next: 'mare' },
        ],
      },
      mare: {
        emoji: '🌊',
        text: 'Il mare è blu. Ma la pizza? Domani!',
        translation: 'O mar é azul. Mas e a pizza? Amanhã!',
        ending: { tone: 'neutro', title: 'Só o mar', message: 'O mar de Nápoles é lindo, mas o Linu ficou sem a pizza. Tente de novo!' },
      },
      gennaro: {
        emoji: '👨‍🍳',
        text: 'Il pizzaiolo è Gennaro. “Uè, guagliò! Sei nuovo qui?”',
        translation: 'O pizzaiolo é o Gennaro. “Ei, garoto! Você é novo aqui?”',
        choices: [
          { text: '“Sì! Io sono Linu, sono brasiliano.”', translation: '“Sim! Eu sou o Linu, sou brasileiro.”', next: 'menu' },
          {
            text: '“No, io sono di Napoli.”',
            translation: '“Não, eu sou de Nápoles.”',
            wrong: 'O Linu acabou de chegar e é brasileiro! O Gennaro perguntou “Sei nuovo qui?” (Você é novo aqui?). A resposta é “Sì”.',
          },
        ],
      },
      menu: {
        emoji: '🇮🇹',
        text: '“La margherita: pomodoro, mozzarella e basilico. È il tricolore!”',
        translation: '“A margherita: tomate, muçarela e manjericão. É a bandeira tricolor!”',
        choices: [{ text: '“Una margherita, per favore!”', translation: '“Uma margherita, por favor!”', next: 'forno' }],
      },
      forno: {
        emoji: '🔥',
        text: '“Ecco la pizza! Attenzione: è molto calda!”',
        translation: '“Aqui está a pizza! Cuidado: está muito quente!”',
        choices: [
          { text: 'Linu aspetta un po’.', translation: 'O Linu espera um pouco.', next: 'final_bom' },
          { text: 'Linu mangia subito.', translation: 'O Linu come na hora.', next: 'final_ahi' },
          {
            text: '“Calda? Ma dov’è la zuppa?”',
            translation: '“Caldo? Mas cadê a sopa?”',
            wrong: '“Calda” quer dizer QUENTE, não caldo de sopa! O Gennaro avisou que a pizza está muito quente.',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu mangia la pizza. “Gennaro, è perfetta!”',
        translation: 'O Linu come a pizza. “Gennaro, está perfeita!”',
        ending: { tone: 'bom', title: 'Margherita perfeita', message: 'O Linu esperou um pouquinho e provou a verdadeira pizza napolitana.' },
      },
      final_ahi: {
        emoji: '🥵',
        text: 'Ahi! La pizza è calda, calda, calda! Povero Linu.',
        translation: 'Ai! A pizza está quente, quente, quente! Coitado do Linu.',
        ending: { tone: 'neutro', title: 'Língua queimada', message: 'O Gennaro avisou: “è molto calda!”. Da próxima vez, espere um pouco.' },
      },
    },
  },

  // ───────────────────────── A1.2 ─────────────────────────
  {
    id: 'it-h4',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Basket a Bologna',
    emoji: '🏀',
    summary: 'Em Bolonha, o Linu joga basquete no parque e é convidado para comer tortellini com a avó de um amigo.',
    cultural_context:
      'Os pórticos de Bolonha, que cobrem dezenas de quilômetros de calçadas, são Patrimônio Mundial da UNESCO desde 2021. A cidade é apaixonada por basquete (tem o apelido de “Basket City”), e os tortellini in brodo são o prato típico das festas.',
    start: 'start',
    glossary: [
      ['i portici', 'os pórticos, as calçadas cobertas'],
      ['giocare a basket', 'jogar basquete'],
      ['tirare', 'arremessar, chutar (a bola)'],
      ['il canestro', 'a cesta (do basquete)'],
      ['Ti piacciono…?', 'Você gosta de…? (de várias coisas)'],
      ['il burro', 'a manteiga (falso amigo: burro é “asino”!)'],
      ['il brodo', 'o caldo (de carne, de galinha)'],
    ],
    nodes: {
      start: {
        emoji: '🏛️',
        text: 'Linu cammina sotto i portici di Bologna. I portici sono lunghi, lunghissimi!',
        translation: 'O Linu caminha sob os pórticos de Bolonha. Os pórticos são longos, longuíssimos!',
        choices: [
          { text: 'Linu arriva al parco.', translation: 'O Linu chega ao parque.', next: 'parco' },
          { text: 'Linu entra in una libreria.', translation: 'O Linu entra numa livraria.', next: 'libreria' },
        ],
      },
      libreria: {
        emoji: '📚',
        text: 'Nella libreria ci sono libri e silenzio. Linu legge fino a sera.',
        translation: 'Na livraria há livros e silêncio. O Linu lê até a noite.',
        ending: { tone: 'neutro', title: 'Tarde de leitura', message: 'Foi tranquilo, mas o Linu não conheceu ninguém. Tente de novo!' },
      },
      parco: {
        emoji: '🌳',
        text: 'Al parco ci sono due ragazzi, Luca e Sara. Giocano a basket.',
        translation: 'No parque há dois jovens, o Luca e a Sara. Eles jogam basquete.',
        choices: [{ text: '“Ciao! Anch’io gioco a basket!”', translation: '“Oi! Eu também jogo basquete!”', next: 'partita' }],
      },
      partita: {
        emoji: '⛹️',
        text: 'Sara passa la palla a Linu. “Tu tiri e io corro!”',
        translation: 'A Sara passa a bola para o Linu. “Você arremessa e eu corro!”',
        choices: [
          { text: 'Linu tira la palla.', translation: 'O Linu arremessa a bola.', next: 'canestro' },
          {
            text: 'Linu corre con Sara.',
            translation: 'O Linu corre com a Sara.',
            wrong: 'A Sara disse “Tu tiri e io corro”: VOCÊ (tu) arremessa, EU (io) corro. Olhe a terminação: tir-i (tu), corr-o (io).',
          },
        ],
      },
      canestro: {
        emoji: '🏀',
        text: 'Canestro! Luca applaude: “Bravo, Linu! Ti piacciono i tortellini?”',
        translation: 'Cesta! O Luca aplaude: “Muito bem, Linu! Você gosta de tortellini?”',
        choices: [
          { text: '“Sì, mi piacciono molto!”', translation: '“Sim, gosto muito!”', next: 'nonna' },
          { text: '“Grazie, ma sono stanco.”', translation: '“Obrigado, mas estou cansado.”', next: 'final_stanco' },
        ],
      },
      final_stanco: {
        emoji: '😴',
        text: 'Linu torna in albergo e dorme. Luca e Sara mangiano i tortellini senza di lui.',
        translation: 'O Linu volta para o hotel e dorme. O Luca e a Sara comem os tortellini sem ele.',
        ending: { tone: 'neutro', title: 'Cansaço de campeão', message: 'O Linu jogou bem, mas perdeu o jantar bolonhês. Tente de novo!' },
      },
      nonna: {
        emoji: '👵',
        text: 'La nonna di Luca prepara i tortellini. “In brodo o con il burro?”',
        translation: 'A avó do Luca prepara os tortellini. “No caldo ou com manteiga?”',
        choices: [
          { text: '“In brodo, per favore!”', translation: '“No caldo, por favor!”', next: 'final_bom' },
          {
            text: '“Con il burro? No, io non mangio gli asini!”',
            translation: '“Com burro? Não, eu não como jumentos!”',
            wrong: 'Falso amigo! Em italiano “il burro” é a MANTEIGA. O animal burro se chama “l’asino”. A avó oferecia tortellini no caldo ou com manteiga.',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu mangia trenta tortellini. Sono piccoli, ma buonissimi!',
        translation: 'O Linu come trinta tortellini. São pequenos, mas deliciosos!',
        ending: { tone: 'bom', title: 'Cesta e caldo', message: 'O Linu fez cesta, fez amigos e provou os tortellini in brodo da nonna.' },
      },
    },
  },
  {
    id: 'it-h5',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Il mercato di Ballarò',
    emoji: '🍊',
    summary: 'No mercado de Ballarò, em Palermo, o Linu prova figo-da-índia e descobre a arancina.',
    cultural_context:
      'Ballarò é um dos mercados de rua mais antigos de Palermo, cheio de gritos dos vendedores, frutas e comida de rua. Em Palermo se diz “l’arancina”, no feminino; em Catânia, do outro lado da Sicília, se diz “l’arancino”. A discussão é eterna!',
    start: 'start',
    glossary: [
      ['c’è / ci sono', 'há, tem (singular / plural)'],
      ['il fico d’India', 'o figo-da-índia'],
      ['le spine', 'os espinhos'],
      ['il coltello', 'a faca'],
      ['l’arancina', 'bolinho de arroz frito (feminino em Palermo)'],
      ['il riso', 'o arroz (e também o riso, a risada)'],
      ['i piselli', 'as ervilhas'],
    ],
    nodes: {
      start: {
        emoji: '🛒',
        text: 'Palermo. Linu entra nel mercato di Ballarò. Ci sono voci, colori e profumi.',
        translation: 'Palermo. O Linu entra no mercado de Ballarò. Há vozes, cores e aromas.',
        choices: [
          { text: 'Linu va al banco della frutta.', translation: 'O Linu vai à banca de frutas.', next: 'frutta' },
          { text: 'Linu cerca qualcosa di fritto.', translation: 'O Linu procura alguma coisa frita.', next: 'friggitoria' },
        ],
      },
      frutta: {
        emoji: '🌵',
        text: 'La signora Rosalia vende fichi d’India. “Il fico ha le spine: usa il coltello!”',
        translation: 'A dona Rosalia vende figos-da-índia. “O figo tem espinhos: use a faca!”',
        choices: [
          { text: 'Linu apre il fico con il coltello.', translation: 'O Linu abre o figo com a faca.', next: 'fico' },
          {
            text: 'Linu apre il fico con le mani.',
            translation: 'O Linu abre o figo com as mãos.',
            wrong: 'Ai! A Rosalia avisou: “il fico ha le spine” (o figo tem espinhos) e disse para usar “il coltello”, a faca.',
          },
        ],
      },
      fico: {
        emoji: '😋',
        text: 'Il fico è dolce e fresco. “Ti piace?” “Mi piace moltissimo!”',
        translation: 'O figo é doce e fresco. “Você gosta?” “Gosto muitíssimo!”',
        choices: [{ text: 'Ora Linu cerca qualcosa di fritto.', translation: 'Agora o Linu procura alguma coisa frita.', next: 'friggitoria' }],
      },
      friggitoria: {
        emoji: '🧑‍🍳',
        text: 'In una friggitoria c’è un ragazzo, Salvo. “Qui a Palermo diciamo ‘l’arancina’, al femminile!”',
        translation: 'Numa casa de frituras há um rapaz, o Salvo. “Aqui em Palermo dizemos ‘l’arancina’, no feminino!”',
        choices: [
          { text: '“Un’arancina, per favore!”', translation: '“Uma arancina, por favor!”', next: 'arancina' },
          {
            text: '“Un arancino, per favore!”',
            translation: '“Um arancino, por favor!”',
            wrong: 'O Salvo acabou de explicar: em Palermo é “l’arancina”, FEMININO (“un’arancina”, com apóstrofo). “Arancino” se diz em Catânia!',
          },
        ],
      },
      arancina: {
        emoji: '🟠',
        text: 'L’arancina è grande come un’arancia. Dentro ci sono riso, ragù e piselli.',
        translation: 'A arancina é grande como uma laranja. Dentro tem arroz, ragu e ervilhas.',
        choices: [
          { text: 'Linu divide l’arancina con Salvo.', translation: 'O Linu divide a arancina com o Salvo.', next: 'final_bom' },
          { text: 'Linu mangia tre arancine.', translation: 'O Linu come três arancine.', next: 'final_pieno' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Salvo ride. “Ora sei palermitano anche tu!”',
        translation: 'O Salvo ri. “Agora você também é palermitano!”',
        ending: { tone: 'bom', title: 'Palermitano honorário', message: 'O Linu provou figo-da-índia, pediu a arancina do jeito certo e ganhou um amigo em Ballarò.' },
      },
      final_pieno: {
        emoji: '🥴',
        text: 'Tre arancine! Linu è pieno e non cammina più.',
        translation: 'Três arancine! O Linu está cheio e não consegue mais andar.',
        ending: { tone: 'neutro', title: 'Barriga de chumbo', message: 'As arancine são enormes: uma já basta! O resto do mercado ficou para outro dia.' },
      },
    },
  },
  {
    id: 'it-h6',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Su, sul San Salvatore',
    emoji: '🚠',
    summary: 'Em Lugano, na Suíça italiana, o Linu sobe o Monte San Salvatore de funicular.',
    cultural_context:
      'O italiano é uma das quatro línguas nacionais da Suíça, falado no cantão do Ticino e em partes dos Grisões. No Ticino, um “grotto” é um restaurante rústico, muitas vezes no bosque; antigamente os grotti eram adegas frescas cavadas junto às rochas.',
    start: 'start',
    glossary: [
      ['il lago', 'o lago'],
      ['la funicolare', 'o funicular, o bondinho sobre trilhos'],
      ['salire', 'subir (falso amigo: não é “sair”!)'],
      ['il grotto', 'restaurante rústico típico do Ticino'],
      ['in cima', 'no alto, no topo'],
      ['Mi piacciono…', 'Eu gosto de… (várias coisas)'],
      ['il battello', 'o barco de passeio'],
    ],
    nodes: {
      start: {
        emoji: '🏞️',
        text: 'Lugano, in Ticino. Il lago è blu e le montagne sono verdi.',
        translation: 'Lugano, no Ticino. O lago é azul e as montanhas são verdes.',
        choices: [
          { text: 'Linu va alla funicolare.', translation: 'O Linu vai ao funicular.', next: 'nadia' },
          { text: 'Linu prende il battello.', translation: 'O Linu pega o barco.', next: 'battello' },
        ],
      },
      battello: {
        emoji: '⛴️',
        text: 'Il battello parte. Linu vede il lago, ma la montagna resta lontana.',
        translation: 'O barco parte. O Linu vê o lago, mas a montanha fica longe.',
        ending: { tone: 'neutro', title: 'Só o lago', message: 'Passeio bonito, mas o Linu não viu Lugano lá de cima. Tente de novo!' },
      },
      nadia: {
        emoji: '👩',
        text: 'Una signora, Nadia, parla con Linu. “Saliamo sul San Salvatore? La vista è bellissima!”',
        translation: 'Uma senhora, a Nadia, fala com o Linu. “Vamos subir o San Salvatore? A vista é lindíssima!”',
        choices: [
          { text: '“Sì! Saliamo insieme.”', translation: '“Sim! Vamos subir juntos.”', next: 'salita' },
          {
            text: '“No, grazie. Io non esco, resto qui.”',
            translation: '“Não, obrigado. Eu não saio, fico aqui.”',
            wrong: 'Falso amigo! “Salire” é SUBIR, não sair (sair é “uscire”). A Nadia convidou o Linu para subir a montanha.',
          },
        ],
      },
      salita: {
        emoji: '🚞',
        text: 'La funicolare sale piano piano. Nadia dice: “Dopo mangiamo in un grotto.”',
        translation: 'O funicular sobe devagarinho. A Nadia diz: “Depois comemos num grotto.”',
        choices: [
          { text: '“Che cos’è un grotto?”', translation: '“O que é um grotto?”', next: 'grotto' },
          { text: 'Linu guarda il lago.', translation: 'O Linu olha o lago.', next: 'cima' },
        ],
      },
      grotto: {
        emoji: '🍲',
        text: '“In Ticino il grotto è un’osteria semplice, nel bosco. C’è la polenta!”',
        translation: '“No Ticino, o grotto é uma taberna simples, no bosque. Tem polenta!”',
        choices: [{ text: '“Che bello! Mi piace la polenta.”', translation: '“Que legal! Eu gosto de polenta.”', next: 'cima' }],
      },
      cima: {
        emoji: '🏔️',
        text: 'In cima c’è il sole. Nadia chiede: “Ti piacciono le montagne?”',
        translation: 'No topo tem sol. A Nadia pergunta: “Você gosta das montanhas?”',
        choices: [
          { text: '“Sì, mi piacciono moltissimo!”', translation: '“Sim, gosto muitíssimo!”', next: 'final_bom' },
          {
            text: '“Sì, mi piace le montagne.”',
            translation: '“Sim, eu gosto das montanhas.”',
            wrong: '“Le montagne” é plural, então o verbo também vai para o plural: “mi piacciono le montagne”. “Mi piace” é só para uma coisa.',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu vede il lago, Lugano e le Alpi. Poi Linu e Nadia mangiano la polenta nel grotto.',
        translation: 'O Linu vê o lago, Lugano e os Alpes. Depois o Linu e a Nadia comem polenta no grotto.',
        ending: { tone: 'bom', title: 'Lá no alto', message: 'O Linu subiu o San Salvatore, viu os Alpes e descobriu os grotti do Ticino.' },
      },
    },
  },

  // ───────────────────────── A2.1 ─────────────────────────
  {
    id: 'it-h7',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Il cannocchiale di Galileo',
    emoji: '🔭',
    summary: 'Em Florença, o Linu visita o Museo Galileo e descobre os telescópios (e um dedo!) do cientista.',
    cultural_context:
      'O Museo Galileo, em Florença, guarda dois telescópios construídos pelo próprio Galileu e até um dedo dele, retirado em 1737, quando seu corpo foi levado para a basílica de Santa Croce. Com a luneta, Galileu observou as montanhas da Lua e descobriu quatro luas de Júpiter (1609–1610).',
    start: 'start',
    glossary: [
      ['il cannocchiale', 'a luneta, o telescópio'],
      ['ha costruito', 'construiu (passato prossimo com avere)'],
      ['è andato / è arrivato', 'foi / chegou (com essere)'],
      ['Giove', 'Júpiter'],
      ['il dito / le dita', 'o dedo / os dedos (plural irregular e feminino!)'],
      ['la vetrina', 'a vitrine'],
      ['scappare', 'fugir, sair correndo'],
    ],
    nodes: {
      start: {
        emoji: '🏛️',
        text: 'Linu è arrivato a Firenze ieri sera. Stamattina è andato al Museo Galileo, vicino agli Uffizi.',
        translation: 'O Linu chegou a Florença ontem à noite. Hoje de manhã ele foi ao Museo Galileo, perto da galeria Uffizi.',
        choices: [
          { text: 'Linu è entrato subito nel museo.', translation: 'O Linu entrou logo no museu.', next: 'sala' },
          { text: 'Linu è andato prima sul Ponte Vecchio.', translation: 'O Linu foi primeiro à Ponte Vecchio.', next: 'ponte' },
        ],
      },
      ponte: {
        emoji: '🌉',
        text: 'Sul Ponte Vecchio Linu ha guardato le vetrine degli orafi per ore. Quando è arrivato al museo, era già chiuso.',
        translation: 'Na Ponte Vecchio o Linu olhou as vitrines dos ourives por horas. Quando chegou ao museu, já estava fechado.',
        ending: { tone: 'neutro', title: 'Ouro, mas sem estrelas', message: 'A Ponte Vecchio é linda, mas o Linu perdeu o museu. Tente de novo!' },
      },
      sala: {
        emoji: '🔭',
        text: 'Una guida, Chiara, ha salutato Linu. “Questi sono due cannocchiali di Galileo. Li ha costruiti lui, con le sue mani.”',
        translation: 'Uma guia, a Chiara, cumprimentou o Linu. “Estas são duas lunetas de Galileu. Ele as construiu com as próprias mãos.”',
        choices: [
          { text: '“Che cosa ha visto Galileo con il cannocchiale?”', translation: '“O que Galileu viu com a luneta?”', next: 'luna' },
          {
            text: '“Allora Galileo li ha comprati in un negozio?”',
            translation: '“Então Galileu as comprou numa loja?”',
            wrong: 'A Chiara disse “Li ha costruiti lui, con le sue mani”: foi ele mesmo que construiu as lunetas, com as próprias mãos.',
          },
        ],
      },
      luna: {
        emoji: '🌕',
        text: '“Ha guardato la Luna e ha visto le montagne. Poi ha scoperto quattro lune intorno a Giove.”',
        translation: '“Ele olhou a Lua e viu as montanhas. Depois descobriu quatro luas em volta de Júpiter.”',
        choices: [
          { text: '“Quattro lune? Incredibile!”', translation: '“Quatro luas? Incrível!”', next: 'dito' },
          {
            text: '“Quattro lune intorno alla Terra? Incredibile!”',
            translation: '“Quatro luas em volta da Terra? Incrível!”',
            wrong: 'A Chiara disse “intorno a Giove”: as quatro luas giram em volta de JÚPITER, não da Terra.',
          },
        ],
      },
      dito: {
        emoji: '☝️',
        text: 'Poi Chiara ha indicato una piccola vetrina. “E questo è il dito di Galileo!” Linu ha fatto un salto.',
        translation: 'Depois a Chiara apontou uma pequena vitrine. “E este é o dedo de Galileu!” O Linu deu um pulo.',
        choices: [
          { text: '“Un dito vero? Perché è qui?”', translation: '“Um dedo de verdade? Por que está aqui?”', next: 'storia' },
          { text: 'Linu è scappato fuori dal museo.', translation: 'O Linu saiu correndo do museu.', next: 'final_paura' },
        ],
      },
      final_paura: {
        emoji: '😱',
        text: 'Linu è corso fuori ed è andato a prendere un gelato. Ma il resto del museo non l’ha visto.',
        translation: 'O Linu saiu correndo e foi tomar um sorvete. Mas o resto do museu ele não viu.',
        ending: { tone: 'neutro', title: 'Susto científico', message: 'Um dedo numa vitrine assusta mesmo! Mas a história dele é curiosa. Tente de novo!' },
      },
      storia: {
        emoji: '⚰️',
        text: '“Nel 1737 hanno portato il corpo di Galileo nella basilica di Santa Croce. Alcuni ammiratori hanno preso tre dita come ricordo.”',
        translation: '“Em 1737 levaram o corpo de Galileu para a basílica de Santa Croce. Alguns admiradores pegaram três dedos como lembrança.”',
        choices: [{ text: 'Nel pomeriggio Linu è andato a Santa Croce.', translation: 'À tarde, o Linu foi a Santa Croce.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🌟',
        text: 'Nella basilica Linu ha trovato la tomba di Galileo. La sera è salito su una collina e ha guardato la Luna, come lui.',
        translation: 'Na basílica o Linu encontrou o túmulo de Galileu. À noite subiu numa colina e olhou a Lua, como ele.',
        ending: { tone: 'bom', title: 'Olhando a Lua', message: 'O Linu viu as lunetas de Galileu, descobriu a história do dedo e visitou o túmulo do cientista.' },
      },
    },
  },
  {
    id: 'it-h8',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Un bicerin sotto la Mole',
    emoji: '☕',
    summary: 'Em Turim, o Linu sobe a Mole Antonelliana e prova o bicerin, bebida típica da cidade.',
    cultural_context:
      'A Mole Antonelliana, símbolo de Turim, abriga o Museo Nazionale del Cinema; um elevador panorâmico de vidro sobe pelo meio da cúpula. O bicerin (“copinho” em piemontês) é uma bebida tradicional turinense de café, chocolate e creme de leite, servida em camadas e sem mexer.',
    start: 'start',
    glossary: [
      ['salire / è salito', 'subir / subiu (falso amigo: não é “sair”!)'],
      ['l’ascensore', 'o elevador'],
      ['lassù', 'lá em cima'],
      ['il bicerin', 'copinho (piemontês): café, chocolate e creme'],
      ['mescolare', 'misturar, mexer'],
      ['la crema di latte', 'o creme de leite'],
      ['è sceso', 'desceu'],
    ],
    nodes: {
      start: {
        emoji: '🚆',
        text: 'Ieri Linu è arrivato a Torino in treno. Oggi fa freddo, ma lui è uscito presto per vedere la Mole Antonelliana.',
        translation: 'Ontem o Linu chegou a Turim de trem. Hoje está frio, mas ele saiu cedo para ver a Mole Antonelliana.',
        choices: [
          { text: 'Linu è entrato nella Mole.', translation: 'O Linu entrou na Mole.', next: 'museo' },
          { text: 'Linu ha cercato una bevanda calda.', translation: 'O Linu procurou uma bebida quente.', next: 'caffe' },
        ],
      },
      museo: {
        emoji: '🎬',
        text: 'Nella Mole c’è il Museo del Cinema. Una ragazza, Elena, ha detto: “Io sono salita con l’ascensore fino alla cupola. Da lassù si vedono le Alpi!”',
        translation: 'Na Mole fica o Museu do Cinema. Uma moça, a Elena, disse: “Eu subi de elevador até a cúpula. Lá de cima se veem os Alpes!”',
        choices: [
          { text: 'Anche Linu è salito con l’ascensore.', translation: 'O Linu também subiu de elevador.', next: 'cima' },
          {
            text: 'Linu è uscito dalla Mole.',
            translation: 'O Linu saiu da Mole.',
            wrong: 'Falso amigo! “Sono salita” quer dizer “subi”, não “saí”. A Elena subiu de elevador até a cúpula, e o Linu quer ver os Alpes lá de cima.',
          },
        ],
      },
      cima: {
        emoji: '🏔️',
        text: 'Dall’ascensore di vetro Linu ha visto la città e, in fondo, le montagne con la neve. Quando è sceso, Elena ha detto: “Adesso ci vuole un bicerin!”',
        translation: 'Do elevador de vidro o Linu viu a cidade e, ao fundo, as montanhas com neve. Quando desceu, a Elena disse: “Agora é preciso um bicerin!”',
        choices: [{ text: '“Che cos’è un bicerin?”', translation: '“O que é um bicerin?”', next: 'bicerin' }],
      },
      caffe: {
        emoji: '🪟',
        text: 'Linu è entrato in un piccolo caffè storico. Il cameriere gli ha consigliato la specialità della casa, il bicerin.',
        translation: 'O Linu entrou num pequeno café histórico. O garçom lhe recomendou a especialidade da casa, o bicerin.',
        choices: [{ text: '“Che cos’è un bicerin?”', translation: '“O que é um bicerin?”', next: 'bicerin' }],
      },
      bicerin: {
        emoji: '☕',
        text: '“È una bevanda di Torino: caffè, cioccolato e crema di latte, nel bicchierino. Mi raccomando: non si mescola!”',
        translation: '“É uma bebida de Turim: café, chocolate e creme de leite, num copinho. Atenção: não se mexe!”',
        choices: [
          { text: 'Linu ha bevuto il bicerin senza mescolare.', translation: 'O Linu bebeu o bicerin sem mexer.', next: 'final_bom' },
          { text: 'Linu ha preso un tè normale.', translation: 'O Linu pediu um chá comum.', next: 'final_te' },
          {
            text: 'Linu ha mescolato bene con il cucchiaino.',
            translation: 'O Linu mexeu bem com a colherzinha.',
            wrong: 'Avisaram: “non si mescola!” (não se mexe). A graça do bicerin são as três camadas, bebidas uma depois da outra.',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Prima Linu ha sentito la crema fredda, poi il cioccolato e il caffè caldi. Dopo ha comprato dei gianduiotti per gli amici del Brasile.',
        translation: 'Primeiro o Linu sentiu o creme frio, depois o chocolate e o café quentes. Depois comprou uns gianduiotti para os amigos do Brasil.',
        ending: { tone: 'bom', title: 'Três camadas de Turim', message: 'O Linu subiu a Mole, bebeu o bicerin do jeito certo e levou chocolate de Turim para casa.' },
      },
      final_te: {
        emoji: '🍵',
        text: 'Linu ha bevuto il tè ed è tornato in albergo. Il bicerin è rimasto sul menù.',
        translation: 'O Linu tomou o chá e voltou para o hotel. O bicerin ficou no cardápio.',
        ending: { tone: 'neutro', title: 'Só um chá', message: 'Chá é bom, mas em Turim o Linu perdeu a bebida mais famosa da cidade. Tente de novo!' },
      },
    },
  },
  {
    id: 'it-h9',
    level: 'A2.1',
    cefr: 'A2',
    title: 'La vendemmia del nono',
    emoji: '🍇',
    summary: 'Em Bento Gonçalves, na Serra Gaúcha, o Linu participa da vindima com uma família que fala talian.',
    cultural_context:
      'A Serra Gaúcha recebeu imigrantes italianos a partir de 1875, a maioria do Vêneto. O talian, variedade brasileira do vêneto, foi reconhecido em 2014 como Referência Cultural Brasileira. A vindima acontece entre janeiro e março, no verão do hemisfério sul.',
    start: 'start',
    glossary: [
      ['la vendemmia', 'a vindima, a colheita da uva'],
      ['la vigna', 'o vinhedo, a parreira'],
      ['Bondì!', 'Bom dia! (talian; em italiano padrão: “Buongiorno!”)'],
      ['il nono / la nona', 'o avô / a avó (talian; em italiano padrão: “nonno”, “nonna”)'],
      ['il grappolo', 'o cacho (de uva)'],
      ['le forbici', 'a tesoura'],
      ['la cesta', 'o cesto'],
      ['la cantina', 'a adega (e não a cantina!)'],
    ],
    nodes: {
      start: {
        emoji: '🚌',
        text: 'Linu è venuto a Bento, nella Serra Gaúcha, per la vendemmia. La famiglia Zanella l’ha invitato nella sua vigna.',
        translation: 'O Linu veio a Bento Gonçalves, na Serra Gaúcha, para a vindima. A família Zanella o convidou para o seu vinhedo.',
        choices: [
          { text: 'Linu è andato subito nella vigna.', translation: 'O Linu foi direto para o vinhedo.', next: 'vigna' },
          { text: 'Linu è entrato prima in cucina.', translation: 'O Linu entrou primeiro na cozinha.', next: 'cucina' },
        ],
      },
      cucina: {
        emoji: '🫕',
        text: 'In cucina la nona Teresa ha detto: “Bondì, Linu! Ho fatto la polenta e il salame.” Il profumo era fortissimo.',
        translation: 'Na cozinha a nona Teresa disse: “Bom dia, Linu! Fiz polenta e salame.” O cheiro estava fortíssimo.',
        choices: [
          { text: 'Linu ha mangiato un po’ ed è andato nella vigna.', translation: 'O Linu comeu um pouco e foi para o vinhedo.', next: 'vigna' },
          { text: 'Linu ha mangiato tre piatti.', translation: 'O Linu comeu três pratos.', next: 'final_sonno' },
        ],
      },
      final_sonno: {
        emoji: '😴',
        text: 'Dopo tre piatti di polenta Linu si è addormentato sul divano. Quando si è svegliato, la vendemmia era finita.',
        translation: 'Depois de três pratos de polenta o Linu dormiu no sofá. Quando acordou, a vindima tinha terminado.',
        ending: { tone: 'neutro', title: 'Soneca de polenta', message: 'A polenta da nona é irresistível, mas o Linu perdeu a colheita. Tente de novo!' },
      },
      vigna: {
        emoji: '✂️',
        text: 'Nella vigna il nono Bepi ha dato a Linu un paio di forbici. “Tagliamo solo i grappoli maturi, quelli neri. I verdi no!”',
        translation: 'No vinhedo o nono Bepi deu ao Linu uma tesoura. “Vamos cortar só os cachos maduros, os pretos. Os verdes, não!”',
        choices: [
          { text: 'Linu ha tagliato solo i grappoli neri.', translation: 'O Linu cortou só os cachos pretos.', next: 'ceste' },
          {
            text: 'Linu ha tagliato anche i grappoli verdi.',
            translation: 'O Linu cortou também os cachos verdes.',
            wrong: 'O nono disse “solo i grappoli maturi, quelli neri. I verdi no!”: só os cachos maduros, os pretos. Os verdes ainda não estão prontos.',
          },
        ],
      },
      ceste: {
        emoji: '🧺',
        text: 'A mezzogiorno Linu ha riempito tre ceste. Il nono ha raccontato: “Il mio bisnonno è partito dal Veneto nel 1880. È arrivato qui senza niente.”',
        translation: 'Ao meio-dia o Linu já tinha enchido três cestos. O nono contou: “Meu bisavô partiu do Vêneto em 1880. Chegou aqui sem nada.”',
        choices: [
          { text: '“Dal Veneto? Allora parlate veneto?”', translation: '“Do Vêneto? Então vocês falam vêneto?”', next: 'talian' },
          { text: 'Linu ha portato le ceste in cantina.', translation: 'O Linu levou os cestos para a adega.', next: 'cantina' },
        ],
      },
      talian: {
        emoji: '🗣️',
        text: '“Qui parliamo il talian, un veneto brasiliano. Per esempio, io non sono il ‘nonno’: sono il nono!”',
        translation: '“Aqui falamos o talian, um vêneto brasileiro. Por exemplo, eu não sou o ‘nonno’: sou o nono!”',
        choices: [
          { text: '“Allora Lei è il nono Bepi!”', translation: '“Então o senhor é o nono Bepi!”', next: 'cantina' },
          {
            text: '“Il nono? Allora ci sono altri otto nonni?”',
            translation: '“O nono? Então existem mais oito avôs?”',
            wrong: 'Em talian, “nono” (com um n só) quer dizer AVÔ; no italiano padrão se diz “nonno”, com dois n. E cuidado: no italiano padrão, “nono” é o numeral 9º, como em português!',
          },
        ],
      },
      cantina: {
        emoji: '🎉',
        text: 'La sera tutta la famiglia ha fatto festa in cantina. Hanno mangiato, hanno cantato vecchie canzoni venete e hanno brindato: “Salute!”',
        translation: 'À noite a família toda fez festa na adega. Comeram, cantaram velhas canções vênetas e brindaram: “Saúde!”',
        ending: { tone: 'bom', title: 'Festa da vindima', message: 'O Linu colheu uva com o nono, aprendeu um pouco de talian e brindou com a família Zanella.' },
      },
    },
  },

  // ───────────────────────── A2.2 ─────────────────────────
  {
    id: 'it-h10',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Il Cannone di Paganini',
    emoji: '🎻',
    summary: 'Em Gênova, o Linu descobre o violino de Paganini, apelidado de “Canhão”.',
    cultural_context:
      'Niccolò Paganini, um dos maiores violinistas da história, nasceu em Gênova em 1782. Seu violino preferido, que ele chamava de “il Cannone” por causa do som potente, está guardado no Palazzo Tursi e ainda é tocado em ocasiões especiais, como pelo vencedor do Prêmio Paganini.',
    start: 'start',
    glossary: [
      ['svegliarsi / si è svegliato', 'acordar / acordou'],
      ['il porto', 'o porto'],
      ['la focaccia', 'focaccia, pão achatado com azeite (típico de Gênova)'],
      ['il gabbiano', 'a gaivota'],
      ['il cannone', 'o canhão'],
      ['lo chiamava', 'ele o chamava (imperfetto + pronome direto)'],
      ['stasera', 'hoje à noite'],
    ],
    nodes: {
      start: {
        emoji: '⚓',
        text: 'Linu si è svegliato presto a Genova. Dalla finestra vedeva il porto e le navi. Quel giorno voleva visitare Palazzo Tursi.',
        translation: 'O Linu acordou cedo em Gênova. Da janela ele via o porto e os navios. Naquele dia ele queria visitar o Palazzo Tursi.',
        choices: [
          { text: 'Si è vestito ed è andato subito al palazzo.', translation: 'Ele se vestiu e foi direto ao palácio.', next: 'palazzo' },
          { text: 'Si è fermato in un forno per la focaccia.', translation: 'Ele parou numa padaria para comer focaccia.', next: 'focaccia' },
        ],
      },
      focaccia: {
        emoji: '🫓',
        text: 'Il fornaio tagliava la focaccia ancora calda. Linu l’ha comprata e l’ha mangiata sul molo, mentre i gabbiani lo guardavano.',
        translation: 'O padeiro cortava a focaccia ainda quente. O Linu a comprou e a comeu no cais, enquanto as gaivotas o observavam.',
        choices: [
          { text: 'Dopo, Linu è andato al palazzo.', translation: 'Depois o Linu foi ao palácio.', next: 'palazzo' },
          { text: 'Linu ha dato un pezzo ai gabbiani.', translation: 'O Linu deu um pedaço às gaivotas.', next: 'final_gabbiani' },
        ],
      },
      final_gabbiani: {
        emoji: '🐦',
        text: 'Un gabbiano ha preso il pezzo, poi ne sono arrivati venti! Linu è scappato e ha passato la mattina a nascondersi.',
        translation: 'Uma gaivota pegou o pedaço, depois chegaram vinte! O Linu fugiu e passou a manhã se escondendo.',
        ending: { tone: 'neutro', title: 'Ataque das gaivotas', message: 'Nunca alimente as gaivotas do porto! O Linu ficou sem ver o violino. Tente de novo!' },
      },
      palazzo: {
        emoji: '🏛️',
        text: 'In una sala c’era una vetrina con un violino scuro. La custode, la signora Laura, si è avvicinata: “È il violino di Paganini. Lui lo chiamava ‘il Cannone’, perché aveva un suono fortissimo.”',
        translation: 'Numa sala havia uma vitrine com um violino escuro. A guarda, dona Laura, se aproximou: “É o violino de Paganini. Ele o chamava de ‘o Canhão’, porque tinha um som fortíssimo.”',
        choices: [
          { text: '“E oggi qualcuno lo suona?”', translation: '“E hoje alguém o toca?”', next: 'suona' },
          {
            text: '“Perché lo chiamava così? Era di metallo?”',
            translation: '“Por que o chamava assim? Era de metal?”',
            wrong: 'A dona Laura acabou de explicar: ele o chamava de “Cannone” porque o som era fortíssimo (“aveva un suono fortissimo”), não por ser de metal.',
          },
        ],
      },
      suona: {
        emoji: '🎼',
        text: '“Sì, ogni tanto lo suona un grande violinista. Sai, da bambino Paganini studiava tante ore al giorno e non si stancava mai.”',
        translation: '“Sim, de vez em quando um grande violinista o toca. Sabe, quando criança Paganini estudava muitas horas por dia e nunca se cansava.”',
        choices: [{ text: '“Posso sentirlo anch’io?”', translation: '“Posso ouvi-lo também?”', next: 'concerto' }],
      },
      concerto: {
        emoji: '🎟️',
        text: '“Sei fortunato! Stasera c’è un piccolo concerto proprio qui. Vieni alle otto!”',
        translation: '“Você tem sorte! Hoje à noite tem um pequeno concerto bem aqui. Venha às oito!”',
        choices: [
          { text: 'Linu è tornato alle otto di sera.', translation: 'O Linu voltou às oito da noite.', next: 'final_bom' },
          { text: 'Linu si è riposato in albergo.', translation: 'O Linu foi descansar no hotel.', next: 'final_sonno' },
          {
            text: 'Linu è tornato il giorno dopo, alle otto di mattina.',
            translation: 'O Linu voltou no dia seguinte, às oito da manhã.',
            wrong: 'A dona Laura disse “stasera” (hoje à noite), às oito. No dia seguinte de manhã o concerto já tinha passado!',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'La sala era piena. Il violinista suonava e Linu ascoltava a occhi chiusi. Il Cannone era davvero potente!',
        translation: 'A sala estava cheia. O violinista tocava e o Linu ouvia de olhos fechados. O Canhão era mesmo potente!',
        ending: { tone: 'bom', title: 'O som do Canhão', message: 'O Linu ouviu ao vivo o violino de Paganini, no coração de Gênova.' },
      },
      final_sonno: {
        emoji: '😴',
        text: 'Linu si è sdraiato sul letto solo per cinque minuti. Si è svegliato alle undici: il concerto era finito.',
        translation: 'O Linu se deitou na cama só por cinco minutos. Acordou às onze: o concerto tinha acabado.',
        ending: { tone: 'neutro', title: 'Cinco minutinhos…', message: 'O descanso durou demais e o Linu perdeu o concerto. Tente de novo!' },
      },
    },
  },
  {
    id: 'it-h11',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Cara Giulietta',
    emoji: '💌',
    summary: 'Em Verona, o Linu conhece as voluntárias que respondem às cartas escritas para Julieta.',
    cultural_context:
      'Todo ano, milhares de pessoas do mundo inteiro mandam cartas para Julieta, a personagem de Shakespeare, em Verona. Um grupo de voluntárias, as “secretárias de Julieta”, lê e responde a essas cartas. Verona também tem a Arena, anfiteatro romano onde há um festival de ópera no verão.',
    start: 'start',
    glossary: [
      ['il cortile', 'o pátio'],
      ['il balcone', 'a sacada'],
      ['la lettera / la busta', 'a carta / o envelope'],
      ['le leggiamo', 'nós as lemos (pronome direto “le”)'],
      ['trasferirsi', 'mudar-se (de cidade, de casa)'],
      ['sentirsi solo / sola', 'sentir-se sozinho / sozinha'],
      ['iscriversi', 'inscrever-se'],
    ],
    nodes: {
      start: {
        emoji: '🏘️',
        text: 'Linu passeggiava per Verona quando ha visto un cortile pieno di gente. Tutti guardavano un balcone e facevano foto.',
        translation: 'O Linu passeava por Verona quando viu um pátio cheio de gente. Todos olhavam para uma sacada e tiravam fotos.',
        choices: [
          { text: '“Scusi, di chi è quel balcone?”', translation: '“Com licença, de quem é aquela sacada?”', next: 'anna' },
          { text: 'Linu è andato all’Arena.', translation: 'O Linu foi à Arena.', next: 'arena' },
        ],
      },
      arena: {
        emoji: '🏟️',
        text: 'All’Arena preparavano l’opera della sera. Linu l’ha guardata da fuori e poi è tornato in albergo.',
        translation: 'Na Arena estavam preparando a ópera da noite. O Linu olhou de fora e depois voltou para o hotel.',
        ending: { tone: 'neutro', title: 'Por fora da Arena', message: 'A Arena é impressionante, mas o Linu perdeu uma história de amizade. Tente de novo!' },
      },
      anna: {
        emoji: '👩',
        text: 'Una ragazza, Anna, ha sorriso: “È il balcone di Giulietta! Io faccio la volontaria per lei: rispondo alle lettere che le arrivano.”',
        translation: 'Uma moça, a Anna, sorriu: “É a sacada de Julieta! Eu sou voluntária para ela: respondo às cartas que chegam para ela.”',
        choices: [{ text: '“Le lettere di Giulietta? Come funziona?”', translation: '“As cartas de Julieta? Como funciona?”', next: 'lettere' }],
      },
      lettere: {
        emoji: '📬',
        text: '“Ogni anno migliaia di persone scrivono a Giulietta. Noi le leggiamo tutte e rispondiamo a ognuna.”',
        translation: '“Todo ano, milhares de pessoas escrevem para Julieta. Nós lemos todas e respondemos a cada uma.”',
        choices: [
          { text: '“Posso vedere l’ufficio?”', translation: '“Posso ver o escritório?”', next: 'ufficio' },
          {
            text: '“Allora è Giulietta che scrive le lettere?”',
            translation: '“Então é a Julieta que escreve as cartas?”',
            wrong: 'É o contrário! As PESSOAS escrevem para Julieta (“scrivono a Giulietta”), e as voluntárias leem e respondem (“le leggiamo… e rispondiamo”).',
          },
        ],
      },
      ufficio: {
        emoji: '📦',
        text: 'Nell’ufficio c’erano scatole piene di buste. Anna ne ha presa una: “Questa viene dal Brasile ed è in portoghese. La leggi tu?”',
        translation: 'No escritório havia caixas cheias de envelopes. A Anna pegou um: “Este vem do Brasil e está em português. Você lê?”',
        choices: [{ text: 'Linu l’ha aperta e l’ha letta ad alta voce.', translation: 'O Linu a abriu e a leu em voz alta.', next: 'lettera' }],
      },
      lettera: {
        emoji: '✉️',
        text: 'La lettera era di Bia, una ragazza di Recife. Scriveva: “Mi sono trasferita in una città nuova e non ho amici. Mi sento sola.”',
        translation: 'A carta era da Bia, uma moça do Recife. Ela escrevia: “Mudei para uma cidade nova e não tenho amigos. Eu me sinto sozinha.”',
        choices: [
          { text: '“Rispondiamole insieme!”', translation: '“Vamos responder juntos!”', next: 'risposta' },
          {
            text: '“Scriviamole: ‘Saluta i tuoi amici!’”',
            translation: '“Vamos escrever: ‘Mande um abraço para os seus amigos!’',
            wrong: 'A Bia escreveu “non ho amici”: ela NÃO tem amigos na cidade nova e se sente sozinha. Mandar abraço para os amigos dela não faz sentido.',
          },
        ],
      },
      risposta: {
        emoji: '🖋️',
        text: 'Anna gli ha dato un foglio e una penna. Linu ci ha pensato un po’ e ha scritto in portoghese: “Cara Bia, l’amicizia arriva piano piano. Iscriviti a un coro o a una squadra: lì ti aspetta qualcuno.”',
        translation: 'A Anna lhe deu uma folha e uma caneta. O Linu pensou um pouco e escreveu em português: “Querida Bia, a amizade chega devagarinho. Inscreva-se num coral ou num time: lá alguém espera por você.”',
        choices: [{ text: 'Linu l’ha tradotta ad Anna.', translation: 'O Linu a traduziu para a Anna.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '💌',
        text: 'Anna l’ha firmata: “Giulietta”. Quando Linu è uscito, il cortile era ancora pieno di turisti, ma lui si sentiva diverso.',
        translation: 'A Anna a assinou: “Julieta”. Quando o Linu saiu, o pátio ainda estava cheio de turistas, mas ele se sentia diferente.',
        ending: { tone: 'bom', title: 'Secretário de Julieta', message: 'O Linu ajudou a responder a uma carta do Brasil e, por um dia, foi secretário de Julieta.' },
      },
    },
  },
  {
    id: 'it-h12',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Le balestre del Titano',
    emoji: '🏹',
    summary: 'Em San Marino, o Linu conhece um jovem besteiro que treina para o palio de 3 de setembro.',
    cultural_context:
      'San Marino é uma das repúblicas mais antigas do mundo: segundo a tradição, foi fundada em 301. No alto do Monte Titano ficam as três torres da cidade. No dia 3 de setembro, festa de San Marino, acontece o Palio delle Balestre Grandi, uma competição de bestas com trajes medievais.',
    start: 'start',
    glossary: [
      ['faceva caldo', 'fazia calor (falso amigo: “caldo” é quente!)'],
      ['alzarsi / si è alzato', 'levantar-se / levantou-se'],
      ['la balestra', 'a besta (arma de arremesso)'],
      ['il bersaglio', 'o alvo'],
      ['allenarsi', 'treinar'],
      ['da piccolo', 'quando criança, quando pequeno'],
      ['Tienila!', 'Segure-a!'],
    ],
    nodes: {
      start: {
        emoji: '🏰',
        text: 'Era il 2 settembre e faceva ancora caldo. Linu si è alzato presto ed è salito sul Monte Titano, fino alla prima torre.',
        translation: 'Era 2 de setembro e ainda fazia calor. O Linu se levantou cedo e subiu o Monte Titano, até a primeira torre.',
        choices: [
          { text: 'Linu ha seguito un rumore di tamburi.', translation: 'O Linu seguiu um barulho de tambores.', next: 'tamburi' },
          { text: 'Linu si è seduto a guardare il panorama.', translation: 'O Linu se sentou para olhar a paisagem.', next: 'panorama' },
        ],
      },
      panorama: {
        emoji: '🌄',
        text: 'Da lassù si vedevano le colline e, lontano, il mare. Il sole era caldo e Linu si è addormentato sulla panchina.',
        translation: 'Lá de cima se viam as colinas e, ao longe, o mar. O sol estava quente e o Linu dormiu no banco.',
        ending: { tone: 'neutro', title: 'Soneca com vista', message: 'Que vista! Mas o Linu perdeu os besteiros de San Marino. Tente de novo!' },
      },
      tamburi: {
        emoji: '🥁',
        text: 'In una piazza c’erano ragazzi vestiti come nel Medioevo. Uno di loro, Tommaso, puliva una grande balestra di legno.',
        translation: 'Numa praça havia jovens vestidos como na Idade Média. Um deles, o Tommaso, limpava uma grande besta de madeira.',
        choices: [{ text: '“Ciao! Che cosa fate?”', translation: '“Oi! O que vocês estão fazendo?”', next: 'palio' }],
      },
      palio: {
        emoji: '🎯',
        text: '“Ci alleniamo per il palio di domani, il 3 settembre: è la festa di San Marino. Tiriamo con la balestra a un bersaglio lontano.”',
        translation: '“Estamos treinando para o palio de amanhã, 3 de setembro: é a festa de San Marino. Atiramos com a besta num alvo distante.”',
        choices: [{ text: '“E tu, quando hai cominciato?”', translation: '“E você, quando começou?”', next: 'infanzia' }],
      },
      infanzia: {
        emoji: '👦',
        text: '“Da piccolo venivo qui con mio padre. Lui tirava e io lo guardavo. A quindici anni ho cominciato anch’io.”',
        translation: '“Quando pequeno eu vinha aqui com meu pai. Ele atirava e eu o olhava. Aos quinze anos comecei também.”',
        choices: [
          { text: '“Posso provare anch’io?”', translation: '“Posso tentar também?”', next: 'prova' },
          {
            text: '“Allora tu tiravi già da piccolo!”',
            translation: '“Então você já atirava quando pequeno!”',
            wrong: 'Não: quando pequeno, o PAI atirava e o Tommaso só olhava (“lui tirava e io lo guardavo”). O imperfetto descreve esse hábito. Ele só começou aos quinze anos (“ho cominciato”).',
          },
        ],
      },
      prova: {
        emoji: '🏹',
        text: 'Tommaso gli ha dato la balestra: “Tienila ferma, mira con calma e non avere fretta.” Linu l’ha presa con attenzione.',
        translation: 'O Tommaso lhe deu a besta: “Segure-a firme, mire com calma e não tenha pressa.” O Linu a pegou com cuidado.',
        choices: [
          { text: 'Linu ha mirato piano piano e ha tirato.', translation: 'O Linu mirou devagar e atirou.', next: 'final_bom' },
          {
            text: 'Linu ha tirato subito, senza mirare.',
            translation: 'O Linu atirou na hora, sem mirar.',
            wrong: 'O Tommaso disse “mira con calma e non avere fretta”: mire com calma e sem pressa. Atirar sem mirar pode ser perigoso!',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Il dardo non ha preso il centro, ma il bersaglio sì! Tommaso l’ha invitato al palio. Il giorno dopo Linu era in prima fila e faceva il tifo per lui.',
        translation: 'O dardo não acertou o centro, mas o alvo sim! O Tommaso o convidou para o palio. No dia seguinte o Linu estava na primeira fila, torcendo por ele.',
        ending: { tone: 'bom', title: 'Besteiro por um dia', message: 'O Linu acertou o alvo e torceu pelo novo amigo no palio de San Marino.' },
      },
    },
  },

  // ───────────────────────── B1.1 ─────────────────────────
  {
    id: 'it-h13',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Sul tetto del Duomo',
    emoji: '⛪',
    summary: 'Em Milão, uma “sciura” ensina o Linu a chegar aos terraços do Duomo, onde brilha a Madonnina.',
    cultural_context:
      'Dá para caminhar sobre o telhado do Duomo de Milão, entre dezenas de pináculos e estátuas de mármore. No pináculo mais alto brilha a Madonnina, uma estátua dourada que por séculos foi o ponto mais alto da cidade. Em milanês, “sciura” quer dizer “senhora”.',
    start: 'start',
    glossary: [
      ['la sciura', 'a senhora (milanês)'],
      ['vada / giri / prenda', 'vá / vire / pegue (imperativo formal, Lei)'],
      ['Me lo può indicare?', 'Pode me mostrar (o caminho)?'],
      ['ce l’hai', 'você tem (ele, o objeto)'],
      ['te lo do', 'eu o dou a você'],
      ['gliel’ha fatta', 'tirou-a para ele (a foto)'],
      ['la guglia', 'o pináculo'],
      ['ne valeva la pena', 'valeu a pena'],
    ],
    nodes: {
      start: {
        emoji: '🎟️',
        text: 'Linu era in piazza del Duomo con due biglietti per le terrazze: uno per sé e uno per la sua amica Marta. Marta gli ha scritto: “Sono in ritardo! Aspettami all’ingresso delle terrazze.” Ma dov’era l’ingresso?',
        translation: 'O Linu estava na praça do Duomo com dois ingressos para os terraços: um para ele e um para a amiga Marta. A Marta lhe escreveu: “Estou atrasada! Espere por mim na entrada dos terraços.” Mas onde ficava a entrada?',
        choices: [
          { text: 'Chiedere aiuto a una signora.', translation: 'Pedir ajuda a uma senhora.', next: 'sciura' },
          { text: 'Entrare nella chiesa dalla porta principale.', translation: 'Entrar na igreja pela porta principal.', next: 'chiesa' },
        ],
      },
      chiesa: {
        emoji: '🕯️',
        text: 'Dentro il Duomo c’era un grande silenzio. Linu ha chiesto a un custode dove si saliva sul tetto. “Non di qui”, gli ha risposto. “Esca, vada in fondo alla piazza e giri a sinistra.”',
        translation: 'Dentro do Duomo havia um grande silêncio. O Linu perguntou a um guarda onde se subia ao telhado. “Não por aqui”, respondeu ele. “Saia, vá até o fim da praça e vire à esquerda.”',
        choices: [{ text: 'Uscire e seguire le indicazioni.', translation: 'Sair e seguir as instruções.', next: 'ingresso' }],
      },
      sciura: {
        emoji: '👵',
        text: 'Una signora anziana con un cagnolino gli ha sorriso: “Cosa cerca, giovanotto? Io sono la sciura Pina, il Duomo lo conosco da ottant’anni!” Linu le ha spiegato che voleva salire sulle terrazze.',
        translation: 'Uma senhora idosa com um cachorrinho sorriu para ele: “O que procura, rapaz? Eu sou a dona Pina, o Duomo eu conheço há oitenta anos!” O Linu explicou a ela que queria subir aos terraços.',
        choices: [{ text: '“Me lo può indicare, per favore?”', translation: '“A senhora pode me mostrar, por favor?”', next: 'indicazioni' }],
      },
      indicazioni: {
        emoji: '🧭',
        text: '“Ma certo! Vada in fondo alla piazza e giri a sinistra, lungo il fianco della chiesa. Lì ci sono le scale e l’ascensore: prenda le scale, sono più belle!”',
        translation: '“Mas claro! Vá até o fim da praça e vire à esquerda, ao longo da lateral da igreja. Ali ficam a escada e o elevador: pegue a escada, é mais bonita!”',
        choices: [
          { text: 'Andare in fondo alla piazza e girare a sinistra.', translation: 'Ir até o fim da praça e virar à esquerda.', next: 'ingresso' },
          {
            text: 'Girare subito a destra.',
            translation: 'Virar logo à direita.',
            wrong: 'A dona Pina disse “giri a sinistra” (vire à esquerda), e só depois de ir até o fim da praça (“vada in fondo alla piazza”).',
          },
        ],
      },
      ingresso: {
        emoji: '🏃‍♀️',
        text: 'All’ingresso Linu ha aspettato. Dopo dieci minuti è arrivata Marta, di corsa: “Scusami! Il mio biglietto ce l’hai tu, vero? Me lo dai?”',
        translation: 'Na entrada o Linu esperou. Depois de dez minutos a Marta chegou correndo: “Desculpe! O meu ingresso está com você, né? Me dá?”',
        choices: [
          { text: '“Certo, eccolo: te lo do subito.”', translation: '“Claro, aqui está: já te dou.”', next: 'scale' },
          {
            text: '“No, il biglietto ce l’hai tu!”',
            translation: '“Não, o ingresso está com você!”',
            wrong: 'No começo da história, o Linu tinha os DOIS ingressos: um para ele e um para a Marta. É ele que deve dá-lo a ela: “te lo do”.',
          },
        ],
      },
      scale: {
        emoji: '🪜',
        text: 'Sono saliti a piedi: più di duecento gradini! In cima c’era un bosco di guglie e di statue di marmo. E sulla guglia più alta brillava la Madonnina d’oro.',
        translation: 'Subiram a pé: mais de duzentos degraus! No alto havia uma floresta de pináculos e estátuas de mármore. E no pináculo mais alto brilhava a Madonnina dourada.',
        choices: [
          { text: '“Marta, guardala! Fammi una foto con lei.”', translation: '“Marta, olhe para ela! Tire uma foto minha com ela.”', next: 'foto' },
          { text: 'Fotografare tutte le statue, una per una.', translation: 'Fotografar todas as estátuas, uma por uma.', next: 'statue' },
        ],
      },
      statue: {
        emoji: '🗿',
        text: 'Le statue erano tantissime e Linu ne ha fotografate più di cento. Marta lo chiamava, ma lui non la sentiva. Alla fine lei si è seduta ad aspettarlo, un po’ offesa.',
        translation: 'As estátuas eram muitíssimas e o Linu fotografou mais de cem. A Marta o chamava, mas ele não a ouvia. No fim ela se sentou para esperá-lo, um pouco chateada.',
        ending: { tone: 'neutro', title: 'Cem estátuas, uma amiga', message: 'O Linu fotografou o telhado inteiro, mas esqueceu da Marta. Tente de novo!' },
      },
      foto: {
        emoji: '📸',
        text: 'Marta gliel’ha fatta subito: Linu e, dietro di lui, la Madonnina. “Mandamela!”, ha detto Linu. “Te la mando stasera”, ha risposto lei.',
        translation: 'A Marta tirou a foto na hora: o Linu e, atrás dele, a Madonnina. “Me manda!”, disse o Linu. “Te mando hoje à noite”, respondeu ela.',
        choices: [{ text: 'Guardare il panorama insieme.', translation: 'Olhar a paisagem juntos.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Da lassù si vedeva tutta Milano e, lontano, anche le Alpi. “Grazie, sciura Pina!”, ha pensato Linu. Ne valeva proprio la pena.',
        translation: 'Lá de cima se via Milão inteira e, ao longe, até os Alpes. “Obrigado, dona Pina!”, pensou o Linu. Valeu mesmo a pena.',
        ending: { tone: 'bom', title: 'No telhado de Milão', message: 'O Linu seguiu as instruções da sciura, entregou o ingresso à Marta e viu a Madonnina de pertinho.' },
      },
    },
  },
  {
    id: 'it-h14',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Le orecchiette di Bari Vecchia',
    emoji: '🍝',
    summary: 'Em Bari, a dona Nunzia ensina o Linu a fazer orecchiette na porta de casa.',
    cultural_context:
      'Nas ruelas de Bari Vecchia, perto do Arco Basso, senhoras fazem orecchiette à mão na porta de casa e as vendem aos passantes. Na basílica da cidade estão as relíquias de São Nicolau, trazidas de Mira (na atual Turquia) por marinheiros de Bari em 1087.',
    start: 'start',
    glossary: [
      ['i vicoli', 'as ruelas, os becos'],
      ['le orecchiette', 'massa em forma de orelhinha, típica da Puglia'],
      ['Siediti!', 'Sente-se! (imperativo, tu)'],
      ['trascinalo', 'arraste-o'],
      ['non schiacciarlo', 'não o amasse (imperativo negativo)'],
      ['ne vuoi fare altre?', 'quer fazer outras (delas)?'],
      ['gliele ha messe', 'colocou-as para ele'],
      ['le cime di rapa', 'folhas e brotos de nabo, verdura típica'],
    ],
    nodes: {
      start: {
        emoji: '🏘️',
        text: 'Linu passeggiava per i vicoli di Bari Vecchia quando ha visto alcune signore sedute davanti alle porte di casa. Sui tavoli c’erano migliaia di piccole conchiglie di pasta. Una di loro, la signora Nunzia, lavorava velocissima con un coltello.',
        translation: 'O Linu passeava pelas ruelas de Bari Vecchia quando viu algumas senhoras sentadas diante das portas de casa. Nas mesas havia milhares de conchinhas de massa. Uma delas, a dona Nunzia, trabalhava rapidíssimo com uma faca.',
        choices: [
          { text: '“Buongiorno! Che cosa fa?”', translation: '“Bom dia! O que a senhora está fazendo?”', next: 'nunzia' },
          { text: 'Andare prima alla basilica di San Nicola.', translation: 'Ir primeiro à basílica de São Nicolau.', next: 'basilica' },
        ],
      },
      basilica: {
        emoji: '⛪',
        text: 'Nella basilica c’era molta gente. Un signore gli ha raccontato che nel 1087 alcuni marinai di Bari ci hanno portato le reliquie di San Nicola da Mira. “Ci vengono pellegrini da tutto il mondo”, ha aggiunto.',
        translation: 'Na basílica havia muita gente. Um senhor lhe contou que em 1087 alguns marinheiros de Bari trouxeram para lá as relíquias de São Nicolau, vindas de Mira. “Vêm peregrinos do mundo todo”, acrescentou.',
        choices: [
          { text: 'Tornare dalle signore della pasta.', translation: 'Voltar para as senhoras da massa.', next: 'nunzia' },
          {
            text: '“Allora San Nicola è nato qui a Bari?”',
            translation: '“Então São Nicolau nasceu aqui em Bari?”',
            wrong: 'O senhor contou que os marinheiros trouxeram as relíquias DE Mira (“da Mira”), longe da Itália. São Nicolau viveu lá; só as relíquias vieram para Bari.',
          },
        ],
      },
      nunzia: {
        emoji: '👵',
        text: '“Faccio le orecchiette, tesoro. Si chiamano così perché sembrano piccole orecchie. Vuoi provare? Siediti qui, vicino a me!”',
        translation: '“Faço orecchiette, meu bem. Chamam-se assim porque parecem orelhinhas. Quer tentar? Sente-se aqui, perto de mim!”',
        choices: [{ text: 'Sedersi vicino a Nunzia.', translation: 'Sentar-se perto da Nunzia.', next: 'lezione' }],
      },
      lezione: {
        emoji: '🤏',
        text: '“Prendi un pezzetto di pasta, trascinalo con il coltello e poi giralo sul pollice. Piano: non schiacciarlo troppo!” Nunzia lo ha fatto in un secondo.',
        translation: '“Pegue um pedacinho de massa, arraste-o com a faca e depois vire-o no polegar. Devagar: não o amasse demais!” A Nunzia fez em um segundo.',
        choices: [
          { text: 'Trascinare la pasta piano e girarla sul pollice.', translation: 'Arrastar a massa devagar e virá-la no polegar.', next: 'prima' },
          {
            text: 'Schiacciare forte la pasta con il pollice.',
            translation: 'Amassar forte a massa com o polegar.',
            wrong: 'A Nunzia disse “non schiacciarlo troppo!” (não o amasse demais). O segredo é arrastar com a faca e virar no polegar, com delicadeza.',
          },
        ],
      },
      prima: {
        emoji: '🥹',
        text: 'La prima orecchietta di Linu era un po’ storta, ma Nunzia ha applaudito. “Bravo! Ne vuoi fare altre?” Le altre signore ridevano.',
        translation: 'A primeira orecchietta do Linu estava meio torta, mas a Nunzia aplaudiu. “Muito bem! Quer fazer mais?” As outras senhoras riam.',
        choices: [
          { text: '“Sì, ne faccio altre cento!”', translation: '“Sim, vou fazer mais cem!”', next: 'cento' },
          { text: '“No, grazie. Preferisco comprarle.”', translation: '“Não, obrigado. Prefiro comprá-las.”', next: 'compra' },
        ],
      },
      compra: {
        emoji: '🛍️',
        text: 'Linu ne ha comprato mezzo chilo. Nunzia gliele ha messe in un sacchetto di carta: “Cucinale con le cime di rapa!” Buone, ma non erano sue.',
        translation: 'O Linu comprou meio quilo. A Nunzia as colocou para ele num saquinho de papel: “Cozinhe-as com cime di rapa!” Gostosas, mas não eram dele.',
        ending: { tone: 'neutro', title: 'Orecchiette de sacolinha', message: 'O Linu levou orecchiette para casa, mas desistiu cedo de aprender. Tente de novo!' },
      },
      cento: {
        emoji: '🫳',
        text: 'Dopo un’ora Linu aveva le mani bianche di farina e un vassoio pieno. Nunzia ha detto: “Stasera le cuciniamo per tutta la famiglia. Vieni a cena da noi?”',
        translation: 'Depois de uma hora o Linu estava com as mãos brancas de farinha e uma bandeja cheia. A Nunzia disse: “Hoje à noite vamos cozinhá-las para a família toda. Vem jantar com a gente?”',
        choices: [
          { text: '“Grazie, ci vengo volentieri!”', translation: '“Obrigado, vou com prazer!”', next: 'cena' },
          { text: '“Mi dispiace, stasera parto.”', translation: '“Sinto muito, vou embora hoje à noite.”', next: 'parte' },
        ],
      },
      parte: {
        emoji: '🚆',
        text: 'Nunzia gli ha dato un bacio sulla fronte e un sacchetto di orecchiette per il viaggio. “Tornaci presto, eh!” Sul treno Linu guardava le sue mani ancora bianche.',
        translation: 'A Nunzia lhe deu um beijo na testa e um saquinho de orecchiette para a viagem. “Volte logo, hein!” No trem o Linu olhava as mãos ainda brancas.',
        ending: { tone: 'neutro', title: 'Farinha na viagem', message: 'O Linu aprendeu a fazer orecchiette, mas perdeu o jantar em família. Da próxima vez, fique!' },
      },
      cena: {
        emoji: '🎉',
        text: 'Sulla terrazza Nunzia ha servito le orecchiette con le cime di rapa. Sua nipote Grazia ne ha pescata una storta: “E questa chi l’ha fatta?” Tutti hanno riso, Linu più di tutti.',
        translation: 'No terraço a Nunzia serviu as orecchiette com cime di rapa. A neta dela, Grazia, pescou uma torta: “E esta, quem fez?” Todos riram, o Linu mais que todos.',
        ending: { tone: 'bom', title: 'A orecchietta torta', message: 'O Linu aprendeu a fazer orecchiette com a dona Nunzia e jantou com a família dela em Bari Vecchia.' },
      },
    },
  },
  {
    id: 'it-h15',
    level: 'B1.1',
    cefr: 'B1',
    title: 'La gente rossa di Molentargius',
    emoji: '🦩',
    summary: 'Em Cagliari, o Linu vai de bicicleta ao parque de Molentargius ver os flamingos.',
    cultural_context:
      'O parque de Molentargius, dentro da cidade de Cagliari, é formado por lagoas e antigas salinas onde milhares de flamingos se alimentam e fazem ninhos. Os flamingos ficam cor-de-rosa por causa dos pequenos crustáceos que comem; os filhotes nascem acinzentados. Na Sardenha, “ajò!” quer dizer “vamos!”.',
    start: 'start',
    glossary: [
      ['Ajò!', 'Vamos! Anda! (sardo, muito usado na Sardenha)'],
      ['il fenicottero', 'o flamingo'],
      ['lo stagno', 'a lagoa'],
      ['il binocolo', 'o binóculo'],
      ['Tienilo tu!', 'Segure-o você!'],
      ['non avvicinarti', 'não se aproxime (imperativo negativo)'],
      ['ci fanno il nido', 'fazem ninho ali'],
      ['il pulcino', 'o filhote (de ave)'],
    ],
    nodes: {
      start: {
        emoji: '🚲',
        text: 'A Cagliari Linu ha noleggiato una bicicletta per andare al parco di Molentargius. All’ingresso lo aspettava Efisio, una guida con un binocolo al collo. “Ajò, Linu! I fenicotteri non ci aspettano!”',
        translation: 'Em Cagliari o Linu alugou uma bicicleta para ir ao parque de Molentargius. Na entrada o esperava o Efisio, um guia com um binóculo no pescoço. “Ajò, Linu! Os flamingos não vão esperar por nós!”',
        choices: [
          { text: '“Ajò? Che cosa vuol dire?”', translation: '“Ajò? O que quer dizer?”', next: 'ajo' },
          { text: 'Partire subito in bicicletta.', translation: 'Partir logo de bicicleta.', next: 'sentiero' },
        ],
      },
      ajo: {
        emoji: '🗣️',
        text: '“È sardo: vuol dire ‘andiamo, su!’. Qui lo diciamo cento volte al giorno.” Efisio ha riso ed è partito per primo.',
        translation: '“É sardo: quer dizer ‘vamos, anda!’. Aqui dizemos isso cem vezes por dia.” O Efisio riu e partiu na frente.',
        choices: [{ text: 'Seguirlo in bicicletta.', translation: 'Segui-lo de bicicleta.', next: 'sentiero' }],
      },
      sentiero: {
        emoji: '🔭',
        text: 'Pedalavano lungo gli stagni, tra l’acqua e il sale. A un tratto Efisio si è fermato e ha passato il binocolo a Linu. “Tienilo tu e guarda laggiù, verso l’acqua bassa. Ma non fare rumore!”',
        translation: 'Pedalavam ao longo das lagoas, entre a água e o sal. De repente o Efisio parou e passou o binóculo ao Linu. “Segure-o você e olhe lá embaixo, para a água rasa. Mas não faça barulho!”',
        choices: [
          { text: 'Guardare in silenzio con il binocolo.', translation: 'Olhar em silêncio com o binóculo.', next: 'fenicotteri' },
          {
            text: 'Chiamare i fenicotteri ad alta voce.',
            translation: 'Chamar os flamingos em voz alta.',
            wrong: 'O Efisio pediu “non fare rumore!” (não faça barulho). Com gritos, os flamingos iam fugir.',
          },
        ],
      },
      fenicotteri: {
        emoji: '🦩',
        text: 'Nell’acqua c’erano centinaia di fenicotteri rosa. “Qui li chiamano ‘sa genti arrubia’, la gente rossa”, ha sussurrato Efisio. “Ne arrivano migliaia ogni anno, e molti ci fanno anche il nido.”',
        translation: 'Na água havia centenas de flamingos cor-de-rosa. “Aqui os chamam de ‘sa genti arrubia’, a gente vermelha”, sussurrou o Efisio. “Chegam milhares todo ano, e muitos fazem ninho aqui.”',
        choices: [
          { text: '“Perché sono rosa?”', translation: '“Por que eles são cor-de-rosa?”', next: 'rosa' },
          { text: '“Posso avvicinarmi un po’?”', translation: '“Posso chegar um pouco mais perto?”', next: 'vicino' },
        ],
      },
      rosa: {
        emoji: '🦐',
        text: '“Per quello che mangiano: piccoli gamberetti che vivono nell’acqua salata e che li colorano. I pulcini, invece, nascono grigi e diventano rosa piano piano.”',
        translation: '“Pelo que comem: pequenos camarõezinhos que vivem na água salgada e que os colorem. Os filhotes, ao contrário, nascem cinzentos e vão ficando cor-de-rosa aos poucos.”',
        choices: [
          { text: '“Che bello! Guardiamoli ancora un po’.”', translation: '“Que lindo! Vamos olhar mais um pouco.”', next: 'tramonto' },
          {
            text: '“Allora anche i pulcini sono già rosa!”',
            translation: '“Então os filhotes também já são cor-de-rosa!”',
            wrong: 'O Efisio disse que os filhotes “nascono grigi” (nascem cinzentos) e só ficam cor-de-rosa aos poucos, com a comida.',
          },
        ],
      },
      vicino: {
        emoji: '🚫',
        text: '“No, non avvicinarti: se li spaventi, lasciano il nido e le uova. Restiamo qui e usiamo il binocolo.” Linu ha capito e si è seduto sull’erba.',
        translation: '“Não, não se aproxime: se você os assustar, eles abandonam o ninho e os ovos. Vamos ficar aqui e usar o binóculo.” O Linu entendeu e se sentou na grama.',
        choices: [{ text: 'Restare lontano e guardare.', translation: 'Ficar longe e observar.', next: 'tramonto' }],
      },
      tramonto: {
        emoji: '🌅',
        text: 'Al tramonto il cielo è diventato arancione e i fenicotteri si sono alzati in volo. Efisio ha chiesto: “Vuoi una foto? Dammi il telefono, te la faccio io.”',
        translation: 'No pôr do sol o céu ficou laranja e os flamingos levantaram voo. O Efisio perguntou: “Quer uma foto? Me dê o telefone, eu tiro para você.”',
        choices: [
          { text: 'Dargli il telefono.', translation: 'Dar o telefone a ele.', next: 'final_bom' },
          { text: 'Andare subito al Poetto a fare il bagno.', translation: 'Ir correndo para a praia do Poetto tomar banho de mar.', next: 'final_mare' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Efisio gliel’ha fatta: un piccolo pinguino bianco e nero davanti a uno stormo rosa. “Mandamela!”, ha detto Efisio. “Te la mando subito”, ha risposto Linu. Ajò, che giornata!',
        translation: 'O Efisio tirou a foto para ele: um pinguinzinho preto e branco diante de um bando cor-de-rosa. “Me manda!”, disse o Efisio. “Te mando já”, respondeu o Linu. Ajò, que dia!',
        ending: { tone: 'bom', title: 'Pinguim entre flamingos', message: 'O Linu viu “sa genti arrubia” levantar voo em Molentargius e aprendeu a dizer “ajò!”.' },
      },
      final_mare: {
        emoji: '🏖️',
        text: 'Al Poetto l’acqua era fresca e Linu ci è rimasto fino al buio. Bellissimo, ma i fenicotteri in volo li ha visti solo da lontano.',
        translation: 'No Poetto a água estava fresquinha e o Linu ficou lá até escurecer. Lindo, mas os flamingos em voo ele só viu de longe.',
        ending: { tone: 'neutro', title: 'Mar em vez de flamingos', message: 'Um pinguim não resiste ao mar, mas o Linu perdeu o voo dos flamingos. Tente de novo!' },
      },
    },
  },
  // ───────────────────────── it-h16 · B1.2 · Matera ─────────────────────────
  {
    id: 'it-h16',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Il timbro del pane',
    emoji: '🍞',
    summary: 'Nos Sassi de Matera, o Linu conhece uma padeira que guarda os antigos carimbos de pão e promete fazer um para ele.',
    cultural_context:
      'Os Sassi de Matera, bairros escavados na rocha, são Patrimônio Mundial da UNESCO desde 1993, e a cidade foi Capital Europeia da Cultura em 2019. Antigamente cada família marcava o pão com um carimbo de madeira antes de levá-lo ao forno comunitário.',
    start: 'start',
    glossary: [
      ['il forno', 'o forno (e também a padaria)'],
      ['il timbro', 'o carimbo'],
      ['stare per + infinito', 'estar prestes a (fazer algo)'],
      ['stare + gerundio', 'estar fazendo (algo)'],
      ['impastare', 'sovar, amassar a massa'],
      ['la semola', 'a sêmola de trigo duro'],
      ['i Sassi', 'os bairros antigos de Matera, escavados na rocha'],
      ['salire', 'subir (falso amigo: não é “sair”)'],
    ],
    nodes: {
      start: {
        emoji: '🏘️',
        text: 'Linu è a Matera da due giorni. Una mattina, mentre sta camminando tra i Sassi, sente un profumo di pane caldo. Sulla porta di un forno, una signora anziana gli dice: “Sto per infornare le ultime pagnotte. Se aspetti dieci minuti, ti farò assaggiare il pane più buono della Basilicata.”',
        translation: 'O Linu está em Matera há dois dias. Certa manhã, enquanto caminha pelos Sassi, sente um cheiro de pão quente. Na porta de um forno, uma senhora idosa lhe diz: “Estou prestes a pôr no forno os últimos pães. Se você esperar dez minutos, vou te dar para provar o pão mais gostoso da Basilicata.”',
        choices: [
          { text: '“Aspetterò volentieri!”', translation: '“Vou esperar com prazer!”', next: 'forno' },
          {
            text: '“Allora il pane è già pronto? Lo prendo subito.”',
            translation: '“Então o pão já está pronto? Vou levar agora mesmo.”',
            wrong: 'A senhora disse “sto per infornare”: ela está PRESTES A pôr o pão no forno. Ele ainda não está pronto; é preciso esperar dez minutos.',
          },
        ],
      },
      forno: {
        emoji: '🔥',
        text: 'La signora si chiama Nunzia. Su un tavolo di legno ci sono tanti piccoli timbri. “Una volta ogni famiglia impastava a casa e portava il pane al forno comune”, racconta. “Ognuna lo segnava con il suo timbro, così nessuno si sbagliava. Se vuoi, ne intaglierò uno anche per te.”',
        translation: 'A senhora se chama Nunzia. Sobre uma mesa de madeira há muitos carimbos pequenos. “Antigamente cada família sovava a massa em casa e levava o pão ao forno comunitário”, ela conta. “Cada uma o marcava com o seu carimbo, assim ninguém se enganava. Se você quiser, vou entalhar um para você também.”',
        choices: [
          { text: '“Mi piacerebbe moltissimo! Che disegno ci farà?”', translation: '“Eu adoraria! Que desenho a senhora vai fazer nele?”', next: 'timbro' },
          { text: '“Potrei aiutarla a impastare?”', translation: '“Eu poderia ajudar a senhora a sovar a massa?”', next: 'impasto' },
        ],
      },
      timbro: {
        emoji: '🪵',
        text: 'Nunzia prende un pezzo di legno e lo gira tra le mani. “Ci farò un pinguino, naturalmente. Ma ci vorrà tempo: lo finirò domani sera.” In quel momento entra di corsa un ragazzo: “Nonna, il forno si sta raffreddando! Serve altra legna!”',
        translation: 'Nunzia pega um pedaço de madeira e o gira nas mãos. “Vou fazer um pinguim, é claro. Mas vai levar tempo: vou terminá-lo amanhã à noite.” Nesse momento entra correndo um rapaz: “Vó, o forno está esfriando! Precisa de mais lenha!”',
        choices: [
          { text: '“Vengo io a prendere la legna!”', translation: '“Eu vou buscar a lenha!”', next: 'legna' },
          {
            text: '“Allora il timbro sarà pronto fra cinque minuti?”',
            translation: '“Então o carimbo vai ficar pronto daqui a cinco minutos?”',
            wrong: 'Nunzia disse “lo finirò domani sera”: o carimbo só fica pronto amanhã à noite. “Ci vorrà tempo” quer dizer “vai levar tempo”.',
          },
        ],
      },
      impasto: {
        emoji: '🥖',
        text: 'Nunzia gli mette davanti un mucchio di semola e una brocca d’acqua. “Devi impastare con forza, almeno venti minuti.” Linu ci prova, ma le pinne scivolano sull’impasto. Nunzia ride: “Con queste pinne, io al posto tuo sceglierei un altro lavoro!”',
        translation: 'Nunzia põe na frente dele um monte de sêmola e uma jarra de água. “Você tem que sovar com força, pelo menos vinte minutos.” O Linu tenta, mas as nadadeiras escorregam na massa. Nunzia ri: “Com essas nadadeiras, no seu lugar eu escolheria outro trabalho!”',
        choices: [
          { text: '“Allora andrò a prendere la legna per il forno.”', translation: '“Então vou buscar a lenha para o forno.”', next: 'legna' },
          { text: '“Continuerò lo stesso: voglio imparare!”', translation: '“Vou continuar mesmo assim: quero aprender!”', next: 'pagnotta' },
        ],
      },
      pagnotta: {
        emoji: '🐧',
        text: 'Dopo mezz’ora Linu ha formato una pagnotta un po’ storta. “Non sarà bella, ma sarà tua”, dice Nunzia, e la mette nel forno accanto alle altre. “Tra un’ora la tireremo fuori. Nel frattempo mio nipote Rocco potrebbe portarti a vedere i Sassi dall’alto.”',
        translation: 'Depois de meia hora, o Linu formou um pão meio torto. “Não vai ser bonito, mas vai ser seu”, diz Nunzia, e o coloca no forno ao lado dos outros. “Daqui a uma hora vamos tirá-lo. Enquanto isso, meu neto Rocco poderia te levar para ver os Sassi lá de cima.”',
        choices: [
          { text: '“Andrò volentieri con Rocco!”', translation: '“Vou com prazer com o Rocco!”', next: 'belvedere' },
          { text: '“Resterò qui ad aspettare la mia pagnotta.”', translation: '“Vou ficar aqui esperando o meu pão.”', next: 'final_forno' },
        ],
      },
      legna: {
        emoji: '🌧️',
        text: 'Rocco porta Linu nel cortile. Stanno portando dentro la legna quando comincia a piovere forte. “Con questa pioggia, stasera le strade dei Sassi saranno scivolose”, dice Rocco. “Domani però ci sarà il sole: potremmo salire al belvedere di Murgia Timone.”',
        translation: 'Rocco leva o Linu ao pátio. Eles estão levando a lenha para dentro quando começa a chover forte. “Com essa chuva, hoje à noite as ruas dos Sassi vão estar escorregadias”, diz Rocco. “Amanhã, porém, vai fazer sol: poderíamos subir ao mirante de Murgia Timone.”',
        choices: [
          { text: '“Ci andremo domani mattina, allora!”', translation: '“Então vamos lá amanhã de manhã!”', next: 'belvedere' },
          { text: '“Preferirei restare al caldo vicino al forno.”', translation: '“Eu preferiria ficar no quentinho perto do forno.”', next: 'final_forno' },
        ],
      },
      belvedere: {
        emoji: '⛰️',
        text: 'Rocco e Linu attraversano la gravina e salgono sull’altro lato. Da lassù si vedono tutti i Sassi, con le case scavate nella roccia. Rocco guarda l’orologio: “A quest’ora la nonna starà sfornando il pane. Se torniamo adesso, lo troveremo ancora caldo.”',
        translation: 'Rocco e o Linu atravessam o desfiladeiro e sobem pelo outro lado. Lá de cima se veem todos os Sassi, com as casas escavadas na rocha. Rocco olha o relógio: “A esta hora a vó deve estar tirando o pão do forno. Se voltarmos agora, vamos encontrá-lo ainda quente.”',
        choices: [
          { text: '“Torniamo subito!”', translation: '“Vamos voltar já!”', next: 'final_bom' },
          {
            text: '“Non c’è fretta: il pane è freddo da ieri.”',
            translation: '“Não tem pressa: o pão está frio desde ontem.”',
            wrong: 'Rocco disse que a avó “starà sfornando” o pão: deve estar tirando do forno AGORA (o futuro aqui indica suposição). Se voltarem já, vão encontrá-lo “ancora caldo”, ainda quente.',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Al forno, Nunzia sta aspettando Linu con un pacchetto. Dentro c’è una pagnotta calda con un piccolo pinguino stampato sopra: il timbro è pronto! “Quando tornerai a Matera, il tuo pane avrà già il suo segno”, dice lei.',
        translation: 'No forno, Nunzia está esperando o Linu com um pacote. Dentro há um pão quente com um pequeno pinguim estampado em cima: o carimbo está pronto! “Quando você voltar a Matera, o seu pão já vai ter a sua marca”, diz ela.',
        ending: { tone: 'bom', title: 'Um carimbo só dele', message: 'O Linu viu os Sassi lá de cima e ganhou um carimbo de pão com um pinguim.' },
      },
      final_forno: {
        emoji: '☕',
        text: 'Linu resta nel forno con Nunzia. Fa caldo, c’è profumo di pane e la signora racconta storie di Matera fino a tardi. I Sassi dall’alto li vedrà un’altra volta.',
        translation: 'O Linu fica no forno com Nunzia. Está quentinho, há cheiro de pão e a senhora conta histórias de Matera até tarde. Os Sassi lá de cima ele vai ver outra vez.',
        ending: { tone: 'neutro', title: 'Quentinho no forno', message: 'O Linu ouviu ótimas histórias, mas não viu os Sassi do mirante.' },
      },
    },
  },

  // ───────────────────────── it-h17 · B1.2 · Trieste ─────────────────────────
  {
    id: 'it-h17',
    level: 'B1.2',
    cefr: 'B1',
    title: 'La Barcolana e la bora',
    emoji: '⛵',
    summary: 'Em Trieste, um velho velejador convida o Linu para correr a Barcolana, a grande regata do golfo, em pleno vento de bora.',
    cultural_context:
      'A Barcolana é uma regata disputada no golfo de Trieste no segundo domingo de outubro desde 1969 e reúne milhares de barcos. A cidade é famosa pela bora, um vento frio do nordeste cujas rajadas podem passar de 100 km/h.',
    start: 'start',
    glossary: [
      ['la bora', 'vento frio e forte do nordeste, típico de Trieste'],
      ['la regata', 'a regata'],
      ['la vela', 'a vela (do barco)'],
      ['il timone', 'o leme'],
      ['la raffica', 'a rajada'],
      ['mulo', 'rapaz (no dialeto de Trieste; no italiano padrão, “mulo” é o animal)'],
      ['un nero', 'um espresso (como se pede em Trieste)'],
    ],
    nodes: {
      start: {
        emoji: '⚓',
        text: 'È il sabato prima della Barcolana e il porto di Trieste è pieno di barche. Un signore con la barba bianca sta sistemando le vele di una barca piccola. Vede Linu e lo chiama: “Ciao, mulo! Mi manca un marinaio per domani. Verresti con noi?”',
        translation: 'É o sábado antes da Barcolana e o porto de Trieste está cheio de barcos. Um senhor de barba branca está arrumando as velas de um barco pequeno. Ele vê o Linu e o chama: “Oi, rapaz! Está me faltando um marinheiro para amanhã. Você viria com a gente?”',
        choices: [
          { text: '“Verrei volentieri, ma non ho mai navigato.”', translation: '“Eu iria com prazer, mas nunca velejei.”', next: 'barca' },
          { text: '“Grazie, ma preferirei guardare la regata dal molo.”', translation: '“Obrigado, mas eu preferiria assistir à regata do cais.”', next: 'molo' },
          {
            text: '“Si sbaglia, signore: io non sono un mulo, sono un pinguino!”',
            translation: '“O senhor está enganado: eu não sou uma mula, sou um pinguim!”',
            wrong: 'Aqui “mulo” não é o animal: no dialeto de Trieste quer dizer “rapaz”. O senhor só estava cumprimentando o Linu de um jeito simpático.',
          },
        ],
      },
      barca: {
        emoji: '🧭',
        text: 'Il signore si chiama Franco. “Non ti preoccupare: domani starai al timone con me e imparerai in fretta”, dice. Poi guarda il cielo sopra il Carso. “Però stanotte arriverà la bora. Se soffierà troppo forte, dovremo ridurre le vele.”',
        translation: 'O senhor se chama Franco. “Não se preocupe: amanhã você vai ficar no leme comigo e vai aprender rápido”, diz ele. Depois olha para o céu sobre o Carso. “Mas esta noite vai chegar a bora. Se soprar forte demais, vamos ter que reduzir as velas.”',
        choices: [
          { text: '“E che cosa succederà se la bora non si calma?”', translation: '“E o que vai acontecer se a bora não acalmar?”', next: 'bora' },
          { text: '“Allora stasera andrò a dormire presto.”', translation: '“Então hoje à noite vou dormir cedo.”', next: 'notte' },
        ],
      },
      bora: {
        emoji: '🌬️',
        text: '“Niente paura”, ride Franco. “Qui a Trieste la bora la conosciamo bene: in alcune strade ci sono perfino delle corde per aggrapparsi. Domani però dovrai stare attento a ogni mio ordine.”',
        translation: '“Nada de medo”, ri Franco. “Aqui em Trieste a gente conhece bem a bora: em algumas ruas há até cordas para se segurar. Mas amanhã você vai ter que prestar atenção a cada ordem minha.”',
        choices: [
          { text: '“Starò attentissimo, capitano!”', translation: '“Vou prestar muita atenção, capitão!”', next: 'partenza' },
        ],
      },
      notte: {
        emoji: '🌙',
        text: 'Di notte Linu sente il vento che fischia tra le case. Le finestre tremano e un vaso sta per cadere dal balcone di fronte. La mattina il cielo è limpidissimo e il mare è pieno di schiuma bianca.',
        translation: 'À noite, o Linu ouve o vento assobiando entre as casas. As janelas tremem e um vaso está prestes a cair da varanda em frente. De manhã, o céu está limpíssimo e o mar está cheio de espuma branca.',
        choices: [
          { text: '“Che bel sole! Sarà una giornata perfetta.”', translation: '“Que sol bonito! Vai ser um dia perfeito.”', next: 'partenza' },
        ],
      },
      partenza: {
        emoji: '⛵',
        text: 'Alle dieci arriva il segnale di partenza e centinaia di vele si muovono insieme. Franco grida: “Tra poco gireremo! Quando te lo dico, tirerai quella corda rossa, non la blu!”',
        translation: 'Às dez vem o sinal de largada e centenas de velas se movem juntas. Franco grita: “Daqui a pouco vamos virar! Quando eu te disser, você vai puxar aquela corda vermelha, não a azul!”',
        choices: [
          { text: 'Linu aspetta l’ordine e poi tira la corda rossa.', translation: 'O Linu espera a ordem e depois puxa a corda vermelha.', next: 'giro' },
          {
            text: 'Linu tira subito la corda blu.',
            translation: 'O Linu puxa logo a corda azul.',
            wrong: 'Franco pediu a corda VERMELHA (“la corda rossa, non la blu”) e só quando ele desse a ordem (“quando te lo dico”).',
          },
        ],
      },
      giro: {
        emoji: '💨',
        text: 'La barca gira e prende velocità. Una raffica di bora la fa inclinare e Linu sta per scivolare in acqua, ma Franco lo afferra per una pinna. “Bravo, mulo! Se continuiamo così, arriveremo tra i primi duecento!”',
        translation: 'O barco vira e ganha velocidade. Uma rajada de bora o faz inclinar e o Linu está prestes a escorregar para a água, mas Franco o agarra por uma nadadeira. “Muito bem, rapaz! Se continuarmos assim, vamos chegar entre os duzentos primeiros!”',
        choices: [
          { text: '“Continuerò a tenere la corda!”', translation: '“Vou continuar segurando a corda!”', next: 'final_bom' },
          { text: '“Forse sarebbe meglio rallentare un po’…”', translation: '“Talvez fosse melhor ir um pouco mais devagar…”', next: 'final_prudente' },
        ],
      },
      molo: {
        emoji: '📷',
        text: 'Il giorno dopo, dal molo Audace, Linu vede il golfo coperto di vele. Accanto a lui una ragazza sta fotografando le barche. “Mio nonno sta navigando laggiù”, dice. “Stasera gli chiederò se l’anno prossimo ti prenderà a bordo.”',
        translation: 'No dia seguinte, do cais Audace, o Linu vê o golfo coberto de velas. Ao lado dele, uma moça está fotografando os barcos. “Meu avô está velejando lá longe”, ela diz. “Hoje à noite vou perguntar a ele se no ano que vem ele te leva a bordo.”',
        choices: [
          { text: '“Sarebbe fantastico!”', translation: '“Seria fantástico!”', next: 'final_molo' },
        ],
      },
      final_bom: {
        emoji: '🏁',
        text: 'Dopo quattro ore la barca taglia il traguardo: non hanno vinto, ma sono tra i primi duecento. Al bar del porto Franco ordina: “Due neri!” Linu è confuso, ma arrivano due espressi. “L’anno prossimo al timone ci starai tu”, dice Franco.',
        translation: 'Depois de quatro horas, o barco cruza a linha de chegada: não venceram, mas estão entre os duzentos primeiros. No bar do porto, Franco pede: “Dois pretos!” O Linu fica confuso, mas chegam dois espressos. “No ano que vem, quem vai ficar no leme é você”, diz Franco.',
        ending: { tone: 'bom', title: 'Marinheiro da bora!', message: 'O Linu correu a Barcolana, aguentou a bora e aprendeu a pedir café em Trieste.' },
      },
      final_prudente: {
        emoji: '🐢',
        text: 'Franco allenta la vela e la barca rallenta. Arrivano tardi, quando molti stanno già festeggiando al porto. “La prossima volta avrai meno paura”, dice Franco, e gli dà una pacca sulla spalla.',
        translation: 'Franco solta a vela e o barco desacelera. Eles chegam tarde, quando muitos já estão comemorando no porto. “Da próxima vez você vai ter menos medo”, diz Franco, e lhe dá um tapinha no ombro.',
        ending: { tone: 'neutro', title: 'Devagar e sempre', message: 'O Linu terminou a regata, mas entre os últimos.' },
      },
      final_molo: {
        emoji: '🌅',
        text: 'La sera la ragazza torna con il nonno, un signore allegro con le mani piene di calli. “Certo che ti prenderò a bordo!”, dice. Linu è contento, ma pensa che quest’anno, dal molo, la Barcolana l’ha vista solo da lontano.',
        translation: 'À noite, a moça volta com o avô, um senhor alegre com as mãos cheias de calos. “Claro que vou te levar a bordo!”, ele diz. O Linu fica contente, mas pensa que este ano, do cais, só viu a Barcolana de longe.',
        ending: { tone: 'neutro', title: 'Fica para o ano que vem', message: 'O Linu assistiu à regata do cais e ganhou um convite para a próxima.' },
      },
    },
  },

  // ───────────────────────── it-h18 · B1.2 · Perugia ─────────────────────────
  {
    id: 'it-h18',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Jazz tra le mura di Perugia',
    emoji: '🎷',
    summary: 'Durante o Umbria Jazz, o Linu ajuda uma jovem saxofonista que quebrou a palheta uma hora antes do show.',
    cultural_context:
      'O Umbria Jazz acontece em Perugia todo mês de julho desde 1973 e enche o centro histórico de shows, muitos deles gratuitos. Para subir ao centro, dá para usar escadas rolantes que atravessam a Rocca Paolina, uma fortaleza do século XVI.',
    start: 'start',
    glossary: [
      ['la scala mobile', 'a escada rolante'],
      ['il sassofono', 'o saxofone'],
      ['l’ancia', 'a palheta (do saxofone ou do clarinete)'],
      ['suonare', 'tocar (um instrumento)'],
      ['il palco', 'o palco'],
      ['esaurito', 'esgotado'],
      ['la serranda', 'a porta de enrolar (de loja)'],
    ],
    nodes: {
      start: {
        emoji: '🏰',
        text: 'È luglio e Perugia sta ospitando Umbria Jazz. Linu sale verso il centro con le scale mobili che attraversano la Rocca Paolina, una fortezza antica. In Corso Vannucci una ragazza sta suonando il sassofono davanti a un piccolo pubblico.',
        translation: 'É julho e Perugia está recebendo o Umbria Jazz. O Linu sobe para o centro pelas escadas rolantes que atravessam a Rocca Paolina, uma fortaleza antiga. No Corso Vannucci, uma moça está tocando saxofone diante de um pequeno público.',
        choices: [
          { text: 'Linu si ferma ad ascoltarla.', translation: 'O Linu para para ouvi-la.', next: 'ragazza' },
          { text: 'Linu va a cercare i biglietti per un concerto.', translation: 'O Linu vai procurar ingressos para um show.', next: 'biglietti' },
        ],
      },
      ragazza: {
        emoji: '🎷',
        text: 'La ragazza finisce il brano e sorride. “Mi chiamo Giulia. Stasera suonerò con il mio gruppo in piazza, per la prima volta!” Poi guarda il sassofono e diventa pallida: “Oh no, l’ancia si è rotta! Il concerto comincerà fra un’ora e non ne ho un’altra!”',
        translation: 'A moça termina a música e sorri. “Meu nome é Giulia. Hoje à noite vou tocar com a minha banda na praça, pela primeira vez!” Depois olha o saxofone e fica pálida: “Ah, não, a palheta quebrou! O show vai começar daqui a uma hora e eu não tenho outra!”',
        choices: [
          { text: '“Ti aiuterò a trovarne una!”', translation: '“Vou te ajudar a encontrar uma!”', next: 'negozio' },
          {
            text: '“Tranquilla, tanto il concerto è già finito.”',
            translation: '“Calma, afinal o show já acabou.”',
            wrong: 'Giulia disse “il concerto comincerà fra un’ora”: o show ainda VAI começar, daqui a uma hora. O problema é a palheta quebrada.',
          },
        ],
      },
      biglietti: {
        emoji: '🎟️',
        text: 'Alla biglietteria un signore gli dice: “Mi dispiace, i biglietti per l’Arena Santa Giuliana sono esauriti. Però stasera ci saranno concerti gratuiti in piazza. Io, al posto suo, andrei là.”',
        translation: 'Na bilheteria, um senhor lhe diz: “Sinto muito, os ingressos para a Arena Santa Giuliana estão esgotados. Mas hoje à noite vai haver shows gratuitos na praça. Eu, no seu lugar, iria lá.”',
        choices: [
          { text: '“Allora stasera andrò in piazza.”', translation: '“Então hoje à noite vou à praça.”', next: 'piazza_sola' },
          {
            text: '“Perfetto, allora ne prendo due per l’Arena.”',
            translation: '“Perfeito, então vou levar dois para a Arena.”',
            wrong: '“Esauriti” quer dizer esgotados: não há mais ingressos para a Arena. O senhor sugeriu os shows GRATUITOS na praça.',
          },
        ],
      },
      negozio: {
        emoji: '🏃',
        text: 'Linu e Giulia corrono per i vicoli. Il negozio di musica sta chiudendo: il proprietario sta abbassando la serranda. “Scusi!”, grida Giulia senza fiato. “Avrebbe un’ancia per sassofono contralto?”',
        translation: 'O Linu e a Giulia correm pelas vielas. A loja de música está fechando: o dono está baixando a porta de enrolar. “Com licença!”, grita Giulia, sem fôlego. “O senhor teria uma palheta para saxofone alto?”',
        choices: [
          { text: 'Linu bussa alla serranda con la pinna.', translation: 'O Linu bate na porta de enrolar com a nadadeira.', next: 'ancia' },
        ],
      },
      ancia: {
        emoji: '🎁',
        text: 'Il proprietario sospira, ma riapre. “Ne avrò ancora una da qualche parte… eccola! Però è un po’ dura: dovrai soffiare con più forza.” Giulia paga e abbraccia Linu: “Grazie! Stasera suonerò un brano per te.”',
        translation: 'O dono suspira, mas reabre. “Devo ter ainda uma em algum lugar… aqui está! Mas ela é um pouco dura: você vai ter que soprar com mais força.” Giulia paga e abraça o Linu: “Obrigada! Hoje à noite vou tocar uma música para você.”',
        choices: [
          { text: '“Starò in prima fila!”', translation: '“Vou ficar na primeira fila!”', next: 'piazza' },
        ],
      },
      piazza: {
        emoji: '⛲',
        text: 'La sera Piazza IV Novembre è piena di gente e il gruppo di Giulia sta per salire sul palco, davanti alla Fontana Maggiore. A metà concerto lei prende il microfono: “Il prossimo brano lo dedico a un pinguino che mi ha salvato la serata!”',
        translation: 'À noite, a Piazza IV Novembre está cheia de gente e a banda de Giulia está prestes a subir no palco, diante da Fontana Maggiore. No meio do show, ela pega o microfone: “A próxima música eu dedico a um pinguim que salvou a minha noite!”',
        choices: [
          { text: 'Linu balla davanti al palco.', translation: 'O Linu dança na frente do palco.', next: 'final_bom' },
          { text: 'Linu applaude, ma poi va a dormire presto.', translation: 'O Linu aplaude, mas depois vai dormir cedo.', next: 'final_presto' },
        ],
      },
      piazza_sola: {
        emoji: '🎺',
        text: 'La sera Linu arriva in Piazza IV Novembre. Sul palco sta suonando un gruppo giovane, ma il sassofono fa un suono strano. Un ragazzo accanto a Linu dice: “Poverina, avrà l’ancia rovinata.”',
        translation: 'À noite, o Linu chega à Piazza IV Novembre. No palco, uma banda jovem está tocando, mas o saxofone faz um som estranho. Um rapaz ao lado do Linu diz: “Coitada, a palheta dela deve estar estragada.”',
        choices: [
          { text: 'Linu si gode il resto del concerto.', translation: 'O Linu aproveita o resto do show.', next: 'final_piazza' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu balla finché la musica non finisce. Alla fine Giulia gli regala l’ancia rotta, con una dedica scritta a penna: “Al mio primo fan.” Linu la conserverà per sempre.',
        translation: 'O Linu dança até a música acabar. No fim, Giulia lhe dá de presente a palheta quebrada, com uma dedicatória escrita à caneta: “Ao meu primeiro fã.” O Linu vai guardá-la para sempre.',
        ending: { tone: 'bom', title: 'O primeiro fã', message: 'O Linu salvou o show de Giulia e ganhou uma dedicatória em pleno Umbria Jazz.' },
      },
      final_presto: {
        emoji: '😴',
        text: 'Linu torna in albergo prima della fine. Dalla finestra sente ancora la musica che arriva dalla piazza. Domani sera, promette a sé stesso, resterà fino all’ultima nota.',
        translation: 'O Linu volta para o hotel antes do fim. Da janela, ainda ouve a música que vem da praça. Amanhã à noite, ele promete a si mesmo, vai ficar até a última nota.',
        ending: { tone: 'neutro', title: 'Cedo demais', message: 'O Linu ajudou Giulia, mas perdeu metade da festa.' },
      },
      final_piazza: {
        emoji: '🍦',
        text: 'Linu ascolta jazz fino a mezzanotte e mangia un gelato sotto le stelle. La serata è bella, ma lui continua a pensare alla sassofonista: se l’avesse incontrata prima, forse avrebbe potuto aiutarla.',
        translation: 'O Linu ouve jazz até a meia-noite e toma um sorvete sob as estrelas. A noite é bonita, mas ele continua pensando na saxofonista: se a tivesse encontrado antes, talvez pudesse tê-la ajudado.',
        ending: { tone: 'neutro', title: 'Jazz na praça', message: 'O Linu curtiu os shows gratuitos, mas não conheceu Giulia.' },
      },
    },
  },

  // ───────────────────────── it-h19 · B1.3 · Ancona ─────────────────────────
  {
    id: 'it-h19',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Il brodetto di Ancona',
    emoji: '🐟',
    summary: 'No porto de Ancona, o Linu ajuda um pescador a separar o peixe e é convidado para provar o brodetto da família.',
    cultural_context:
      'O nome Ancona vem do grego “ankón”, “cotovelo”, pela forma do promontório onde gregos de Siracusa fundaram a cidade. No Passetto, os pescadores escavaram à mão, na rocha, pequenas grutas para guardar barcos e redes.',
    start: 'start',
    glossary: [
      ['il brodetto', 'ensopado de vários peixes, típico do litoral do Adriático'],
      ['il peschereccio', 'o barco de pesca'],
      ['la cassa', 'a caixa (de peixe, de frutas)'],
      ['benché + congiuntivo', 'embora'],
      ['prima che + congiuntivo', 'antes que'],
      ['voglio che tu + congiuntivo', 'quero que você…'],
      ['inzuppare', 'molhar (o pão no molho)'],
      ['la grotta', 'a gruta'],
    ],
    nodes: {
      start: {
        emoji: '⚓',
        text: 'All’alba Linu passeggia sul porto di Ancona. Un pescatore, Sandro, sta scaricando casse di pesce da un peschereccio e sembra stanco. “Mio figlio è a letto con l’influenza”, dice. “Benché tu sia un pinguino, penso che tu sappia qualcosa di pesce. Mi daresti una mano?”',
        translation: 'Ao amanhecer, o Linu passeia pelo porto de Ancona. Um pescador, Sandro, está descarregando caixas de peixe de um barco de pesca e parece cansado. “Meu filho está de cama com gripe”, diz ele. “Embora você seja um pinguim, acho que entende alguma coisa de peixe. Você me daria uma mão?”',
        choices: [
          { text: '“Certo! Che cosa vuole che faccia?”', translation: '“Claro! O que o senhor quer que eu faça?”', next: 'aiuto' },
          {
            text: '“Mi dispiace che suo figlio stia pescando da solo con questo freddo.”',
            translation: '“Sinto muito que o seu filho esteja pescando sozinho com este frio.”',
            wrong: 'Sandro disse que o filho “è a letto con l’influenza”: está de cama, gripado. Quem está trabalhando sozinho é o próprio Sandro, por isso ele pede ajuda.',
          },
        ],
      },
      aiuto: {
        emoji: '🦐',
        text: '“Voglio che tu separi il pesce per specie”, spiega Sandro. “Bisogna finire prima che arrivino i ristoratori, alle sette.” Linu lavora in fretta: triglie, seppie, scorfani, canocchie. Alle sette meno cinque le casse sono pronte.',
        translation: '“Quero que você separe o peixe por espécie”, explica Sandro. “Temos que terminar antes que cheguem os donos de restaurante, às sete.” O Linu trabalha depressa: salmonetes, sépias, peixes-escorpião, tamarutacas. Às cinco para as sete, as caixas estão prontas.',
        choices: [
          { text: '“Ce l’abbiamo fatta! E adesso?”', translation: '“Conseguimos! E agora?”', next: 'mercato' },
          { text: '“Posso tenere una triglia per me?”', translation: '“Posso ficar com um salmonete para mim?”', next: 'triglia' },
        ],
      },
      triglia: {
        emoji: '😄',
        text: 'Sandro ride. “Prendila pure, benché sia il pesce più caro della mattina! Però è meglio che tu assaggi il brodetto di mia moglie Lucia: penso che sia il più buono di Ancona. Stasera vieni a cena da noi?”',
        translation: 'Sandro ri. “Pode pegar, embora seja o peixe mais caro da manhã! Mas é melhor que você prove o brodetto da minha mulher, Lucia: acho que é o mais gostoso de Ancona. Hoje à noite você vem jantar com a gente?”',
        choices: [
          { text: '“Con piacere!”', translation: '“Com prazer!”', next: 'cena' },
          { text: '“Grazie, ma stasera vorrei vedere il Passetto.”', translation: '“Obrigado, mas hoje à noite eu queria ver o Passetto.”', next: 'passetto' },
        ],
      },
      mercato: {
        emoji: '💶',
        text: 'In mezz’ora i ristoratori comprano quasi tutto. Sandro conta i soldi, contento. “Bravo! Adesso voglio che tu venga a cena da noi. Mia moglie farà il brodetto, benché dica sempre che il suo non è mai perfetto.”',
        translation: 'Em meia hora, os donos de restaurante compram quase tudo. Sandro conta o dinheiro, contente. “Muito bem! Agora quero que você venha jantar com a gente. Minha mulher vai fazer o brodetto, embora ela sempre diga que o dela nunca fica perfeito.”',
        choices: [
          { text: '“Verrò volentieri!”', translation: '“Vou com prazer!”', next: 'cena' },
        ],
      },
      passetto: {
        emoji: '🌅',
        text: 'Al tramonto Linu scende la scalinata del Passetto, fino al mare. Nella roccia ci sono piccole grotte con barche e reti. Un vecchio pescatore gli spiega: “Le hanno scavate i pescatori, a mano. Credo che ce ne siano tantissime, lungo tutta la costa.”',
        translation: 'Ao pôr do sol, o Linu desce a escadaria do Passetto até o mar. Na rocha há pequenas grutas com barcos e redes. Um velho pescador lhe explica: “Foram os pescadores que as escavaram, à mão. Acho que há muitíssimas, ao longo de toda a costa.”',
        choices: [
          { text: 'Linu corre a casa di Sandro prima che la cena finisca.', translation: 'O Linu corre para a casa de Sandro antes que o jantar acabe.', next: 'cena' },
          { text: 'Linu resta a guardare il mare fino a notte.', translation: 'O Linu fica olhando o mar até a noite.', next: 'final_passetto' },
        ],
      },
      cena: {
        emoji: '🍲',
        text: 'A casa di Sandro la tavola è già apparecchiata. Lucia porta una pentola enorme. “Nel brodetto ci vogliono tanti pesci diversi”, dice. “Voglio che tu lo assaggi prima che si raffreddi. E ricorda: il pane va inzuppato nel sugo.”',
        translation: 'Na casa de Sandro, a mesa já está posta. Lucia traz uma panela enorme. “No brodetto vão muitos peixes diferentes”, diz ela. “Quero que você prove antes que esfrie. E lembre-se: o pão deve ser molhado no molho.”',
        choices: [
          { text: 'Linu inzuppa il pane nel sugo e assaggia.', translation: 'O Linu molha o pão no molho e prova.', next: 'final_bom' },
          {
            text: 'Linu aspetta che il brodetto si raffreddi un po’.',
            translation: 'O Linu espera o brodetto esfriar um pouco.',
            wrong: 'Lucia disse “prima che si raffreddi”: ela quer que o Linu prove ANTES que o ensopado esfrie, ou seja, logo, bem quente.',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Il brodetto è squisito. Il figlio di Sandro, che sta un po’ meglio, si siede a tavola con loro. “Papà dice che sei stato bravissimo”, sorride. “Speriamo che tu torni presto: sul peschereccio serve un marinaio con le pinne!”',
        translation: 'O brodetto está delicioso. O filho de Sandro, que está um pouco melhor, senta-se à mesa com eles. “O pai diz que você foi ótimo”, sorri. “Tomara que você volte logo: no barco está faltando um marinheiro com nadadeiras!”',
        ending: { tone: 'bom', title: 'Marinheiro de Ancona', message: 'O Linu trabalhou no porto e provou o brodetto de Lucia, bem quente.' },
      },
      final_passetto: {
        emoji: '🌊',
        text: 'Il mare diventa scuro e le luci del porto si accendono una dopo l’altra. Linu è felice, benché abbia un po’ di fame. Il brodetto di Lucia lo assaggerà un’altra volta.',
        translation: 'O mar escurece e as luzes do porto se acendem uma após a outra. O Linu está feliz, embora esteja com um pouco de fome. O brodetto de Lucia ele vai provar outra vez.',
        ending: { tone: 'neutro', title: 'Pôr do sol no Passetto', message: 'O Linu viu as grutas dos pescadores, mas ficou sem o jantar.' },
      },
    },
  },

  // ───────────────────────── it-h20 · B1.3 · L’Aquila ─────────────────────────
  {
    id: 'it-h20',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Sotto il Gran Sasso',
    emoji: '⛰️',
    summary: 'Em L’Aquila, uma física convida o Linu para conhecer o laboratório escondido sob o Gran Sasso; ou ele pode subir até Campo Imperatore.',
    cultural_context:
      'Os Laboratori Nazionali del Gran Sasso, protegidos por cerca de 1.400 metros de rocha, estão entre os maiores laboratórios subterrâneos do mundo e são acessados por um túnel da autoestrada. Na Fontana delle 99 Cannelle, em L’Aquila, a água sai de 99 bicas, que a tradição liga aos 99 castelos que fundaram a cidade.',
    start: 'start',
    glossary: [
      ['la galleria', 'o túnel (e também a galeria)'],
      ['il rivelatore', 'o detector (de partículas)'],
      ['il camoscio', 'a camurça (cabra selvagem das montanhas)'],
      ['affinché + congiuntivo', 'para que'],
      ['sebbene + congiuntivo', 'embora'],
      ['bisogna che + congiuntivo', 'é preciso que'],
      ['può darsi che + congiuntivo', 'pode ser que'],
      ['il guardiaparco', 'o guarda-parque'],
    ],
    nodes: {
      start: {
        emoji: '⛲',
        text: 'Linu è all’Aquila, davanti alla Fontana delle 99 Cannelle. Una ragazza con un casco giallo nello zaino gli chiede di farle una foto. Si chiama Chiara ed è una fisica: “Lavoro sotto la montagna, nei laboratori del Gran Sasso. Vuoi che ti racconti che cosa facciamo?”',
        translation: 'O Linu está em L’Aquila, diante da Fontana delle 99 Cannelle. Uma moça com um capacete amarelo na mochila lhe pede para tirar uma foto dela. Ela se chama Chiara e é física: “Trabalho debaixo da montanha, nos laboratórios do Gran Sasso. Quer que eu te conte o que fazemos?”',
        choices: [
          { text: '“Sì, voglio che tu mi racconti tutto!”', translation: '“Sim, quero que você me conte tudo!”', next: 'lab' },
          { text: '“Preferisco che tu mi consigli una passeggiata in montagna.”', translation: '“Prefiro que você me indique um passeio na montanha.”', next: 'montagna' },
        ],
      },
      lab: {
        emoji: '🔬',
        text: '“Sopra i laboratori ci sono circa 1400 metri di roccia”, spiega Chiara. “La roccia ferma quasi tutti i raggi cosmici, affinché possiamo studiare particelle rarissime, come i neutrini.” Poi aggiunge: “Domani c’è una visita guidata. Bisogna che tu ti prenoti stasera, prima che finiscano i posti.”',
        translation: '“Sobre os laboratórios há cerca de 1.400 metros de rocha”, explica Chiara. “A rocha bloqueia quase todos os raios cósmicos, para que possamos estudar partículas raríssimas, como os neutrinos.” Depois acrescenta: “Amanhã tem uma visita guiada. É preciso que você reserve hoje à noite, antes que acabem as vagas.”',
        choices: [
          { text: '“Mi prenoto subito!”', translation: '“Vou reservar agora mesmo!”', next: 'visita' },
          {
            text: '“Che bello! Allora il laboratorio è in cima alla montagna, vicino alle stelle.”',
            translation: '“Que legal! Então o laboratório fica no topo da montanha, perto das estrelas.”',
            wrong: 'Chiara disse que o laboratório fica SOB a montanha (“sotto la montagna”), com uns 1.400 metros de rocha em cima, justamente para bloquear os raios cósmicos.',
          },
        ],
      },
      visita: {
        emoji: '🚐',
        text: 'La mattina dopo il pulmino entra nella galleria dell’autostrada e si ferma davanti a un grande portone. Dentro, le sale sono gigantesche e piene di cavi. La guida avverte: “È importante che nessuno tocchi gli strumenti, sebbene sembrino semplici tubi.”',
        translation: 'Na manhã seguinte, a van entra no túnel da autoestrada e para diante de um grande portão. Lá dentro, as salas são gigantescas e cheias de cabos. A guia avisa: “É importante que ninguém toque nos instrumentos, embora pareçam simples tubos.”',
        choices: [
          { text: 'Linu tiene le pinne dietro la schiena.', translation: 'O Linu mantém as nadadeiras atrás das costas.', next: 'rivelatore' },
          {
            text: 'Linu accarezza un tubo per vedere se è freddo.',
            translation: 'O Linu passa a nadadeira num tubo para ver se está frio.',
            wrong: 'A guia disse “è importante che nessuno tocchi gli strumenti”: ninguém pode tocar nos instrumentos, mesmo que pareçam simples tubos.',
          },
        ],
      },
      rivelatore: {
        emoji: '✨',
        text: 'Chiara mostra a Linu un rivelatore alto come una casa. “Può darsi che per settimane non succeda niente”, dice. “Ma se arriva un neutrino, vogliamo che il rivelatore lo veda.” Linu guarda lo schermo e, proprio in quel momento, si accende un piccolo punto luminoso.',
        translation: 'Chiara mostra ao Linu um detector alto como uma casa. “Pode ser que durante semanas não aconteça nada”, diz ela. “Mas, se chegar um neutrino, queremos que o detector o veja.” O Linu olha para a tela e, bem nesse momento, acende-se um pequeno ponto luminoso.',
        choices: [
          { text: '“È un neutrino?!”', translation: '“É um neutrino?!”', next: 'final_bom' },
        ],
      },
      montagna: {
        emoji: '🗺️',
        text: 'Chiara gli indica una cartina. “Credo che Campo Imperatore sia il posto più bello: lo chiamano il piccolo Tibet. Ma è meglio che tu parta presto, prima che arrivino le nuvole. D’estate, nel pomeriggio, cambia tutto in fretta.”',
        translation: 'Chiara lhe mostra um mapa. “Acho que Campo Imperatore é o lugar mais bonito: chamam de pequeno Tibete. Mas é melhor que você saia cedo, antes que cheguem as nuvens. No verão, à tarde, tudo muda depressa.”',
        choices: [
          { text: '“Partirò all’alba!”', translation: '“Vou sair ao amanhecer!”', next: 'campo' },
          { text: '“Andrò dopo pranzo, con calma.”', translation: '“Vou depois do almoço, com calma.”', next: 'nuvole' },
        ],
      },
      campo: {
        emoji: '🐐',
        text: 'All’alba Linu arriva a Campo Imperatore con la funivia. L’altopiano è immenso e silenzioso. Su una roccia, tre camosci lo guardano. Un guardiaparco sussurra: “Non avvicinarti. Bisogna che restino tranquilli, sebbene sembrino abituati alle persone.”',
        translation: 'Ao amanhecer, o Linu chega a Campo Imperatore pelo teleférico. O planalto é imenso e silencioso. Em cima de uma rocha, três camurças olham para ele. Um guarda-parque sussurra: “Não chegue perto. É preciso que elas fiquem tranquilas, embora pareçam acostumadas com as pessoas.”',
        choices: [
          { text: 'Linu si siede e li osserva da lontano.', translation: 'O Linu se senta e as observa de longe.', next: 'final_camosci' },
        ],
      },
      nuvole: {
        emoji: '🌫️',
        text: 'Dopo pranzo il cielo si copre e comincia a piovere. Dalla funivia Linu non vede niente, solo nebbia. Il telefono squilla: è Chiara. “Peccato che tu non sia partito prima! Ma se vuoi, domani ti porto sotto la montagna, dove non piove mai.”',
        translation: 'Depois do almoço, o céu se fecha e começa a chover. Do teleférico, o Linu não vê nada, só neblina. O telefone toca: é Chiara. “Que pena que você não saiu antes! Mas, se quiser, amanhã eu te levo para debaixo da montanha, onde nunca chove.”',
        choices: [
          { text: '“Sì, voglio che tu mi mostri il laboratorio!”', translation: '“Sim, quero que você me mostre o laboratório!”', next: 'visita' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: '“Può darsi”, ride Chiara, “ma credo che sia più probabile un errore del computer.” Linu non ci pensa: per lui, quella lucina è il suo primo neutrino. Quando escono dalla galleria, guarda il Gran Sasso con altri occhi.',
        translation: '“Pode ser”, ri Chiara, “mas acho que é mais provável um erro do computador.” O Linu nem liga: para ele, aquela luzinha é o seu primeiro neutrino. Quando saem do túnel, ele olha o Gran Sasso com outros olhos.',
        ending: { tone: 'bom', title: 'Um neutrino para o Linu', message: 'O Linu visitou o laboratório sob o Gran Sasso e aprendeu por que a ciência se esconde debaixo da rocha.' },
      },
      final_camosci: {
        emoji: '🏔️',
        text: 'Per un’ora Linu guarda i camosci che saltano tra le rocce. Poi arrivano le nuvole, proprio come aveva detto Chiara, e lui torna giù, felice. Del laboratorio sotto la montagna sa poco, ma i camosci non li dimenticherà.',
        translation: 'Durante uma hora, o Linu olha as camurças saltando entre as rochas. Depois chegam as nuvens, bem como Chiara tinha dito, e ele desce, feliz. Do laboratório debaixo da montanha ele sabe pouco, mas as camurças ele não vai esquecer.',
        ending: { tone: 'bom', title: 'O pequeno Tibete', message: 'O Linu saiu cedo, como Chiara aconselhou, e viu as camurças de Campo Imperatore.' },
      },
    },
  },

  // ───────────────────────── it-h21 · B1.3 · Campobasso ─────────────────────────
  {
    id: 'it-h21',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Un angelo sospeso a Campobasso',
    emoji: '👼',
    summary: 'Na véspera do Corteo dei Misteri, o Linu ajuda uma menina que vai desfilar suspensa no ar vestida de anjo, ou ajuda os carregadores.',
    cultural_context:
      'Na festa de Corpus Christi, Campobasso realiza o Corteo dei Misteri: estruturas de ferro projetadas no século XVIII por Paolo Saverio Di Zinno, carregadas nos ombros, nas quais crianças vestidas de santos e anjos parecem flutuar no ar.',
    start: 'start',
    glossary: [
      ['il Mistero', 'estrutura de ferro que leva crianças vestidas de santos e anjos'],
      ['il portatore', 'o carregador (quem leva o Mistero nos ombros)'],
      ['sospeso', 'suspenso'],
      ['il Corpus Domini', 'Corpus Christi'],
      ['temo che + congiuntivo', 'temo que, receio que'],
      ['sembra che + congiuntivo', 'parece que'],
      ['basta che + congiuntivo', 'basta que'],
    ],
    nodes: {
      start: {
        emoji: '🏙️',
        text: 'È la vigilia del Corpus Domini e Campobasso si prepara al Corteo dei Misteri. Marco, un amico di Linu, gli presenta sua sorella Sofia, che ha otto anni. “Domani lei sarà un angelo sospeso in aria”, dice Marco. “Ma temo che abbia un po’ paura.”',
        translation: 'É véspera de Corpus Christi e Campobasso se prepara para o Corteo dei Misteri. Marco, um amigo do Linu, lhe apresenta a irmã, Sofia, que tem oito anos. “Amanhã ela vai ser um anjo suspenso no ar”, diz Marco. “Mas receio que ela esteja com um pouco de medo.”',
        choices: [
          { text: '“Posso parlarle io?”', translation: '“Posso falar com ela?”', next: 'sofia' },
          { text: '“Prima vorrei capire come funzionano i Misteri.”', translation: '“Antes eu queria entender como funcionam os Misteri.”', next: 'museo' },
        ],
      },
      sofia: {
        emoji: '👧',
        text: 'Sofia guarda per terra. “Non ho paura dell’altezza”, dice piano. “Ho paura che la gente rida se sbaglio qualcosa.” Linu ci pensa un attimo. “Non credo che qualcuno rida di un angelo! Basta che tu sorrida e saluti.”',
        translation: 'Sofia olha para o chão. “Não tenho medo da altura”, diz baixinho. “Tenho medo que as pessoas riam se eu errar alguma coisa.” O Linu pensa um instante. “Não acho que alguém vá rir de um anjo! Basta que você sorria e acene.”',
        choices: [
          { text: '“Vuoi che proviamo insieme?”', translation: '“Quer que a gente ensaie junto?”', next: 'prova' },
          {
            text: '“Allora bisogna che tu stia più in basso, dove non è così alto.”',
            translation: '“Então é preciso que você fique mais embaixo, onde não é tão alto.”',
            wrong: 'Sofia disse “non ho paura dell’altezza”: ela NÃO tem medo de altura. O medo dela é que as pessoas riam se ela errar.',
          },
        ],
      },
      prova: {
        emoji: '🪑',
        text: 'Nel cortile Sofia sale su una sedia e Linu fa il pubblico. Lei saluta con la mano destra, poi con la sinistra, poi sorride. Marco batte le mani: “Perfetto! Domani è importante che tu faccia proprio così.”',
        translation: 'No pátio, Sofia sobe numa cadeira e o Linu faz o papel de público. Ela acena com a mão direita, depois com a esquerda, depois sorri. Marco bate palmas: “Perfeito! Amanhã é importante que você faça exatamente assim.”',
        choices: [
          { text: '“Domani starò in prima fila, così mi vedrai.”', translation: '“Amanhã vou ficar na primeira fila, assim você me vê.”', next: 'corteo' },
        ],
      },
      museo: {
        emoji: '🏛️',
        text: 'Il padre di Marco porta Linu al Museo dei Misteri. “Li ha progettati un artista del Settecento, Paolo Saverio Di Zinno”, spiega. “Sono di ferro, ma sembra che i bambini volino. Benché siano pesantissimi, i portatori li portano a spalla per ore. Servirebbe qualcuno che distribuisca l’acqua ai portatori: vuoi farlo tu?”',
        translation: 'O pai de Marco leva o Linu ao Museu dos Mistérios. “Quem os projetou foi um artista do século XVIII, Paolo Saverio Di Zinno”, explica. “São de ferro, mas parece que as crianças voam. Embora sejam pesadíssimos, os carregadores os levam nos ombros por horas. Faria falta alguém que distribuísse água aos carregadores: quer fazer isso?”',
        choices: [
          { text: '“Certo, lo farò volentieri!”', translation: '“Claro, vou fazer com prazer!”', next: 'acqua' },
          {
            text: '“Che bello! Allora domani volerò anch’io con i bambini.”',
            translation: '“Que legal! Então amanhã eu também vou voar com as crianças.”',
            wrong: 'O pai de Marco disse que “sembra che i bambini volino”: PARECE que as crianças voam, mas elas estão presas a estruturas de ferro. E ele pediu ao Linu que distribuísse ÁGUA aos carregadores.',
          },
        ],
      },
      corteo: {
        emoji: '🎺',
        text: 'La mattina dopo il corteo parte tra la banda e gli applausi. Sofia è in alto, con le ali bianche. Per un momento sembra che non riesca a muoversi. Linu, in prima fila, alza le pinne e fa il saluto delle prove.',
        translation: 'Na manhã seguinte, o cortejo sai entre a banda e os aplausos. Sofia está lá no alto, com as asas brancas. Por um momento, parece que ela não consegue se mexer. O Linu, na primeira fila, levanta as nadadeiras e faz o aceno do ensaio.',
        choices: [
          { text: 'Linu grida: “Sorridi, Sofia!”', translation: 'O Linu grita: “Sorria, Sofia!”', next: 'final_bom' },
          { text: 'Linu resta in silenzio, per paura di disturbare.', translation: 'O Linu fica em silêncio, com medo de atrapalhar.', next: 'final_silenzio' },
        ],
      },
      acqua: {
        emoji: '💧',
        text: 'Il giorno dopo Linu cammina accanto ai portatori con una borsa piena di bottigliette. Fa caldo e il percorso è lungo. Un portatore sudato gli sorride: “Senza di te non so come faremmo. Speriamo che l’acqua basti fino alla fine!”',
        translation: 'No dia seguinte, o Linu caminha ao lado dos carregadores com uma bolsa cheia de garrafinhas. Faz calor e o percurso é longo. Um carregador suado sorri para ele: “Sem você não sei como faríamos. Tomara que a água dure até o fim!”',
        choices: [
          { text: 'Linu continua fino alla fine del corteo.', translation: 'O Linu continua até o fim do cortejo.', next: 'final_acqua' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Sofia vede Linu, sorride e saluta con tutte e due le mani, proprio come nelle prove. La gente applaude ancora più forte. La sera lei gli regala una piuma delle sue ali: “Perché tu non dimentichi il tuo angelo.”',
        translation: 'Sofia vê o Linu, sorri e acena com as duas mãos, exatamente como no ensaio. As pessoas aplaudem ainda mais forte. À noite, ela lhe dá de presente uma pena das suas asas: “Para que você não esqueça o seu anjo.”',
        ending: { tone: 'bom', title: 'O anjo sorriu', message: 'O Linu ajudou Sofia a perder o medo e ganhou uma pena de anjo.' },
      },
      final_silenzio: {
        emoji: '😶',
        text: 'Sofia saluta, ma solo con una mano e senza sorridere. Alla fine dice che è andato tutto bene, benché sembri un po’ delusa. Linu pensa che forse avrebbe dovuto incoraggiarla.',
        translation: 'Sofia acena, mas só com uma mão e sem sorrir. No fim, diz que deu tudo certo, embora pareça um pouco decepcionada. O Linu pensa que talvez devesse tê-la encorajado.',
        ending: { tone: 'neutro', title: 'Um anjo sério', message: 'O desfile foi bonito, mas o Linu não usou o ensaio na hora certa.' },
      },
      final_acqua: {
        emoji: '🙌',
        text: 'Alla fine del corteo i portatori sollevano Linu sulle spalle, come un piccolo Mistero. Tutti ridono e applaudono. “L’anno prossimo vogliamo che tu ci sia di nuovo!”, gridano.',
        translation: 'No fim do cortejo, os carregadores levantam o Linu nos ombros, como um pequeno Mistério. Todos riem e aplaudem. “No ano que vem queremos que você esteja aqui de novo!”, gritam.',
        ending: { tone: 'bom', title: 'O Mistero com nadadeiras', message: 'O Linu ajudou os carregadores e terminou o cortejo nos ombros deles.' },
      },
    },
  },

  // ───────────────────────── it-h22 · B1.4 · Reggio Calabria ─────────────────────────
  {
    id: 'it-h22',
    level: 'B1.4',
    cefr: 'B1',
    title: 'I Bronzi e la Fata Morgana',
    emoji: '🏛️',
    summary: 'Em Reggio Calabria, o Linu visita os Bronzi di Riace, prova sorvete de bergamota e ouve a lenda da Fata Morgana no Estreito.',
    cultural_context:
      'Os Bronzi di Riace, duas estátuas gregas de guerreiros do século V a.C., foram encontrados no mar perto de Riace em 1972 e estão no Museu Nacional de Reggio Calabria. A província de Reggio produz a maior parte da bergamota do mundo.',
    start: 'start',
    glossary: [
      ['furono ritrovate', 'foram encontradas (passato remoto)'],
      ['aveva visto', 'tinha visto (trapassato prossimo)'],
      ['in cui / di cui', 'em que / de que (relativos)'],
      ['il quale / al quale', 'o qual / ao qual'],
      ['il bergamotto', 'a bergamota (cítrico perfumado)'],
      ['lo Stretto', 'o Estreito de Messina'],
      ['la Fata Morgana', 'miragem que às vezes aparece sobre o Estreito'],
      ['il custode', 'o vigia (de museu)'],
    ],
    nodes: {
      start: {
        emoji: '🗿',
        text: 'Linu entra nel Museo Nazionale di Reggio Calabria. Nella sala in cui sono esposti i Bronzi di Riace, due guerrieri greci alti quasi due metri sembrano guardarlo. Sulla targa legge: “Le statue furono ritrovate nel mare di Riace nel 1972.”',
        translation: 'O Linu entra no Museu Nacional de Reggio Calabria. Na sala em que estão expostos os Bronzi di Riace, dois guerreiros gregos de quase dois metros de altura parecem olhar para ele. Na placa, ele lê: “As estátuas foram encontradas no mar de Riace em 1972.”',
        choices: [
          { text: 'Linu chiede al custode di raccontargli la storia.', translation: 'O Linu pede ao vigia que lhe conte a história.', next: 'custode' },
          {
            text: '“Ah, quindi le statue sono state fatte nel 1972!”',
            translation: '“Ah, então as estátuas foram feitas em 1972!”',
            wrong: '“Furono ritrovate” (passato remoto) quer dizer “foram encontradas”. As estátuas são gregas e muito mais antigas: 1972 é o ano em que foram achadas no mar.',
          },
        ],
      },
      custode: {
        emoji: '👴',
        text: 'Il custode, un signore di nome Tonino, sorride. “Mio padre faceva il pescatore a Riace. Mi raccontava che quell’estate aveva visto tanta gente sulla spiaggia, perché un subacqueo aveva notato un braccio di bronzo sotto la sabbia.” Poi aggiunge che chi viene al museo deve guardare le statue da tutti i lati.',
        translation: 'O vigia, um senhor chamado Tonino, sorri. “Meu pai era pescador em Riace. Ele me contava que naquele verão tinha visto muita gente na praia, porque um mergulhador tinha notado um braço de bronze debaixo da areia.” Depois acrescenta que quem vem ao museu deve olhar as estátuas por todos os lados.',
        choices: [
          { text: 'Linu gira intorno alle statue.', translation: 'O Linu dá a volta nas estátuas.', next: 'statue' },
          { text: '“E il mare di cui parla è lontano da qui?”', translation: '“E o mar de que o senhor fala é longe daqui?”', next: 'lontano' },
        ],
      },
      statue: {
        emoji: '🔍',
        text: 'Da dietro, Linu nota i capelli e la barba, lavorati con una precisione incredibile. Tonino gli spiega che gli occhi erano fatti di pietre colorate e che uno dei due guerrieri mostra perfino i denti d’argento. Poi gli chiede se ha già assaggiato il gelato al bergamotto.',
        translation: 'Por trás, o Linu repara nos cabelos e na barba, trabalhados com uma precisão incrível. Tonino lhe explica que os olhos eram feitos de pedras coloridas e que um dos dois guerreiros mostra até os dentes de prata. Depois pergunta se ele já provou o sorvete de bergamota.',
        choices: [
          { text: '“No! Dove me lo consiglia?”', translation: '“Não! Onde o senhor me recomenda?”', next: 'gelato' },
        ],
      },
      lontano: {
        emoji: '🗺️',
        text: '“Riace è lontana, sulla costa ionica”, ride Tonino. “Ma il mare che si vede dal lungomare è lo Stretto, di cui si raccontano tante leggende.” Poi gli dice che, prima di andarci, dovrebbe assaggiare il gelato al bergamotto.',
        translation: '“Riace é longe, na costa jônica”, ri Tonino. “Mas o mar que se vê da orla é o Estreito, sobre o qual se contam muitas lendas.” Depois lhe diz que, antes de ir lá, ele deveria provar o sorvete de bergamota.',
        choices: [
          { text: '“Allora prima il gelato, poi il lungomare!”', translation: '“Então primeiro o sorvete, depois a orla!”', next: 'gelato' },
        ],
      },
      gelato: {
        emoji: '🍋',
        text: 'In una gelateria del corso, la ragazza al banco gli spiega che quasi tutto il bergamotto del mondo si coltiva in provincia di Reggio. Linu assaggia: il sapore sta tra il limone e il fiore. La ragazza racconta che la sera prima era passato un turista il quale ne aveva mangiati tre di fila.',
        translation: 'Numa sorveteria da avenida, a moça do balcão lhe explica que quase toda a bergamota do mundo é cultivada na província de Reggio. O Linu prova: o sabor fica entre o limão e a flor. A moça conta que, na noite anterior, tinha passado um turista que tinha tomado três seguidos.',
        choices: [
          { text: '“Ne prendo un altro anch’io, e poi vado sul lungomare.”', translation: '“Vou tomar outro também e depois vou à orla.”', next: 'lungomare' },
          { text: 'Linu torna in albergo a riposare.', translation: 'O Linu volta para o hotel para descansar.', next: 'final_riposo' },
          {
            text: '“Buonissimo! Quindi il bergamotto arriva dalla Sicilia?”',
            translation: '“Uma delícia! Então a bergamota vem da Sicília?”',
            wrong: 'A moça disse que quase toda a bergamota do mundo é cultivada na província de REGGIO, na Calábria, e não na Sicília.',
          },
        ],
      },
      lungomare: {
        emoji: '🌅',
        text: 'Al tramonto Linu passeggia sul lungomare. Dall’altra parte dello Stretto si vede la Sicilia, così vicina che sembra di poterla toccare. Un anziano su una panchina gli racconta che suo nonno, nei giorni molto calmi, aveva visto le case di Messina galleggiare nell’aria. “È la Fata Morgana”, spiega, “un miraggio di cui qui parlano tutti.”',
        translation: 'Ao pôr do sol, o Linu passeia pela orla. Do outro lado do Estreito se vê a Sicília, tão perto que parece dar para tocá-la. Um idoso num banco lhe conta que o avô dele, nos dias muito calmos, tinha visto as casas de Messina flutuando no ar. “É a Fata Morgana”, explica, “uma miragem de que todos falam aqui.”',
        choices: [
          { text: '“Posso aspettare qui con lei?”', translation: '“Posso esperar aqui com o senhor?”', next: 'fata' },
          { text: 'Linu pensa che l’anziano stia scherzando e se ne va.', translation: 'O Linu acha que o idoso está brincando e vai embora.', next: 'final_scettico' },
        ],
      },
      fata: {
        emoji: '🧚',
        text: 'Aspettano insieme mentre il sole cala sullo Stretto. Il miraggio non arriva, ma l’anziano racconta una leggenda: la fata offrì a un re normanno, il quale voleva conquistare la Sicilia, di portarlo sull’isola in un attimo. Il re rifiutò, perché voleva conquistarla con le sue forze.',
        translation: 'Eles esperam juntos enquanto o sol se põe sobre o Estreito. A miragem não aparece, mas o idoso conta uma lenda: a fada ofereceu a um rei normando, que queria conquistar a Sicília, levá-lo à ilha num instante. O rei recusou, porque queria conquistá-la com as próprias forças.',
        choices: [
          { text: 'Linu ringrazia e promette di tornare.', translation: 'O Linu agradece e promete voltar.', next: 'final_bom' },
        ],
      },
      final_bom: {
        emoji: '📔',
        text: 'Quella sera Linu scrive nel diario: “Oggi ho visto due guerrieri che erano rimasti sotto il mare per più di duemila anni e ho sentito una leggenda che non conoscevo.” Chi viene a Reggio, pensa, non se ne va mai a mani vuote.',
        translation: 'Naquela noite, o Linu escreve no diário: “Hoje vi dois guerreiros que tinham ficado debaixo do mar por mais de dois mil anos e ouvi uma lenda que eu não conhecia.” Quem vem a Reggio, ele pensa, nunca vai embora de mãos vazias.',
        ending: { tone: 'bom', title: 'Guerreiros e fadas', message: 'O Linu viu os Bronzi, provou a bergamota e ouviu a lenda da Fata Morgana.' },
      },
      final_scettico: {
        emoji: '🤔',
        text: 'Linu torna in albergo convinto che l’anziano abbia inventato tutto. Solo più tardi legge su internet che la Fata Morgana esiste davvero: è un miraggio che si osserva proprio sullo Stretto.',
        translation: 'O Linu volta para o hotel convencido de que o idoso inventou tudo. Só mais tarde lê na internet que a Fata Morgana existe de verdade: é uma miragem que se observa justamente sobre o Estreito.',
        ending: { tone: 'neutro', title: 'Era verdade!', message: 'O Linu duvidou do idoso e perdeu a lenda contada à beira do Estreito.' },
      },
      final_riposo: {
        emoji: '😴',
        text: 'Linu si addormenta appena tocca il letto. Ha visto i Bronzi e ha scoperto il bergamotto, ma il lungomare e lo Stretto dovrà vederli un’altra volta.',
        translation: 'O Linu adormece assim que encosta na cama. Viu os Bronzi e descobriu a bergamota, mas a orla e o Estreito ele vai ter que ver outra vez.',
        ending: { tone: 'neutro', title: 'Cansado e feliz', message: 'O Linu viu o museu, mas deixou o Estreito para outro dia.' },
      },
    },
  },

  // ───────────────────────── it-h23 · B1.4 · Aosta ─────────────────────────
  {
    id: 'it-h23',
    level: 'B1.4',
    cefr: 'B1',
    title: 'La coppa dell’amicizia',
    emoji: '🪵',
    summary: 'Na Fiera di Sant’Orso, em Aosta, o Linu conhece um entalhador, perde e reencontra a carteira e passa a noite da Veillà entre amigos.',
    cultural_context:
      'A Fiera di Sant’Orso acontece em Aosta todo 30 e 31 de janeiro há mais de mil anos e reúne artesãos da madeira de todo o vale. Na noite entre os dois dias, a Veillà, a festa segue pelas ruas até de manhã.',
    start: 'start',
    glossary: [
      ['la fiera', 'a feira'],
      ['intagliare', 'entalhar (a madeira)'],
      ['la grolla', 'taça de madeira com tampa, típica do Vale de Aosta'],
      ['la coppa dell’amicizia', 'recipiente de madeira com vários bicos, passado de mão em mão'],
      ['il beccuccio', 'o bico (de onde se bebe)'],
      ['la Veillà', 'a noite de festa da feira (palavra do franco-provençal, língua do vale)'],
      ['il quale / di cui', 'o qual / do qual (relativos)'],
      ['il portafoglio', 'a carteira'],
    ],
    nodes: {
      start: {
        emoji: '❄️',
        text: 'È il 30 gennaio e ad Aosta nevica. Le strade intorno all’Arco d’Augusto sono piene di bancarelle: è la Fiera di Sant’Orso. Un artigiano con le mani piene di trucioli dice a Linu che la fiera, di cui è molto orgoglioso, esiste da più di mille anni.',
        translation: 'É 30 de janeiro e neva em Aosta. As ruas em volta do Arco de Augusto estão cheias de barracas: é a Fiera di Sant’Orso. Um artesão com as mãos cheias de lascas de madeira diz ao Linu que a feira, da qual ele tem muito orgulho, existe há mais de mil anos.',
        choices: [
          { text: '“Che cosa sta intagliando?”', translation: '“O que o senhor está entalhando?”', next: 'artigiano' },
          { text: 'Linu va a cercare un regalo per un amico.', translation: 'O Linu vai procurar um presente para um amigo.', next: 'regalo' },
        ],
      },
      artigiano: {
        emoji: '🪓',
        text: 'L’artigiano si chiama Ottavio e sta finendo una coppa rotonda con molti beccucci. “È la coppa dell’amicizia”, spiega. “Mio nonno, il quale aveva cominciato a intagliare a dieci anni, diceva che chi beve da questa coppa non resta mai solo.”',
        translation: 'O artesão se chama Ottavio e está terminando uma taça redonda com muitos bicos. “É a taça da amizade”, explica. “Meu avô, que tinha começado a entalhar aos dez anos, dizia que quem bebe dessa taça nunca fica sozinho.”',
        choices: [
          { text: '“E perché ha tanti beccucci?”', translation: '“E por que ela tem tantos bicos?”', next: 'beccucci' },
          {
            text: '“Allora è una coppa per bere da soli, in silenzio.”',
            translation: '“Então é uma taça para beber sozinho, em silêncio.”',
            wrong: 'Ottavio contou que, segundo o avô, quem bebe dessa taça “non resta mai solo”: nunca fica sozinho. É uma taça para dividir com os amigos.',
          },
        ],
      },
      beccucci: {
        emoji: '☕',
        text: '“Perché si beve a turno, tutti dalla stessa coppa, ognuno dal suo beccuccio”, dice Ottavio. “Dentro si mette il caffè alla valdostana, con grappa, zucchero e scorza d’arancia.” Poi racconta che il ragazzo che doveva aiutarlo al banco era rimasto a casa con la febbre.',
        translation: '“Porque se bebe na vez de cada um, todos da mesma taça, cada um pelo seu bico”, diz Ottavio. “Dentro vai o café à moda do Vale de Aosta, com grappa, açúcar e casca de laranja.” Depois conta que o rapaz que ia ajudá-lo na barraca tinha ficado em casa com febre.',
        choices: [
          { text: '“Posso aiutarla io!”', translation: '“Eu posso ajudar o senhor!”', next: 'bancarella' },
          { text: '“Mi dispiace. Io stanotte vorrei vedere la Veillà.”', translation: '“Sinto muito. Eu, esta noite, queria ver a Veillà.”', next: 'veilla' },
        ],
      },
      regalo: {
        emoji: '🎁',
        text: 'Linu passa tra le bancarelle: cucchiai, animali di legno, sabot. Una signora gli mostra una piccola grolla e Linu decide di comprarla. Ma quando cerca il portafoglio, che aveva messo nella tasca del giaccone, si accorge che non c’è più.',
        translation: 'O Linu passa entre as barracas: colheres, animais de madeira, tamancos. Uma senhora lhe mostra uma pequena grolla e o Linu decide comprá-la. Mas, quando procura a carteira, que ele tinha posto no bolso do casaco, percebe que ela não está mais lá.',
        choices: [
          { text: 'Linu torna indietro a cercarlo.', translation: 'O Linu volta para procurá-la.', next: 'portafoglio' },
          {
            text: '“La prendo, ecco i soldi!”',
            translation: '“Vou levar, aqui está o dinheiro!”',
            wrong: 'O Linu percebeu que a carteira, que ele tinha posto no bolso do casaco, “non c’è più”: sumiu. Sem ela, não tem como pagar agora.',
          },
        ],
      },
      portafoglio: {
        emoji: '👛',
        text: 'Linu ripercorre la strada fino all’Arco. Davanti a una bancarella un artigiano, Ottavio, sta alzando un portafoglio: “Di chi è? Un bambino mi ha detto che l’aveva trovato nella neve!” Linu riconosce subito il suo.',
        translation: 'O Linu refaz o caminho até o Arco. Diante de uma barraca, um artesão, Ottavio, está levantando uma carteira: “De quem é? Um menino me disse que a tinha encontrado na neve!” O Linu reconhece a sua na hora.',
        choices: [
          { text: '“È mio! Come posso ringraziarla?”', translation: '“É minha! Como posso agradecer ao senhor?”', next: 'bancarella' },
        ],
      },
      bancarella: {
        emoji: '🧤',
        text: 'Ottavio mette Linu dietro il banco. Per ore Linu mostra coppe e grolle ai clienti e ripete la frase che Ottavio gli ha insegnato: chi beve dalla coppa dell’amicizia non resta mai solo. A mezzanotte hanno venduto quasi tutto.',
        translation: 'Ottavio põe o Linu atrás do balcão. Durante horas, o Linu mostra taças e grolle aos clientes e repete a frase que Ottavio lhe ensinou: quem bebe da taça da amizade nunca fica sozinho. À meia-noite, eles venderam quase tudo.',
        choices: [
          { text: '“E adesso? La notte è ancora lunga!”', translation: '“E agora? A noite ainda é longa!”', next: 'veilla' },
        ],
      },
      veilla: {
        emoji: '🔥',
        text: 'È la Veillà: la fiera continua tutta la notte. Per le strade si canta e si balla, benché faccia un freddo terribile. Un gruppo di ragazzi che Linu non aveva mai visto gli fa posto accanto a un braciere e gli passa una coppa dell’amicizia fumante.',
        translation: 'É a Veillà: a feira continua a noite toda. Nas ruas se canta e se dança, embora esteja um frio terrível. Um grupo de jovens que o Linu nunca tinha visto abre espaço para ele ao lado de um braseiro e lhe passa uma taça da amizade fumegante.',
        choices: [
          { text: 'Linu beve dal suo beccuccio e passa la coppa.', translation: 'O Linu bebe pelo seu bico e passa a taça.', next: 'final_bom' },
          { text: 'Linu ringrazia, ma torna in albergo: fa troppo freddo.', translation: 'O Linu agradece, mas volta para o hotel: está frio demais.', next: 'final_freddo' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Il caffè è caldo e forte. Linu passa la coppa al vicino, che la passa a un altro, e così via fino all’alba. Qualcuno gli aveva detto che chi beve da quella coppa non resta mai solo: adesso Linu sa che è vero.',
        translation: 'O café é quente e forte. O Linu passa a taça ao vizinho, que a passa a outro, e assim por diante até o amanhecer. Alguém tinha lhe dito que quem bebe daquela taça nunca fica sozinho: agora o Linu sabe que é verdade.',
        ending: { tone: 'bom', title: 'Nunca sozinho', message: 'O Linu passou a Veillà entre novos amigos, bebendo da taça da amizade.' },
      },
      final_freddo: {
        emoji: '🛏️',
        text: 'In albergo Linu si mette sotto tre coperte. Dalla finestra sente la musica della Veillà, che continua fino al mattino. La prossima volta porterà una sciarpa più pesante.',
        translation: 'No hotel, o Linu se enfia debaixo de três cobertores. Da janela, ouve a música da Veillà, que continua até de manhã. Da próxima vez, vai levar um cachecol mais grosso.',
        ending: { tone: 'neutro', title: 'Frio demais', message: 'O Linu conheceu a feira, mas trocou a Veillà pelos cobertores.' },
      },
    },
  },

  // ───────────────────────── it-h24 · B1.4 · Dolomiti ─────────────────────────
  {
    id: 'it-h24',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Le rose di re Laurino',
    emoji: '🏔️',
    summary: 'Nas Dolomitas, uma guia ladina leva o Linu até um refúgio aos pés do Catinaccio para ver as montanhas ficarem cor-de-rosa.',
    cultural_context:
      'As Dolomitas são Patrimônio Mundial da UNESCO desde 2009. Em alguns vales ainda se fala ladino, e o tom rosado das rochas ao pôr do sol se chama “enrosadira”; a lenda liga esse fenômeno ao jardim de rosas do rei Laurino, no maciço do Catinaccio.',
    start: 'start',
    glossary: [
      ['bon dì', 'bom dia (em ladino, língua de alguns vales das Dolomitas)'],
      ['il rifugio', 'refúgio de montanha, com comida e camas'],
      ['il sentiero', 'a trilha'],
      ['la ferrata', 'via de escalada com cabos de aço'],
      ['il temporale', 'a tempestade (com trovões)'],
      ['l’enrosadira', 'o tom rosado das Dolomitas ao pôr do sol'],
      ['i canederli', 'bolinhos de pão típicos do Trentino-Alto Ádige'],
      ['fu catturato / rifiutò', 'foi capturado / recusou (passato remoto)'],
    ],
    nodes: {
      start: {
        emoji: '🥾',
        text: 'Linu è in Val di Fassa, ai piedi del Catinaccio. La guida, Anna, lo saluta: “Bon dì!” e gli spiega che è ladino, la lingua che parlavano i suoi nonni. La sera prima Anna aveva controllato il meteo: le avevano detto che il cielo sarebbe rimasto sereno fino alle tre.',
        translation: 'O Linu está no Val di Fassa, aos pés do Catinaccio. A guia, Anna, o cumprimenta: “Bon dì!” e explica que é ladino, a língua que os avós dela falavam. Na noite anterior, Anna tinha consultado a previsão: tinham lhe dito que o céu ficaria limpo até as três.',
        choices: [
          { text: '“Allora partiamo subito, così arriviamo prima delle tre!”', translation: '“Então vamos sair já, assim chegamos antes das três!”', next: 'sentiero' },
          {
            text: '“Perfetto, possiamo partire con calma dopo pranzo.”',
            translation: '“Perfeito, podemos sair com calma depois do almoço.”',
            wrong: 'Anna soube que o céu ficaria limpo só ATÉ as três (“fino alle tre”). Sair depois do almoço seria arriscado.',
          },
        ],
      },
      sentiero: {
        emoji: '🌼',
        text: 'Il sentiero sale tra i prati e poi tra le rocce chiare. Anna racconta che il Catinaccio, in tedesco, si chiama Rosengarten, cioè “giardino delle rose”. “Ti spiegherò il perché al rifugio”, dice. “È una leggenda che mi raccontava sempre mia nonna.”',
        translation: 'A trilha sobe entre os prados e depois entre as rochas claras. Anna conta que o Catinaccio, em alemão, se chama Rosengarten, ou seja, “jardim das rosas”. “Vou te explicar o porquê no refúgio”, diz ela. “É uma lenda que a minha avó sempre me contava.”',
        choices: [
          { text: 'Linu segue Anna fino al rifugio.', translation: 'O Linu segue Anna até o refúgio.', next: 'rifugio' },
          { text: '“Prima potremmo provare una ferrata?”', translation: '“Antes, poderíamos experimentar uma via ferrata?”', next: 'ferrata' },
        ],
      },
      ferrata: {
        emoji: '🧗',
        text: 'Anna guarda il cielo e scuote la testa. Dice a Linu che una ferrata richiede tempo e che le nuvole che si vedono a ovest non le piacciono per niente. “Chi va in montagna deve saper rinunciare”, aggiunge.',
        translation: 'Anna olha para o céu e balança a cabeça. Diz ao Linu que uma via ferrata exige tempo e que as nuvens que se veem a oeste não lhe agradam nem um pouco. “Quem vai à montanha tem que saber desistir”, acrescenta.',
        choices: [
          { text: '“Hai ragione, andiamo al rifugio.”', translation: '“Você tem razão, vamos ao refúgio.”', next: 'rifugio' },
          { text: '“Solo un pezzetto, dai!”', translation: '“Só um pedacinho, vai!”', next: 'temporale' },
        ],
      },
      temporale: {
        emoji: '⛈️',
        text: 'Dopo mezz’ora di ferrata il cielo diventa nero. Cominciano i tuoni e Anna fa scendere Linu in fretta. Arrivano al rifugio bagnati fradici, e solo allora Linu capisce perché Anna gli aveva detto di rinunciare.',
        translation: 'Depois de meia hora de via ferrata, o céu fica preto. Começam os trovões e Anna faz o Linu descer depressa. Chegam ao refúgio encharcados, e só então o Linu entende por que Anna tinha lhe dito para desistir.',
        choices: [
          { text: 'Linu si asciuga vicino alla stufa.', translation: 'O Linu se seca perto do aquecedor a lenha.', next: 'final_bagnato' },
        ],
      },
      rifugio: {
        emoji: '🏠',
        text: 'Al rifugio il gestore porta due piatti di canederli. Anna racconta la leggenda: “Re Laurino aveva un giardino di rose su queste montagne. Quando fu catturato, lanciò una maledizione: nessuno avrebbe più visto le rose, né di giorno né di notte. Ma dimenticò il tramonto.”',
        translation: 'No refúgio, o gerente traz dois pratos de canederli. Anna conta a lenda: “O rei Laurino tinha um jardim de rosas nestas montanhas. Quando foi capturado, lançou uma maldição: ninguém mais veria as rosas, nem de dia nem de noite. Mas ele se esqueceu do pôr do sol.”',
        choices: [
          { text: '“Quindi al tramonto le rose si vedono ancora?”', translation: '“Então ao pôr do sol as rosas ainda aparecem?”', next: 'tramonto' },
          {
            text: '“Quindi le rose si vedono solo di notte?”',
            translation: '“Então as rosas só aparecem de noite?”',
            wrong: 'Pela maldição, ninguém veria as rosas “né di giorno né di notte” (nem de dia nem de noite). O rei esqueceu só o PÔR DO SOL: é aí que elas aparecem.',
          },
        ],
      },
      tramonto: {
        emoji: '🌄',
        text: 'Nel pomeriggio passa un temporale, ma verso sera il cielo si apre. Anna e Linu escono sulla terrazza. Le pareti del Catinaccio diventano arancioni, poi rosa, poi viola. “Ecco l’enrosadira”, sussurra Anna. “Le rose di Laurino.”',
        translation: 'À tarde passa uma tempestade, mas no fim do dia o céu se abre. Anna e o Linu saem para o terraço. As paredes do Catinaccio ficam laranja, depois cor-de-rosa, depois roxas. “Aí está a enrosadira”, sussurra Anna. “As rosas de Laurino.”',
        choices: [
          { text: 'Linu resta in silenzio a guardare.', translation: 'O Linu fica em silêncio, olhando.', next: 'final_bom' },
          { text: 'Linu cerca il telefono per fare una foto.', translation: 'O Linu procura o celular para tirar uma foto.', next: 'final_foto' },
        ],
      },
      final_bom: {
        emoji: '🌹',
        text: 'Linu non dice niente finché la luce non scompare. Quella notte dorme al rifugio e sogna un re piccolissimo tra le rose. La mattina dopo scrive una cartolina: “Qualcuno mi aveva detto che le montagne non cambiano colore. Si sbagliava.”',
        translation: 'O Linu não diz nada até a luz desaparecer. Naquela noite, dorme no refúgio e sonha com um rei pequenininho entre as rosas. Na manhã seguinte, escreve um cartão-postal: “Alguém tinha me dito que as montanhas não mudam de cor. Estava enganado.”',
        ending: { tone: 'bom', title: 'As rosas de Laurino', message: 'O Linu ouviu a lenda ladina e viu a enrosadira com os próprios olhos.' },
      },
      final_foto: {
        emoji: '📱',
        text: 'Linu fruga nello zaino, ma il telefono è in fondo, sotto il maglione. Quando finalmente lo trova, le rocce sono già grigie. Anna ride: “Laurino non si fa fotografare!”',
        translation: 'O Linu revira a mochila, mas o celular está no fundo, debaixo do suéter. Quando finalmente o encontra, as rochas já estão cinzentas. Anna ri: “Laurino não se deixa fotografar!”',
        ending: { tone: 'neutro', title: 'Sem foto', message: 'O Linu viu só o começo da enrosadira; o resto ficou dentro da mochila.' },
      },
      final_bagnato: {
        emoji: '🌧️',
        text: 'Linu si asciuga mentre Anna gli racconta la leggenda di re Laurino e del suo giardino di rose. Ma quella sera il cielo resta coperto e l’enrosadira non si vede. Le rose, questa volta, rimangono nascoste.',
        translation: 'O Linu se seca enquanto Anna lhe conta a lenda do rei Laurino e do seu jardim de rosas. Mas naquela noite o céu continua fechado e a enrosadira não aparece. As rosas, desta vez, ficam escondidas.',
        ending: { tone: 'neutro', title: 'Encharcado', message: 'O Linu insistiu na via ferrata, pegou a tempestade e não viu as rosas.' },
      },
    },
  },

  // ───────────────────────── it-h25 · B2.1 · Catania e l’Etna ─────────────────────────
  {
    id: 'it-h25',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Se la Muntagna si svegliasse',
    emoji: '🌋',
    summary: 'Em Catania, o Linu conhece uma vulcanóloga e sobe o Etna justamente no dia em que o vulcão resolve acordar.',
    cultural_context:
      'O Etna, que os catanenses chamam de “a Muntagna”, é o vulcão ativo mais alto da Europa fora do Cáucaso e é Patrimônio Mundial da UNESCO desde 2013. Depois do terremoto de 1693, Catania foi reconstruída em estilo barroco, com muita pedra de lava.',
    start: 'start',
    glossary: [
      ['a Muntagna', 'a Montanha: como os catanenses chamam o Etna (em siciliano)'],
      ['u Liotru', 'o elefante de pedra de lava, símbolo de Catania (em siciliano)'],
      ['la granita', 'raspadinha siciliana (de amêndoa, limão, café…)'],
      ['la colata', 'o derrame de lava'],
      ['la cenere', 'a cinza'],
      ['se fossi in te…', 'se eu fosse você…'],
      ['se avessimo avuto…, avremmo…', 'se tivéssemos tido…, teríamos…'],
      ['brontolare', 'resmungar, roncar'],
    ],
    nodes: {
      start: {
        emoji: '🍧',
        text: 'Sono le otto e Linu fa colazione in un bar di Catania con una granita alle mandorle e una brioche. Il barista indica il vulcano, che fuma sopra i tetti: “Se fossi in te, oggi salirei sulla Muntagna: stanotte ha brontolato un po’.” Accanto a Linu, una ragazza con la maglietta dell’osservatorio sorride.',
        translation: 'São oito horas e o Linu toma café da manhã num bar de Catania com uma granita de amêndoa e um brioche. O barista aponta o vulcão, que solta fumaça acima dos telhados: “Se eu fosse você, hoje subiria a Montanha: esta noite ela roncou um pouco.” Ao lado do Linu, uma moça com a camiseta do observatório sorri.',
        choices: [
          { text: 'Linu chiede alla ragazza che lavoro fa.', translation: 'O Linu pergunta à moça em que ela trabalha.', next: 'vulcanologa' },
          { text: 'Linu decide di fare prima un giro per la città.', translation: 'O Linu decide dar primeiro uma volta pela cidade.', next: 'citta' },
        ],
      },
      vulcanologa: {
        emoji: '👩‍🔬',
        text: '“Sono vulcanologa, mi chiamo Rosaria”, risponde. “Se non ci fossero sensori dappertutto, non sapremmo quasi niente di quello che succede dentro l’Etna.” Poi dice che oggi sale con due colleghi a controllare un sismometro e che, se Linu volesse, potrebbe andare con loro.',
        translation: '“Sou vulcanóloga, meu nome é Rosaria”, responde. “Se não houvesse sensores por toda parte, não saberíamos quase nada do que acontece dentro do Etna.” Depois diz que hoje vai subir com dois colegas para verificar um sismômetro e que, se o Linu quisesse, poderia ir com eles.',
        choices: [
          { text: '“Verrei molto volentieri!”', translation: '“Eu iria com muito prazer!”', next: 'salita' },
          {
            text: '“Quindi anche senza sensori sapreste tutto lo stesso?”',
            translation: '“Então, mesmo sem sensores, vocês saberiam tudo igual?”',
            wrong: 'Rosaria disse o contrário: se NÃO houvesse sensores (“se non ci fossero sensori”), eles não saberiam quase nada do que acontece dentro do Etna.',
          },
        ],
      },
      citta: {
        emoji: '🐘',
        text: 'In Piazza del Duomo Linu vede un elefante di pietra lavica: i catanesi lo chiamano “u Liotru”. Molti palazzi sono scuri, costruiti con la lava. Una signora gli spiega che, se il terremoto del 1693 non avesse distrutto la città, oggi Catania non sarebbe così barocca.',
        translation: 'Na Piazza del Duomo, o Linu vê um elefante de pedra de lava: os catanenses o chamam de “u Liotru”. Muitos palácios são escuros, construídos com lava. Uma senhora lhe explica que, se o terremoto de 1693 não tivesse destruído a cidade, hoje Catania não seria tão barroca.',
        choices: [
          { text: 'Linu prende l’autobus per l’Etna.', translation: 'O Linu pega o ônibus para o Etna.', next: 'sapienza' },
        ],
      },
      salita: {
        emoji: '🚙',
        text: 'Il fuoristrada sale tra colate vecchie e nuove. A quasi tremila metri, Rosaria controlla il sismometro e diventa seria: “I segnali sono aumentati. Se avessimo avuto più tempo, avremmo installato un secondo sensore, ma è meglio scendere subito.”',
        translation: 'O jipe sobe entre derrames de lava velhos e novos. A quase três mil metros, Rosaria verifica o sismômetro e fica séria: “Os sinais aumentaram. Se tivéssemos tido mais tempo, teríamos instalado um segundo sensor, mas é melhor descer já.”',
        choices: [
          { text: '“Scendiamo, allora.”', translation: '“Então vamos descer.”', next: 'discesa' },
          {
            text: '“Allora installiamo il secondo sensore adesso, così finiamo il lavoro.”',
            translation: '“Então vamos instalar o segundo sensor agora, assim terminamos o trabalho.”',
            wrong: 'Rosaria disse que TERIAM instalado outro sensor SE tivessem tido mais tempo (“se avessimo avuto più tempo”). Como não têm, o melhor é descer já.',
          },
        ],
      },
      discesa: {
        emoji: '🌋',
        text: 'Mentre scendono, dalla cima esce una fontana di lava, rossa contro il cielo. Rosaria ferma il fuoristrada in un punto sicuro. “Se fossimo rimasti lassù, adesso saremmo in mezzo alla cenere”, dice. “Ma da qui è uno spettacolo che non dimenticherai.”',
        translation: 'Enquanto descem, sai do cume uma fonte de lava, vermelha contra o céu. Rosaria para o jipe num ponto seguro. “Se tivéssemos ficado lá em cima, agora estaríamos no meio das cinzas”, diz ela. “Mas daqui é um espetáculo que você não vai esquecer.”',
        choices: [
          { text: 'Linu guarda la fontana di lava in silenzio.', translation: 'O Linu olha a fonte de lava em silêncio.', next: 'final_bom' },
        ],
      },
      sapienza: {
        emoji: '⛰️',
        text: 'L’autobus arriva al Rifugio Sapienza, a quasi duemila metri. Linu cammina sui crateri Silvestri, che sembrano piccole montagne di sabbia nera. All’improvviso sente un boato e vede una nuvola scura salire dalla cima.',
        translation: 'O ônibus chega ao Rifugio Sapienza, a quase dois mil metros. O Linu caminha pelas crateras Silvestri, que parecem pequenas montanhas de areia preta. De repente, ouve um estrondo e vê uma nuvem escura subindo do cume.',
        choices: [
          { text: 'Linu chiede informazioni a una guida.', translation: 'O Linu pede informações a um guia.', next: 'guida' },
          { text: 'Linu continua a salire da solo per vedere meglio.', translation: 'O Linu continua subindo sozinho para ver melhor.', next: 'final_cenere' },
        ],
      },
      guida: {
        emoji: '🧔',
        text: 'La guida si chiama Turi e ha i capelli grigi di cenere. “Se fossi in te, non salirei più in alto”, dice. “Se fosse un’eruzione grande, avrebbero già chiuso la zona, ma la Muntagna fa quello che vuole.” Poi gli offre un passaggio fino a un punto panoramico sicuro.',
        translation: 'O guia se chama Turi e tem os cabelos grisalhos de cinza. “Se eu fosse você, não subiria mais”, diz ele. “Se fosse uma erupção grande, já teriam fechado a área, mas a Montanha faz o que quer.” Depois lhe oferece uma carona até um mirante seguro.',
        choices: [
          { text: '“Grazie, vengo con lei!”', translation: '“Obrigado, vou com o senhor!”', next: 'final_turi' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'La sera, dalla terrazza dell’osservatorio, Linu vede ancora il bagliore rosso sulla cima. Rosaria gli dice: “Se non fossi venuto, non avrei avuto nessuno a cui spiegare i sismografi!” Linu pensa che sia stata la giornata più incredibile del suo viaggio.',
        translation: 'À noite, do terraço do observatório, o Linu ainda vê o clarão vermelho no cume. Rosaria lhe diz: “Se você não tivesse vindo, eu não teria tido ninguém a quem explicar os sismógrafos!” O Linu acha que foi o dia mais incrível da sua viagem.',
        ending: { tone: 'bom', title: 'O vulcão acordou', message: 'O Linu subiu o Etna com uma vulcanóloga e desceu a tempo de ver a fonte de lava.' },
      },
      final_turi: {
        emoji: '🔥',
        text: 'Dal punto panoramico Linu vede una fontana di lava accendersi sulla cima. Turi gli racconta che nel 1669 una colata era arrivata fino al mare, a Catania. “Se non ti avessi fermato, adesso saresti lassù in mezzo alla cenere”, ride.',
        translation: 'Do mirante, o Linu vê uma fonte de lava se acender no cume. Turi lhe conta que em 1669 um derrame de lava tinha chegado até o mar, em Catania. “Se eu não tivesse te parado, agora você estaria lá em cima no meio das cinzas”, ri.',
        ending: { tone: 'bom', title: 'Conselho de guia', message: 'O Linu ouviu quem conhece a Muntagna e viu a erupção em segurança.' },
      },
      final_cenere: {
        emoji: '😷',
        text: 'Dopo cento metri la cenere comincia a cadere come una pioggia nera. Linu non vede più il sentiero e torna indietro, tossendo. Più tardi pensa che avrebbe fatto meglio a chiedere consiglio a qualcuno prima di salire.',
        translation: 'Depois de cem metros, a cinza começa a cair como uma chuva preta. O Linu não enxerga mais a trilha e volta, tossindo. Mais tarde, pensa que teria feito melhor se tivesse pedido conselho a alguém antes de subir.',
        ending: { tone: 'neutro', title: 'Chuva de cinzas', message: 'O Linu subiu sozinho e teve que voltar sem ver nada.' },
      },
    },
  },

  // ───────────────────────── it-h26 · B2.1 · Siena ─────────────────────────
  {
    id: 'it-h26',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Il Palio visto da vicino',
    emoji: '🐎',
    summary: 'Hóspede de uma contrada de Siena, o Linu pode cuidar do cavalo ou ir ao jantar da véspera antes da corrida do Palio.',
    cultural_context:
      'O Palio de Siena é disputado em 2 de julho e 16 de agosto na Piazza del Campo: dez das dezessete contradas correm três voltas com cavalos montados em pelo. Um cavalo que chega sem o jóquei, o “cavallo scosso”, também pode vencer.',
    start: 'start',
    glossary: [
      ['la contrada', 'bairro de Siena com nome, bandeira e símbolo próprios'],
      ['il fantino', 'o jóquei'],
      ['il barbaresco', 'quem cuida do cavalo da contrada'],
      ['il drappellone', 'o estandarte pintado entregue a quem vence'],
      ['il cavallo scosso', 'cavalo que chega sem o jóquei (e pode vencer)'],
      ['se fossi arrivato…, avresti visto…', 'se você tivesse chegado…, teria visto…'],
      ['magari + congiuntivo imperfetto', 'quem dera'],
    ],
    nodes: {
      start: {
        emoji: '🚩',
        text: 'È il primo luglio e Siena è piena di bandiere. Linu è ospite di Lorenzo, un ragazzo della Contrada dell’Onda, il cui simbolo è un delfino. “Se fossi arrivato tre giorni fa, avresti visto l’assegnazione dei cavalli”, dice Lorenzo. “Ma domani c’è il Palio, e stasera la cena della contrada.”',
        translation: 'É primeiro de julho e Siena está cheia de bandeiras. O Linu está hospedado com Lorenzo, um rapaz da Contrada dell’Onda, cujo símbolo é um golfinho. “Se você tivesse chegado três dias atrás, teria visto o sorteio dos cavalos”, diz Lorenzo. “Mas amanhã tem o Palio, e hoje à noite o jantar da contrada.”',
        choices: [
          { text: '“Magari potessi conoscere il vostro cavallo!”', translation: '“Quem dera eu pudesse conhecer o cavalo de vocês!”', next: 'stalla' },
          { text: '“Mi piacerebbe tanto venire alla cena.”', translation: '“Eu adoraria ir ao jantar.”', next: 'cena' },
          {
            text: '“Sì, l’ho vista! È stata emozionante.”',
            translation: '“Sim, eu vi! Foi emocionante.”',
            wrong: 'Lorenzo disse que o Linu TERIA visto o sorteio SE tivesse chegado três dias antes (“se fossi arrivato”). Ele não chegou a tempo, então não viu.',
          },
        ],
      },
      stalla: {
        emoji: '🐴',
        text: 'Lorenzo lo porta alla stalla della contrada, dove un cavallo baio mangia tranquillo. Accanto c’è Beppe, il barbaresco, che non lo lascia mai solo. “Se fosse per me, dormirei qui con lui”, dice Beppe. “Vuoi spazzolarlo? Piano, però: se si agitasse proprio oggi, sarebbe un disastro.”',
        translation: 'Lorenzo o leva ao estábulo da contrada, onde um cavalo baio come tranquilo. Ao lado está Beppe, o cuidador, que nunca o deixa sozinho. “Se dependesse de mim, eu dormiria aqui com ele”, diz Beppe. “Quer escová-lo? Mas com calma: se ele se agitasse justo hoje, seria um desastre.”',
        choices: [
          { text: 'Linu lo spazzola con delicatezza.', translation: 'O Linu o escova com delicadeza.', next: 'spazzola' },
          {
            text: 'Linu lo spazzola forte e in fretta, per farlo bello subito.',
            translation: 'O Linu o escova com força e depressa, para deixá-lo bonito logo.',
            wrong: 'Beppe pediu “piano” (com calma, devagar): se o cavalo se agitasse justo na véspera do Palio, seria um desastre.',
          },
        ],
      },
      spazzola: {
        emoji: '🪮',
        text: 'Il cavallo chiude gli occhi e appoggia il muso sulla spalla di Linu. Beppe ride: “Se non l’avessi visto con i miei occhi, non ci crederei. Con gli estranei di solito è nervoso.” Poi gli dice che domani lo porteranno in chiesa per la benedizione e gli chiede se vorrebbe venire.',
        translation: 'O cavalo fecha os olhos e apoia o focinho no ombro do Linu. Beppe ri: “Se eu não tivesse visto com os meus próprios olhos, não acreditaria. Com estranhos ele costuma ficar nervoso.” Depois lhe diz que amanhã vão levá-lo à igreja para a bênção e pergunta se ele gostaria de ir.',
        choices: [
          { text: '“Certo, ci sarò!”', translation: '“Claro, vou estar lá!”', next: 'benedizione' },
        ],
      },
      cena: {
        emoji: '🍷',
        text: 'La cena della contrada si tiene in una lunga strada, con tavoli per centinaia di persone. Si canta, si ride e si brinda al fantino. Un vecchio contradaiolo dice a Linu: “Se vincessimo, sarebbe il giorno più bello dell’anno. Se invece vincessero i nostri rivali…” e fa una faccia terribile.',
        translation: 'O jantar da contrada acontece numa rua comprida, com mesas para centenas de pessoas. Canta-se, ri-se e brinda-se ao jóquei. Um velho morador da contrada diz ao Linu: “Se nós vencêssemos, seria o dia mais bonito do ano. Se, ao contrário, vencessem os nossos rivais…” e faz uma cara terrível.',
        choices: [
          { text: '“Allora domani tiferò con tutta la voce che ho!”', translation: '“Então amanhã vou torcer com toda a voz que eu tenho!”', next: 'piazza' },
        ],
      },
      benedizione: {
        emoji: '⛪',
        text: 'La mattina del Palio, nella piccola chiesa della contrada, il prete benedice il cavallo e alla fine gli dice: “Va’ e torna vincitore!” Tutti applaudono, e il cavallo, come se avesse capito, alza la testa.',
        translation: 'Na manhã do Palio, na pequena igreja da contrada, o padre abençoa o cavalo e no fim lhe diz: “Vai e volta vencedor!” Todos aplaudem, e o cavalo, como se tivesse entendido, levanta a cabeça.',
        choices: [
          { text: 'Linu segue la contrada fino a Piazza del Campo.', translation: 'O Linu segue a contrada até a Piazza del Campo.', next: 'piazza' },
        ],
      },
      piazza: {
        emoji: '🏇',
        text: 'La sera Piazza del Campo è piena fino all’ultimo centimetro. La corsa dura poco più di un minuto: tre giri, curve strette, grida. Alla curva di San Martino il fantino dell’Onda cade, ma il cavallo continua a correre da solo… e arriva primo!',
        translation: 'À noite, a Piazza del Campo está lotada até o último centímetro. A corrida dura pouco mais de um minuto: três voltas, curvas fechadas, gritos. Na curva de San Martino, o jóquei da Onda cai, mas o cavalo continua correndo sozinho… e chega em primeiro!',
        choices: [
          { text: '“Abbiamo vinto? Ma senza fantino vale?”', translation: '“Ganhamos? Mas sem jóquei vale?”', next: 'vittoria' },
        ],
      },
      vittoria: {
        emoji: '🐬',
        text: 'Lorenzo piange e ride insieme: “Vale, vale! Il cavallo scosso può vincere!” La contrada invade la piazza per prendere il drappellone. Se qualcuno gli avesse detto una settimana fa che avrebbe vissuto un momento così, Linu non ci avrebbe creduto.',
        translation: 'Lorenzo chora e ri ao mesmo tempo: “Vale, vale! O cavalo sem jóquei pode vencer!” A contrada invade a praça para pegar o estandarte. Se alguém tivesse dito ao Linu, uma semana antes, que ele viveria um momento assim, ele não teria acreditado.',
        choices: [
          { text: 'Linu corre in piazza con gli altri.', translation: 'O Linu corre para a praça com os outros.', next: 'final_bom' },
          { text: 'Linu resta sul palco a guardare la festa da lontano.', translation: 'O Linu fica na arquibancada olhando a festa de longe.', next: 'final_lontano' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Nella confusione Linu arriva fino al cavallo, che gli appoggia il muso sulla testa. Quella notte l’Onda festeggia fino all’alba e a Linu regalano un fazzoletto con il delfino. “Se tornerai l’anno prossimo, sarai già uno di noi”, gli dicono.',
        translation: 'Na confusão, o Linu chega até o cavalo, que apoia o focinho na cabeça dele. Naquela noite, a Onda comemora até o amanhecer e dão ao Linu um lenço com o golfinho. “Se você voltar no ano que vem, já vai ser um de nós”, dizem a ele.',
        ending: { tone: 'bom', title: 'Vitória da Onda!', message: 'O Linu viveu o Palio por dentro e ganhou o lenço da contrada.' },
      },
      final_lontano: {
        emoji: '👀',
        text: 'Dall’alto Linu vede la gente che corre, le bandiere che volano e il drappellone alzato al cielo. È bellissimo, ma pensa che, se fosse sceso in piazza, avrebbe vissuto la festa da dentro.',
        translation: 'Lá de cima, o Linu vê as pessoas correndo, as bandeiras voando e o estandarte erguido para o céu. É lindíssimo, mas ele pensa que, se tivesse descido para a praça, teria vivido a festa por dentro.',
        ending: { tone: 'neutro', title: 'De longe', message: 'O Linu viu a vitória, mas não entrou na festa da contrada.' },
      },
    },
  },

  // ───────────────────────── it-h27 · B2.1 · Pisa ─────────────────────────
  {
    id: 'it-h27',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Il pendolo di Galileo',
    emoji: '⏱️',
    summary: 'Em Pisa, o Linu ajuda uma estudante de física a refazer o experimento do pêndulo que a tradição atribui a Galileu.',
    cultural_context:
      'Galileu Galilei nasceu em Pisa em 1564 e estudou na universidade da cidade. Conta a tradição que ele percebeu a regularidade do pêndulo observando uma lâmpada que balançava na Catedral, mas a lâmpada que hoje leva seu nome foi instalada alguns anos depois.',
    start: 'start',
    glossary: [
      ['il pendolo', 'o pêndulo'],
      ['l’oscillazione', 'a oscilação'],
      ['il polso', 'o pulso'],
      ['il filo', 'o fio'],
      ['pendente', 'inclinado(a) (a torre)'],
      ['come se + congiuntivo', 'como se'],
      ['la cecina', 'torta fina de farinha de grão-de-bico, típica de Pisa e Livorno'],
      ['prendere trenta', 'tirar nota máxima (as provas universitárias vão até 30)'],
    ],
    nodes: {
      start: {
        emoji: '🗼',
        text: 'Linu è in Piazza dei Miracoli e, come tutti i turisti, finge di sostenere la Torre con una pinna. Una ragazza ride: “Se tutti quelli che fanno questa foto la sostenessero davvero, la Torre sarebbe dritta da secoli!” Si chiama Marta e studia fisica all’università.',
        translation: 'O Linu está na Piazza dei Miracoli e, como todos os turistas, finge segurar a Torre com uma nadadeira. Uma moça ri: “Se todos os que tiram essa foto a segurassem de verdade, a Torre estaria reta há séculos!” Ela se chama Marta e estuda física na universidade.',
        choices: [
          { text: '“Che cosa stai studiando in questo periodo?”', translation: '“O que você está estudando nesta época?”', next: 'marta' },
          { text: '“Io vorrei salire sulla Torre.”', translation: '“Eu queria subir na Torre.”', next: 'torre' },
        ],
      },
      marta: {
        emoji: '👩‍🎓',
        text: '“Sto preparando un esperimento sul pendolo per un esame”, dice Marta. “Si racconta che Galileo, da giovane, avesse osservato una lampada che oscillava nel Duomo e avesse misurato il tempo con il polso.” Poi aggiunge: “Se mi aiutassi, finirei molto prima.”',
        translation: '“Estou preparando um experimento sobre o pêndulo para uma prova”, diz Marta. “Conta-se que Galileu, quando jovem, teria observado uma lâmpada que balançava na Catedral e medido o tempo com o pulso.” Depois acrescenta: “Se você me ajudasse, eu terminaria bem antes.”',
        choices: [
          { text: '“Ti aiuto volentieri!”', translation: '“Te ajudo com prazer!”', next: 'esperimento' },
          { text: '“Prima vorrei vedere quella lampada!”', translation: '“Antes eu queria ver essa lâmpada!”', next: 'duomo' },
        ],
      },
      duomo: {
        emoji: '💡',
        text: 'Nel Duomo, Marta indica una grande lampada di bronzo. “In realtà questa fu fatta qualche anno dopo l’osservazione di Galileo”, sussurra. “Ma se non ci fosse la leggenda, pochi turisti la guarderebbero.” Linu la fissa come se si aspettasse di vederla muoversi da un momento all’altro.',
        translation: 'Na Catedral, Marta aponta uma grande lâmpada de bronze. “Na verdade, esta foi feita alguns anos depois da observação de Galileu”, sussurra. “Mas, se não existisse a lenda, poucos turistas olhariam para ela.” O Linu a encara como se esperasse vê-la se mexer a qualquer momento.',
        choices: [
          { text: '“Adesso ho capito. Andiamo a fare l’esperimento!”', translation: '“Agora entendi. Vamos fazer o experimento!”', next: 'esperimento' },
          {
            text: '“Che emozione! È proprio la lampada che guardava Galileo.”',
            translation: '“Que emoção! É exatamente a lâmpada que Galileu olhava.”',
            wrong: 'Marta disse que esta lâmpada foi feita “qualche anno dopo”: alguns anos DEPOIS da observação de Galileu. A ligação com ela é só lenda.',
          },
        ],
      },
      torre: {
        emoji: '🌬️',
        text: 'Linu sale i quasi trecento gradini della Torre. In cima il vento è forte e il pavimento sembra inclinato. Una guida racconta che, se negli anni Novanta non avessero consolidato il terreno, la Torre forse sarebbe crollata.',
        translation: 'O Linu sobe os quase trezentos degraus da Torre. Lá em cima, o vento é forte e o piso parece inclinado. Um guia conta que, se nos anos noventa não tivessem consolidado o terreno, a Torre talvez tivesse desabado.',
        choices: [
          { text: 'Linu scende e va a cercare Marta.', translation: 'O Linu desce e vai procurar a Marta.', next: 'marta' },
          { text: 'Linu resta in cima ad aspettare il tramonto.', translation: 'O Linu fica lá em cima esperando o pôr do sol.', next: 'final_torre' },
        ],
      },
      esperimento: {
        emoji: '🧪',
        text: 'In laboratorio Marta appende una pallina a un filo. “Se le oscillazioni durassero tutte lo stesso tempo, sia quelle grandi sia quelle piccole, Galileo avrebbe avuto ragione”, spiega. “Tu conta le oscillazioni, io misuro il tempo.” La pallina parte con oscillazioni ampie, che diventano via via più piccole.',
        translation: 'No laboratório, Marta pendura uma bolinha num fio. “Se as oscilações durassem todas o mesmo tempo, tanto as grandes quanto as pequenas, Galileu teria tido razão”, explica. “Você conta as oscilações, eu meço o tempo.” A bolinha começa com oscilações amplas, que vão ficando cada vez menores.',
        choices: [
          { text: 'Linu conta con attenzione fino a trenta.', translation: 'O Linu conta com atenção até trinta.', next: 'risultato' },
          {
            text: 'Linu smette di contare quando le oscillazioni diventano piccole.',
            translation: 'O Linu para de contar quando as oscilações ficam pequenas.',
            wrong: 'A ideia é justamente comparar oscilações grandes e pequenas: Marta quer saber se TODAS duram o mesmo tempo (“sia quelle grandi sia quelle piccole”). Parar nas pequenas estragaria o experimento.',
          },
        ],
      },
      risultato: {
        emoji: '📓',
        text: 'Marta guarda il cronometro e sorride: le ultime oscillazioni sono durate quasi quanto le prime. “Se avessimo usato un filo più lungo, sarebbero state più lente, ma sempre uguali tra loro”, dice. Poi scrive sul quaderno: “Assistente tecnico: Linu”.',
        translation: 'Marta olha o cronômetro e sorri: as últimas oscilações duraram quase o mesmo que as primeiras. “Se tivéssemos usado um fio mais comprido, elas teriam sido mais lentas, mas sempre iguais entre si”, diz. Depois escreve no caderno: “Assistente técnico: Linu”.',
        choices: [
          { text: '“Posso venire all’esame con te?”', translation: '“Posso ir à prova com você?”', next: 'final_bom' },
          { text: '“Adesso festeggiamo con una cecina!”', translation: '“Agora vamos comemorar com uma cecina!”', next: 'final_cecina' },
        ],
      },
      final_bom: {
        emoji: '🎓',
        text: 'All’esame il professore ascolta Marta e le fa i complimenti. Quando lei racconta del suo assistente con le pinne, lui ride: “Se Galileo avesse avuto un pinguino, avrebbe finito ancora prima!” Marta prende trenta.',
        translation: 'Na prova, o professor escuta Marta e a elogia. Quando ela conta do seu assistente com nadadeiras, ele ri: “Se Galileu tivesse tido um pinguim, teria terminado ainda antes!” Marta tira nota máxima.',
        ending: { tone: 'bom', title: 'Nota máxima', message: 'O Linu ajudou Marta a refazer o experimento do pêndulo e ela tirou trinta.' },
      },
      final_cecina: {
        emoji: '🥙',
        text: 'In una pizzeria vicino ai Lungarni mangiano la cecina, calda e croccante. Marta dice che, se Linu non ci fosse stato, sarebbe ancora in laboratorio a contare oscillazioni. Linu pensa che a Pisa perfino la fisica abbia un sapore speciale.',
        translation: 'Numa pizzaria perto das margens do Arno, eles comem cecina, quente e crocante. Marta diz que, se o Linu não estivesse lá, ela ainda estaria no laboratório contando oscilações. O Linu pensa que em Pisa até a física tem um sabor especial.',
        ending: { tone: 'bom', title: 'Física e cecina', message: 'O Linu ajudou no experimento e comemorou com a cecina de Pisa.' },
      },
      final_torre: {
        emoji: '🌇',
        text: 'Dalla cima Linu vede il sole scendere sull’Arno e sulla campagna. È uno spettacolo, ma quando scende Marta se n’è già andata. Se fosse sceso prima, avrebbe potuto aiutarla con l’esperimento.',
        translation: 'Lá de cima, o Linu vê o sol descer sobre o Arno e o campo. É um espetáculo, mas, quando ele desce, Marta já foi embora. Se tivesse descido antes, poderia tê-la ajudado com o experimento.',
        ending: { tone: 'neutro', title: 'Pôr do sol na Torre', message: 'O Linu viu Pisa do alto, mas perdeu o experimento de Marta.' },
      },
    },
  },

  // ───────────────────────── it-h28 · B2.2 · Cinque Terre ─────────────────────────
  {
    id: 'it-h28',
    level: 'B2.2',
    cefr: 'B2',
    title: 'I muretti delle Cinque Terre',
    emoji: '🍇',
    summary: 'O Linu se oferece por e-mail como voluntário na vindima de Manarola e aprende como são feitos os muros de pedra seca.',
    cultural_context:
      'As Cinque Terre (Monterosso, Vernazza, Corniglia, Manarola e Riomaggiore) são Patrimônio Mundial da UNESCO desde 1997. As vinhas crescem em terraços sustentados por muros de pedra seca, e na vindima as caixas de uva descem por pequenos monotrilhos.',
    start: 'start',
    glossary: [
      ['il muretto a secco', 'muro de pedras encaixadas, sem argamassa'],
      ['la vendemmia', 'a vindima, a colheita da uva'],
      ['la monorotaia', 'o monotrilho (para subir e descer as caixas de uva)'],
      ['lo Sciacchetrà', 'vinho doce de uvas passificadas, típico das Cinque Terre'],
      ['Gentile… / Distinti saluti', 'Prezado(a)… / Atenciosamente (e-mail formal)'],
      ['venire / andare + participio', 'ser / dever ser (voz passiva): “va messa” = deve ser colocada'],
      ['si + verbo', 'se (impessoal ou passivo): “si lavora” = trabalha-se'],
    ],
    nodes: {
      start: {
        emoji: '📧',
        text: 'Linu scrive un’e-mail al Parco: “Gentile Direttore, Le scrivo per offrire il mio aiuto durante la vendemmia. Resto in attesa di una Sua cortese risposta. Distinti saluti, Linu.” Il giorno dopo arriva la risposta: “Gentile Linu, La ringraziamo. Lunedì Lei verrà accolto a Manarola dal signor Aldo, alle sette in punto del mattino.”',
        translation: 'O Linu escreve um e-mail ao Parque: “Prezado Diretor, escrevo-lhe para oferecer a minha ajuda durante a vindima. Aguardo a sua gentil resposta. Atenciosamente, Linu.” No dia seguinte chega a resposta: “Prezado Linu, agradecemos. Na segunda-feira o senhor será recebido em Manarola pelo senhor Aldo, às sete em ponto da manhã.”',
        choices: [
          { text: 'Lunedì Linu arriva a Manarola alle sette meno cinque.', translation: 'Na segunda, o Linu chega a Manarola às cinco para as sete.', next: 'aldo' },
          {
            text: 'Linu va a Manarola lunedì pomeriggio, con calma.',
            translation: 'O Linu vai a Manarola na segunda à tarde, com calma.',
            wrong: 'A resposta dizia “alle sette in punto del mattino”: às sete em ponto da MANHÃ. Chegar à tarde seria tarde demais.',
          },
        ],
      },
      aldo: {
        emoji: '👨‍🌾',
        text: 'Il signor Aldo lo porta tra le vigne, su terrazze strettissime sopra il mare. “Qui l’uva viene raccolta tutta a mano”, spiega. “Le cassette si caricano sulla monorotaia, che le porta giù fino alla strada.” Poi gli dà un paio di forbici e un secchio.',
        translation: 'O senhor Aldo o leva entre as vinhas, em terraços estreitíssimos sobre o mar. “Aqui a uva é toda colhida à mão”, explica. “As caixas são carregadas no monotrilho, que as leva até a estrada.” Depois lhe dá uma tesoura e um balde.',
        choices: [
          { text: 'Linu comincia a tagliare i grappoli.', translation: 'O Linu começa a cortar os cachos.', next: 'vendemmia' },
          { text: '“E questi muri di pietra, chi li ha costruiti?”', translation: '“E esses muros de pedra, quem os construiu?”', next: 'muretti' },
        ],
      },
      muretti: {
        emoji: '🧱',
        text: '“I muretti a secco sono stati costruiti dai contadini nel corso dei secoli, pietra su pietra, senza cemento”, dice Aldo. “Si dice che, messi in fila, siano lunghi migliaia di chilometri. Se non vengono curati, crollano e la terra scivola in mare.”',
        translation: '“Os murinhos de pedra seca foram construídos pelos camponeses ao longo dos séculos, pedra sobre pedra, sem cimento”, diz Aldo. “Dizem que, enfileirados, teriam milhares de quilômetros. Se não forem cuidados, desabam e a terra escorrega para o mar.”',
        choices: [
          { text: '“Allora vanno riparati continuamente.”', translation: '“Então eles precisam ser consertados o tempo todo.”', next: 'vendemmia' },
          {
            text: '“Quindi sono fatti con il cemento, per durare di più.”',
            translation: '“Então são feitos de cimento, para durarem mais.”',
            wrong: 'Aldo disse que foram construídos “senza cemento”, só pedra sobre pedra. Por isso se chamam muros “a secco”.',
          },
        ],
      },
      vendemmia: {
        emoji: '☀️',
        text: 'Si lavora fino a mezzogiorno, sotto il sole. A pranzo si mangiano focaccia e acciughe, seduti sui muretti. Nel pomeriggio, però, scoppia un temporale improvviso e, quando smette di piovere, Aldo si accorge che un tratto di muretto è crollato.',
        translation: 'Trabalha-se até o meio-dia, sob o sol. No almoço come-se focaccia e anchovas, sentados nos murinhos. À tarde, porém, cai uma tempestade repentina e, quando para de chover, Aldo percebe que um trecho do murinho desabou.',
        choices: [
          { text: '“Posso aiutarla a ricostruirlo?”', translation: '“Posso ajudar o senhor a reconstruí-lo?”', next: 'riparare' },
          { text: '“Forse sarebbe meglio avvisare il Parco.”', translation: '“Talvez fosse melhor avisar o Parque.”', next: 'parco' },
        ],
      },
      riparare: {
        emoji: '🪨',
        text: 'Aldo mostra a Linu come si sceglie ogni pietra: quelle grandi vanno messe sotto, quelle piccole negli spazi vuoti. Linu lavora con attenzione, anche se le pietre sono pesanti per le sue pinne. Al tramonto il muretto è di nuovo in piedi.',
        translation: 'Aldo mostra ao Linu como se escolhe cada pedra: as grandes devem ser colocadas embaixo, as pequenas nos espaços vazios. O Linu trabalha com atenção, embora as pedras sejam pesadas para as suas nadadeiras. Ao pôr do sol, o murinho está de pé de novo.',
        choices: [
          { text: 'Linu guarda il lavoro, stanco ma felice.', translation: 'O Linu olha o trabalho, cansado mas feliz.', next: 'final_bom' },
        ],
      },
      parco: {
        emoji: '💻',
        text: 'Linu scrive un’altra e-mail: “Gentile Direttore, La informo che a Manarola è crollato un tratto di muretto. Le sarei grato se qualcuno potesse venire a controllare.” La risposta arriva il giorno dopo: il muretto verrà riparato dai tecnici del Parco fra due settimane.',
        translation: 'O Linu escreve outro e-mail: “Prezado Diretor, informo-lhe que em Manarola desabou um trecho de murinho. Ficaria grato se alguém pudesse vir verificar.” A resposta chega no dia seguinte: o murinho será consertado pelos técnicos do Parque dentro de duas semanas.',
        choices: [
          { text: 'Linu torna in vigna e aspetta i tecnici.', translation: 'O Linu volta à vinha e espera os técnicos.', next: 'final_attesa' },
          { text: 'Linu propone ad Aldo di ripararlo insieme, senza aspettare.', translation: 'O Linu propõe a Aldo consertá-lo juntos, sem esperar.', next: 'riparare' },
        ],
      },
      final_bom: {
        emoji: '🍷',
        text: 'La sera Aldo apre una bottiglia di Sciacchetrà, il vino dolce che si produce con uve lasciate appassire. “A chi ha le pinne e anche la pazienza”, brinda. Sotto di loro, le luci di Manarola si riflettono nel mare.',
        translation: 'À noite, Aldo abre uma garrafa de Sciacchetrà, o vinho doce que se produz com uvas deixadas para secar. “A quem tem nadadeiras e também paciência”, brinda. Abaixo deles, as luzes de Manarola se refletem no mar.',
        ending: { tone: 'bom', title: 'Pedra sobre pedra', message: 'O Linu ajudou na vindima e reconstruiu um muro de pedra seca com as próprias nadadeiras.' },
      },
      final_attesa: {
        emoji: '⏳',
        text: 'Due settimane dopo arrivano i tecnici e il muretto viene ricostruito in un giorno. Linu li guarda da lontano: il lavoro è fatto bene, ma lui avrebbe voluto mettere almeno una pietra con le sue pinne.',
        translation: 'Duas semanas depois chegam os técnicos e o murinho é reconstruído num dia. O Linu os observa de longe: o trabalho foi bem feito, mas ele teria gostado de colocar pelo menos uma pedra com as próprias nadadeiras.',
        ending: { tone: 'neutro', title: 'Esperando os técnicos', message: 'O Linu fez tudo pelas vias formais, mas perdeu a chance de pôr a nadadeira na massa.' },
      },
    },
  },

  // ───────────────────────── it-h29 · B2.2 · Lecce ─────────────────────────
  {
    id: 'it-h29',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Il ritmo della pizzica',
    emoji: '🥁',
    summary: 'Em Lecce, o Linu entra na oficina de um fabricante de pandeiros e, à noite, pode tocar ou dançar a pizzica numa praça.',
    cultural_context:
      'A pizzica é uma dança do Salento ligada ao tarantismo, a antiga crença de que quem era picado pela tarântula se curava dançando ao som do pandeiro. As igrejas barrocas de Lecce são esculpidas na pedra leccese, um calcário macio e dourado.',
    start: 'start',
    glossary: [
      ['il tamburello', 'o pandeiro'],
      ['la pizzica', 'dança popular do Salento, de ritmo muito rápido'],
      ['la taranta', 'a tarântula (no Salento)'],
      ['i sonagli', 'as platinelas do pandeiro'],
      ['la pietra leccese', 'calcário macio e dourado usado nas igrejas de Lecce'],
      ['si prega di…', 'pede-se que… (aviso formal)'],
      ['si accomodi', 'fique à vontade, sente-se (formal)'],
      ['la bottega', 'a oficina de artesão, a lojinha'],
    ],
    nodes: {
      start: {
        emoji: '⛪',
        text: 'Linu passeggia per Lecce e ammira le facciate barocche, scolpite nella pietra leccese, morbida e dorata. In un vicolo sente un ritmo velocissimo. Sulla porta di una bottega c’è un cartello: “Qui si costruiscono tamburelli. Si prega di bussare.”',
        translation: 'O Linu passeia por Lecce e admira as fachadas barrocas, esculpidas na pedra leccese, macia e dourada. Numa viela, ouve um ritmo rapidíssimo. Na porta de uma oficina há uma placa: “Aqui se fabricam pandeiros. Pede-se que bata à porta.”',
        choices: [
          { text: 'Linu bussa alla porta.', translation: 'O Linu bate à porta.', next: 'bottega' },
          {
            text: 'Linu apre la porta ed entra senza bussare.',
            translation: 'O Linu abre a porta e entra sem bater.',
            wrong: 'O aviso dizia “si prega di bussare”: pede-se (educadamente) que se bata à porta antes de entrar.',
          },
        ],
      },
      bottega: {
        emoji: '🚪',
        text: 'Un signore anziano apre. “Buongiorno, desidera?” Linu risponde: “Buongiorno. Mi scusi il disturbo, sarebbe possibile vedere come vengono costruiti i tamburelli?” L’artigiano, il maestro Cosimo, sorride: “Prego, si accomodi.”',
        translation: 'Um senhor idoso abre. “Bom dia, o que deseja?” O Linu responde: “Bom dia. Desculpe o incômodo, seria possível ver como os pandeiros são fabricados?” O artesão, o mestre Cosimo, sorri: “Por favor, fique à vontade.”',
        choices: [
          { text: 'Linu si siede e osserva.', translation: 'O Linu se senta e observa.', next: 'costruzione' },
        ],
      },
      costruzione: {
        emoji: '🥁',
        text: '“La pelle viene prima bagnata e poi tesa sul cerchio di legno”, spiega il maestro. “I sonagli vanno messi con cura, altrimenti il suono è sporco. Un tempo, qui nel Salento, la pizzica veniva suonata per giorni per guarire chi era stato morso dalla taranta.” Linu tocca un tamburello: il suono è forte e secco.',
        translation: '“O couro primeiro é molhado e depois esticado no aro de madeira”, explica o mestre. “As platinelas devem ser colocadas com cuidado, senão o som fica sujo. Antigamente, aqui no Salento, a pizzica era tocada durante dias para curar quem tinha sido picado pela tarântula.” O Linu toca num pandeiro: o som é forte e seco.',
        choices: [
          { text: '“Si potrebbe imparare a suonarlo in un giorno?”', translation: '“Daria para aprender a tocá-lo em um dia?”', next: 'lezione' },
          { text: '“E oggi la pizzica si balla ancora?”', translation: '“E hoje a pizzica ainda é dançada?”', next: 'ballo' },
        ],
      },
      lezione: {
        emoji: '👐',
        text: 'Il maestro ride: “In un giorno si impara, al massimo, a non disturbare il vicino!” Gli mette il tamburello in mano e gli mostra il colpo. “Il ritmo va tenuto sempre uguale, anche quando si è stanchi. Stasera c’è una serata di pizzica: se vuole, venga a suonare con noi.”',
        translation: 'O mestre ri: “Em um dia se aprende, no máximo, a não atrapalhar o vizinho!” Põe o pandeiro na mão dele e lhe mostra a batida. “O ritmo deve ser mantido sempre igual, mesmo quando se está cansado. Hoje à noite tem uma noite de pizzica: se quiser, venha tocar conosco.”',
        choices: [
          { text: 'Linu si esercita per tutto il pomeriggio.', translation: 'O Linu treina a tarde inteira.', next: 'stasera' },
          {
            text: 'Linu accelera e rallenta come gli pare.',
            translation: 'O Linu acelera e desacelera como bem entende.',
            wrong: 'O mestre disse que “il ritmo va tenuto sempre uguale”: o ritmo deve ser mantido sempre igual, mesmo com cansaço.',
          },
        ],
      },
      ballo: {
        emoji: '💃',
        text: '“Certo! Stasera, in una piazzetta vicino a Porta Rudiae, si terrà una serata di pizzica”, dice il maestro. “È organizzata da un’associazione di giovani. Se Lei volesse suonare, però, dovrebbe prima esercitarsi un po’.”',
        translation: '“Claro! Hoje à noite, numa pracinha perto da Porta Rudiae, vai acontecer uma noite de pizzica”, diz o mestre. “É organizada por uma associação de jovens. Mas, se o senhor quisesse tocar, precisaria treinar um pouco antes.”',
        choices: [
          { text: '“Allora mi insegni, per favore.”', translation: '“Então me ensine, por favor.”', next: 'lezione' },
          { text: '“Io preferisco ballare!”', translation: '“Eu prefiro dançar!”', next: 'stasera_ballo' },
        ],
      },
      stasera: {
        emoji: '🌙',
        text: 'La sera, nella piazzetta, i musicisti formano un cerchio. Il maestro Cosimo presenta Linu: “Questo è il mio allievo di oggi.” Due ballerini entrano nel cerchio e il ritmo diventa velocissimo. Dopo venti minuti le pinne di Linu cominciano a fargli male.',
        translation: 'À noite, na pracinha, os músicos formam uma roda. O mestre Cosimo apresenta o Linu: “Este é o meu aluno de hoje.” Dois dançarinos entram na roda e o ritmo fica rapidíssimo. Depois de vinte minutos, as nadadeiras do Linu começam a doer.',
        choices: [
          { text: 'Linu tiene il ritmo, anche se è stanco.', translation: 'O Linu mantém o ritmo, mesmo cansado.', next: 'final_bom' },
          { text: 'Linu si ferma: le pinne gli fanno troppo male.', translation: 'O Linu para: as nadadeiras doem demais.', next: 'final_stanco' },
        ],
      },
      stasera_ballo: {
        emoji: '🌀',
        text: 'La sera Linu entra nel cerchio e prova a ballare. Tutti battono le mani, ma lui gira troppo in fretta e cade seduto. Una ragazza lo aiuta ad alzarsi: “Nella pizzica non si cade: si continua!”',
        translation: 'À noite, o Linu entra na roda e tenta dançar. Todos batem palmas, mas ele gira rápido demais e cai sentado. Uma moça o ajuda a se levantar: “Na pizzica não se cai: se continua!”',
        choices: [
          { text: 'Linu si rialza e continua a ballare.', translation: 'O Linu se levanta e continua dançando.', next: 'final_ballo' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Il ritmo non si spezza fino a mezzanotte. Alla fine il maestro Cosimo gli regala un piccolo tamburello con un pinguino dipinto sulla pelle. “È stato costruito per Lei”, dice. “Ma va suonato, non appeso al muro!”',
        translation: 'O ritmo não se quebra até a meia-noite. No fim, o mestre Cosimo lhe dá de presente um pequeno pandeiro com um pinguim pintado no couro. “Foi feito para o senhor”, diz. “Mas é para ser tocado, não pendurado na parede!”',
        ending: { tone: 'bom', title: 'Ritmo de pizzica', message: 'O Linu segurou o ritmo até a meia-noite e ganhou um pandeiro só dele.' },
      },
      final_stanco: {
        emoji: '🪑',
        text: 'Linu si siede sul bordo della piazzetta e guarda gli altri suonare fino a notte fonda. Il maestro gli dà una pacca sulla spalla: “Il primo giorno si suona poco e si ascolta molto.” Linu promette che la prossima volta resisterà di più.',
        translation: 'O Linu se senta na beira da pracinha e fica olhando os outros tocarem até tarde da noite. O mestre lhe dá um tapinha no ombro: “No primeiro dia se toca pouco e se escuta muito.” O Linu promete que da próxima vez vai aguentar mais.',
        ending: { tone: 'neutro', title: 'Primeiro dia', message: 'O Linu tocou um pouco, mas as nadadeiras não aguentaram a pizzica inteira.' },
      },
      final_ballo: {
        emoji: '🥳',
        text: 'Linu balla fino a notte fonda, cadendo ogni tanto e rialzandosi sempre. Alla fine la ragazza gli insegna un passo nuovo e il pubblico applaude il pinguino più instancabile del Salento.',
        translation: 'O Linu dança até tarde da noite, caindo de vez em quando e sempre se levantando. No fim, a moça lhe ensina um passo novo e o público aplaude o pinguim mais incansável do Salento.',
        ending: { tone: 'bom', title: 'O pinguim que não para', message: 'O Linu caiu, levantou e dançou a pizzica até tarde.' },
      },
    },
  },

  // ───────────────────────── it-h30 · B2.2 · Como ─────────────────────────
  {
    id: 'it-h30',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Un lavoro di seta a Como',
    emoji: '🧣',
    summary: 'O Linu se candidata por e-mail a um trabalho temporário numa estamparia de seda de Como e acaba desenhando um lenço.',
    cultural_context:
      'Como é famosa há séculos pela produção de seda, e a cidade tem até um Museu da Seda. Também foi ali que nasceu, em 1745, Alessandro Volta, o inventor da pilha elétrica, homenageado no Tempio Voltiano, à beira do lago.',
    start: 'start',
    glossary: [
      ['la seta', 'a seda'],
      ['il baco da seta', 'o bicho-da-seda'],
      ['la stamperia', 'a estamparia'],
      ['la candidatura', 'a candidatura (a uma vaga)'],
      ['il colloquio', 'a entrevista (de emprego)'],
      ['Cordiali saluti', 'Cordialmente (fecho de e-mail formal)'],
      ['vanno inviate', 'devem ser enviadas (passiva com “andare”)'],
      ['la funicolare', 'o funicular'],
    ],
    nodes: {
      start: {
        emoji: '📰',
        text: 'Linu legge un annuncio: “Stamperia di Como cerca aiutante per il mese di maggio. Si richiedono precisione e pazienza. Le candidature vanno inviate entro venerdì.” È giovedì sera. Linu accende il computer.',
        translation: 'O Linu lê um anúncio: “Estamparia de Como procura ajudante para o mês de maio. Exigem-se precisão e paciência. As candidaturas devem ser enviadas até sexta-feira.” É quinta à noite. O Linu liga o computador.',
        choices: [
          { text: 'Linu scrive subito l’e-mail.', translation: 'O Linu escreve o e-mail na hora.', next: 'email' },
          {
            text: '“Ho tempo: la scriverò la settimana prossima.”',
            translation: '“Tenho tempo: vou escrever na semana que vem.”',
            wrong: 'O anúncio dizia que as candidaturas “vanno inviate entro venerdì”: devem ser enviadas até sexta. E já é quinta à noite!',
          },
        ],
      },
      email: {
        emoji: '📧',
        text: 'Linu scrive: “Gentile Signora, Le invio la mia candidatura per il posto di aiutante. Sono preciso e paziente, e le mie pinne non tremano mai. Resto a disposizione per un colloquio. Cordiali saluti.” La mattina dopo risponde la titolare, la signora Bianchi: “Gentile Linu, il colloquio si terrà lunedì alle nove.”',
        translation: 'O Linu escreve: “Prezada Senhora, envio-lhe a minha candidatura para a vaga de ajudante. Sou preciso e paciente, e as minhas nadadeiras nunca tremem. Fico à disposição para uma entrevista. Cordialmente.” Na manhã seguinte, a dona, a senhora Bianchi, responde: “Prezado Linu, a entrevista será na segunda-feira às nove.”',
        choices: [
          { text: 'Lunedì Linu si presenta puntuale, con la cravatta.', translation: 'Na segunda, o Linu se apresenta pontualmente, de gravata.', next: 'colloquio' },
        ],
      },
      colloquio: {
        emoji: '🤝',
        text: 'La signora Bianchi gli dà del Lei: “Si accomodi. Mi dica, che cosa sa della seta?” Linu risponde che a Como la seta viene lavorata da secoli e che un tempo i bachi da seta venivano allevati anche nelle campagne vicine. La signora annuisce: “Bene. Da noi alcune sciarpe vengono ancora stampate a mano.”',
        translation: 'A senhora Bianchi o trata por “Lei”: “Sente-se. Diga-me, o que o senhor sabe sobre a seda?” O Linu responde que em Como a seda é trabalhada há séculos e que antigamente os bichos-da-seda eram criados também nos campos da região. A senhora concorda: “Muito bem. Aqui alguns lenços ainda são estampados à mão.”',
        choices: [
          { text: '“Mi piacerebbe molto imparare. Quando si comincia?”', translation: '“Eu gostaria muito de aprender. Quando se começa?”', next: 'stamperia' },
        ],
      },
      stamperia: {
        emoji: '🎨',
        text: 'Nella stamperia lunghi tavoli sono coperti di seta bianca. Un operaio, Matteo, gli spiega: “Ogni colore viene stampato separatamente. Il rosso va messo per primo, poi il blu. Se si sbaglia l’ordine, la sciarpa va buttata.”',
        translation: 'Na estamparia, mesas compridas estão cobertas de seda branca. Um operário, Matteo, lhe explica: “Cada cor é estampada separadamente. O vermelho tem que ser posto primeiro, depois o azul. Se a ordem for trocada, o lenço vai para o lixo.”',
        choices: [
          { text: 'Linu stampa il rosso, poi il blu.', translation: 'O Linu estampa o vermelho, depois o azul.', next: 'sciarpa' },
          {
            text: 'Linu comincia dal blu, che gli piace di più.',
            translation: 'O Linu começa pelo azul, de que ele gosta mais.',
            wrong: 'Matteo disse que o vermelho “va messo per primo”: tem que vir primeiro, depois o azul. Trocar a ordem estraga o lenço.',
          },
        ],
      },
      sciarpa: {
        emoji: '🧣',
        text: 'Dopo una settimana la signora Bianchi chiama Linu nel suo ufficio. “Il Suo lavoro è stato molto apprezzato”, dice. “Le proporrei di disegnare Lei la prossima sciarpa. Che cosa ci metterebbe?”',
        translation: 'Depois de uma semana, a senhora Bianchi chama o Linu ao escritório. “O seu trabalho foi muito apreciado”, diz ela. “Eu lhe proporia desenhar o próximo lenço. O que o senhor colocaria nele?”',
        choices: [
          { text: '“Dei pinguini sul lago di Como!”', translation: '“Pinguins no lago de Como!”', next: 'disegno' },
          { text: '“La ringrazio, ma preferirei continuare a stampare.”', translation: '“Agradeço, mas preferiria continuar estampando.”', next: 'final_stampa' },
        ],
      },
      disegno: {
        emoji: '✏️',
        text: 'Linu disegna pinguini che pattinano sul lago e, sullo sfondo, la funicolare che sale a Brunate. Il disegno viene approvato e la sciarpa viene stampata in cento esemplari. Matteo scherza: “Si vede che sei nato per questo lavoro.”',
        translation: 'O Linu desenha pinguins patinando no lago e, ao fundo, o funicular que sobe até Brunate. O desenho é aprovado e o lenço é estampado em cem exemplares. Matteo brinca: “Dá para ver que você nasceu para este trabalho.”',
        choices: [
          { text: 'Linu sale a Brunate per festeggiare.', translation: 'O Linu sobe até Brunate para comemorar.', next: 'final_bom' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Da Brunate, con la sua sciarpa al collo, Linu guarda il lago e la città. In basso si vede il Tempio Voltiano, dedicato ad Alessandro Volta, lo scienziato comasco che inventò la pila. Linu pensa che a Como si facciano cose meravigliose, con la seta e con la scienza.',
        translation: 'De Brunate, com o seu lenço no pescoço, o Linu olha o lago e a cidade. Lá embaixo se vê o Tempio Voltiano, dedicado a Alessandro Volta, o cientista de Como que inventou a pilha. O Linu pensa que em Como se fazem coisas maravilhosas, com a seda e com a ciência.',
        ending: { tone: 'bom', title: 'Um lenço com pinguins', message: 'O Linu conseguiu o emprego e viu o próprio desenho estampado em seda.' },
      },
      final_stampa: {
        emoji: '🖌️',
        text: 'Linu continua a stampare per tutto il mese, con precisione e pazienza. Il suo lavoro viene apprezzato da tutti, ma quando vede la nuova sciarpa, disegnata da un collega, si chiede come sarebbe stata la sua.',
        translation: 'O Linu continua estampando o mês inteiro, com precisão e paciência. O trabalho dele é apreciado por todos, mas, quando vê o novo lenço, desenhado por um colega, ele se pergunta como teria ficado o dele.',
        ending: { tone: 'neutro', title: 'Só estampando', message: 'O Linu fez um ótimo trabalho, mas recusou a chance de criar o próprio lenço.' },
      },
    },
  },
  {
    id: 'it-h31',
    level: 'B2.3',
    cefr: 'B2',
    title: 'L’oro nero della soffitta',
    emoji: '🫙',
    summary: 'Em Modena, o Linu ajuda a dona Ines na transferência anual do vinagre balsâmico entre os barris do sótão e precisa se virar quando ela torce o tornozelo.',
    cultural_context:
      'O Aceto Balsamico Tradizionale di Modena DOP é feito com mosto de uva cozido e envelhece no mínimo 12 anos numa “bateria” de barris de madeiras diferentes e de tamanho decrescente, guardada no sótão, onde o calor do verão e o frio do inverno ajudam na maturação. Em muitas famílias modenesas, costumava-se começar uma bateria quando nascia uma filha, como parte do enxoval.',
    start: 'start',
    glossary: [
      ['farcela', 'conseguir, dar conta'],
      ['cavarsela', 'se virar, sair-se bem'],
      ['prendersela', 'ficar chateado, levar a mal'],
      ['andarsene', 'ir embora'],
      ['il travaso', 'a transferência de um barril para outro'],
      ['la batteria', 'a série de barris do balsâmico'],
      ['il mosto cotto', 'o mosto de uva cozido'],
      ['mettere un piede in fallo', 'pisar em falso'],
    ],
    nodes: {
      start: {
        emoji: '🏠',
        text: 'Salita l’ultima rampa di scale, Linu si ritrova in una soffitta che profuma di legno e di mosto. La signora Ines, ottantadue anni e due occhi vispissimi, gli indica una fila di botticelle allineate dalla più grande alla più piccola. “Questa è la batteria che mio padre ha cominciato quando sono nata io: oggi si fa il travaso, e da sola non ce la faccio più”. Linu, che non ha mai messo piede in un’acetaia, si domanda se riuscirà a cavarsela senza combinare disastri.',
        translation:
          'Subido o último lance de escada, o Linu se vê num sótão com cheiro de madeira e de mosto. A dona Ines, oitenta e dois anos e dois olhos muito espertos, aponta para uma fileira de barrilzinhos alinhados do maior para o menor. “Esta é a bateria que o meu pai começou quando eu nasci: hoje é dia da transferência, e sozinha eu não dou mais conta”. O Linu, que nunca pôs os pés numa vinagreria, se pergunta se vai conseguir se virar sem fazer estrago.',
        choices: [
          { text: '“Ci provo volentieri: mi spieghi come si fa.”', translation: '“Eu tento com prazer: me explique como se faz.”', next: 'spiegazione' },
          {
            text: '“Capisco, allora torno un’altra volta, quando starà meglio.”',
            translation: '“Entendo, então eu volto outro dia, quando a senhora estiver melhor.”',
            wrong: 'A dona Ines disse “da sola non ce la faccio più” (sozinha não dou mais conta): com “farcela”, ela está pedindo ajuda para hoje, não adiando o trabalho.',
          },
        ],
      },
      spiegazione: {
        emoji: '🥄',
        text: 'Ines spiega il procedimento con pazienza: si preleva un po’ di aceto dalla botticella più piccola, poi la si rabbocca con quello della botte accanto, e così via, di botte in botte, fino alla più grande. “Mi raccomando, non prendertela se all’inizio ne versi un po’ fuori: capita a tutti”, gli dice ridendo. Stringendo il mestolo con tutte e due le ali, Linu comincia dalla botticella di ginepro. Tutto fila liscio finché Ines, girandosi di scatto, mette un piede in fallo e finisce seduta sul pavimento con una smorfia.',
        translation:
          'A Ines explica o procedimento com paciência: tira-se um pouco de vinagre do barrilzinho menor, depois ele é completado com o do barril ao lado, e assim por diante, de barril em barril, até o maior. “Olha, não fique chateado se no começo derramar um pouco: acontece com todo mundo”, diz ela, rindo. Segurando a concha com as duas asas, o Linu começa pelo barrilzinho de zimbro. Tudo corre bem até que a Ines, virando-se de repente, pisa em falso e acaba sentada no chão, com uma careta.',
        choices: [
          { text: 'Aiutarla subito a sedersi sulla sedia di vimini.', translation: 'Ajudá-la logo a se sentar na cadeira de vime.', next: 'caviglia' },
          { text: 'Correre di sotto a chiamare la vicina.', translation: 'Correr lá para baixo e chamar a vizinha.', next: 'vicina' },
        ],
      },
      caviglia: {
        emoji: '🩹',
        text: '“Non è niente, è solo una storta”, borbotta Ines, massaggiandosi la caviglia, “me la sono cavata in situazioni ben peggiori”. Sistemata la signora sulla sedia, Linu le porta un cuscino e un bicchiere d’acqua. Lei, però, non ha nessuna intenzione di andarsene a letto: “Il travaso lo finisci tu, io ti guido da qui”. E, puntando il dito come un direttore d’orchestra, gli fa segno di riprendere il mestolo.',
        translation:
          '“Não é nada, foi só uma torção”, resmunga a Ines, massageando o tornozelo, “já me saí de situações bem piores”. Com a senhora acomodada na cadeira, o Linu traz uma almofada e um copo d’água. Ela, porém, não tem a menor intenção de ir para a cama: “A transferência você termina, eu te guio daqui”. E, apontando o dedo como um maestro, faz sinal para ele pegar de novo a concha.',
        choices: [{ text: 'Riprendere il mestolo e ascoltare le istruzioni.', translation: 'Pegar de novo a concha e ouvir as instruções.', next: 'mosto' }],
      },
      vicina: {
        emoji: '🚪',
        text: 'Linu scende le scale a precipizio e bussa alla porta della signora Loredana, la vicina del terzo piano. Lei sale brontolando: “Ines, quante volte te l’ho detto? Queste cose non devi farle da sola!”. Fasciata la caviglia dell’amica con un foulard, Loredana si rivolge a Linu con aria pratica. “Allora, o il travaso lo finiamo adesso noi due, o ce ne andiamo tutti giù a bere un caffè e se ne riparla domani”.',
        translation:
          'O Linu desce a escada correndo e bate à porta da dona Loredana, a vizinha do terceiro andar. Ela sobe resmungando: “Ines, quantas vezes eu te disse? Essas coisas você não deve fazer sozinha!”. Depois de enfaixar o tornozelo da amiga com um lenço, a Loredana se vira para o Linu com ar prático. “Então: ou a gente termina a transferência agora, nós dois, ou descemos todos para tomar um café e falamos disso amanhã”.',
        choices: [
          { text: '“Finiamolo adesso, così la signora Ines sta tranquilla.”', translation: '“Vamos terminar agora, assim a dona Ines fica tranquila.”', next: 'mosto' },
          { text: '“Un caffè mi sembra un’ottima idea.”', translation: '“Um café me parece uma ótima ideia.”', next: 'final_rimandato' },
        ],
      },
      mosto: {
        emoji: '🍇',
        text: 'Manca l’ultimo passaggio, quello più delicato. “Il mosto cotto nuovo, quello nella pentola, va soltanto nella botte più grande, quella di rovere”, scandisce Ines, “perché le piccole custodiscono l’aceto più vecchio, e guai a rovinarle”. Linu solleva la pentola, che pesa più di quanto immaginasse, e si avvicina alle botti. Gli tremano le ali, ma ormai è deciso a farcela.',
        translation:
          'Falta o último passo, o mais delicado. “O mosto cozido novo, o que está na panela, vai só no barril maior, o de carvalho”, diz a Ines, sílaba por sílaba, “porque os pequenos guardam o vinagre mais velho, e ai de quem estragá-los”. O Linu levanta a panela, que pesa mais do que ele imaginava, e se aproxima dos barris. As asas tremem, mas agora ele está decidido a conseguir.',
        choices: [
          { text: 'Versare il mosto nella botte di rovere, la più grande.', translation: 'Despejar o mosto no barril de carvalho, o maior.', next: 'assaggio' },
          {
            text: 'Versare il mosto nella botticella di ginepro, la più piccola.',
            translation: 'Despejar o mosto no barrilzinho de zimbro, o menor.',
            wrong: 'A Ines foi clara: o mosto cozido novo vai “soltanto nella botte più grande”, a de carvalho. Os barris pequenos guardam o vinagre mais velho, e mosto novo neles estragaria anos de trabalho.',
          },
        ],
      },
      assaggio: {
        emoji: '✨',
        text: 'Finito il travaso, Ines apre un cassetto e tira fuori un cucchiaino di porcellana. Ci fa cadere tre gocce dalla botticella più piccola, scure e dense come uno sciroppo. Linu le assaggia e resta a bocca aperta: è dolce e acido allo stesso tempo, e sa di legno, di ciliegia, di cose lontane. “Questo l’ha cominciato mio padre”, dice lei, commossa, “e un giorno qualcuno lo porterà avanti dopo di me”.',
        translation:
          'Terminada a transferência, a Ines abre uma gaveta e tira uma colherzinha de porcelana. Pinga nela três gotas do barrilzinho menor, escuras e densas como um xarope. O Linu prova e fica de boca aberta: é doce e ácido ao mesmo tempo, e tem gosto de madeira, de cereja, de coisas distantes. “Isto quem começou foi o meu pai”, diz ela, emocionada, “e um dia alguém vai levar adiante depois de mim”.',
        choices: [
          { text: '“Se me lo permette, tornerò ogni anno a darle una mano col travaso.”', translation: '“Se a senhora permitir, vou voltar todo ano para dar uma mão na transferência.”', next: 'final_bom' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Da quel giorno, ogni primavera Linu prende il treno per Modena e sale le scale della soffitta di Ines. Col tempo impara a riconoscere le botti a occhi chiusi, dal profumo del legno. Un anno, arrivando, trova sulla sua botticella preferita un’etichetta scritta a mano: “Linu”. Ines, che se la ride sotto i baffi, gli spiega che adesso anche lui fa parte della batteria.',
        translation:
          'Desde aquele dia, toda primavera o Linu pega o trem para Modena e sobe a escada do sótão da Ines. Com o tempo aprende a reconhecer os barris de olhos fechados, pelo cheiro da madeira. Um ano, ao chegar, encontra no seu barrilzinho preferido uma etiqueta escrita à mão: “Linu”. A Ines, rindo por dentro, explica que agora ele também faz parte da bateria.',
        ending: { tone: 'bom', title: 'Uma gota de família', message: 'Você entendeu as instruções, deu conta do recado e ganhou um lugar na bateria mais preciosa de Modena.' },
      },
      final_rimandato: {
        emoji: '☕',
        text: 'Scesi al piano di sotto, i tre bevono il caffè nella cucina di Loredana, chiacchierando del più e del meno. Il giorno dopo, però, Linu deve partire presto per Bologna, e il travaso resta a metà. Qualche settimana più tardi Ines gli scrive che ce l’hanno fatta lei e Loredana, con calma e con molte pause. “La prossima volta non te la cavi così facilmente”, aggiunge in fondo alla lettera.',
        translation:
          'Já no andar de baixo, os três tomam café na cozinha da Loredana, conversando sobre isso e aquilo. No dia seguinte, porém, o Linu precisa partir cedo para Bolonha, e a transferência fica pela metade. Algumas semanas depois, a Ines escreve dizendo que ela e a Loredana deram conta, com calma e com muitas pausas. “Da próxima vez você não escapa tão fácil”, acrescenta no fim da carta.',
        ending: { tone: 'neutro', title: 'Fica para a próxima', message: 'O café foi ótimo, mas o balsâmico não espera: a transferência ficou para as duas amigas.' },
      },
    },
  },
  {
    id: 'it-h32',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Una notte nel trullo',
    emoji: '🛖',
    summary: 'Em Alberobello, o Linu passa a noite num trullo durante uma tempestade e precisa decidir como lidar com uma goteira no telhado de pedra.',
    cultural_context:
      'Os trulli de Alberobello, na Puglia, são casas de pedra seca, erguidas sem argamassa, com telhados cônicos; são Patrimônio Mundial da UNESCO desde 1996. Muitos telhados têm símbolos pintados com cal branca, e segundo a tradição eram construídos a seco para poderem ser desmontados depressa, driblando os impostos sobre novas construções.',
    start: 'start',
    glossary: [
      ['piovere a catinelle', 'chover a cântaros'],
      ['in quattro e quattr’otto', 'num piscar de olhos'],
      ['a secco', 'a seco, sem argamassa'],
      ['arrangiarsi', 'se virar sozinho'],
      ['prendersela', 'ficar chateado, levar a mal'],
      ['bagnato fradicio', 'encharcado'],
      ['la goccia', 'a gota'],
      ['la pentola', 'a panela'],
    ],
    nodes: {
      start: {
        emoji: '🏘️',
        text: 'Arrivando ad Alberobello nel tardo pomeriggio, Linu resta incantato davanti a centinaia di tetti a cono, grigi come funghi di pietra. Nicola, il proprietario del trullo che ha affittato, gli consegna una chiave enorme e gli mostra il simbolo bianco dipinto sul tetto: “È un portafortuna di mio nonno”. Poi guarda il cielo e aggiunge: “Stanotte pioverà a catinelle: se qualcosa va storto, non prendertela e chiamami a qualsiasi ora”. Detto questo, se ne va di corsa, perché ha la cena in forno.',
        translation:
          'Chegando a Alberobello no fim da tarde, o Linu fica encantado diante de centenas de telhados em cone, cinzentos como cogumelos de pedra. O Nicola, dono do trullo que ele alugou, entrega uma chave enorme e mostra o símbolo branco pintado no telhado: “É um amuleto do meu avô”. Depois olha para o céu e acrescenta: “Hoje à noite vai chover a cântaros: se alguma coisa der errado, não esquente a cabeça e me ligue a qualquer hora”. Dito isso, vai embora correndo, porque está com o jantar no forno.',
        choices: [
          { text: 'Fare prima un giro per il Rione Monti.', translation: 'Dar antes uma volta pelo bairro Monti.', next: 'rione' },
          { text: 'Entrare nel trullo e sistemarsi per la notte.', translation: 'Entrar no trullo e se acomodar para a noite.', next: 'dentro' },
        ],
      },
      rione: {
        emoji: '🚶',
        text: 'Salendo per le stradine del Rione Monti, Linu si ferma davanti alla bottega di Teresa, che vende tovaglie ricamate. Lei gli racconta che i trulli sono costruiti a secco, pietra su pietra, senza un filo di malta. “Si dice che i contadini li facessero così per poterli smontare in quattro e quattr’otto quando arrivavano gli esattori delle tasse”, spiega, strizzando l’occhio. In quel momento cadono le prime gocce, grosse come ciliegie, e Teresa lo spinge verso la discesa: “Sbrigati, o arriverai a casa bagnato fradicio!”.',
        translation:
          'Subindo pelas vielas do bairro Monti, o Linu para diante da lojinha da Teresa, que vende toalhas bordadas. Ela conta que os trulli são construídos a seco, pedra sobre pedra, sem um pingo de argamassa. “Dizem que os camponeses faziam assim para poder desmontá-los num piscar de olhos quando chegavam os cobradores de impostos”, explica, piscando o olho. Nesse momento caem as primeiras gotas, grossas como cerejas, e a Teresa o empurra ladeira abaixo: “Corre, senão você chega em casa encharcado!”.',
        choices: [
          { text: 'Ringraziare Teresa e correre verso il trullo.', translation: 'Agradecer à Teresa e correr para o trullo.', next: 'dentro' },
          {
            text: '“E quanto cemento ci voleva per costruirne uno?”',
            translation: '“E quanto cimento era preciso para construir um?”',
            wrong: 'A Teresa acabou de explicar que os trulli são feitos “a secco”, “senza un filo di malta”: sem nenhuma argamassa, só pedra sobre pedra. Segundo a tradição, era justamente para poder desmontá-los depressa.',
          },
        ],
      },
      dentro: {
        emoji: '🌧️',
        text: 'Dentro il trullo fa fresco e le pareti bianche sono spesse quasi un metro. Linu si infila sotto le coperte ascoltando la pioggia che tamburella sulle pietre del cono. Verso mezzanotte, però, una goccia gelida gli cade dritta sul becco, poi un’altra, poi un’altra ancora. Guardando in su, vede una macchia scura che si allarga proprio sopra il letto.',
        translation:
          'Dentro do trullo está fresco, e as paredes brancas têm quase um metro de espessura. O Linu se enfia debaixo das cobertas ouvindo a chuva que tamborila nas pedras do cone. Perto da meia-noite, porém, uma gota gelada cai bem no bico dele, depois outra, e mais outra. Olhando para cima, ele vê uma mancha escura que se espalha bem em cima da cama.',
        choices: [
          { text: 'Telefonare a Nicola, come aveva detto lui.', translation: 'Ligar para o Nicola, como ele tinha dito.', next: 'telefono' },
          { text: 'Arrangiarsi da solo: spostare il letto e mettere una pentola sotto la goccia.', translation: 'Se virar sozinho: mudar a cama de lugar e pôr uma panela embaixo da goteira.', next: 'pentola' },
        ],
      },
      telefono: {
        emoji: '📞',
        text: 'Nicola risponde al secondo squillo, con la voce impastata di sonno. “Non ti preoccupare, succede quando la pioggia arriva di traverso: una chiancarella si sarà spostata col vento”. Poi diventa serissimo: “Metti una pentola sotto la goccia e torna a dormire, ma non salire sul tetto per nessun motivo, che con l’acqua le pietre diventano sapone”. Linu promette, riattacca e resta un attimo a guardare la macchia sul soffitto.',
        translation:
          'O Nicola atende no segundo toque, com a voz pastosa de sono. “Não se preocupe, isso acontece quando a chuva vem de lado: alguma chiancarella deve ter saído do lugar com o vento”. Depois fica sério: “Põe uma panela embaixo da goteira e volta a dormir, mas não suba no telhado por nada neste mundo, que com a água as pedras viram sabão”. O Linu promete, desliga e fica um instante olhando a mancha no teto.',
        choices: [
          { text: 'Mettere la pentola sotto la goccia e tornare a letto.', translation: 'Pôr a panela embaixo da goteira e voltar para a cama.', next: 'pentola' },
          {
            text: 'Prendere la scala in giardino e salire a sistemare la pietra.',
            translation: 'Pegar a escada no quintal e subir para arrumar a pedra.',
            wrong: 'O Nicola disse “non salire sul tetto per nessun motivo”: com a chuva, as pedras “diventano sapone” (ficam escorregadias como sabão). Ele pediu só uma panela embaixo da goteira.',
          },
        ],
      },
      pentola: {
        emoji: '🍲',
        text: 'Spostato il letto in un angolo, Linu sistema la pentola più grande della cucina proprio sotto la goccia. Plic, plic, plic: il ritmo è così regolare che, a poco a poco, gli sembra quasi una ninna nanna. Pensa ai contadini che secoli prima dormivano in quelle stesse stanze, magari con la stessa pentola e la stessa pazienza. Quando si sveglia, la pioggia è finita e dalla porta entra un sole pulitissimo.',
        translation:
          'Com a cama num canto, o Linu coloca a maior panela da cozinha bem embaixo da goteira. Plic, plic, plic: o ritmo é tão regular que, pouco a pouco, parece até uma canção de ninar. Ele pensa nos camponeses que séculos antes dormiam naqueles mesmos cômodos, talvez com a mesma panela e a mesma paciência. Quando ele acorda, a chuva já passou e pela porta entra um sol limpíssimo.',
        choices: [{ text: 'Uscire a vedere il tetto alla luce del giorno.', translation: 'Sair para ver o telhado à luz do dia.', next: 'mattina' }],
      },
      mattina: {
        emoji: '🥖',
        text: 'Nicola arriva con una teglia di focaccia ancora calda e una scala sulle spalle. Salito sul cono con passo sicuro, trova subito la chiancarella fuori posto e la rimette a posto in quattro e quattr’otto. “Visto? Il trullo si ripara come si costruisce: senza malta e senza fretta”, dice scendendo. Poi guarda il simbolo bianco, sbiadito dalla pioggia, e chiede a Linu se gli va di aiutarlo a ridipingerlo.',
        translation:
          'O Nicola chega com uma assadeira de focaccia ainda quente e uma escada no ombro. Subindo no cone com passo firme, encontra logo a chiancarella fora do lugar e a recoloca num piscar de olhos. “Viu? O trullo se conserta como se constrói: sem argamassa e sem pressa”, diz, descendo. Depois olha para o símbolo branco, desbotado pela chuva, e pergunta ao Linu se ele topa ajudar a pintá-lo de novo.',
        choices: [
          { text: '“Con piacere! Io tengo la scala e tu dipingi.”', translation: '“Com prazer! Eu seguro a escada e você pinta.”', next: 'final_bom' },
          { text: '“Mi piacerebbe, ma ho il treno per Bari tra un’ora.”', translation: '“Eu adoraria, mas tenho trem para Bari daqui a uma hora.”', next: 'final_partenza' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Per tutta la mattina Linu tiene ferma la scala mentre Nicola ripassa il simbolo con un pennello intinto nella calce. Quando hanno finito, la vicina di fronte si affaccia e applaude, e i due si dividono la focaccia sul muretto. Nicola gli rivela che il simbolo del nonno significa “protezione per chi abita la casa”. “Stanotte ti ha protetto a metà”, ride, “ma almeno ti ha lasciato la pentola”.',
        translation:
          'A manhã inteira o Linu segura a escada enquanto o Nicola retoca o símbolo com um pincel molhado na cal. Quando terminam, a vizinha da frente aparece na janela e aplaude, e os dois dividem a focaccia sentados no murinho. O Nicola revela que o símbolo do avô significa “proteção para quem mora na casa”. “Esta noite ele te protegeu pela metade”, ri, “mas pelo menos te deixou a panela”.',
        ending: { tone: 'bom', title: 'Protegido pela metade', message: 'Você ouviu o conselho do Nicola, se virou com calma e ainda ajudou a renovar um símbolo de família.' },
      },
      final_partenza: {
        emoji: '🚆',
        text: 'Linu saluta Nicola, prende un pezzo di focaccia per il viaggio e corre alla stazione. Dal finestrino del treno vede i coni grigi che si allontanano tra gli ulivi. Pensa alla goccia, alla pentola, alla pietra rimessa a posto in un attimo. Gli resta solo un piccolo rimpianto: non ha scoperto che cosa significasse il simbolo del nonno.',
        translation:
          'O Linu se despede do Nicola, pega um pedaço de focaccia para a viagem e corre para a estação. Da janela do trem, vê os cones cinzentos se afastando entre as oliveiras. Pensa na gota, na panela, na pedra recolocada num instante. Fica só com um pequeno arrependimento: não descobriu o que significava o símbolo do avô.',
        ending: { tone: 'neutro', title: 'Um mistério pintado de branco', message: 'A noite no trullo acabou bem, mas o significado do símbolo ficou lá no telhado.' },
      },
    },
  },
  {
    id: 'it-h33',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Il sentiero dei limoni',
    emoji: '🍋',
    summary: 'Na Costa Amalfitana, o Linu colhe limões com o Gennaro e depois se aventura pelo Sentiero degli Dei, onde a neblina pode mudar os planos.',
    cultural_context:
      'A Costa Amalfitana, Patrimônio Mundial da UNESCO desde 1997, é famosa pelos limoais em terraços sobre o mar, cobertos por pérgulas de madeira; o limão típico é o “sfusato amalfitano”, alongado e de casca grossa. O Sentiero degli Dei (Caminho dos Deuses) liga Agerola a Positano pelo alto dos penhascos.',
    start: 'start',
    glossary: [
      ['guadagnarsela', 'merecer, fazer por onde'],
      ['cavarsela', 'se virar, sair-se bem'],
      ['non fare l’eroe', 'não bancar o herói'],
      ['tornarsene', 'voltar (de onde se veio)'],
      ['stanco morto', 'morto de cansaço'],
      ['in bocca al lupo', 'boa sorte (responde-se “crepi”)'],
      ['la nebbia', 'a neblina'],
      ['il pergolato', 'a pérgula, o caramanchão'],
    ],
    nodes: {
      start: {
        emoji: '🌅',
        text: 'All’alba, sopra Amalfi, i terrazzamenti di limoni scendono verso il mare come una scalinata verde. Gennaro, un limonaio dalle mani grandi come pale, mette in spalla a Linu una cesta vuota. “Oggi si raccoglie, e chi non lavora non mangia”, annuncia, ma sorridendo. Poi gli indica i pergolati di legno sotto cui pendono i limoni, lunghi e bitorzoluti, e gli mostra come staccarli senza rovinare i rami.',
        translation:
          'Ao amanhecer, acima de Amalfi, os terraços de limoeiros descem até o mar como uma escadaria verde. O Gennaro, um produtor de limões com mãos grandes como pás, põe no ombro do Linu um cesto vazio. “Hoje é dia de colheita, e quem não trabalha não come”, anuncia, mas sorrindo. Depois mostra as pérgulas de madeira debaixo das quais pendem os limões, compridos e cheios de calombos, e ensina a tirá-los sem estragar os galhos.',
        choices: [{ text: 'Mettersi al lavoro sotto il pergolato.', translation: 'Começar a trabalhar debaixo da pérgula.', next: 'raccolta' }],
      },
      raccolta: {
        emoji: '🧺',
        text: 'Per tutta la mattina Linu sale e scende le scalette tra i terrazzamenti, con la cesta sempre più pesante. A mezzogiorno è stanco morto, ma ha riempito più ceste di quante Gennaro si aspettasse. “Bravo, te la sei guadagnata”, gli dice il limonaio, dandogli una pacca sulla spalla. “Adesso si mangia, e poi, se ti va, ti fai due passi sul Sentiero degli Dei”.',
        translation:
          'A manhã inteira o Linu sobe e desce as escadinhas entre os terraços, com o cesto cada vez mais pesado. Ao meio-dia está morto de cansaço, mas encheu mais cestos do que o Gennaro esperava. “Muito bem, você fez por merecer”, diz o produtor, dando-lhe um tapinha no ombro. “Agora a gente come, e depois, se você quiser, dá uma caminhada pelo Sentiero degli Dei”.',
        choices: [{ text: 'Seguire Gennaro in cucina.', translation: 'Seguir o Gennaro até a cozinha.', next: 'pranzo' }],
      },
      pranzo: {
        emoji: '🍝',
        text: 'Assunta, la moglie di Gennaro, serve un piatto di scialatielli ai frutti di mare e, per finire, una fetta di torta al limone. Mentre Linu mangia, Gennaro gli spiega la strada: “Il sentiero parte da Bomerano e arriva sopra Positano; da lì si scende a piedi fino al mare”. Poi alza un dito: “Ma se si alza la nebbia, non fare l’eroe: te ne torni indietro, capito?”. Assunta aggiunge che l’ultimo autobus da Positano parte alle sette, e che chi lo perde se la deve cavare da solo.',
        translation:
          'A Assunta, mulher do Gennaro, serve um prato de scialatielli com frutos do mar e, para terminar, uma fatia de torta de limão. Enquanto o Linu come, o Gennaro explica o caminho: “A trilha sai de Bomerano e chega em cima de Positano; de lá se desce a pé até o mar”. Depois levanta um dedo: “Mas se a neblina subir, não banque o herói: volte, entendeu?”. A Assunta acrescenta que o último ônibus de Positano sai às sete, e que quem o perde tem que se virar sozinho.',
        choices: [
          { text: 'Partire subito per il sentiero.', translation: 'Partir logo para a trilha.', next: 'sentiero' },
          { text: 'Fare un pisolino sotto il pergolato.', translation: 'Tirar um cochilo debaixo da pérgula.', next: 'final_pisolino' },
        ],
      },
      sentiero: {
        emoji: '⛰️',
        text: 'Camminando a strapiombo sul mare, Linu vede Positano che brilla in fondo, piccola come un presepe. Per un’ora tutto è perfetto: le capre sulle rocce, il profumo di rosmarino, il blu che non finisce mai. Poi, all’improvviso, una nuvola bianca sale dal mare e si mangia il paesaggio, il sentiero, perfino le sue zampe. A pochi metri di distanza, un contadino con un asino sta scendendo nella stessa direzione.',
        translation:
          'Caminhando à beira do precipício sobre o mar, o Linu vê Positano brilhando lá embaixo, pequena como um presépio. Durante uma hora tudo é perfeito: as cabras nas rochas, o cheiro de alecrim, o azul que não acaba nunca. Então, de repente, uma nuvem branca sobe do mar e engole a paisagem, a trilha, até as patas dele. A poucos metros de distância, um camponês com um burro está descendo na mesma direção.',
        choices: [
          { text: 'Tornare indietro verso Bomerano, come ha detto Gennaro.', translation: 'Voltar para Bomerano, como o Gennaro disse.', next: 'final_ritorno' },
          { text: 'Chiedere aiuto al contadino con l’asino.', translation: 'Pedir ajuda ao camponês com o burro.', next: 'contadino' },
          {
            text: 'Proseguire da solo verso Positano: la nebbia passerà presto.',
            translation: 'Seguir sozinho para Positano: a neblina logo passa.',
            wrong: 'O Gennaro avisou: “se si alza la nebbia, non fare l’eroe: te ne torni indietro”. Seguir sozinho no meio da neblina, à beira do penhasco, é exatamente bancar o herói.',
          },
        ],
      },
      contadino: {
        emoji: '🫏',
        text: 'Il contadino si chiama zi’ Peppe e percorre quel sentiero da sessant’anni, con la nebbia e senza. “Non ti preoccupare, figlio mio: da qui a Nocelle è tutta discesa, e io la strada la faccio a occhi chiusi”, dice. “Da Nocelle, poi, ci sono solo gradini fino a Positano: te la cavi in meno di un’ora”. Gli fa cenno di stargli dietro, tenendosi alla coda dell’asino, che conosce i sassi meglio di chiunque.',
        translation:
          'O camponês se chama tio Peppe e percorre aquela trilha há sessenta anos, com neblina e sem. “Não se preocupe, meu filho: daqui até Nocelle é tudo descida, e eu faço o caminho de olhos fechados”, diz. “De Nocelle, depois, são só degraus até Positano: você dá conta em menos de uma hora”. Faz sinal para o Linu ir atrás dele, segurando-se no rabo do burro, que conhece as pedras melhor do que ninguém.',
        choices: [
          { text: 'Seguire zi’ Peppe in discesa verso Nocelle.', translation: 'Seguir o tio Peppe descendo até Nocelle.', next: 'scalini' },
          {
            text: '“Grazie, ma preferisco salire ancora un po’ per vedere se sopra c’è il sole.”',
            translation: '“Obrigado, mas prefiro subir mais um pouco para ver se lá em cima faz sol.”',
            wrong: 'O tio Peppe explicou que o caminho seguro é descer: “da qui a Nocelle è tutta discesa”, e depois só degraus até Positano. Subir sozinho na neblina afastaria o Linu do guia e do ônibus.',
          },
        ],
      },
      scalini: {
        emoji: '🪜',
        text: 'Scendendo gradino dopo gradino, Linu perde il conto dopo il quattrocentesimo. A metà strada la nebbia si apre come un sipario e Positano compare sotto di lui, arancione nella luce della sera. Zi’ Peppe si ferma davanti a una casa, lega l’asino e gli indica la fermata dell’autobus in fondo alla discesa. “In bocca al lupo, pinguino”, gli dice, “e salutami Gennaro”.',
        translation:
          'Descendo degrau após degrau, o Linu perde a conta depois do quadringentésimo. No meio do caminho a neblina se abre como uma cortina, e Positano aparece embaixo dele, alaranjada na luz do entardecer. O tio Peppe para diante de uma casa, amarra o burro e aponta para o ponto de ônibus no fim da descida. “Boa sorte, pinguim”, diz, “e manda lembranças ao Gennaro”.',
        choices: [{ text: '“Crepi! E grazie di tutto, zi’ Peppe.”', translation: '“Obrigado! (lit. que morra o lobo) E obrigado por tudo, tio Peppe.”', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu arriva alla fermata alle sette meno cinque, con le zampe che tremano e il cuore leggero. Sull’autobus, tra turisti addormentati e curve a picco sul mare, ripensa alla giornata: i limoni, la nebbia, l’asino di zi’ Peppe. Quella sera Gennaro lo accoglie con un bicchierino di limoncello e una risata fragorosa. “Allora ce l’hai fatta! Te l’avevo detto che la costiera non tradisce chi la rispetta”.',
        translation:
          'O Linu chega ao ponto às cinco para as sete, com as patas tremendo e o coração leve. No ônibus, entre turistas cochilando e curvas à beira do mar, ele relembra o dia: os limões, a neblina, o burro do tio Peppe. Naquela noite o Gennaro o recebe com um copinho de limoncello e uma gargalhada estrondosa. “Então você conseguiu! Eu te disse que a costa não trai quem a respeita”.',
        ending: { tone: 'bom', title: 'Dos limões ao mar', message: 'Você respeitou a neblina, aceitou ajuda de quem conhecia o caminho e chegou a Positano a tempo.' },
      },
      final_ritorno: {
        emoji: '🌫️',
        text: 'Linu si gira e rifà la strada al contrario, lentamente, tastando il sentiero con le zampe. Arriva a Bomerano che è quasi buio, infreddolito ma sano e salvo. Gennaro, avvisato dalla moglie, viene a prenderlo con la sua vecchia macchina. “Hai fatto bene a tornartene indietro”, gli dice, “Positano non scappa: la vedrai la prossima volta”.',
        translation:
          'O Linu dá meia-volta e refaz o caminho ao contrário, devagar, tateando a trilha com as patas. Chega a Bomerano quase no escuro, com frio mas são e salvo. O Gennaro, avisado pela mulher, vai buscá-lo no seu carro velho. “Você fez bem em voltar”, diz, “Positano não foge: você vai vê-la da próxima vez”.',
        ending: { tone: 'neutro', title: 'Positano pode esperar', message: 'Prudente e seguro, mas sem a vista de Positano ao pôr do sol.' },
      },
      final_pisolino: {
        emoji: '😴',
        text: 'Linu si sdraia sotto il pergolato per “cinque minuti” e si risveglia quando il sole è già dietro la montagna. Assunta gli porta un caffè, ridendo della sua faccia stropicciata. Del Sentiero degli Dei, per quella volta, vedrà soltanto le fotografie appese in cucina. Però ha dormito come un re, con il profumo dei limoni tutt’intorno.',
        translation:
          'O Linu se deita debaixo da pérgula por “cinco minutinhos” e acorda quando o sol já está atrás da montanha. A Assunta traz um café, rindo da cara amassada dele. Do Sentiero degli Dei, dessa vez, ele só vai ver as fotografias penduradas na cozinha. Mas dormiu como um rei, com o cheiro dos limões em volta.',
        ending: { tone: 'neutro', title: 'O cochilo dos deuses', message: 'Um descanso merecido, mas a trilha mais bonita da costa ficou para outra viagem.' },
      },
    },
  },
  {
    id: 'it-h34',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Il verdetto del loggione',
    emoji: '🎭',
    summary: 'No Teatro Regio de Parma, o Linu assiste a “La traviata” no loggione, a galeria mais exigente da Itália, e precisa opinar: aplaudir ou vaiar o jovem tenor?',
    cultural_context:
      'Giuseppe Verdi nasceu em 1813 em Le Roncole, perto de Busseto, na província de Parma. O Teatro Regio de Parma, inaugurado em 1829, é famoso pelo seu loggione, a galeria mais alta, cujo público tem fama de ser exigentíssimo e de vaiar sem piedade quem erra.',
    start: 'start',
    glossary: [
      ['il loggione', 'a galeria mais alta do teatro (e o seu público)'],
      ['steccare', 'desafinar, deixar escapar uma nota errada'],
      ['sebbene', 'embora (+ congiuntivo)'],
      ['purché', 'contanto que (+ congiuntivo)'],
      ['tuttavia', 'no entanto'],
      ['pertanto', 'portanto'],
      ['fischiare', 'vaiar (lit. assobiar)'],
      ['credo che sia', 'acho que é'],
    ],
    nodes: {
      start: {
        emoji: '🏛️',
        text: 'Dopo aver salito centinaia di scalini, Linu arriva senza fiato in cima al Teatro Regio, nel famoso loggione. Bruno, un signore con la sciarpa rossa che viene qui da quarant’anni, gli fa posto sulla panca. “Qui si applaude chi lo merita e si fischia chi se lo merita”, gli spiega a bassa voce, “e non credo che esista al mondo un pubblico più severo del nostro”. Stasera danno “La traviata”, con un tenore giovanissimo al debutto.',
        translation:
          'Depois de subir centenas de degraus, o Linu chega sem fôlego ao alto do Teatro Regio, no famoso loggione. O Bruno, um senhor de cachecol vermelho que frequenta o lugar há quarenta anos, abre espaço para ele no banco. “Aqui se aplaude quem merece e se vaia quem faz por merecer”, explica em voz baixa, “e não acho que exista no mundo um público mais severo que o nosso”. Hoje à noite apresentam “La traviata”, com um tenor novíssimo estreando.',
        choices: [
          { text: '“E come decidete chi merita i fischi?”', translation: '“E como vocês decidem quem merece as vaias?”', next: 'regole' },
          { text: 'Sedersi e aspettare l’inizio in silenzio.', translation: 'Sentar e esperar o início em silêncio.', next: 'primo_atto' },
        ],
      },
      regole: {
        emoji: '📏',
        text: 'Bruno ci pensa su, come un giudice prima della sentenza. “Non basta che uno sbagli una nota: purché canti con il cuore, lo perdoniamo”, dice. “Se invece canta senza anima, sebbene abbia una voce perfetta, non se la cava”. Poi aggiunge, abbassando ancora la voce, che Verdi qui è di casa, e pertanto a chi lo canta non si perdona niente.',
        translation:
          'O Bruno pensa um pouco, como um juiz antes da sentença. “Não basta alguém errar uma nota: contanto que cante com o coração, a gente perdoa”, diz. “Se, pelo contrário, canta sem alma, mesmo que tenha uma voz perfeita, não escapa”. Depois acrescenta, baixando ainda mais a voz, que Verdi aqui é da casa e, portanto, não se perdoa nada a quem o canta.',
        choices: [{ text: 'Ringraziare e guardare il sipario che si apre.', translation: 'Agradecer e olhar a cortina que se abre.', next: 'primo_atto' }],
      },
      primo_atto: {
        emoji: '🥂',
        text: 'Nel brindisi del primo atto, il giovane tenore stecca clamorosamente una nota, e dal loggione parte qualche fischio isolato. All’intervallo Carla, l’amica di Bruno, difende il ragazzo: “Sebbene abbia steccato, ha un timbro bellissimo; secondo me va incoraggiato, non umiliato”. Bruno scuote la testa: “Io invece credo che chi canta al Regio debba essere preparato, pertanto al prossimo errore fischierò anch’io”. Entrambi si voltano verso Linu, in attesa del suo parere.',
        translation:
          'No brinde do primeiro ato, o jovem tenor desafina escandalosamente uma nota, e do loggione saem algumas vaias isoladas. No intervalo, a Carla, amiga do Bruno, defende o rapaz: “Embora tenha desafinado, ele tem um timbre lindíssimo; na minha opinião, deve ser incentivado, não humilhado”. O Bruno balança a cabeça: “Eu, pelo contrário, acho que quem canta no Regio tem que estar preparado; portanto, no próximo erro, vou vaiar também”. Os dois se viram para o Linu, esperando a opinião dele.',
        choices: [
          {
            text: '“Sono d’accordo con Carla: benché abbia steccato, merita un’altra possibilità.”',
            translation: '“Concordo com a Carla: embora tenha desafinado, ele merece outra chance.”',
            next: 'secondo_atto',
          },
          {
            text: '“Credo che Bruno abbia ragione: al Regio non si può sbagliare.”',
            translation: '“Acho que o Bruno tem razão: no Regio não se pode errar.”',
            next: 'fischio',
          },
          {
            text: '“Carla, anche tu pensi che abbia cantato malissimo, vero?”',
            translation: '“Carla, você também acha que ele cantou muito mal, né?”',
            wrong: 'A Carla disse “sebbene abbia steccato, ha un timbro bellissimo”: “sebbene” é “embora”. Ela reconhece o erro, mas está defendendo o tenor, não criticando.',
          },
        ],
      },
      fischio: {
        emoji: '😤',
        text: 'Bruno annuisce soddisfatto, ma subito precisa il suo pensiero. “Tuttavia, fischiare durante l’aria è da maleducati: si aspetta la fine, sempre”, dice. Carla sbuffa e sostiene che, se tutti la pensassero come loro due, nessun giovane avrebbe il coraggio di debuttare. Linu comincia a capire che nel loggione la discussione fa parte dello spettacolo quanto la musica.',
        translation:
          'O Bruno concorda, satisfeito, mas logo esclarece o que pensa. “No entanto, vaiar durante a ária é falta de educação: espera-se o fim, sempre”, diz. A Carla bufa e argumenta que, se todo mundo pensasse como os dois, nenhum jovem teria coragem de estrear. O Linu começa a entender que, no loggione, a discussão faz parte do espetáculo tanto quanto a música.',
        choices: [{ text: 'Tornare al posto per il secondo atto.', translation: 'Voltar ao lugar para o segundo ato.', next: 'secondo_atto' }],
      },
      secondo_atto: {
        emoji: '🎶',
        text: 'Nel secondo atto il tenore attacca “De’ miei bollenti spiriti” con una dolcezza che nessuno si aspettava. Il teatro trattiene il respiro fino all’ultima nota, e poi cala un silenzio sospeso, pericoloso. Nel loggione tutti si guardano: nessuno vuole essere il primo a decidere. “Io applaudo”, sussurra Bruno a sorpresa, “purché cominci tu”.',
        translation:
          'No segundo ato o tenor começa “De’ miei bollenti spiriti” com uma doçura que ninguém esperava. O teatro prende a respiração até a última nota, e então cai um silêncio suspenso, perigoso. No loggione todos se entreolham: ninguém quer ser o primeiro a decidir. “Eu aplaudo”, sussurra o Bruno, para surpresa geral, “contanto que você comece”.',
        choices: [
          { text: 'Alzarsi, applaudire per primo e gridare “Bravo!”.', translation: 'Levantar, aplaudir primeiro e gritar “Bravo!”.', next: 'applauso' },
          { text: 'Restare zitto e aspettare che cominci qualcun altro.', translation: 'Ficar quieto e esperar que outra pessoa comece.', next: 'final_silenzio' },
        ],
      },
      applauso: {
        emoji: '👏',
        text: 'Il “Bravo!” di Linu rimbomba sotto la volta, e un attimo dopo il loggione intero esplode in un applauso. Il tenore alza gli occhi verso l’alto, incredulo, e si porta una mano al cuore. Carla ha le lacrime agli occhi, mentre Bruno applaude facendo finta di niente. “Non pensavo che mi sarei commosso per uno che aveva steccato il brindisi”, borbotta.',
        translation:
          'O “Bravo!” do Linu ecoa sob a abóbada, e um instante depois o loggione inteiro explode num aplauso. O tenor ergue os olhos para o alto, incrédulo, e leva a mão ao coração. A Carla está com lágrimas nos olhos, enquanto o Bruno aplaude como quem não quer nada. “Não pensei que eu fosse me emocionar com um sujeito que tinha desafinado no brinde”, resmunga.',
        choices: [
          { text: 'Scendere all’uscita degli artisti a salutare il tenore.', translation: 'Descer até a saída dos artistas para cumprimentar o tenor.', next: 'final_bom' },
          {
            text: '“Visto? Bruno ha sempre detto che il ragazzo era un disastro.”',
            translation: '“Viu? O Bruno sempre disse que o rapaz era um desastre.”',
            wrong: 'O Bruno acabou de dizer “non pensavo che mi sarei commosso”: não imaginava que fosse se emocionar. Ele mudou de opinião e se rendeu ao tenor; não está confirmando a crítica.',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'All’uscita degli artisti, il tenore stringe l’ala a Linu e gli confessa che quel primo “Bravo!” gli ha salvato la serata. Bruno, burbero come sempre, gli dice soltanto: “Il brindisi va ristudiato, ma il secondo atto era da Regio”. Carla ride e sostiene che, detto da Bruno, è il complimento più grande che si possa ricevere. Tornando in albergo, Linu pensa che in quel loggione ha imparato più italiano che in un mese di lezioni.',
        translation:
          'Na saída dos artistas, o tenor aperta a asa do Linu e confessa que aquele primeiro “Bravo!” salvou a noite dele. O Bruno, ranzinza como sempre, diz apenas: “O brinde precisa ser estudado de novo, mas o segundo ato estava à altura do Regio”. A Carla ri e diz que, vindo do Bruno, é o maior elogio que se pode receber. Voltando para o hotel, o Linu pensa que naquele loggione aprendeu mais italiano do que em um mês de aulas.',
        ending: { tone: 'bom', title: 'O primeiro “Bravo!”', message: 'Você pesou os argumentos dos dois lados, formou a sua opinião e teve coragem de defendê-la em voz alta.' },
      },
      final_silenzio: {
        emoji: '🤐',
        text: 'Linu esita, e in quell’attimo di silenzio dal fondo del loggione parte un fischio acuto. Subito dopo arriva l’applauso della platea, e i due suoni si mescolano in un rumore confuso. Il tenore, disorientato, s’inchina senza sapere se è stato promosso o bocciato. Bruno sospira: “Peccato: stasera il loggione non ha avuto il coraggio di decidere”.',
        translation:
          'O Linu hesita, e nesse instante de silêncio sai uma vaia aguda do fundo do loggione. Logo depois vem o aplauso da plateia, e os dois sons se misturam num barulho confuso. O tenor, desorientado, faz uma reverência sem saber se foi aprovado ou reprovado. O Bruno suspira: “Pena: hoje o loggione não teve coragem de decidir”.',
        ending: { tone: 'neutro', title: 'Um veredito confuso', message: 'No loggione, quem não se posiciona deixa a decisão para os outros.' },
      },
    },
  },
  {
    id: 'it-h35',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Scavare o conservare?',
    emoji: '🌋',
    summary: 'Em Pompeia, uma professora desafia a turma (e o Linu) para um debate: continuar as escavações ou só conservar o que já foi descoberto?',
    cultural_context:
      'Pompeia foi soterrada pela erupção do Vesúvio em 79 d.C. e redescoberta no século XVIII; uma parte da cidade ainda não foi escavada. Em 1863, o arqueólogo Giuseppe Fiorelli passou a despejar gesso nos vazios deixados pelos corpos nas cinzas endurecidas, criando os famosos “calchi” das vítimas.',
    start: 'start',
    glossary: [
      ['lo scavo', 'a escavação'],
      ['il calco', 'o molde (de gesso)'],
      ['il termopolio', 'balcão de comida da Roma antiga'],
      ['sostenere una tesi', 'defender uma tese'],
      ['purché', 'contanto que (+ congiuntivo)'],
      ['sebbene', 'embora (+ congiuntivo)'],
      ['pertanto', 'portanto'],
      ['i fondi', 'os recursos, a verba'],
    ],
    nodes: {
      start: {
        emoji: '🏛️',
        text: 'A Porta Marina, Linu raggiunge la professoressa Esposito e la sua classe di liceo, che lo hanno invitato alla visita. “Oggi facciamo un dibattito”, annuncia la professoressa: “bisogna continuare a scavare Pompei o fermarsi e conservare quello che è già venuto alla luce?”. Ognuno sosterrà una tesi estratta a sorte, purché la difenda con argomenti e non con slogan. Linu pesca il suo biglietto: “Continuare gli scavi”.',
        translation:
          'Na Porta Marina, o Linu encontra a professora Esposito e a turma dela do ensino médio, que o convidaram para a visita. “Hoje vamos fazer um debate”, anuncia a professora: “devemos continuar escavando Pompeia ou parar e conservar o que já veio à luz?”. Cada um vai defender uma tese sorteada, contanto que a defenda com argumentos, e não com slogans. O Linu tira o seu papelzinho: “Continuar as escavações”.',
        choices: [{ text: 'Mettersi in cammino prendendo appunti.', translation: 'Começar a caminhar tomando notas.', next: 'visita' }],
      },
      visita: {
        emoji: '🛤️',
        text: 'Lungo via dell’Abbondanza, i solchi dei carri romani sono ancora scavati nella pietra. Ciro, lo studente a cui è toccata la tesi opposta, prova subito a convincere Linu: “Credo che scavare ancora sia inutile: le case già scoperte stanno cadendo a pezzi, pertanto i soldi andrebbero spesi per la manutenzione”. Linu annota tutto, sebbene l’argomento gli sembri piuttosto solido. La professoressa propone due tappe: il termopolio o i calchi delle vittime.',
        translation:
          'Ao longo da via dell’Abbondanza, os sulcos das carroças romanas ainda estão marcados na pedra. O Ciro, o aluno que ficou com a tese contrária, tenta logo convencer o Linu: “Acho que continuar escavando é inútil: as casas já descobertas estão caindo aos pedaços, portanto o dinheiro deveria ir para a manutenção”. O Linu anota tudo, embora o argumento lhe pareça bastante sólido. A professora propõe duas paradas: o termopólio ou os moldes das vítimas.',
        choices: [
          { text: 'Andare al termopolio.', translation: 'Ir ao termopólio.', next: 'termopolio' },
          { text: 'Andare a vedere i calchi.', translation: 'Ir ver os moldes.', next: 'calchi' },
        ],
      },
      termopolio: {
        emoji: '🍲',
        text: 'Il termopolio è un bancone di pietra con grandi giare incassate, dove i Pompeiani compravano cibo caldo da asporto. “Era il loro street food”, scherza la professoressa, “e alcuni termopoli con gli affreschi ancora vivaci sono stati scoperti soltanto negli ultimi anni”. Linu drizza le orecchie: ecco un argomento per la sua tesi. Se si fosse smesso di scavare, quelle scoperte non sarebbero mai avvenute.',
        translation:
          'O termopólio é um balcão de pedra com grandes jarros embutidos, onde os pompeianos compravam comida quente para viagem. “Era o street food deles”, brinca a professora, “e alguns termopólios com os afrescos ainda vivos foram descobertos só nos últimos anos”. O Linu fica de orelha em pé: aí está um argumento para a sua tese. Se tivessem parado de escavar, essas descobertas nunca teriam acontecido.',
        choices: [{ text: 'Proseguire verso i calchi.', translation: 'Seguir até os moldes.', next: 'calchi' }],
      },
      calchi: {
        emoji: '🕯️',
        text: 'Davanti ai calchi di gesso la classe si fa silenziosa: si vedono le pieghe dei vestiti, le mani sul viso, perfino un cane. La professoressa spiega che nel 1863 Giuseppe Fiorelli ebbe l’idea di versare il gesso nei vuoti lasciati dai corpi nella cenere indurita. Ciro, per una volta, non ha voglia di discutere. “Tuttavia”, dice piano, “anche questi calchi vanno protetti, e proteggerli costa”.',
        translation:
          'Diante dos moldes de gesso a turma fica em silêncio: dá para ver as dobras das roupas, as mãos no rosto, até um cachorro. A professora explica que em 1863 Giuseppe Fiorelli teve a ideia de despejar gesso nos vazios deixados pelos corpos na cinza endurecida. O Ciro, pela primeira vez, não tem vontade de discutir. “No entanto”, diz baixinho, “esses moldes também precisam ser protegidos, e proteger custa caro”.',
        choices: [{ text: 'Raggiungere il gruppo per il dibattito finale.', translation: 'Juntar-se ao grupo para o debate final.', next: 'dibattito' }],
      },
      dibattito: {
        emoji: '🎤',
        text: 'All’ombra di un pino, nell’anfiteatro, comincia il dibattito, e la professoressa dà la parola a Linu. Tutta la classe lo guarda: Ciro ha già esposto la sua tesi, e molto bene. Linu ripensa al biglietto pescato all’inizio, al termopolio, ai calchi. Si schiarisce la voce e prende la parola.',
        translation:
          'À sombra de um pinheiro, no anfiteatro, começa o debate, e a professora passa a palavra ao Linu. A turma toda olha para ele: o Ciro já expôs a sua tese, e muito bem. O Linu repensa no papelzinho sorteado no começo, no termopólio, nos moldes. Pigarreia e toma a palavra.',
        choices: [
          {
            text: '“Credo che si debba continuare a scavare, purché si trovino anche i fondi per proteggere ciò che si scopre.”',
            translation: '“Acho que devemos continuar escavando, contanto que se encontrem também os recursos para proteger o que for descoberto.”',
            next: 'replica',
          },
          {
            text: '“Scavare è sempre giusto, e chi dice il contrario non capisce niente.”',
            translation: '“Escavar é sempre certo, e quem diz o contrário não entende nada.”',
            next: 'final_slogan',
          },
          {
            text: '“Sono d’accordo con Ciro: fermiamo gli scavi.”',
            translation: '“Concordo com o Ciro: vamos parar as escavações.”',
            wrong: 'No sorteio, o Linu tirou “Continuare gli scavi”. No debate, cada um defende a tese sorteada, mesmo que concorde em parte com o adversário.',
          },
        ],
      },
      replica: {
        emoji: '🗣️',
        text: 'Ciro chiede la replica e la ottiene. “Sebbene la tua proposta sia ragionevole, chi garantisce che i fondi arrivino davvero?”, domanda. “Finora si è scavato più in fretta di quanto si riuscisse a restaurare”. La classe mormora: ora tocca di nuovo a Linu.',
        translation:
          'O Ciro pede a réplica e consegue. “Embora a sua proposta seja razoável, quem garante que os recursos vão chegar de verdade?”, pergunta. “Até agora se escavou mais depressa do que se conseguia restaurar”. A turma murmura: agora é de novo a vez do Linu.',
        choices: [
          {
            text: '“Hai ragione, pertanto propongo che ogni nuovo scavo abbia fin dall’inizio un piano di conservazione.”',
            translation: '“Você tem razão, portanto proponho que cada nova escavação tenha desde o início um plano de conservação.”',
            next: 'final_bom',
          },
          {
            text: '“Grazie, Ciro, ma non è giusto dire che la mia proposta è assurda.”',
            translation: '“Obrigado, Ciro, mas não é justo dizer que a minha proposta é absurda.”',
            wrong: 'O Ciro disse “sebbene la tua proposta sia ragionevole”: embora seja razoável. Ele reconheceu o valor da proposta antes de levantar a objeção sobre os recursos; em nenhum momento a chamou de absurda.',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'La professoressa chiude il dibattito con un sorriso: “Avete fatto quello che fanno i veri archeologi: avete cercato un equilibrio”. La classe vota, e vince di misura la proposta di Linu, emendata con l’obiezione di Ciro. I due si stringono la mano e decidono di scrivere insieme l’articolo per il giornalino della scuola. Sullo sfondo, il Vesuvio fuma appena, come se approvasse.',
        translation:
          'A professora encerra o debate com um sorriso: “Vocês fizeram o que os verdadeiros arqueólogos fazem: procuraram um equilíbrio”. A turma vota, e vence por pouco a proposta do Linu, emendada com a objeção do Ciro. Os dois apertam as mãos e decidem escrever juntos o artigo para o jornalzinho da escola. Ao fundo, o Vesúvio solta um fiozinho de fumaça, como se aprovasse.',
        ending: { tone: 'bom', title: 'Equilíbrio arqueológico', message: 'Você defendeu a sua tese com argumentos, ouviu a objeção e transformou o debate num acordo.' },
      },
      final_slogan: {
        emoji: '📢',
        text: 'Qualche studente ride, ma la professoressa alza un sopracciglio. “Questo è uno slogan, Linu, non un argomento”, dice con gentilezza. Ciro vince il dibattito quasi all’unanimità, pur avendo avuto l’avversario più simpatico. Linu promette a se stesso che la prossima volta userà il termopolio e i calchi, invece della voce grossa.',
        translation:
          'Alguns alunos riem, mas a professora levanta uma sobrancelha. “Isso é um slogan, Linu, não um argumento”, diz com gentileza. O Ciro vence o debate quase por unanimidade, apesar de ter tido o adversário mais simpático. O Linu promete a si mesmo que, da próxima vez, vai usar o termopólio e os moldes em vez de engrossar a voz.',
        ending: { tone: 'neutro', title: 'Grito não é argumento', message: 'A regra era clara: argumentos, não slogans. O Ciro levou a melhor.' },
      },
    },
  },
  {
    id: 'it-h36',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Carta o schermo?',
    emoji: '📚',
    summary: 'No Festivaletteratura de Mântua, a autora convidada perde o trem, e o Linu precisa mediar um debate sobre livros de papel e livros digitais.',
    cultural_context:
      'Mântua, na Lombardia, é cercada por três lagos formados pelo rio Mincio. Desde 1997 a cidade sedia o Festivaletteratura, festival literário que ocupa praças e palácios todo mês de setembro; no Palazzo Ducale fica a Camera degli Sposi, pintada por Andrea Mantegna.',
    start: 'start',
    glossary: [
      ['moderare', 'mediar (um debate)'],
      ['secondo me', 'na minha opinião'],
      ['sebbene', 'embora (+ congiuntivo)'],
      ['purché', 'contanto que (+ congiuntivo)'],
      ['ciononostante', 'apesar disso'],
      ['la tregua', 'a trégua'],
      ['sottolineare', 'sublinhar'],
      ['il libraio', 'o livreiro'],
    ],
    nodes: {
      start: {
        emoji: '📣',
        text: 'Piazza Sordello, ore nove del mattino: Linu è volontario al Festivaletteratura e sta sistemando le sedie sotto un tendone. Elena, la coordinatrice, arriva di corsa con il telefono in mano. “L’autrice ha perso il treno e arriverà solo stasera”, dice, “e io pensavo che il dibattito delle undici, ‘Carta o schermo?’, potessi moderarlo tu”. Linu deglutisce: sul palco ci saranno un libraio e una studentessa, e davanti un centinaio di persone.',
        translation:
          'Piazza Sordello, nove da manhã: o Linu é voluntário no Festivaletteratura e está arrumando as cadeiras debaixo de uma tenda. A Elena, a coordenadora, chega correndo com o telefone na mão. “A autora perdeu o trem e só chega à noite”, diz, “e eu pensei que o debate das onze, ‘Papel ou tela?’, você pudesse mediar”. O Linu engole em seco: no palco vão estar um livreiro e uma estudante, e na frente umas cem pessoas.',
        choices: [
          { text: '“Va bene, ci provo. Posso parlare prima con gli ospiti?”', translation: '“Tudo bem, vou tentar. Posso falar antes com os convidados?”', next: 'preparazione' },
          { text: '“Mi dispiace, non me la sento: forse è meglio annullare.”', translation: '“Sinto muito, não me sinto capaz: talvez seja melhor cancelar.”', next: 'final_annullato' },
          {
            text: '“Perfetto, allora alle undici aspetto l’autrice e le do il microfono.”',
            translation: '“Perfeito, então às onze eu espero a autora e passo o microfone para ela.”',
            wrong: 'A Elena disse que a autora “arriverà solo stasera”: só chega à noite. Por isso ela pensou que o Linu pudesse mediar o debate das onze no lugar dela.',
          },
        ],
      },
      preparazione: {
        emoji: '☕',
        text: 'Al bar dietro la piazza, Linu conosce il signor Guidi, libraio da trent’anni, e Sara, studentessa di ingegneria. “Credo che il libro di carta sia insostituibile: lo sottolinei, lo presti, lo annusi”, afferma Guidi. Sara sorride: “Sebbene ami le librerie, leggo quasi solo sul telefono: costa meno e non pesa niente”. Linu prende appunti su un tovagliolo, cercando di ricordare le parole esatte di ciascuno.',
        translation:
          'No bar atrás da praça, o Linu conhece o senhor Guidi, livreiro há trinta anos, e a Sara, estudante de engenharia. “Acho que o livro de papel é insubstituível: você sublinha, empresta, cheira”, afirma o Guidi. A Sara sorri: “Embora eu ame as livrarias, leio quase só no celular: custa menos e não pesa nada”. O Linu anota num guardanapo, tentando lembrar as palavras exatas de cada um.',
        choices: [{ text: 'Salire sul palco con i due ospiti.', translation: 'Subir ao palco com os dois convidados.', next: 'dibattito' }],
      },
      dibattito: {
        emoji: '🎙️',
        text: 'Il tendone è pieno, e qualcuno è rimasto in piedi sotto il sole. Linu apre l’incontro e, come gli ha consigliato Elena, riassume le due posizioni prima di dare la parola agli ospiti. Guarda il tovagliolo, poi il pubblico, e si accorge che le mani gli sudano. Un buon moderatore, pensa, deve riportare le idee degli altri senza deformarle.',
        translation:
          'A tenda está lotada, e tem gente em pé debaixo do sol. O Linu abre o encontro e, como a Elena aconselhou, resume as duas posições antes de passar a palavra aos convidados. Olha para o guardanapo, depois para o público, e percebe que as mãos estão suando. Um bom mediador, pensa, deve relatar as ideias dos outros sem deformá-las.',
        choices: [
          {
            text: '“Il signor Guidi sostiene che la carta sia insostituibile; Sara, pur amando le librerie, preferisce leggere sullo schermo.”',
            translation: '“O senhor Guidi defende que o papel é insubstituível; a Sara, apesar de amar as livrarias, prefere ler na tela.”',
            next: 'pubblico',
          },
          {
            text: '“Sara ci ha detto che le librerie non le piacciono e che non ci entra mai.”',
            translation: '“A Sara nos disse que não gosta de livrarias e que nunca entra nelas.”',
            wrong: 'A Sara disse “sebbene ami le librerie”: embora ame as livrarias. Ela gosta delas; só prefere ler no celular por ser mais barato e leve. Um mediador não pode deformar a posição de ninguém.',
          },
        ],
      },
      pubblico: {
        emoji: '🙋',
        text: 'Dopo mezz’ora di scambi vivaci, una signora anziana in prima fila alza la mano. “Ho novant’anni e ho letto su carta tutta la vita”, dice, “ma adesso, con lo schermo, posso ingrandire le lettere e leggere di nuovo senza lente”. Guidi, punto sul vivo, esclama che allora tanto vale chiudere tutte le librerie. Sara ribatte, il pubblico rumoreggia, e Linu capisce che deve intervenire subito.',
        translation:
          'Depois de meia hora de trocas animadas, uma senhora idosa da primeira fila levanta a mão. “Tenho noventa anos e li em papel a vida inteira”, diz, “mas agora, com a tela, posso aumentar as letras e ler de novo sem lupa”. O Guidi, atingido no ponto fraco, exclama que, então, é melhor fechar todas as livrarias. A Sara rebate, o público se agita, e o Linu entende que precisa intervir logo.',
        choices: [
          {
            text: '“Credo che nessuno qui voglia chiudere le librerie: forse carta e schermo possono convivere, purché si scelga lo strumento giusto per ogni lettore.”',
            translation: '“Acho que ninguém aqui quer fechar as livrarias: talvez papel e tela possam conviver, contanto que se escolha a ferramenta certa para cada leitor.”',
            next: 'tregua',
          },
          { text: 'Lasciare che discutano: più litigano, più il pubblico si diverte.', translation: 'Deixar que discutam: quanto mais brigam, mais o público se diverte.', next: 'final_caos' },
        ],
      },
      tregua: {
        emoji: '🤝',
        text: 'Il tendone si calma, e Guidi, dopo un attimo, sorride di malavoglia. “Ammetto che le notizie le leggo sul telefono anch’io”, confessa, tra le risate del pubblico. Sara, per non essere da meno, promette di comprare il prossimo romanzo nella libreria di Guidi, in carta. Linu chiude l’incontro ringraziando la signora in prima fila, che riceve l’applauso più lungo della mattinata.',
        translation:
          'A tenda se acalma, e o Guidi, depois de um instante, sorri a contragosto. “Admito que as notícias eu também leio no celular”, confessa, entre as risadas do público. A Sara, para não ficar atrás, promete comprar o próximo romance na livraria do Guidi, em papel. O Linu encerra o encontro agradecendo à senhora da primeira fila, que recebe o aplauso mais longo da manhã.',
        choices: [{ text: 'Andare a cercare Elena per raccontarle com’è andata.', translation: 'Ir procurar a Elena para contar como foi.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'La sera, sulla riva del lago, Elena presenta Linu all’autrice finalmente arrivata. “Mi hanno detto che stamattina il dibattito è andato meglio che se ci fossi stata io”, scherza lei. Linu arrossisce e racconta della signora di novant’anni, del libraio e della studentessa. Il sole tramonta sul Mincio, e lui pensa che in fondo moderare sia soprattutto ascoltare.',
        translation:
          'À noite, na beira do lago, a Elena apresenta o Linu à autora, que finalmente chegou. “Me disseram que hoje de manhã o debate foi melhor do que se eu estivesse lá”, brinca ela. O Linu fica vermelho e conta da senhora de noventa anos, do livreiro e da estudante. O sol se põe sobre o Mincio, e ele pensa que, no fundo, mediar é sobretudo ouvir.',
        ending: { tone: 'bom', title: 'Mediador de primeira', message: 'Você relatou as opiniões com fidelidade, acalmou a discussão e encontrou um meio-termo que convenceu a todos.' },
      },
      final_caos: {
        emoji: '🌪️',
        text: 'Guidi e Sara alzano la voce, il pubblico si divide in due tifoserie e qualcuno comincia a fischiare. Dopo un’ora l’incontro finisce senza una conclusione, tra applausi e brontolii. Elena, pur ringraziando Linu per il coraggio, gli fa notare che un moderatore deve anche saper fermare una discussione. Quella sera, all’arrivo dell’autrice, nessuno ha voglia di raccontarle com’è andata.',
        translation:
          'O Guidi e a Sara levantam a voz, o público se divide em duas torcidas e alguém começa a vaiar. Depois de uma hora o encontro termina sem conclusão, entre aplausos e resmungos. A Elena, embora agradeça ao Linu pela coragem, observa que um mediador também precisa saber interromper uma discussão. Naquela noite, quando a autora chega, ninguém tem vontade de contar como foi.',
        ending: { tone: 'neutro', title: 'Torcida organizada', message: 'Um debate animado, mas sem mediação ninguém saiu dele pensando melhor.' },
      },
      final_annullato: {
        emoji: '📵',
        text: 'Elena, delusa ma comprensiva, fa appendere un cartello: “L’incontro delle undici è annullato”. Un centinaio di persone arriva lo stesso e se ne va borbottando. Linu passa la mattinata a sistemare sedie che nessuno userà. Più tardi, al bar, sente due signori che discutono proprio di carta e schermo, e si pente di non averci provato.',
        translation:
          'A Elena, decepcionada mas compreensiva, manda pendurar um cartaz: “O encontro das onze está cancelado”. Umas cem pessoas chegam mesmo assim e vão embora resmungando. O Linu passa a manhã arrumando cadeiras que ninguém vai usar. Mais tarde, no bar, ouve dois senhores discutindo justamente papel e tela, e se arrepende de não ter tentado.',
        ending: { tone: 'neutro', title: 'Debate de bar', message: 'O medo falou mais alto; o debate aconteceu do mesmo jeito, só que no balcão do bar.' },
      },
    },
  },
  {
    id: 'it-h37',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Tre lingue a tavola',
    emoji: '🍝',
    summary: 'No Bixiga, em São Paulo, o Linu almoça com a nonna Carmela, calabresa que mistura italiano, dialeto e português, e precisa entender ironias e decidir qual ragù é o melhor.',
    cultural_context:
      'Entre o fim do século XIX e meados do XX, São Paulo recebeu centenas de milhares de imigrantes italianos. No Bixiga, a festa de Nossa Senhora Achiropita, devoção trazida de Rossano, na Calábria, acontece todo mês de agosto; na Mooca, a festa de San Gennaro, de tradição napolitana, ocupa as ruas em setembro.',
    start: 'start',
    glossary: [
      ['dare del tu / del Lei / del voi', 'tratar por você / pela 3ª pessoa formal / por “vós” (respeito no Sul)'],
      ['figghiu', 'filho (calabrês e siciliano; em italiano, figlio)'],
      ['jamu', 'vamos, anda (calabrês; em italiano, andiamo)'],
      ['n’ata cosa', 'outra coisa (napolitano; em italiano, un’altra cosa)'],
      ['apparecchiare', 'pôr a mesa'],
      ['il mattarello', 'o rolo de massa'],
      ['puntualissimo', 'pontualíssimo (aqui, com ironia)'],
      ['scomporsi', 'perder a compostura'],
    ],
    nodes: {
      start: {
        emoji: '🚪',
        text: 'Domenica mattina, al Bixiga: Linu suona alla porta di nonna Carmela con quasi un’ora di ritardo, perché si è perso tra le trattorie e i forni di Rua Treze de Maio. La porta si apre e compare una signora minuta, con il grembiule infarinato e le braccia incrociate. “Ah, finalmente! Puntualissimo, proprio come gli svizzeri”, dice, senza nemmeno l’ombra di un sorriso. Dietro di lei, dalla cucina, arriva un profumo di ragù che fa girare la testa.',
        translation:
          'Domingo de manhã, no Bixiga: o Linu toca a campainha da nonna Carmela com quase uma hora de atraso, porque se perdeu entre as cantinas e as padarias da Rua Treze de Maio. A porta se abre e aparece uma senhora miudinha, de avental enfarinhado e braços cruzados. “Ah, finalmente! Pontualíssimo, igualzinho aos suíços”, diz, sem sombra de sorriso. Atrás dela, da cozinha, vem um cheiro de ragù de deixar tonto.',
        choices: [
          { text: '“Mi scusi tanto, signora. Come sta Lei?”', translation: '“Peço mil desculpas, senhora. Como vai a senhora?”', next: 'lei' },
          { text: '“Colpa del Suo ragù: ho seguito il profumo e ho sbagliato strada!”', translation: '“Culpa do seu ragù: segui o cheiro e errei o caminho!”', next: 'cucina' },
          {
            text: '“Grazie! In effetti cerco sempre di essere puntuale.”',
            translation: '“Obrigado! De fato, sempre procuro ser pontual.”',
            wrong: 'A nonna Carmela está sendo irônica: o Linu chegou quase uma hora atrasado, e “puntualissimo, come gli svizzeri” quer dizer exatamente o contrário. O tom seco e os braços cruzados entregam a ironia.',
          },
        ],
      },
      lei: {
        emoji: '👵',
        text: '“Lei? Signora?”, ripete Carmela, e scoppia a ridere. “Figghiu mio, mi fai sentire una contessa! Qui mi dai del tu, o al massimo del voi, come si faceva al paese con i vecchi”. Gli spiega che in Calabria, quando era ragazza, ai genitori e agli anziani si dava del voi, mentre il Lei si usava solo col dottore e col notaio. Poi lo prende sottobraccio e lo trascina dentro: “Jamu, che il ragù non aspetta nessuno”.',
        translation:
          '“Senhora? A senhora?”, repete a Carmela, e cai na gargalhada. “Meu filho, assim você me faz sentir uma condessa! Aqui você me trata por tu, ou no máximo por vós, como se fazia na aldeia com os mais velhos”. Ela explica que na Calábria, quando era moça, os pais e os idosos eram tratados por “voi”, enquanto o “Lei” só se usava com o médico e com o tabelião. Depois o pega pelo braço e o arrasta para dentro: “Vamos, que o ragù não espera ninguém”.',
        choices: [
          { text: '“Allora, nonna, raccontami: come sei arrivata a San Paolo?”', translation: '“Então, nonna, me conta: como você chegou a São Paulo?”', next: 'racconto' },
          { text: 'Seguirla in cucina senza fare domande.', translation: 'Segui-la até a cozinha sem fazer perguntas.', next: 'cucina' },
        ],
      },
      racconto: {
        emoji: '🚢',
        text: 'Mentre gira il ragù, Carmela racconta di essere partita da Rossano a diciassette anni, su una nave che per settimane non vide altro che mare, fino al porto di Santos. “Parlavo solo il dialetto: l’italiano l’ho imparato qui, dalle suore, e il portoghese per strada, dai ragazzi del quartiere”, dice. Per questo, ammette, oggi parla una lingua tutta sua, fatta di tre lingue mescolate. “Mio nipote dice che non mi si capisce, ma intanto a tavola viene sempre”, aggiunge con un’alzata di spalle.',
        translation:
          'Enquanto mexe o ragù, a Carmela conta que saiu de Rossano aos dezessete anos, num navio que por semanas não viu nada além de mar, até o porto de Santos. “Eu só falava o dialeto: o italiano aprendi aqui, com as freiras, e o português na rua, com a molecada do bairro”, diz. Por isso, admite, hoje fala uma língua só dela, feita de três línguas misturadas. “O meu neto diz que ninguém me entende, mas para a mesa ele vem sempre”, acrescenta, dando de ombros.',
        choices: [{ text: 'Offrirsi di aiutarla con la pasta.', translation: 'Oferecer-se para ajudar com a massa.', next: 'cucina' }],
      },
      cucina: {
        emoji: '🥘',
        text: 'In cucina Carmela stende la pasta col mattarello e intanto chiede a Linu di passarle “la panela, quella grande, lì vicino al fornello”. Linu impiega un attimo a capire che la nonna sta infilando il portoghese nell’italiano senza nemmeno accorgersene. In quel momento entra Rodrigo, il nipote, che parla solo portoghese e la saluta con un bacio sulla guancia. La nonna, senza voltarsi, gli grida: “Jamu, figghiu, apparecchia!”. Rodrigo guarda Linu con aria smarrita.',
        translation:
          'Na cozinha, a Carmela abre a massa com o rolo e, enquanto isso, pede ao Linu que passe “a panela, aquela grande, ali perto do fogão”. O Linu leva um instante para perceber que a nonna está enfiando o português no italiano sem nem notar. Nesse momento entra o Rodrigo, o neto, que só fala português, e a cumprimenta com um beijo no rosto. A nonna, sem se virar, grita: “Anda, filho, põe a mesa!”. O Rodrigo olha para o Linu com cara de perdido.',
        choices: [
          { text: 'Spiegare a Rodrigo che la nonna vuole che apparecchi la tavola.', translation: 'Explicar ao Rodrigo que a nonna quer que ele ponha a mesa.', next: 'tavola' },
          {
            text: 'Dire a Rodrigo che la nonna vuole uscire subito con lui.',
            translation: 'Dizer ao Rodrigo que a nonna quer sair com ele agora mesmo.',
            wrong: '“Jamu” (literalmente “vamos”, em calabrês) aqui funciona como um “anda, vai!” de incentivo. O verbo que importa é “apparecchia”: põe a mesa. Ninguém vai sair de casa antes do ragù.',
          },
        ],
      },
      tavola: {
        emoji: '🍷',
        text: 'A tavola arriva anche zio Vincenzo, il vicino napoletano della Mooca, che da quarant’anni non si perde un pranzo della domenica. Assaggia la pasta, chiude gli occhi e sentenzia: “Carmè, ’sta pasta è ’na bellezza… ma ’o ragù ’e mammà mia era n’ata cosa”. Carmela, senza scomporsi, ribatte: “Vicè, tua madre è in paradiso da trent’anni, e il ragù se l’è portato appresso”. Tutti ridono e poi, come a un segnale, si voltano verso Linu. Tocca a lui decidere quale ragù sia il migliore.',
        translation:
          'Para o almoço chega também o tio Vincenzo, o vizinho napolitano da Mooca, que há quarenta anos não perde um almoço de domingo. Ele prova a massa, fecha os olhos e sentencia: “Carmela, esta massa é uma beleza… mas o ragù da minha mãe era outra coisa”. A Carmela, sem se abalar, rebate: “Vincenzo, a tua mãe está no céu há trinta anos, e o ragù ela levou junto”. Todos riem e depois, como se fosse combinado, se viram para o Linu. Cabe a ele decidir qual ragù é o melhor.',
        choices: [
          {
            text: '“Il ragù della mamma di zio Vincenzo non l’ho mai assaggiato: per ora vince quello che ho nel piatto.”',
            translation: '“O ragù da mãe do tio Vincenzo eu nunca provei: por enquanto, ganha o que está no meu prato.”',
            next: 'festa',
          },
          { text: 'Dare ragione a zio Vincenzo: il ragù napoletano è più famoso.', translation: 'Dar razão ao tio Vincenzo: o ragù napolitano é mais famoso.', next: 'final_litigio' },
        ],
      },
      festa: {
        emoji: '🎆',
        text: 'Carmela gli riempie il piatto una seconda volta, che nel linguaggio della nonna equivale a una medaglia d’oro. Zio Vincenzo, per nulla offeso, lo invita alla festa di San Gennaro, che a settembre riempie le strade della Mooca. “Macché San Gennaro”, lo interrompe Carmela, “la festa vera è quella dell’Achiropita, ad agosto, qui al Bixiga!”. I due cominciano a discutere in due dialetti diversi, e Rodrigo sussurra a Linu, in portoghese, che va avanti così da quando lui è nato.',
        translation:
          'A Carmela enche o prato dele pela segunda vez, o que, na linguagem da nonna, equivale a uma medalha de ouro. O tio Vincenzo, nem um pouco ofendido, o convida para a festa de San Gennaro, que em setembro enche as ruas da Mooca. “Que San Gennaro que nada”, interrompe a Carmela, “festa de verdade é a da Achiropita, em agosto, aqui no Bixiga!”. Os dois começam a discutir em dois dialetos diferentes, e o Rodrigo cochicha para o Linu, em português, que é assim desde que ele nasceu.',
        choices: [{ text: '“E se venissi a tutte e due le feste?”', translation: '“E se eu fosse às duas festas?”', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'L’idea mette d’accordo tutti, cosa che al Bixiga succede di rado. Ad agosto Linu aiuta Carmela a friggere le fogazze alla festa dell’Achiropita, e a settembre segue zio Vincenzo tra le bancarelle di San Gennaro. Alla fine della stagione parla un italiano pieno di “jamu”, di “n’ata cosa” e di parole portoghesi, proprio come loro. “Adesso sì che sei di famiglia”, gli dice la nonna, soddisfatta, “perché non ti capisce più nessuno”.',
        translation:
          'A ideia põe todo mundo de acordo, coisa rara no Bixiga. Em agosto, o Linu ajuda a Carmela a fritar fogazzas na festa da Achiropita, e em setembro segue o tio Vincenzo entre as barracas de San Gennaro. No fim da temporada, fala um italiano cheio de “jamu”, de “n’ata cosa” e de palavras em português, igualzinho a eles. “Agora sim você é da família”, diz a nonna, satisfeita, “porque ninguém mais te entende”.',
        ending: { tone: 'bom', title: 'Da família', message: 'Você pegou a ironia, circulou entre o tu, o voi e o dialeto e ainda saiu com diplomacia da guerra dos ragùs.' },
      },
      final_litigio: {
        emoji: '🥶',
        text: 'Cala un silenzio gelido, e Carmela posa il mestolo con una lentezza teatrale. “Ah, sì? Allora domenica prossima il ragù te lo prepara zio Vincenzo”, dice, dolce come l’aceto. Zio Vincenzo, trionfante, promette un ragù “come quello di mammà”, anche se in vita sua non ha mai cucinato nemmeno un uovo. Linu passa il resto del pranzo a lodare ogni cosa, dal pane alla tovaglia, senza riuscire a rimediare.',
        translation:
          'Cai um silêncio gelado, e a Carmela pousa a concha com uma lentidão teatral. “Ah, é? Então domingo que vem o ragù quem faz para você é o tio Vincenzo”, diz, doce como vinagre. O tio Vincenzo, triunfante, promete um ragù “igual ao da mamma”, embora nunca na vida tenha cozinhado nem um ovo. O Linu passa o resto do almoço elogiando tudo, do pão à toalha de mesa, sem conseguir consertar.',
        ending: { tone: 'neutro', title: 'Diplomacia em falta', message: 'Na casa de uma nonna, elogiar o ragù alheio é o erro mais grave que existe.' },
      },
    },
  },
  {
    id: 'it-h38',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Natel, azione e altri misteri',
    emoji: '🚂',
    summary: 'No Val Poschiavo, na Suíça italiana, o Linu tropeça nas palavras próprias do italiano suíço e no humor seco de um ex-ferroviário.',
    cultural_context:
      'O Val Poschiavo fica nos Grisões, o único cantão trilíngue da Suíça (alemão, romanche e italiano). A Ferrovia do Bernina, que passa por Poschiavo e desce até Tirano, na Itália, é Patrimônio Mundial da UNESCO desde 2008. O italiano da Suíça tem palavras próprias, os “elvetismi”, como natel (celular), azione (promoção) e licenza di condurre (carteira de motorista).',
    start: 'start',
    glossary: [
      ['il natel', 'o celular (Suíça; na Itália, il cellulare)'],
      ['l’azione', 'a promoção (Suíça; na Itália, l’offerta)'],
      ['la licenza di condurre', 'a carteira de motorista (Suíça; na Itália, la patente)'],
      ['l’autopostale', 'o ônibus dos correios suíços'],
      ['l’elvetismo', 'palavra típica do italiano da Suíça'],
      ['dare del Lei', 'tratar formalmente'],
      ['asciutto', 'seco (também do humor)'],
      ['in punto', 'em ponto'],
    ],
    nodes: {
      start: {
        emoji: '🚞',
        text: 'Il trenino rosso del Bernina scende dai ghiacciai con una calma tutta svizzera, curva dopo curva, finché la valle si apre e compare Poschiavo, con i suoi campanili e i tetti di pietra. Alla stazione aspetta Marta, la cugina di un’amica di Linu, che lo saluta con tre baci e un’efficienza impressionante. “Benvenuto! Dammi subito il tuo numero di natel, così ti scrivo se cambia qualcosa”, gli dice, già con il telefono in mano. Linu rimane un attimo interdetto: quella parola, nei suoi libri di italiano, non c’era.',
        translation:
          'O trenzinho vermelho do Bernina desce das geleiras com uma calma bem suíça, curva após curva, até que o vale se abre e aparece Poschiavo, com seus campanários e telhados de pedra. Na estação espera a Marta, prima de uma amiga do Linu, que o cumprimenta com três beijos e uma eficiência impressionante. “Bem-vindo! Me passa já o número do teu natel, assim eu te escrevo se algo mudar”, diz, já com o telefone na mão. O Linu fica um instante sem reação: aquela palavra não estava nos livros de italiano dele.',
        choices: [
          { text: 'Dettarle il numero del cellulare.', translation: 'Ditar para ela o número do celular.', next: 'paese' },
          {
            text: '“Il mio Natale? Lo passo sempre in Brasile, al mare!”',
            translation: '“O meu Natal? Sempre passo no Brasil, na praia!”',
            wrong: '“Natel” não é “Natale” (Natal): é como os suíços chamam o celular, um “elvetismo” do italiano da Suíça. A Marta está com o telefone na mão pedindo o número.',
          },
        ],
      },
      paese: {
        emoji: '🏘️',
        text: 'Attraversando la piazza, Marta gli mostra una fila di palazzi dalle facciate colorate, che sembrano usciti da un’altra città. “È il quartiere spagnolo”, spiega: “l’hanno costruito nell’Ottocento i poschiavini emigrati in Spagna, che avevano fatto fortuna come pasticcieri e caffettieri”. Poi, cambiando discorso, gli chiede se ha la licenza di condurre: il giorno dopo le piacerebbe andare al lago, ma lei non guida. Linu la guarda perplesso, sforzandosi di capire che cosa gli stia chiedendo.',
        translation:
          'Atravessando a praça, a Marta mostra uma fileira de palacetes de fachadas coloridas, que parecem saídos de outra cidade. “É o bairro espanhol”, explica: “foi construído no século XIX pelos poschiavinos que emigraram para a Espanha e fizeram fortuna como confeiteiros e donos de cafés”. Depois, mudando de assunto, pergunta se ele tem carteira de motorista: no dia seguinte ela gostaria de ir ao lago, mas não dirige. O Linu olha para ela, perplexo, esforçando-se para entender o que ela está perguntando.',
        choices: [
          { text: '“La patente? No, sono un pinguino: al massimo guido una slitta.”', translation: '“A carteira? Não, sou um pinguim: no máximo dirijo um trenó.”', next: 'negozio' },
          {
            text: '“Una licenza? Non sapevo che per fare il bagno nel lago servisse un permesso!”',
            translation: '“Uma licença? Não sabia que precisava de autorização para nadar no lago!”',
            wrong: '“Licenza di condurre” é a carteira de motorista no italiano da Suíça (na Itália se diz “patente”). A Marta quer saber se o Linu dirige, porque ela não dirige e quer ir ao lago.',
          },
        ],
      },
      negozio: {
        emoji: '🍎',
        text: 'Senza patente, decidono di prendere l’autopostale, e intanto passano dal negozio a fare la spesa. Sulla cassetta delle mele c’è un cartello giallo: “Azione! Mele della valle”, e Marta riempie un sacchetto: “Sono in azione, ne prendiamo di più per la torta”. La cassiera dà del Lei a Linu con grande cortesia, parla in dialetto con Marta e, un attimo dopo, risponde in tedesco a un turista. Linu la osserva con l’ammirazione che di solito si riserva ai prestigiatori.',
        translation:
          'Sem carteira, decidem pegar o ônibus dos correios e, enquanto isso, passam no mercadinho para fazer compras. Na caixa de maçãs há um cartaz amarelo: “Promoção! Maçãs do vale”, e a Marta enche um saquinho: “Estão na promoção, vamos levar mais para a torta”. A caixa trata o Linu com toda a formalidade, fala em dialeto com a Marta e, um instante depois, responde em alemão a um turista. O Linu a observa com a admiração que normalmente se reserva aos mágicos.',
        choices: [
          { text: 'Chiedere alla cassiera come fa a cambiare lingua così in fretta.', translation: 'Perguntar à caixa como ela consegue trocar de língua tão depressa.', next: 'lingue' },
          { text: 'Pagare e tornare a casa per la cena.', translation: 'Pagar e voltar para casa para o jantar.', next: 'cena' },
        ],
      },
      lingue: {
        emoji: '🗣️',
        text: 'La cassiera ride: “Qui nei Grigioni è normale: il cantone ha tre lingue ufficiali, tedesco, romancio e italiano”. A casa, spiega, parla il dialetto della valle, a scuola ha studiato in italiano, e per lavorare d’inverno negli alberghi dell’Engadina ha dovuto imparare il tedesco. “E con Lei, che è un ospite, uso l’italiano più educato che ho”, aggiunge, strizzando l’occhio. Linu pensa che quel negozio sia la migliore lezione di sociolinguistica della sua vita.',
        translation:
          'A caixa ri: “Aqui nos Grisões é normal: o cantão tem três línguas oficiais, alemão, romanche e italiano”. Em casa, explica, ela fala o dialeto do vale, na escola estudou em italiano, e para trabalhar no inverno nos hotéis da Engadina teve de aprender alemão. “E com o senhor, que é visita, uso o italiano mais educado que eu tenho”, acrescenta, piscando o olho. O Linu pensa que aquele mercadinho é a melhor aula de sociolinguística da vida dele.',
        choices: [{ text: 'Ringraziarla e tornare a casa per la cena.', translation: 'Agradecer e voltar para casa para o jantar.', next: 'cena' }],
      },
      cena: {
        emoji: '🍷',
        text: 'A cena c’è anche Aldo, il padre di Marta, un ex ferroviere con i baffi bianchi e un umorismo asciutto come l’aria di montagna. “Domani prendete l’autopostale delle 7.02”, dice serissimo, “e se arriva alle 7.03, telefoniamo subito a Berna per protestare”. Marta alza gli occhi al cielo, e Linu non sa se ridere o prendere appunti. Poi Aldo gli versa un bicchiere di vino della Valtellina e gli chiede, dandogli del Lei, se in Brasile i treni sono puntuali.',
        translation:
          'No jantar está também o Aldo, pai da Marta, um ex-ferroviário de bigode branco e humor seco como o ar da montanha. “Amanhã vocês pegam o ônibus das 7h02”, diz, seríssimo, “e se ele chegar às 7h03, ligamos na hora para Berna para reclamar”. A Marta revira os olhos, e o Linu não sabe se ri ou se toma nota. Depois o Aldo lhe serve uma taça de vinho da Valtellina e pergunta, tratando-o de senhor, se no Brasil os trens são pontuais.',
        choices: [
          { text: '“Puntualissimi, signor Aldo: arrivano sempre lo stesso giorno.”', translation: '“Pontualíssimos, seu Aldo: chegam sempre no mesmo dia.”', next: 'gita' },
          { text: 'Scusarsi, perché è stanco, e andare a letto presto.', translation: 'Pedir licença, porque está cansado, e ir dormir cedo.', next: 'final_nottata' },
          {
            text: '“Peccato che qui gli autobus arrivino sempre con un minuto di ritardo!”',
            translation: '“Pena que aqui os ônibus sempre cheguem com um minuto de atraso!”',
            wrong: 'O Aldo estava sendo irônico: na Suíça um minuto de atraso é tão raro que ele finge que seria caso de reclamar em Berna. Ele não disse que os ônibus atrasam; deu a entender justamente o contrário.',
          },
        ],
      },
      gita: {
        emoji: '🏞️',
        text: 'Aldo scoppia in una risata che fa tremare i bicchieri e, da quel momento, gli dà del tu. La mattina dopo l’autopostale arriva alle 7.02 in punto, naturalmente, e li porta a Le Prese, sulle rive del lago di Poschiavo. L’acqua è così limpida che si vedono i sassi sul fondo, e le montagne ci si specchiano capovolte. Marta tira fuori dallo zaino due fette di torta fatta con le mele “in azione”, e Linu decide che quella parola gli piace moltissimo.',
        translation:
          'O Aldo solta uma gargalhada que faz tremer os copos e, a partir desse momento, passa a tratá-lo por tu. Na manhã seguinte o ônibus chega às 7h02 em ponto, naturalmente, e os leva a Le Prese, à beira do lago de Poschiavo. A água é tão límpida que dá para ver as pedras no fundo, e as montanhas se refletem nela de cabeça para baixo. A Marta tira da mochila duas fatias da torta feita com as maçãs “da promoção”, e o Linu decide que gosta muito daquela palavra.',
        choices: [{ text: 'Godersi la giornata al lago fino al tramonto.', translation: 'Aproveitar o dia no lago até o pôr do sol.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Prima di ripartire, Linu scrive sul suo quaderno un piccolo dizionario: natel, azione, licenza di condurre, autopostale. Alla stazione Aldo lo saluta con tre baci, alla svizzera, e gli dice: “Torna quando vuoi: il treno sarà puntuale, io pure”. Marta gli promette di scrivergli sul natel, e lui le risponde che lo terrà sempre acceso. Mentre il trenino risale verso il Bernina, Linu si accorge di pensare in un italiano un po’ più svizzero.',
        translation:
          'Antes de partir, o Linu escreve no caderno um pequeno dicionário: natel, azione, licenza di condurre, autopostale. Na estação, o Aldo se despede com três beijos, à moda suíça, e diz: “Volte quando quiser: o trem vai ser pontual, e eu também”. A Marta promete escrever para o natel dele, e ele responde que vai deixá-lo sempre ligado. Enquanto o trenzinho sobe de volta rumo ao Bernina, o Linu percebe que está pensando num italiano um pouco mais suíço.',
        ending: { tone: 'bom', title: 'Italiano com sotaque suíço', message: 'Você decifrou os elvetismos, entrou no humor seco do Aldo e ganhou o “tu” de um ferroviário suíço.' },
      },
      final_nottata: {
        emoji: '⏰',
        text: 'Linu si ritira presto, stanco del viaggio, e dorme come un sasso. La mattina dopo si sveglia alle 7.10: l’autopostale delle 7.02, puntualissimo, è partito senza di lui. Marta ride e lo consola con una fetta di torta, ma la gita al lago salta. A pranzo Aldo gli ricorda, con la solita faccia seria, che l’autopostale non aspetta nessuno, nemmeno i pinguini.',
        translation:
          'O Linu se recolhe cedo, cansado da viagem, e dorme como uma pedra. Na manhã seguinte acorda às 7h10: o ônibus das 7h02, pontualíssimo, partiu sem ele. A Marta ri e o consola com uma fatia de torta, mas o passeio ao lago fica para outra vez. No almoço, o Aldo lembra, com a cara séria de sempre, que o ônibus dos correios não espera ninguém, nem os pinguins.',
        ending: { tone: 'neutro', title: 'Pontualidade suíça', message: 'Descansar faz bem, mas na Suíça o horário é sagrado: o lago ficou para a próxima.' },
      },
    },
  },
  {
    id: 'it-h39',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Eja, ajò!',
    emoji: '🎶',
    summary: 'Em Nuoro, na Sardenha, o Linu enfrenta o italiano regional sardo, a fartura de uma tzia e o canto a tenore, até a festa do Redentor no monte Ortobene.',
    cultural_context:
      'Nuoro, no centro da Sardenha, é a cidade natal de Grazia Deledda, Prêmio Nobel de Literatura de 1926. O canto a tenore, polifonia pastoril a quatro vozes (bassu, contra, mesu boghe e boghe), é Patrimônio Imaterial da UNESCO. O sardo é considerado uma língua, e não um dialeto do italiano; no italiano falado na Sardenha é comum pôr o verbo no fim da pergunta (“Stanco sei?”).',
    start: 'start',
    glossary: [
      ['eja', 'sim (sardo)'],
      ['ajò', 'vamos, bora (sardo)'],
      ['tzia / tziu', 'tia / tio (tratamento respeitoso para os mais velhos)'],
      ['Stanco sei?', 'Você está cansado? (ordem sarda; em italiano padrão, Sei stanco?)'],
      ['il tenore', 'o grupo de quatro cantores do canto a tenore'],
      ['il pane carasau', 'pão sardo fininho e crocante'],
      ['sciupato', 'abatido, magrinho'],
      ['squadrare', 'medir com os olhos'],
    ],
    nodes: {
      start: {
        emoji: '🚌',
        text: 'Alla stazione degli autobus di Nuoro, Linu viene accolto da Giovanni, un ragazzo alto e silenzioso con la barba scura. “Linu? Eja, sei tu”, dice, dopo averlo squadrato per un momento, e gli prende la valigia. Durante il tragitto in macchina parla pochissimo; poi, a un semaforo, si gira e gli chiede: “Stanco sei?”. Linu, che l’italiano l’ha studiato sui libri, ci mette un secondo a riconoscere la domanda con il verbo in fondo.',
        translation:
          'Na rodoviária de Nuoro, o Linu é recebido pelo Giovanni, um rapaz alto e calado, de barba escura. “Linu? Sim, é você”, diz, depois de medi-lo com os olhos por um momento, e pega a mala dele. Durante o trajeto de carro fala pouquíssimo; então, num semáforo, se vira e pergunta: “Cansado está?”. O Linu, que estudou italiano nos livros, leva um segundo para reconhecer a pergunta com o verbo no fim.',
        choices: [
          { text: '“Un po’, ma sono felicissimo di essere qui.”', translation: '“Um pouco, mas estou felicíssimo de estar aqui.”', next: 'casa' },
          {
            text: '“No, guarda, non mi chiamo Eja: mi chiamo Linu.”',
            translation: '“Não, olha, eu não me chamo Eja: me chamo Linu.”',
            wrong: '“Eja” é “sim” em sardo. O Giovanni estava só confirmando que achou a pessoa certa: “Eja, sei tu” = sim, é você.',
          },
        ],
      },
      casa: {
        emoji: '🧀',
        text: 'A casa li aspetta tzia Maria, la madre di Giovanni, che ha preparato “un pochino di cose”, come dice lei. Sul tavolo ci sono pane carasau, pecorino, salsiccia, un piatto di maccarrones de busa al sugo e un vassoio di dolci alle mandorle. Giovanni sussurra a Linu che, in Sardegna, “un pochino” basta per sfamare un reggimento. Dopo un’ora, quando Linu ha svuotato ogni piatto, tzia Maria lo guarda preoccupata. “Niente hai mangiato! Malato sei?”.',
        translation:
          'Em casa os espera a tzia Maria, mãe do Giovanni, que preparou “umas coisinhas”, como ela diz. Na mesa há pão carasau, pecorino, linguiça, um prato de maccarrones de busa ao molho e uma bandeja de doces de amêndoa. O Giovanni cochicha para o Linu que, na Sardenha, “um pouquinho” dá para alimentar um regimento. Depois de uma hora, quando o Linu já esvaziou todos os pratos, a tzia Maria olha para ele preocupada. “Nada comeste! Doente estás?”.',
        choices: [
          { text: '“Grazie, tzia, ma se mangio ancora non riesco più a cantare!”', translation: '“Obrigado, tia, mas se eu comer mais não consigo cantar!”', next: 'prove' },
          {
            text: '“Mi scusi, ha ragione: non ho toccato quasi niente.”',
            translation: '“Desculpe, a senhora tem razão: quase não toquei em nada.”',
            wrong: 'O Linu esvaziou todos os pratos! “Niente hai mangiato!” é o exagero carinhoso da dona da casa para insistir que ele coma mais, com o verbo no fim, bem à moda do italiano da Sardenha. Não é uma queixa de verdade.',
          },
        ],
      },
      prove: {
        emoji: '🎤',
        text: 'La sera Giovanni lo porta in una cantina dove quattro uomini, in cerchio, provano i canti per la festa del Redentore. Sono un tenore, spiega: bassu, contra, mesu boghe e boghe, quattro voci che insieme sembrano il vento, il gregge e le campane del paese. Il più anziano, tziu Bachisio, canta con una mano accanto all’orecchio, e il suono gutturale del basso fa vibrare perfino i bicchieri sul tavolo. Finita la prova, tziu Bachisio si rivolge a Linu con un mezzo sorriso. “E tu, pinguino, la voce ce l’hai o sei venuto solo a mangiare?”.',
        translation:
          'À noite, o Giovanni o leva a uma adega onde quatro homens, em círculo, ensaiam os cantos para a festa do Redentor. São um tenore, explica: bassu, contra, mesu boghe e boghe, quatro vozes que juntas parecem o vento, o rebanho e os sinos da aldeia. O mais velho, o tio Bachisio, canta com a mão junto à orelha, e o som gutural do baixo faz vibrar até os copos na mesa. Terminado o ensaio, o tio Bachisio se vira para o Linu com um meio sorriso. “E você, pinguim, tem voz ou veio só para comer?”.',
        choices: [
          { text: 'Provare a cantare la parte del basso.', translation: 'Tentar cantar a parte do baixo.', next: 'canto' },
          { text: '“Soprattutto a mangiare, ma ascolto volentieri.”', translation: '“Principalmente para comer, mas escuto com prazer.”', next: 'ascolto' },
        ],
      },
      canto: {
        emoji: '🐧',
        text: 'Linu chiude gli occhi, cerca la voce più profonda che ha e tira fuori un suono che somiglia a una porta che cigola. Per un attimo nessuno fiata; poi tziu Bachisio scoppia a ridere così forte che deve sedersi. “Ajò, non male per uno che viene dal Polo”, dice, asciugandosi gli occhi. “Con un paio d’anni di pratica, ti prendiamo come quinta voce”. Da quel momento, nella cantina, tutti lo chiamano “su pinguinu”.',
        translation:
          'O Linu fecha os olhos, procura a voz mais grave que tem e solta um som parecido com uma porta rangendo. Por um instante ninguém dá um pio; então o tio Bachisio cai na gargalhada com tanta força que precisa se sentar. “Olha, nada mal para quem vem do Polo”, diz, enxugando os olhos. “Com uns dois anos de prática, a gente te aceita como quinta voz”. A partir daí, na adega, todo mundo o chama de “su pinguinu”, o pinguim.',
        choices: [{ text: 'Tornare a casa a riposare prima della festa.', translation: 'Voltar para casa para descansar antes da festa.', next: 'festa' }],
      },
      ascolto: {
        emoji: '🌌',
        text: '“Sincero almeno sei”, ride tziu Bachisio, e riprende a cantare. Linu si siede in un angolo e ascolta i quattro fino a tardi: canti d’amore, di pastori, di lune e di pecore smarrite. Del sardo non capisce quasi una parola, ma capisce tutto il resto. Quando escono, sotto un cielo pieno di stelle, Giovanni gli dice soltanto: “Ti è piaciuto, si vede”.',
        translation:
          '“Sincero pelo menos és”, ri o tio Bachisio, e volta a cantar. O Linu se senta num canto e escuta os quatro até tarde: cantos de amor, de pastores, de luas e de ovelhas perdidas. Do sardo ele não entende quase nada, mas entende todo o resto. Quando saem, debaixo de um céu cheio de estrelas, o Giovanni diz apenas: “Você gostou, dá para ver”.',
        choices: [{ text: 'Tornare a casa a riposare prima della festa.', translation: 'Voltar para casa para descansar antes da festa.', next: 'festa' }],
      },
      festa: {
        emoji: '⛰️',
        text: 'A fine agosto Nuoro festeggia il Redentore, e una lunga processione sale verso la grande statua sul monte Ortobene. Per le strade si vedono i costumi tradizionali, ricamati e pesanti, che le famiglie tirano fuori dai bauli una volta all’anno. All’alba Giovanni bussa alla porta di Linu: “Ajò, che partiamo! Pronto sei?”. Dal letto, Linu sente già in lontananza le voci di un tenore che provano per strada.',
        translation:
          'No fim de agosto, Nuoro celebra o Redentor, e uma longa procissão sobe até a grande estátua no monte Ortobene. Pelas ruas se veem os trajes tradicionais, bordados e pesados, que as famílias tiram dos baús uma vez por ano. Ao amanhecer, o Giovanni bate à porta do Linu: “Bora, que a gente já vai! Pronto estás?”. Da cama, o Linu já ouve ao longe as vozes de um tenore ensaiando na rua.',
        choices: [
          { text: '“Eja, prontissimo!”', translation: '“Sim, prontíssimo!”', next: 'ortobene' },
          { text: '“Andate voi, io resto a letto ancora un po’.”', translation: '“Vão vocês, eu fico mais um pouco na cama.”', next: 'final_riposo' },
        ],
      },
      ortobene: {
        emoji: '🗿',
        text: 'La salita è lunga, tra lecci e massi di granito, e la gente canta, prega o chiacchiera, a seconda dell’età. In cima, ai piedi della statua di bronzo del Redentore, la vista abbraccia la città e le montagne tutt’intorno. Tziu Bachisio e i suoi si mettono in cerchio e cominciano a cantare, e Giovanni spinge Linu dentro il cerchio. “Vieni, pinguino”, gli dice Bachisio, “oggi la quinta voce sei tu”.',
        translation:
          'A subida é longa, entre azinheiras e blocos de granito, e as pessoas cantam, rezam ou conversam, conforme a idade. No alto, aos pés da estátua de bronze do Redentor, a vista abraça a cidade e as montanhas em volta. O tio Bachisio e os seus formam um círculo e começam a cantar, e o Giovanni empurra o Linu para dentro da roda. “Vem, pinguim”, diz o Bachisio, “hoje a quinta voz é você”.',
        choices: [{ text: 'Cantare con loro, con tutto il fiato che ha.', translation: 'Cantar com eles, com todo o fôlego que tem.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu canta sbagliando quasi ogni nota, e i quattro lo avvolgono con le loro voci come un mantello. Quando finiscono, la gente intorno applaude, e una signora anziana gli regala un sacchetto di papassini. Giovanni, che in tre giorni avrà detto sì e no cento parole, gli mette una mano sulla spalla. “Torna, eh”, gli dice soltanto. E Linu capisce che, detto da un nuorese, vale quanto un discorso di un’ora.',
        translation:
          'O Linu canta errando quase todas as notas, e os quatro o envolvem com as vozes como um manto. Quando terminam, as pessoas em volta aplaudem, e uma senhora idosa lhe dá um saquinho de papassini. O Giovanni, que em três dias deve ter dito, se muito, umas cem palavras, põe a mão no ombro dele. “Volta, hein”, diz apenas. E o Linu entende que, vindo de um nuorense, isso vale tanto quanto um discurso de uma hora.',
        ending: { tone: 'bom', title: 'A quinta voz', message: 'Você decifrou o italiano da Sardenha, entendeu o exagero carinhoso da tzia e cantou no alto do Ortobene.' },
      },
      final_riposo: {
        emoji: '🛏️',
        text: 'Linu si riaddormenta e, quando si sveglia, la casa è vuota e silenziosa. Tzia Maria gli ha lasciato sul tavolo il caffè nel thermos e un biglietto: “Mangia, che sei sciupato”. Dal balcone vede in lontananza la folla che sale sul monte, piccola come una fila di formiche. Quella sera Giovanni gli racconta la festa in quattro parole, e Linu capisce di essersi perso qualcosa che non tornerà prima di un anno.',
        translation:
          'O Linu volta a dormir e, quando acorda, a casa está vazia e silenciosa. A tzia Maria deixou na mesa o café na garrafa térmica e um bilhete: “Come, que você está magrinho”. Da sacada, ele vê ao longe a multidão subindo o monte, pequena como uma fila de formigas. À noite o Giovanni conta a festa em quatro palavras, e o Linu entende que perdeu algo que só vai voltar daqui a um ano.',
        ending: { tone: 'neutro', title: 'Festa vista da sacada', message: 'Descansar foi bom, mas o Redentor só sobe o Ortobene uma vez por ano.' },
      },
    },
  },
  {
    id: 'it-h40',
    level: 'C1.2',
    cefr: 'C1',
    title: 'La perizia del violino',
    emoji: '🎻',
    summary: 'Em Cremona, na oficina da luthier Giulia, o Linu precisa decifrar fichas técnicas e um laudo de laboratório para descobrir se o violino de um cliente é mesmo um Stradivari.',
    cultural_context:
      'Em Cremona, na Lombardia, trabalharam os grandes luthiers Andrea Amati, Antonio Stradivari (1644–1737) e Giuseppe Guarneri “del Gesù”. Em 2012 a UNESCO reconheceu o saber-fazer tradicional da luteria cremonense como Patrimônio Imaterial; a cidade tem o Museo del Violino e uma escola internacional de luteria.',
    start: 'start',
    glossary: [
      ['la perizia', 'o laudo técnico'],
      ['l’avvenuta sostituzione', 'a substituição (que ocorreu)'],
      ['la dendrocronologia', 'datação pelos anéis de crescimento da madeira'],
      ['non anteriore a', 'não anterior a, no mínimo de'],
      ['se ne desume', 'daí se deduz'],
      ['la tavola / il fondo', 'o tampo / o fundo (do violino)'],
      ['la frattura risarcita', 'a rachadura consertada'],
      ['la liuteria', 'a luteria'],
    ],
    nodes: {
      start: {
        emoji: '🪵',
        text: 'Nella bottega di Giulia, a due passi da piazza del Comune, l’aria sa di vernice, di colla calda e di legno appena piallato. Linu, apprendista da un mese, sta levigando una fascia quando entra il signor Ferrario con una custodia consunta sotto il braccio. “Era di mio nonno”, dice, aprendola con reverenza, “e dentro c’è scritto Stradivari”. Giulia sbircia attraverso il foro a effe l’etichetta ingiallita, “Antonius Stradivarius Cremonensis Faciebat Anno 1716”, e sorride appena. “Di etichette così ne ho viste a centinaia”, mormora.',
        translation:
          'Na oficina da Giulia, a dois passos da piazza del Comune, o ar tem cheiro de verniz, de cola quente e de madeira recém-aplainada. O Linu, aprendiz há um mês, está lixando uma lateral quando entra o senhor Ferrario com um estojo gasto debaixo do braço. “Era do meu avô”, diz, abrindo-o com reverência, “e dentro está escrito Stradivari”. A Giulia espia pelo furo em forma de efe a etiqueta amarelada, “Antonius Stradivarius Cremonensis Faciebat Anno 1716”, e dá um sorriso discreto. “Etiquetas assim eu já vi às centenas”, murmura.',
        choices: [
          { text: 'Chiedere a Giulia perché sorride.', translation: 'Perguntar à Giulia por que ela está sorrindo.', next: 'etichette' },
          { text: 'Aiutarla subito a esaminare lo strumento.', translation: 'Ajudá-la logo a examinar o instrumento.', next: 'esame' },
        ],
      },
      etichette: {
        emoji: '🏷️',
        text: 'Più tardi, mentre Ferrario beve un caffè al bar di fronte, Giulia spiega la questione a Linu a bassa voce. Fra Ottocento e Novecento, in Europa, furono prodotti in serie moltissimi violini con etichette che riproducevano quelle dei grandi maestri cremonesi. “Non erano necessariamente falsi a scopo di frode”, precisa, “spesso l’etichetta indicava soltanto il modello di riferimento”. Ciò non toglie, aggiunge, che ogni strumento meriti un esame accurato prima di qualsiasi conclusione.',
        translation:
          'Mais tarde, enquanto o Ferrario toma um café no bar em frente, a Giulia explica a questão ao Linu em voz baixa. Entre os séculos XIX e XX, na Europa, foram produzidos em série muitíssimos violinos com etiquetas que reproduziam as dos grandes mestres cremonenses. “Não eram necessariamente falsificações com intenção de fraude”, esclarece, “muitas vezes a etiqueta indicava apenas o modelo de referência”. Isso não impede, acrescenta, que cada instrumento mereça um exame cuidadoso antes de qualquer conclusão.',
        choices: [{ text: 'Prendere la scheda tecnica e cominciare l’esame.', translation: 'Pegar a ficha técnica e começar o exame.', next: 'esame' }],
      },
      esame: {
        emoji: '🔍',
        text: 'Giulia detta, e Linu trascrive sulla scheda tecnica con la grafia più ordinata che ha. “Tavola in abete rosso a fibra regolare; fondo in due pezzi di acero marezzato; si rileva la presenza di una frattura risarcita in corrispondenza dell’anima”. Poi si ferma e aggiunge: “Si segnala inoltre l’avvenuta sostituzione del manico in epoca successiva alla costruzione”. Per una datazione attendibile, conclude, occorrerà un’analisi dendrocronologica, cioè il confronto tra gli anelli di accrescimento dell’abete e le cronologie di riferimento.',
        translation:
          'A Giulia dita, e o Linu transcreve na ficha técnica com a letra mais caprichada que tem. “Tampo em abeto-vermelho de fibra regular; fundo em duas peças de bordo ondulado; constata-se a presença de uma rachadura consertada na altura da alma”. Depois para e acrescenta: “Assinala-se ainda a substituição do braço em época posterior à construção”. Para uma datação confiável, conclui, será necessária uma análise dendrocronológica, isto é, a comparação entre os anéis de crescimento do abeto e as cronologias de referência.',
        choices: [
          { text: 'Mandare le fotografie della tavola al laboratorio.', translation: 'Mandar as fotografias do tampo para o laboratório.', next: 'risultato' },
          {
            text: '“Signor Ferrario, una buona notizia: almeno il manico è quello originale.”',
            translation: '“Senhor Ferrario, uma boa notícia: pelo menos o braço é o original.”',
            wrong: '“L’avvenuta sostituzione del manico in epoca successiva” = o braço foi substituído numa época posterior à construção. A nominalização esconde o verbo, mas o sentido é claro: o braço NÃO é o original.',
          },
        ],
      },
      risultato: {
        emoji: '📄',
        text: 'Dopo due settimane arriva la relazione del laboratorio, redatta in una prosa che Linu deve leggere tre volte. “Dall’analisi emerge una buona corrispondenza della sequenza anulare con le cronologie alpine di riferimento; l’anello più recente risulta databile al 1843. Se ne desume una realizzazione dello strumento non anteriore alla metà del XIX secolo”. Giulia gli chiede di spiegare a Ferrario, con parole semplici, che cosa significhi. Il signor Ferrario, intanto, aspetta in piedi, stringendo il cappello tra le mani.',
        translation:
          'Depois de duas semanas chega o relatório do laboratório, redigido numa prosa que o Linu precisa ler três vezes. “Da análise resulta uma boa correspondência da sequência de anéis com as cronologias alpinas de referência; o anel mais recente pode ser datado de 1843. Daí se deduz uma fabricação do instrumento não anterior a meados do século XIX”. A Giulia pede que ele explique ao Ferrario, com palavras simples, o que aquilo significa. O senhor Ferrario, enquanto isso, espera em pé, apertando o chapéu entre as mãos.',
        choices: [
          {
            text: '“L’abete della tavola cresceva ancora nel 1843: il violino non può essere di Stradivari, morto nel 1737.”',
            translation: '“O abeto do tampo ainda crescia em 1843: o violino não pode ser de Stradivari, que morreu em 1737.”',
            next: 'cliente',
          },
          {
            text: '“Il laboratorio conferma che il violino è del 1716, come dice l’etichetta.”',
            translation: '“O laboratório confirma que o violino é de 1716, como diz a etiqueta.”',
            wrong: '“Non anteriore alla metà del XIX secolo” = não anterior a meados do século XIX. Se a árvore ainda crescia em 1843, o violino é no mínimo dessa época, mais de cem anos depois da data da etiqueta e da morte de Stradivari.',
          },
        ],
      },
      cliente: {
        emoji: '🎩',
        text: 'Ferrario incassa la notizia in silenzio, poi sorride con una certa malinconia: “Il nonno ci credeva tanto”. Giulia gli fa notare che, pur non essendo né cremonese né settecentesco, lo strumento è costruito con cura e ha una voce calda e generosa. “Con un buon restauro potrebbe suonare per un altro secolo”, osserva. Ferrario racconta allora che sua nipote studia violino al conservatorio e che finora ha sempre suonato strumenti presi in prestito. Poi guarda Linu, come per chiedergli un consiglio.',
        translation:
          'O Ferrario recebe a notícia em silêncio, depois sorri com certa melancolia: “O vovô acreditava tanto nisso”. A Giulia observa que, embora não seja nem cremonense nem do século XVIII, o instrumento foi construído com cuidado e tem uma voz quente e generosa. “Com uma boa restauração, poderia tocar por mais um século”, comenta. O Ferrario conta então que a neta estuda violino no conservatório e que até agora sempre tocou instrumentos emprestados. Depois olha para o Linu, como quem pede um conselho.',
        choices: [
          { text: '“Lo faccia restaurare e lo regali a Sua nipote: così il violino del nonno torna a suonare.”', translation: '“Mande restaurar e dê de presente à sua neta: assim o violino do avô volta a tocar.”', next: 'restauro' },
          { text: '“Forse Le conviene venderlo e comprare a Sua nipote uno strumento nuovo.”', translation: '“Talvez seja melhor vendê-lo e comprar um instrumento novo para a sua neta.”', next: 'final_vendita' },
        ],
      },
      restauro: {
        emoji: '🛠️',
        text: 'Per un mese Linu aiuta Giulia a consolidare la frattura, a regolare il manico e a montare corde nuove. Alla fine lei gli detta la relazione di restauro: “Si è proceduto al consolidamento della frattura e alla revisione della tastiera. Si raccomanda di evitare l’esposizione prolungata a fonti di calore e a bruschi sbalzi di umidità”. Il giorno della consegna arriva anche la nipote di Ferrario, una ragazza timida che non riesce a smettere di sorridere. Giulia fa segno a Linu: tocca a lui spiegarle come conservare lo strumento.',
        translation:
          'Durante um mês o Linu ajuda a Giulia a consolidar a rachadura, ajustar o braço e montar cordas novas. No fim ela dita o relatório de restauração: “Procedeu-se à consolidação da rachadura e à revisão do espelho. Recomenda-se evitar a exposição prolongada a fontes de calor e a mudanças bruscas de umidade”. No dia da entrega chega também a neta do Ferrario, uma moça tímida que não consegue parar de sorrir. A Giulia faz sinal para o Linu: cabe a ele explicar como conservar o instrumento.',
        choices: [
          { text: '“Tienilo lontano dai termosifoni e dall’umidità, e ti durerà una vita.”', translation: '“Mantenha-o longe dos aquecedores e da umidade, e ele vai durar a vida inteira.”', next: 'final_bom' },
          {
            text: '“D’inverno tienilo vicino al termosifone, così il legno resta caldo e suona meglio.”',
            translation: '“No inverno, deixe-o perto do aquecedor, assim a madeira fica quente e soa melhor.”',
            wrong: 'O relatório diz “si raccomanda di evitare l’esposizione prolungata a fonti di calore”: recomenda-se evitar a exposição prolongada a fontes de calor. Deixar o violino junto do aquecedor é exatamente o que o texto desaconselha.',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'La ragazza appoggia il violino sotto il mento e suona una scala, poi una melodia lenta che riempie tutta la bottega. Ferrario si asciuga gli occhi senza vergogna, e perfino Giulia smette per un attimo di lavorare. “Non sarà uno Stradivari”, dice lei, “ma adesso è il violino di qualcuno, ed è questo che conta”. Quella sera Linu aggiorna la scheda tecnica con una riga che nessun laboratorio potrebbe scrivere: “Strumento restituito all’uso”.',
        translation:
          'A moça apoia o violino sob o queixo e toca uma escala, depois uma melodia lenta que enche a oficina inteira. O Ferrario enxuga os olhos sem vergonha, e até a Giulia para de trabalhar por um instante. “Pode não ser um Stradivari”, diz ela, “mas agora é o violino de alguém, e é isso que importa”. Naquela noite o Linu atualiza a ficha técnica com uma linha que nenhum laboratório poderia escrever: “Instrumento devolvido ao uso”.',
        ending: { tone: 'bom', title: 'Devolvido ao uso', message: 'Você decifrou as nominalizações do laudo, disse a verdade com delicadeza e devolveu a voz ao violino do avô.' },
      },
      final_vendita: {
        emoji: '💼',
        text: 'Ferrario segue il consiglio e, qualche settimana dopo, vende il violino a un commerciante di Milano. Con il ricavato compra alla nipote uno strumento moderno, costruito proprio in una bottega cremonese. Tempo dopo, però, confessa a Giulia che ogni tanto ripensa al vecchio violino del nonno. Linu archivia la scheda tecnica con un pizzico di malinconia: la relazione era impeccabile, ma la storia è finita in una vetrina.',
        translation:
          'O Ferrario segue o conselho e, algumas semanas depois, vende o violino a um comerciante de Milão. Com o dinheiro compra para a neta um instrumento moderno, feito justamente numa oficina cremonense. Tempos depois, porém, confessa à Giulia que de vez em quando pensa no velho violino do avô. O Linu arquiva a ficha técnica com uma pontinha de melancolia: o relatório estava impecável, mas a história foi parar numa vitrine.',
        ending: { tone: 'neutro', title: 'Numa vitrine', message: 'Uma decisão sensata, mas o violino do avô foi tocar a vida de outra pessoa.' },
      },
    },
  },
  {
    id: 'it-h41',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Entro e non oltre',
    emoji: '🧩',
    summary: 'Em Ravena, o Linu é aceito num estágio de restauração de mosaicos, mas antes precisa sobreviver ao “burocratese” de e-mails, avisos e guichês.',
    cultural_context:
      'Ravena foi capital do Império Romano do Ocidente, do reino ostrogodo e do Exarcado bizantino; oito dos seus monumentos, com mosaicos dos séculos V e VI, como os de San Vitale e do Mausoléu de Gala Placídia, são Patrimônio Mundial da UNESCO desde 1996. Dante Alighieri morreu em Ravena em 1321 e está sepultado lá.',
    start: 'start',
    glossary: [
      ['la S.V. (Signoria Vostra)', 'Vossa Senhoria (fórmula burocrática)'],
      ['entro e non oltre', 'até, impreterivelmente'],
      ['previa presentazione', 'mediante apresentação prévia'],
      ['subordinato a', 'condicionado a'],
      ['in corso di validità', 'dentro da validade'],
      ['il rilascio', 'a emissão (de um documento)'],
      ['lo sportello', 'o guichê'],
      ['la tessera', 'o crachá; também a pastilha do mosaico'],
    ],
    nodes: {
      start: {
        emoji: '📧',
        text: 'Linu apre la posta elettronica con il cuore in gola: la risposta del laboratorio di restauro è arrivata. “Con la presente si comunica che la S.V. è stata ammessa al tirocinio formativo presso il cantiere di restauro dei mosaici della Basilica di San Vitale. Si fa presente che l’accesso al cantiere è subordinato al rilascio del tesserino di riconoscimento, previa presentazione della documentazione indicata nell’avviso allegato”. Linu rilegge la frase tre volte: la S.V., capisce alla fine, è lui, la “Signoria Vostra” del burocratese. Fuori dalla finestra, i campanili di Ravenna sono già illuminati dal sole.',
        translation:
          'O Linu abre o e-mail com o coração na boca: chegou a resposta do laboratório de restauração. “Pela presente comunica-se que V.S.ª foi admitida no estágio formativo junto ao canteiro de restauração dos mosaicos da Basílica de San Vitale. Informa-se que o acesso ao canteiro está condicionado à emissão do crachá de identificação, mediante apresentação da documentação indicada no aviso anexo”. O Linu relê a frase três vezes: a “V.S.ª”, entende por fim, é ele, a “Vossa Senhoria” do burocratês. Pela janela, os campanários de Ravena já estão iluminados pelo sol.',
        choices: [
          { text: 'Aprire e leggere con attenzione l’avviso allegato.', translation: 'Abrir e ler com atenção o aviso anexo.', next: 'avviso' },
          {
            text: 'Presentarsi domattina direttamente al cantiere di San Vitale.',
            translation: 'Apresentar-se amanhã cedo direto no canteiro de San Vitale.',
            wrong: 'O e-mail diz que o acesso ao canteiro “è subordinato al rilascio del tesserino”: depende da emissão do crachá, que por sua vez exige documentos (“previa presentazione della documentazione”). Sem crachá, o Linu não entra.',
          },
        ],
      },
      avviso: {
        emoji: '📋',
        text: '“Ai fini del rilascio del tesserino, i tirocinanti sono tenuti a presentare allo sportello dell’Ufficio tirocini, entro e non oltre le ore 12 di venerdì, la seguente documentazione: copia di un documento d’identità in corso di validità; attestazione dell’avvenuta frequenza del corso sulla sicurezza nei cantieri; due fototessere”. Linu controlla: il passaporto scade tra due anni, e le fototessere le ha già. Del corso sulla sicurezza, invece, non sa assolutamente nulla. È mercoledì sera.',
        translation:
          '“Para fins de emissão do crachá, os estagiários devem apresentar no guichê do Setor de Estágios, até, impreterivelmente, o meio-dia de sexta-feira, a seguinte documentação: cópia de um documento de identidade dentro da validade; certificado de conclusão do curso de segurança em canteiros de obras; duas fotos 3x4”. O Linu confere: o passaporte vence daqui a dois anos, e as fotos ele já tem. Do curso de segurança, porém, não sabe absolutamente nada. É quarta-feira à noite.',
        choices: [
          { text: 'Iscriversi subito al corso online sulla sicurezza.', translation: 'Inscrever-se já no curso on-line de segurança.', next: 'corso' },
          { text: 'Andare allo sportello senza attestato, sperando nella comprensione dell’impiegata.', translation: 'Ir ao guichê sem o certificado, contando com a compreensão da funcionária.', next: 'sportello_no' },
          {
            text: 'Rimandare il corso a lunedì, per farlo con calma.',
            translation: 'Deixar o curso para segunda-feira, para fazê-lo com calma.',
            wrong: 'O aviso diz “entro e non oltre le ore 12 di venerdì”: até sexta ao meio-dia, sem prorrogação. Deixar o curso para segunda é perder o prazo.',
          },
        ],
      },
      sportello_no: {
        emoji: '🪟',
        text: 'Giovedì mattina la signora Bassi, dietro il vetro dello sportello, esamina i documenti con la lentezza di chi ha visto tutto. “In assenza dell’attestazione non è possibile procedere al rilascio del tesserino”, recita, senza alzare lo sguardo. Linu prova a spiegare, a sorridere, perfino a raccontare che viene dal Polo Sud. La signora finalmente alza gli occhi e, con un sospiro, gli ricorda che il termine è venerdì alle dodici: “entro e non oltre”.',
        translation:
          'Na quinta de manhã, a dona Bassi, atrás do vidro do guichê, examina os documentos com a lentidão de quem já viu de tudo. “Na ausência do certificado, não é possível proceder à emissão do crachá”, recita, sem levantar os olhos. O Linu tenta explicar, sorrir, até contar que vem do Polo Sul. A senhora finalmente levanta os olhos e, com um suspiro, lembra que o prazo é sexta ao meio-dia: “impreterivelmente”.',
        choices: [
          { text: 'Fare il corso quella notte stessa.', translation: 'Fazer o curso naquela mesma noite.', next: 'corso' },
          { text: 'Protestare che la burocrazia è assurda e andarsene.', translation: 'Protestar que a burocracia é absurda e ir embora.', next: 'final_rimandato' },
        ],
      },
      corso: {
        emoji: '⛑️',
        text: 'Il corso online dura quattro ore ed è scritto in una lingua che Linu battezza subito “sicurezzese”. “Il lavoratore è tenuto all’utilizzo dei dispositivi di protezione individuale in dotazione”; “si procede all’individuazione e alla valutazione dei rischi”; “è fatto divieto di stazionamento sotto i carichi sospesi”. Alle due di notte Linu supera il test finale con ventotto risposte esatte su trenta. Stampa l’attestato e lo appoggia sul comodino, come un trofeo.',
        translation:
          'O curso on-line dura quatro horas e é escrito numa língua que o Linu logo batiza de “segurancês”. “O trabalhador é obrigado a utilizar os equipamentos de proteção individual fornecidos”; “procede-se à identificação e à avaliação dos riscos”; “é proibida a permanência sob cargas suspensas”. Às duas da manhã o Linu passa na prova final com vinte e oito acertos em trinta. Imprime o certificado e o deixa na mesinha de cabeceira, como um troféu.',
        choices: [{ text: 'Portare i documenti allo sportello.', translation: 'Levar os documentos ao guichê.', next: 'sportello' }],
      },
      sportello: {
        emoji: '🏷️',
        text: 'Venerdì, alle undici e cinquanta, Linu prende il numero 47 e aspetta il suo turno davanti allo sportello della signora Bassi. Lei controlla ogni foglio, confronta le fototessere con il becco di Linu, timbra, firma e timbra di nuovo. “Complimenti”, dice infine, porgendogli il tesserino plastificato, “è il primo tirocinante da tre anni a questa parte che consegna tutto in regola”. Linu non capisce se sia un elogio a lui o una critica a tutti gli altri, e decide di prenderlo come un elogio.',
        translation:
          'Na sexta, às onze e cinquenta, o Linu pega a senha 47 e espera a sua vez diante do guichê da dona Bassi. Ela confere cada folha, compara as fotos com o bico do Linu, carimba, assina e carimba de novo. “Parabéns”, diz por fim, entregando o crachá plastificado, “é o primeiro estagiário em três anos que entrega tudo em ordem”. O Linu não sabe se é um elogio a ele ou uma crítica a todos os outros, e decide encarar como elogio.',
        choices: [{ text: 'Andare al cantiere di San Vitale lunedì mattina.', translation: 'Ir ao canteiro de San Vitale na segunda de manhã.', next: 'tessere' }],
      },
      tessere: {
        emoji: '✨',
        text: 'Lunedì mattina, nel cantiere di San Vitale, il restauratore Franco guarda il tesserino appeso al collo di Linu e ride. “Adesso che hai la tessera, ti tocca imparare a tagliare le tessere”, dice, porgendogli una martellina e un blocchetto di smalto verde. Gli spiega che i mosaicisti bizantini inclinavano leggermente le tessere d’oro, perché la luce vi rimbalzasse in modi sempre diversi. Sopra le loro teste, l’imperatore Giustiniano e il suo corteo osservano la scena da quasi quindici secoli.',
        translation:
          'Na segunda de manhã, no canteiro de San Vitale, o restaurador Franco olha o crachá pendurado no pescoço do Linu e ri. “Agora que você tem a tessera (o crachá), vai ter que aprender a cortar as tessere (as pastilhas)”, diz, entregando um martelinho e um bloquinho de esmalte verde. Explica que os mosaicistas bizantinos inclinavam levemente as pastilhas de ouro para que a luz batesse nelas de jeitos sempre diferentes. Acima das cabeças deles, o imperador Justiniano e o seu cortejo observam a cena há quase quinze séculos.',
        choices: [{ text: 'Mettersi al lavoro con la martellina.', translation: 'Começar a trabalhar com o martelinho.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Per tre mesi Linu taglia tessere, pulisce fughe e impara a distinguere venti sfumature di blu. La domenica passa a salutare la tomba di Dante, accanto alla basilica di San Francesco, e ci lascia sempre un saluto a bassa voce. A fine tirocinio Franco gli regala una tessera d’oro, avanzata da un restauro di tanti anni prima. “Questa non scade mai”, gli dice, “a differenza dell’altra”.',
        translation:
          'Durante três meses o Linu corta pastilhas, limpa rejuntes e aprende a distinguir vinte tons de azul. Aos domingos passa para visitar o túmulo de Dante, ao lado da basílica de San Francesco, e sempre deixa ali um cumprimento em voz baixa. No fim do estágio, o Franco lhe dá de presente uma pastilha de ouro, que sobrou de uma restauração de muitos anos antes. “Esta aqui não vence nunca”, diz, “ao contrário da outra”.',
        ending: { tone: 'bom', title: 'Duas tessere', message: 'Você decifrou o burocratês, cumpriu o prazo e ganhou acesso a quinze séculos de mosaicos.' },
      },
      final_rimandato: {
        emoji: '📨',
        text: 'Linu se ne va sbattendo la porta, convinto di avere ragione. Il venerdì passa, il termine scade, e il suo posto viene assegnato al primo candidato della lista d’attesa. Qualche giorno dopo riceve una lettera dal tono impeccabile: “Si prende atto della mancata presentazione della documentazione nei termini previsti”. Linu la legge, la capisce perfettamente e, per la prima volta, trova il burocratese quasi poetico nella sua crudeltà.',
        translation:
          'O Linu vai embora batendo a porta, convencido de que tem razão. A sexta passa, o prazo vence, e a vaga dele é dada ao primeiro candidato da lista de espera. Alguns dias depois ele recebe uma carta de tom impecável: “Registra-se a não apresentação da documentação no prazo previsto”. O Linu lê, entende perfeitamente e, pela primeira vez, acha o burocratês quase poético na sua crueldade.',
        ending: { tone: 'neutro', title: 'Prazo vencido', message: 'A burocracia pode ser absurda, mas “entro e non oltre” quer dizer exatamente o que diz.' },
      },
    },
  },
  {
    id: 'it-h42',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Duemila battute',
    emoji: '📰',
    summary: 'Estagiário num jornal de Roma, o Linu precisa cobrir o juramento dos novos guardas suíços no Vaticano com o estilo seco e preciso da imprensa italiana.',
    cultural_context:
      'A Cidade do Vaticano, com cerca de 44 hectares, é o menor Estado soberano do mundo. A Guarda Suíça Pontifícia protege o papa desde 1506; todo 6 de maio os novos recrutas prestam juramento, em memória dos 147 guardas mortos no Saque de Roma, em 1527. Cada um jura na própria língua: alemão, francês, italiano ou romanche.',
    start: 'start',
    glossary: [
      ['la battuta', 'o caractere (na contagem de um texto)'],
      ['il pezzo', 'a matéria, o artigo'],
      ['l’attacco', 'o lide, a abertura da matéria'],
      ['il lancio d’agenzia', 'o despacho de agência de notícias'],
      ['il caporedattore', 'o editor-chefe'],
      ['sarebbe superiore', 'seria superior (condicional de notícia não confirmada)'],
      ['le indiscrezioni', 'as informações extraoficiais'],
      ['il titolo', 'a manchete'],
    ],
    nodes: {
      start: {
        emoji: '🗞️',
        text: 'Nella redazione cultura di un quotidiano romano, il caporedattore Rinaldi chiama Linu alla sua scrivania senza staccare gli occhi dallo schermo. “Domani, 6 maggio, c’è il giuramento delle nuove reclute della Guardia Svizzera Pontificia, nel Cortile di San Damaso”, dice. “Mi servono duemila battute entro le sei: attacco forte, fatti verificati, niente aggettivi inutili”. Poi gli porge un pass stampa e riprende a telefonare, come se la conversazione fosse finita da un pezzo.',
        translation:
          'Na editoria de cultura de um jornal romano, o editor-chefe Rinaldi chama o Linu à sua mesa sem tirar os olhos da tela. “Amanhã, 6 de maio, é o juramento dos novos recrutas da Guarda Suíça Pontifícia, no Pátio de São Dâmaso”, diz. “Preciso de duas mil batidas até as seis: lide forte, fatos checados, nada de adjetivos inúteis”. Depois lhe entrega uma credencial de imprensa e volta ao telefone, como se a conversa tivesse terminado havia muito tempo.',
        choices: [
          { text: '“Ricevuto: duemila battute entro le sei.”', translation: '“Entendido: duas mil batidas até as seis.”', next: 'documentazione' },
          {
            text: '“Duemila parole? Ma è quasi un saggio!”',
            translation: '“Duas mil palavras? Mas isso é quase um ensaio!”',
            wrong: '“Battute” são caracteres (incluindo os espaços), não palavras. Duas mil batidas dão um texto curto, de umas trezentas palavras: o tamanho normal de uma notícia.',
          },
        ],
      },
      documentazione: {
        emoji: '📠',
        text: 'Tornato al suo posto, Linu legge il lancio d’agenzia della mattina. “Vaticano: domani il giuramento delle nuove Guardie Svizzere. La cerimonia, che si tiene ogni anno il 6 maggio, ricorda le 147 guardie cadute nel 1527 durante il Sacco di Roma. Secondo indiscrezioni non confermate, quest’anno il numero delle reclute sarebbe superiore alla media degli ultimi anni”. Linu sottolinea date e cifre, e mette un grosso punto interrogativo accanto all’ultima frase.',
        translation:
          'De volta ao seu lugar, o Linu lê o despacho de agência da manhã. “Vaticano: amanhã o juramento dos novos Guardas Suíços. A cerimônia, realizada todos os anos em 6 de maio, lembra os 147 guardas mortos em 1527 durante o Saque de Roma. Segundo informações extraoficiais não confirmadas, este ano o número de recrutas seria superior à média dos últimos anos”. O Linu sublinha datas e números e põe um grande ponto de interrogação ao lado da última frase.',
        choices: [{ text: 'Andare al Cortile di San Damaso per la cerimonia.', translation: 'Ir ao Pátio de São Dâmaso para a cerimônia.', next: 'cortile' }],
      },
      cortile: {
        emoji: '⚔️',
        text: 'Il pomeriggio seguente, nel cortile, le reclute sfilano nella celebre uniforme a strisce blu, rosse e gialle, con l’elmo piumato. A una a una si avvicinano alla bandiera, la stringono con la mano sinistra e alzano la destra con tre dita aperte, pronunciando il giuramento nella propria lingua. Linu scrive senza sosta, a caccia di dettagli: lo scricchiolio degli stivali, il silenzio tra una formula e l’altra, un padre che si asciuga una lacrima in prima fila. Alle quattro corre in redazione con il taccuino pieno e due ore per scrivere.',
        translation:
          'Na tarde seguinte, no pátio, os recrutas desfilam com o célebre uniforme listrado de azul, vermelho e amarelo, e o elmo com plumas. Um a um, aproximam-se da bandeira, seguram-na com a mão esquerda e levantam a direita com três dedos abertos, pronunciando o juramento na própria língua. O Linu escreve sem parar, à caça de detalhes: o rangido das botas, o silêncio entre uma fórmula e outra, um pai que enxuga uma lágrima na primeira fila. Às quatro ele corre para a redação com o caderninho cheio e duas horas para escrever.',
        choices: [{ text: 'Sedersi alla scrivania e cominciare il pezzo.', translation: 'Sentar à mesa e começar a matéria.', next: 'attacco' }],
      },
      attacco: {
        emoji: '⌨️',
        text: 'Davanti al foglio bianco, Linu prova tre attacchi diversi e li legge a mezza voce per sentire quale suona meglio. Il primo: “Tre dita alzate, la mano sinistra sulla bandiera: così, ieri pomeriggio, le nuove reclute della Guardia Svizzera hanno giurato nel Cortile di San Damaso”. Il secondo: “In un tripudio di colori e di emozioni indescrivibili, in una giornata che resterà per sempre nel cuore di tutti…”. Il terzo: “Mai così tante reclute: quest’anno il numero dei nuovi giurati ha battuto ogni record, come confermato dal Vaticano”.',
        translation:
          'Diante da folha em branco, o Linu testa três aberturas diferentes e as lê a meia-voz para ouvir qual soa melhor. A primeira: “Três dedos erguidos, a mão esquerda na bandeira: foi assim que, ontem à tarde, os novos recrutas da Guarda Suíça prestaram juramento no Pátio de São Dâmaso”. A segunda: “Num turbilhão de cores e de emoções indescritíveis, num dia que ficará para sempre no coração de todos…”. A terceira: “Nunca houve tantos recrutas: este ano o número de novos juramentados bateu todos os recordes, como confirmou o Vaticano”.',
        choices: [
          { text: 'Scegliere il primo attacco.', translation: 'Escolher a primeira abertura.', next: 'redazione' },
          { text: 'Scegliere il secondo attacco.', translation: 'Escolher a segunda abertura.', next: 'boccia' },
          {
            text: 'Scegliere il terzo attacco.',
            translation: 'Escolher a terceira abertura.',
            wrong: 'O despacho dizia que o número de recrutas “sarebbe superiore alla media”, segundo “indiscrezioni non confermate”. O condicional jornalístico marca uma informação NÃO confirmada: apresentá-la como recorde confirmado pelo Vaticano é um erro grave de apuração.',
          },
        ],
      },
      boccia: {
        emoji: '✂️',
        text: 'Rinaldi legge le prime righe e si toglie gli occhiali con un gesto teatrale. “Tripudio? Emozioni indescrivibili? Se sono indescrivibili, non descriverle”, dice. “Questo è un tema delle medie, non un pezzo: il lettore vuole sapere chi, che cosa, dove, quando e perché”. Gli restituisce il foglio e gli concede quaranta minuti per riscriverlo da capo.',
        translation:
          'O Rinaldi lê as primeiras linhas e tira os óculos com um gesto teatral. “Turbilhão? Emoções indescritíveis? Se são indescritíveis, não as descreva”, diz. “Isso é redação de colégio, não uma matéria: o leitor quer saber quem, o quê, onde, quando e por quê”. Devolve a folha e lhe dá quarenta minutos para reescrever tudo do zero.',
        choices: [{ text: 'Riscrivere il pezzo partendo dal primo attacco.', translation: 'Reescrever a matéria a partir da primeira abertura.', next: 'redazione' }],
      },
      redazione: {
        emoji: '📝',
        text: 'Rinaldi legge il pezzo in silenzio, taglia due aggettivi, sposta una virgola e annuisce. “Manca il titolo”, dice, “e il titolo lo scegli tu: ricordati che è la prima cosa che il lettore vede e l’ultima che dimentica”. Linu ne propone due: “Guardie Svizzere, il giuramento delle nuove reclute nel ricordo del 1527” oppure “Choc in Vaticano: record storico di reclute!”. Intorno a loro, la redazione fa finta di non ascoltare.',
        translation:
          'O Rinaldi lê a matéria em silêncio, corta dois adjetivos, muda uma vírgula de lugar e aprova com a cabeça. “Falta a manchete”, diz, “e a manchete quem escolhe é você: lembre que é a primeira coisa que o leitor vê e a última que esquece”. O Linu propõe duas: “Guardas Suíços, o juramento dos novos recrutas em memória de 1527” ou “Choque no Vaticano: recorde histórico de recrutas!”. Ao redor, a redação finge que não está ouvindo.',
        choices: [
          { text: 'Proporre il primo titolo.', translation: 'Propor a primeira manchete.', next: 'final_bom' },
          { text: 'Proporre il secondo titolo.', translation: 'Propor a segunda manchete.', next: 'final_titolone' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Rinaldi approva il titolo senza cambiare una parola, cosa che, a detta dei colleghi, non succedeva da anni. Il giorno dopo il pezzo esce nelle pagine della cultura, con la firma di Linu in fondo, piccola ma leggibile. Un vecchio cronista gli passa accanto e gli dice soltanto: “Sobrio. Bravo”. Linu ritaglia l’articolo e lo appende sopra la scrivania, accanto al pass stampa del Cortile di San Damaso.',
        translation:
          'O Rinaldi aprova a manchete sem mudar uma palavra, coisa que, segundo os colegas, não acontecia havia anos. No dia seguinte a matéria sai nas páginas de cultura, com a assinatura do Linu no pé, pequena mas legível. Um repórter veterano passa ao lado dele e diz apenas: “Sóbrio. Muito bem”. O Linu recorta o artigo e o pendura acima da mesa, ao lado da credencial do Pátio de São Dâmaso.',
        ending: { tone: 'bom', title: 'Sóbrio. Muito bem.', message: 'Você distinguiu fato de boato pelo condicional, cortou os adjetivos e escreveu uma matéria de verdade.' },
      },
      final_titolone: {
        emoji: '🖍️',
        text: 'Rinaldi guarda il secondo titolo, poi guarda Linu, e scuote la testa lentamente. “Choc? Record storico? Per una notizia che nessuno ha confermato?”, chiede, e cancella tutto con due colpi di penna. Il pezzo esce con un titolo scritto da lui, sobrio e preciso, e con la firma di Linu in fondo. È pur sempre il suo primo articolo pubblicato, ma Linu impara a sue spese che un titolo gridato può rovinare un pezzo onesto.',
        translation:
          'O Rinaldi olha para a segunda manchete, depois para o Linu, e balança a cabeça devagar. “Choque? Recorde histórico? Por uma notícia que ninguém confirmou?”, pergunta, e risca tudo com duas canetadas. A matéria sai com uma manchete escrita por ele, sóbria e precisa, e com a assinatura do Linu no pé. Ainda assim é o seu primeiro artigo publicado, mas o Linu aprende na pele que uma manchete sensacionalista pode estragar uma matéria honesta.',
        ending: { tone: 'neutro', title: 'Manchete riscada', message: 'A matéria saiu, mas a manchete sensacionalista transformava boato em fato. O editor salvou o texto.' },
      },
    },
  },
  {
    id: 'it-h43',
    level: 'C2',
    cefr: 'C2',
    title: 'La sprezzatura',
    emoji: '🏰',
    summary: 'Em Urbino, um velho professor ensina ao Linu a “sprezzatura” de Castiglione na véspera de um banquete renascentista em que ele terá de recitar um soneto.',
    cultural_context:
      'Em Urbino, nas Marcas, nasceu Rafael Sanzio em 1483, filho de Giovanni Santi, pintor da corte dos Montefeltro. No Palazzo Ducale Baldassarre Castiglione ambientou “Il Cortegiano” (1528), onde aparece a ideia de “sprezzatura”: fazer as coisas difíceis parecerem fáceis, escondendo o esforço. O centro histórico de Urbino é Patrimônio Mundial da UNESCO desde 1998.',
    start: 'start',
    glossary: [
      ['la sprezzatura', 'elegância sem esforço aparente (não é “desprezo”)'],
      ['l’affettazione', 'afetação, esforço à mostra'],
      ['giunse / salì / disse', 'chegou / subiu / disse (passato remoto)'],
      ['v’è', 'há (forma literária de “c’è”)'],
      ['voi (cortesia)', 'vós (tratamento respeitoso antigo)'],
      ['chi troppo vuole nulla stringe', 'quem tudo quer nada tem'],
      ['non ragioniam di lor, ma guarda e passa', 'não falemos deles: olha e segue (Dante, Inferno III)'],
      ['il convitato', 'o conviva, o convidado do banquete'],
    ],
    nodes: {
      start: {
        emoji: '🌆',
        text: 'Giunse Linu a Urbino sul far della sera, quando le torri del Palazzo Ducale, affilate come matite, si tingevano d’un rosa che pareva dipinto. Salì per vicoli tanto ripidi che più d’una volta dovette fermarsi a riprender fiato, e a ogni sosta la città gli si mostrava più bella, come una dama che si conceda a poco a poco. Sulla soglia d’una libreria antiquaria lo attendeva il professor Ottaviano, vecchio studioso del Rinascimento, magro e cortese come un personaggio uscito da un libro. “Voi siete dunque il pinguino viaggiatore”, gli disse, porgendogli la mano con una leggerezza d’altri tempi. “Giungete a proposito: domani, alla Festa del Duca, v’è un banchetto, e io ho promesso che vi avreste recitato un sonetto”.',
        translation:
          'Chegou o Linu a Urbino ao cair da tarde, quando as torres do Palazzo Ducale, afiadas como lápis, se tingiam de um rosa que parecia pintado. Subiu por vielas tão íngremes que mais de uma vez teve de parar para retomar o fôlego, e a cada parada a cidade se mostrava mais bela, como uma dama que se revela aos poucos. À porta de uma livraria de livros antigos esperava-o o professor Ottaviano, velho estudioso do Renascimento, magro e cortês como uma personagem saída de um livro. “Sois vós, então, o pinguim viajante”, disse-lhe, estendendo a mão com uma leveza de outros tempos. “Chegais em boa hora: amanhã, na Festa do Duque, há um banquete, e eu prometi que ali recitaríeis um soneto”.',
        choices: [
          { text: '“Ne sono onorato, professore; ma ditemi come si fa a non sfigurare.”', translation: '“Sinto-me honrado, professor; mas dizei-me como se faz para não passar vergonha.”', next: 'biblioteca' },
          {
            text: '“Benissimo: domani vi ascolterò recitare con piacere.”',
            translation: '“Ótimo: amanhã vou ouvi-lo recitar com prazer.”',
            wrong: 'O professor trata o Linu por “voi” (vós, cortesia antiga) e diz “ho promesso che vi avreste recitato un sonetto”: prometeu que o próprio Linu recitaria ali (“vi” = lá, no banquete). Quem vai recitar é o Linu, não o professor.',
          },
        ],
      },
      biblioteca: {
        emoji: '📜',
        text: 'Nella penombra della libreria, fra odore di carta e di polvere antica, il professore trasse da uno scaffale un volume rilegato in pelle. “Il Cortegiano del Castiglione”, disse, “che proprio in questo palazzo ambientò le conversazioni della corte più raffinata d’Italia”. Lesse ad alta voce, con la cadenza di chi recita una preghiera: “usar in ogni cosa una certa sprezzatura, che nasconda l’arte e dimostri ciò che si fa e dice venir fatto senza fatica e quasi senza pensarvi”. Poi chiuse il libro e guardò Linu al di sopra degli occhiali. “Ecco tutto il segreto, amico mio: e ora ditemi che cosa ne avete inteso”.',
        translation:
          'Na penumbra da livraria, entre cheiro de papel e de poeira antiga, o professor tirou de uma estante um volume encadernado em couro. “O Cortegiano, de Castiglione”, disse, “que justamente neste palácio ambientou as conversas da corte mais refinada da Itália”. Leu em voz alta, com a cadência de quem reza: “usar em todas as coisas uma certa sprezzatura, que esconda a arte e mostre que o que se faz e diz é feito sem esforço e quase sem pensar”. Depois fechou o livro e olhou para o Linu por cima dos óculos. “Eis todo o segredo, meu amigo: e agora dizei-me o que entendestes”.',
        choices: [
          {
            text: '“Che bisogna nascondere la fatica sotto la grazia, e far parere facile ciò che è difficile.”',
            translation: '“Que é preciso esconder o esforço sob a graça, e fazer parecer fácil o que é difícil.”',
            next: 'prove',
          },
          {
            text: '“Che bisogna mostrare disprezzo per gli ospiti, così da sembrare superiori.”',
            translation: '“Que é preciso mostrar desprezo pelos convidados, para parecer superior.”',
            wrong: '“Sprezzatura” vem de “sprezzare”, mas em Castiglione não é desprezo pelos outros: é a arte de esconder o esforço, “che nasconda l’arte” e faça tudo parecer feito “senza fatica”. Cuidado com a semelhança com o português “desprezo”.',
          },
        ],
      },
      prove: {
        emoji: '🕯️',
        text: 'Quella notte Linu non chiuse occhio: scrisse, cancellò, riscrisse, contò e ricontò le sillabe d’ogni endecasillabo finché non gli dolsero le penne. All’alba il sonetto c’era, ma era gonfio d’aggettivi e di rime preziose, e a rileggerlo pareva un pavone che facesse la ruota. La locandiera, salendo col caffè, lo trovò curvo sul tavolo e scosse il capo. “Chi troppo vuole nulla stringe”, sentenziò, posando la tazza, “e voi, figliolo, stringete così forte che vi scapperà tutto di mano”. Linu guardò il foglio, poi la finestra, dove il sole illuminava i tetti come per invitarlo fuori.',
        translation:
          'Naquela noite o Linu não pregou o olho: escreveu, apagou, reescreveu, contou e recontou as sílabas de cada decassílabo até doerem as penas. Ao amanhecer o soneto estava pronto, mas inchado de adjetivos e de rimas rebuscadas, e ao relê-lo parecia um pavão abrindo a cauda. A dona da hospedaria, subindo com o café, encontrou-o curvado sobre a mesa e balançou a cabeça. “Quem tudo quer nada tem”, sentenciou, pousando a xícara, “e vós, meu filho, apertais com tanta força que tudo vos escapará das mãos”. O Linu olhou para a folha, depois para a janela, onde o sol iluminava os telhados como se o convidasse a sair.',
        choices: [
          { text: 'Uscire a passeggiare fino alla casa natale di Raffaello.', translation: 'Sair para passear até a casa natal de Rafael.', next: 'raffaello' },
          { text: 'Restare a limare il sonetto fino al banchetto.', translation: 'Ficar lapidando o soneto até o banquete.', next: 'veglia' },
        ],
      },
      raffaello: {
        emoji: '🎨',
        text: 'Discese per la via che porta il nome del pittore e si fermò davanti alla casa dov’egli era nato, nel 1483, figlio d’un pittore di corte. Nelle stanze basse e silenziose, Linu pensò a quel ragazzo che avrebbe dipinto volti così sereni da sembrare nati da sé, senza fatica alcuna. Eppure, rifletté, dietro ogni sorriso delle sue Madonne dovevano esserci state mille prove, mille disegni gettati via. Capì allora che la sprezzatura non era pigrizia né disprezzo, ma la fatica così ben digerita da non lasciare traccia. Tornò alla locanda leggero, cancellò metà degli aggettivi e si concesse un sonno di due ore.',
        translation:
          'Desceu pela rua que leva o nome do pintor e parou diante da casa onde ele nascera, em 1483, filho de um pintor da corte. Nos cômodos baixos e silenciosos, o Linu pensou naquele menino que pintaria rostos tão serenos que pareciam ter nascido sozinhos, sem esforço algum. E no entanto, refletiu, por trás de cada sorriso das suas Madonas devia haver mil tentativas, mil desenhos jogados fora. Compreendeu então que a sprezzatura não era preguiça nem desprezo, mas o esforço tão bem digerido que não deixa rastro. Voltou leve para a hospedaria, apagou metade dos adjetivos e se permitiu duas horas de sono.',
        choices: [{ text: 'Vestirsi e salire al Palazzo Ducale per il banchetto.', translation: 'Vestir-se e subir ao Palazzo Ducale para o banquete.', next: 'banchetto' }],
      },
      veglia: {
        emoji: '😵',
        text: 'Rimase dunque a limare, e a ogni ritocco il sonetto s’appesantiva come una veste bagnata. Verso mezzogiorno, vinto dalla stanchezza, appoggiò il capo sul foglio e cadde in un sonno profondo, popolato di duchi e di rime. Lo destarono le campane del Duomo, e con orrore s’accorse che il sole era già basso. Dalla finestra giungeva l’eco dei tamburi della festa, che già sfilava per le vie. Aveva il becco macchiato d’inchiostro e il sonetto stropicciato in mano.',
        translation:
          'Ficou, pois, lapidando, e a cada retoque o soneto ficava mais pesado, como uma roupa molhada. Perto do meio-dia, vencido pelo cansaço, apoiou a cabeça na folha e caiu num sono profundo, povoado de duques e de rimas. Acordaram-no os sinos da catedral, e com horror percebeu que o sol já estava baixo. Da janela chegava o eco dos tambores da festa, que já desfilava pelas ruas. Tinha o bico manchado de tinta e o soneto amassado na mão.',
        choices: [
          { text: 'Correre al palazzo così com’è.', translation: 'Correr ao palácio do jeito que está.', next: 'banchetto' },
          { text: 'Rinunciare e restare alla locanda.', translation: 'Desistir e ficar na hospedaria.', next: 'final_sonno' },
        ],
      },
      banchetto: {
        emoji: '🍷',
        text: 'Nel cortile d’onore del Palazzo Ducale, sotto arcate armoniose come una frase ben costruita, le tavole erano imbandite all’antica, e i convitati vestivano velluti e broccati. Quando il professore lo presentò, Linu si alzò e cominciò a recitare; ma, giunto alla seconda quartina, la memoria gli si svuotò come una brocca rovesciata. Qualcuno, in fondo alla tavola, si lasciò sfuggire una risatina. Il professor Ottaviano, senza scomporsi, si chinò verso di lui e gli sussurrò il verso di Dante: “Non ragioniam di lor, ma guarda e passa”. Tutti gli occhi erano su di lui, e il silenzio pareva durare un secolo.',
        translation:
          'No pátio de honra do Palazzo Ducale, sob arcadas harmoniosas como uma frase bem construída, as mesas estavam postas à moda antiga, e os convivas vestiam veludos e brocados. Quando o professor o apresentou, o Linu se levantou e começou a recitar; mas, ao chegar à segunda quadra, a memória se esvaziou como uma jarra virada. Alguém, no fundo da mesa, deixou escapar uma risadinha. O professor Ottaviano, sem se abalar, inclinou-se para ele e sussurrou o verso de Dante: “Não falemos deles: olha e passa”. Todos os olhos estavam nele, e o silêncio parecia durar um século.',
        choices: [
          {
            text: 'Sorridere, confessare con grazia la dimenticanza e improvvisare un verso nuovo.',
            translation: 'Sorrir, confessar com graça o esquecimento e improvisar um verso novo.',
            next: 'final_bom',
          },
          { text: 'Tirar fuori il foglio e leggere tutto con enfasi, dall’inizio.', translation: 'Tirar a folha do bolso e ler tudo com ênfase, desde o começo.', next: 'final_affettato' },
          {
            text: 'Interrompersi per rispondere per le rime a chi ha riso.',
            translation: 'Interromper-se para responder à altura a quem riu.',
            wrong: 'O professor citou Dante: “Non ragioniam di lor, ma guarda e passa” (não falemos deles: olha e segue adiante). O conselho é ignorar quem riu e continuar, não parar para discutir.',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu sorrise, come se la dimenticanza fosse parte del programma, e disse: “Il verso m’è fuggito, signori, come fuggono le cose belle; ve ne offro un altro, nato adesso”. E improvvisò due versi un po’ zoppicanti sulla luce di Urbino al tramonto, che tuttavia strapparono un applauso sincero. Il professore levò il calice e dichiarò che quella era sprezzatura della più fine qualità, degna della corte di Guidobaldo. A fine serata una signora gli confidò che il verso dimenticato l’avrebbe scordato presto, ma quello improvvisato no. E Linu comprese che, talvolta, la grazia consiste nel cadere con eleganza.',
        translation:
          'O Linu sorriu, como se o esquecimento fizesse parte do programa, e disse: “O verso me fugiu, senhores, como fogem as coisas belas; ofereço-vos outro, nascido agora”. E improvisou dois versos um pouco mancos sobre a luz de Urbino ao pôr do sol, que mesmo assim arrancaram um aplauso sincero. O professor ergueu a taça e declarou que aquilo era sprezzatura da mais fina qualidade, digna da corte de Guidobaldo. No fim da noite, uma senhora lhe confidenciou que do verso esquecido logo se esqueceria, mas do improvisado não. E o Linu compreendeu que, às vezes, a graça consiste em cair com elegância.',
        ending: { tone: 'bom', title: 'Cair com elegância', message: 'Você entendeu a sprezzatura de Castiglione, seguiu o conselho de Dante e transformou o tropeço em graça.' },
      },
      final_affettato: {
        emoji: '🦚',
        text: 'Linu trasse di tasca il foglio e lesse tutto d’un fiato, gonfiando la voce a ogni rima preziosa. Gli applausi furono cortesi, ma brevi, come quelli che si concedono a un bambino che ha recitato la poesia di Natale. Il professore gli batté una mano sulla spalla, con indulgenza, e gli ricordò che il Castiglione chiamava “affettazione” proprio quel mostrare lo sforzo. Linu tornò alla locanda con il sonetto intero e la sensazione d’aver perduto qualcosa. Sul comodino, il Cortegiano lo guardava, aperto alla pagina della sprezzatura.',
        translation:
          'O Linu tirou a folha do bolso e leu tudo de um fôlego só, inflando a voz a cada rima rebuscada. Os aplausos foram corteses, mas breves, como os que se concedem a uma criança que recitou a poesia de Natal. O professor deu-lhe um tapinha no ombro, com indulgência, e lembrou que Castiglione chamava de “afetação” justamente esse mostrar o esforço. O Linu voltou à hospedaria com o soneto inteiro e a sensação de ter perdido alguma coisa. Na mesinha de cabeceira, o Cortegiano o olhava, aberto na página da sprezzatura.',
        ending: { tone: 'neutro', title: 'Afetação', message: 'O soneto foi recitado inteiro, mas o esforço ficou à mostra: o contrário da sprezzatura.' },
      },
      final_sonno: {
        emoji: '🌙',
        text: 'Linu non ebbe cuore di presentarsi con il becco sporco d’inchiostro e un sonetto che non ricordava più. Dalla finestra della locanda udì gli applausi, la musica, il tintinnio dei calici, e si sentì come chi guarda una festa attraverso un vetro. Il giorno dopo il professore gli mandò un biglietto di poche righe, senza rimproveri. “Chi troppo vuole nulla stringe”, vi era scritto, “ma chi non risica non rosica”. Linu lo ripiegò con cura e lo tenne a lungo nel taccuino, come un avvertimento.',
        translation:
          'O Linu não teve coragem de se apresentar com o bico sujo de tinta e um soneto de que já não se lembrava. Da janela da hospedaria ouviu os aplausos, a música, o tilintar das taças, e sentiu-se como quem olha uma festa através de um vidro. No dia seguinte, o professor lhe mandou um bilhete de poucas linhas, sem censuras. “Quem tudo quer nada tem”, estava escrito, “mas quem não arrisca não petisca”. O Linu o dobrou com cuidado e o guardou por muito tempo no caderninho, como uma advertência.',
        ending: { tone: 'neutro', title: 'A festa atrás do vidro', message: 'Perfeccionismo demais e coragem de menos: o banquete aconteceu sem o soneto.' },
      },
    },
  },
  {
    id: 'it-h44',
    level: 'C2',
    cefr: 'C2',
    title: 'La batana e la luna',
    emoji: '⛵',
    summary: 'Em Rovinj (Rovigno), na Ístria, o Linu sai à noite para pescar com o velho Nini num barco tradicional e aprende a ler o mar pelo campanário de Santa Eufêmia.',
    cultural_context:
      'Rovinj (Rovigno, em italiano), na Ístria croata, é oficialmente bilíngue e abriga uma comunidade italiana histórica, que fala também o dialeto vêneto da Ístria. A batana, barco de fundo chato dos pescadores locais, tem hoje um ecomuseu dedicado a ela, e as bitinade são cantos tradicionais em que as vozes imitam instrumentos. No alto da cidade, a igreja de Santa Eufêmia domina o porto.',
    start: 'start',
    glossary: [
      ['vien, fio', 'vem, filho (vêneto da Ístria)'],
      ['la luna no speta', 'a lua não espera (vêneto)'],
      ['tien d’ocio', 'fica de olho (vêneto; em italiano, tieni d’occhio)'],
      ['xe', 'é, está (vêneto; em italiano, è)'],
      ['la batana', 'barco de pesca de fundo chato de Rovigno'],
      ['la bitinada', 'canto rovignês em que as vozes imitam instrumentos'],
      ['la bruma', 'a bruma, a neblina do mar'],
      ['levò / sorse / giunse', 'levantou / surgiu / chegou (passato remoto)'],
    ],
    nodes: {
      start: {
        emoji: '🌅',
        text: 'Era l’ora in cui il mare di Rovigno, stanco del giorno, si faceva color di prugna, e il campanile di Sant’Eufemia, alto sulla punta del colle, pareva un dito levato a benedire le barche. Sul molo, un vecchio dalle mani nodose come radici d’ulivo stava sciogliendo le cime d’una batana dipinta di rosso e di verde. Si chiamava Nini, e da sessant’anni usciva a pescare con quella barca dal fondo piatto, che era stata di suo padre e, prima ancora, di suo nonno. Vedendo Linu che lo osservava, alzò il mento e disse soltanto: “Vien, fio, che la luna no speta”. E Linu, che di dialetto non sapeva nulla, capì tuttavia ch’era un invito.',
        translation:
          'Era a hora em que o mar de Rovigno, cansado do dia, se tornava cor de ameixa, e o campanário de Santa Eufêmia, no alto da ponta da colina, parecia um dedo erguido a abençoar os barcos. No cais, um velho de mãos nodosas como raízes de oliveira desamarrava as cordas de uma batana pintada de vermelho e verde. Chamava-se Nini, e havia sessenta anos saía para pescar naquele barco de fundo chato, que fora do pai e, antes ainda, do avô. Vendo o Linu a observá-lo, ergueu o queixo e disse apenas: “Vem, filho, que a lua não espera”. E o Linu, que de dialeto não sabia nada, entendeu mesmo assim que era um convite.',
        choices: [
          { text: 'Salire sulla batana.', translation: 'Subir na batana.', next: 'mare' },
          {
            text: '“Grazie, ma preferisco aspettare qui che sorga la luna.”',
            translation: '“Obrigado, mas prefiro esperar aqui a lua nascer.”',
            wrong: '“Vien, fio” = vem, filho, e “la luna no speta” = a lua não espera. O Nini está convidando o Linu para subir no barco já, não sugerindo que ele espere a lua no cais.',
          },
        ],
      },
      mare: {
        emoji: '🌕',
        text: 'Remava Nini in piedi, guardando avanti, con un moto lento e uguale, come di chi culla un bambino. La città s’allontanava, e le sue case strette l’una all’altra, gialle, rosa, azzurre, parevano un coro di comari affacciate a spettegolare sull’acqua. Quando la luna sorse, grande e rossa, da dietro le isole, Linu senza volerlo mormorò i versi del Leopardi: “Che fai tu, luna, in ciel? dimmi, che fai, silenziosa luna?”. Il vecchio smise di remare e lo guardò con un rispetto nuovo. “Mio padre parlava rovignese, a scuola ho imparato l’italiano, fuori di casa ho imparato anche il croato”, disse, “ma alla luna, fio, ho parlato in tutte le lingue, e non m’ha risposto mai”.',
        translation:
          'O Nini remava em pé, olhando para a frente, com um movimento lento e regular, como quem nina uma criança. A cidade se afastava, e as suas casas apertadas umas contra as outras, amarelas, rosadas, azuis, pareciam um coro de comadres debruçadas fofocando sobre a água. Quando a lua surgiu, grande e vermelha, por trás das ilhas, o Linu, sem querer, murmurou os versos de Leopardi: “Que fazes tu, lua, no céu? diz-me, que fazes, silenciosa lua?”. O velho parou de remar e olhou para ele com um respeito novo. “O meu pai falava rovignês, na escola aprendi o italiano, fora de casa aprendi também o croata”, disse, “mas à lua, filho, falei em todas as línguas, e ela nunca me respondeu”.',
        choices: [
          { text: 'Chiedergli di raccontare della sua giovinezza.', translation: 'Pedir que ele conte da sua juventude.', next: 'racconto' },
          { text: 'Preparare le lenze in silenzio.', translation: 'Preparar as linhas de pesca em silêncio.', next: 'pesca' },
        ],
      },
      racconto: {
        emoji: '🎻',
        text: 'Nini raccontò, mentre l’acqua sciabordava contro il fasciame, delle notti di quand’era giovane, quando le batane uscivano a decine con le lampare accese e il mare pareva un cielo rovesciato. Raccontò delle osterie del porto, dove i pescatori, tornati all’alba, cantavano le bitinade, e le voci imitavano i violini e i contrabbassi che nessuno poteva permettersi. Raccontò d’un amore perduto e ritrovato, d’una burrasca che gli portò via una rete e per poco anche la vita. Parlava piano, con quelle pause che sanno fare soltanto i vecchi e il mare. E Linu ascoltava senza fiatare, temendo che una sola parola bastasse a spezzare l’incanto.',
        translation:
          'O Nini contou, enquanto a água batia contra o casco, das noites de quando era jovem, quando as batane saíam às dezenas com os lampiões acesos e o mar parecia um céu virado. Contou das tabernas do porto, onde os pescadores, de volta ao amanhecer, cantavam as bitinade, e as vozes imitavam os violinos e os contrabaixos que ninguém podia pagar. Contou de um amor perdido e reencontrado, de uma tempestade que lhe levou uma rede e por pouco também a vida. Falava baixo, com aquelas pausas que só os velhos e o mar sabem fazer. E o Linu escutava sem dar um pio, temendo que uma única palavra bastasse para quebrar o encanto.',
        choices: [{ text: 'Aiutarlo a preparare le lenze.', translation: 'Ajudá-lo a preparar as linhas.', next: 'pesca' }],
      },
      pesca: {
        emoji: '🎣',
        text: 'Gettarono le lenze in una cala che Nini conosceva come le proprie tasche, e per un’ora non s’udì che il respiro dell’acqua. Poi il vecchio levò il capo e fiutò l’aria come un cane da caccia. “Tien d’ocio el campanil”, disse, indicando la sagoma lontana di Sant’Eufemia, “quando che no te lo vedi più, se torna a casa, subito, senza discussion”. Linu promise, e poco dopo sentì la lenza tendersi fra le ali con una forza inattesa. Mentre tirava, sudato e felice, non s’accorse che dal largo saliva, lenta e bianca, una bruma sottile.',
        translation:
          'Lançaram as linhas numa enseada que o Nini conhecia como a palma da mão, e por uma hora não se ouviu nada além da respiração da água. Então o velho ergueu a cabeça e farejou o ar como um cão de caça. “Fica de olho no campanário”, disse, apontando a silhueta distante de Santa Eufêmia, “quando não o vires mais, volta-se para casa, na hora, sem discussão”. O Linu prometeu, e pouco depois sentiu a linha se esticar entre as asas com uma força inesperada. Enquanto puxava, suado e feliz, não percebeu que do mar aberto subia, lenta e branca, uma bruma fina.',
        choices: [{ text: 'Tirare su il pesce con tutte le forze.', translation: 'Puxar o peixe com todas as forças.', next: 'nebbia' }],
      },
      nebbia: {
        emoji: '🌫️',
        text: 'Era un’orata d’argento, grande come un piatto, e Nini la salutò con un’imprecazione affettuosa che Linu preferì non capire. Ma quando alzò gli occhi verso la città, il campanile non c’era più: al suo posto, un muro di latte. Il vecchio non disse nulla; guardava Linu, come per vedere se ricordasse. Intorno a loro il mare s’era fatto liscio e muto, e perfino i gabbiani tacevano. Solo, da qualche parte, lontanissima, suonava una campana.',
        translation:
          'Era uma dourada prateada, grande como um prato, e o Nini a saudou com um palavrão afetuoso que o Linu preferiu não entender. Mas quando ergueu os olhos para a cidade, o campanário não estava mais lá: no lugar dele, um muro de leite. O velho não disse nada; olhava para o Linu, como para ver se ele se lembrava. Em volta deles o mar ficara liso e mudo, e até as gaivotas se calavam. Só, em algum lugar, longíssimo, tocava um sino.',
        choices: [
          { text: '“Il campanile non si vede più: torniamo, Nini.”', translation: '“Não dá mais para ver o campanário: vamos voltar, Nini.”', next: 'ritorno' },
          {
            text: '“Restiamo ancora un po’: con un’orata così, la fortuna è dalla nostra.”',
            translation: '“Vamos ficar mais um pouco: com uma dourada dessas, a sorte está do nosso lado.”',
            wrong: 'O Nini tinha avisado: “quando che no te lo vedi più, se torna a casa, subito, senza discussion” (quando não o vires mais, volta-se para casa, na hora, sem discussão). O campanário sumiu na bruma: é hora de voltar, e o velho está esperando para ver se o Linu se lembra.',
          },
        ],
      },
      ritorno: {
        emoji: '🔔',
        text: 'Nini girò la prua senza una parola e remò verso il suono della campana, che la nebbia rendeva ora vicino ora lontano. Dopo un tempo che parve lunghissimo, dalla bruma emersero le luci del porto, e con esse un canto: sul molo, alcuni vecchi amici di Nini, inquieti, s’erano messi a cantare una bitinada perché le barche ritrovassero la via. Linu udì le voci farsi violino, farsi contrabbasso, farsi mare, e sentì qualcosa sciogliersi nel petto. Quando toccarono il molo, Nini gli posò in mano l’orata e disse: “Questa xe tua, fio; e anca la batana, se te la vol”. Poi, sottovoce, aggiunse ch’era ormai vecchio, e che una batana senza nessuno che la remi muore come un cane senza padrone.',
        translation:
          'O Nini virou a proa sem uma palavra e remou na direção do som do sino, que a neblina fazia parecer ora perto, ora longe. Depois de um tempo que pareceu longuíssimo, da bruma surgiram as luzes do porto, e com elas um canto: no cais, alguns velhos amigos do Nini, inquietos, tinham começado a cantar uma bitinada para que os barcos reencontrassem o caminho. O Linu ouviu as vozes virarem violino, virarem contrabaixo, virarem mar, e sentiu alguma coisa se desfazer no peito. Quando tocaram o cais, o Nini lhe pôs a dourada na mão e disse: “Esta é tua, filho; e a batana também, se a quiseres”. Depois, baixinho, acrescentou que já estava velho, e que uma batana sem ninguém para remá-la morre como um cão sem dono.',
        choices: [
          { text: '“Non posso portarla al Polo, Nini; ma tornerò ogni estate a remarla con te.”', translation: '“Não posso levá-la para o Polo, Nini; mas vou voltar todo verão para remar nela com você.”', next: 'final_bom' },
          { text: '“Grazie, ma domani parto, e non so quando tornerò.”', translation: '“Obrigado, mas amanhã eu parto, e não sei quando volto.”', next: 'final_partenza' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Da allora, ogni estate, quando la lavanda fiorisce sulle colline dell’Istria, un pinguino scende dal pullman di Pola e chiede del vecchio Nini. Lo trovano sempre sul molo, a sciogliere le cime, come se lo avesse aspettato dal giorno prima. Escono insieme al tramonto, parlano poco, e quando sorge la luna Linu le rivolge i versi del Leopardi, e Nini le risponde in rovignese. La luna, naturalmente, non risponde a nessuno dei due. Ma la batana, dicono al porto, da quando c’è il pinguino galleggia più leggera.',
        translation:
          'Desde então, todo verão, quando a lavanda floresce nas colinas da Ístria, um pinguim desce do ônibus de Pula e pergunta pelo velho Nini. Encontram-no sempre no cais, desamarrando as cordas, como se o esperasse desde a véspera. Saem juntos ao pôr do sol, falam pouco, e quando a lua nasce o Linu lhe dirige os versos de Leopardi, e o Nini responde em rovignês. A lua, naturalmente, não responde a nenhum dos dois. Mas a batana, dizem no porto, desde que o pinguim apareceu flutua mais leve.',
        ending: { tone: 'bom', title: 'Duas vozes para a lua', message: 'Você entendeu o dialeto, respeitou o sinal do campanário e ganhou um lugar na batana do Nini.' },
      },
      final_partenza: {
        emoji: '🚌',
        text: 'Il vecchio annuì, come chi s’aspettava quella risposta da sempre, e non insistette. L’indomani Linu partì col primo pullman, e dal finestrino vide il campanile di Sant’Eufemia rimpicciolire fino a sparire, come quella notte nella nebbia. Qualche mese dopo gli giunse una cartolina scritta con mano tremante: la batana era stata donata al piccolo museo del porto, dove i bambini potevano toccarla. “Almeno là qualcuno la guarda”, scriveva Nini. Linu ripose la cartolina in un libro del Leopardi, alla pagina della luna.',
        translation:
          'O velho assentiu, como quem sempre esperara aquela resposta, e não insistiu. No dia seguinte o Linu partiu no primeiro ônibus, e pela janela viu o campanário de Santa Eufêmia diminuir até sumir, como naquela noite na neblina. Alguns meses depois chegou-lhe um cartão-postal escrito com mão trêmula: a batana fora doada ao pequeno museu do porto, onde as crianças podiam tocá-la. “Pelo menos lá alguém olha para ela”, escrevia o Nini. O Linu guardou o cartão num livro de Leopardi, na página da lua.',
        ending: { tone: 'neutro', title: 'A batana no museu', message: 'A viagem terminou, e a batana encontrou outro porto: o das memórias.' },
      },
    },
  },
  {
    id: 'it-h45',
    level: 'C2',
    cefr: 'C2',
    title: 'Lettere dalla Boca',
    emoji: '✉️',
    summary: 'Em La Boca, Buenos Aires, uma senhora de noventa e dois anos pede ao Linu que leia as cartas oitocentistas do avô genovês, escritas num italiano que ela já não entende.',
    cultural_context:
      'O bairro de La Boca, em Buenos Aires, foi povoado no século XIX sobretudo por imigrantes genoveses, que trabalhavam no porto do Riachuelo. Conta-se que as casas de chapa eram pintadas com sobras de tinta dos navios, daí as cores do Caminito; da mistura de italiano e espanhol nasceu o “cocoliche”. O conto “Dagli Appennini alle Ande”, do livro “Cuore” (1886), de Edmondo De Amicis, narra a viagem de um menino genovês à Argentina em busca da mãe.',
    start: 'start',
    glossary: [
      ['il conventillo', 'cortiço de imigrantes em Buenos Aires'],
      ['il cocoliche', 'mistura de italiano e espanhol dos imigrantes'],
      ['giunsi / fui', 'cheguei / fui (passato remoto)'],
      ['Iddio', 'Deus (forma literária)'],
      ['ché', 'porque (forma literária)'],
      ['chi lascia la via vecchia per la nuova…', 'quem troca o certo pelo duvidoso… (provérbio)'],
      ['la lamiera', 'a chapa de metal'],
      ['sano e salvo', 'são e salvo'],
    ],
    nodes: {
      start: {
        emoji: '🎨',
        text: 'Al Caminito, sul far della sera, le case di lamiera accendevano i loro colori come lanterne: gialle, rosse, turchine, verdi, a chiazze, ché nessuna parete pareva d’un colore solo. Linu passeggiava fra i pittori e i suonatori quando una vecchina, seduta sulla soglia d’un conventillo, lo chiamò con un cenno. Si chiamava Angiolina, aveva novantadue anni e parlava un miscuglio di genovese, di spagnolo e d’italiano che i vicini, ridendo, chiamavano cocoliche. “Tu capisci l’italiano de antes, quello dei libri?”, gli chiese, e senza attendere risposta trasse di sotto lo scialle una scatola di latta arrugginita. “Son le lettere del nonno Battista; io l’italiano de la carta non lo capisco più”.',
        translation:
          'No Caminito, ao cair da tarde, as casas de chapa acendiam as suas cores como lanternas: amarelas, vermelhas, turquesa, verdes, em manchas, pois nenhuma parede parecia ter uma cor só. O Linu passeava entre pintores e músicos quando uma velhinha, sentada na soleira de um cortiço, o chamou com um aceno. Chamava-se Angiolina, tinha noventa e dois anos e falava uma mistura de genovês, espanhol e italiano que os vizinhos, rindo, chamavam de cocoliche. “Você entende o italiano de antigamente, o dos livros?”, perguntou, e sem esperar resposta tirou de debaixo do xale uma caixa de lata enferrujada. “São as cartas do vovô Battista; eu o italiano do papel já não entendo mais”.',
        choices: [
          { text: 'Chiederle prima della casa e dei suoi colori.', translation: 'Perguntar antes sobre a casa e as suas cores.', next: 'conventillo' },
          { text: 'Aprire subito la scatola.', translation: 'Abrir logo a caixa.', next: 'lettera1' },
        ],
      },
      conventillo: {
        emoji: '🏚️',
        text: 'Prima di rispondere, Angiolina gli fece strada nel cortile del conventillo, dove un tempo, raccontò, vivevano venti famiglie con un solo lavatoio e una sola speranza. “Gli uomini lavoravano al porto, sul Riachuelo, e quando si ridipingeva una nave si portavano a casa gli avanzi di vernice”, disse. “Per questo ogni parete ha il suo colore: si dipingeva con quello che c’era”. Linu sfiorò con l’ala la lamiera ondulata, ancora calda del sole, e pensò che quella miseria dipinta a festa fosse la cosa più ostinata e più allegra che avesse mai visto. Poi la vecchina gli rimise in mano la scatola, come si affida un neonato.',
        translation:
          'Antes de responder, a Angiolina o conduziu até o pátio do cortiço, onde antigamente, contou, viviam vinte famílias com um só tanque e uma só esperança. “Os homens trabalhavam no porto, no Riachuelo, e quando um navio era repintado levavam para casa as sobras de tinta”, disse. “Por isso cada parede tem a sua cor: pintava-se com o que havia”. O Linu roçou com a asa a chapa ondulada, ainda quente de sol, e pensou que aquela miséria pintada de festa era a coisa mais teimosa e mais alegre que já tinha visto. Depois a velhinha lhe devolveu a caixa às mãos, como quem entrega um recém-nascido.',
        choices: [{ text: 'Sedersi al tavolo e aprire la prima lettera.', translation: 'Sentar à mesa e abrir a primeira carta.', next: 'lettera1' }],
      },
      lettera1: {
        emoji: '🚢',
        text: 'La prima lettera, in una grafia inclinata e diligente, portava la data del 3 marzo 1889. “Carissima madre, vi scrivo queste poche righe per farvi sapere che, grazie a Dio, sono giunto sano e salvo, benché il mare ci sia stato nemico per quasi un mese. Molti a bordo si ammalarono, e un bambino di Chiavari non vide mai l’America: lo calarono in mare avvolto in un lenzuolo, e sua madre non pianse, ché non aveva più lacrime. Qui alla Boca siamo quasi tutti genovesi, e a sentir parlare per le strade mi par d’essere a Sottoripa”. Angiolina, che ascoltava a occhi chiusi, domandò piano: “Dice che il viaggio fu bello?”.',
        translation:
          'A primeira carta, numa letra inclinada e caprichada, trazia a data de 3 de março de 1889. “Caríssima mãe, escrevo-vos estas poucas linhas para vos fazer saber que, graças a Deus, cheguei são e salvo, embora o mar nos tenha sido inimigo por quase um mês. Muitos a bordo adoeceram, e um menino de Chiavari nunca viu a América: baixaram-no ao mar envolto num lençol, e a mãe dele não chorou, porque já não tinha lágrimas. Aqui na Boca somos quase todos genoveses, e ouvindo falar pelas ruas parece-me estar em Sottoripa”. A Angiolina, que escutava de olhos fechados, perguntou baixinho: “Ele diz que a viagem foi bonita?”.',
        choices: [
          { text: '“No, Angiolina: il mare fu crudele, ma lui arrivò sano e salvo.”', translation: '“Não, Angiolina: o mar foi cruel, mas ele chegou são e salvo.”', next: 'lettera2' },
          {
            text: '“Sì, dice che fu un viaggio tranquillo e felice.”',
            translation: '“Sim, ele diz que foi uma viagem tranquila e feliz.”',
            wrong: 'A carta diz que “il mare ci sia stato nemico per quasi un mese” (o mar foi inimigo por quase um mês), que muitos adoeceram (“si ammalarono”) e que um menino morreu a bordo. O passato remoto narra fatos duros, nada felizes.',
          },
        ],
      },
      lettera2: {
        emoji: '🍷',
        text: 'Le lettere seguenti raccontavano, anno dopo anno, una vita che si faceva strada come l’acqua fra le pietre. Battista aveva scaricato sacchi al porto, poi aperto una piccola bottega di vini; aveva sposato una ragazza di Recco, conosciuta a una festa di San Giovanni, e gli era nato un figlio, che chiamarono Giobatta come il nonno. In ogni lettera pregava la madre di raggiungerlo e prometteva di mandarle il denaro per il viaggio, “se Iddio vorrà e gli affari andranno bene”. Ma di lettera in lettera la preghiera si faceva più breve, quasi timida, come di chi teme una risposta già nota. Angiolina sospirò: in famiglia s’era sempre detto che la bisnonna non aveva mai risposto.',
        translation:
          'As cartas seguintes contavam, ano após ano, uma vida que abria caminho como a água entre as pedras. O Battista tinha descarregado sacos no porto, depois aberto uma pequena venda de vinhos; casara com uma moça de Recco, conhecida numa festa de São João, e lhe nascera um filho, que chamaram Giobatta, como o avô. Em cada carta pedia à mãe que viesse encontrá-lo e prometia mandar-lhe o dinheiro da viagem, “se Deus quiser e os negócios forem bem”. Mas de carta em carta o pedido ficava mais curto, quase tímido, como de quem teme uma resposta já conhecida. A Angiolina suspirou: na família sempre se dissera que a bisavó nunca tinha respondido.',
        choices: [
          { text: 'Continuare a leggere, fino in fondo alla scatola.', translation: 'Continuar lendo, até o fundo da caixa.', next: 'lettera_madre' },
          { text: 'Fare una pausa e scendere con lei fino al Riachuelo.', translation: 'Fazer uma pausa e descer com ela até o Riachuelo.', next: 'porto' },
        ],
      },
      porto: {
        emoji: '⚓',
        text: 'Scesero adagio fino alla riva del Riachuelo, dove l’acqua scura portava i riflessi dei lampioni e l’odore dei vecchi cantieri. Angiolina s’appoggiò al braccio di Linu e gli indicò il punto dove, diceva sua madre, approdavano un tempo le lance dei bastimenti. “Qui arrivavano con una valigia e un nome”, disse, “e ripartivano, quando ripartivano, con un’altra lingua in bocca”. Linu pensò a Marco, il ragazzo genovese del Cuore, che attraversò l’oceano e mezza Argentina per ritrovare la madre. Tornarono al conventillo in silenzio, e la scatola di latta li aspettava sul tavolo come un cuore rimasto aperto.',
        translation:
          'Desceram devagar até a margem do Riachuelo, onde a água escura carregava os reflexos dos postes e o cheiro dos velhos estaleiros. A Angiolina se apoiou no braço do Linu e mostrou o ponto onde, dizia a mãe dela, antigamente atracavam os botes dos navios. “Aqui chegavam com uma mala e um nome”, disse, “e partiam de novo, quando partiam, com outra língua na boca”. O Linu pensou em Marco, o menino genovês do Cuore, que atravessou o oceano e meia Argentina para reencontrar a mãe. Voltaram ao cortiço em silêncio, e a caixa de lata os esperava na mesa como um coração que ficou aberto.',
        choices: [{ text: 'Leggere le ultime lettere rimaste nella scatola.', translation: 'Ler as últimas cartas que ficaram na caixa.', next: 'lettera_madre' }],
      },
      lettera_madre: {
        emoji: '💌',
        text: 'In fondo alla scatola, sotto le lettere di Battista, Linu trovò una busta diversa, ingiallita e sottile, con un francobollo italiano e una grafia incerta. Era della madre: l’aveva dettata al parroco del paese, e cominciava con un proverbio. “Figlio mio, chi lascia la via vecchia per la nuova sa quel che lascia, ma non sa quel che trova; tu hai trovato, e io ne ringrazio il Signore ogni sera. Io sono vecchia, e il mare è troppo grande per le mie gambe: non verrò, ma ti benedico, e benedico la tua sposa e il bambino. Non mandarmi più denari, ché qui non mi manca nulla, se non tu”. Angiolina si coprì il volto con le mani: la bisnonna, dunque, aveva risposto.',
        translation:
          'No fundo da caixa, debaixo das cartas do Battista, o Linu encontrou um envelope diferente, amarelado e fino, com um selo italiano e uma letra hesitante. Era da mãe: ela a ditara ao pároco da aldeia, e começava com um provérbio. “Meu filho, quem deixa o caminho velho pelo novo sabe o que deixa, mas não sabe o que encontra; tu encontraste, e eu agradeço ao Senhor por isso toda noite. Eu estou velha, e o mar é grande demais para as minhas pernas: não irei, mas te abençoo, e abençoo a tua esposa e o menino. Não me mandes mais dinheiro, porque aqui não me falta nada, a não ser tu”. A Angiolina cobriu o rosto com as mãos: a bisavó, então, tinha respondido.',
        choices: [
          {
            text: '“Queste lettere meritano di tornare a Genova, in un museo, dove tutti possano leggerle.”',
            translation: '“Estas cartas merecem voltar a Gênova, para um museu, onde todos possam lê-las.”',
            next: 'final_bom',
          },
          { text: '“Sono vostre, Angiolina: tenetele qui, accanto a voi.”', translation: '“São vossas, Angiolina: guardai-as aqui, perto de vós.”', next: 'final_scatola' },
          {
            text: '“Allora, alla fine, la madre venne alla Boca!”',
            translation: '“Então, no fim, a mãe veio para a Boca!”',
            wrong: 'A mãe escreve “non verrò” (não irei): diz que está velha e que o mar é grande demais para as suas pernas. Ela abençoa o filho e a família, mas fica na Itália.',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Qualche mese più tardi, le lettere di Battista e la risposta della madre attraversarono l’oceano nel verso contrario, dentro una busta imbottita e con mille raccomandazioni. Oggi si possono leggere a Genova, nel museo del mare, in una sala dedicata agli emigranti, accanto a valigie di cartone e a passaporti sbiaditi. Angiolina non poté andarci, ma ricevette una fotografia della vetrina e la appese sopra il letto, accanto all’immagine della Madonna. “Adesso il nonno è tornato a casa”, diceva ai vicini, in quel suo cocoliche che nessun libro registra. E Linu, ogni volta che ripensa alla Boca, rivede quella scatola di latta che conteneva un oceano intero.',
        translation:
          'Alguns meses depois, as cartas do Battista e a resposta da mãe atravessaram o oceano no sentido contrário, dentro de um envelope acolchoado e com mil recomendações. Hoje podem ser lidas em Gênova, no museu do mar, numa sala dedicada aos emigrantes, ao lado de malas de papelão e passaportes desbotados. A Angiolina não pôde ir, mas recebeu uma fotografia da vitrine e a pendurou acima da cama, ao lado da imagem de Nossa Senhora. “Agora o vovô voltou para casa”, dizia aos vizinhos, naquele seu cocoliche que nenhum livro registra. E o Linu, cada vez que se lembra da Boca, revê aquela caixa de lata que continha um oceano inteiro.',
        ending: { tone: 'bom', title: 'Um oceano numa caixa de lata', message: 'Você leu o italiano literário do século XIX, entendeu a resposta da mãe e devolveu a história a quem a procurava.' },
      },
      final_scatola: {
        emoji: '🌙',
        text: 'Angiolina ripose le lettere nella scatola, una a una, con la cura con cui si rimboccano le coperte a un bambino. “Stanno bene qui”, disse, “hanno già viaggiato abbastanza”. Linu le promise che sarebbe tornato a leggergliele ogni volta che fosse passato da Buenos Aires, e lei rise, dicendo che alla sua età le promesse si fanno a breve scadenza. Quando lasciò il conventillo, i colori del Caminito s’erano spenti nella notte, e da una finestra filtrava un tango lontano. E pensò che in quella scatola di latta, sul tavolo d’una vecchia genovese, stava custodito un pezzo d’Italia che l’Italia non conosceva.',
        translation:
          'A Angiolina guardou as cartas na caixa, uma a uma, com o cuidado de quem ajeita as cobertas de uma criança. “Estão bem aqui”, disse, “já viajaram bastante”. O Linu prometeu voltar para lê-las sempre que passasse por Buenos Aires, e ela riu, dizendo que na idade dela as promessas se fazem com prazo curto. Quando ele deixou o cortiço, as cores do Caminito tinham se apagado na noite, e de uma janela escapava um tango distante. E pensou que naquela caixa de lata, na mesa de uma velha genovesa, estava guardado um pedaço da Itália que a Itália não conhecia.',
        ending: { tone: 'neutro', title: 'Um pedaço da Itália escondido', message: 'As cartas ficaram com quem as amava, mas a história do Battista continua guardada numa caixa de lata.' },
      },
    },
  },
];
