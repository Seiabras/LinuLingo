import type { UnitSeed } from '../types';

/**
 * Trilha do malgaxe: as duas unidades do nível A1 e, a partir daqui, as duas do A2 (pacote ainda
 * incompleto depois disso — ver incomplete em index.ts). Fontes das unidades A2: a entrada "tsena"
 * do malagasyword.org e o curso de malgaxe da Universidade de Wisconsin-Madison (para "tany
 * an-tsena", no mercado); artigos sobre o mercado Zoma de Analakely, em Antananarivo (vivytravel.com,
 * madacamp.com, lonelyplanet.com); a Wikipédia em inglês sobre o ariary, a moeda de Madagascar; e,
 * para o fuso horário, worldometers.info ("Indian/Antananarivo", UTC+3 o ano inteiro, sem horário
 * de verão).
 */
export const UNITS_MG: UnitSeed[] = [
  {
    id: 'mg-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Manao ahoana! As primeiras palavras em malgaxe',
    emoji: '👋',
    card: {
      id: 'mg-c1',
      title: 'Uma língua da Indonésia, numa ilha ao lado da África',
      emoji: '🗺️',
      history:
        'Madagascar fica a 400 km da costa africana, mas a língua da maioria do país não é africana: é austronésia, da mesma família do indonésio, do malaio e do javanês. O parente mais próximo do malgaxe hoje é o maanyan, falado no sul de Borneo (Indonésia) — os primeiros habitantes de Madagascar chegaram de lá, cruzando o Oceano Índico, entre os séculos VII e VIII. A população da ilha hoje é geneticamente cerca de metade africana, metade austronésia, mas a língua manteve quase só a herança austronésia, com poucos empréstimos de línguas bantas.',
      culture_tip:
        'O malgaxe é a língua materna da maioria dos quase 30 milhões de habitantes de Madagascar, e é língua oficial ao lado do francês. Este curso ensina o dialeto merina, a base do malgaxe padrão/oficial, falado nos planaltos centrais ao redor da capital Antananarivo — há outros dialetos regionais pela ilha, principalmente na costa.',
      grammar_why:
        'A diferença mais marcante do malgaxe para o português não está nas palavras, mas na ORDEM da frase: o malgaxe é VOS (verbo/predicado, depois objeto, depois sujeito) — o oposto da ordem SVO do português. Por isso “Tsara izy” não é “Bem ele”, e sim “Ele está bem”: o predicado (“tsara”, bom/bem) vem primeiro, e quem está bem (“izy”, ele/ela) vem depois.',
      grammar_examples: [
        ['Tsara izy.', 'Ele/ela está bem. (lit. “bem ele/ela”)'],
        ['Manao ahoana ianao?', 'Como você está? (lit. “faz como você”)'],
      ],
      character_guide: [
        ['ts', 'som parecido com o “tch” do português, mas mais seco, sem o “i”', 'Tsara (bom), tsia (não)'],
        ['tr / dr', 'a língua toca mais atrás no céu da boca do que no português, quase um som só', 'trano (casa), rano (água, sem o “t”)'],
        ['o', 'soa como o “u” do português, nunca como o “o” de “bola” ou “avô”', 'mofo (pão, soa “mufu”), trondro (peixe, soa “trundru”)'],
      ],
    },
    lessons: [
      {
        id: 'mg-u1-l1',
        title: 'Manao ahoana, misaotra!',
        kind: 'licao',
        words: ['Manao ahoana', 'Veloma', 'Misaotra', 'Azafady', 'Eny', 'Tsia'],
        cloze: [
          { sentence: '___, Rakoto!', answer: 'Manao ahoana', options: ['Manao ahoana', 'Veloma', 'Azafady'], translation: 'Oi, Rakoto!' },
          { sentence: 'Tsara be ny andro. ___, Reny!', answer: 'Misaotra', options: ['Misaotra', 'Veloma', 'Tsia'], translation: 'O dia está muito bom. Obrigado, mamãe!' },
          { sentence: '— Manao ahoana! — ___, tsara aho.', answer: 'Eny', options: ['Eny', 'Tsia', 'Veloma'], translation: '— Oi! — Sim, eu estou bem.' },
        ],
        voice: {
          bot: 'Manao ahoana! Ahoana ianao?',
          botTranslation: 'Oi! Como você está?',
          expected: ['Tsara aho, misaotra!', 'tsara aho', 'misaotra'],
          hint: 'Responda que está bem com “tsara aho” e agradeça com “misaotra”.',
        },
        communityPrompt: 'Escreva três frases em malgaxe: um cumprimento com “Manao ahoana”, um agradecimento com “Misaotra” e uma despedida com “Veloma”.',
      },
      {
        id: 'mg-u1-l2',
        title: 'Aho, ianao, izy',
        kind: 'licao',
        words: ['Aho', 'Ianao', 'Izy', 'Isika', 'Lehibe', 'Kely'],
        cloze: [
          { sentence: 'Tsara ___, misaotra!', answer: 'aho', options: ['aho', 'ianao', 'izy'], translation: 'Eu estou bem, obrigado!' },
          { sentence: 'Mihinana vary ___.', answer: 'isika', options: ['isika', 'aho', 'ianao'], translation: 'Nós comemos arroz.' },
          { sentence: '___ ny trano, kely ny saka.', answer: 'Lehibe', options: ['Lehibe', 'Kely', 'Tsara'], translation: 'A casa é grande, o gato é pequeno.' },
        ],
        voice: {
          bot: 'Manao ahoana ianao?',
          botTranslation: 'Como você está?',
          expected: ['Tsara aho, misaotra! Ianao?', 'tsara aho', 'misaotra'],
          hint: 'Responda com “tsara aho” e devolva a pergunta com “ianao?”.',
        },
        communityPrompt: 'Descreva algo grande (“lehibe”) e algo pequeno (“kely”) que você tem em casa, usando “manana” (ter).',
      },
      {
        id: 'mg-u1-l3',
        title: 'Prova: manao ahoana',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Manao ahoana! Manana trano lehibe ve ianao?',
          botTranslation: 'Oi! Você tem uma casa grande?',
          expected: ['Manao ahoana! Eny, manana trano lehibe aho, misaotra!', 'manao ahoana', 'manana trano lehibe', 'misaotra'],
          hint: 'Devolva o cumprimento, responda com “eny”/“tsia” e “manana trano lehibe aho” (eu tenho uma casa grande) e agradeça com “misaotra”.',
        },
        communityPrompt: 'Escreva uma apresentação curta em malgaxe: cumprimento, como você está (“tsara aho”) e algo sobre o seu tamanho preferido de casa (“lehibe” ou “kely”).',
      },
    ],
  },
  {
    id: 'mg-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ny fianakaviana sy ny trano',
    emoji: '🏠',
    card: {
      id: 'mg-c2',
      title: '“Rahalahy” e “rahavavy”: irmãos pelo sexo de quem fala',
      emoji: '🧭',
      history:
        'O malgaxe, como várias línguas austronésias, não escolhe a palavra para “irmão”/“irmã” só pela idade ou pelo sexo do irmão: ela também muda pelo sexo de QUEM FALA. “Rahalahy” é o irmão de um HOMEM, e “rahavavy” é a irmã de uma MULHER; para o irmão de uma mulher ou a irmã de um homem, o malgaxe tem outras palavras (“anadahy”, “anabavy”), fora desta primeira versão do curso. É uma lógica bem diferente do português, que nomeia irmãos só pelo sexo deles mesmos, não pelo de quem fala.',
      culture_tip:
        'A família extensa (“fianakaviana”) tem peso grande na vida malgaxe, inclusive em cerimônias como o “famadihana” (a “virada dos ossos”, um reencontro festivo com os antepassados) — assunto para mais adiante no curso, quando a gramática já cobrir frases mais longas.',
      grammar_why:
        'O substantivo vem ANTES do adjetivo em malgaxe, o oposto do que o português faz em casos como “casa grande”/“grande casa” (onde dá pra inverter, mas o padrão neutro é substantivo primeiro mesmo): em malgaxe não tem opção, é sempre substantivo + adjetivo. É a mesma lógica da ordem VOS (o núcleo vem primeiro, o detalhe depois).',
      grammar_examples: [
        ['trano lehibe', 'casa grande (lit. “casa grande”, nesta ordem)'],
        ['Lehibe ny trano.', 'A casa é grande. (como predicado, “lehibe” pula pra frente — ver unidade 1)'],
      ],
      character_guide: [
        ['ny', 'artigo definido (“o”/“a”/“os”/“as”), antes do substantivo', 'ny trano (a casa), ny reny (a mãe)'],
        ['-ko', 'sufixo de posse, “meu/minha”, colado na palavra', 'anarako (meu nome, de “anarana” + “ko”)'],
      ],
    },
    lessons: [
      {
        id: 'mg-u2-l1',
        title: 'Ny fianakaviana',
        kind: 'licao',
        words: ['Reny', 'Dada', 'Rahalahy', 'Rahavavy', 'Sakaiza', 'Fianakaviana'],
        cloze: [
          { sentence: 'Tsara ny ___.', answer: 'reny', options: ['reny', 'dada', 'sakaiza'], translation: 'A mãe está bem.' },
          { sentence: 'Lehibe ny ___.', answer: 'dada', options: ['dada', 'reny', 'rahavavy'], translation: 'O pai é grande/alto.' },
          { sentence: 'Tsara ny ___, tsy ratsy.', answer: 'sakaiza', options: ['sakaiza', 'fianakaviana', 'rahalahy'], translation: 'O amigo é bom, não é mau.' },
        ],
        voice: {
          bot: 'Manana fianakaviana lehibe ve ianao?',
          botTranslation: 'Você tem uma família grande?',
          expected: ['Eny, manana fianakaviana lehibe aho.', 'manana', 'fianakaviana lehibe'],
          hint: 'Responda com “eny” ou “tsia” e “manana fianakaviana lehibe aho” (eu tenho uma família grande).',
        },
        communityPrompt: 'Apresente a sua família em malgaxe: cite “reny” (mãe), “dada” (pai) e “rahalahy” ou “rahavavy” (irmão/irmã), com “tsara” para dizer que estão bem.',
      },
      {
        id: 'mg-u2-l2',
        title: 'Ao an-trano',
        kind: 'licao',
        words: ['Trano', 'Rano', 'Mihinana', 'Misotro', 'Tia', 'Mandeha'],
        cloze: [
          { sentence: 'Lehibe ny ___.', answer: 'trano', options: ['trano', 'rano', 'saka'], translation: 'A casa é grande.' },
          { sentence: 'Misotro ___ aho.', answer: 'rano', options: ['rano', 'trano', 'vary'], translation: 'Eu bebo água.' },
          { sentence: '___ vary aho.', answer: 'Tia', options: ['Tia', 'Mandeha', 'Misotro'], translation: 'Eu gosto de arroz.' },
        ],
        voice: {
          bot: 'Tia vary ve ianao?',
          botTranslation: 'Você gosta de arroz?',
          expected: ['Eny, tia vary aho!', 'tia vary', 'aho'],
          hint: 'Use “tia…aho” (eu gosto de…) para responder.',
        },
        communityPrompt: 'Descreva a sua casa (“trano”) em duas ou três frases, e diga o que você come (“mihinana”) ou bebe (“misotro”).',
      },
      {
        id: 'mg-u2-l3',
        title: 'Prova: fianakaviana sy trano',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Fianakaviana sy trano?',
          botTranslation: 'Família e casa?',
          expected: ['Manana reny sy dada aho. Lehibe ny trano.', 'manana', 'lehibe ny trano'],
          hint: 'Cite os parentes com “manana…aho” (eu tenho) e descreva a casa com “lehibe ny trano” ou “kely ny trano”.',
        },
        communityPrompt: 'Escreva um parágrafo curto apresentando a sua família e a sua casa, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
  {
    id: 'mg-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Ao an-tsena: ny isa sy ny vola',
    emoji: '🛍️',
    card: {
      id: 'mg-c3',
      title: 'Zoma: o mercado que deu nome à sexta-feira',
      emoji: '🧺',
      history:
        'Antananarivo teve, durante quase dois séculos, um dos maiores mercados a céu aberto do mundo: o Zoma, a grande feira de sexta-feira de Analakely. Segundo guias de viagem, o rei Andrianampoinimerina, no fim do século XVIII, ajudou a consolidar a sexta-feira como o grande dia de mercado do planalto central — e “zoma”, sexta-feira em malgaxe (a mesma palavra já vista na unidade de família), ficou sendo também o nome do próprio mercado. Por décadas a feira tomou conta de toda a avenida principal da capital; em 1997, por causa do trânsito e da higiene, ela foi transferida para os pavilhões cobertos de Analakely, de telhado vermelho, erguidos entre os anos 1920 e 1930. O mercado diário de Analakely que existe hoje é bem menor do que o antigo Zoma, mas continua um ponto central da cidade.',
      culture_tip:
        'Pechinchar é parte normal da conversa num mercado malgaxe: o primeiro preço quase nunca é o preço final. “Mandeha miantsena” é a expressão para “ir fazer compras”. A moeda oficial de Madagascar desde 2005 é o ariary (abreviado “Ar”), que substituiu o antigo franco malgaxe. Outros bairros de Antananarivo têm mercados batizados pelo dia da semana em que funcionam, como a feira de quinta-feira de Mahamasina, famosa por roupa usada.',
      grammar_why:
        'As dezenas de trinta a noventa em malgaxe não são palavras novas: é só o dígito colado na terminação “-polo”/“-folo” (de “folo”, dez) — o mesmo padrão do “roapolo” (vinte) já visto antes. E, para perguntar a idade ou um preço, o malgaxe usa a mesma palavra “firy” (quantos) nos dois casos: “Firy taona ianao?” (quantos anos você tem?) tem a mesma estrutura de “Hoatrinona ny mofo?” (quanto custa o pão?) — a pergunta vem primeiro, como manda a ordem VOS já conhecida.',
      grammar_examples: [
        ['Telopolo taona aho.', 'Eu tenho trinta anos. (lit. “trinta anos eu”)'],
        ['Hoatrinona ny mofo?', 'Quanto custa o pão?'],
        ['Arivo ariary ny vidy.', 'O preço é mil ariary.'],
      ],
      character_guide: [
        ['an-', 'prefixo de lugar (“no”/“em”), colado direto no substantivo', 'an-tsena (no mercado, de “amin\'” + “tsena”)'],
        ['Ar', 'abreviação escrita do ariary, a moeda de Madagascar desde 2005', '1.000 Ar = arivo ariary'],
      ],
    },
    lessons: [
      {
        id: 'mg-u3-l1',
        title: 'Telopolo ka hatramin\'ny valopolo',
        kind: 'licao',
        words: ['Telopolo', 'Efapolo', 'Dimampolo', 'Enimpolo', 'Fitopolo', 'Valopolo'],
        cloze: [
          { sentence: '___ taona aho.', answer: 'Telopolo', options: ['Telopolo', 'Efapolo', 'Enimpolo'], translation: 'Eu tenho trinta anos.' },
          { sentence: '___ taona ny dada.', answer: 'Dimampolo', options: ['Dimampolo', 'Valopolo', 'Fitopolo'], translation: 'O pai tem cinquenta anos.' },
          { sentence: 'Manana saka ___ ny tanàna.', answer: 'Fitopolo', options: ['Fitopolo', 'Telopolo', 'Efapolo'], translation: 'A cidade tem setenta gatos.' },
        ],
        voice: {
          bot: 'Firy taona ianao?',
          botTranslation: 'Quantos anos você tem?',
          expected: ['Telopolo taona aho.', 'telopolo taona', 'aho'],
          hint: 'Responda com “[número] taona aho” — o número vem primeiro, antes de “taona” (ano) e do sujeito “aho”, como em “Telopolo taona aho” (eu tenho trinta anos).',
        },
        communityPrompt: 'Escreva em malgaxe a sua idade e a de duas pessoas da sua família, usando as dezenas de trinta a oitenta: “[número] taona aho”, “[número] taona ny…”.',
      },
      {
        id: 'mg-u3-l2',
        title: 'Sivifolo, zato, arivo: ny vola sy ny vidy',
        kind: 'licao',
        words: ['Sivifolo', 'Zato', 'Arivo', 'Vola', 'Ariary', 'Vidy'],
        cloze: [
          { sentence: '___ taona ny lehilahy.', answer: 'Sivifolo', options: ['Sivifolo', 'Zato', 'Arivo'], translation: 'O homem tem noventa anos.' },
          { sentence: '___ taona ny trano.', answer: 'Zato', options: ['Zato', 'Arivo', 'Sivifolo'], translation: 'A casa tem cem anos.' },
          { sentence: 'Manana ___ arivo aho.', answer: 'Ariary', options: ['Ariary', 'Vola', 'Vidy'], translation: 'Eu tenho mil ariary.' },
        ],
        voice: {
          bot: 'Hoatrinona ny trondro?',
          botTranslation: 'Quanto custa o peixe?',
          expected: ['Arivo ariary ny vidy.', 'arivo ariary', 'vidy'],
          hint: 'Diga o preço com o número primeiro: “Arivo ariary ny vidy” (o preço é mil ariary) — “ny vidy” (o preço) vem depois, como sujeito.',
        },
        communityPrompt: 'Escreva uma lista de compras com três coisas e o preço de cada uma em ariary, usando pelo menos “zato” (cem) ou “arivo” (mil).',
      },
      {
        id: 'mg-u3-l3',
        title: 'Mividy sy mivarotra: mora ve sa lafo?',
        kind: 'voz',
        words: ['Tsena', 'Hoatrinona', 'Firy', 'Mora', 'Lafo', 'Mividy'],
        cloze: [
          { sentence: 'Mandeha tany an-___ aho.', answer: 'tsena', options: ['tsena', 'trano', 'vola'], translation: 'Eu vou ao mercado.' },
          { sentence: '___ ny mofo?', answer: 'Hoatrinona', options: ['Hoatrinona', 'Firy', 'Tsia'], translation: 'Quanto custa o pão?' },
          { sentence: 'Mora ny mofo, ___ ny trondro.', answer: 'lafo', options: ['lafo', 'mora', 'tsara'], translation: 'O pão é barato, o peixe é caro.' },
        ],
        voice: {
          bot: 'Lafo ny trondro androany.',
          botTranslation: 'O peixe está caro hoje.',
          expected: ['Eny, lafo ny trondro. Mividy mofo aho.', 'mividy mofo', 'lafo'],
          hint: 'Confirme que está caro (“Eny, lafo ny trondro”) e diga o que você vai comprar no lugar: “Mividy mofo aho” (eu compro pão).',
        },
        communityPrompt: 'Escreva um diálogo curto no mercado (tsena): pergunte o preço de duas coisas com “Hoatrinona”, diga se é “mora” (barato) ou “lafo” (caro), e feche comprando uma delas com “Mividy…aho”.',
      },
      {
        id: 'mg-u3-l4',
        title: 'Prova: ao an-tsena',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Tongasoa ao an-tsena! Mila inona ianao?',
          botTranslation: 'Bem-vindo ao mercado! Você precisa do quê?',
          expected: ['Mila mofo sy trondro aho. Hoatrinona izany?', 'mila mofo sy trondro', 'hoatrinona'],
          hint: 'Diga o que você precisa com “Mila…aho” (eu preciso de…) e pergunte o preço com “Hoatrinona izany?” (quanto custa isso?).',
        },
        communityPrompt: 'Escreva uma cena completa no mercado: cumprimento, pergunta de preço com “Hoatrinona”, resposta com um número (de trinta a mil), e diga se você vai comprar (“Mividy…aho”) ou se acha caro (“Lafo!”).',
      },
    ],
  },
  {
    id: 'mg-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Amin\'ny firy? Ny ora sy ny andro',
    emoji: '🕐',
    card: {
      id: 'mg-c4',
      title: 'Um país sem hora de verão',
      emoji: '🌅',
      history:
        'Madagascar fica no fuso UTC+3 o ano inteiro, sem horário de verão: o relógio nunca muda, do extremo norte ao extremo sul da ilha, e a mesma hora marcada em Antananarivo vale também em Toamasina, Antsirabe ou Mahajanga. É um detalhe prático para quem pergunta a hora em malgaxe: ela não muda de estação, só o horário do nascer e do pôr do sol varia um pouco ao longo do ano.',
      culture_tip:
        'Para perguntar a hora, usa-se “Amin\'ny firy izao?” (que horas são agora?) — “amin\'ny” vem junto do número, e a parte do dia (“maraina”, manhã; “hariva”, fim de tarde; “alina”, noite) fecha a frase. O malgaxe tem um jeito próprio de contar os minutos, com palavras diferentes das vistas aqui — por enquanto, este curso fica só nas horas cheias.',
      grammar_why:
        'Duas peças novas de gramática aparecem nesta unidade. A primeira é “amin\'ny”, que vem antes do número da hora: “amin\'ny enina maraina” (às seis da manhã). A segunda é “tsy”, que nega a frase e fica sempre colada ao predicado, no comecinho — nunca perto do sujeito, como em português. As duas já apareciam escondidas em frases de unidades anteriores (“Tsy mahafantatra aho”, já na primeira unidade); agora ganham explicação própria.',
      grammar_examples: [
        ['Amin\'ny firy izao?', 'Que horas são agora?'],
        ['Mifoha amin\'ny fito maraina aho.', 'Eu me levanto às sete da manhã.'],
        ['Tsy miasa aho androany.', 'Eu não trabalho hoje.'],
      ],
      character_guide: [
        ['amin\'ny', 'marca de hora: vem sempre antes do número', 'Amin\'ny firy izao? (que horas são agora?)'],
        ['tsy', 'nega o predicado, sempre antes dele, nunca perto do sujeito', 'Tsy miasa aho. (eu não trabalho)'],
      ],
    },
    lessons: [
      {
        id: 'mg-u4-l1',
        title: 'Amin\'ny firy izao?',
        kind: 'licao',
        words: ['Ora', 'Maraina', 'Hariva', 'Alina', 'Izao', 'Firy'],
        cloze: [
          { sentence: 'Amin\'ny ___ izao?', answer: 'Firy', options: ['Firy', 'Ora', 'Maraina'], translation: 'Que horas são agora?' },
          { sentence: 'Mifoha amin\'ny enina ___ aho.', answer: 'Maraina', options: ['Maraina', 'Hariva', 'Alina'], translation: 'Eu me levanto às seis da manhã.' },
          { sentence: 'Matory amin\'ny folo ___ aho.', answer: 'Alina', options: ['Alina', 'Maraina', 'Ora'], translation: 'Eu durmo às dez da noite.' },
        ],
        voice: {
          bot: 'Amin\'ny firy izao?',
          botTranslation: 'Que horas são agora?',
          expected: ['Amin\'ny fito maraina izao.', 'amin\'ny fito maraina', 'izao'],
          hint: 'Responda com “Amin\'ny [número] [maraina/hariva/alina] izao” — o número e a parte do dia vêm sempre depois de “amin\'ny”.',
        },
        communityPrompt: 'Escreva três horários do seu dia com uma atividade em cada um, usando “amin\'ny [número] [maraina/hariva/alina]”.',
      },
      {
        id: 'mg-u4-l2',
        title: 'Miasa sa mianatra?',
        kind: 'licao',
        words: ['Miasa', 'Mianatra', 'Mifoha', 'Matory', 'Rahampitso', 'Omaly'],
        cloze: [
          { sentence: '___ amin\'ny fito maraina aho.', answer: 'Mifoha', options: ['Mifoha', 'Matory', 'Miasa'], translation: 'Eu me levanto às sete da manhã.' },
          { sentence: '___ any an-tsena ny dada.', answer: 'Miasa', options: ['Miasa', 'Mianatra', 'Matory'], translation: 'O pai trabalha no mercado.' },
          { sentence: '___, mianatra malagasy aho.', answer: 'Rahampitso', options: ['Rahampitso', 'Omaly', 'Androany'], translation: 'Amanhã, eu estudo malgaxe.' },
        ],
        voice: {
          bot: 'Miasa ve ianao androany?',
          botTranslation: 'Você trabalha hoje?',
          expected: ['Eny, miasa aho. Mianatra koa aho rahampitso.', 'miasa aho', 'mianatra'],
          hint: 'Responda com “eny”/“tsia” e “miasa aho” (eu trabalho); acrescente “koa” (também) e “rahampitso” (amanhã) para dizer o que mais você faz.',
        },
        communityPrompt: 'Descreva a sua rotina: a que horas você “mifoha” (levanta), se você “miasa” (trabalha) ou “mianatra” (estuda), e a que horas você “matory” (dorme).',
      },
      {
        id: 'mg-u4-l3',
        title: 'Mafana sa mangatsiaka? Ny andro',
        kind: 'voz',
        words: ['Mafana', 'Mangatsiaka', 'Orana', 'Masoandro', 'Tsara', 'Ratsy'],
        cloze: [
          { sentence: '___ ny andro androany.', answer: 'Mafana', options: ['Mafana', 'Mangatsiaka', 'Ratsy'], translation: 'Está quente hoje.' },
          { sentence: 'Misy ___ androany.', answer: 'Orana', options: ['Orana', 'Masoandro', 'Mafana'], translation: 'Está chovendo hoje.' },
          { sentence: 'Tsara ny andro, misy ___.', answer: 'Masoandro', options: ['Masoandro', 'Orana', 'Alina'], translation: 'O dia está bom, tem sol.' },
        ],
        voice: {
          bot: 'Ahoana ny andro androany?',
          botTranslation: 'Como está o tempo hoje?',
          expected: ['Tsara ny andro, mafana sy misy masoandro.', 'tsara ny andro', 'mafana', 'masoandro'],
          hint: 'Descreva o dia com “tsara”/“ratsy” (bom/mau) e os adjetivos de clima: “mafana” (quente), “mangatsiaka” (frio), “misy orana”/“misy masoandro” (tem chuva/tem sol).',
        },
        communityPrompt: 'Descreva o tempo de hoje em malgaxe: “tsara” ou “ratsy”, “mafana” ou “mangatsiaka”, e se “misy orana” ou “misy masoandro”.',
      },
      {
        id: 'mg-u4-l4',
        title: 'Prova: ny ora sy ny andro',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Amin\'ny firy ianao mifoha, ary ahoana ny andro androany?',
          botTranslation: 'A que horas você se levanta, e como está o tempo hoje?',
          expected: ['Mifoha amin\'ny enina maraina aho. Tsara ny andro, mafana.', 'mifoha amin\'ny enina maraina', 'tsara ny andro'],
          hint: 'Diga a que horas você se levanta com “Mifoha amin\'ny…aho” e descreva o tempo com “tsara”/“ratsy” e “mafana”/“mangatsiaka”.',
        },
        communityPrompt: 'Escreva um parágrafo curto sobre o seu dia: a que horas você acorda e dorme (“amin\'ny…”), se trabalha ou estuda, e como está o tempo hoje — usando pelo menos uma frase negada com “tsy”.',
      },
    ],
  },
];
