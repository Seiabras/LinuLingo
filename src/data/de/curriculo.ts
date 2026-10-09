import type { UnitSeed } from '../types';

/**
 * Trilha do alemão: A1 completo (unidades 1 e 2), mais A2 (unidades 3 e 4, acrescentadas depois —
 * ver `incomplete` em index.ts). Do B1 ao C2 chega nas próximas atualizações.
 */
export const UNITS_DE: UnitSeed[] = [
  {
    id: 'de-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Hallo! Die ersten Schritte',
    emoji: '👋',
    card: {
      id: 'de-c1',
      title: 'Uma língua, vários países',
      emoji: '🗺️',
      history:
        'O alemão é a língua oficial da Alemanha, da Áustria e do Liechtenstein, uma das línguas oficiais da Suíça, de Luxemburgo e da Bélgica, e a língua materna mais falada da União Europeia. Nasceu de dialetos germânicos ocidentais muito diferentes entre si; a língua escrita comum foi se firmando a partir do século XVI, e a tradução da Bíblia por Martinho Lutero ajudou a espalhar uma forma que todos entendiam. Hoje o padrão escrito é praticamente o mesmo nos três grandes países, com pequenas diferenças de vocabulário e pronúncia (e sem o ß na Suíça). A ortografia atual vem da reforma de 1996, revista em 2006.',
      culture_tip:
        'Em alemão existe uma divisão clara entre “du” (você, entre amigos, família, crianças e colegas jovens) e “Sie” (o senhor, a senhora, com desconhecidos e no trabalho). Na dúvida, use “Sie” até a outra pessoa propor o “du”. “Hallo” vale para quase tudo; “Guten Tag” é mais neutro e educado, e “Tschüss” é a despedida do dia a dia.',
      grammar_why:
        'O alemão conjuga o verbo como o português: “ich heiße”, “du heißt”, “er heißt”. Para dizer o nome se usa o verbo “heißen” (chamar-se), e para dizer a cidade de origem, “kommen aus” (vir de): “Ich komme aus São Paulo”. E todo substantivo se escreve com letra maiúscula: “das Haus”, “die Stadt”.',
      grammar_examples: [
        ['Hallo! Ich heiße Anna.', 'Oi! Eu me chamo Anna.'],
        ['Wie heißt du?', 'Como você se chama?'],
        ['Er kommt aus Berlin, sie kommt aus Wien.', 'Ele é de Berlim, ela é de Viena.'],
        ['Gut, danke. Und dir?', 'Bem, obrigado. E você?'],
      ],
      character_guide: [
        ['ä / ö / ü', 'ä parece o “é”; ö é um “ê” com os lábios em bico; ü é um “i” com os lábios em bico', 'Käse (queijo), schön (bonito), grün (verde)'],
        ['ß', 'um “s” forte, como o “ss” de “passo”', 'heißen (chamar-se), groß (grande)'],
        ['ei / ie', '“ei” soa “ai”; “ie” é um “i” longo', 'nein (não), sieben (sete)'],
        ['sch', 'como o “x” de “xícara”', 'Schwester (irmã), schwarz (preto)'],
        ['ch', 'depois de a, o, u, um som raspado no fundo da garganta; depois de e, i, ä, ö, ü, um chiado suave', 'acht (oito), ich (eu)'],
        ['w / v / z', 'w soa “v”; v quase sempre soa “f”; z soa “ts”', 'Wasser (água), Vater (pai), zehn (dez)'],
      ],
    },
    lessons: [
      {
        id: 'de-u1-l1',
        title: 'Hallo, danke, tschüss!',
        kind: 'licao',
        words: ['hallo', 'guten Morgen', 'guten Abend', 'gute Nacht', 'tschüss', 'danke'],
        cloze: [
          { sentence: "___, Anna! Wie geht's?", answer: 'Hallo', options: ['Hallo', 'Tschüss', 'Danke'], translation: 'Oi, Anna! Como vai?' },
          { sentence: 'Es ist spät: ___!', answer: 'gute Nacht', options: ['gute Nacht', 'guten Morgen', 'danke'], translation: 'Já é tarde: boa noite!' },
          { sentence: '___ schön!', answer: 'Danke', options: ['Danke', 'Hallo', 'Tschüss'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: "Hallo! Wie geht's?",
          botTranslation: 'Oi! Como vai?',
          expected: ['Gut, danke! Und dir?', 'gut', 'danke'],
          hint: 'Responda que vai bem e devolva a pergunta: “Gut, danke! Und dir?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em alemão: um de manhã (“Guten Morgen…”), um à noite (“Guten Abend…”) e uma despedida (“Tschüss”).',
      },
      {
        id: 'de-u1-l2',
        title: 'Ich, du, er, sie',
        kind: 'licao',
        words: ['ich', 'du', 'er', 'sie', 'heißen', 'Name'],
        cloze: [
          { sentence: '___ heiße Sara.', answer: 'Ich', options: ['Ich', 'Du', 'Er'], translation: 'Eu me chamo Sara.' },
          { sentence: 'Wie heißt ___?', answer: 'du', options: ['du', 'ich', 'wir'], translation: 'Como você se chama?' },
          { sentence: '___ kommt aus Berlin.', answer: 'Er', options: ['Er', 'Ich', 'Du'], translation: 'Ele é de Berlim.' },
        ],
        voice: {
          bot: 'Hallo! Wie heißt du?',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['Ich heiße Ana. Und du?', 'ich heiße', 'und du'],
          hint: 'Diga o seu nome com “Ich heiße…” e devolva a pergunta com “Und du?”.',
        },
        communityPrompt: 'Apresente-se em alemão: diga o seu nome com “Ich heiße…” e pergunte o nome de alguém com “Wie heißt du?”.',
      },
      {
        id: 'de-u1-l3',
        title: 'Test: die ersten Schritte',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Hallo! Ich heiße Jonas. Wie heißt du und woher kommst du?',
          botTranslation: 'Oi! Eu me chamo Jonas. Como você se chama e de onde você é?',
          expected: ['Hallo! Ich heiße Lucia und ich komme aus São Paulo.', 'ich heiße', 'ich komme aus', 'hallo'],
          hint: 'Devolva o cumprimento (“Hallo!”), diga o nome com “Ich heiße…” e a cidade com “Ich komme aus…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “Ich heiße…”, cidade com “Ich komme aus…” e uma despedida.',
      },
    ],
  },
  {
    id: 'de-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Familie und Zuhause',
    emoji: '👪',
    card: {
      id: 'de-c2',
      title: 'Der, die, das',
      emoji: '🧭',
      history:
        'O alemão também tem história no Brasil: a partir de 1824, com a fundação de São Leopoldo, no Rio Grande do Sul, chegaram imigrantes de várias regiões de língua alemã, que depois se espalharam por Santa Catarina, Paraná e Espírito Santo. Cidades como Blumenau e Pomerode guardam essa herança, e em algumas comunidades ainda se falam variedades trazidas pelos imigrantes, como o hunsriqueano (Hunsrik) e o pomerano, bem diferentes do alemão-padrão ensinado aqui.',
      culture_tip:
        'Nos países de língua alemã, o pão é quase uma instituição: há centenas de tipos, e a padaria (Bäckerei) é parada obrigatória de manhã. À tarde, muitas famílias fazem uma pausa para “Kaffee und Kuchen”, café com bolo, sobretudo no domingo.',
      grammar_why:
        'Todo substantivo alemão tem um gênero, marcado no artigo: “der” (masculino), “die” (feminino) e “das” (neutro). O gênero nem sempre coincide com o português: “das Haus” (a casa) é neutro e “die Katze” (o gato) é feminino. Por isso se aprende cada palavra junto com o seu artigo. O artigo indefinido é “ein” (masculino e neutro) e “eine” (feminino).',
      grammar_examples: [
        ['Meine Familie ist groß.', 'A minha família é grande.'],
        ['Ich habe einen Bruder und eine Schwester.', 'Tenho um irmão e uma irmã.'],
        ['Die Milch ist weiß.', 'O leite é branco.'],
        ['Ich weiß es nicht.', 'Eu não sei.'],
      ],
      character_guide: [
        ['der / die / das', 'masculino / feminino / neutro; no plural, sempre “die”', 'der Vater, die Mutter, das Haus'],
        ['ein / eine', 'um / uma; o masculino vira “einen” como objeto', 'Ich habe einen Hund.'],
      ],
    },
    lessons: [
      {
        id: 'de-u2-l1',
        title: 'Meine Familie',
        kind: 'licao',
        words: ['Familie', 'Mutter', 'Vater', 'Bruder', 'Schwester', 'haben'],
        cloze: [
          { sentence: 'Meine ___ heißt Rosa.', answer: 'Mutter', options: ['Mutter', 'Vater', 'Bruder'], translation: 'A minha mãe se chama Rosa.' },
          { sentence: 'Ich ___ einen Bruder.', answer: 'habe', options: ['habe', 'bin', 'gehe'], translation: 'Eu tenho um irmão.' },
          { sentence: 'Mein ___ kommt aus Hamburg.', answer: 'Vater', options: ['Vater', 'Schwester', 'Mutter'], translation: 'O meu pai é de Hamburgo.' },
        ],
        voice: {
          bot: 'Hast du Geschwister?',
          botTranslation: 'Você tem irmãos?',
          expected: ['Ja, ich habe einen Bruder und eine Schwester.', 'ich habe', 'Bruder', 'Schwester'],
          hint: 'Responda com “Ja, ich habe…” ou “Nein, ich habe keine Geschwister”.',
        },
        communityPrompt: 'Descreva a sua família em alemão: quantos irmãos (Brüder) e irmãs (Schwestern) você tem e como se chamam os seus pais.',
      },
      {
        id: 'de-u2-l2',
        title: 'Zu Hause',
        kind: 'licao',
        words: ['Haus', 'Wasser', 'Brot', 'Milch', 'Käse', 'essen'],
        cloze: [
          { sentence: 'Mein ___ ist klein.', answer: 'Haus', options: ['Haus', 'Wasser', 'Brot'], translation: 'A minha casa é pequena.' },
          { sentence: 'Ich trinke ___.', answer: 'Wasser', options: ['Wasser', 'Brot', 'Käse'], translation: 'Eu bebo água.' },
          { sentence: 'Ich esse Brot mit ___.', answer: 'Käse', options: ['Käse', 'Wasser', 'Milch'], translation: 'Eu como pão com queijo.' },
        ],
        voice: {
          bot: 'Was isst du zum Frühstück?',
          botTranslation: 'O que você come no café da manhã?',
          expected: ['Ich esse Brot mit Käse.', 'ich esse', 'Brot', 'Käse'],
          hint: 'Diga o que come com “Ich esse…”.',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: “Ich esse…” e “Ich trinke…”.',
      },
      {
        id: 'de-u2-l3',
        title: 'Test: Familie und Zuhause',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Erzähl mal von deiner Familie: Hast du Geschwister?',
          botTranslation: 'Conte da sua família: você tem irmãos?',
          expected: ['Ja, ich habe eine Schwester. Sie heißt Maria.', 'ich habe', 'heißt'],
          hint: 'Diga quantos irmãos tem (“ich habe…”) e o nome deles (“er/sie heißt…”).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “ich habe”, “heißt” e “ist”.',
      },
    ],
  },
  {
    id: 'de-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Das Wetter und die Kleidung',
    emoji: '🌦️',
    card: {
      id: 'de-c3',
      title: 'Den Hut kaufen: o Akkusativ',
      emoji: '🎯',
      history:
        'A Alemanha tem um clima temperado, com quatro estações bem marcadas: um verão ameno, um outono e uma primavera chuvosos, e um inverno frio, com neve mais frequente ao sul (Baviera, Alpes) do que no norte, perto do mar. A conversa sobre o tempo (“Wie ist das Wetter?”) é um jeito tão comum de começar uma conversa quanto no Brasil, sobretudo entre vizinhos ou colegas de trabalho.',
      culture_tip:
        'Com chuva frequente boa parte do ano, o guarda-chuva (der Regenschirm) é item quase obrigatório na bolsa ou mochila em muitas regiões da Alemanha, mesmo em dias que começam ensolarados.',
      grammar_why:
        'O Akkusativ marca o objeto direto da frase: o que recebe a ação do verbo. No masculino, o artigo muda — “der Hut” (o chapéu, sujeito) vira “den Hut” (o chapéu, objeto): “Ich kaufe den Hut” (eu compro o chapéu). No feminino e no neutro, o artigo fica igual ao do sujeito.',
      grammar_examples: [
        ['Ich kaufe einen Hut.', 'Eu compro um chapéu.'],
        ['Ich trage die Jacke, weil es kalt ist.', 'Eu uso a jaqueta, porque está frio.'],
        ['Ich ziehe die Schuhe aus.', 'Eu tiro os sapatos.'],
        ['Heute ist es sonnig, aber kalt.', 'Hoje está ensolarado, mas frio.'],
      ],
      character_guide: [
        ['den, einen (masculino no Akkusativ)', '“der”/“ein” do sujeito viram “den”/“einen” quando são o objeto direto', 'Ich kaufe den Hut.'],
        ['anziehen, ausziehen', 'verbos separáveis: o prefixo (an-, aus-) vai para o final da frase', 'Ich ziehe die Jacke an.'],
      ],
    },
    lessons: [
      {
        id: 'de-u3-l1',
        title: 'Das Wetter',
        kind: 'licao',
        words: ['Wetter', 'heiß', 'kalt', 'Regen', 'Wind', 'sonnig'],
        cloze: [
          { sentence: 'Heute ist es sehr ___.', answer: 'heiß', options: ['heiß', 'kalt', 'sonnig'], translation: 'Hoje está muito calor.' },
          { sentence: 'Morgen kommt ___.', answer: 'Regen', options: ['Regen', 'Wind', 'Wetter'], translation: 'Amanhã vem chuva.' },
          { sentence: 'Das ___ ist heute sehr sonnig.', answer: 'Wetter', options: ['Wetter', 'Regen', 'Wind'], translation: 'O tempo hoje está muito ensolarado.' },
        ],
        voice: {
          bot: 'Wie ist das Wetter heute?',
          botTranslation: 'Como está o tempo hoje?',
          expected: ['Heute ist es sonnig und heiß.', 'sonnig', 'heiß'],
          hint: 'Descreva o tempo com “heute ist es…” e um adjetivo: sonnig, heiß, kalt, ou diga se há Regen/Wind.',
        },
        communityPrompt: 'Descreva o tempo de hoje em alemão usando “heute ist es…” (sonnig, heiß, kalt, Regen ou Wind).',
      },
      {
        id: 'de-u3-l2',
        title: 'Die Kleidung',
        kind: 'licao',
        words: ['Hose', 'Hemd', 'Schuh', 'Hut', 'Jacke', 'Socke'],
        cloze: [
          { sentence: 'Heute ist es kalt: ich trage eine ___.', answer: 'Jacke', options: ['Jacke', 'Schuh', 'Hut'], translation: 'Hoje está frio: eu uso uma jaqueta.' },
          { sentence: 'Ich kaufe neue ___.', answer: 'Schuhe', options: ['Schuhe', 'Hemden', 'Hosen'], translation: 'Eu compro sapatos novos.' },
          { sentence: 'Er trägt einen roten ___.', answer: 'Hut', options: ['Hut', 'Jacke', 'Socke'], translation: 'Ele usa um chapéu vermelho.' },
        ],
        voice: {
          bot: 'Was ziehst du an, wenn es regnet?',
          botTranslation: 'O que você veste quando chove?',
          expected: ['Ich ziehe eine Jacke und Schuhe an.', 'ich ziehe', 'jacke'],
          hint: 'Use “ich ziehe… an” (eu visto) e cite uma peça de roupa.',
        },
        communityPrompt: 'Escreva três peças de roupa em alemão que você vestiria num dia frio, com “ich ziehe… an”.',
      },
      {
        id: 'de-u3-l3',
        title: 'Test: das Wetter und die Kleidung',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Wie wird das Wetter morgen, und was ziehst du an?',
          botTranslation: 'Como vai estar o tempo amanhã, e o que você vai vestir?',
          expected: ['Morgen kommt Regen, also ziehe ich eine Jacke an.', 'morgen kommt', 'ziehe ich an'],
          hint: 'Diga como estará o tempo com “morgen…” e o que você vai vestir com “ich ziehe… an”.',
        },
        communityPrompt: 'Escreva duas frases: uma sobre o tempo de amanhã, e outra sobre o que você vai vestir, usando “ich ziehe… an”.',
      },
    ],
  },
  {
    id: 'de-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Die Stadt, der Beruf und die Gefühle',
    emoji: '🏙️',
    card: {
      id: 'de-c4',
      title: 'O que já aconteceu: das Perfekt',
      emoji: '📜',
      history:
        'Nas cidades alemãs, convivem profissões bem diferentes: do Bäcker (padeiro) de bairro ao Arzt (médico) de hospital, passando por Lehrer (professores), Bauern (agricultores) que abastecem os Märkte (mercados) semanais e Polizisten que cuidam do trânsito. Desde 1994, a lei alemã garante o direito à forma feminina dos cargos (como Ärztin, Lehrerin), hoje usada ao lado da forma masculina em quase todo documento oficial.',
      culture_tip:
        'É comum tratar médicos pelo título antes do nome, mesmo fora do consultório: “Herr Doktor” ou simplesmente “Doktor” seguido do sobrenome — um costume que vem de uma tradição alemã de valorizar títulos acadêmicos no dia a dia.',
      grammar_why:
        'Para contar o que já aconteceu, o alemão falado usa o Perfekt: “haben” no presente + o Partizip II no final da frase. “Ich habe heute gearbeitet” (eu trabalhei hoje). O Dativ, por sua vez, marca a quem se ajuda ou se dá algo: “helfen” sempre pede o Dativ — “ich helfe dem Patienten” (eu ajudo o paciente).',
      grammar_examples: [
        ['Ich habe heute gearbeitet.', 'Eu trabalhei hoje.'],
        ['Der Arzt hilft dem Patienten.', 'O médico ajuda o paciente.'],
        ['Ich bin glücklich, aber müde.', 'Estou feliz, mas cansado.'],
      ],
      character_guide: [
        ['-in (feminino das profissões)', 'sufixo regular que forma o feminino: Lehrer → Lehrerin', 'Lehrerin, Ärztin, Polizistin'],
        ['dem, der (Dativ)', '“der”/“die”/“das” do sujeito viram “dem”/“der”/“dem” depois de verbos como “helfen”', 'Ich helfe dem Arzt.'],
      ],
    },
    lessons: [
      {
        id: 'de-u4-l1',
        title: 'Die Berufe',
        kind: 'licao',
        words: ['Arzt', 'Lehrer', 'Bauer', 'Koch', 'Krankenpfleger', 'Polizist'],
        cloze: [
          { sentence: 'Der ___ arbeitet im Krankenhaus.', answer: 'Arzt', options: ['Arzt', 'Lehrer', 'Bauer'], translation: 'O médico trabalha no hospital.' },
          { sentence: 'Mein ___ unterrichtet Deutsch.', answer: 'Lehrer', options: ['Lehrer', 'Koch', 'Krankenpfleger'], translation: 'O meu professor ensina alemão.' },
          { sentence: 'Der ___ arbeitet auf dem Feld.', answer: 'Bauer', options: ['Bauer', 'Polizist', 'Koch'], translation: 'O agricultor trabalha no campo.' },
        ],
        voice: {
          bot: 'Was ist der Beruf deiner Mutter?',
          botTranslation: 'Qual é a profissão da sua mãe?',
          expected: ['Meine Mutter ist Lehrerin.', 'meine mutter ist', 'lehrerin'],
          hint: 'Diga a profissão com “… ist …” e uma das palavras desta lição (no feminino, com -in).',
        },
        communityPrompt: 'Escreva as profissões de duas pessoas que você conhece em alemão: “Er/Sie ist Arzt/Ärztin, Lehrer/Lehrerin…”.',
      },
      {
        id: 'de-u4-l2',
        title: 'Die Gefühle',
        kind: 'licao',
        words: ['glücklich', 'traurig', 'müde', 'hungrig', 'durstig', 'Angst'],
        cloze: [
          { sentence: 'Ich bin ___, weil es heute so heiß ist.', answer: 'müde', options: ['müde', 'glücklich', 'hungrig'], translation: 'Eu estou cansado porque hoje está muito calor.' },
          { sentence: 'Sie hat ___ vor der Prüfung morgen.', answer: 'Angst', options: ['Angst', 'Hunger', 'Durst'], translation: 'Ela está com medo da prova de amanhã.' },
          { sentence: 'Ich bin ___, ich möchte Wasser.', answer: 'durstig', options: ['durstig', 'hungrig', 'traurig'], translation: 'Estou com sede, quero água.' },
        ],
        voice: {
          bot: 'Wie fühlst du dich heute?',
          botTranslation: 'Como você está se sentindo hoje?',
          expected: ['Ich bin glücklich, aber ein bisschen müde.', 'glücklich', 'müde'],
          hint: 'Descreva como você se sente usando “ich bin…” e uma palavra desta lição.',
        },
        communityPrompt: 'Escreva como você se sentia quando era criança, e como se sente hoje, usando glücklich, traurig, müde, hungrig, durstig ou Angst.',
      },
      {
        id: 'de-u4-l3',
        title: 'Test: die Stadt, der Beruf und die Gefühle',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Erzähl mir von deinem Beruf, und wie fühlst du dich heute?',
          botTranslation: 'Me conte sobre o seu trabalho, e como você está se sentindo hoje?',
          expected: ['Ich bin Lehrerin, und heute bin ich glücklich.', 'ich bin lehrerin', 'glücklich'],
          hint: 'Diga a sua profissão com “ich bin…” e como se sente com “ich bin…”.',
        },
        communityPrompt: 'Escreva um parágrafo contando a sua profissão (ou a que você quer ter) e como você se sente hoje.',
      },
    ],
  },
];
