import type { UnitSeed } from '../types';

/**
 * Trilha do aleúte, do A1.1 ao B1.4, o teto do curso. Fontes no cabeçalho de vocabulario.ts: [OMNI],
 * [WIKT], [WIKI], [ANLC] e, nas unidades A2.1 e A2.2, [BERG94] (dicionário) e [BERG97] (gramática) de
 * Knut Bergsland, mais [DIRKS78]: Moses Dirks e Lydia Dirks, “Niiĝuĝim Qalgadangis / Atkan Food”,
 * National Bilingual Materials Development Center, Universidade do Alasca, 1978 (ERIC ED173042;
 * archive.org/details/micro_IA41153602_0457), livro bilíngue escrito por Moses Dirks em aleúte de Atka.
 *
 * As frases são do [OMNI] (cumprimentos, “Kiin asax̂tax̂t?”, “… asax̂takuq”, “Qanaang uma ii?”) e da
 * sintaxe do [WIKI] (“Tayaĝux̂ awakux̂”, “Piitrax̂ tayaĝux̂ kidukux̂”, “Tayaĝum adaa”), com a tradução
 * deles. Nenhuma frase com gramática nova foi montada por nós: fora as das fontes, só há palavras soltas
 * lado a lado (“Aang, qaĝaasakung!”).
 *
 * Unidades A2.1 e A2.2: todas as frases são exemplos atkanos (“A”) de [BERG94] e [BERG97], com a página
 * citada e a tradução deles. Nenhuma frase foi montada por nós.
 *
 * Unidades B1.1 a B1.4: frases atkanas de [BERG97] e [BERG94] (com o ano que Bergsland dá), as de Cedor
 * L. Snigaroff (1952) citadas em [BERG97] como “N.M.” e as de [DIRKS78], com a página e a tradução da
 * fonte. Nenhuma frase foi montada por nós.
 */
