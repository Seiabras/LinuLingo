import type { UnitSeed } from '../types';

/**
 * Trilha do bósnio: quatro unidades, A1.1 ao A2.2 — ver `incomplete` em index.ts. As de B1 ao C2
 * chegam depois. Fontes das unidades 3 e 4: Wikipédia ("Serbo-Croatian grammar") e Wikcionário em
 * inglês, citadas em vocabulario.ts e gramatica.ts.
 */
export const UNITS_BS: UnitSeed[] = [
  {
    id: 'bs-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Zdravo! Prvi koraci',
    emoji: '👋',
    card: {
      id: 'bs-c1',
      title: 'Uma entre três línguas quase iguais',
      emoji: '🕌',
      history:
        'O bósnio é a língua oficial da Bósnia e Herzegovina, de base štokaviana como o croata e o sérvio — os três vêm do mesmo continuum dialetal e são quase 100% inteligíveis entre si. Viraram padrões nacionais distintos a partir dos anos 1990, depois da dissolução da Iugoslávia, numa questão de identidade e de história, não de distância estrutural grande entre eles. O bósnio usa o alfabeto latino (como aqui) e também o cirílico, os dois oficiais no país. Séculos de domínio otomano deixaram uma marca que o diferencia dos vizinhos: um vocabulário com bastante herança turca e árabe, sobretudo na comida, na religião e no dia a dia.',
      culture_tip:
        '“Zdravo” serve para cumprimentar e também para se despedir, informalmente, a qualquer hora. Muitos bosníacos também usam “merhaba”, do turco, uma saudação informal com cara de casa — vem do árabe “mercaba” (bem-vindo, como amigo) e é só mais um sinal da herança otomana na língua. Para tratar com respeito ou falar com várias pessoas, usa-se “Vi” (com maiúscula e o verbo no plural).',
      grammar_why:
        'O bósnio conserva o som “h” em palavras onde o sérvio e o croata o perderam: “lahko” (fácil/leve) em vez de “lako”, e “kahva” (café, do turco “kahve”) em vez de “kafa” (sérvio) ou “kava” (croata). É um dos sinais mais citados do padrão bósnio.',
      grammar_examples: [
        ['Zdravo! Ja sam Amina.', 'Oi! Eu me chamo Amina.'],
        ['Kako se zoveš?', 'Como você se chama?'],
        ['On je iz Mostara, ona je iz Sarajeva.', 'Ele é de Mostar, ela é de Sarajevo.'],
        ['Dobro, hvala. A ti?', 'Bem, obrigado. E você?'],
      ],
      character_guide: [
        ['č / ć', 'dois sons de “tch”: č é mais forte, ć mais suave', 'čaj (chá), ćevapi (prato típico)'],
        ['š', 'como o “x” de “xícara”', 'šta (o que), naš (nosso)'],
        ['ž', 'como o “j” de “já”', 'žena (mulher)'],
        ['đ / dž', 'dois sons de “dj”: đ é mais suave, dž mais forte, como o “j” do inglês', 'đak (aluno), džep (bolso)'],
        ['h', 'sempre pronunciado, mesmo onde sérvio e croata o perderam', 'lahko (fácil), kahva (café)'],
      ],
    },
    lessons: [
      {
        id: 'bs-u1-l1',
        title: 'Zdravo, hvala, doviđenja!',
        kind: 'licao',
        words: ['zdravo', 'dobar dan', 'dobro veče', 'laku noć', 'doviđenja', 'hvala'],
        cloze: [
          { sentence: '___, Amina! Kako si?', answer: 'Zdravo', options: ['Zdravo', 'Doviđenja', 'Hvala'], translation: 'Oi, Amina! Como vai?' },
          { sentence: 'Sada je veče: ___!', answer: 'dobro veče', options: ['dobro veče', 'dobar dan', 'hvala'], translation: 'Agora é noite: boa noite!' },
          { sentence: 'Puno ___!', answer: 'hvala', options: ['hvala', 'zdravo', 'doviđenja'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: 'Zdravo! Kako si?',
          botTranslation: 'Oi! Como vai?',
          expected: ['Dobro, hvala! A ti?', 'dobro', 'hvala'],
          hint: 'Responda que vai bem e devolva a pergunta: “Dobro, hvala! A ti?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em bósnio: um de dia (“Dobar dan…”), um à noite (“Dobro veče…”) e uma despedida (“Doviđenja”).',
      },
      {
        id: 'bs-u1-l2',
        title: 'Ja, ti, on, ona',
        kind: 'licao',
        words: ['ja', 'ti', 'on', 'ona', 'zvati se', 'ime'],
        cloze: [
          { sentence: '___ se zovem Amina.', answer: 'Ja', options: ['Ja', 'Ti', 'On'], translation: 'Eu me chamo Amina.' },
          { sentence: 'Kako ___ zoveš?', answer: 'se', options: ['se', 'si', 'je'], translation: 'Como você se chama?' },
          { sentence: '___ je iz Mostara.', answer: 'On', options: ['On', 'Ja', 'Ti'], translation: 'Ele é de Mostar.' },
        ],
        voice: {
          bot: 'Zdravo! Kako se zoveš?',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['Zovem se Ana. A ti?', 'zovem se', 'a ti'],
          hint: 'Diga o seu nome com “Zovem se…” e devolva a pergunta com “A ti?”.',
        },
        communityPrompt: 'Apresente-se em bósnio: diga o seu nome com “Zovem se…” e pergunte o nome de alguém com “Kako se zoveš?”.',
      },
      {
        id: 'bs-u1-l3',
        title: 'Test: prvi koraci',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Zdravo! Ja sam Tarik. Kako se zoveš i odakle si?',
          botTranslation: 'Oi! Eu me chamo Tarik. Como você se chama e de onde você é?',
          expected: ['Zdravo! Zovem se Lucia i ja sam iz São Paula.', 'zovem se', 'ja sam iz', 'zdravo'],
          hint: 'Devolva o cumprimento (“Zdravo!”), diga o nome com “Zovem se…” e a cidade com “Ja sam iz…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “Zovem se…”, cidade com “Ja sam iz…” e uma despedida.',
      },
    ],
  },
  {
    id: 'bs-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Porodica i kuća',
    emoji: '👪',
    card: {
      id: 'bs-c2',
      title: 'Hljeb, kahva e os empréstimos do turco',
      emoji: '🫖',
      history:
        'Quase cinco séculos de domínio otomano (do século XV ao XIX) deixaram no bósnio um vocabulário cotidiano cheio de turquismos, muitos deles de origem árabe ou persa que chegaram pelo turco: “kahva” (café), “jastuk” (travesseiro), “sat” (hora, relógio), “komšija” (vizinho). São palavras do dia a dia, não só de religião ou de culinária — e aparecem também no sérvio e, em menor grau, no croata, mas são mais numerosas e mais vivas no uso bósnio.',
      culture_tip:
        'O “komšija” (vizinho) é uma figura importante na vida bósnia: é comum levar e receber pratos de comida entre vizinhos, sobretudo em datas especiais. A palavra vem do turco “komşu”.',
      grammar_why:
        'O possessivo vai antes do nome e concorda com ele: “moj brat” (meu irmão, masculino), “moja sestra” (minha irmã, feminino). O verbo “imati” (ter) é regular: “imam, imaš, ima, imamo, imate, imaju”. Para negar o que quer que seja, basta pôr “ne” antes do verbo: “ne znam” (não sei).',
      grammar_examples: [
        ['Imam brata i sestru.', 'Tenho um irmão e uma irmã.'],
        ['Moja porodica je velika.', 'A minha família é grande.'],
        ['Mlijeko je bijelo.', 'O leite é branco.'],
        ['Ne znam.', 'Eu não sei.'],
      ],
      character_guide: [
        ['porodica', 'a palavra bósnia e sérvia para “família”; o croata prefere “obitelj”', 'moja porodica (minha família)'],
        ['-ice', 'sufixo diminutivo/carinhoso comum em nomes e palavras do dia a dia', 'kućica (casinha)'],
      ],
    },
    lessons: [
      {
        id: 'bs-u2-l1',
        title: 'Moja porodica',
        kind: 'licao',
        words: ['porodica', 'majka', 'otac', 'brat', 'sestra', 'imati'],
        cloze: [
          { sentence: 'Moja ___ se zove Fatima.', answer: 'majka', options: ['majka', 'otac', 'brat'], translation: 'A minha mãe se chama Fatima.' },
          { sentence: 'Ja ___ brata.', answer: 'imam', options: ['imam', 'sam', 'idem'], translation: 'Eu tenho um irmão.' },
          { sentence: 'Moj ___ je iz Mostara.', answer: 'otac', options: ['otac', 'sestra', 'majka'], translation: 'O meu pai é de Mostar.' },
        ],
        voice: {
          bot: 'Imaš li braću ili sestre?',
          botTranslation: 'Você tem irmãos ou irmãs?',
          expected: ['Da, imam brata i sestru.', 'imam', 'brata', 'sestru'],
          hint: 'Responda com “Da, imam…” ou “Ne, nemam braće ni sestara”.',
        },
        communityPrompt: 'Descreva a sua família em bósnio: quantos irmãos (braća) e irmãs (sestre) você tem, usando “imam”.',
      },
      {
        id: 'bs-u2-l2',
        title: 'U kući',
        kind: 'licao',
        words: ['kuća', 'voda', 'hljeb', 'mlijeko', 'sir', 'kahva'],
        cloze: [
          { sentence: 'Moja ___ je mala.', answer: 'kuća', options: ['kuća', 'voda', 'hljeb'], translation: 'A minha casa é pequena.' },
          { sentence: 'Ja pijem ___.', answer: 'vodu', options: ['vodu', 'hljeb', 'sir'], translation: 'Eu bebo água.' },
          { sentence: 'Jedem hljeb sa ___.', answer: 'sirom', options: ['sirom', 'vodom', 'mlijekom'], translation: 'Eu como pão com queijo.' },
        ],
        voice: {
          bot: 'Šta piješ ujutru?',
          botTranslation: 'O que você bebe de manhã?',
          expected: ['Pijem kahvu.', 'pijem', 'kahvu'],
          hint: 'Diga o que bebe com “Pijem…”.',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: “Jedem…” e “Pijem…”.',
      },
      {
        id: 'bs-u2-l3',
        title: 'Test: porodica i kuća',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Imaš li braću ili sestre? Šta piješ ujutru?',
          botTranslation: 'Você tem irmãos ou irmãs? O que você bebe de manhã?',
          expected: ['Imam sestru i pijem kahvu.', 'imam', 'pijem'],
          hint: 'Diga quem você tem na família com “imam…” e o que bebe com “pijem…”.',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “imam”, “zovem se” e “je”.',
      },
    ],
  },
  {
    id: 'bs-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Vrijeme i odjeća',
    emoji: '🧥',
    card: {
      id: 'bs-c3',
      title: 'O inverno na Baščaršija',
      emoji: '❄️',
      history:
        'Sarajevo fica num vale cercado de montanhas, o que marca bem as quatro estações: os invernos são frios, com neve frequente (inclusive sediou os Jogos Olímpicos de Inverno de 1984), e os verões, bem mais quentes. Essa variação de clima molda o vocabulário do dia a dia — e também a roupa, com o comércio da Baščaršija vendendo tanto peças tradicionais quanto roupa comum de inverno.',
      culture_tip:
        'Perguntar “Kakvo je vrijeme?” (como está o tempo?) é uma forma comum de começar uma conversa no Bósnia, como em boa parte da Europa. Falar do frio ou do calor é um jeito seguro e neutro de puxar assunto com desconhecidos.',
      grammar_why:
        'Esta unidade traz o perfekt (passado), que junta o presente de “biti” com um particípio que muda pelo gênero de quem fala (“kupio sam” um homem, “kupila sam” uma mulher), e o futur I, que junta a forma reduzida de “htjeti” com o infinitivo (“ću nositi” ou “nosit ću”, as duas ordens certas).',
      grammar_examples: [
        ['Juče je padala kiša.', 'Ontem choveu.'],
        ['Kupila sam novu jaknu.', 'Eu comprei uma jaqueta nova. (fala uma mulher)'],
        ['Sutra ću nositi haljinu.', 'Amanhã eu vou usar um vestido.'],
        ['Moram kupiti šešir.', 'Eu tenho que comprar um chapéu.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'bs-u3-l1',
        title: 'Kakvo je vrijeme?',
        kind: 'licao',
        words: ['kiša', 'sunce', 'vjetar', 'snijeg', 'topao', 'hladan'],
        cloze: [
          { sentence: 'Juče je padala ___.', answer: 'kiša', options: ['kiša', 'sunce', 'vjetar'], translation: 'Ontem choveu.' },
          { sentence: 'Danas je ___.', answer: 'toplo', options: ['toplo', 'hladno', 'kiša'], translation: 'Hoje está quente.' },
          { sentence: 'Duva jak ___.', answer: 'vjetar', options: ['vjetar', 'snijeg', 'sunce'], translation: 'Está ventando forte.' },
        ],
        voice: {
          bot: 'Kakvo je danas vrijeme?',
          botTranslation: 'Como está o tempo hoje?',
          expected: ['Danas je toplo i sija sunce.', 'toplo', 'sunce'],
          hint: 'Descreva o tempo com “Danas je…” e “sunce” ou “kiša”.',
        },
        communityPrompt: 'Descreva o tempo de hoje em bósnio, usando pelo menos duas palavras desta lição (kiša, sunce, vjetar, snijeg, topao, hladan).',
      },
      {
        id: 'bs-u3-l2',
        title: 'Kupujem odjeću',
        kind: 'licao',
        words: ['jakna', 'cipela', 'haljina', 'šešir', 'kupiti', 'nositi'],
        cloze: [
          { sentence: 'Juče sam kupila novu ___.', answer: 'jaknu', options: ['jaknu', 'cipelu', 'haljinu'], translation: 'Ontem eu comprei uma jaqueta nova.' },
          { sentence: 'Ona nosi lijepu ___.', answer: 'haljinu', options: ['haljinu', 'jaknu', 'cipelu'], translation: 'Ela está usando um vestido bonito.' },
          { sentence: 'Sutra ću nositi novi ___.', answer: 'šešir', options: ['šešir', 'cipelu', 'jaknu'], translation: 'Amanhã eu vou usar um chapéu novo.' },
        ],
        voice: {
          bot: 'Šta ćeš sutra nositi?',
          botTranslation: 'O que você vai usar amanhã?',
          expected: ['Sutra ću nositi jaknu i cipele.', 'sutra ću nositi', 'jaknu'],
          hint: 'Diga o que vai usar com “Sutra ću nositi…”.',
        },
        communityPrompt: 'Escreva três frases sobre roupas em bósnio, usando “kupila/kupio sam” (eu comprei) e “ću nositi” (eu vou usar).',
      },
      {
        id: 'bs-u3-l3',
        title: 'Test: vrijeme i odjeća',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Juče je padala kiša. Šta ćeš sutra nositi?',
          botTranslation: 'Ontem choveu. O que você vai usar amanhã?',
          expected: ['Sutra ću nositi jaknu, jer je hladno.', 'ću nositi', 'jaknu'],
          hint: 'Diga o que vai usar com “ću nositi…” e explique o clima com “hladno” ou “toplo”.',
        },
        communityPrompt: 'Escreva um parágrafo curto sobre o tempo de ontem (perfekt: “bilo je…”, “padala je…”) e a roupa de amanhã (futur: “ću nositi…”), usando pelo menos três palavras desta unidade.',
      },
    ],
  },
  {
    id: 'bs-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Tijelo, zanimanja i osjećaji',
    emoji: '🩺',
    card: {
      id: 'bs-c4',
      title: 'A Vijećnica, reconstruída tijolo por tijolo',
      emoji: '📚',
      history:
        'A Vijećnica, a antiga câmara municipal de Sarajevo e depois biblioteca nacional, foi incendiada durante o cerco de Sarajevo em 1992, numa das maiores perdas culturais da guerra da Bósnia — milhares de livros e manuscritos se perderam no fogo. O prédio foi reconstruído e reaberto em 2014, hoje de volta como câmara municipal e espaço cultural, um símbolo da reconstrução da cidade depois da guerra.',
      culture_tip:
        'Perguntar pela profissão de alguém (“Čime se baviš?”, o que você faz?) é comum numa conversa nova. E assim como em português, é normal perguntar como alguém está se sentindo (“Kako se osjećaš?”) depois de contar uma notícia boa ou má.',
      grammar_why:
        'Esta unidade traz o lokativ (caso usado com “u”/“na” para dizer ONDE algo está, diferente do akuzativ de movimento: “u bolnici” é “no hospital”, mas “idem u bolnicu” é “vou ao hospital”) e os verbos modais “moći”, “morati” e “trebati”, sempre seguidos direto pelo infinitivo.',
      grammar_examples: [
        ['Moja mama radi u bolnici.', 'A minha mãe trabalha no hospital.'],
        ['Idem u bolnicu.', 'Eu vou ao hospital.'],
        ['Moram raditi sutra.', 'Eu tenho que trabalhar amanhã.'],
        ['Osjećam se umoran.', 'Eu me sinto cansado.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'bs-u4-l1',
        title: 'Tijelo i zanimanja',
        kind: 'licao',
        words: ['glava', 'ruka', 'liječnik', 'učitelj', 'kuhar', 'inženjer'],
        cloze: [
          { sentence: '___ me boli.', answer: 'Glava', options: ['Glava', 'Ruka', 'Noga'], translation: 'Minha cabeça está doendo.' },
          { sentence: 'Moj otac je ___.', answer: 'učitelj', options: ['učitelj', 'liječnik', 'kuhar'], translation: 'Meu pai é professor.' },
          { sentence: 'Ona je ___.', answer: 'inženjer', options: ['inženjer', 'kuhar', 'liječnik'], translation: 'Ela é engenheira.' },
        ],
        voice: {
          bot: 'Čime se baviš?',
          botTranslation: 'O que você faz (profissão)?',
          expected: ['Ja sam liječnik.', 'ja sam', 'liječnik'],
          hint: 'Diga a sua profissão com “Ja sam…”.',
        },
        communityPrompt: 'Descreva a sua profissão ou a de alguém da sua família em bósnio, usando “Ja sam…” ou “Moj otac/Moja majka je…”.',
      },
      {
        id: 'bs-u4-l2',
        title: 'Kako se osjećaš?',
        kind: 'licao',
        words: ['sretan', 'tužan', 'umoran', 'osjećati se', 'morati', 'raditi'],
        cloze: [
          { sentence: 'Danas sam ___.', answer: 'sretan', options: ['sretan', 'tužan', 'umoran'], translation: 'Hoje eu estou feliz.' },
          { sentence: 'Osjećam se ___.', answer: 'umoran', options: ['umoran', 'sretan', 'tužan'], translation: 'Eu me sinto cansado.' },
          { sentence: 'Moram ___ sutra.', answer: 'raditi', options: ['raditi', 'kupiti', 'nositi'], translation: 'Eu tenho que trabalhar amanhã.' },
        ],
        voice: {
          bot: 'Kako se osjećaš danas?',
          botTranslation: 'Como você está se sentindo hoje?',
          expected: ['Osjećam se sretan, hvala.', 'osjećam se', 'sretan'],
          hint: 'Diga como se sente com “Osjećam se…”.',
        },
        communityPrompt: 'Escreva três frases sobre como você se sente, usando “osjećam se” e pelo menos dois sentimentos desta unidade (sretan, tužan, umoran, ljut, uplašen, iznenađen).',
      },
      {
        id: 'bs-u4-l3',
        title: 'Test: tijelo, zanimanja i osjećaji',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Čime se baviš, i kako se osjećaš danas?',
          botTranslation: 'O que você faz, e como você está se sentindo hoje?',
          expected: ['Ja sam učitelj i osjećam se sretan.', 'ja sam', 'osjećam se'],
          hint: 'Diga a sua profissão com “ja sam…” e o seu sentimento com “osjećam se…”.',
        },
        communityPrompt: 'Escreva um parágrafo curto sobre a sua profissão (ou a que você gostaria de ter) e como você se sente hoje, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
];
