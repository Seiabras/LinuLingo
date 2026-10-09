import type { UnitSeed } from '../types';

/**
 * Trilha do eslovaco: as quatro unidades dos níveis A1 e A2 (pacote incompleto — ver
 * `incomplete` em index.ts). As unidades 3 e 4 (A2.1 e A2.2) usam o vocabulário e a gramática
 * pesquisados em 09/10/2026 (ver a nota de fontes em vocabulario.ts e os tópicos novos em
 * gramatica.ts). Do B1 ao C2 chega conforme mais fontes específicas do eslovaco puderem ser
 * conferidas.
 */
export const UNITS_SK: UnitSeed[] = [
  {
    id: 'sk-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ahoj! Prvé kroky',
    emoji: '👋',
    card: {
      id: 'sk-c1',
      title: 'Uma língua no coração da Europa',
      emoji: '🇸🇰',
      history:
        'O eslovaco é uma língua eslava ocidental, tão próxima do tcheco que os dois povos se entendem sem estudar. Por muito tempo, na Eslováquia se escreveu em latim, em tcheco ou em húngaro. A primeira norma escrita do eslovaco foi proposta pelo padre Anton Bernolák em 1787; a norma que venceu foi a de Ľudovít Štúr, de 1843, baseada nos dialetos do centro do país e depois reformada. Hoje o eslovaco é a língua oficial da Eslováquia e uma das línguas oficiais da União Europeia.',
      culture_tip:
        'Ao entrar numa loja ou num elevador, diga “Dobrý deň”. “Ahoj” serve para oi e para tchau entre amigos. Com desconhecidos, usa-se “vy” com o verbo no plural, mesmo falando com uma pessoa só: “Ako sa máte?” (Como vai o senhor?).',
      grammar_why:
        'O eslovaco não tem artigos: “pes” é “o cachorro” ou “um cachorro”. A terminação do verbo já mostra quem faz a ação, então o pronome costuma cair: “som” já é “eu sou”. O nome se diz com um verbo reflexivo, como em português: “volám sa Anna” (eu me chamo Anna).',
      grammar_examples: [
        ['Ahoj! Volám sa Anna.', 'Oi! Eu me chamo Anna.'],
        ['Ako sa voláš?', 'Como você se chama?'],
        ['On je z Košíc, ona je z Bratislavy.', 'Ele é de Košice, ela é de Bratislava.'],
        ['Dobre, ďakujem. A ty?', 'Bem, obrigado. E você?'],
      ],
      character_guide: [
        ['č / š / ž', '“tch” de “tchau” / “ch” de “chá” / “j” de “já”', 'čierny, šesť, žena'],
        ['ď / ť / ň / ľ', 'versões macias de d, t, n, l (“dj”, “tj”, “nh”, “lh”)', 'ďakujem, päť, deň, veľmi'],
        ['c', '“ts” de “tsunami”', 'otec (pai)'],
        ['ch', '“rr” aspirado, como o “r” de “rato” no Rio', 'chlieb (pão)'],
        ['ä', 'no padrão atual, soa como “é”', 'päť (cinco)'],
        ['ô', '“uo”, um ditongo', 'môj (meu)'],
        ['ia / ie / iu', 'ditongos, ditos numa sílaba só', 'piatok, chlieb'],
        ['á, é, í, ó, ú, ý', 'o acento agudo marca vogal longa, não a tônica', 'áno, kamarát'],
        ['acento', 'a tônica cai sempre na primeira sílaba', 'ĎA-ku-jem, KA-ma-rát'],
      ],
    },
    lessons: [
      {
        id: 'sk-u1-l1',
        title: 'Ahoj, ďakujem, dovidenia!',
        kind: 'licao',
        words: ['ahoj', 'dobrý deň', 'dobrý večer', 'dobrú noc', 'dovidenia', 'ďakujem'],
        cloze: [
          { sentence: '___, Zuzka! Ako sa máš?', answer: 'Ahoj', options: ['Ahoj', 'Dobrú noc', 'Ďakujem'], translation: 'Oi, Zuzka! Como vai?' },
          { sentence: 'Je neskoro. ___!', answer: 'Dobrú noc', options: ['Dobrú noc', 'Dobrý deň', 'Ďakujem'], translation: 'Já é tarde. Boa noite!' },
          { sentence: '___ veľmi pekne!', answer: 'Ďakujem', options: ['Ďakujem', 'Ahoj', 'Dovidenia'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: 'Ahoj! Ako sa máš?',
          botTranslation: 'Oi! Como vai?',
          expected: ['Dobre, ďakujem! A ty?', 'dobre', 'ďakujem'],
          hint: 'Responda que vai bem e devolva a pergunta: “Dobre, ďakujem! A ty?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em eslovaco: um de dia (“Dobrý deň…”), um à noite (“Dobrý večer…”) e uma despedida (“Dovidenia” ou “Dobrú noc”).',
      },
      {
        id: 'sk-u1-l2',
        title: 'Ja, ty, on, ona',
        kind: 'licao',
        words: ['ja', 'ty', 'on', 'ona', 'volať sa', 'meno'],
        cloze: [
          { sentence: '___ sa volám Eva.', answer: 'Ja', options: ['Ja', 'Ty', 'On'], translation: 'Eu me chamo Eva.' },
          { sentence: 'A ___? Ako sa voláš?', answer: 'ty', options: ['ty', 'on', 'ona'], translation: 'E você? Como você se chama?' },
          { sentence: '___ je z Košíc. To je môj brat.', answer: 'On', options: ['On', 'Ona', 'Ja'], translation: 'Ele é de Košice. É o meu irmão.' },
        ],
        voice: {
          bot: 'Ahoj! Ako sa voláš?',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['Volám sa Ana. A ty?', 'volám sa', 'a ty'],
          hint: 'Diga o seu nome com “Volám sa…” e devolva a pergunta com “A ty?”.',
        },
        communityPrompt: 'Apresente-se em eslovaco: diga o seu nome com “Volám sa…” e pergunte o nome de alguém com “Ako sa voláš?”.',
      },
      {
        id: 'sk-u1-l3',
        title: 'Test: prvé kroky',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ahoj! Volám sa Peter. Ako sa voláš a odkiaľ si?',
          botTranslation: 'Oi! Eu me chamo Peter. Como você se chama e de onde você é?',
          expected: ['Ahoj! Volám sa Lucia a som zo São Paula.', 'volám sa', 'som z', 'ahoj'],
          hint: 'Devolva o cumprimento (“Ahoj!”), diga o nome com “Volám sa…” e a cidade com “Som z…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “Volám sa…”, cidade com “Som z…” e uma despedida.',
      },
    ],
  },
  {
    id: 'sk-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Rodina a domov',
    emoji: '👪',
    card: {
      id: 'sk-c2',
      title: 'Três gêneros, “môj / moja / moje” e o “ne-”',
      emoji: '🧭',
      history:
        'O eslovaco tem seis casos: a terminação do substantivo muda conforme a função na frase. Você já viu isso sem perceber: “som z Bratislavy” (sou de Bratislava) usa o genitivo de “Bratislava”, e “kávu, prosím” usa o acusativo de “káva”. Uma regra só do eslovaco é a “lei do ritmo”: duas sílabas longas seguidas costumam não aparecer, e por isso se diz “krásne mesto”, e não “krásné”.',
      culture_tip:
        'Na Eslováquia, muita gente comemora o “meniny”, o dia do nome: o calendário traz um nome para cada dia do ano, e quem tem aquele nome recebe parabéns quase como num aniversário.',
      grammar_why:
        'Os substantivos são masculinos, femininos ou neutros, e a terminação costuma mostrar qual: consoante → masculino (dom, brat), -a → feminino (mama, voda), -o → neutro (mlieko, víno). O possessivo concorda: “môj brat”, “moja sestra”, “moje mlieko”. Para negar, o “ne-” se escreve grudado no verbo — “viem” (sei) → “neviem” (não sei) —, mas o verbo “byť” é exceção: “nie som” (não sou), separado.',
      grammar_examples: [
        ['Moja rodina je veľká.', 'A minha família é grande.'],
        ['Mám brata a sestru.', 'Tenho um irmão e uma irmã.'],
        ['Mlieko je biele.', 'O leite é branco.'],
        ['Neviem.', 'Eu não sei.'],
      ],
      character_guide: [
        ['-a → -u', 'depois de “mám” (tenho), a palavra feminina muda: é o acusativo', 'sestra → mám sestru'],
        ['ne- / nie', 'a negação vai junto do verbo, menos com “byť”', 'nemám (não tenho), nie som (não sou)'],
      ],
    },
    lessons: [
      {
        id: 'sk-u2-l1',
        title: 'Moja rodina',
        kind: 'licao',
        words: ['rodina', 'mama', 'otec', 'brat', 'sestra', 'mať'],
        cloze: [
          { sentence: 'Moja ___ sa volá Eva.', answer: 'mama', options: ['mama', 'otec', 'brat'], translation: 'A minha mãe se chama Eva.' },
          { sentence: 'Ja ___ brata a sestru.', answer: 'mám', options: ['mám', 'som', 'idem'], translation: 'Eu tenho um irmão e uma irmã.' },
          { sentence: 'Môj ___ je z Košíc.', answer: 'otec', options: ['otec', 'sestra', 'mama'], translation: 'O meu pai é de Košice.' },
        ],
        voice: {
          bot: 'Máš brata alebo sestru?',
          botTranslation: 'Você tem irmão ou irmã?',
          expected: ['Áno, mám brata a sestru.', 'mám', 'brata', 'sestru'],
          hint: 'Responda com “Áno, mám…” ou “Nie, nemám…”.',
        },
        communityPrompt: 'Descreva a sua família em eslovaco: se você tem irmão (brat) ou irmã (sestra) e como se chamam os seus pais (“Moja mama sa volá…”).',
      },
      {
        id: 'sk-u2-l2',
        title: 'Doma',
        kind: 'licao',
        words: ['dom', 'voda', 'chlieb', 'mlieko', 'syr', 'mať rád'],
        cloze: [
          { sentence: 'Môj ___ je malý.', answer: 'dom', options: ['dom', 'voda', 'mlieko'], translation: 'A minha casa é pequena.' },
          { sentence: 'Pijem ___.', answer: 'vodu', options: ['vodu', 'chlieb', 'syr'], translation: 'Eu bebo água.' },
          { sentence: 'Jem chlieb a ___.', answer: 'syr', options: ['syr', 'vodu', 'mlieko'], translation: 'Eu como pão e queijo.' },
        ],
        voice: {
          bot: 'Čo ješ na raňajky?',
          botTranslation: 'O que você come no café da manhã?',
          expected: ['Jem chlieb a syr.', 'jem', 'chlieb', 'syr'],
          hint: 'Diga o que come com “Jem…”.',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: “Jem…” e “Pijem…”.',
      },
      {
        id: 'sk-u2-l3',
        title: 'Test: rodina a domov',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Porozprávaj o rodine: máš brata alebo sestru?',
          botTranslation: 'Conte da sua família: você tem irmão ou irmã?',
          expected: ['Áno, mám sestru. Volá sa Mária.', 'mám', 'volá sa'],
          hint: 'Diga se tem irmãos (“mám…”) e o nome deles (“volá sa…”).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “mám”, “volá sa” e “je”.',
      },
    ],
  },
  {
    id: 'sk-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Mesto, obchody a oblečenie',
    emoji: '🏙️',
    card: {
      id: 'sk-c3',
      title: 'Seis casos, dois jeitos de “onde”',
      emoji: '🧭',
      history:
        'A Eslováquia tem um clima continental: verões quentes e invernos bem frios, sobretudo nas Altas Tatras (Vysoké Tatry), a cordilheira mais alta dos Cárpatos, onde fica o Gerlachovský štít, o ponto mais alto do país, com 2.655 metros. O eslovaco tem seis casos (o vocativo, histórico, quase não se usa mais); nesta unidade você conhece dois deles de verdade: o acusativo, para o objeto direto, e o locativo, para dizer onde algo está, sempre com uma preposição como “v” (em) ou “na” (em, sobre).',
      culture_tip:
        'Perguntar onde fica a escola, o hospital ou a loja mais próxima é uma das primeiras coisas úteis numa cidade nova: “Kde je škola?”, “Kde je nemocnica?”. A resposta normalmente já vem com o locativo: “Škola je v meste” (a escola é/fica na cidade).',
      grammar_why:
        'O acusativo muda a terminação de quem recebe a ação: masculino animado copia o genitivo (brat → mám brata), feminino troca “-a” por “-u” (sestra → mám sestru), e o masculino inanimado e o neutro ficam iguais ao nominativo (dom → vidím dom). O locativo, usado com “v” e “na”, também muda a terminação: neutro e masculino inanimado costumam ganhar “-e” (mesto → v meste, obchod → v obchode), e o feminino tem duas famílias: “škola” (padrão “žena”) vira “škole”, mas “ulica” e “nemocnica” (padrão “ulica”) viram “ulici” e “nemocnici”.',
      grammar_examples: [
        ['Idem do školy a potom do obchodu.', 'Eu vou para a escola e depois para a loja.'],
        ['Pracujem v nemocnici.', 'Eu trabalho num hospital.'],
        ['Bývam na tejto ulici.', 'Eu moro nesta rua.'],
        ['Mám novú košeľu.', 'Eu tenho uma camisa nova.'],
      ],
      character_guide: [
        ['-e / -i (locativo feminino)', 'depois de “v”/“na”, “škola” vira “škole”, mas “ulica” vira “ulici”: dois padrões de feminino', 'v škole, na ulici'],
        ['-u (acusativo feminino)', 'depois de um verbo como “mám”, a palavra feminina troca “-a” por “-u”', 'košeľa → mám košeľu'],
      ],
    },
    lessons: [
      {
        id: 'sk-u3-l1',
        title: 'V meste',
        kind: 'licao',
        words: ['škola', 'nemocnica', 'obchod', 'ulica', 'reštaurácia', 'dom'],
        cloze: [
          { sentence: 'Pracujem v ___.', answer: 'nemocnici', options: ['nemocnici', 'nemocnica', 'nemocnicu'], translation: 'Eu trabalho num hospital.' },
          { sentence: 'Bývam na tejto ___.', answer: 'ulici', options: ['ulici', 'ulica', 'ulicu'], translation: 'Eu moro nesta rua.' },
          { sentence: 'Môj ___ je malý.', answer: 'dom', options: ['dom', 'škola', 'obchod'], translation: 'A minha casa é pequena.' },
        ],
        voice: {
          bot: 'Kde je škola?',
          botTranslation: 'Onde é a escola?',
          expected: ['Škola je v meste, na tejto ulici.', 'škola je', 'ulici'],
          hint: 'Diga onde é a escola com “Škola je v meste…” e use o locativo “na … ulici”.',
        },
        communityPrompt: 'Descreva o seu bairro em eslovaco: a escola, a loja ou o hospital mais próximo, usando “v” ou “na” com o locativo.',
      },
      {
        id: 'sk-u3-l2',
        title: 'Oblečenie',
        kind: 'licao',
        words: ['košeľa', 'nohavice', 'topánka', 'kabát', 'červený', 'modrý'],
        cloze: [
          { sentence: 'Mám novú ___.', answer: 'košeľu', options: ['košeľu', 'košeľa', 'košeľou'], translation: 'Eu tenho uma camisa nova.' },
          { sentence: 'Moje ___ sú čierne.', answer: 'nohavice', options: ['nohavice', 'topánky', 'kabát'], translation: 'As minhas calças são pretas.' },
          { sentence: 'Môj ___ je modrý.', answer: 'kabát', options: ['kabát', 'topánka', 'košeľa'], translation: 'O meu casaco é azul.' },
        ],
        voice: {
          bot: 'Aké máš topánky?',
          botTranslation: 'Que sapatos você tem?',
          expected: ['Mám červené topánky.', 'mám', 'topánky'],
          hint: 'Descreva os seus sapatos com “Mám … topánky” e uma cor.',
        },
        communityPrompt: 'Descreva três peças de roupa que você está usando hoje, com a cor de cada uma: “Mám … košeľu/nohavice/topánky.”.',
      },
      {
        id: 'sk-u3-l3',
        title: 'Test: mesto a oblečenie',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Kde pracuješ a aké máš oblečenie dnes?',
          botTranslation: 'Onde você trabalha e que roupa você está usando hoje?',
          expected: ['Pracujem v škole. Mám modrú košeľu a čierne nohavice.', 'pracujem v', 'mám'],
          hint: 'Diga onde trabalha com “Pracujem v/na…” e descreva a roupa com “Mám…”.',
        },
        communityPrompt: 'Escreva cinco frases misturando lugares da cidade e roupas, usando “v”, “na” e “mám”.',
      },
    ],
  },
  {
    id: 'sk-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Práca, pocity a minulosť',
    emoji: '💼',
    card: {
      id: 'sk-c4',
      title: 'O passado some de uma pessoa só: a 3ª',
      emoji: '🕰️',
      history:
        'O passado eslovaco vem do antigo particípio ativo em “-l” das línguas eslavas: hoje ele é a única forma de passado usada no dia a dia (o eslovaco, como quase todas as línguas eslavas modernas, perdeu as formas antigas de aoristo e imperfeito). Para formar o passado, tira-se o “-ť” do infinitivo e põe-se “-l”, que concorda em gênero com quem fala ou de quem se fala: “-l” (masculino), “-la” (feminino), “-lo” (neutro) e “-li” (plural).',
      culture_tip:
        'Perguntar “Čo robíš?” (o que você faz / o que você está fazendo) é uma forma comum de perguntar sobre a profissão de alguém, junto com “Aká je tvoja práca?” (qual é o seu trabalho?).',
      grammar_why:
        'Nas 1ª e 2ª pessoas, o participío em “-l” vem com o presente de “byť” (som, si, sme, ste); na 3ª pessoa, esse auxiliar desaparece: “on robil” (ele fez), sem “je” ou “bol” extra. Os verbos “môcť” (poder, no sentido de permissão/possibilidade) e “musieť” (precisar, ter que) são dois modais diferentes de “vedieť” (saber/conseguir, já visto no A1): os três pedem um infinitivo depois.',
      grammar_examples: [
        ['Pracoval som v škole.', 'Eu trabalhei numa escola. (quem fala é homem)'],
        ['Bola som šťastná.', 'Eu estava feliz. (quem fala é mulher)'],
        ['Musím ísť k lekárovi.', 'Eu tenho que ir ao médico.'],
        ['Môžem si sadnúť?', 'Posso me sentar?'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'sk-u4-l1',
        title: 'Povolania a pocity',
        kind: 'licao',
        words: ['lekár', 'učiteľ', 'študent', 'kuchár', 'šťastný', 'unavený'],
        cloze: [
          { sentence: 'Môj otec je ___.', answer: 'lekár', options: ['lekár', 'učiteľ', 'kuchár'], translation: 'O meu pai é médico.' },
          { sentence: 'Som veľmi ___.', answer: 'unavený', options: ['unavený', 'šťastný', 'študent'], translation: 'Eu estou muito cansado.' },
          { sentence: 'Moja sestra je ___.', answer: 'študentka', options: ['študentka', 'kuchár', 'lekár'], translation: 'A minha irmã é estudante.' },
        ],
        voice: {
          bot: 'Aká je tvoja práca?',
          botTranslation: 'Qual é o seu trabalho?',
          expected: ['Som učiteľ a som šťastný.', 'som', 'učiteľ'],
          hint: 'Diga a sua profissão com “Som…” e como você se sente.',
        },
        communityPrompt: 'Conte a sua profissão (ou a de alguém da família) e como você está hoje, usando “som” e uma palavra de profissão e de sentimento.',
      },
      {
        id: 'sk-u4-l2',
        title: 'Môžem, musím, robil som',
        kind: 'licao',
        words: ['môcť', 'musieť', 'robiť', 'pracovať', 'dvadsať', 'sto'],
        cloze: [
          { sentence: '___ ísť domov?', answer: 'Môžem', options: ['Môžem', 'Musím', 'Robím'], translation: 'Posso ir para casa?' },
          { sentence: '___ pracovať zajtra.', answer: 'Musím', options: ['Musím', 'Môžem', 'Robím'], translation: 'Eu tenho que trabalhar amanhã.' },
          { sentence: 'Mám ___ rokov.', answer: 'dvadsať', options: ['dvadsať', 'sto', 'desať'], translation: 'Eu tenho vinte anos.' },
        ],
        voice: {
          bot: 'Čo si robil včera?',
          botTranslation: 'O que você fez ontem?',
          expected: ['Pracoval som a potom som bol unavený.', 'pracoval som', 'bol'],
          hint: 'Conte o que fez ontem com o passado: “Pracoval/Pracovala som…”.',
        },
        communityPrompt: 'Escreva três frases no passado sobre ontem, usando “robil/robila som” ou “pracoval/pracovala som”.',
      },
      {
        id: 'sk-u4-l3',
        title: 'Test: práca, pocity a minulosť',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Čo si robil minulý týždeň a aká je tvoja práca?',
          botTranslation: 'O que você fez na semana passada e qual é o seu trabalho?',
          expected: ['Pracoval som v nemocnici. Som lekár.', 'pracoval som', 'som'],
          hint: 'Use o passado (“pracoval/pracovala som…”) e diga a sua profissão (“som…”).',
        },
        communityPrompt: 'Escreva um parágrafo curto contando a sua profissão, como você está e o que você fez ontem, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
];
