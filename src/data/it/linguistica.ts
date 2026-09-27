import type { LinguisticsArea } from '../types';

/** As 7 áreas da língua aplicadas ao italiano (fonética … estilística), com os tópicos de gramática de cada uma. */
export const LINGUISTICS_IT: LinguisticsArea[] = [
  // ───────────────────────────── FONÉTICA ─────────────────────────────
  {
    area: 'fonetica',
    summary:
      'O italiano tem sete vogais tônicas, como o português, mas nenhuma nasal e nenhuma reduzida; o que o torna difícil para o brasileiro são as consoantes longas (fatto), as africadas [ts dz tʃ dʒ], o «gn» e o «gli», e o «s» que ora é surdo, ora sonoro.',
    sections: [
      {
        heading: 'Sete vogais, nenhuma nasal e nenhuma reduzida',
        text: 'Na sílaba tônica, o italiano tem as mesmas sete vogais do português: a, é fechado [e], è aberto [ɛ], i, ó fechado [o], ò aberto [ɔ], u. A diferença entre aberto e fechado distingue palavras (pésca × pèsca), mas a escrita só mostra o acento na última sílaba: perché [perˈke], caffè [kafˈfɛ]. Nas sílabas átonas sobram cinco, e nenhuma enfraquece: «latte» termina em [e], nunca em «i», e «tanto» em [o], nunca em «u». Também não há vogal nasal: em «tanto» e «buongiorno» o [n] é pronunciado com a língua nos dentes. O sotaque brasileiro mais comum no italiano vem justamente daí.',
        table: {
          head: ['Palavra', 'Em italiano', 'O erro típico do brasileiro'],
          rows: [
            ['latte', '[ˈlatte], com [e] final', '«látchi», com «tch» e «i» no fim'],
            ['sono', '[ˈsoːno], com [o] final', '«sonu»'],
            ['tanto', '[ˈtanto], com o [n] pronunciado', '«tãtu», com vogal nasal'],
            ['buongiorno', '[bwonˈdʒorno]', '«bõdjórnu»'],
            ['notte', '[ˈnɔtte], «ò» aberto', '«nôte», com «ô» fechado e «t» simples'],
          ],
        },
        examples: [
          ['pésca', 'pesca (de peixe): [ˈpeska], «e» fechado'],
          ['pèsca', 'pêssego: [ˈpɛska], «e» aberto'],
          ['venti', 'vinte: [ˈventi]; com «e» aberto, [ˈvɛnti], é «ventos»'],
          ['Buongiorno, un caffè e un latte, per favore.', 'Bom dia, um café e um leite, por favor.'],
        ],
      },
      {
        heading: 'As consoantes que pedem atenção',
        table: {
          head: ['Letra', 'IPA', 'Como produzir', 'Exemplo'],
          rows: [
            ['c + e/i', '[tʃ]', 'como o «tch» de «tchau»', 'cena [ˈtʃeːna], ciao [ˈtʃaːo]'],
            ['g + e/i', '[dʒ]', 'como o «dj» de «dia» no Rio', 'gelato [dʒeˈlaːto], giorno [ˈdʒorno]'],
            ['ch, gh', '[k], [ɡ]', 'o «h» só mantém o som duro antes de e/i', 'chiesa [ˈkjɛːza], spaghetti [spaˈɡetti]'],
            ['z', '[ts] ou [dz]', 'um «t» ou «d» colado num «s»/«z»; entre vogais, sempre longo', 'zio [ˈtsiːo], zero [ˈdzɛːro], pizza [ˈpittsa]'],
            ['gn', '[ɲ]', 'o «nh» de «banho», só que longo', 'bagno [ˈbaɲɲo]'],
            ['gli', '[ʎ]', 'o «lh» de «filho», só que longo', 'figlio [ˈfiʎʎo]'],
            ['sc + e/i', '[ʃ]', 'o «ch» de «chá», longo entre vogais', 'pesce [ˈpeʃʃe], scienza [ˈʃɛntsa]'],
            ['r, rr', '[r]', 'a ponta da língua bate atrás dos dentes (vibra no «rr»); nunca o «r» de «rato» do Brasil', 'Roma [ˈroːma], carro [ˈkarro]'],
            ['l final de sílaba', '[l]', 'a língua encosta nos dentes; nunca vira «u»', 'alto [ˈalto], il [il]'],
            ['h', '—', 'muda, sempre', 'ho [ɔ], hanno [ˈanno]'],
          ],
        },
        text: 'O italiano tem quatro africadas, consoantes que começam fechadas como um [t] ou [d] e soltam o ar como um [s], [z], [ʃ] ou [ʒ]: [ts], [dz], [tʃ], [dʒ]. O brasileiro já produz duas delas em «tia» e «dia», mas no lugar errado: em italiano, «tipo» é [ˈtiːpo] e «dire» é [ˈdiːre], com a ponta da língua nos dentes. E o [tʃ] e o [dʒ] aparecem onde o português não os tem, antes de «e» e «a»: «cena», «giallo».',
      },
      {
        heading: 'Consoantes longas: segurar o som',
        text: 'As consoantes duplas não são enfeite ortográfico: pronunciam-se mais longas, segurando o som (ou o silêncio, nas oclusivas) antes de soltar. O ouvido brasileiro, que não tem esse contraste, costuma nem perceber. Em compensação, a vogal tônica antes de consoante simples fica mais longa: «fato» é [ˈfaːto], com «a» esticado; «fatto» é [ˈfatto], com «a» curto e «t» comprido. Para treinar, pense em «fat-to», com uma pausa curtinha no meio.',
        examples: [
          ['fatto', 'feito: [ˈfatto], «t» longo'],
          ['fato', 'destino: [ˈfaːto], «a» longo'],
          ['sette', 'sete: [ˈsɛtte]'],
          ['Ho fatto sette panini.', 'Fiz sete sanduíches.'],
        ],
      },
      {
        heading: 'O «s»: surdo ou sonoro',
        text: 'No começo da palavra antes de vogal, o «s» é sempre surdo: sole [ˈsoːle]. Antes de consoante sonora (b, d, g, l, m, n, r, v) é sempre sonoro, [z], mesmo no começo: sbaglio [ˈzbaʎʎo], smettere [ˈzmettere]. Entre vogais, a norma tradicional (de base toscana) varia de palavra para palavra: casa [ˈkaːsa] e cosa [ˈkɔːsa] com [s], rosa [ˈrɔːza] e chiesa [ˈkjɛːza] com [z]. No Norte, o «s» entre vogais é sempre [z]; no Sul, tende a ser [s]. As duas pronúncias são aceitas, e o brasileiro, que já diz «casa» com [z], soa como um italiano do Norte.',
        examples: [
          ['sole', 'sol: [ˈsoːle]'],
          ['sbaglio', 'erro: [ˈzbaʎʎo], com [z] no começo'],
          ['rosa', 'rosa: [ˈrɔːza]'],
          ['Scusa, è uno sbaglio.', 'Desculpa, é um erro.'],
        ],
      },
    ],
    topics: ['it-g1'],
    quiz: [
      {
        question: 'Como termina a pronúncia de «latte»?',
        options: ['Com «i», como em «leite»', 'Com [e]', 'Sem vogal', 'Com vogal nasal'],
        answer: 'Com [e]',
        explanation: 'A vogal átona final não enfraquece em italiano: [ˈlatte], com o «t» longo e sem «tch».',
      },
      {
        question: 'Que som tem o «gli» de «figlio»?',
        options: ['[ɡli]', '[ʎ], como o «lh» de «filho»', '[ɲ], como o «nh»', '[li]'],
        answer: '[ʎ], como o «lh» de «filho»',
        explanation: '«Gli» é a lateral palatal [ʎ], e entre vogais ela é sempre longa: [ˈfiʎʎo].',
      },
      {
        question: 'Qual é a pronúncia de «pizza»?',
        options: ['[ˈpiza]', '[ˈpitsa] com «t» curto', '[ˈpittsa]', '[ˈpidʒa]'],
        answer: '[ˈpittsa]',
        explanation: 'O «z» é a africada [ts], e entre vogais é sempre longo.',
      },
      {
        question: 'Quantas vogais nasais tem o italiano?',
        options: ['Nenhuma', 'Duas', 'Cinco', 'Sete'],
        answer: 'Nenhuma',
        explanation: 'Em «tanto» ou «buongiorno», a vogal é oral e o [n] é pronunciado com a língua nos dentes.',
      },
      {
        question: 'Qual é a diferença de pronúncia entre «fato» e «fatto»?',
        options: ['Nenhuma', 'O «t» de «fatto» dura mais', 'O «a» de «fatto» soa nasal', 'O «t» de «fato» vira «tch»'],
        answer: 'O «t» de «fatto» dura mais',
        explanation: '«Fatto» [ˈfatto] tem consoante longa e vogal curta; «fato» [ˈfaːto] tem vogal longa e consoante curta.',
      },
    ],
  },
  // ───────────────────────────── FONOLOGIA ─────────────────────────────
  {
    area: 'fonologia',
    summary:
      'No italiano, a duração da consoante é fonema (caro × carro), a palavra seguinte pode dobrar a consoante inicial por causa da anterior (a casa [akˈkaːsa]), a tônica é livre e muda o sentido (àncora × ancóra), e o som do começo da palavra escolhe o artigo (il, lo, l’).',
    sections: [
      {
        heading: 'A geminação distintiva: caro × carro',
        text: 'Em italiano, a consoante longa é um fonema à parte: trocar a simples pela dupla muda a palavra. Já a duração da vogal é um alofone, previsível: a tônica fica longa em sílaba aberta (ca-ro) e curta em sílaba fechada (car-ro). Por isso os dicionários marcam as consoantes, não as vogais. O mesmo contraste separa até tempos verbais: «parleremo» (falaremos) e «parleremmo» (falaríamos).',
        table: {
          head: ['Par mínimo', 'IPA', 'Significados'],
          rows: [
            ['caro / carro', '[ˈkaːro] / [ˈkarro]', 'caro, querido / carroça, carro de boi'],
            ['nono / nonno', '[ˈnɔːno] / [ˈnɔnno]', 'nono / avô'],
            ['pala / palla', '[ˈpaːla] / [ˈpalla]', 'pá / bola'],
            ['sete / sette', '[ˈseːte] / [ˈsɛtte]', 'sede / sete (7)'],
            ['papa / pappa', '[ˈpaːpa] / [ˈpappa]', 'papa / papinha'],
            ['capello / cappello', '[kaˈpello] / [kapˈpɛllo]', 'fio de cabelo / chapéu'],
            ['parleremo / parleremmo', '[parleˈreːmo] / [parleˈremmo]', 'falaremos / falaríamos'],
          ],
        },
        examples: [
          ['Il nonno ha una palla nuova.', 'O avô tem uma bola nova.'],
          ['Ho sete: vorrei un bicchiere d’acqua.', 'Estou com sede: queria um copo d’água.'],
        ],
      },
      {
        heading: 'O raddoppiamento sintattico',
        text: 'No italiano padrão, depois de certas palavras a consoante inicial da palavra seguinte também sai dobrada, embora a escrita não mostre: «a casa» soa [akˈkaːsa]. Dobram depois delas os monossílabos fortes (a, da, e, è, che, tre, più, ma, se, fra, tra…), todas as palavras oxítonas (città, perché, andrò) e algumas outras, como «come» e «dove». É traço da pronúncia do Centro e do Sul, e da norma; boa parte do Norte não o faz. A escrita só registra o fenômeno quando as palavras se fundiram: davvero (da + vero), soprattutto, eppure, cosiddetto.',
        table: {
          head: ['Escrita', 'Pronúncia', 'Tradução'],
          rows: [
            ['a casa', '[akˈkaːsa]', 'em casa'],
            ['da me', '[damˈme]', 'na minha casa'],
            ['è vero', '[ɛvˈveːro]', 'é verdade'],
            ['tre case', '[trekˈkaːse]', 'três casas'],
            ['più caldo', '[pjukˈkaldo]', 'mais quente'],
            ['da + vero', 'davvero [davˈveːro]', 'de verdade'],
          ],
        },
        examples: [
          ['Vado a casa.', 'Vou para casa: [ˈvaːdo akˈkaːsa]'],
          ['È vero, fa più caldo.', 'É verdade, está mais quente: [ɛvˈveːro]'],
        ],
      },
      {
        heading: 'A tônica livre e quase nunca escrita',
        text: 'A tônica pode cair na última, na penúltima, na antepenúltima e até na quarta sílaba de trás para a frente (àbitano), e muda o sentido. Mas o acento gráfico só é obrigatório na última sílaba (città, perché). Nas outras, quem lê precisa saber a palavra; os dicionários, e às vezes os textos, marcam as ambíguas por cortesia: àncora × ancóra. Os infinitivos em -ere se dividem em dois grupos (vedére × prèndere), e a 3ª pessoa do plural recua a tônica (pàrlano), coisa que o brasileiro quase nunca acerta de primeira.',
        table: {
          head: ['Palavra', 'Tônica', 'Sentido ou comparação'],
          rows: [
            ['àncora / ancóra', '[ˈaŋkora] / [aŋˈkoːra]', 'âncora / ainda'],
            ['prìncipi / princìpi', '[ˈprintʃipi] / [prinˈtʃiːpi]', 'príncipes / princípios'],
            ['telefono', '[teˈlɛːfono], te-LÈ-fo-no', 'português: te-le-FO-ne'],
            ['polizia', '[politˈtsiːa], po-li-ZÌ-a', 'português: po-LÍ-cia'],
            ['vedere / prendere', '[veˈdeːre] / [ˈprɛndere]', 'ver / pegar: -ere tônico × átono'],
            ['parlano, abitano', '[ˈparlano], [ˈaːbitano]', 'falam, moram: PAR-la-no, À-bi-ta-no'],
          ],
        },
        examples: [
          ['La nave getta l’àncora.', 'O navio lança a âncora.'],
          ['Sei ancóra qui?', 'Você ainda está aqui?'],
          ['Loro parlano e abitano a Bari.', 'Eles falam e moram em Bari: PAR-la-no, À-bi-ta-no'],
        ],
      },
      {
        heading: 'Letra e som; o som que escolhe o artigo',
        text: 'A ortografia italiana é quase fonêmica, com uma astúcia: o «i» e o «h» às vezes são só sinais. Em «ciao» e «giorno», o «i» não se pronuncia: só avisa que o «c» e o «g» são moles. Em «chi» e «ghe», o «h» avisa que são duros. E o «h» de «ho, hai, ha, hanno» só existe para separar esses verbos de «o, ai, a, anno». Até o artigo depende do som: «lo» e «uno» antes de s + consoante, z, gn, ps (lo studente, uno zaino), «l’» antes de vogal (l’amico), «il» antes das demais consoantes; no plural, «gli» substitui «lo» e «l’» (gli studenti, gli amici).',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['ca, co, cu / che, chi', '[k]', 'casa, chilo [ˈkiːlo]'],
            ['ce, ci / cia, cio, ciu', '[tʃ]', 'cena, ciao'],
            ['ga, go, gu / ghe, ghi', '[ɡ]', 'gatto, ghiaccio [ˈɡjattʃo]'],
            ['ge, gi / gia, gio, giu', '[dʒ]', 'gente, giallo [ˈdʒallo]'],
            ['sce, sci / scia, scio', '[ʃ]', 'scena, lasciare [laʃˈʃaːre]'],
            ['sche, schi', '[sk]', 'schema, schiena [ˈskjɛːna]'],
          ],
        },
        examples: [
          ['Ho un anno.', 'Tenho um ano: [ɔ un ˈanno]'],
          ['lo studente, l’amico, il libro', 'o estudante, o amigo, o livro'],
          ['gli studenti e gli amici', 'os estudantes e os amigos'],
        ],
      },
    ],
    topics: ['it-g3'],
    quiz: [
      {
        question: 'Em italiano, [r] e [rr] (caro × carro) são…',
        options: ['alofones do mesmo fonema', 'fonemas diferentes', 'o mesmo som', 'sons do dialeto'],
        answer: 'fonemas diferentes',
        explanation: 'Trocar um pelo outro muda a palavra: «caro» é caro, «carro» é carroça.',
      },
      {
        question: 'Como se pronuncia «a casa» no italiano padrão?',
        options: ['[a ˈkaːza]', '[akˈkaːsa]', '[aˈkaːza]', '[a ˈkasa]'],
        answer: '[akˈkaːsa]',
        explanation: 'É o raddoppiamento sintattico: depois de «a», a consoante inicial da palavra seguinte dobra.',
      },
      {
        question: 'O que quer dizer «ancóra», com a tônica no «o»?',
        options: ['ainda', 'agora', 'ancorado', 'antes'],
        answer: 'ainda',
        explanation: '«Ancóra» é «ainda»; «àncora», com a tônica no «a», é a âncora do navio.',
      },
      {
        question: 'Onde cai a tônica de «parlano»?',
        options: ['par-LA-no', 'PAR-la-no', 'par-la-NO', 'em qualquer sílaba'],
        answer: 'PAR-la-no',
        explanation: 'A 3ª pessoa do plural mantém a tônica do singular: PAR-la, PAR-la-no.',
      },
      {
        question: 'Qual artigo vai antes de «studente»?',
        options: ['il', 'lo', 'l’', 'la'],
        answer: 'lo',
        explanation: 'Antes de s + consoante, o artigo masculino é «lo» (plural «gli»): lo studente, gli studenti.',
      },
    ],
  },
  // ───────────────────────────── MORFOLOGIA ─────────────────────────────
  {
    area: 'morfologia',
    summary:
      'O italiano é flexivo como o português, mas faz o plural trocando a vogal final (libro → libri, casa → case), tem plurais irregulares em -a (le uova, le braccia), funde preposição e artigo em trinta e tantas formas (della, negli, sull’) e adora os sufixos alterados (-ino, -one, -accio).',
    sections: [
      {
        heading: 'Plural sem -s: a vogal final muda',
        text: 'O italiano perdeu o -s final do latim, e o plural se faz trocando a vogal. As palavras oxítonas, os monossílabos, as estrangeiras e as terminadas em -i não mudam. Um grupo de masculinos em -o, quase todos partes do corpo ou coisas que vêm em pares, faz o plural feminino em -a: l’uovo → le uova. E o gênero às vezes não é o do português: il fiore (a flor), il dolore (a dor), il colore, il ponte, il viaggio; la fine (o fim).',
        table: {
          head: ['Singular', 'Plural', 'Regra'],
          rows: [
            ['il libro', 'i libri', '-o → -i'],
            ['la casa', 'le case', '-a → -e'],
            ['il fiore, la notte', 'i fiori, le notti', '-e → -i (os dois gêneros)'],
            ['l’amica, l’amico, il gioco', 'le amiche, gli amici, i giochi', '-ca → -che; -co → -ci ou -chi'],
            ['la città, il caffè, il film, la crisi', 'le città, i caffè, i film, le crisi', 'invariáveis'],
            ['l’uovo, il braccio, il dito', 'le uova, le braccia, le dita', 'masculino → plural feminino em -a'],
            ['l’uomo', 'gli uomini', 'irregular'],
          ],
        },
        examples: [
          ['Ho comprato sei uova.', 'Comprei seis ovos.'],
          ['Il fiore è bello; i fiori sono belli.', 'A flor é bonita; as flores são bonitas.'],
          ['Mi fanno male le braccia.', 'Meus braços doem.'],
        ],
      },
      {
        heading: 'As preposições articuladas',
        text: 'O português junta preposição e artigo em «do, no, ao, pelo». O italiano faz o mesmo com cinco preposições, mas cada uma se combina com os sete artigos, o que dá 35 formas; quando o artigo começa com «l», o «l» dobra: de + la = della, in + lo = nello. «Con» só se funde em «col», opcional; «per» e «tra» nunca. E a preposição nem sempre é a do português: a Roma, mas in Italia; dal medico (ao médico); in treno (de trem).',
        table: {
          head: ['', 'il', 'lo', 'l’', 'la', 'i', 'gli', 'le'],
          rows: [
            ['di', 'del', 'dello', 'dell’', 'della', 'dei', 'degli', 'delle'],
            ['a', 'al', 'allo', 'all’', 'alla', 'ai', 'agli', 'alle'],
            ['da', 'dal', 'dallo', 'dall’', 'dalla', 'dai', 'dagli', 'dalle'],
            ['in', 'nel', 'nello', 'nell’', 'nella', 'nei', 'negli', 'nelle'],
            ['su', 'sul', 'sullo', 'sull’', 'sulla', 'sui', 'sugli', 'sulle'],
          ],
        },
        examples: [
          ['Il libro è sul tavolo.', 'O livro está na mesa.'],
          ['Vengo dalla Sicilia e vado al mare.', 'Venho da Sicília e vou para a praia.'],
          ['Negli anni Ottanta abitavo nelle Marche.', 'Nos anos oitenta eu morava nas Marcas.'],
        ],
      },
      {
        heading: 'Os tempos verbais lado a lado',
        text: 'O quadro verbal é quase o nosso, com três diferenças grandes. O passato prossimo (ho parlato) é o passado do dia a dia, «falei», e não o nosso «tenho falado». O futuro do subjuntivo e o infinitivo pessoal não existem: «se chover» é «se pioverà» e «para eles falarem» é «perché parlino». E o passato remoto (parlai), que parece o nosso pretérito perfeito, na fala é comum sobretudo no Sul e na Toscana; no resto, é o tempo dos livros.',
        table: {
          head: ['Tempo', 'Italiano', 'Português', 'Atenção'],
          rows: [
            ['presente', 'parlo', 'falo', '—'],
            ['passato prossimo', 'ho parlato / sono andato', 'falei / fui', '≠ «tenho falado»'],
            ['imperfetto', 'parlavo', 'falava', 'noi parlaVAmo'],
            ['trapassato prossimo', 'avevo parlato', 'tinha falado', '—'],
            ['passato remoto', 'parlai', 'falei', 'mais escrito que falado'],
            ['futuro', 'parlerò', 'falarei', 'também supõe: sarà vero'],
            ['condizionale', 'parlerei', 'falaria', 'vorrei = eu queria'],
            ['congiuntivo presente', 'parli', 'fale', 'penso che sia'],
            ['congiuntivo imperfetto', 'parlassi', 'falasse', '—'],
            ['gerundio', 'parlando', 'falando', 'sto parlando'],
          ],
        },
        examples: [
          ['Stamattina ho parlato con Luca.', 'Hoje de manhã falei com o Luca.'],
          ['Se avessi tempo, viaggerei.', 'Se eu tivesse tempo, viajaria.'],
          ['Dante nacque a Firenze nel 1265.', 'Dante nasceu em Florença em 1265.'],
        ],
      },
      {
        heading: 'Os alterados: -ino, -one, -accio',
        text: 'O italiano muda o tamanho e o tom da palavra com sufixos: -ino, -etto, -ello diminuem com carinho; -one aumenta; -accio piora; -uccio dá ternura. O aumentativo de palavra feminina costuma virar masculino: la porta → il portone. E, como no nosso «cafezinho», muitos alterados viraram palavras independentes, com sentido próprio (veja em Semântica).',
        table: {
          head: ['Sufixo', 'Efeito', 'Exemplos'],
          rows: [
            ['-ino, -etto, -ello', 'pequeno, carinhoso', 'gattino, casetta, alberello'],
            ['-one', 'grande', 'librone, nasone, portone'],
            ['-accio', 'ruim, feio', 'tempaccio, parolaccia'],
            ['-uccio', 'afetuoso', 'caruccio, boccuccia'],
            ['-issimo', 'superlativo', 'bellissimo, carissimo'],
          ],
        },
        examples: [
          ['Che bel gattino!', 'Que gatinho lindo!'],
          ['Oggi fa un tempaccio.', 'Hoje o tempo está horrível.'],
          ['È un libro bellissimo.', 'É um livro lindíssimo.'],
        ],
      },
    ],
    topics: ['it-g4', 'it-g5', 'it-g7', 'it-g10', 'it-g14', 'it-g15', 'it-g16', 'it-g19', 'it-g21', 'it-g36', 'it-g37'],
    quiz: [
      {
        question: 'Qual é o plural de «l’uovo»?',
        options: ['gli uovi', 'le uova', 'gli uovos', 'le uove'],
        answer: 'le uova',
        explanation: 'É um dos masculinos com plural feminino em -a, como le braccia, le dita, le labbra.',
      },
      {
        question: 'Qual é o plural de «la città»?',
        options: ['le cittàs', 'le citte', 'le città', 'le cittadi'],
        answer: 'le città',
        explanation: 'Palavras oxítonas (com acento na última sílaba) não mudam no plural.',
      },
      {
        question: '«Em + os» diante de «studenti» dá…',
        options: ['nei', 'negli', 'nelli', 'in gli'],
        answer: 'negli',
        explanation: 'O artigo é «gli» (gli studenti), e in + gli = negli.',
      },
      {
        question: 'Em «Stamattina ho mangiato una pizza», «ho mangiato» quer dizer…',
        options: ['comi', 'tenho comido', 'comia', 'comerei'],
        answer: 'comi',
        explanation: 'O passato prossimo é o passado do dia a dia, não o «tenho comido» do português.',
      },
      {
        question: 'Qual é o aumentativo de «la porta»?',
        options: ['la portona', 'il portone', 'la portina', 'il portaccio'],
        answer: 'il portone',
        explanation: 'O sufixo -one costuma levar a palavra para o masculino: il portone, o portão.',
      },
    ],
  },
  // ───────────────────────────── SINTAXE ─────────────────────────────
  {
    area: 'sintaxe',
    summary:
      'A ordem básica é sujeito-verbo-objeto, com sujeito nulo e bastante liberdade. O que desafia o brasileiro são os pronomes átonos, com lugar fixo e combinações (glielo), as partículas «ci» e «ne», a escolha do auxiliar essere e o congiuntivo que a estrutura da frase exige.',
    sections: [
      {
        heading: 'Sujeito nulo, ordem e o modo que a frase pede',
        text: 'Como o espanhol, o italiano é língua de sujeito nulo: o verbo já diz a pessoa, e «io», «tu», «lui» só aparecem para dar ênfase ou contraste. O brasileiro, que repete o pronome («eu acho que eu vou»), soa insistente. Com verbos de chegada, aparecimento e acontecimento, o sujeito vem depois: «È arrivato il treno». O possessivo leva artigo (la mia casa), menos com parente no singular (mia madre). E o modo depende da estrutura: opinião e dúvida pedem congiuntivo (penso che sia), «se» nunca leva condizionale, e o nosso futuro do subjuntivo vira futuro do indicativo (quando arriverai).',
        examples: [
          ['Credo che domani piova.', 'Acho que amanhã vai chover.'],
          ['È arrivato il treno.', 'O trem chegou.'],
          ['La mia casa è vicina a quella di mia madre.', 'A minha casa é perto da casa da minha mãe.'],
          ['Quando arriverai, chiamami.', 'Quando você chegar, me liga.'],
        ],
      },
      {
        heading: 'Os pronomes átonos e o seu lugar',
        text: 'No Brasil dizemos «vi ele» e «dei pra ele». Em italiano, o objeto vira pronome átono antes do verbo conjugado (lo vedo) e se cola no infinitivo, no gerúndio e no imperativo de tu, noi e voi (vederlo, vedendolo, guardalo). Com os modais (volere, potere, dovere), vale antes ou depois: «lo voglio vedere» ou «voglio vederlo». Quando se juntam dois, o indireto vem primeiro e muda de vogal (mi → me, ti → te, ci → ce), e gli/le + lo vira uma palavra só: glielo. Com Lei, o imperativo usa o congiuntivo e o pronome vai antes: «Me lo dica».',
        table: {
          head: ['Português do Brasil', 'Italiano', 'Regra'],
          rows: [
            ['Vi ele ontem.', 'L’ho visto ieri.', 'pronome antes do auxiliar; particípio concorda'],
            ['Quero ver ela.', 'La voglio vedere. / Voglio vederla.', 'com modal: antes ou colado'],
            ['Me diz isso!', 'Dimmelo!', 'imperativo de tu: tudo colado (e dobrado)'],
            ['Dei pra ele.', 'Gliel’ho dato.', 'gli + lo → glielo'],
            ['Me diga (o senhor).', 'Me lo dica.', 'imperativo de Lei: pronome antes'],
          ],
        },
        examples: [
          ['La torta? L’ho mangiata tutta.', 'A torta? Comi toda.'],
          ['Il libro? Te lo presto domani.', 'O livro? Te empresto amanhã.'],
        ],
      },
      {
        heading: 'Ci e ne: as partículas que o português não tem',
        text: '«Ci» retoma um lugar (ci vado = vou lá) ou um complemento com «a» (ci penso io = eu cuido disso) e forma «c’è / ci sono». «Ne» retoma uma quantidade (ne ho due = tenho dois) ou um complemento com «di» (che ne pensi? = o que você acha disso?). O português deixa essas coisas subentendidas; o italiano não deixa a frase sem elas. Na fala, «ci» ainda se cola em «avere»: «ce l’hai?», «sì, ce l’ho».',
        examples: [
          ['Vai a Napoli? Sì, ci vado sabato.', 'Você vai a Nápoles? Vou, no sábado.'],
          ['Quanti fratelli hai? Ne ho tre.', 'Quantos irmãos você tem? Tenho três.'],
          ['Che ne pensi?', 'O que você acha (disso)?'],
          ['Hai la chiave? Sì, ce l’ho.', 'Você está com a chave? Estou.'],
        ],
      },
      {
        heading: 'Essere ou avere: o auxiliar decide a concordância',
        text: 'Os tempos compostos usam dois auxiliares. «Avere» vai com os transitivos e com a maioria dos intransitivos (ho mangiato, ho dormito). «Essere» vai com os verbos de movimento e de mudança de estado, com os reflexivos, com «piacere» e com o próprio «essere». Com «essere», o particípio concorda com o sujeito, como um adjetivo: «Giulia è andata», «ci siamo alzati». O brasileiro, que só tem «ter», escorrega em «ho andato», um erro que todo italiano nota.',
        table: {
          head: ['Com avere', 'Com essere'],
          rows: [
            ['ho mangiato, ho dormito', 'sono andato/a, sono venuto/a'],
            ['ho visto, ho fatto', 'sono nato/a, sono morto/a'],
            ['ho parlato, ho lavorato', 'sono rimasto/a, sono diventato/a'],
            ['ho avuto', 'sono stato/a (essere)'],
            ['—', 'mi sono alzato/a, mi è piaciuto'],
          ],
        },
        examples: [
          ['Giulia è andata a Torino.', 'A Giulia foi para Turim.'],
          ['Ci siamo svegliati tardi.', 'Acordamos tarde.'],
          ['Il film mi è piaciuto molto.', 'Gostei muito do filme.'],
        ],
      },
    ],
    topics: ['it-g8', 'it-g9', 'it-g11', 'it-g12', 'it-g13', 'it-g17', 'it-g18', 'it-g20', 'it-g22', 'it-g23', 'it-g27', 'it-g29'],
    quiz: [
      {
        question: '«Vi ela ontem» (a Maria) em italiano é…',
        options: ['Ho visto lei ieri.', 'L’ho vista ieri.', 'Ho vista la ieri.', 'L’ho visto ieri.'],
        answer: 'L’ho vista ieri.',
        explanation: 'O objeto vira «la» antes do auxiliar, e o particípio concorda com ele: vista.',
      },
      {
        question: 'Qual é o passato prossimo certo de «andare» (eu, homem)?',
        options: ['ho andato', 'sono andato', 'sono andata', 'ho andando'],
        answer: 'sono andato',
        explanation: 'Verbo de movimento usa «essere», e o particípio concorda com o sujeito.',
      },
      {
        question: '«Quantos anos você tem? Tenho vinte.» Complete: «Quanti anni hai? ___ ho venti.»',
        options: ['Ci', 'Ne', 'Li', 'Gli'],
        answer: 'Ne',
        explanation: '«Ne» retoma a quantidade: ne ho venti = tenho vinte (anos).',
      },
      {
        question: 'Como se diz «dei o livro para ele» com pronomes?',
        options: ['Gli l’ho dato.', 'Gliel’ho dato.', 'Lo gli ho dato.', 'Ho dato lo gli.'],
        answer: 'Gliel’ho dato.',
        explanation: 'gli + lo vira «glielo», numa palavra só, e diante de «ho» elide: gliel’ho.',
      },
      {
        question: 'Qual frase está certa?',
        options: ['Penso che è a casa.', 'Penso che sia a casa.', 'Penso che sarebbe a casa.', 'Penso di è a casa.'],
        answer: 'Penso che sia a casa.',
        explanation: 'Opinião com «pensare che» pede congiuntivo: penso che sia.',
      },
    ],
  },
  // ───────────────────────────── SEMÂNTICA ─────────────────────────────
  {
    area: 'semantica',
    summary:
      'Italiano e português vêm do mesmo latim, e o brasileiro entende muito lendo; por isso mesmo os falsos amigos (burro, salire, palestra) são a grande armadilha. Os sufixos alterados criam palavras novas (panino, finestrino), e algumas palavras recortam o mundo de outro jeito (nipote é neto e sobrinho).',
    sections: [
      {
        heading: 'As camadas do vocabulário',
        text: 'A base é o latim falado na península. Depois vieram as palavras cultas, tiradas do latim escrito, e às vezes a mesma palavra entrou duas vezes: «cosa» e «causa» vêm ambas de «causa»; «soldo» e «solido», de «solidus». Os povos germânicos, sobretudo os longobardos, deixaram palavras do corpo e da casa (guancia, schiena, panca); o árabe, pela Sicília e pelo comércio, deixou zucchero, arancia, magazzino e dogana. No caminho inverso, o italiano deu ao mundo o vocabulário da música (piano, soprano, allegro) e ao Brasil o «tchau», do veneziano «s-ciavo», «(sou seu) escravo».',
        table: {
          head: ['Origem', 'Italiano', 'Português'],
          rows: [
            ['latim popular', 'occhio, figlio, chiave', 'olho, filho, chave'],
            ['latim culto', 'oculare, filiale, clavicola', 'ocular, filial, clavícula'],
            ['germânico', 'guerra, guancia, schiena, bianco', 'guerra, bochecha, costas, branco'],
            ['árabe', 'zucchero, arancia, magazzino, dogana', 'açúcar, laranja, armazém, alfândega'],
            ['italiano → mundo', 'piano, soprano, ciao, pizza', 'piano, soprano, tchau, pizza'],
          ],
        },
        examples: [
          ['Che cosa vuoi?', 'O que você quer? («cosa» vem do latim «causa»)'],
          ['Ciao, a domani!', 'Tchau, até amanhã!'],
        ],
      },
      {
        heading: 'Falsos amigos: a mesma forma, outro sentido',
        text: 'Como o italiano parece transparente, o brasileiro confia demais no próprio ouvido. Algumas palavras idênticas às nossas querem dizer coisas completamente diferentes. O treino «Falsos amigos», em Mais práticas, tem a lista completa com exemplos.',
        table: {
          head: ['Italiano', 'Quer dizer', 'Não é'],
          rows: [
            ['burro', 'manteiga', 'burro (= asino, stupido)'],
            ['salire', 'subir', 'sair (= uscire)'],
            ['guardare', 'olhar', 'guardar (= conservare, mettere via)'],
            ['caldo', 'quente', 'caldo (= brodo)'],
            ['palestra', 'academia', 'palestra (= conferenza)'],
            ['squisito', 'delicioso', 'esquisito (= strano)'],
            ['tasca', 'bolso', 'tasca, taverna (= osteria)'],
            ['stanza', 'cômodo, quarto', 'estância (= fattoria)'],
            ['brutto', 'feio', 'bruto (= violento)'],
            ['cena', 'jantar', 'cena (= scena)'],
          ],
        },
        examples: [
          ['Pane, burro e marmellata.', 'Pão, manteiga e geleia.'],
          ['Saliamo al terzo piano.', 'Vamos subir ao terceiro andar.'],
          ['Vado in palestra tre volte alla settimana.', 'Vou à academia três vezes por semana.'],
        ],
      },
      {
        heading: 'Alterados que viraram palavras',
        text: 'Os sufixos alterados não só diminuem ou aumentam: muitas vezes criam uma palavra nova, com sentido próprio, que o dicionário registra separadamente. O «panino» não é um pão pequeno qualquer, é o sanduíche; o «ombrellone» é o guarda-sol da praia. Quem traduz peça por peça erra.',
        table: {
          head: ['Base', 'Alterado', 'Sentido'],
          rows: [
            ['pane (pão)', 'panino', 'sanduíche, pãozinho recheado'],
            ['finestra (janela)', 'finestrino', 'janela de carro, trem ou avião'],
            ['ombrello (guarda-chuva)', 'ombrellone', 'guarda-sol de praia'],
            ['spazzola (escova)', 'spazzolino', 'escova de dentes'],
            ['mano (mão)', 'manette', 'algemas'],
            ['cavallo (cavalo)', 'cavalletto', 'cavalete'],
            ['parola (palavra)', 'parolaccia', 'palavrão'],
          ],
        },
        examples: [
          ['Un panino al prosciutto, per favore.', 'Um sanduíche de presunto, por favor.'],
          ['Posso aprire il finestrino?', 'Posso abrir a janela (do carro)?'],
        ],
      },
      {
        heading: 'Onde o italiano corta o mundo de outro jeito',
        text: 'Cada língua recorta a realidade à sua maneira. «Nipote» serve para neto e para sobrinho, e só o contexto decide. «Il mio ragazzo» é «o meu namorado», não «o meu garoto». «Ti voglio bene» é o amor dos pais, dos filhos e dos amigos; «ti amo» fica para o romance. «Prendere» é pegar, mas também tomar (un caffè), apanhar (il treno) e receber (uno stipendio). E «fa caldo» (o tempo está quente) não é «ho caldo» (estou com calor).',
        examples: [
          ['Mia nonna ha dieci nipoti.', 'Minha avó tem dez netos.'],
          ['Ti voglio bene, mamma.', 'Te amo, mãe.'],
          ['Prendo un caffè e poi prendo il treno.', 'Tomo um café e depois pego o trem.'],
          ['Fa caldo e ho sete.', 'Está quente e estou com sede.'],
        ],
      },
    ],
    topics: ['it-g6', 'it-g25', 'it-g26'],
    quiz: [
      {
        question: 'O que quer dizer «burro»?',
        options: ['asno', 'manteiga', 'bobo', 'queijo'],
        answer: 'manteiga',
        explanation: 'O animal é «asino»; «burro» é manteiga.',
      },
      {
        question: '«Salire» quer dizer…',
        options: ['sair', 'subir', 'saltar', 'salgar'],
        answer: 'subir',
        explanation: '«Sair» é «uscire». «Salire sul treno» é embarcar no trem.',
      },
      {
        question: 'O que é «il finestrino»?',
        options: ['uma janela pequena de casa', 'a janela do carro ou do trem', 'uma vitrine', 'um quadro'],
        answer: 'a janela do carro ou do trem',
        explanation: 'É um alterado de «finestra» que ganhou sentido próprio.',
      },
      {
        question: '«Ho tre nipoti» pode querer dizer…',
        options: ['netos ou sobrinhos', 'primos', 'tios', 'cunhados'],
        answer: 'netos ou sobrinhos',
        explanation: '«Nipote» cobre neto e sobrinho; o contexto decide.',
      },
      {
        question: 'De que língua vem «zucchero»?',
        options: ['Do árabe', 'Do grego', 'Dos longobardos', 'Do latim'],
        answer: 'Do árabe',
        explanation: 'Veio do árabe «sukkar», como o nosso «açúcar».',
      },
    ],
  },
  // ───────────────────────────── PRAGMÁTICA ─────────────────────────────
  {
    area: 'pragmatica',
    summary:
      'O italiano usa o Lei muito mais do que o nosso «o senhor», adora títulos (dottore, professoressa), tem um «prego» para cada ocasião e um estoque de palavrinhas de conversa (magari, dai, boh, figurati), às vezes acompanhadas de gestos que dizem tanto quanto elas.',
    sections: [
      {
        heading: 'Tu, Lei e voi',
        text: '«Tu» é o informal, com amigos, família, crianças e, cada vez mais, entre jovens e colegas. «Lei», com o verbo na 3ª pessoa do singular, é o formal: com desconhecidos, no comércio, com os mais velhos, com professores e médicos. Ele serve para homem e mulher, e na carta formal se escreve com maiúscula. A passagem do Lei para o tu costuma ser proposta por quem é mais velho ou tem posição mais alta: «Diamoci del tu». «Voi» é o plural dos dois; no Sul, sobretudo em Nápoles, ainda sobrevive como tratamento de respeito para uma só pessoa.',
        table: {
          head: ['Forma', 'Quando', 'Exemplo'],
          rows: [
            ['tu', 'informal', 'Come stai?'],
            ['Lei', 'formal, singular', 'Come sta?'],
            ['voi', 'plural (formal ou não)', 'Come state?'],
            ['voi de respeito', 'Sul, uso tradicional', 'Come state, nonna?'],
          ],
        },
        examples: [
          ['Scusi, Lei è di qui?', 'Com licença, o senhor é daqui?'],
          ['Possiamo darci del tu?', 'Podemos nos tratar por «tu»?'],
          ['Buongiorno, dottoressa. Come sta?', 'Bom dia, doutora. Como vai a senhora?'],
        ],
      },
      {
        heading: 'Cumprimentos, títulos e o «prego»',
        text: '«Buongiorno» vale até o começo da tarde; depois vem «buonasera», que também cumprimenta; «buonanotte» é só para quem vai dormir. «Ciao» é oi e tchau, mas só com quem se trata por tu; «salve» é um meio-termo neutro; com Lei, a despedida é «arrivederci» ou «ArrivederLa». Os títulos pesam: todo formado é «dottore» ou «dottoressa», e se diz «avvocato», «ingegnere», «professore». O telefone se atende com «Pronto?». E «prego» faz de tudo: responde a «grazie», convida a entrar ou sentar, e no balcão quer dizer «pois não?».',
        table: {
          head: ['Situação', '«Prego» quer dizer…'],
          rows: [
            ['— Grazie. — Prego.', 'de nada'],
            ['Prego, si accomodi.', 'por favor, sente-se / entre'],
            ['Prego? (no balcão)', 'pois não? o que deseja?'],
            ['Prego? (não entendi)', 'como? pode repetir?'],
          ],
        },
        examples: [
          ['Pronto? Chi parla?', 'Alô? Quem fala?'],
          ['— Grazie mille! — Prego, figurati.', '— Muito obrigado! — De nada, imagina.'],
        ],
      },
      {
        heading: 'Pedir com jeito',
        text: 'O pedido educado se faz com o condicional: «vorrei» (eu queria), «potrebbe» (o senhor poderia). No bar ou na feira, a pergunta direta com «mi dà» é normal e não soa grossa. «Scusi» (Lei) ou «scusa» (tu) abre qualquer pedido; «permesso» é o «com licença» para passar ou entrar na casa de alguém. O imperativo com Lei (mi dica, venga, si accomodi) é gentil, não mandão. O que soa rude é tratar por tu um desconhecido mais velho.',
        examples: [
          ['Vorrei un cappuccino e un cornetto, per favore.', 'Eu queria um cappuccino e um croissant, por favor.'],
          ['Mi dà un etto di prosciutto?', 'Me dá cem gramas de presunto?'],
          ['Permesso, posso passare?', 'Com licença, posso passar?'],
          ['Potrebbe aiutarmi?', 'O senhor poderia me ajudar?'],
        ],
      },
      {
        heading: 'As palavrinhas e os gestos da conversa',
        text: 'Boa parte do sentido está em palavras curtas que o dicionário mal explica. «Magari» é «talvez» e, sozinho, «quem me dera!». «Dai» anima (vai!), insiste (anda!) ou protesta (ah, qual é!). «Boh» é «sei lá», com ombros levantados. «Figurati» (ou «si figuri», com Lei) é «imagina!». «Allora» abre qualquer frase, e «ecco» apresenta, conclui ou concorda. Os gestos acompanham: os dedos juntos para cima, a mão balançando, perguntam «mas o que você quer?»; o indicador girando na bochecha diz «que delícia».',
        table: {
          head: ['Palavra', 'Sentido', 'Exemplo'],
          rows: [
            ['magari', 'talvez; quem me dera', 'Sei ricco? — Magari!'],
            ['dai', 'vai! anda! qual é!', 'Dai, andiamo!'],
            ['boh', 'sei lá', 'Dov’è Marco? — Boh.'],
            ['figurati', 'imagina, de nada', 'Grazie! — Figurati!'],
            ['ecco', 'aqui está; pronto; isso', 'Ecco il conto.'],
          ],
        },
        examples: [
          ['— Andiamo al mare domani? — Magari!', '— Vamos à praia amanhã? — Quem me dera!'],
          ['Dai, non fare così!', 'Ah, não faz assim!'],
          ['Ecco, lo sapevo.', 'Pronto, eu sabia.'],
        ],
      },
    ],
    topics: ['it-g2', 'it-g24', 'it-g28', 'it-g31', 'it-g32'],
    quiz: [
      {
        question: 'Como se pergunta «Como vai o senhor?» em italiano?',
        options: ['Come stai?', 'Come sta?', 'Come state?', 'Come stanno?'],
        answer: 'Come sta?',
        explanation: 'O Lei usa o verbo na 3ª pessoa do singular: Come sta?',
      },
      {
        question: 'Como se atende o telefone na Itália?',
        options: ['Ciao?', 'Pronto?', 'Prego?', 'Dica?'],
        answer: 'Pronto?',
        explanation: '«Pronto?» é o «alô» italiano.',
      },
      {
        question: 'Qual destes NÃO é um uso de «prego»?',
        options: ['de nada', 'adeus', 'por favor, entre', 'o que deseja?'],
        answer: 'adeus',
        explanation: '«Prego» responde a «grazie», convida e atende no balcão, mas não é despedida.',
      },
      {
        question: 'A resposta «Magari!» a «Sei ricco?» quer dizer…',
        options: ['Claro que sim!', 'Quem me dera!', 'Nunca!', 'Talvez depois.'],
        answer: 'Quem me dera!',
        explanation: 'Sozinho, «magari» exprime um desejo pouco provável.',
      },
      {
        question: 'Quem deve propor «Diamoci del tu»?',
        options: ['O mais velho ou o chefe', 'Sempre o mais jovem', 'Qualquer um, logo no primeiro minuto', 'Ninguém: o tu fica proibido no trabalho'],
        answer: 'O mais velho ou o chefe',
        explanation: 'É a norma de cortesia: a passagem para o tu é oferecida de cima para baixo.',
      },
    ],
  },
  // ───────────────────────────── ESTILÍSTICA ─────────────────────────────
  {
    area: 'estilistica',
    summary:
      'Do «Che figata!» dos jovens ao «il sottoscritto» das repartições, o italiano muda muito de registro. Convive com dialetos que são línguas irmãs, tem uma prosa burocrática famosa pela obscuridade e uma literatura que vai de Dante a Calvino.',
    sections: [
      {
        heading: 'Registros e gírias',
        text: 'Uma mesma ideia muda de roupa conforme a situação. «Morire» é neutro; «venire a mancare» e «spegnersi» são as formas delicadas dos avisos fúnebres; «tirare le cuoia» é brincalhão. Na fala dos jovens aparecem «figo» (legal), «che figata!» (que massa!), «boh» e, em Roma, «scialla» (relaxa). Elas ajudam a entender filmes e séries, mas denunciam de onde vêm, e algumas são vulgares em outro contexto.',
        table: {
          head: ['Coloquial', 'Neutro', 'Formal'],
          rows: [
            ['tirare le cuoia', 'morire', 'venire a mancare, decedere'],
            ['figo, una figata', 'bello', 'pregevole'],
            ['sgobbare', 'lavorare', 'prestare servizio'],
            ['mollare', 'lasciare', 'abbandonare'],
          ],
        },
        examples: [
          ['Che figata questo concerto!', 'Que massa este show!'],
          ['Il nonno è venuto a mancare ieri.', 'O avô faleceu ontem.'],
        ],
      },
      {
        heading: 'Burocratese e jornalês',
        text: 'O italiano das repartições tem gramática própria: nominalizações, verbos-suporte (effettuare, provvedere a), fórmulas fixas e o «si» impessoal. Em 1965, Italo Calvino chamou esse estilo de «antilingua», a língua que evita dizer as coisas diretamente. O jornalismo tem seus próprios hábitos: o condicional que protege a fonte («il sindaco avrebbe firmato», o prefeito teria assinado) e as metonímias com os palácios do poder: il Quirinale (a Presidência da República), Palazzo Chigi (o governo), Montecitorio (a Câmara), Palazzo Madama (o Senado).',
        table: {
          head: ['Burocratese', 'Italiano de todo dia', 'Português'],
          rows: [
            ['il sottoscritto', 'io', 'eu, abaixo assinado'],
            ['entro e non oltre il 5 maggio', 'entro il 5 maggio', 'até 5 de maio, sem prorrogação'],
            ['si prega di munirsi di documento', 'portate un documento', 'tragam um documento'],
            ['in data odierna', 'oggi', 'hoje'],
            ['effettuare il pagamento', 'pagare', 'pagar'],
            ['recarsi presso l’ufficio', 'andare all’ufficio', 'ir ao escritório'],
          ],
        },
        examples: [
          ['Si prega di non fumare.', 'Pede-se não fumar.'],
          ['Il ministro avrebbe già firmato il decreto.', 'O ministro já teria assinado o decreto.'],
        ],
      },
      {
        heading: 'Dialetos e italiano regional',
        text: 'O italiano padrão nasceu do florentino literário do século XIV, o de Dante, Petrarca e Boccaccio. Quando a Itália se unificou, em 1861, só uma pequena minoria o falava no dia a dia; o resto falava os «dialetti», que não são italiano errado, mas línguas neolatinas irmãs dele: napoletano, siciliano, veneto, milanese, sardo e muitas outras. Alessandro Manzoni reescreveu «I promessi sposi» aproximando a língua do florentino falado («risciacquare i panni in Arno», enxaguar a roupa no Arno). Hoje quase todos falam italiano, com cor regional, e muitos também o dialeto. No Brasil, o talian da Serra Gaúcha nasceu sobretudo dos dialetos vênetos dos imigrantes.',
        examples: [
          ['Stasera mangiamo da mia nonna.', 'Hoje à noite comemos na casa da minha avó.'],
          ['A Napoli dicono «guaglione» per «ragazzo».', 'Em Nápoles dizem «guaglione» no lugar de «ragazzo».'],
        ],
      },
      {
        heading: 'Da literatura aos provérbios',
        text: 'Dante escreveu a «Divina Commedia» no começo do século XIV e é chamado de pai da língua; Petrarca, com o «Canzoniere», fixou o modelo da poesia lírica europeia; Boccaccio, com o «Decameron», o da prosa. No século XIX, Manzoni deu ao país o romance nacional e Leopardi, a poesia de «L’infinito» (1819). No século XX, Pirandello (Nobel de 1934) desmontou o teatro, Grazia Deledda, da Sardenha, foi a primeira italiana premiada com o Nobel de Literatura (1926), e Calvino jogou com a forma em «Le città invisibili». O estilo literário usa a ordem inversa, o passato remoto e formas como «egli» e «ella». E a sabedoria popular cabe nos provérbios, com o seu «chi» sem antecedente e o verbo no fim.',
        examples: [
          ['Nel mezzo del cammin di nostra vita', 'No meio do caminho da nossa vida (Dante, «Inferno», verso 1)'],
          ['Sempre caro mi fu quest’ermo colle', 'Sempre me foi querida esta colina solitária (Leopardi)'],
          ['Chi va piano va sano e va lontano.', 'Devagar se vai ao longe.'],
          ['Tra il dire e il fare c’è di mezzo il mare.', 'Falar é fácil, fazer é que são elas.'],
        ],
      },
    ],
    topics: ['it-g30', 'it-g33', 'it-g34', 'it-g35', 'it-g38', 'it-g39', 'it-g40'],
    quiz: [
      {
        question: 'Qual é a forma mais formal e delicada de dizer «morrer»?',
        options: ['tirare le cuoia', 'morire', 'venire a mancare', 'crepare'],
        answer: 'venire a mancare',
        explanation: 'É a fórmula dos avisos fúnebres e da fala respeitosa.',
      },
      {
        question: 'No burocratese, «entro e non oltre» quer dizer…',
        options: ['a partir de', 'até a data, nunca depois', 'mais ou menos', 'depois de'],
        answer: 'até a data, nunca depois',
        explanation: 'É uma redundância típica das repartições: «entro» já bastaria.',
      },
      {
        question: 'Nas notícias, «il sindaco avrebbe firmato» indica que…',
        options: ['o prefeito vai assinar', 'o prefeito teria assinado, segundo fontes', 'o prefeito se recusou a assinar', 'o prefeito deveria assinar'],
        answer: 'o prefeito teria assinado, segundo fontes',
        explanation: 'É o condicional de notícia: o jornalista relata sem assumir a informação.',
      },
      {
        question: 'O que são os «dialetti» italianos?',
        options: ['Sotaques do italiano', 'Italiano falado errado', 'Outras línguas vindas do latim', 'Gírias de jovens'],
        answer: 'Outras línguas vindas do latim',
        explanation: 'Nasceram do latim ao lado do florentino, que virou o italiano padrão.',
      },
      {
        question: 'Quem escreveu a «Divina Commedia»?',
        options: ['Petrarca', 'Boccaccio', 'Dante Alighieri', 'Manzoni'],
        answer: 'Dante Alighieri',
        explanation: 'Dante a escreveu no começo do século XIV, em vulgar florentino.',
      },
    ],
  },
];
