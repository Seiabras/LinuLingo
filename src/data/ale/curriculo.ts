import type { UnitSeed } from '../types';

/**
 * Trilha do aleúte, do A1.1 ao A2.2, o teto do curso. Fontes no cabeçalho de vocabulario.ts: [OMNI],
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
      // plural; do 5 em diante, singular). [DIRKS78] Introduction (ouriços, mexilhões na maré baixa).
      history:
        'O aleúte conta em dez: “hatix̂” é dez e “sisax̂”, cem. Para mil e um milhão, a língua tomou palavras do russo: “tiisichax̂” e “miliyuunax̂”. As dezenas se fazem multiplicando: vinte é “algidim hatix̂”, duas vezes dez. Esse costume veio do leste, no tempo dos russos, e chegou a Atka por volta de 1840. Depois, o inglês tomou o lugar dos números altos. Em 1971, as crianças de Atka só contavam em aleúte até o cinco.',
      culture_tip:
        'Os ouriços-do-mar (“aguĝnax̂”) e os mexilhões (“waygix̂”) eram colhidos nas pedras, na maré baixa. E o pescador (“imyaĝnax̂”) levava rede (“ingix̂”) e isca (“umĝix̂”).',
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
];