export const UNITS_ALE: UnitSeed[] = [
  {
    id: 'ale-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Aang! Alqutaxt?',
    emoji: '👋',
    card: {
      id: 'ale-c1',
      title: 'Unangam Tunuu, a língua das ilhas',
      emoji: '🏝️',
      // [WIKI] «Aleut language» (o único membro do ramo aleúte; menos de 100 a 150 falantes ativos;
      // Alaxsxa, a origem do nome Alasca; a escrita cirílica de Veniaminov, de 1824; a escrita latina
      // escolar de 1972; a última falante do dialeto de Bering morreu em 2021); [ANLC] (Unangax̂, pessoa;
      // dois dialetos, divididos na ilha de Atka).
      history:
        'O aleúte, ou Unangam Tunuu, é a língua dos unangax̂, que vivem na corrente de ilhas que vai do Alasca em direção à Rússia: as ilhas Aleutas, as ilhas Pribilof e a ponta da península do Alasca, que em aleúte se chama Alaxsxa — a origem do nome “Alasca”. É o único membro do ramo aleúte da família esquimó-aleúte, e hoje tem menos de 150 falantes ativos. A primeira escrita foi em letras cirílicas, criada a partir de 1824 pelo padre ortodoxo russo Ioann Veniaminov, que traduziu o Evangelho para o aleúte; a escrita em letras latinas usada nas escolas do Alasca é de 1972.',
      culture_tip:
        'O cumprimento mais simples é “Aang!”, que também quer dizer “sim”. E para agradecer, “Qaĝaasakung!”. Quem recebe visitas diz “Qaĝaasakung huzuu haqakux̂”: obrigado a todos por virem.',
      grammar_why:
        'O aleúte marca o tempo e a pessoa no fim do verbo: no presente, o verbo leva -ku-, e “ele, ela” termina em -kux̂: “awakux̂” é “ele, ela trabalha”. Para “eu”, no aleúte de Atka, o fim é -kuq: “Txin yaxtakuq”, eu te amo. E a ordem da frase é fixa: sujeito, objeto, verbo — “Piitrax̂ tayaĝux̂ kidukux̂”, o Pedro está ajudando o homem.',
      grammar_examples: [
        ['Tayaĝux̂ awakux̂.', 'O homem está trabalhando.'],
        ['Piitrax̂ tayaĝux̂ kidukux̂.', 'O Pedro está ajudando o homem.'],
        ['Txin yaxtakuq.', 'Eu te amo.'],
      ],
      character_guide: [
        ['x', 'um som raspado no céu da boca, como o “j” do espanhol', 'slagux (vento)'],
        ['x̂', 'o mesmo som, mais lá no fundo da garganta', 'tayaĝux̂ (homem)'],
        ['ĝ', 'o “r” do fundo da garganta, como o do francês', 'tayaĝux̂ (homem)'],
        ['q', 'um “k” lá do fundo da garganta', 'Qaĝaasakung (obrigado)'],
        ['ng', 'o “ng” de “inglês”, num som só', 'Aang (olá)'],
        ['hl, hm, hn', 'o h antes de l, m, n deixa o som soprado, sem voz', 'hlax̂ (menino)'],
        ['aa, ii, uu', 'vogal dobrada é vogal longa', 'Unangam Tunuu'],
      ],
    },
    lessons: [
      {
        id: 'ale-u1-l1',
        title: 'Aang! Alqutaxt?',
        kind: 'licao',
        words: ['Aang', 'Alqutaxt?', 'Qaĝaasakung', 'Qilachxizax̂', 'Ukudigada', 'Amtal'],
        cloze: [
          { sentence: 'Aang! ___?', answer: 'Alqutaxt', options: ['Alqutaxt', 'Ukudigada', 'Amtal'], translation: 'Olá! Como vai?' },
          { sentence: '___!', answer: 'Qilachxizax̂', options: ['Qilachxizax̂', 'Aguung', 'Tutalagakuq'], translation: 'Bom dia!' },
          { sentence: '___ huzuu haqakux̂!', answer: 'Qaĝaasakung', options: ['Qaĝaasakung', 'Ukudigal', 'Amtal'], translation: 'Obrigado a todos por virem!' },
        ],
        voice: {
          bot: 'Aang! Alqutaxt?',
          botTranslation: 'Olá! Como vai?',
          expected: ['Aang, qaĝaasakung!', 'Qaĝaasakung', 'qagaasakung', 'Aang'],
          hint: 'Cumprimente e agradeça: “Aang, qaĝaasakung!”.',
        },
        communityPrompt: 'Escreva um cumprimento (“Aang!”), a pergunta “Alqutaxt?” e um agradecimento.',
      },
      {
        id: 'ale-u1-l2',
        title: 'Kiin asax̂tax̂t?',
        kind: 'licao',
        words: ['Kiin asax̂tax̂t?', 'asax̂takuq', 'Qaataax̂t?', 'Ukuĝaan ix̂amnakux̂', 'ting', 'txin'],
        cloze: [
          { sentence: 'Linu ___.', answer: 'asax̂takuq', options: ['asax̂takuq', 'yaxtakuq', 'awakux̂'], translation: 'Meu nome é Linu.' },
          { sentence: '___ asax̂tax̂t?', answer: 'Kiin', options: ['Kiin', 'Waya', 'Aang'], translation: 'Qual é o seu nome?' },
          { sentence: 'Ukuĝaan ___!', answer: 'ix̂amnakux̂', options: ['ix̂amnakux̂', 'asax̂takuq', 'awakux̂'], translation: 'Que bom te ver!' },
        ],
        voice: {
          bot: 'Kiin asax̂tax̂t?',
          botTranslation: 'Qual é o seu nome?',
          expected: ['Linu asax̂takuq.', 'Linu asax̂takuq', 'linu asaxtakuq'],
          hint: 'Diga “Linu asax̂takuq” (meu nome é Linu).',
        },
        communityPrompt: 'Apresente-se: “… asax̂takuq” (meu nome é …) e pergunte o nome de alguém (“Kiin asax̂tax̂t?”).',
      },
      // Lições extras do A1.1 (pedido do dono, 16/10/2026), só com palavras e frases que o pacote já tem,
      // todas do [OMNI]; a frase “Ataqan tunuum sanaqaĝikan” é o provérbio do [OMNI]. Os números do
      // aleúte de Atka: [WIKI] tabela dos números e [WIKT] (ver vocabulario.ts).
      {
        id: 'ale-u1-l4',
        title: 'Qaĝaasakung, amtal',
        kind: 'licao',
        words: ['Qaĝaasakung', 'Amtal', 'Tutalagakuq', 'Hikuu tataam tii', 'Ukudigal', 'Slachxizax̂ malgakux̂'],
        cloze: [
          { sentence: 'Hikuu tataam ___.', answer: 'tii', options: ['tii', 'kiin', 'ii'], translation: 'Diga de novo, por favor.' },
          { sentence: '___ malgakux̂!', answer: 'Slachxizax̂', options: ['Slachxizax̂', 'Qilachxizax̂', 'Amgiichxizax̂'], translation: 'Tenha um bom dia!' },
          { sentence: '___. Hikuu tataam tii.', answer: 'Tutalagakuq', options: ['Tutalagakuq', 'Qaĝaasakung', 'Ukudigal'], translation: 'Não entendo. Diga de novo, por favor.' },
        ],
        voice: {
          bot: 'Tutalagakuq.',
          botTranslation: 'Não entendo.',
          expected: ['Amtal. Hikuu tataam tii.', 'Amtal', 'amtal', 'Hikuu tataam tii'],
          hint: 'Peça desculpa (“Amtal”) e diga de novo, ou peça para repetir: “Hikuu tataam tii”.',
        },
        communityPrompt: 'Escreva um mini diálogo: alguém diz “Tutalagakuq” (não entendo), você pede desculpa (“Amtal”) e no fim se despedem com “Ukudigal!” (boa sorte).',
      },
      {
        id: 'ale-u1-l5',
        title: 'Ataqan, alax, qankus',
        kind: 'licao',
        words: ['ataqan', 'alax', 'qankus', 'siching', 'chaang', 'hatix̂'],
        cloze: [
          { sentence: 'Ataqan, ___, qankus.', answer: 'alax', options: ['alax', 'chaang', 'hatix̂'], translation: 'Um, dois, três.' },
          { sentence: 'Qankus, siching, ___.', answer: 'chaang', options: ['chaang', 'ataqan', 'alax'], translation: 'Três, quatro, cinco.' },
          { sentence: '___ tunuum sanaqaĝikan.', answer: 'Ataqan', options: ['Ataqan', 'Hatix̂', 'Qankus'], translation: 'Uma língua só nunca basta.' },
        ],
        voice: {
          bot: 'Ataqan, alax, qankus…',
          botTranslation: 'Um, dois, três…',
          expected: ['Siching, chaang.', 'siching', 'chaang'],
          hint: 'Continue a contagem: “siching” (quatro), “chaang” (cinco).',
        },
        communityPrompt: 'Conte de um a cinco em aleúte de Atka (“ataqan, alax, qankus, siching, chaang”) e termine com o dez, “hatix̂”.',
      },
      {
        id: 'ale-u1-l3',
        title: 'Prova: Aang! Alqutaxt?',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Qaĝaasakung huzuu haqakux̂!',
          botTranslation: 'Obrigado a todos por virem!',
          expected: ['Qaĝaasakung!', 'Qaĝaasakung', 'qagaasakung', 'Aang'],
          hint: 'Agradeça a acolhida: “Qaĝaasakung!”.',
        },
        communityPrompt: 'Escreva uma chegada: “Aang!”, “Alqutaxt?”, “Ukuĝaan ix̂amnakux̂!”.',
      },
    ],
  },
  {
    id: 'ale-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Tayaĝux̂ awakux̂',
    emoji: '🎣',
    card: {
      id: 'ale-c2',
      title: 'O russo nas ilhas: sabaakax̂, chaasxix̂, chiirkax̂',
      emoji: '⛪',
      // [WIKI] «Aleut language» (History: palavras russas em todos os dialetos, sobretudo no de Bering,
      // sem mexer no vocabulário básico; Research history: Bering, 1741; Veniaminov, 1824; Netsvetov, o
      // padre aleúte de Atka); [WIKT] s.v. “sabaakax̂” (do russo собака), “chaasxix̂” (чашка), “chasix̂”
      // (час), “chiirkax̂” (церковь), “yaavlukax̂” (яблоко), “funaarix̂” (фонарь), “Kasakax̂” (казак).
      history:
        'Os russos chegaram às ilhas Aleutas em 1741, com a expedição de Vitus Bering, e ficaram mais de cem anos, até a venda do Alasca aos Estados Unidos. O aleúte guardou muitas palavras russas do dia a dia: “sabaakax̂” (cachorro) vem de “sobaka”, “chaasxix̂” (xícara) de “tchachka”, “chasix̂” (hora) de “tchas”, “yaavlukax̂” (maçã) de “iábloko” e “chiirkax̂” (igreja) de “tsérkov”. Até um russo é “Kasakax̂”, de “cossaco”. Mas as palavras do básico — homem, mulher, sol, água — continuam aleútes. E foi a igreja ortodoxa que guardou a escrita: um padre aleúte de Atka, Iakov Netsvetov, escreveu um dicionário do aleúte de Atka.',
      culture_tip:
        'Antes de comer, deseja-se “Qaatunaxt!”, bom apetite. A comida das ilhas vem do mar: “adgayux” (salmão), “chagix̂” (linguado) e “ptxitax” (bacalhau).',
      grammar_why:
        'Para dizer de quem é uma coisa, o aleúte marca as duas palavras: o dono vai antes, com o final -m, e a coisa vai depois, com o final -a. “Tayaĝux̂” é o homem e “adax̂”, o pai; “tayaĝum adaa” é o pai do homem. Sem o dono, fica só “adaa”: o pai dele.',
      grammar_examples: [
        ['Tayaĝum adaa.', 'O pai do homem.'],
        ['Tayaĝum ulaa.', 'A casa do homem.'],
        ['Ulaa.', 'A casa dele.'],
      ],
      character_guide: [
        ['-m', 'o dono (vem antes)', 'tayaĝum (do homem)'],
        ['-a', 'a coisa que tem dono (vem depois)', 'adaa (o pai dele), ulaa (a casa dele)'],
        ['-x̂', 'o final de uma coisa só, sem dono', 'tayaĝux̂ (homem), adax̂ (pai)'],
      ],
    },
    lessons: [
      {
        id: 'ale-u2-l1',
        title: 'Tayaĝux̂, ayagax̂, adax̂',
        kind: 'licao',
        words: ['tayaĝux̂', 'ayagax̂', 'adax̂', 'anax̂', 'kukax̂', 'awakux̂'],
        cloze: [
          { sentence: 'Tayaĝux̂ ___.', answer: 'awakux̂', options: ['awakux̂', 'asax̂takuq', 'adax̂'], translation: 'O homem está trabalhando.' },
          { sentence: 'Tayaĝum ___.', answer: 'adaa', options: ['adaa', 'adax̂', 'ayagax̂'], translation: 'O pai do homem.' },
          { sentence: 'Piitrax̂ tayaĝux̂ ___.', answer: 'kidukux̂', options: ['kidukux̂', 'qaĝaasakung', 'kiin'], translation: 'O Pedro está ajudando o homem.' },
        ],
        voice: {
          bot: 'Kiin?',
          botTranslation: 'Quem?',
          expected: ['Tayaĝux̂.', 'Tayaĝux̂', 'tayagux', 'Ayagax̂', 'Adax̂', 'Anax̂'],
          hint: 'Responda quem é: “Tayaĝux̂” (o homem), “Ayagax̂” (a mulher)…',
        },
        communityPrompt: 'Escreva os nomes da família em aleúte: “adax̂” (pai), “anax̂” (mãe), “kukax̂” (avó)…',
      },
      {
        id: 'ale-u2-l2',
        title: 'Adgayux, chagix̂, ptxitax',
        kind: 'licao',
        words: ['adgayux', 'chagix̂', 'ptxitax', 'alax̂', 'qalgadax̂', 'Qaatunaxt'],
        cloze: [
          { sentence: '___!', answer: 'Qaatunaxt', options: ['Qaatunaxt', 'Aguung', 'Tutalagakuq'], translation: 'Bom apetite!' },
          { sentence: 'Adgayux, ___, ptxitax.', answer: 'chagix̂', options: ['chagix̂', 'sabaakax̂', 'chiirkax̂'], translation: 'Salmão, linguado, bacalhau.' },
          { sentence: 'Qanaang uma ___?', answer: 'ii', options: ['ii', 'kiin', 'waya'], translation: 'Quanto custa isto?' },
        ],
        voice: {
          bot: 'Qanaang uma ii?',
          botTranslation: 'Quanto custa isto?',
          expected: ['Chaang.', 'Chaang', 'chaang', 'Hatix̂', 'Alax', 'Qankus', 'Ataqan'],
          hint: 'Responda com um número: “Chaang” (cinco), “Hatix̂” (dez)…',
        },
        communityPrompt: 'Escreva os peixes das ilhas que você aprendeu e deseje “Qaatunaxt!”.',
      },
      {
        id: 'ale-u2-l3',
        title: 'Prova: Tayaĝux̂ awakux̂',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Unangam tunuu aadazaxt ii?',
          botTranslation: 'Você fala aleúte?',
          expected: ['Aang!', 'Aang', 'aang', 'Tutalagakuq'],
          hint: 'Diga que sim: “Aang!”.',
        },
        communityPrompt: 'Conte de um a cinco em aleúte: “ataqan, alax, qankus, siching, chaang”.',
      },
    ],
  },
  {
    id: 'ale-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Qilagan haqal saĝanax̂',
    emoji: '📆',
    card: {
      id: 'ale-c3',
      title: 'Niiĝuĝis: a gente de Atka',
      emoji: '🌊',
      // [BERG94] General Introduction, 1. Historical Survey (os russos a partir de 1745; doze a quinze mil
      // aleútes em pelo menos 160 aldeias; os oito grupos, entre eles os Niiĝuĝis, “some thirty
      // settlements”, das ilhas Andreanof); Wikipédia em inglês, «Knut Bergsland» (linguista norueguês);
      // [ANLC] (Berge e Dirks, 2008, “How the Atkans Talk”). [DIRKS78] Introduction (a coleta na maré baixa; os peixes
      // secos para o inverno). [BERG97] §2.1.9.3.3, p. 90 (o passado remoto -na-, de pelo menos um dia).
      history:
        'Quando os caçadores russos chegaram, a partir de 1745, os aleútes eram talvez doze a quinze mil pessoas, em pelo menos 160 aldeias, divididas em oito grupos. A gente das ilhas Andreanof, onde fica Atka, se chamava Niiĝuĝis, e tinha umas trinta aldeias. É o aleúte deles que o curso ensina. Muito do que se sabe vem de Knut Bergsland, um linguista norueguês, que publicou em 1994 um dicionário completo e, em 1997, uma gramática de referência. E Moses Dirks, de Atka, escreveu livros escolares em aleúte e, com Anna Berge, uma gramática de conversa do falar de Atka.',
      culture_tip:
        'Em Atka, a comida vinha do mar. Na maré baixa, o povo descia à praia para colher ouriços-do-mar e mexilhões entre as pedras. No verão, os homens pescavam linguado e bacalhau, que eram secos e guardados para o inverno.',
      grammar_why:
        'Para contar o que aconteceu há pelo menos um dia, o verbo leva -na-: “agunax̂”, ele construiu; “haqanax̂t?”, você veio? Para “ontem” e “amanhã”, Atka usa a palavra “qilagan” com o verbo auxiliar “saĝa-” (dormir, passar a noite): “Qilagan haqal saĝanax̂”, ele veio ontem.',
      grammar_examples: [
        ['Piitrax̂ haman ulax̂ agunax̂.', 'O Pedro construiu aquela casa.'],
        ['Sabaakax̂ tayaĝux̂ kignax̂.', 'O cachorro mordeu o homem.'],
        ['Qanayiim haqanax̂t?', 'Quando você veio?'],
        ['Qilagan haqal saĝanax̂.', 'Ele veio ontem.'],
      ],
      character_guide: [
        ['-naq', 'eu (passado)', 'ukunaq (eu achei)'],
        ['-nax̂t', 'você (passado)', 'haqanax̂t? (você veio?)'],
        ['-nax̂', 'ele, ela (passado)', 'agunax̂ (ele construiu)'],
        ['saĝa-', 'dormir, passar a noite; com “qilagan”, o dia de ontem ou de amanhã', 'saĝanax̂'],
      ],
    },
    lessons: [
      {
        id: 'ale-u3-l1',
        title: 'Wan angalix̂, qilagan',
        kind: 'licao',
        words: ['qilagan', 'angalix̂', 'wan angalix̂', 'amgix̂', 'chix̂talix', 'qan’gix̂'],
        // [BERG94] p. 322 (“qilagan haqal saĝanax̂ he came yesterday”), p. 86 (“chix̂tal angalikux̂ A 1950-
        // it is raining today”), p. 139 (“chix̂tax̂ malgakux̂ A 1978 it is raining”); [BERG97] p. 90
        // (“qanayiim haqanax̂t ‘when did you come?’”).
        cloze: [
          { sentence: 'Qilagan haqal ___.', answer: 'saĝanax̂', options: ['saĝanax̂', 'angalix̂', 'amgix̂'], translation: 'Ele veio ontem.' },
          { sentence: 'Chix̂tal ___.', answer: 'angalikux̂', options: ['angalikux̂', 'qilagan', 'qan’gix̂'], translation: 'Está chovendo hoje.' },
          { sentence: '___ malgakux̂.', answer: 'Chix̂tax̂', options: ['Chix̂tax̂', 'Amgix̂', 'Qilagan'], translation: 'Está chovendo.' },
        ],
        voice: {
          bot: 'Qanayiim haqanax̂t?',
          botTranslation: 'Quando você veio?',
          expected: ['Qilagan.', 'Qilagan', 'qilagan'],
          hint: 'Responda “Qilagan”: ontem.',
        },
        communityPrompt: 'Escreva as palavras do tempo e das estações: qan’gix̂ (inverno), saaqudgix̂ (verão), ichingunal (fazer frio), hugnaazax̂ (calor), e diga se hoje (“wan angalix̂”) está chovendo: “Chix̂tal angalikux̂”.',
      },
      {
        id: 'ale-u3-l2',
        title: 'Qilam qaa',
        kind: 'licao',
        words: ['qax̂', 'qalix', 'qilam qaa', 'angalim utman qaa', 'angalikingan qaa', 'chaayux̂'],
        // [BERG94] p. 289 (“hlax̂ qax̂ qal qilax̂six̂ A 1978 the boy ate the fish this morning”; “qas qal
        // qilax̂sis A 1978 the fish were biting this morning”; “qilam qaa A 1840, 1952 morning meal,
        // breakfast”), p. 133 (“chaayukuq A 1950 I'm drinking tea”); [OMNI] (“Qaatunaxt”).
        cloze: [
          { sentence: 'Hlax̂ qax̂ ___ qilax̂six̂.', answer: 'qal', options: ['qal', 'qaa', 'qas'], translation: 'O menino comeu o peixe hoje de manhã.' },
          { sentence: 'Qas qal ___.', answer: 'qilax̂sis', options: ['qilax̂sis', 'angalix̂', 'chaayux̂'], translation: 'Os peixes estavam mordendo a isca hoje de manhã.' },
          { sentence: '___ qaa.', answer: 'Qilam', options: ['Qilam', 'Amgix̂', 'Qilagan'], translation: 'Café da manhã.' },
        ],
        voice: {
          bot: 'Qaatunaxt!',
          botTranslation: 'Bom apetite!',
          expected: ['Qaĝaasakung! Chaayukuq.', 'Qaĝaasakung', 'qagaasakung', 'Chaayukuq', 'chaayukuq'],
          hint: 'Agradeça (“Qaĝaasakung!”) e diga que está tomando chá: “Chaayukuq”.',
        },
        communityPrompt: 'Escreva as três refeições em aleúte de Atka — qilam qaa, angalim utman qaa, angalikingan qaa — e o que se pode comer nelas: qax̂ (peixe), mukax̂ (farinha), chaayux̂ (chá).',
      },
      {
        id: 'ale-u3-l3',
        title: 'Prova: Qilagan haqal saĝanax̂',
        kind: 'prova',
        words: [],
        cloze: [],
        // [BERG97] §2.1.9.4.2.3, p. 94: “txin ukux̂tahliinaq ‘I'll see you again later’”.
        voice: {
          bot: 'Txin ukux̂tahliinaq.',
          botTranslation: 'Vou te ver de novo mais tarde.',
          expected: ['Ukudigada!', 'Ukudigada', 'ukudigada', 'Aang'],
          hint: 'Despeça-se: “Ukudigada!”.',
        },
        communityPrompt: 'Conte algo que aconteceu ontem, com as frases da unidade: “Qilagan haqal saĝanax̂” (ele veio ontem), “Piitrax̂ haman ulax̂ agunax̂” (o Pedro construiu aquela casa). Use também “alaĝux̂” (mar) ou “achixaalux̂” (escola).',
      },
    ],
  },
  {
    id: 'ale-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Isuĝix̂ qankul saĝanaq',
    emoji: '🦭',
    card: {
      id: 'ale-c4',
      title: 'Contar até um milhão',
      emoji: '🔢',
      // [BERG97] §2.1.5.0, p. 63 (sistema decimal; tiisichax̂ e miliyuunax̂ do russo; restos de contagem em
      // vinte; a multiplicação das dezenas veio do leste sob o domínio russo; números trocados pelos do
      // inglês, em 1971 até o cinco na fala das crianças de Atka); §2.1.5.4–5, p. 64–66; §2.1.1.1.1, p. 47
      // (singular, dual e plural: -x̂, -(i)x, Atka -(i)s); §2.1.5.1, p. 63 (alax com dual; 3 e 4 com
      // plural; do 5 em diante, singular). [DIRKS78] Introduction (ouriços, mexilhões na maré baixa);
      // [BERG94] p. 207 (ingix̂ “dipnet, landing net (for fishing in a creek or reef)”), p. 440 (umĝix̂ “bait”).
      history:
        'O aleúte conta em dez: “hatix̂” é dez e “sisax̂”, cem. Para mil e um milhão, a língua tomou palavras do russo: “tiisichax̂” e “miliyuunax̂”. As dezenas se fazem multiplicando: vinte é “algidim hatix̂”, duas vezes dez. Esse costume veio do leste, no tempo dos russos, e chegou a Atka por volta de 1840. Depois, o inglês tomou o lugar dos números, a começar pelos altos: em 1971, na fala das crianças de Atka, os números em inglês já tinham descido até o cinco.',
      culture_tip:
        'Os ouriços-do-mar (“aguĝnax̂”) e os mexilhões (“waygix̂”) eram colhidos nas pedras, na maré baixa. Para pescar no riacho ou no recife, havia a rede de mão (“ingix̂”); no anzol, ia a isca (“umĝix̂”).',
      grammar_why:
        'O aleúte tem três números: um, dois e muitos. Uma coisa termina em -x̂; duas, em -x; muitas, em Atka, em -s. “Qax̂” é um peixe, e “qas”, os peixes. Depois do número dois, o nome vai para o dual: “alax tayaĝux”, dois homens. Com três e quatro, vai para o plural; do cinco em diante, fica no singular.',
      grammar_examples: [
        ['Alax tayaĝux.', 'Dois homens.'],
        ['Qas qal qilax̂sis.', 'Os peixes estavam mordendo a isca hoje de manhã.'],
        ['Isuĝix̂ qankul saĝanaq.', 'Peguei três focas ontem.'],
        ['Algidim hatix̂.', 'Vinte.'],
      ],
      character_guide: [
        ['-x̂', 'uma coisa só', 'qax̂ (um peixe), tayaĝux̂ (um homem)'],
        ['-x', 'duas coisas (dual)', 'alax tayaĝux (dois homens)'],
        ['-s', 'muitas coisas (plural de Atka; no leste, -n)', 'qas (peixes), Unangas (os aleútes)'],
        ['-dim', 'vezes (multiplica)', 'algidim hatix̂ (vinte)'],
      ],
    },
    lessons: [
      {
        id: 'ale-u4-l1',
        title: 'Kamgix̂, chax̂, dax̂',
        kind: 'licao',
        words: ['kamgix̂', 'chax̂', 'dax̂', 'kudux̂', 'nanalix', 'asx̂aaĝilix'],
        // [BERG94] p. 281 (“dam nanakix A 1840 aching eyes”), p. 123 (“isuĝim chakix E 1935-, A 1950- seal's
        // front flippers”), p. 8 (“ting achixakuq I am learning”, A 1950), p. 535 (“asx̂aaĝinaaĝikuq A 1952 I
        // feel sick”); [OMNI] (“Alqutaxt?”).
        cloze: [
          { sentence: 'Dam ___.', answer: 'nanakix', options: ['nanakix', 'kamgix̂', 'kudux̂'], translation: 'Olhos doendo.' },
          { sentence: 'Isuĝim ___.', answer: 'chakix', options: ['chakix', 'dax̂', 'kamgix̂'], translation: 'As nadadeiras dianteiras da foca (as “mãos” da foca).' },
          { sentence: 'Ting ___.', answer: 'achixakuq', options: ['achixakuq', 'nanakix', 'chaayux̂'], translation: 'Estou aprendendo.' },
        ],
        voice: {
          bot: 'Alqutaxt?',
          botTranslation: 'Como vai?',
          expected: ['Asx̂aaĝinaaĝikuq.', 'Asx̂aaĝinaaĝikuq', 'asxaaginaagikuq'],
          hint: 'Diga que está se sentindo mal: “Asx̂aaĝinaaĝikuq”.',
        },
        communityPrompt: 'Escreva as partes do corpo que você aprendeu — kamgix̂, chax̂, dax̂, kudux̂ e kitax̂ (pé) — e as palavras de quem não está bem: kayuĝiqadax̂ (cansado), duuxturax̂ (médico). Termine com uma palavra boa: inix̂sinax̂ (alegria).',
      },
      {
        id: 'ale-u4-l2',
        title: 'Imyaĝnax̂',
        kind: 'licao',
        words: ['imyaĝnax̂', 'ingix̂', 'umĝix̂', 'aguĝnax̂', 'waygix̂', 'tiisichax̂'],
        // [BERG97] p. 90 (“tayaĝux̂ chagix̂ asx̂atnax̂ ‘the man killed (caught) a halibut’”), p. 64 (“A 1978
        // isuĝix̂ qankul saĝanaq ‘I got three seals yesterday’”); [BERG94] p. 49 (“alax sisax̂ A 1952- two
        // hundred”).
        cloze: [
          { sentence: 'Tayaĝux̂ chagix̂ ___.', answer: 'asx̂atnax̂', options: ['asx̂atnax̂', 'kignax̂', 'agunax̂'], translation: 'O homem pegou um linguado.' },
          { sentence: 'Isuĝix̂ qankul ___.', answer: 'saĝanaq', options: ['saĝanaq', 'qilagan', 'ingix̂'], translation: 'Peguei três focas ontem.' },
          { sentence: 'Alax ___.', answer: 'sisax̂', options: ['sisax̂', 'qax̂', 'dax̂'], translation: 'Duzentos.' },
        ],
        // [BERG97] §2.1.9.4.2.3, p. 94: “A Piitrax̂ waaĝaaĝan amul ii? ‘will Peter be coming soon?’”.
        voice: {
          bot: 'Piitrax̂ waaĝaaĝan amul ii?',
          botTranslation: 'O Pedro vai chegar logo?',
          expected: ['Aang!', 'Aang', 'aang', 'Amustukux̂', 'amustukux'],
          hint: 'Responda “Aang!” (sim) ou “Amustukux̂” (talvez).',
        },
        communityPrompt: 'Escreva os números grandes de Atka: hatim ataqan (onze), algidim hatix̂ (vinte), alax sisax̂ (duzentos), tiisichax̂ (mil) e miliyuunax̂ (milhão). Depois, o que o pescador leva: ingix̂ e umĝix̂.',
      },
      {
        id: 'ale-u4-l3',
        title: 'Prova: Isuĝix̂ qankul saĝanaq',
        kind: 'prova',
        words: [],
        cloze: [],
        // [BERG94] p. 322: “qilagan haqaaĝan saĝanax̂ A 1952 he will come tomorrow”.
        voice: {
          bot: 'Qilagan haqaaĝan saĝanax̂.',
          botTranslation: 'Ele vai chegar amanhã.',
          expected: ['Aang!', 'Aang', 'aang', 'Qaĝaasakung!', 'Qaĝaasakung'],
          hint: 'Concorde: “Aang!” (sim), ou agradeça: “Qaĝaasakung!”.',
        },
        communityPrompt: 'Conte uma pescaria em aleúte de Atka com as frases da unidade: “Tayaĝux̂ chagix̂ asx̂atnax̂” (o homem pegou um linguado), “Isuĝix̂ qankul saĝanaq” (peguei três focas ontem), e conte os peixes: “qax̂”, um peixe; “qas”, os peixes.',
      },
    ],
  },
  // ══ B1 (entrega de 16/10/2026). Todas as frases são exemplos atkanos de [BERG97] e [BERG94], com o ano
  // que Bergsland dá (“A 1978” = Atka, 1978), as de Cedor L. Snigaroff (1952) citadas por [BERG97] como
  // “N.M.”, e as do livro [DIRKS78] (Atka, 1978), cada uma com a página e a tradução da fonte. Nenhuma
  // frase foi montada por nós.
  {
    id: 'ale-u5',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Haqal qada!',
    emoji: '🐦',
    card: {
      id: 'ale-c5',
      title: 'Uma ação puxa a outra',
      emoji: '🔗',
      // [BERG97] Introduction, p. 10–11 (trabalho de campo em Atka no verão de 1950 e no outono de 1952,
      // com William Dirks Sr. e Cedor L. Snigaroff; os jovens já tinham perdido o dual; 1971 com Larry e
      // Lydia Dirks; 1973, textos na nova escrita com Moses L. Dirks para o programa bilíngue de 1972; em
      // 1981 a “Atkan Aleut School Grammar”, com Moses Dirks). [BERG97] §2.1.9.2, p. 87 (as fórmulas de
      // despedida em A 1950: “haqahlilix ‘come again!’; ukudigalix ‘live well!’ (also imperative
      // ukudigada); tuuhyulakan ‘don't be lonesome!’”); [BERG94] p. 215 (“hitaqalii-aĝikuq A 1950- I'll be
      // going out now (-qali-) = good-bye, see you”). §2.1.9.2, p. 86–87 (o conjuntivo de Atka -l | -s,
      // neg. -lakan; “A haqal qada ‘come and eat!’”); §3.9.3, p. 232–234 (sucessão, simultaneidade, modo e
      // causa).
      history:
        'Knut Bergsland trabalhou na aldeia de Atka no verão de 1950 e no outono de 1952, com William Dirks Sr. e Cedor L. Snigaroff, entre outros. Já naquela época, a fala dos jovens era diferente da dos mais velhos: eles tinham perdido o dual. Em 1971 ele voltou para estudar a sintaxe e, em 1973, um grupo com Moses Dirks, de Atka, escreveu textos na nova escrita para o ensino bilíngue, que começou em 1972. Em 1981, Bergsland e Moses Dirks publicaram uma gramática escolar do aleúte de Atka. Bergsland marca cada frase com o lugar e o ano: “A 1978” quer dizer Atka, 1978.',
      culture_tip:
        'Para se despedir, em Atka se diz “Haqahlilix!” (volte!), “Ukudigalix!” (viva bem!) ou “Tuuhyulakan!” (não fique sozinho e triste). E quem sai diz “Hitaqalii-aĝikuq”: já vou indo, até logo.',
      grammar_why:
        'Quando duas ações vêm juntas, só o último verbo leva o tempo e a pessoa. Os de antes ficam no conjuntivo: em Atka, -l depois de vogal e -s depois de consoante. “Haqal qada!” é “vindo, coma”: venha comer! O conjuntivo diz o que vem antes, o jeito ou a causa: “Haagal asx̂alanas”, passando fome, morreram.',
      grammar_examples: [
        ['Haqal qada!', 'Venha comer!'],
        ['Qayax̂ hangal kangakux̂.', 'Ela subiu até o alto da colina.'],
        ['Tayaĝux̂ ixs tanaaĝakux̂.', 'O homem voltou para casa.'],
        ['Alax̂ angunal aduzax̂.', 'A baleia é grande e comprida.'],
      ],
      character_guide: [
        ['-l', 'o conjuntivo de Atka, depois de vogal: o verbo que vem antes', 'haqal (vindo), hangal (subindo)'],
        ['-s', 'o mesmo conjuntivo, depois de consoante', 'ixs (indo para casa), aygaxs (andando)'],
        ['-lakan', 'o conjuntivo negativo: sem fazer', 'qalakan (sem comer)'],
        ['-za-', 'sempre, de costume', 'angunazax̂ (é grande), kurizax̂ (fuma)'],
      ],
    },
    lessons: [
      {
        id: 'ale-u5-l1',
        title: 'Qanglaaĝix̂, sax̂, slukax̂',
        kind: 'licao',
        words: ['qayax̂', 'sax̂', 'qanglaaĝix̂', 'slukax̂', 'qawax̂', 'ulux̂'],
        // [BERG97] p. 234 (A 1978): “qanglaaĝix̂ ulux̂ kixtal igax̂takux̂ ‘the raven is flying with a piece of
        // meat in his mouth’”; p. 233 (A 1978): “qayax̂ hangal kangakux̂ ‘she climbed right to the top of the
        // hill’”; p. 88 (A): “qawax̂ angunazax̂ ‘a sea lion is big’”.
        cloze: [
          { sentence: 'Qanglaaĝix̂ ulux̂ kixtal ___.', answer: 'igax̂takux̂', options: ['igax̂takux̂', 'kangakux̂', 'angunazax̂'], translation: 'O corvo está voando com um pedaço de carne no bico.' },
          { sentence: 'Qayax̂ hangal ___.', answer: 'kangakux̂', options: ['kangakux̂', 'igax̂takux̂', 'tunukux̂'], translation: 'Ela subiu até o alto da colina.' },
          { sentence: '___ angunazax̂.', answer: 'Qawax̂', options: ['Qawax̂', 'Slukax̂', 'Sax̂'], translation: 'O leão-marinho é grande.' },
        ],
        // [BERG94] p. 407: “qanglaaĝix̂ tunukux̂ A 1950 the raven cries”.
        voice: {
          bot: 'Qanglaaĝix̂ tunukux̂.',
          botTranslation: 'O corvo está grasnando.',
          expected: ['Aang.', 'Aang', 'aang'],
          hint: 'Concorde: “Aang” (sim).',
        },
        communityPrompt: 'Escreva os bichos da ilha que você aprendeu (qanglaaĝix̂, sax̂, slukax̂, qawax̂) e copie uma frase de Bergsland sobre um deles, como “Qawax̂ angunazax̂” (o leão-marinho é grande).',
      },
      {
        id: 'ale-u5-l2',
        title: 'Haqal qada!',
        kind: 'licao',
        words: ['haqalix', 'hisix', 'aygaxsix', 'angunalix', 'adulix', 'kurilix'],
        // [BERG97] p. 87 (A): “haqal qada ‘come and eat!’”; p. 233 (A 1978): “alax̂ angunal aduzax̂ ‘a whale is
        // big and long’”; p. 88 (A): “Piitrax̂ kurizax̂ ii? ‘does Peter smoke, is Peter a smoker’”.
        cloze: [
          { sentence: 'Haqal ___!', answer: 'qada', options: ['qada', 'kurizax̂', 'aduzax̂'], translation: 'Venha comer!' },
          { sentence: 'Alax̂ angunal ___.', answer: 'aduzax̂', options: ['aduzax̂', 'qada', 'haqal'], translation: 'A baleia é grande e comprida.' },
          { sentence: 'Piitrax̂ ___ ii?', answer: 'kurizax̂', options: ['kurizax̂', 'angunal', 'haqal'], translation: 'O Pedro fuma? (Ele é fumante?)' },
        ],
        // [BERG97] p. 87 (A): “chaayuutut ii? ‘do you want (to drink) tea?’ (possible answer aang, makuq ‘yes,
        // I do’)”.
        voice: {
          bot: 'Chaayuutut ii?',
          botTranslation: 'Você quer chá?',
          expected: ['Aang, makuq.', 'Aang, makuq', 'aang makuq', 'Aang'],
          hint: 'Diga que sim, que quer: “Aang, makuq”.',
        },
        communityPrompt: 'Copie duas frases em que um verbo puxa o outro, como “Haqal qada!” (venha comer!) e “Tayaĝux̂ ixs tanaaĝakux̂” (o homem voltou para casa), e marque o verbo no conjuntivo, em -l ou -s.',
      },
      {
        id: 'ale-u5-l3',
        title: 'Prova: Haqal qada!',
        kind: 'prova',
        words: [],
        cloze: [],
        // [BERG97] p. 87 (A 1950): “haqahlilix ‘come again!’; ukudigalix ‘live well!’”.
        voice: {
          bot: 'Haqahlilix!',
          botTranslation: 'Volte sempre!',
          expected: ['Ukudigalix!', 'Ukudigalix', 'ukudigalix', 'Ukudigada'],
          hint: 'Despeça-se desejando o bem: “Ukudigalix!” (viva bem!).',
        },
        communityPrompt: 'Conte um passeio pela ilha com as frases da unidade: “Qayax̂ hangal kangakux̂” (ela subiu até o alto da colina), “Sax̂ iĝas iganikuq” (assustei o pato e ele levantou voo), “Tayaĝux̂ ixs tanaaĝakux̂” (o homem voltou para casa).',
      },
    ],
  },
  {
    id: 'ale-u6',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Yaasikam nagan',
    emoji: '📦',
    card: {
      id: 'ale-c6',
      title: 'Dentro, em cima, ao lado',
      emoji: '🏘️',
      // [BERG94] p. 372 (stuulux̂, A 1838-, do russo stol), p. 464 (yaasikax̂, A 1840-, do russo yáshchik),
      // p. 130 (chaanikax̂, do russo cháynik), p. 377 (sunax̂, A 1840-, do russo súdno), p. 229
      // (kanfiixtax̂, A 1950-, do russo konfétka), p. 162 (furaaskix̂, A 1950-, do russo furázhka);
      // [BERG97] Introduction, p. 11 (“the speech of most of the young persons differed from that of their
      // parents by further innovations and heavy English influence”); p. 151 (A 1973 “trainiĝil”, de
      // trem). [DIRKS78] p. 5 (“Taaĝan’gis chadum angan qalgaa qaatunazax̂”, “Wild parsnips are good with
      // seal oil”). [BERG97] §2.1.6, p. 67–69 (positional nouns: locativo, ablativo, dativo ngaan).
      history:
        'Muitas coisas da casa de Atka têm nome russo: “stuulux̂” (mesa) vem de “stol”; “yaasikax̂” (caixa), de “iáchtchik”; “chaanikax̂” (chaleira), de “tcháinik”; “sunax̂” (navio), de “súdno”; “furaaskix̂” (boné), de “furájka”; e “kanfiixtax̂” (bala), de “konfétka”. O dicionário de Bergsland diz desde quando cada uma aparece em Atka: “stuulux̂” em 1838, “yaasikax̂” em 1840, “kanfiixtax̂” só em 1950. Depois veio o inglês: nos anos 1970, a fala dos jovens de Atka já tinha muita influência inglesa, e um falante conta, em 1973, que foram de São Francisco a Seattle “trainiĝil”, de trem.',
      culture_tip:
        'No livro “Atkan Food”, Moses Dirks conta que a pastinaca selvagem é boa com óleo de foca: “Taaĝan’gis chadum angan qalgaa qaatunazax̂”. A palavra “angan”, ao lado de, aqui quer dizer “junto com”.',
      grammar_why:
        'Para dizer onde uma coisa está, o aleúte usa palavras de posição: “nagan” (dentro), “kugan” (em cima), “angan” (ao lado). O lugar de referência vem antes, com -m, como o dono na posse: “yaasikam nagan”, dentro da caixa. Com -n, a posição diz onde ou para onde; com -aan, de onde ou por onde: “tanadgusim kugaan”, vindo da aldeia.',
      grammar_examples: [
        ['Piitrax̂ kanfiixtas yaasikam nagan aĝikux̂.', 'O Pedro pôs as balas numa caixa.'],
        ['Sunam kugan ayuxtal amaxtikus.', 'Saímos num navio à noite.'],
        ['Itxaan tanadgusim kugaan waaĝakux̂.', 'Ele veio de outra aldeia.'],
        ['Qas Piitram ngaan aĝnaq.', 'Eu dei os peixes ao Pedro.'],
      ],
      character_guide: [
        ['-m', 'o lugar de referência, que vem antes', 'yaasikam (da caixa), sunam (do navio)'],
        ['-n', 'onde, ou para onde (locativo)', 'nagan (dentro), kugan (em cima), angan (ao lado)'],
        ['-aan', 'de onde, ou por onde (ablativo)', 'kugaan (de cima de), nagaan (de dentro de)'],
        ['ngaan', 'para ele, para ela (dativo)', 'Piitram ngaan (para o Pedro)'],
      ],
    },
    lessons: [
      {
        id: 'ale-u6-l1',
        title: 'Nagan, kugan, angan',
        kind: 'licao',
        words: ['ilan', 'nagan', 'kugan', 'angan', 'qusan', 'hadan'],
        // [BERG97] p. 158 (A 1971): “Piitrax̂ kanfiixtas yaasikam nagan aĝikux̂ ‘Peter put the candies in a
        // box’”; p. 207 (A 1973): “sunam kugan ayuxtal amaxtikus ‘we went out on a ship in the night’”;
        // [DIRKS78] p. 5: “Taaĝan’gis chadum angan qalgaa qaatunazax̂” (“Wild parsnips are good with seal oil”).
        cloze: [
          { sentence: 'Piitrax̂ kanfiixtas yaasikam ___ aĝikux̂.', answer: 'nagan', options: ['nagan', 'qusan', 'hadan'], translation: 'O Pedro pôs as balas numa caixa.' },
          { sentence: 'Sunam ___ ayuxtal amaxtikus.', answer: 'kugan', options: ['kugan', 'angan', 'qusan'], translation: 'Saímos num navio à noite.' },
          { sentence: 'Taaĝan’gis chadum ___ qalgaa qaatunazax̂.', answer: 'angan', options: ['angan', 'nagan', 'ilan'], translation: 'A pastinaca selvagem é boa com óleo de foca.' },
        ],
        // [BERG97] p. 202 (A 1952): “hadan huyaamis ax̂sxat ii? ‘will you be going to him?’”.
        voice: {
          bot: 'Hadan huyaamis ax̂sxat ii?',
          botTranslation: 'Você vai até ele?',
          expected: ['Aang!', 'Aang', 'aang'],
          hint: 'Responda que sim: “Aang!”.',
        },
        communityPrompt: 'Escreva as palavras de posição — ilan, nagan, kugan, angan, qusan, hadan — e copie uma frase com cada uma das que aparecem na unidade, como “Sunam kugan ayuxtal amaxtikus” (saímos num navio à noite).',
      },
      {
        id: 'ale-u6-l2',
        title: 'Stuulux̂, yaasikax̂, sunax̂',
        kind: 'licao',
        words: ['stuulux̂', 'yaasikax̂', 'tanadgusix̂', 'sunax̂', 'kanfiixtax̂', 'furaaskix̂'],
        // [BERG97] p. 194 (A 1950): “itxaan tanadgusim kugaan waaĝakux̂ ‘he came from another village’”;
        // p. 87 (A): “sunax̂ haqakux̂ ‘the ship is coming’”; p. 159 (1971): “hingan furaaskix̂ adagan ngaan
        // aĝiqaa ‘that cap, his father gave him; that's the cap that was given him by his father’”.
        cloze: [
          { sentence: 'Itxaan ___ kugaan waaĝakux̂.', answer: 'tanadgusim', options: ['tanadgusim', 'yaasikam', 'stuuluĝim'], translation: 'Ele veio de outra aldeia.' },
          { sentence: '___ haqakux̂.', answer: 'Sunax̂', options: ['Sunax̂', 'Stuulux̂', 'Yaasikax̂'], translation: 'O navio está chegando.' },
          { sentence: 'Hingan ___ adagan ngaan aĝiqaa.', answer: 'furaaskix̂', options: ['furaaskix̂', 'kanfiixtax̂', 'sunax̂'], translation: 'Aquele boné, foi o pai dele que deu.' },
        ],
        // [BERG97] p. 87 (A): “sunax̂ haqal hix̂tanax̂ ‘he said that the ship was coming’”.
        voice: {
          bot: 'Sunax̂ haqal hix̂tanax̂.',
          botTranslation: 'Ele disse que o navio estava chegando.',
          expected: ['Sunax̂ haqakux̂.', 'Sunax̂ haqakux̂', 'sunax haqakux'],
          hint: 'Repita a notícia do jeito direto: “Sunax̂ haqakux̂” (o navio está chegando).',
        },
        communityPrompt: 'Faça uma lista das coisas da casa que têm nome russo — stuulux̂, yaasikax̂, chaanikax̂, kanfiixtax̂, furaaskix̂ — com a palavra russa ao lado.',
      },
      {
        id: 'ale-u6-l3',
        title: 'Prova: Yaasikam nagan',
        kind: 'prova',
        words: [],
        cloze: [],
        // [BERG94] p. 215: “hitaqalii-aĝikuq A 1950- I'll be going out now (-qali-) = good-bye, see you”;
        // [BERG97] p. 87 (A 1950): “haqahlilix ‘come again!’”.
        voice: {
          bot: 'Hitaqalii-aĝikuq.',
          botTranslation: 'Já vou indo. Até logo!',
          expected: ['Haqahlilix!', 'Haqahlilix', 'haqahlilix', 'Ukudigalix'],
          hint: 'Convide a pessoa a voltar: “Haqahlilix!”.',
        },
        communityPrompt: 'Descreva uma cozinha com as frases da unidade: “Piitrax̂ kanfiixtas yaasikam nagan aĝikux̂” (o Pedro pôs as balas numa caixa), “Asux̂ imdahlikum ilam axs stuuluĝim kugan hyukux̂” (a panela encheu demais e transbordou na mesa).',
      },
    ],
  },
  {
    id: 'ale-u7',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Qam suupaa',
    emoji: '🍲',
    card: {
      id: 'ale-c7',
      title: 'Receitas de Atka',
      emoji: '🥣',
      // [DIRKS78] sumário e resumo do ERIC (plantas, sopa de peixe com prestuskies, sarana, sarana no vapor,
      // farinha torrada, massa frita, peixe frito, estômago de bacalhau cozido, óleo de foca, mariscos e
      // mexilhões, ouriços, quítons e lapas, patos e outras aves); p. 9 e a tradução inglesa ao lado (“The
      // month of July is the best time to gather wild rice because this is the time when the wild rice
      // stops growing”; “Let the sun shine on the cloth […] After it dries, store it for winter”).
      // [BERG97] §2.1.9.6, p. 96 (imperativo E, A -(a)da; neg. -lagada; “A qada ‘(please) eat!’ (A more
      // politely qadá with lengthened final vowel)”; “E, A sulagada ‘don't take it’; A hyutlagada ‘don't
      // spill it’”); §2.1.9.7, p. 97 (proibitivo: “A 1950- sisaaĝanax̂t ‘don't get lost (lose your way)’;
      // A ugunuuĝanaan ‘don't forget it’”); §2.1.9.9, p. 99 (condicional A -(i)gu-; “sunax̂ haqaguu ‘when
      // the ship comes’”); [DIRKS78] p. 7 (“… nagan ax̂s unada”, a ordem “cozinhe”); [BERG94] p. 278 (misal), p. 377 (suupax̂), p. 344
      // (saaxarax̂), p. 246 (kuufyax̂), p. 279 (mulukax̂), p. 376 (suulix̂), p. 276 (piichix̂), todos do russo.
      history:
        'Em 1978, Moses Dirks, de Atka, escreveu em aleúte o livro “Niiĝuĝim Qalgadangis / Atkan Food”, com o que ele e Lydia Dirks sabiam da cozinha da ilha, para as escolas bilíngues. São as receitas da ilha: as plantas do verão, a sopa de peixe com prestuskies, a sarana (alugax̂), a farinha torrada, a massa frita, o estômago de bacalhau, o óleo de foca, os ouriços, os mariscos e os patos. Na cozinha também entrou o russo: “suupax̂” (sopa), “saaxarax̂” (açúcar), “kuufyax̂” (café), “mulukax̂” (leite), “suulix̂” (sal), “piichix̂” (forno) e até o verbo “misal” (mexer).',
      culture_tip:
        'Julho é o melhor mês para colher a sarana, porque é quando ela para de crescer. Depois, é posta para secar ao sol e guardada para o inverno: “Hitaasazahliguun txin qakatil aguun qan’gim ngaan taxsada”, depois que secar, guarde para o inverno.',
      grammar_why:
        'As receitas dão ordens. Para pedir a uma pessoa que faça algo, o verbo termina em -da: “qada!”, coma!; “taxsada!”, guarde! Para dizer “não faça”, -lagada: “hyutlagada!”, não derrame! Com a última vogal alongada, “qadá!”, o convite fica mais educado.',
      grammar_examples: [
        ['Qada!', 'Coma!'],
        ['Hyutlagada!', 'Não derrame!'],
        ['Ulux̂ uhlii qalakan qax̂ ilax̂taa qada.', 'Não coma só carne, coma peixe também.'],
        ['Hitaasazahliguun txin qakatil aguun qan’gim ngaan taxsada.', 'Depois que secar, guarde para o inverno.'],
      ],
      character_guide: [
        ['-da', 'faça! (pedido a uma pessoa)', 'qada (coma!), unada (cozinhe!)'],
        ['-lagada', 'não faça!', 'sulagada (não pegue!), hyutlagada (não derrame!)'],
        ['-ĝanaan, -ĝanax̂t', 'cuidado para não…', 'ugunuuĝanaan (não esqueça!), sisaaĝanax̂t (não se perca!)'],
        ['-gu-', 'quando, se (o condicional)', 'sunax̂ haqaguu (quando o navio vem)'],
      ],
    },
    lessons: [
      {
        id: 'ale-u7-l1',
        title: 'Suupax̂, saaxarax̂, kuufyax̂',
        kind: 'licao',
        words: ['suupax̂', 'saaxarax̂', 'kuufyax̂', 'mulukax̂', 'suulix̂', 'luusxix̂'],
        // [BERG97] p. 222 (A 1978): “kuufyang saaxarax̂ ngaan angax̂tal taangazaq ‘I drink my coffee with
        // sugar added’”; p. 171 (A 1980): “ulum suupaa ilax̂taa pitruuskis ngaan angaĝazax̂ ‘wild parsley is
        // added to meat soup, too’”; p. 195 (A 1952, N.M. 1:9): “saaxarax̂, mukax̂ saaxarax̂, suxarix̂ ‘sugar,
        // flour [and] sugar, biscuit[s]’”.
        cloze: [
          { sentence: 'Kuufyang ___ ngaan angax̂tal taangazaq.', answer: 'saaxarax̂', options: ['saaxarax̂', 'suulix̂', 'luusxix̂'], translation: 'Eu tomo o meu café com açúcar.' },
          { sentence: 'Ulum ___ ilax̂taa pitruuskis ngaan angaĝazax̂.', answer: 'suupaa', options: ['suupaa', 'kuufyax̂', 'mulukax̂'], translation: 'Na sopa de carne também se põe salsa selvagem.' },
          { sentence: 'Saaxarax̂, mukax̂ saaxarax̂, ___.', answer: 'suxarix̂', options: ['suxarix̂', 'suulix̂', 'luusxix̂'], translation: 'Açúcar, farinha e açúcar, biscoitos.' },
        ],
        // [BERG97] p. 96: “A qada ‘(please) eat!’ (A more politely qadá with lengthened final vowel)”.
        voice: {
          bot: 'Qadá!',
          botTranslation: 'Coma, por favor!',
          expected: ['Qaĝaasakung!', 'Qaĝaasakung', 'qagaasakung'],
          hint: 'Agradeça o convite: “Qaĝaasakung!”.',
        },
        communityPrompt: 'Escreva as palavras da cozinha que vieram do russo — suupax̂, saaxarax̂, kuufyax̂, mulukax̂, suulix̂ — e diga como você toma o café, copiando a frase de Atka: “Kuufyang saaxarax̂ ngaan angax̂tal taangazaq”.',
      },
      {
        id: 'ale-u7-l2',
        title: 'Unada, taxsada',
        kind: 'licao',
        words: ['unalix', 'misal', 'taangalix', 'hyusix', 'chamĝulix', 'taxsalix'],
        // [BERG97] p. 222 (A 1978): “ulux̂ unal qakus ‘we cooked the meat and ate it’”; p. 158 (1950):
        // “chaanikam nagan taangax̂ hyutikuq ‘I am pouring water in the kettle’”; [DIRKS78] p. 9:
        // “Hitaasazahliguun txin qakatil aguun qan’gim ngaan taxsada” (“After it dries, store it for winter”).
        cloze: [
          { sentence: 'Ulux̂ unal ___.', answer: 'qakus', options: ['qakus', 'taxsada', 'hyutikuq'], translation: 'Cozinhamos a carne e comemos.' },
          { sentence: 'Chaanikam nagan taangax̂ ___.', answer: 'hyutikuq', options: ['hyutikuq', 'qakus', 'chamĝut'], translation: 'Estou pondo água na chaleira.' },
          { sentence: 'Hitaasazahliguun txin qakatil aguun qan’gim ngaan ___.', answer: 'taxsada', options: ['taxsada', 'qada', 'hyutlagada'], translation: 'Depois que secar, guarde para o inverno.' },
        ],
        // [BERG97] p. 158 (1950): “chakin taangam qinganagan ilaan chamĝut? ‘do you wash your hands in cold
        // water?’”.
        voice: {
          bot: 'Chakin taangam qinganagan ilaan chamĝut?',
          botTranslation: 'Você lava as mãos em água fria?',
          expected: ['Aang.', 'Aang', 'aang'],
          hint: 'Responda que sim: “Aang”.',
        },
        communityPrompt: 'Copie uma receita curta do “Atkan Food” e marque os verbos em -da (as ordens), como “taxsada” (guarde!) e “unada” (cozinhe!).',
      },
      {
        id: 'ale-u7-l3',
        title: 'Prova: Qam suupaa',
        kind: 'prova',
        words: [],
        cloze: [],
        // [BERG97] p. 62 (A 1981): “ulux̂ uhlii qalakan qax̂ ilax̂taa qada ‘don't eat only meat, eat fish
        // also’”.
        voice: {
          bot: 'Ulux̂ uhlii qalakan qax̂ ilax̂taa qada.',
          botTranslation: 'Não coma só carne, coma peixe também.',
          expected: ['Qaĝaasakung!', 'Qaĝaasakung', 'qagaasakung', 'Aang'],
          hint: 'Agradeça: “Qaĝaasakung!”.',
        },
        communityPrompt: 'Dê três ordens de cozinha com as formas da unidade: “Qada!” (coma!), “Hyutlagada!” (não derrame!) e “Ulux̂ uhlii qalakan qax̂ ilax̂taa qada” (não coma só carne, coma peixe também).',
      },
    ],
  },
  {
    id: 'ale-u8',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Kadim hadagaan',
    emoji: '📜',
    card: {
      id: 'ale-c8',
      title: 'As histórias de Cedor Snigaroff',
      emoji: '🎙️',
      // [NM] resumo do ERIC (ED127257): narrativa histórica de um atkano que viveu de 1890 a 1965, gravada
      // em 1952, traduzida e transcrita com a ajuda da filha; três partes: “Life in the Russian Period”,
      // “The End of the Russian Rule and the Coming of the Americans” e “The Ancient Life” (as guerras
      // entre os de Atka e os aleútes do leste). [BERG97] Introduction, p. 10–11 (Cedor L. Snigaroff,
      // 1890–1965, e a filha Vera; as tradições gravadas e publicadas em 1959, nova edição em 1986).
      // Frases: [BERG97] p. 295 (N.M. 1:15), p. 90 (N.M. 1:43), p. 200 (N.M. 1:40).
      history:
        'Cedor L. Snigaroff (1890–1965), de Atka, contou em 1952 as tradições históricas da ilha. Knut Bergsland gravou, e a filha dele, Vera, ajudou a transcrever e a traduzir. O livro “Niiĝuĝis Maqax̂tazaqangis / Atkan Historical Traditions” tem três partes: a vida no tempo dos russos, o fim do domínio russo e a chegada dos americanos, e a vida antiga, com as guerras entre os de Atka e os aleútes do leste. As frases desta unidade são dele, na grafia de Bergsland.',
      culture_tip:
        'No tempo dos russos, conta Snigaroff, a comida era guardada numa casa grande onde ninguém morava, feita só para isso. O peixe era salgado e seco, e tudo era guardado. E as pessoas daqui, dizem, vestiam roupas de pele de pássaro.',
      grammar_why:
        'O sufixo -za- marca o costume; junto com o passado -na-, vira “costumava”: “maqax̂tazanas”, eles costumavam fazer. E Snigaroff termina muitas frases com “hiilax̂tazas” ou “hiilax̂tadax̂”, dizem, conta-se: ele não viu, ouviu contar.',
      grammar_examples: [
        ['Hlax̂ akuqaang hiilax̂takus tutazaqaning.', 'Quando eu era menino, ouvi as pessoas contarem.'],
        ['Qas sulilgal, qakasxal, huuzuugizangis taxsazaqas ax̂takus.', 'O peixe era salgado e seco, e tudo era guardado.'],
        ['Hagumatal anĝaĝinas qaatulakan qanagzanas hiilax̂tadas.', 'Assim as pessoas passavam o inverno sem fome, dizem.'],
      ],
      character_guide: [
        ['-za-', 'de costume', 'taxsazaqas (era guardado)'],
        ['-zana-', 'costumava (no passado)', 'maqax̂tazanas (costumavam fazer)'],
        ['-lga-, -sxa-', 'a voz passiva: “era feito”', 'sulilgal (sendo salgado), qakasxal (sendo seco)'],
        ['hiilax̂tazas, hiilax̂tadax̂', 'dizem, conta-se', 'qanagzanas hiilax̂tadas (passavam o inverno, dizem)'],
      ],
    },
    lessons: [
      {
        id: 'ale-u8-l1',
        title: 'Kadim hadagaan',
        kind: 'licao',
        words: ['kadim hadagaan', 'anĝaĝinax̂', 'Kasakax̂', 'praviizax̂', 'igluqax̂', 'chngatux̂'],
        // [BERG97] p. 237 e p. 202 (A 1952, N.M. 1:1): “kadim hadagaan malgaliin udang anĝaĝiqas ax̂tanas
        // ‘how people (passive) lived here in the early days’”; p. 195 (A 1952, N.M. 1:9, 15, 16):
        // “qalgadax̂, qax̂, ulux̂, huzuugizaa ‘food, fish, meat, all of it’”, “haakus Unangam chux̂taqangis
        // uliigis, igluqas, an’gim chigdaĝanangis ‘those Aleut clothes, boots, hides, gut parkas’”.
        cloze: [
          { sentence: '___ malgaliin udang anĝaĝiqas ax̂tanas.', answer: 'Kadim hadagaan', options: ['Kadim hadagaan', 'Qilagan', 'Wan angalix̂'], translation: 'Como as pessoas viviam aqui antigamente.' },
          { sentence: 'Qalgadax̂, qax̂, ___, huzuugizaa.', answer: 'ulux̂', options: ['ulux̂', 'igluqax̂', 'chngatux̂'], translation: 'Comida, peixe, carne, tudo.' },
          { sentence: 'Haakus Unangam chux̂taqangis uliigis, ___, an’gim chigdaĝanangis.', answer: 'igluqas', options: ['igluqas', 'qas', 'Kasakas'], translation: 'Aquelas roupas aleútes: botas, couros, capas de tripa.' },
        ],
        // [BERG97] p. 249 (A 1952, N.M. 2:25): “hlax̂ akuqaang hiilax̂takus tutazaqaning ‘when I was a boy I
        // heard people telling about it’”.
        voice: {
          bot: 'Hlax̂ akuqaang hiilax̂takus tutazaqaning.',
          botTranslation: 'Quando eu era menino, ouvi as pessoas contarem.',
          expected: ['Aang.', 'Aang', 'aang', 'Qaĝaasakung'],
          hint: 'Mostre que está ouvindo: “Aang”.',
        },
        communityPrompt: 'Escreva o que se guardava para o inverno no tempo dos russos, com a lista de Snigaroff: “Qalgadax̂, qax̂, ulux̂, huzuugizaa” (comida, peixe, carne, tudo) e “saaxarax̂, mukax̂ saaxarax̂, suxarix̂” (açúcar, farinha e açúcar, biscoitos).',
      },
      {
        id: 'ale-u8-l2',
        title: 'Qas sulilgal, qakasxal',
        kind: 'licao',
        words: ['tutalix', 'haagalix', 'sulilix', 'qakadgul', 'asx̂alix', 'hiilax̂talix'],
        // [BERG97] p. 90 (A 1952, N.M. 1:43): “Qas sulilgal, qakasxal, huuzuugizangis taxsazaqas ax̂takus.
        // ‘Fish were salted and dried, and all of them were put away.’”; p. 234 (A 1952, N.M. 3:111): “haagal
        // asx̂alanas ‘they starved to death’”; p. 207 (A 1952, N.M. 1:54): “hagumatal anĝaĝinas qaatulakan
        // qanagzanas hiilax̂tadas ‘in that way the people lived through the winter without starving, it is
        // said’”.
        cloze: [
          { sentence: 'Qas ___, qakasxal, huuzuugizangis taxsazaqas ax̂takus.', answer: 'sulilgal', options: ['sulilgal', 'haagal', 'tutal'], translation: 'O peixe era salgado e seco, e tudo era guardado.' },
          { sentence: '___ asx̂alanas.', answer: 'Haagal', options: ['Haagal', 'Sulilgal', 'Qakadgul'], translation: 'Morreram de fome.' },
          { sentence: 'Hagumatal anĝaĝinas qaatulakan qanagzanas ___.', answer: 'hiilax̂tadas', options: ['hiilax̂tadas', 'tutazaqaning', 'asx̂alanas'], translation: 'Assim as pessoas passavam o inverno sem fome, dizem.' },
        ],
        // [BERG97] p. 87 (A): “qaatukuq ‘I am hungry’” e “haqal qada ‘come and eat!’”.
        voice: {
          bot: 'Qaatukuq.',
          botTranslation: 'Estou com fome.',
          expected: ['Haqal qada!', 'Haqal qada', 'haqal qada', 'Qada'],
          hint: 'Convide para comer: “Haqal qada!” (venha comer!).',
        },
        communityPrompt: 'Conte como se guardava o peixe antigamente, com a frase de Snigaroff: “Qas sulilgal, qakasxal, huuzuugizangis taxsazaqas ax̂takus”. Marque o -lga- e o -sxa- da voz passiva.',
      },
      {
        id: 'ale-u8-l3',
        title: 'Prova: Kadim hadagaan',
        kind: 'prova',
        words: [],
        cloze: [],
        // [BERG97] p. 88 (A): “haagalakaq ‘I am not hungry (now)’”; [OMNI] “Qaĝaasakung”.
        voice: {
          bot: 'Haagalakaq.',
          botTranslation: 'Não estou com fome (agora).',
          expected: ['Qaĝaasakung!', 'Qaĝaasakung', 'qagaasakung', 'Aang'],
          hint: 'Aceite e agradeça: “Qaĝaasakung!”.',
        },
        communityPrompt: 'Reconte a história de Snigaroff em três frases da unidade: “Hlax̂ akuqaang hiilax̂takus tutazaqaning”, “Qas sulilgal, qakasxal, huuzuugizangis taxsazaqas ax̂takus” e “Hagumatal anĝaĝinas qaatulakan qanagzanas hiilax̂tadas”.',
      },
    ],
  },
];
