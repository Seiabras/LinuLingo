import type { LanguageVariant } from '../types';
import { toIpaRuBelarus, toIpaRuUcrania } from './tracos';

/**
 * Os dialetos do russo (decisão do dono, 09/10/2026): o da Rússia (o padrão do curso) e os de dois
 * países onde o russo tem status oficial, Belarus e o Cazaquistão. Não há norma escrita separada: as
 * diferenças são de pronúncia, de vocabulário e de vida pública. Os falares do norte, do sul, da
 * Sibéria, de Moscou e de Petersburgo ficam como sotaques do padrão. Vocabulário no formato [padrão,
 * dialeto, explicação, nota]; nas histórias, o texto leva a tônica marcada, como no resto do app.
 *
 * Fontes: Wikipédia em russo («Белорусский диалект русского языка», «Русский язык в Белоруссии»,
 * «Русский язык в Казахстане», «Региональные варианты русского языка», consultadas em 10/10/2026), com
 * os censos de Belarus (2019) e do Cazaquistão (2021) e a Constituição do Cazaquistão (1995), art. 7.
 */
export const VARIANTS_RU: LanguageVariant[] = [
  {
    code: 'ru-RU',
    country: 'RUS',
    kind: 'dialeto',
    speechLocale: 'ru-RU',
    name: 'Russo da Rússia (padrão de Moscou)',
    flag: '🇷🇺',
    summary:
      'O padrão do curso: o russo literário, com a pronúncia de Moscou. É o da escola, da TV e dos livros, entendido em toda a antiga União Soviética.',
    card: {
      id: 'ru-ru-c1',
      title: 'Por que o russo de Moscou?',
      emoji: '🇷🇺',
      history:
        'O russo literário moderno se formou nos séculos XVIII e XIX, com Lomonóssov, que escreveu a primeira gramática russa (1755), e com Púchkin, que juntou a língua da Igreja, a dos salões e a do povo. A pronúncia de referência é a de Moscou, com o “а́канье”: o “о” átono soa como “a” (молоко́ [məɫɐˈko]). Na União Soviética, o russo virou a língua comum de mais de cem povos, e por isso até hoje é falado por milhões de pessoas fora da Rússia, em Belarus, no Cazaquistão, no Quirguistão, na Ucrânia, nos países bálticos e no Cáucaso. Cada país foi desenvolvendo o seu jeito: as palavras da vida pública, as palavras emprestadas da língua local e a pronúncia.',
      culture_tip:
        'Em visita a uma casa russa, leve alguma coisa para o chá (um bolo, chocolate) e tire os sapatos na porta: o anfitrião vai oferecer chinelos (та́почки). Flores se dão em número ímpar; buquê com número par é para enterro. E não se cumprimenta por cima da soleira da porta: dá azar.',
      grammar_why:
        'O padrão que o curso ensina é o de Moscou: o “о” átono reduzido (а́канье), o “г” oclusivo [g], o “ч” mole [t͡ɕ] e o “р” mole antes de “е” e “и”. Em Belarus, o “г” vira fricativo e o “р” e o “ч” ficam duros; no Cazaquistão, a pronúncia é quase a de Moscou, mas a vida pública tem palavras do cazaque.',
      grammar_examples: [
        ['Ма́ма пьёт молоко́.', 'A mamãe bebe leite.'],
        ['Четы́ре гру́ши, пожа́луйста.', 'Quatro peras, por favor.'],
        ['Пойдём домо́й.', 'Vamos para casa.'],
      ],
      character_guide: null,
    },
  },

  // ───────────────────────────── BELARUS ─────────────────────────────
  {
    code: 'ru-BY',
    country: 'BLR',
    kind: 'dialeto',
    speechLocale: 'ru-RU',
    ipa: toIpaRuBelarus,
    name: 'Russo de Belarus',
    flag: '🇧🇾',
    summary:
      'O russo de Belarus, língua oficial ao lado do bielorrusso desde 1995 e a língua de casa de 71% da população. Tem a pronúncia do bielorrusso (o “г” fricativo, o “р” e o “ч” duros) e palavras de lá: бу́льба, шуфля́дка, хло́пец.',
    card: {
      id: 'ru-by-c1',
      title: 'Бу́льба e шуфля́дка',
      emoji: '🥔',
      history:
        'Belarus tem duas línguas oficiais: o bielorrusso, a língua nacional (a “мо́ва”), e o russo, que ganhou o mesmo status num referendo de 1995, aprovado por 83,3% dos votantes. Na prática, o russo é a língua da maioria: no censo de 2019, 71,4% da população disse falar russo em casa, e 26%, bielorrusso. No ano letivo de 2023/24, mais de 91% dos alunos estudavam em russo. Mas é um russo com sotaque e palavras do bielorrusso, que se ouve até entre pessoas instruídas e na TV. No campo, muita gente fala a трася́нка, uma mistura popular das duas línguas. E o nome do país, no russo de lá, é “Белару́сь”, não o “Белору́ссия” de Moscou.',
      culture_tip:
        'A batata é a rainha da mesa: em Belarus ela se chama “бу́льба”, e os дра́ники (panquecas de batata ralada) com creme azedo são o prato nacional. Desde os anos 1980, as crianças vão dormir depois da “Калыха́нка” (canção de ninar), o programa de TV infantil da noite. No vocabulário da vida pública ficaram termos soviéticos que a Rússia já não usa no dia a dia, como “горисполко́м” (o comitê executivo da cidade).',
      grammar_why:
        'A gramática é a do russo, com alguns traços do bielorrusso: (1) “пойти́ до до́му” (ir para casa) em vez de “пойти́ домо́й”; (2) possessivos populares, como “и́хний” (deles), em vez de “их”; (3) palavras bielorrussas no meio do russo: “бу́льба” (batata), “шуфля́дка” (gaveta), “хло́пец” (rapaz), “сябры́” (amigos), “чаму́” (por quê); (4) a pronúncia: o “г” fricativo, o “р” e o “ч” duros, o “д” e o “т” moles que soam “dz” e “ts”, e as vogais átonas mais cheias.',
      grammar_examples: [
        ['Пойдём до до́му.', 'Vamos para casa. (padrão: Пойдём домо́й.)'],
        ['Возьми́ ло́жку в шуфля́дке.', 'Pega a colher na gaveta. (padrão: в я́щике)'],
        ['На обе́д бу́льба с гриба́ми.', 'No almoço tem batata com cogumelos. (padrão: карто́шка)'],
        ['Э́то и́хний дом.', 'Esta é a casa deles. (padrão: их дом)'],
        ['Хло́пец, помоги́!', 'Rapaz, me ajuda! (padrão: па́рень)'],
      ],
      character_guide: [
        ['г', 'fricativo [ɣ], como um “r” arranhado de carioca', 'гора́, гру́ша'],
        ['р', 'sempre duro, mesmo antes de “е” e “и”', 'река́, Бря́нск'],
        ['ч', 'sempre duro [t͡ʂ]', 'четы́ре, чай'],
        ['дь, ть', 'soam “dz” e “ts” moles (дзе́канье, це́канье)', 'день, тётя'],
      ],
    },
    pronunciation: [
      'O “г” é fricativo [ɣ], como no bielorrusso e no sul da Rússia: “гора́” soa [ɣɐˈra].',
      'O “р” e o “ч” ficam sempre duros: “река́” soa com um “r” de “raka”, e “четы́ре” começa com um “tch” duro.',
      'O “д” e o “т” moles soam “dz” e “ts” (дзе́канье e це́канье): “день” soa “dzen”.',
      'As vogais átonas soam mais cheias que em Moscou, e depois de consoante mole o “е” e o “я” átonos tendem a “a” (я́канье).',
      'A tônica de algumas palavras muda de lugar, seguindo o bielorrusso.',
      'A voz do app é a de Moscou: as frases de Belarus vão soar com a pronúncia padrão.',
    ],
    vocab: [
      ['карто́шка', 'бу́льба', 'batata', 'do bielorrusso “бу́льба”; daí os “дра́ники”'],
      ['лук', 'цыбу́ля', 'cebola', 'do bielorrusso'],
      ['свёкла', 'бура́к', 'beterraba', 'do bielorrusso'],
      ['я́щик (стола́)', 'шуфля́дка', 'gaveta', 'do polonês “szuflada”, via bielorrusso'],
      ['па́рень', 'хло́пец', 'rapaz', 'do bielorrusso “хло́пец”'],
      ['друзья́', 'сябры́', 'amigos', 'do bielorrusso “сябры́”'],
      ['жена́', 'жо́нка', 'esposa', 'na fala popular'],
      ['почему́', 'чаму́', 'por quê', 'na fala popular'],
      ['де́ньги', 'гро́ши', 'dinheiro', 'na fala popular; no padrão, “гроши́” são uns trocados'],
      ['пойти́ домо́й', 'пойти́ до до́му', 'ir para casa', 'com a preposição, como no bielorrusso'],
      ['колыбе́льная', 'калыха́нка', 'canção de ninar', 'também o nome do programa infantil da TV'],
      ['Белору́ссия', 'Белару́сь', 'Belarus', 'o nome oficial do país, também no russo de lá'],
    ],
    stories: [
      {
        id: 'ru-h46',
        variant: 'ru-BY',
        level: 'B1.2',
        cefr: 'B1',
        title: 'Комаро́вка',
        emoji: '🥔',
        summary: 'No mercado Komarovka, em Minsk, a amiga Alesia leva Linu para comprar ingredientes de draniki, e os vendedores falam um russo cheio de palavras bielorrussas.',
        cultural_context:
          'O mercado Komarovka (Комаро́вский ры́нок) é o maior mercado de Minsk, a capital de Belarus. Em Belarus, quase todo mundo fala russo no dia a dia, mas com palavras e sotaque do bielorrusso: a batata é “бу́льба”, a cebola é “цыбу́ля”, o rapaz é “хло́пец”. Os дра́ники, panquecas de batata ralada, são o prato nacional.',
        start: 'start',
        glossary: [
          ['бу́льба', 'batata (padrão: карто́шка)'],
          ['цыбу́ля', 'cebola (padrão: лук)'],
          ['хло́пец', 'rapaz (padrão: па́рень)'],
          ['дра́ники', 'panquecas de batata'],
          ['смета́на', 'creme azedo'],
          ['до до́му', 'para casa (padrão: домо́й)'],
          ['ры́нок', 'mercado'],
        ],
        nodes: {
          start: {
            emoji: '🏪',
            text: 'Ли́ну в Ми́нске. Его́ подру́га Але́ся говори́т: “Сего́дня мы пригото́вим дра́ники! Пошли́ на Комаро́вку, там всё есть.”',
            translation: 'Linu está em Minsk. A amiga dele, Alesia, diz: “Hoje vamos fazer draniki! Vamos ao Komarovka, lá tem tudo.”',
            choices: [
              { text: '“Что тако́е Комаро́вка?”', translation: '“O que é Komarovka?”', next: 'rynok' },
              {
                text: '“Дра́ники? Э́то напи́ток?”',
                translation: '“Draniki? É uma bebida?”',
                wrong: 'Os дра́ники não são bebida: são panquecas de batata ralada, o prato nacional de Belarus.',
              },
            ],
          },
          rynok: {
            emoji: '🥔',
            text: '“Э́то большо́й ры́нок,” объясня́ет Але́ся. На ры́нке продаве́ц кричи́т: “Бу́льба молода́я! Хло́пец, бери́ бу́льбу!” Ли́ну не понима́ет: “Бу́льба? Что э́то?”',
            translation: '“É um mercado grande”, explica a Alesia. No mercado, um vendedor grita: “Batata nova! Rapaz, leva batata!” Linu não entende: “Bulba? O que é isso?”',
            choices: [
              { text: 'Але́ся смеётся: “Бу́льба — э́то карто́шка!”', translation: 'A Alesia ri: “Bulba é batata!”', next: 'kupit' },
              {
                text: 'Ли́ну ду́мает, что “хло́пец” — э́то и́мя продавца́.',
                translation: 'Linu acha que “khlopets” é o nome do vendedor.',
                wrong: '“Хло́пец” quer dizer “rapaz” (no padrão, “па́рень”): o vendedor estava chamando o Linu.',
              },
            ],
          },
          kupit: {
            emoji: '🧅',
            text: 'Они́ покупа́ют два кило́ бу́льбы. Пото́м Але́ся говори́т: “Ещё нужна́ цыбу́ля и смета́на.” Продавщи́ца даёт им цыбу́лю и говори́т: “До́бра, приходи́те ещё!”',
            translation: 'Eles compram dois quilos de batata. Depois a Alesia diz: “Ainda precisamos de cebola e creme azedo.” A vendedora lhes dá a cebola e diz: “Está bem, voltem sempre!”',
            choices: [
              { text: '“Цыбу́ля — э́то лук, да?”', translation: '“Tsybulia é cebola, né?”', next: 'domoj' },
            ],
          },
          domoj: {
            emoji: '🏠',
            text: '“Пра́вильно!” говори́т Але́ся. “У нас мно́го таки́х слов. А тепе́рь пошли́ до до́му, бу́дем гото́вить.” Ли́ну несёт су́мку с бу́льбой.',
            translation: '“Isso mesmo!”, diz a Alesia. “A gente tem muitas palavras assim. E agora vamos para casa cozinhar.” Linu leva a sacola com as batatas.',
            choices: [
              { text: 'До́ма Ли́ну помога́ет тере́ть бу́льбу.', translation: 'Em casa, Linu ajuda a ralar as batatas.', next: 'final_bom' },
              { text: 'До́ма Ли́ну смо́трит телеви́зор.', translation: 'Em casa, Linu fica vendo TV.', next: 'final_neutro' },
            ],
          },
          final_bom: {
            emoji: '🥞',
            text: 'Дра́ники гото́вы. Ли́ну ест их со смета́ной и говори́т: “До́бра! Э́то лу́чшая бу́льба в ми́ре!” Але́ся смеётся: “Ты уже́ говори́шь, как настоя́щий белару́с!”',
            translation: 'Os draniki estão prontos. Linu come com creme azedo e diz: “Que bom! É a melhor batata do mundo!” A Alesia ri: “Você já fala como um bielorrusso de verdade!”',
            ending: {
              tone: 'bom',
              title: 'Bielorrusso de verdade',
              message: 'Você aprendeu o russo de Belarus: бу́льба (batata), цыбу́ля (cebola), хло́пец (rapaz), до́бра (está bem) e “пошли́ до до́му” (vamos para casa).',
            },
          },
          final_neutro: {
            emoji: '📺',
            text: 'Ли́ну смо́трит телеви́зор, а Але́ся гото́вит одна́. Пото́м она́ говори́т: “Дра́ники гото́вы, но в сле́дующий раз трёшь бу́льбу ты!”',
            translation: 'Linu vê TV, e a Alesia cozinha sozinha. Depois ela diz: “Os draniki estão prontos, mas da próxima vez quem rala a batata é você!”',
            ending: {
              tone: 'neutro',
              title: 'A batata fica com você',
              message: 'Na cozinha se aprende muita palavra. Da próxima vez, ajude a Alesia a ralar a bulba!',
            },
          },
        },
      },
      {
        id: 'ru-h47',
        variant: 'ru-BY',
        level: 'B2.2',
        cefr: 'B2',
        title: 'Калыха́нка',
        emoji: '🌙',
        summary: 'Numa noite em Minsk, Linu ajuda a amiga Alesia a pôr o sobrinho dela para dormir e descobre, entre a avó, a mãe e o menino, as três línguas de uma família bielorrussa.',
        cultural_context:
          'Em Belarus, 71% das pessoas falam russo em casa, segundo o censo de 2019, e só 26% falam bielorrusso. Muita gente do campo fala a трася́нка, uma mistura das duas. O bielorrusso, a “мо́ва”, se aprende na escola, e algumas famílias fazem questão de mantê-lo vivo. Desde os anos 1980, a “Калыха́нка” (canção de ninar) é o programa de TV que manda as crianças para a cama.',
        start: 'start',
        glossary: [
          ['мо́ва', 'a língua bielorrussa (em bielorrusso, “língua”)'],
          ['трася́нка', 'a mistura popular de russo e bielorrusso'],
          ['калыха́нка', 'canção de ninar; o programa infantil da TV'],
          ['пле́мянник', 'sobrinho'],
          ['и́хний', 'deles (popular; padrão: их)'],
          ['ни ... ни', 'nem ... nem'],
          ['де́лать вид', 'fingir'],
        ],
        nodes: {
          start: {
            emoji: '📺',
            text: 'Ве́чер в Ми́нске. Ли́ну и Але́ся сидя́т с её пле́мянником Я́сем. Ему́ пять лет, и спать он не хо́чет. В во́семь часо́в по телеви́зору начина́ется “Калыха́нка”. “Ну вот, — говори́т Але́ся, — по́сле “Калыха́нки” все де́ти иду́т спать.”',
            translation: 'Noite em Minsk. Linu e Alesia estão cuidando do sobrinho dela, Yas. Ele tem cinco anos e não quer dormir. Às oito, começa a “Kalykhanka” na TV. “Pronto”, diz a Alesia, “depois da Kalykhanka todas as crianças vão dormir.”',
            choices: [
              { text: '“А что зна́чит ‘калыха́нка’?”', translation: '“E o que quer dizer ‘kalykhanka’?”', next: 'slovo' },
              {
                text: '“Калыха́нка — э́то мультфи́льм про ко́шку?”',
                translation: '“Kalykhanka é um desenho sobre uma gata?”',
                wrong: '“Калыха́нка” quer dizer “canção de ninar” (no padrão russo, “колыбе́льная”); é o nome do programa que manda as crianças para a cama.',
              },
            ],
          },
          slovo: {
            emoji: '🎶',
            text: '“Э́то по-белору́сски ‘колыбе́льная’,” объясня́ет Але́ся. “Переда́ча идёт с восьмидеся́тых годо́в. Я сама́ её смотре́ла в де́тстве.” Тут звони́т ба́бушка Я́ся из дере́вни. Она́ говори́т гро́мко, и Ли́ну слы́шит: “Чаму́ ж ён яшчэ́ не спіць?”',
            translation: '“É ‘canção de ninar’ em bielorrusso”, explica a Alesia. “O programa passa desde os anos 1980. Eu mesma assistia quando era criança.” Nisso, a avó do Yas liga da aldeia. Ela fala alto, e Linu ouve: “Por que é que ele ainda não está dormindo?”',
            choices: [
              { text: '“Ба́бушка говори́т по-белору́сски?”', translation: '“A avó fala bielorrusso?”', next: 'trasyanka' },
            ],
          },
          trasyanka: {
            emoji: '👵',
            text: 'Але́ся улыба́ется: “Не совсе́м. Э́то трася́нка: немно́го ру́сского, немно́го белору́сского. В дере́внях так говоря́т мно́гие. Ма́ма Я́ся говори́т с ним то́лько по-ру́сски, как и большинство́ в Ми́нске. А в шко́ле он бу́дет учи́ть мо́ву.”',
            translation: 'A Alesia sorri: “Não exatamente. É trasianka: um pouco de russo, um pouco de bielorrusso. Nas aldeias, muita gente fala assim. A mãe do Yas fala com ele só em russo, como a maioria em Minsk. E na escola ele vai aprender a mova.”',
            choices: [
              {
                text: '“Зна́чит, в одно́й семье́ три ра́зных языка́?”',
                translation: '“Então numa família só há três línguas diferentes?”',
                next: 'semya',
              },
              {
                text: '“Зна́чит, в Белару́си по-ру́сски почти́ не говоря́т?”',
                translation: '“Então em Belarus quase não se fala russo?”',
                wrong: 'É o contrário: o russo é a língua de casa da maioria (71% no censo de 2019). A Alesia disse que a mãe do Yas fala com ele só em russo, “como a maioria em Minsk”.',
              },
            ],
          },
          semya: {
            emoji: '👨‍👩‍👦',
            text: '“Мо́жно и так сказа́ть,” говори́т Але́ся. “Мы все друг дру́га понима́ем. Но мне жаль, что мо́ву слы́шно всё ре́же. Поэ́тому я пою́ Я́сю белору́сские калыха́нки.” Я́сь уже́ зева́ет, но де́лает вид, что не уста́л.',
            translation: '“Dá para dizer isso”, diz a Alesia. “Todo mundo se entende. Mas me dá pena que a mova se ouça cada vez menos. Por isso eu canto para o Yas canções de ninar em bielorrusso.” O Yas já está bocejando, mas finge que não está cansado.',
            choices: [
              { text: '“Спой ему́ сейча́с! Я то́же хочу́ послу́шать.”', translation: '“Canta para ele agora! Eu também quero ouvir.”', next: 'final_bom' },
              { text: '“Дава́й лу́чше включи́м мультфи́льм.”', translation: '“Melhor a gente pôr um desenho.”', next: 'final_neutro' },
            ],
          },
          final_bom: {
            emoji: '🌙',
            text: 'Але́ся поёт ти́хую белору́сскую пе́сню. Ли́ну не понима́ет ка́ждое сло́во, но мело́дия о́чень краси́вая. Че́рез пять мину́т Я́сь спит. “Ви́дишь? — ше́пчет Але́ся. — Мо́ва рабо́тает лу́чше телеви́зора.”',
            translation: 'A Alesia canta uma canção bielorrussa baixinho. Linu não entende cada palavra, mas a melodia é muito bonita. Cinco minutos depois, o Yas está dormindo. “Viu?”, sussurra a Alesia. “A mova funciona melhor que a TV.”',
            ending: {
              tone: 'bom',
              title: 'A canção de ninar',
              message: 'Você viu as três línguas de uma família de Belarus: o russo de Minsk, a trasianka da aldeia e a mova da escola e das canções. E aprendeu “калыха́нка”, “чаму́” e “де́лать вид” (fingir).',
            },
          },
          final_neutro: {
            emoji: '📺',
            text: 'Они́ включа́ют мультфи́льм, и Я́сь засыпа́ет то́лько в де́сять. Але́ся вздыха́ет: “В сле́дующий раз попро́буем калыха́нку.”',
            translation: 'Eles põem um desenho, e o Yas só pega no sono às dez. A Alesia suspira: “Da próxima vez a gente tenta a canção de ninar.”',
            ending: {
              tone: 'neutro',
              title: 'O desenho ganhou',
              message: 'A TV ganhou desta vez. Da próxima, peça para a Alesia cantar: é o jeito de ouvir a mova de perto.',
            },
          },
        },
      },
    ],
  },

  // ───────────────────────────── CAZAQUISTÃO ─────────────────────────────
  {
    code: 'ru-KZ',
    country: 'KAZ',
    kind: 'dialeto',
    speechLocale: 'ru-RU',
    name: 'Russo do Cazaquistão',
    flag: '🇰🇿',
    summary:
      'O russo do Cazaquistão, usado oficialmente ao lado do cazaque e entendido por 84% da população. A pronúncia é quase a de Moscou; o que muda são as palavras do cazaque na vida pública e na mesa: аки́м, маслиха́т, дастарха́н, той.',
    card: {
      id: 'ru-kz-c1',
      title: 'Аки́м, той e дастарха́н',
      emoji: '🐎',
      history:
        'O russo chegou à estepe cazaque com o Império Russo e se espalhou na época soviética, quando o Cazaquistão recebeu povos inteiros deportados e milhões de pessoas vindas de toda a URSS. A Constituição de 1995, no artigo 7, diz que o cazaque é a língua do Estado e que o russo é usado oficialmente ao lado dele nos órgãos públicos. No censo de 2021, 83,7% da população disse entender o russo falado, e 50,2% disse ler, falar e escrever bem; em casa, porém, o cazaque já ganhou: 57% contra 38%. O russo de lá tem palavras do cazaque, sobretudo na vida pública, e os nomes das cidades seguem a forma cazaque: Алматы́, não Алма́-Ата́.',
      culture_tip:
        'A hospitalidade cazaque é o дастарха́н: a mesa farta posta para a visita, com чай, баурсаки́ (bolinhos fritos) e, nas grandes ocasiões, o бешбарма́к, carne cozida com massa larga. As festas grandes, de casamento a aniversário, são o “той”. As mulheres mais velhas são chamadas de “апа́”, e os homens mais velhos, de “ага́”, sinal de respeito. Em março, o Нау́рыз, o ano-novo da primavera, enche as praças de iurtas e música.',
      grammar_why:
        'A gramática é a do russo padrão; o que muda é o vocabulário: (1) os cargos e órgãos públicos têm nomes cazaques, que o russo flexiona como seus: “аки́м” (prefeito ou governador), “акима́т” (prefeitura), “маслиха́т” (câmara local), “мажили́с” (câmara do parlamento), “мажили́смен” (deputado); (2) palavras da mesa e da família: дастарха́н, той, апа́, ага́, баурсаки́; (3) a troca de língua no meio da frase, que os cazaques chamam, brincando, de “шала́-каза́хский” (meio-cazaque).',
      grammar_examples: [
        ['Аки́м откры́л но́вый парк.', 'O prefeito inaugurou um parque novo.'],
        ['Приглаша́ю на той!', 'Convido você para a festa!'],
        ['Апа́, вам ещё ча́ю?', 'Senhora, mais chá?'],
        ['Депута́ты маслиха́та собрали́сь в акима́те.', 'Os vereadores se reuniram na prefeitura.'],
        ['Мы живём в Алматы́.', 'Moramos em Almaty. (não “Алма́-Ата́”)'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'A pronúncia é quase a de Moscou, com o “о” átono reduzido e o “г” oclusivo.',
      'As palavras cazaques mantêm a tônica na última sílaba, como no cazaque: аки́м, дастарха́н, баурса́к, Алматы́.',
      'Os nomes próprios cazaques trazem sons que o russo não tem (қ, ғ, ң, ә, ө, ү, ұ, і), e muitos falantes os pronunciam à cazaque mesmo falando russo.',
      'Quem tem o cazaque como primeira língua costuma levar a melodia dele para o russo.',
    ],
    vocab: [
      ['глава́ администра́ции', 'аки́м', 'prefeito, governador', 'do cazaque “әкім”'],
      ['администра́ция', 'акима́т', 'prefeitura, governo regional', 'formado em russo a partir de “аки́м”'],
      ['ме́стный сове́т', 'маслиха́т', 'câmara local', 'do cazaque “мәслихат”'],
      ['ни́жняя пала́та парла́мента', 'мажили́с', 'câmara baixa do parlamento', 'e “мажили́смен”, o deputado'],
      ['пра́здник, сва́дьба', 'той', 'festa grande', 'casamento, aniversário, nascimento'],
      ['накры́тый стол', 'дастарха́н', 'mesa farta para as visitas', 'símbolo da hospitalidade'],
      ['по́нчики', 'баурсаки́', 'bolinhos fritos', 'nunca faltam no дастарха́н'],
      ['(уважи́тельно к же́нщине)', 'апа́', 'senhora (respeitoso)', 'para mulheres mais velhas'],
      ['(уважи́тельно к мужчи́не)', 'ага́', 'senhor (respeitoso)', 'para homens mais velhos'],
      ['Алма́-Ата́', 'Алматы́', 'Almaty', 'os nomes de lugar seguem a forma cazaque'],
    ],
    stories: [
      {
        id: 'ru-h48',
        variant: 'ru-KZ',
        level: 'B1.2',
        cefr: 'B1',
        title: 'Дастарха́н у Айгу́ль',
        emoji: '🫖',
        summary: 'Em Almaty, a amiga Aigul convida Linu para jantar com a família, e ele aprende as palavras cazaques da mesa e do respeito: дастарха́н, апа́, баурсаки́, той.',
        cultural_context:
          'No Cazaquistão, receber visitas é sagrado: a família põe o дастарха́н, a mesa farta, com chá, баурсаки́ (bolinhos fritos) e doces. Às mulheres mais velhas se diz “апа́”, e aos homens mais velhos, “ага́”. O russo de lá é quase o de Moscou, mas cheio dessas palavras do cazaque.',
        start: 'start',
        glossary: [
          ['дастарха́н', 'mesa farta para as visitas'],
          ['апа́', 'senhora (respeitoso)'],
          ['ага́', 'senhor (respeitoso)'],
          ['баурсаки́', 'bolinhos fritos'],
          ['той', 'festa grande'],
          ['пиала́', 'tigela para o chá'],
        ],
        nodes: {
          start: {
            emoji: '🏔️',
            text: 'Ли́ну в Алматы́. Его́ подру́га Айгу́ль говори́т: “Сего́дня ты у́жинаешь у нас! Ма́ма уже́ накрыва́ет дастарха́н.” Ли́ну спра́шивает: “Дастарха́н? Э́то блю́до?”',
            translation: 'Linu está em Almaty. A amiga dele, Aigul, diz: “Hoje você janta com a gente! A mamãe já está pondo o dastarkhan.” Linu pergunta: “Dastarkhan? É um prato?”',
            choices: [
              { text: 'Айгу́ль объясня́ет: “Нет, э́то стол для госте́й!”', translation: 'A Aigul explica: “Não, é a mesa para as visitas!”', next: 'dom' },
            ],
          },
          dom: {
            emoji: '🫖',
            text: 'До́ма у Айгу́ль на столе́ мно́го еды́: фру́кты, сла́дости и большо́е блю́до с баурсака́ми. Ма́ма Айгу́ль налива́ет чай в пиалу́. Айгу́ль ше́пчет: “Скажи́ ма́ме ‘спаси́бо, апа́’. Так говоря́т ста́ршим же́нщинам.”',
            translation: 'Na casa da Aigul, a mesa está cheia de comida: frutas, doces e um prato grande de baursaki. A mãe da Aigul serve chá numa tigela. A Aigul sussurra: “Diga à mamãe ‘obrigado, apa’. É assim que se fala com as mulheres mais velhas.”',
            choices: [
              { text: '“Спаси́бо, апа́!”', translation: '“Obrigado, apa!”', next: 'baursak' },
              {
                text: '“Спаси́бо, Айгу́ль!”',
                translation: '“Obrigado, Aigul!”',
                wrong: 'Quem serviu o chá foi a mãe da Aigul. Para uma mulher mais velha, o respeitoso é “апа́”: “Спаси́бо, апа́!”.',
              },
            ],
          },
          baursak: {
            emoji: '🥯',
            text: 'Ма́ма улыба́ется и даёт Ли́ну баурса́к. “Ку́шай, ку́шай! У нас гость всегда́ пе́рвый.” Пото́м прихо́дит па́па Айгу́ль. Айгу́ль говори́т: “Э́то мой па́па. Ему́ мо́жно сказа́ть ‘ага́’.”',
            translation: 'A mãe sorri e dá um baursak ao Linu. “Come, come! Aqui a visita vem sempre em primeiro lugar.” Depois chega o pai da Aigul. A Aigul diz: “Este é o meu pai. Para ele você pode dizer ‘aga’.”',
            choices: [
              { text: '“Здра́вствуйте, ага́!”', translation: '“Boa noite, aga!”', next: 'toj' },
            ],
          },
          toj: {
            emoji: '🎉',
            text: 'Па́па дово́лен. “Молоде́ц! В суббо́ту у мое́й племя́нницы той, сва́дьба. Приходи́!” Ли́ну не зна́ет, что отве́тить.',
            translation: 'O pai fica contente. “Muito bem! No sábado tem o toi da minha sobrinha, o casamento. Venha!” Linu não sabe o que responder.',
            choices: [
              { text: '“С удово́льствием приду́ на той!”', translation: '“Vou ao toi com prazer!”', next: 'final_bom' },
              { text: '“Спаси́бо, но в суббо́ту я уезжа́ю.”', translation: '“Obrigado, mas no sábado eu vou embora.”', next: 'final_neutro' },
            ],
          },
          final_bom: {
            emoji: '💃',
            text: 'Вся семья́ смеётся и хло́пает. Айгу́ль говори́т: “Тепе́рь ты наш гость не то́лько на дастарха́не, но и на то́е!”',
            translation: 'A família inteira ri e bate palmas. A Aigul diz: “Agora você é nosso convidado não só no dastarkhan, mas também no toi!”',
            ending: {
              tone: 'bom',
              title: 'Convidado do toi',
              message: 'Você aprendeu as palavras cazaques do russo de Almaty: дастарха́н (mesa farta), апа́ e ага́ (respeito aos mais velhos), баурсаки́ (bolinhos) e той (festa grande).',
            },
          },
          final_neutro: {
            emoji: '🧳',
            text: 'Па́па Айгу́ль кива́ет: “Жаль! Тогда́ возьми́ баурса́ки в доро́гу.” Ма́ма кладёт в су́мку це́лый паке́т.',
            translation: 'O pai da Aigul faz que sim: “Que pena! Então leve baursaki para a viagem.” A mãe põe um saco inteiro na sacola.',
            ending: {
              tone: 'neutro',
              title: 'Baursaki para a viagem',
              message: 'Ninguém sai de uma casa cazaque de mãos vazias. Da próxima vez, fique para o toi!',
            },
          },
        },
      },
      {
        id: 'ru-h49',
        variant: 'ru-KZ',
        level: 'B2.2',
        cefr: 'B2',
        title: 'Нау́рыз в Аста́не',
        emoji: '🌷',
        summary: 'No Nauryz, o ano-novo da primavera, Linu passeia por Astana com o amigo Daniyar, que fala russo melhor que cazaque e tem vergonha disso, e os dois discutem como é viver entre duas línguas.',
        cultural_context:
          'O Наурыз, em 21 de março, é o ano-novo da primavera, festejado no Cazaquistão com iurtas nas praças, música e o “нау́рыз-коже́” (sopa de sete ingredientes). No país, o russo continua forte nas cidades, mas o cazaque avança: no censo de 2021, 57% disseram falar cazaque em casa e 38% russo. Muitos jovens urbanos cresceram em russo e hoje correm atrás do cazaque; a mistura das duas línguas tem até apelido: “шала́-каза́хский” (meio-cazaque).',
        start: 'start',
        glossary: [
          ['Нау́рыз', 'o ano-novo da primavera (21 de março)'],
          ['ю́рта', 'iurta, a tenda redonda dos nômades'],
          ['аки́м', 'prefeito (do cazaque)'],
          ['шала́-каза́хский', 'meio-cazaque: quem mistura ou fala mal o cazaque'],
          ['стесня́ться', 'ter vergonha, ficar sem jeito'],
          ['е́сли бы', 'se (hipótese irreal)'],
          ['хоть', 'pelo menos, ao menos'],
        ],
        nodes: {
          start: {
            emoji: '⛺',
            text: 'Два́дцать пе́рвое ма́рта, Аста́на. На пло́щади стоя́т ю́рты, игра́ет му́зыка. Аки́м го́рода поздравля́ет всех снача́ла по-каза́хски, пото́м по-ру́сски. Ли́ну и его́ друг Даниа́р слу́шают. Даниа́р говори́т: “Я понима́ю его́ каза́хскую речь, но сам так кра́сиво не скажу́.”',
            translation: 'Vinte e um de março, Astana. Na praça há iurtas e música. O prefeito da cidade cumprimenta todo mundo, primeiro em cazaque, depois em russo. Linu e o amigo dele, Daniyar, escutam. Daniyar diz: “Eu entendo o discurso dele em cazaque, mas eu mesmo não diria assim tão bonito.”',
            choices: [
              { text: '“Почему́? Ты же каза́х.”', translation: '“Por quê? Você é cazaque.”', next: 'pochemu' },
              {
                text: '“Аки́м — э́то певе́ц?”',
                translation: '“O akim é um cantor?”',
                wrong: '“Аки́м” é o prefeito (ou o governador da região): a palavra vem do cazaque “әкім” e entrou no russo do Cazaquistão.',
              },
            ],
          },
          pochemu: {
            emoji: '😔',
            text: '“Каза́х, да. Но я вы́рос в ру́сской шко́ле, и до́ма мы говори́ли по-ру́сски,” объясня́ет Даниа́р. “Ба́бушка говори́т, что я ‘шала́-каза́х’. Иногда́ мне сты́дно, когда́ ста́ршие обраща́ются ко мне по-каза́хски, а я отвеча́ю по-ру́сски.”',
            translation: '“Cazaque, sim. Mas eu cresci numa escola russa, e em casa a gente falava russo”, explica o Daniyar. “A minha avó diz que eu sou ‘shala-kazakh’. Às vezes tenho vergonha quando os mais velhos falam comigo em cazaque e eu respondo em russo.”',
            choices: [
              {
                text: '“Зна́чит, ‘шала́-каза́х’ — э́то тот, кто пло́хо зна́ет каза́хский?”',
                translation: '“Então ‘shala-kazakh’ é quem sabe mal o cazaque?”',
                next: 'shala',
              },
              {
                text: '“Зна́чит, твоя́ ба́бушка не говори́т по-каза́хски?”',
                translation: '“Então a sua avó não fala cazaque?”',
                wrong: 'É a avó que fala cazaque; quem fala mal é o Daniyar. “Шала́-каза́х” (meio-cazaque) é o apelido para quem cresceu em russo e mistura ou não domina o cazaque.',
              },
            ],
          },
          shala: {
            emoji: '🗣️',
            text: '“Да, ‘шала́’ зна́чит ‘наполови́ну’. Сейча́с мно́гие молоды́е в Аста́не у́чат каза́хский за́ново, и я то́же. Е́сли бы ба́бушка жила́ с на́ми, я бы давно́ говори́л свобо́дно.” К ним подхо́дит пожила́я же́нщина с ча́ем в пиале́: “Бала́м, нау́рыз-коже́ хо́чешь?”',
            translation: '“É, ‘shala’ quer dizer ‘pela metade’. Hoje muitos jovens de Astana estão reaprendendo o cazaque, e eu também. Se a minha avó morasse com a gente, eu já falaria fluente há muito tempo.” Uma senhora se aproxima com chá numa tigela: “Meu filho, quer nauryz-kozhe?”',
            choices: [
              {
                text: 'Ли́ну ти́хо говори́т Даниа́ру: “Отве́ть ей по-каза́хски. Хоть одно́ сло́во!”',
                translation: 'Linu diz baixinho ao Daniyar: “Responda em cazaque. Pelo menos uma palavra!”',
                next: 'otvet',
              },
              {
                text: 'Ли́ну отвеча́ет за Даниа́ра: “Спаси́бо, мы не хоти́м.”',
                translation: 'Linu responde pelo Daniyar: “Obrigado, não queremos.”',
                next: 'final_neutro',
              },
            ],
          },
          otvet: {
            emoji: '🥣',
            text: 'Даниа́р глубоко́ вздыха́ет и говори́т: “Рахме́т, апа́!” — по-каза́хски “спаси́бо”. Же́нщина сия́ет и отвеча́ет ему́ дли́нной фра́зой по-каза́хски. Даниа́р понима́ет почти́ всё и, немно́го стесня́ясь, отвеча́ет ещё не́сколькими слова́ми.',
            translation: 'Daniyar respira fundo e diz: “Rakhmet, apa!”, “obrigado” em cazaque. A senhora se ilumina e responde com uma frase longa em cazaque. Daniyar entende quase tudo e, um pouco sem jeito, responde com mais algumas palavras.',
            choices: [{ text: 'Же́нщина даёт им две пиалы́ нау́рыз-коже́.', translation: 'A senhora dá a eles duas tigelas de nauryz-kozhe.', next: 'final_bom' }],
          },
          final_bom: {
            emoji: '🌷',
            text: '“Ви́дишь, — говори́т Ли́ну, — она́ всё поняла́!” Даниа́р смеётся: “В сле́дующий Нау́рыз скажу́ це́лую речь, как аки́м.” Они́ едя́т нау́рыз-коже́ и слу́шают домбру́ на пло́щади.',
            translation: '“Viu?”, diz Linu. “Ela entendeu tudo!” Daniyar ri: “No próximo Nauryz vou fazer um discurso inteiro, igual ao akim.” Eles tomam o nauryz-kozhe e escutam a dombra na praça.',
            ending: {
              tone: 'bom',
              title: 'Um Nauryz em duas línguas',
              message: 'Você viu como se vive entre o russo e o cazaque em Astana: o “аки́м” bilíngue, o “шала́-каза́х” que reaprende a língua da avó, o “е́сли бы” das hipóteses e o “хоть” (pelo menos).',
            },
          },
          final_neutro: {
            emoji: '🤐',
            text: 'Же́нщина ухо́дит. Даниа́р молчи́т, пото́м говори́т: “Э́то был хоро́ший шанс. В сле́дующий раз отве́чу сам.”',
            translation: 'A senhora vai embora. Daniyar fica quieto e depois diz: “Era uma boa chance. Da próxima vez eu mesmo respondo.”',
            ending: {
              tone: 'neutro',
              title: 'A chance que passou',
              message: 'Para quem reaprende a língua da família, cada palavra conta. Da próxima vez, deixe o Daniyar responder: “Рахме́т, апа́!”',
            },
          },
        },
      },
    ],
  },
  // ───────────────────────────── UCRÂNIA ─────────────────────────────
  // Decisão do dono (10/10/2026): Odessa entra como sotaque de um dialeto «russo da Ucrânia». O cartão
  // registra que a língua do Estado é o ucraniano e que o uso do russo caiu muito desde 2022.
  {
    code: 'ru-UA',
    country: 'UKR',
    kind: 'dialeto',
    speechLocale: 'ru-RU',
    ipa: toIpaRuUcrania,
    name: 'Russo da Ucrânia',
    flag: '🇺🇦',
    summary:
      'O russo falado na Ucrânia, sobretudo no leste e no sul, em cidades como Odessa e Kharkiv. Não tem status oficial: a única língua do Estado é o ucraniano. Tem o “г” aspirado do ucraniano, palavras de lá (буря́к, тре́мпель) e, em Odessa, um humor e uma sintaxe que vêm do iídiche.',
    card: {
      id: 'ru-ua-c1',
      title: 'Uma língua de casa, não do Estado',
      emoji: '🌻',
      history:
        'Por séculos, o russo foi a língua das cidades do leste e do sul da Ucrânia, e na época soviética, a língua da administração e de boa parte das escolas. No censo de 2001, 29,6% da população disse ter o russo como língua materna, entre eles 14,8% dos ucranianos étnicos. Uma lei de 2012 deu ao russo o status de língua regional em nove regiões, como Odessa e Kharkiv; a lei de 2019 sobre a língua do Estado tirou esse status e fez do ucraniano a língua obrigatória da vida pública. Depois da invasão russa de 2022, muita gente passou a falar ucraniano também em casa: numa pesquisa de fevereiro de 2023, 58% disseram falar só ucraniano em casa, 30% as duas línguas e 11% só russo. Odessa e Kharkiv continuam as cidades onde o russo mais se ouve dentro de casa.',
      culture_tip:
        'Na Ucrânia, a escolha da língua é um assunto delicado: muita gente que cresceu falando russo passou a falar ucraniano por decisão própria, e muitas famílias usam as duas línguas, cada pessoa a sua. O mais educado é seguir a língua de quem fala com você. Em Odessa, o mercado Приво́з é uma instituição: ali se pechincha com humor, e as respostas vêm em forma de pergunta. A cidade é também a das piadas, dos escritores Iliá Ilf e Ievguêni Petrov e de Isaac Bábel.',
      grammar_why:
        'A gramática é a do russo, com marcas do ucraniano e, em Odessa, do iídiche: (1) o “г” aspirado [ɦ], como no ucraniano; (2) palavras ucranianas no russo de todo dia: “буря́к” (beterraba), “тре́мпель” (cabide); (3) na fala de quem mistura as duas línguas, o surzhyk, as terminações seguem o ucraniano: “по дома́х” em vez de “по дома́м”; (4) em Odessa, a ordem das palavras e partículas do iídiche: “Вы та́ки пришли́?” (o senhor veio, afinal?), “Я вас умоля́ю!” (ora, por favor!), e “шо” no lugar de “что”.',
      grammar_examples: [
        ['Купи́ буря́к на борщ.', 'Compre beterraba para o borsch. (padrão: свёклу)'],
        ['Пове́сь пальто́ на тре́мпель.', 'Pendure o casaco no cabide. (padrão: на ве́шалку)'],
        ['Шо ты говори́шь?', 'O que você está dizendo? (padrão: Что ты говори́шь?)'],
        ['Вы та́ки пришли́!', 'O senhor veio, afinal! (Odessa)'],
        ['Я вас умоля́ю!', 'Ora, faça-me o favor! (Odessa)'],
      ],
      character_guide: [
        ['г', 'aspirado [ɦ], como o “h” sonoro do ucraniano', 'го́род, доро́га'],
        ['шо', 'o “что” da fala do sul', 'Шо слу́чилось?'],
      ],
    },
    pronunciation: [
      'O “г” soa aspirado [ɦ], como no ucraniano: “го́род” soa quase “horod”.',
      'Quem fala ucraniano no dia a dia leva para o russo a tônica e a melodia do ucraniano.',
      'O “что” vira “шо” na fala informal, em todo o sul.',
      'Em Odessa, a entonação é cantada e cheia de perguntas retóricas, herança do iídiche.',
      'A voz do app é a de Moscou: as frases vão soar com a pronúncia padrão.',
    ],
    vocab: [
      ['свёкла', 'буря́к', 'beterraba', 'do ucraniano “буря́к”'],
      ['ве́шалка', 'тре́мпель', 'cabide', 'palavra típica do russo da Ucrânia'],
      ['что', 'шо', 'o quê, que', 'na fala informal do sul'],
      ['по дома́м', 'по дома́х', 'pelas casas', 'a terminação do ucraniano, no surzhyk'],
      ['ра́зве', 'та́ки', 'afinal, mesmo', 'partícula de Odessa, do iídiche'],
    ],
    stories: [
      {
        id: 'ru-h50',
        variant: 'ru-UA',
        level: 'B1.2',
        cefr: 'B1',
        title: 'Приво́з',
        emoji: '🐟',
        summary: 'No Privoz, o mercado de Odessa, Linu tenta comprar peixe e beterraba e descobre que ali ninguém responde sem fazer outra pergunta.',
        cultural_context:
          'O Привоз é o mercado mais famoso de Odessa, aberto desde o século XIX. Ali se compram peixe do mar Negro, frutas e verduras, e se pechincha com o humor da cidade: o russo de Odessa tem “шо” no lugar de “что”, o “та́ки” do iídiche e respostas em forma de pergunta.',
        start: 'start',
        glossary: [
          ['Приво́з', 'o grande mercado de Odessa'],
          ['шо', 'o quê (padrão: что)'],
          ['та́ки', 'afinal, mesmo (Odessa)'],
          ['буря́к', 'beterraba (padrão: свёкла)'],
          ['бычки́', 'góbios, peixinhos do mar Negro'],
          ['Я вас умоля́ю!', 'Ora, faça-me o favor!'],
        ],
        nodes: {
          start: {
            emoji: '🧺',
            text: 'Ли́ну в Оде́ссе. Его́ друг Ми́ша говори́т: “Е́сли ты хо́чешь уви́деть Оде́ссу, иди́ на Приво́з!” Ли́ну идёт на ры́нок. Продавщи́ца ры́бы спра́шивает: “Молодо́й челове́к, шо вы хоти́те?”',
            translation: 'Linu está em Odessa. O amigo dele, Misha, diz: “Se você quer ver Odessa, vá ao Privoz!” Linu vai ao mercado. A vendedora de peixe pergunta: “Moço, o que o senhor quer?”',
            choices: [
              { text: '“Я хочу́ ры́бу. Что у вас есть?”', translation: '“Eu quero peixe. O que a senhora tem?”', next: 'ryba' },
              {
                text: 'Ли́ну ду́мает, что “шо” — э́то назва́ние ры́бы.',
                translation: 'Linu acha que “sho” é o nome de um peixe.',
                wrong: '“Шо” é o “что” (o quê) do sul: a vendedora perguntou o que o Linu queria.',
              },
            ],
          },
          ryba: {
            emoji: '🐟',
            text: 'Продавщи́ца смеётся: “Шо у меня́ есть? А шо вы ви́дите? Бычки́! Са́мые све́жие в Оде́ссе!” Ли́ну спра́шивает: “Ско́лько сто́ят?” Она́ отвеча́ет: “А ско́лько вы хоти́те заплати́ть?”',
            translation: 'A vendedora ri: “O que eu tenho? E o que o senhor está vendo? Góbios! Os mais frescos de Odessa!” Linu pergunta: “Quanto custam?” Ela responde: “E quanto o senhor quer pagar?”',
            choices: [
              { text: '“Сто гри́вен?”', translation: '“Cem grívnias?”', next: 'cena' },
              {
                text: 'Ли́ну обижа́ется: она́ не отвеча́ет на вопро́с!',
                translation: 'Linu se ofende: ela não responde à pergunta!',
                wrong: 'Não é falta de educação: em Odessa, responder com outra pergunta é parte do humor e da pechincha.',
              },
            ],
          },
          cena: {
            emoji: '😄',
            text: '“Сто гри́вен? Я вас умоля́ю! Э́то же бычки́, а не зо́лото!” Она́ кладёт ры́бу в паке́т. “Берёте за во́семьдесят, и ещё дам буря́к на борщ.” Ли́ну не понима́ет: “Буря́к?”',
            translation: '“Cem grívnias? Ora, faça-me o favor! São góbios, não ouro!” Ela põe o peixe num saco. “Leva por oitenta, e eu ainda dou beterraba para o borsch.” Linu não entende: “Buriak?”',
            choices: [
              { text: 'Ми́ша, кото́рый подошёл, объясня́ет: “Буря́к — э́то свёкла!”', translation: 'Misha, que chegou, explica: “Buriak é beterraba!”', next: 'mish' },
            ],
          },
          mish: {
            emoji: '🛍️',
            text: '“Вы та́ки купи́ли бычки́?” — спра́шивает Ми́ша. “Купи́л! И буря́к!” — отвеча́ет Ли́ну. Продавщи́ца подмигива́ет: “Приходи́те ещё, молодо́й челове́к. Без вас Приво́з не Приво́з!”',
            translation: '“Você comprou os góbios, afinal?”, pergunta o Misha. “Comprei! E a beterraba!”, responde Linu. A vendedora pisca: “Volte sempre, moço. Sem o senhor, o Privoz não é o Privoz!”',
            choices: [
              { text: '“Обяза́тельно приду́!”', translation: '“Volto com certeza!”', next: 'final_bom' },
              { text: 'Ли́ну молча́ ухо́дит.', translation: 'Linu vai embora calado.', next: 'final_neutro' },
            ],
          },
          final_bom: {
            emoji: '🍲',
            text: 'Ве́чером ба́бушка Ми́ши гото́вит борщ с буряко́м и жа́рит бычки́. “Ну шо, — спра́шивает она́, — вку́сно?” Ли́ну отвеча́ет: “А шо, не ви́дно?” Все смею́тся.',
            translation: 'À noite, a avó do Misha faz borsch com beterraba e frita os góbios. “E aí”, pergunta ela, “está gostoso?” Linu responde: “E não dá para ver?” Todos riem.',
            ending: {
              tone: 'bom',
              title: 'Resposta à moda de Odessa',
              message: 'Você aprendeu o russo de Odessa: “шо”, “та́ки”, “Я вас умоля́ю!”, as respostas em forma de pergunta e o “буря́к” do borsch.',
            },
          },
          final_neutro: {
            emoji: '🚶',
            text: 'Ли́ну ухо́дит с ры́бой. Ми́ша говори́т: “В Оде́ссе на́до отвеча́ть! Тут без разгово́ра ничего́ не покупа́ют.”',
            translation: 'Linu sai com o peixe. Misha diz: “Em Odessa a gente tem de responder! Aqui ninguém compra nada sem conversa.”',
            ending: {
              tone: 'neutro',
              title: 'Conversa faz parte',
              message: 'No Privoz, a conversa vale tanto quanto o peixe. Da próxima vez, entre no jogo!',
            },
          },
        },
      },
      {
        id: 'ru-h51',
        variant: 'ru-UA',
        level: 'B2.2',
        cefr: 'B2',
        title: 'Тре́мпель для пальто́',
        emoji: '🧥',
        summary: 'Em Kharkiv, Linu visita a amiga Oksana e a avó dela: a neta fala ucraniano no trabalho e com os amigos, a avó fala russo, e as duas se entendem perfeitamente.',
        cultural_context:
          'Kharkiv, no leste da Ucrânia, é uma das cidades onde o russo mais se ouve em casa: numa pesquisa de 2023, 78% dos moradores disseram falar russo em casa. Ao mesmo tempo, depois de 2022, muita gente passou a usar o ucraniano no trabalho, na escola e na internet. É comum ver famílias em que cada pessoa fala a sua língua, e todos se entendem.',
        start: 'start',
        glossary: [
          ['тре́мпель', 'cabide (padrão: ве́шалка)'],
          ['перейти́ на', 'passar a usar (uma língua)'],
          ['понима́ть друг дру́га', 'entender-se'],
          ['привы́чка', 'hábito'],
          ['что бы ни', 'o que quer que'],
          ['по-сво́ему', 'do seu jeito'],
        ],
        nodes: {
          start: {
            emoji: '🏢',
            text: 'Ли́ну в Ха́рькове, в гостя́х у подру́ги Окса́ны. В прихо́жей её ба́бушка говори́т: “Дава́й пальто́, я пове́шу на тре́мпель.” Ли́ну не зна́ет э́того сло́ва и смо́трит на Окса́ну.',
            translation: 'Linu está em Kharkiv, visitando a amiga Oksana. No hall, a avó dela diz: “Me dá o casaco, eu penduro no trempel.” Linu não conhece a palavra e olha para a Oksana.',
            choices: [
              { text: '“А что тако́е тре́мпель?”', translation: '“E o que é trempel?”', next: 'trempel' },
              {
                text: 'Ли́ну ду́мает, что ба́бушка хо́чет забра́ть его́ пальто́ насовсе́м.',
                translation: 'Linu acha que a avó quer ficar com o casaco dele para sempre.',
                wrong: '“Тре́мпель” é só o cabide (no padrão, “ве́шалка”): a avó vai pendurar o casaco.',
              },
            ],
          },
          trempel: {
            emoji: '🧥',
            text: 'Окса́на смеётся: “Тре́мпель — э́то ве́шалка. В Москве́ так не говоря́т, а у нас все так говоря́т.” Пото́м она́ звони́т колле́ге и говори́т с ним по-украи́нски. Ли́ну удивля́ется: “Ты говори́шь на двух языка́х?”',
            translation: 'A Oksana ri: “Trempel é cabide. Em Moscou não se diz assim, mas aqui todo mundo diz.” Depois ela liga para um colega e fala com ele em ucraniano. Linu se surpreende: “Você fala duas línguas?”',
            choices: [
              { text: '“Почему́ ты говори́шь с колле́гой по-украи́нски?”', translation: '“Por que você fala com o colega em ucraniano?”', next: 'yazyk' },
            ],
          },
          yazyk: {
            emoji: '🗣️',
            text: '“Я вы́росла в русскоязы́чной семье́, — объясня́ет Окса́на. — Но по́сле двадца́ть второ́го го́да я перешла́ на украи́нский: на рабо́те, с друзья́ми, в интерне́те. Э́то бы́ло моё реше́ние. А с ба́бушкой говорю́ по-ру́сски, по привы́чке. Ей так удо́бнее.”',
            translation: '“Eu cresci numa família que falava russo”, explica a Oksana. “Mas depois de 2022 passei a usar o ucraniano: no trabalho, com os amigos, na internet. Foi uma decisão minha. E com a minha avó eu falo russo, por hábito. Para ela é mais confortável.”',
            choices: [
              {
                text: '“Зна́чит, в ва́шей семье́ ка́ждый говори́т по-сво́ему, и все понима́ют друг дру́га.”',
                translation: '“Então na sua família cada um fala do seu jeito, e todos se entendem.”',
                next: 'babushka',
              },
              {
                text: '“Зна́чит, ба́бушка не понима́ет по-украи́нски.”',
                translation: '“Então a sua avó não entende ucraniano.”',
                wrong: 'A avó entende; a Oksana fala russo com ela por hábito e porque é mais confortável para a avó, não porque ela não entenda.',
              },
            ],
          },
          babushka: {
            emoji: '👵',
            text: 'Ба́бушка ста́вит на стол борщ и улыба́ется: “Что бы мы ни говори́ли, борщ у нас оди́н.” Окса́на отвеча́ет ей по-украи́нски: “Пра́вда, бабу́сю!” — и ба́бушка понима́ет ка́ждое сло́во.',
            translation: 'A avó põe o borsch na mesa e sorri: “Seja lá o que a gente fale, o borsch é um só.” A Oksana responde em ucraniano: “É verdade, vovó!”, e a avó entende cada palavra.',
            choices: [
              { text: 'Ли́ну про́бует сказа́ть по-украи́нски: “Дя́кую!”', translation: 'Linu tenta dizer em ucraniano: “Obrigado!”', next: 'final_bom' },
              { text: 'Ли́ну ест мо́лча.', translation: 'Linu come em silêncio.', next: 'final_neutro' },
            ],
          },
          final_bom: {
            emoji: '🌻',
            text: 'Ба́бушка и Окса́на хло́пают в ладо́ши. “Молоде́ц!” — говори́т ба́бушка по-ру́сски. “Мо́лодець!” — повторя́ет Окса́на по-украи́нски. Ли́ну смеётся: в э́той семье́ да́же похвала́ звучи́т на двух языка́х.',
            translation: 'A avó e a Oksana batem palmas. “Muito bem!”, diz a avó em russo. “Muito bem!”, repete a Oksana em ucraniano. Linu ri: nesta família até o elogio soa em duas línguas.',
            ending: {
              tone: 'bom',
              title: 'Duas línguas, um borsch',
              message: 'Você conheceu o russo de Kharkiv (“тре́мпель”), viu como muita gente na Ucrânia passou a usar o ucraniano, e praticou “перейти́ на” (passar a usar), “по привы́чке” e “что бы ни”.',
            },
          },
          final_neutro: {
            emoji: '🍲',
            text: 'Ли́ну ест борщ мо́лча. По доро́ге домо́й он ду́мает, что мог бы вы́учить хотя́ бы одно́ сло́во по-украи́нски.',
            translation: 'Linu come o borsch em silêncio. No caminho de volta, pensa que poderia ter aprendido pelo menos uma palavra em ucraniano.',
            ending: {
              tone: 'neutro',
              title: 'Uma palavra faria diferença',
              message: 'Na Ucrânia, um “дя́кую” (obrigado, em ucraniano) abre portas. Da próxima vez, arrisque!',
            },
          },
        },
      },
    ],
  },
];
