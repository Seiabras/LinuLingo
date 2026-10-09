import type { UnitSeed } from '../types';

/**
 * Trilha do tcheco: as duas unidades do A1 e, agora, as duas do A2 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de B1 ao C2 chegam depois.
 */
export const UNITS_CS: UnitSeed[] = [
  {
    id: 'cs-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ahoj! První kroky',
    emoji: '👋',
    card: {
      id: 'cs-c1',
      title: 'A língua que inventou o háček',
      emoji: '🇨🇿',
      history:
        'O tcheco é uma língua eslava ocidental, tão próxima do eslovaco que os dois povos se entendem sem estudar. Na Idade Média ele se escrevia com letras latinas combinadas de muitos jeitos. No começo do século XV, um tratado em latim sobre a ortografia tcheca, atribuído ao reformador religioso Jan Hus, propôs trocar essas combinações por sinais sobre as letras. Dessa ideia nasceram o “háček” (č, š, ž, ř) e a “čárka” (á, é, í), que depois foram adotados pelo eslovaco, pelo esloveno, pelo croata, pelo lituano e pelo letão. Hoje o tcheco é a língua oficial da República Tcheca e uma das línguas oficiais da União Europeia.',
      culture_tip:
        'Ao entrar numa loja, num elevador ou num consultório, os tchecos dizem “Dobrý den” a todos. “Ahoj” serve para oi e para tchau entre amigos. Com desconhecidos, usa-se “vy” com o verbo no plural, mesmo falando com uma pessoa só: “Jak se máte?” (Como vai o senhor?). Passar de “vy” para “ty” é quase um ritual, e costuma partir da pessoa mais velha.',
      grammar_why:
        'O tcheco não tem artigos: “pes” é “o cachorro” ou “um cachorro”. A terminação do verbo já mostra quem faz a ação, então o pronome costuma cair: “jsem” já é “eu sou”. O nome se diz com um verbo reflexivo, como em português: “jmenuji se Anna” (eu me chamo Anna).',
      grammar_examples: [
        ['Ahoj! Jmenuji se Anna.', 'Oi! Eu me chamo Anna.'],
        ['Jak se jmenuješ?', 'Como você se chama?'],
        ['On je z Brna, ona je z Prahy.', 'Ele é de Brno, ela é de Praga.'],
        ['Dobře, děkuji. A ty?', 'Bem, obrigado. E você?'],
      ],
      character_guide: [
        ['ř', 'o som mais famoso do tcheco: um “r” vibrado e um “j” ao mesmo tempo', 'tři (três), středa (quarta)'],
        ['č / š / ž', '“tch” de “tchau” / “ch” de “chá” / “j” de “já”', 'černý, šest, žena'],
        ['c', '“ts” de “tsunami”', 'co (o que)'],
        ['ch', '“rr” aspirado, como o “r” de “rato” no Rio', 'chléb (pão)'],
        ['h', '“h” com voz, como um “rr” suave', 'ahoj'],
        ['ě', 'depois de d, t, n soa “ie” molhado; depois de b, p, v, f, “ié”', 'děkuji, pět (cinco)'],
        ['á, é, í, ó, ú, ů, ý', 'o acento agudo (čárka) e o “ů” marcam vogal longa, não tônica', 'máma, dům (casa)'],
        ['acento', 'a tônica cai sempre na primeira sílaba', 'DĚ-ku-ji, KA-ma-rád'],
      ],
    },
    lessons: [
      {
        id: 'cs-u1-l1',
        title: 'Ahoj, děkuji, na shledanou!',
        kind: 'licao',
        words: ['ahoj', 'dobrý den', 'dobrý večer', 'dobrou noc', 'na shledanou', 'děkuji'],
        cloze: [
          { sentence: '___, Evo! Jak se máš?', answer: 'Ahoj', options: ['Ahoj', 'Dobrou noc', 'Děkuji'], translation: 'Oi, Eva! Como vai?' },
          { sentence: 'Je pozdě. ___!', answer: 'Dobrou noc', options: ['Dobrou noc', 'Dobrý den', 'Děkuji'], translation: 'Já é tarde. Boa noite!' },
          { sentence: '___ moc!', answer: 'Děkuji', options: ['Děkuji', 'Ahoj', 'Na shledanou'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: 'Ahoj! Jak se máš?',
          botTranslation: 'Oi! Como vai?',
          expected: ['Dobře, děkuji! A ty?', 'dobře', 'děkuji', 'děkuju'],
          hint: 'Responda que vai bem e devolva a pergunta: “Dobře, děkuji! A ty?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em tcheco: um de dia (“Dobrý den…”), um à noite (“Dobrý večer…”) e uma despedida (“Na shledanou” ou “Dobrou noc”).',
      },
      {
        id: 'cs-u1-l2',
        title: 'Já, ty, on, ona',
        kind: 'licao',
        words: ['já', 'ty', 'on', 'ona', 'jmenovat se', 'jméno'],
        cloze: [
          { sentence: '___ se jmenuji Eva.', answer: 'Já', options: ['Já', 'Ty', 'On'], translation: 'Eu me chamo Eva.' },
          { sentence: 'A ___? Jak se jmenuješ?', answer: 'ty', options: ['ty', 'on', 'ona'], translation: 'E você? Como você se chama?' },
          { sentence: '___ je z Brna. To je můj bratr.', answer: 'On', options: ['On', 'Ona', 'Já'], translation: 'Ele é de Brno. É o meu irmão.' },
        ],
        voice: {
          bot: 'Ahoj! Jak se jmenuješ?',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['Jmenuji se Ana. A ty?', 'jmenuji se', 'jmenuju se', 'a ty'],
          hint: 'Diga o seu nome com “Jmenuji se…” e devolva a pergunta com “A ty?”.',
        },
        communityPrompt: 'Apresente-se em tcheco: diga o seu nome com “Jmenuji se…” e pergunte o nome de alguém com “Jak se jmenuješ?”.',
      },
      {
        id: 'cs-u1-l3',
        title: 'Test: první kroky',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ahoj! Jmenuji se Petr. Jak se jmenuješ a odkud jsi?',
          botTranslation: 'Oi! Eu me chamo Petr. Como você se chama e de onde você é?',
          expected: ['Ahoj! Jmenuji se Lucie a jsem ze São Paula.', 'jmenuji se', 'jsem z', 'ahoj'],
          hint: 'Devolva o cumprimento (“Ahoj!”), diga o nome com “Jmenuji se…” e a cidade com “Jsem z…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “Jmenuji se…”, cidade com “Jsem z…” e uma despedida.',
      },
    ],
  },
  {
    id: 'cs-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Rodina a domov',
    emoji: '👪',
    card: {
      id: 'cs-c2',
      title: 'Três gêneros, “můj / moje” e o “ne-” grudado',
      emoji: '🧭',
      history:
        'Nos séculos XVII e XVIII, o alemão tomou conta da administração e das cidades da Boêmia, e o tcheco ficou sobretudo no campo. A partir do fim do século XVIII, um movimento chamado “renascimento nacional” recuperou a língua escrita: Josef Jungmann publicou, entre 1834 e 1839, um grande dicionário tcheco-alemão que fixou milhares de palavras. O tcheco de hoje tem sete casos: a terminação muda conforme a função na frase, como em “jsem z Prahy” (sou de Praga), com o genitivo de “Praha”.',
      culture_tip:
        'O calendário tcheco traz um nome para cada dia do ano, e muita gente comemora esse “svátek” (dia do nome) quase como um segundo aniversário, com flores e parabéns no trabalho.',
      grammar_why:
        'Os substantivos são masculinos, femininos ou neutros, e a terminação costuma mostrar qual: consoante → masculino (dům, bratr), -a → feminino (máma, voda), -o → neutro (mléko, víno). O possessivo concorda: “můj bratr”, “moje sestra”, “moje mléko”. Para negar, o “ne-” se escreve grudado no verbo: “vím” (sei) → “nevím” (não sei).',
      grammar_examples: [
        ['Moje rodina je velká.', 'A minha família é grande.'],
        ['Mám bratra a sestru.', 'Tenho um irmão e uma irmã.'],
        ['Mléko je bílé.', 'O leite é branco.'],
        ['Nevím.', 'Eu não sei.'],
      ],
      character_guide: [
        ['-a → -u', 'depois de “mám” (tenho), a palavra feminina muda: é o acusativo', 'sestra → mám sestru'],
        ['ne-', 'a negação se escreve junto com o verbo', 'nemám (não tenho), nejsem (não sou)'],
      ],
    },
    lessons: [
      {
        id: 'cs-u2-l1',
        title: 'Moje rodina',
        kind: 'licao',
        words: ['rodina', 'máma', 'táta', 'bratr', 'sestra', 'mít'],
        cloze: [
          { sentence: 'Moje ___ se jmenuje Eva.', answer: 'máma', options: ['máma', 'táta', 'bratr'], translation: 'A minha mãe se chama Eva.' },
          { sentence: 'Já ___ bratra a sestru.', answer: 'mám', options: ['mám', 'jsem', 'jdu'], translation: 'Eu tenho um irmão e uma irmã.' },
          { sentence: 'Můj ___ je z Brna.', answer: 'táta', options: ['táta', 'sestra', 'máma'], translation: 'O meu pai é de Brno.' },
        ],
        voice: {
          bot: 'Máš bratra nebo sestru?',
          botTranslation: 'Você tem irmão ou irmã?',
          expected: ['Ano, mám bratra a sestru.', 'mám', 'bratra', 'sestru'],
          hint: 'Responda com “Ano, mám…” ou “Ne, nemám…”.',
        },
        communityPrompt: 'Descreva a sua família em tcheco: se você tem irmão (bratr) ou irmã (sestra) e como se chamam os seus pais (“Moje máma se jmenuje…”).',
      },
      {
        id: 'cs-u2-l2',
        title: 'Doma',
        kind: 'licao',
        words: ['dům', 'voda', 'chléb', 'mléko', 'sýr', 'mít rád'],
        cloze: [
          { sentence: 'Můj ___ je malý.', answer: 'dům', options: ['dům', 'voda', 'mléko'], translation: 'A minha casa é pequena.' },
          { sentence: 'Piju ___.', answer: 'vodu', options: ['vodu', 'chléb', 'sýr'], translation: 'Eu bebo água.' },
          { sentence: 'Jím chléb a ___.', answer: 'sýr', options: ['sýr', 'vodu', 'mléko'], translation: 'Eu como pão e queijo.' },
        ],
        voice: {
          bot: 'Co jíš k snídani?',
          botTranslation: 'O que você come no café da manhã?',
          expected: ['Jím chléb a sýr.', 'jím', 'chléb', 'sýr'],
          hint: 'Diga o que come com “Jím…”.',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: “Jím…” e “Piju…”.',
      },
      {
        id: 'cs-u2-l3',
        title: 'Test: rodina a domov',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Povídej o rodině: máš bratra nebo sestru?',
          botTranslation: 'Conte da sua família: você tem irmão ou irmã?',
          expected: ['Ano, mám sestru. Jmenuje se Marie.', 'mám', 'jmenuje se'],
          hint: 'Diga se tem irmãos (“mám…”) e o nome deles (“jmenuje se…”).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “mám”, “jmenuje se” e “je”.',
      },
    ],
  },
  {
    id: 'cs-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Počasí a oblečení',
    emoji: '🌦️',
    card: {
      id: 'cs-c3',
      title: 'Um auxiliar que some na 3ª pessoa',
      emoji: '🕰️',
      history:
        'No tcheco antigo, cada pessoa tinha a sua própria forma de “být” no passado, até a 3ª. Com os séculos, a forma da 3ª pessoa caiu em desuso, porque a terminação do particípio (koupil, koupila, koupilo) já deixava claro o gênero e o número — hoje seria até considerado um erro usar um auxiliar ali, diferente da 1ª e da 2ª pessoa, que continuam precisando de “jsem” e “jsi”.',
      culture_tip:
        'O inverno tcheco pode ser bem frio e nevado, sobretudo nas montanhas (Krkonoše); falar do tempo (“počasí”) é assunto comum, e a previsão (“předpověď počasí”) é parte fixa do noticiário.',
      grammar_why:
        'O passado junta o particípio em -l (que muda com o gênero: -l, -la, -lo, -li/-ly) com o presente de “být” — mas só na 1ª e na 2ª pessoa: “koupil jsem” (eu comprei, fala um homem). Na 3ª pessoa, singular ou plural, não se usa nenhum auxiliar: “on koupil”, “oni koupili”.',
      grammar_examples: [
        ['Včera celý den pršelo.', 'Ontem choveu o dia todo.'],
        ['Koupil jsem nový kabát.', 'Eu comprei um casaco novo. (fala um homem)'],
        ['Musela jsem koupit svetr: bylo studeno.', 'Eu tive que comprar um suéter: estava frio. (fala uma mulher)'],
        ['On koupil kabát, ona koupila šaty.', 'Ele comprou um casaco, ela comprou um vestido.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'cs-u3-l1',
        title: 'Jaké je počasí?',
        kind: 'licao',
        words: ['déšť', 'slunce', 'vítr', 'sníh', 'teplý', 'studený'],
        cloze: [
          { sentence: 'Včera celý den ___.', answer: 'pršelo', options: ['pršelo', 'sněžilo', 'vítr'], translation: 'Ontem choveu o dia todo.' },
          { sentence: 'Dnes je hodně ___.', answer: 'teplo', options: ['teplo', 'studeno', 'vítr'], translation: 'Hoje está muito quente.' },
          { sentence: '___ dnes svítí.', answer: 'Slunce', options: ['Slunce', 'Sníh', 'Déšť'], translation: 'O sol está brilhando hoje.' },
        ],
        voice: {
          bot: 'Jaké je dnes počasí?',
          botTranslation: 'Como está o tempo hoje?',
          expected: ['Je teplo a svítí slunce.', 'teplo', 'slunce'],
          hint: 'Descreva o tempo com “Je…” e o que o sol faz com “svítí slunce”.',
        },
        communityPrompt: 'Descreva o tempo de hoje e de ontem em tcheco, usando “je…” e “včera… pršelo/sněžilo”.',
      },
      {
        id: 'cs-u3-l2',
        title: 'Kupování oblečení',
        kind: 'licao',
        words: ['kabát', 'kalhoty', 'bota', 'svetr', 'koupit', 'muset'],
        cloze: [
          { sentence: 'Koupil jsem nový ___.', answer: 'kabát', options: ['kabát', 'kalhoty', 'bota'], translation: 'Eu comprei um casaco novo.' },
          { sentence: 'Je studeno: ___ koupit svetr.', answer: 'musím', options: ['musím', 'můžu', 'chci'], translation: 'Está frio: eu tenho que comprar um suéter.' },
          { sentence: 'Tyto ___ jsou příliš velké.', answer: 'kalhoty', options: ['kalhoty', 'kabát', 'svetr'], translation: 'Esta calça é grande demais.' },
        ],
        voice: {
          bot: 'Co jsi koupil?',
          botTranslation: 'O que você comprou?',
          expected: ['Koupil jsem svetr.', 'koupil jsem', 'koupila jsem'],
          hint: 'Diga o que você comprou com “Koupil jsem…” (ou “koupila jsem…”, se você é mulher).',
        },
        communityPrompt: 'Escreva o que você comprou recentemente e o que você tem que fazer hoje, usando o passado (“koupil/koupila jsem…”) e “muset”.',
      },
      {
        id: 'cs-u3-l3',
        title: 'Test: počasí a oblečení',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Pršelo včera? Co musíš nosit, když je studeno?',
          botTranslation: 'Choveu ontem? O que você tem que usar quando está frio?',
          expected: ['Ne, bylo teplo. Když je studeno, musím nosit kabát.', 'muset', 'kabát'],
          hint: 'Diga como estava o tempo e use “muset” para dizer o que você precisa usar.',
        },
        communityPrompt: 'Escreva cinco frases sobre o tempo e as roupas, usando o passado em -l e marcando o seu próprio gênero.',
      },
    ],
  },
  {
    id: 'cs-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Tělo, povolání a pocity',
    emoji: '🧑‍⚕️',
    card: {
      id: 'cs-c4',
      title: 'Sete casos, dois deles aqui',
      emoji: '🧭',
      history:
        'O tcheco tem sete casos, e dois aparecem o tempo todo em frases simples: o instrumentál, usado para dizer a profissão com “být”, e o lokál, usado com “v” e “na” para dizer onde algo está. “Sestra”, aliás, não quer dizer só “irmã”: na linguagem da saúde, é também o jeito comum de chamar a enfermeira (forma completa: “zdravotní sestra”).',
      culture_tip:
        'Perguntar “Jak se cítíš?” (como você se sente?) é comum entre amigos; numa consulta, é quase sempre a primeira pergunta do médico (lékař).',
      grammar_why:
        'Depois de “být” (ser), a profissão muda para o instrumentál: masculino ganha -em (“jsem lékařem”), feminino ganha -ou (“jsem učitelkou”). Para dizer onde algo está, usa-se “v” (que vira “ve” antes de certos grupos de consoantes) ou “na” com o substantivo no lokál: “ve škole” (na escola), “ve městě” (na cidade), “na ulici” (na rua).',
      grammar_examples: [
        ['Bolí mě hlava.', 'Minha cabeça está doendo.'],
        ['Jsem učitelem.', 'Eu sou professor.'],
        ['Moje máma pracuje v nemocnici.', 'A minha mãe trabalha no hospital.'],
        ['Je překvapená a unavená.', 'Ela está surpresa e cansada.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'cs-u4-l1',
        title: 'Hlava, ruka a noha',
        kind: 'licao',
        words: ['hlava', 'ruka', 'noha', 'oko', 'ucho', 'lékař'],
        cloze: [
          { sentence: 'Bolí mě ___.', answer: 'hlava', options: ['hlava', 'ruka', 'noha'], translation: 'Minha cabeça está doendo.' },
          { sentence: 'Má modré ___.', answer: 'oči', options: ['oči', 'uši', 'ruce'], translation: 'Ela tem olhos azuis.' },
          { sentence: 'Jsem ___.', answer: 'lékařem', options: ['lékařem', 'lékař', 'lékaře'], translation: 'Eu sou médico.' },
        ],
        voice: {
          bot: 'Co tě bolí?',
          botTranslation: 'O que está doendo em você?',
          expected: ['Bolí mě hlava.', 'bolí mě', 'hlava'],
          hint: 'Diga o que dói com “Bolí mě…”.',
        },
        communityPrompt: 'Descreva partes do corpo em tcheco e diga ao médico o que está doendo, usando “bolí mě…”.',
      },
      {
        id: 'cs-u4-l2',
        title: 'Povolání a pocity',
        kind: 'licao',
        words: ['učitel', 'kuchař', 'šťastný', 'zlý', 'vystrašený', 'unavený'],
        cloze: [
          { sentence: 'Můj otec je ___.', answer: 'učitelem', options: ['učitelem', 'učitel', 'kuchařem'], translation: 'Meu pai é professor.' },
          { sentence: 'Dnes jsem velmi ___.', answer: 'šťastný', options: ['šťastný', 'zlý', 'vystrašený'], translation: 'Eu estou muito feliz hoje.' },
          { sentence: 'Jsem ___ ze psů.', answer: 'vystrašený', options: ['vystrašený', 'unavený', 'zlý'], translation: 'Eu tenho medo de cachorros.' },
        ],
        voice: {
          bot: 'Jak se dnes cítíš?',
          botTranslation: 'Como você está se sentindo hoje?',
          expected: ['Cítím se šťastný, ale trochu unavený.', 'cítím se', 'šťastný'],
          hint: 'Diga como você se sente com “Cítím se…”.',
        },
        communityPrompt: 'Descreva a sua profissão (ou a de alguém da família) e como você se sente hoje, usando “cítím se…” e o instrumentál da profissão.',
      },
      {
        id: 'cs-u4-l3',
        title: 'Test: tělo, povolání a pocity',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Jaké je tvoje povolání a jak se dnes cítíš?',
          botTranslation: 'Qual é a sua profissão e como você está se sentindo hoje?',
          expected: ['Jsem učitelem a cítím se šťastný.', 'jsem', 'cítím se'],
          hint: 'Diga a sua profissão com “jsem…” (instrumentál) e como se sente com “cítím se…”.',
        },
        communityPrompt: 'Escreva cinco frases sobre o corpo, as profissões e os sentimentos, usando o instrumentál (“jsem…”) e o lokál (“v…”/“ve…” ou “na…”).',
      },
    ],
  },
];
