import type { StorySeed } from '../types';

/**
 * Histórias interativas em romeno. Cada nó tem texto e tradução; as escolhas ficam
 * em romeno e testam a compreensão. Escolhas com `wrong` mostram uma dica e não avançam.
 */
export const STORIES_RO: StorySeed[] = [
  {
    id: 'ro-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Linu în București',
    emoji: '🐧',
    summary: 'O Linu chega a Bucareste com fome. Padaria ou café?',
    cultural_context: 'O covrig (uma rosca parecida com pretzel) é o lanche de rua mais popular de Bucareste e custa poucos lei.',
    start: 'start',
    glossary: [
      ['îi este foame', 'ele está com fome'],
      ['brutărie', 'padaria'],
      ['cafenea', 'café (lugar)'],
      ['covrig', 'rosca salgada típica'],
      ['proaspăt', 'fresco'],
      ['hartă', 'mapa'],
    ],
    nodes: {
      start: {
        emoji: '🏙️',
        text: 'Linu ajunge în București. Este dimineață și îi este foame. Pe stradă vede o brutărie și o cafenea.',
        translation: 'Linu chega a Bucareste. É de manhã e ele está com fome. Na rua ele vê uma padaria e um café.',
        choices: [
          { text: 'Intră în brutărie.', translation: 'Entra na padaria.', next: 'brutarie' },
          { text: 'Intră în cafenea.', translation: 'Entra no café.', next: 'cafenea' },
          { text: 'Merge la plajă.', translation: 'Vai à praia.', next: 'plaja' },
        ],
      },
      plaja: {
        emoji: '🏖️',
        text: 'Linu merge o oră pe jos… dar Bucureștiul nu este la mare! Marea Neagră este la peste două sute de kilometri. Linu se întoarce, obosit și flămând.',
        translation: 'Linu anda uma hora… mas Bucareste não fica no litoral! O Mar Negro está a mais de duzentos quilômetros. Linu volta, cansado e faminto.',
        choices: [{ text: 'Încearcă din nou.', translation: 'Tenta de novo.', next: 'start' }],
      },
      brutarie: {
        emoji: '🥨',
        text: 'Brutăreasa zâmbește: «Bună dimineața! Ce doriți?» Pe raft sunt covrigi calzi și pâine proaspătă.',
        translation: 'A padeira sorri: «Bom dia! O que deseja?» Na prateleira há roscas quentes e pão fresco.',
        choices: [
          { text: 'Un covrig, vă rog.', translation: 'Uma rosca, por favor.', next: 'covrig' },
          {
            text: 'O pizza, vă rog.',
            translation: 'Uma pizza, por favor.',
            wrong: 'A padeira ri: «Nu avem pizza, aici este o brutărie!» (Não temos pizza, aqui é uma padaria!) Olhe de novo o que há na prateleira.',
          },
        ],
      },
      covrig: {
        emoji: '🪙',
        text: 'Covrigul costă doi lei. Linu plătește și mănâncă pe stradă, fericit. Un băiat îl întreabă: «Cât ai dat pe covrig?»',
        translation: 'A rosca custa dois lei. Linu paga e come na rua, feliz. Um menino pergunta: «Quanto você pagou pela rosca?»',
        choices: [
          { text: 'Doi lei.', translation: 'Dois lei.', next: 'final_covrig' },
          { text: 'Zece lei.', translation: 'Dez lei.', wrong: 'Releia: «Covrigul costă doi lei.» Doi = dois.' },
        ],
      },
      final_covrig: {
        emoji: '😋',
        text: 'Băiatul spune: «Ieftin și bun! Poftă bună!»',
        translation: 'O menino diz: «Barato e gostoso! Bom apetite!»',
        ending: { tone: 'bom', title: 'Café da manhã romeno!', message: 'O Linu provou o covrig, o lanche de rua mais famoso de Bucareste.' },
      },
      cafenea: {
        emoji: '☕',
        text: 'Ospătarul întreabă: «Ce doriți să beți?»',
        translation: 'O garçom pergunta: «O que deseja beber?»',
        choices: [
          { text: 'O cafea cu lapte, vă rog.', translation: 'Um café com leite, por favor.', next: 'cafe' },
          { text: 'Un pahar de apă.', translation: 'Um copo de água.', next: 'apa' },
          { text: 'Mă numesc Linu.', translation: 'Eu me chamo Linu.', wrong: 'O garçom perguntou o que você quer BEBER (a bea = beber), não o seu nome.' },
        ],
      },
      apa: {
        emoji: '💧',
        text: 'Ospătarul aduce apa. «Și ceva de mâncare?»',
        translation: 'O garçom traz a água. «E algo para comer?»',
        choices: [
          { text: 'Da, un croissant, vă rog.', translation: 'Sim, um croissant, por favor.', next: 'cafe' },
          { text: 'Nu, mulțumesc.', translation: 'Não, obrigado.', next: 'final_foame' },
        ],
      },
      final_foame: {
        emoji: '🥺',
        text: 'Linu bea apa și pleacă. Burta lui face «ghiorț, ghiorț».',
        translation: 'Linu bebe a água e vai embora. A barriga dele faz «ronc, ronc».',
        ending: { tone: 'neutro', title: 'Ainda com fome…', message: 'O Linu matou a sede, mas esqueceu que estava com fome. Tente outro caminho!' },
      },
      cafe: {
        emoji: '📖',
        text: 'Lângă Linu stă o fată care citește o carte. Ea spune: «Bună! Ești turist?»',
        translation: 'Ao lado do Linu está sentada uma moça que lê um livro. Ela diz: «Oi! Você é turista?»',
        choices: [
          { text: 'Da, sunt din Antarctica!', translation: 'Sim, sou da Antártida!', next: 'ana' },
          { text: 'Nu înțeleg.', translation: 'Não entendo.', next: 'incet' },
        ],
      },
      incet: {
        emoji: '🗣️',
        text: 'Fata vorbește mai încet: «Ești… tu… turist?»',
        translation: 'A moça fala mais devagar: «Você… é… turista?»',
        choices: [{ text: 'Da, sunt turist!', translation: 'Sim, sou turista!', next: 'ana' }],
      },
      ana: {
        emoji: '🗺️',
        text: 'Fata râde: «Un pinguin în București! Eu sunt Ana.» Ana îi arată pe hartă Ateneul Român.',
        translation: 'A moça ri: «Um pinguim em Bucareste! Eu sou a Ana.» Ana mostra a ele no mapa o Ateneu Romeno.',
        ending: { tone: 'bom', title: 'Uma amiga em Bucareste!', message: 'O Linu fez uma amiga e ganhou uma guia pela cidade.' },
      },
    },
  },
  {
    id: 'ro-h2',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Trenul spre Brașov',
    emoji: '🚆',
    summary: 'Comprar passagem, achar a plataforma certa e não ir parar na praia.',
    cultural_context:
      'A Gara de Nord é a principal estação de Bucareste. Brașov, nos Cárpatos, é famosa pela Igreja Negra, que ganhou a cor escura num incêndio em 1689.',
    start: 'start',
    glossary: [
      ['gară', 'estação de trem'],
      ['coadă', 'fila'],
      ['casa de bilete', 'bilheteria'],
      ['dus-întors', 'ida e volta'],
      ['peron / linie', 'plataforma'],
      ['a urca', 'subir / embarcar'],
      ['loc liber', 'lugar livre'],
    ],
    nodes: {
      start: {
        emoji: '🚉',
        text: 'Linu vrea să viziteze Brașovul. Merge la Gara de Nord cu metroul. La casa de bilete este o coadă lungă.',
        translation: 'Linu quer visitar Brașov. Vai à Estação do Norte de metrô. Na bilheteria há uma fila longa.',
        choices: [
          { text: 'Așteaptă la coadă.', translation: 'Espera na fila.', next: 'casa' },
          { text: 'Cumpără biletul de la automat.', translation: 'Compra a passagem na máquina.', next: 'automat' },
        ],
      },
      casa: {
        emoji: '🎫',
        text: 'După zece minute, casiera întreabă: «Unde doriți să mergeți?»',
        translation: 'Depois de dez minutos, a atendente pergunta: «Para onde deseja ir?»',
        choices: [
          { text: 'Un bilet pentru Brașov, vă rog.', translation: 'Uma passagem para Brașov, por favor.', next: 'pret' },
          {
            text: 'Vreau un covrig.',
            translation: 'Quero uma rosca.',
            wrong: 'A atendente perguntou «Unde?» (Onde / para onde?). Ela vende passagens, não comida!',
          },
        ],
      },
      automat: {
        emoji: '🖥️',
        text: 'Automatul are meniu în română. Linu scrie «Brașov». Pe ecran apare: «Dus sau dus-întors?»',
        translation: 'A máquina tem menu em romeno. Linu digita «Brașov». Na tela aparece: «Só ida ou ida e volta?»',
        choices: [
          { text: 'Dus-întors.', translation: 'Ida e volta.', next: 'pret' },
          {
            text: 'Anulare.',
            translation: 'Cancelar.',
            wrong: '«Anulare» quer dizer cancelar, e a compra seria perdida! «Dus» = ida, «dus-întors» = ida e volta.',
          },
        ],
      },
      pret: {
        emoji: '🕤',
        text: 'Biletul costă șaizeci de lei. Trenul pleacă de la linia cinci, la ora nouă și jumătate.',
        translation: 'A passagem custa sessenta lei. O trem sai da plataforma cinco, às nove e meia.',
        choices: [
          { text: 'Merge la linia cinci.', translation: 'Vai para a plataforma cinco.', next: 'peron' },
          { text: 'Merge la linia nouă.', translation: 'Vai para a plataforma nove.', wrong: 'Nove e meia é a HORA. A plataforma («linia») é a cinco.' },
        ],
      },
      peron: {
        emoji: '🚆',
        text: 'Pe peron sunt două trenuri. Pe unul scrie «Constanța», pe celălalt «Brașov».',
        translation: 'Na plataforma há dois trens. Em um está escrito «Constanța», no outro «Brașov».',
        choices: [
          { text: 'Urcă în trenul spre Brașov.', translation: 'Embarca no trem para Brașov.', next: 'tren' },
          { text: 'Urcă în trenul spre Constanța.', translation: 'Embarca no trem para Constanța.', next: 'constanta' },
        ],
      },
      constanta: {
        emoji: '🌊',
        text: 'Controlorul verifică biletul: «Domnule, acest tren merge la mare, nu la munte!» Linu coboară repede.',
        translation: 'O fiscal confere a passagem: «Senhor, este trem vai para o mar, não para a montanha!» Linu desce rapidinho.',
        choices: [{ text: 'Caută trenul bun.', translation: 'Procura o trem certo.', next: 'tren' }],
      },
      tren: {
        emoji: '💺',
        text: 'În tren, o doamnă în vârstă îl întreabă: «Este liber locul acesta?»',
        translation: 'No trem, uma senhora idosa pergunta a ele: «Este lugar está livre?»',
        choices: [
          { text: 'Da, poftiți!', translation: 'Sim, fique à vontade!', next: 'doamna' },
          {
            text: 'Da, stai aici!',
            translation: 'Sim, senta aí!',
            wrong: 'Com uma senhora desconhecida, o formal fica melhor: «Da, poftiți!» (poftiți = forma educada).',
          },
        ],
      },
      doamna: {
        emoji: '🍎',
        text: 'Doamna se așază și îi dă un măr. «Mergi la Brașov? Trebuie să vezi Biserica Neagră!»',
        translation: 'A senhora se senta e lhe dá uma maçã. «Vai a Brașov? Você tem que ver a Igreja Negra!»',
        choices: [
          { text: 'Mulțumesc! De ce se numește așa?', translation: 'Obrigado! Por que se chama assim?', next: 'biserica' },
          { text: 'Nu-mi plac merele.', translation: 'Não gosto de maçãs.', next: 'final_mar' },
        ],
      },
      final_mar: {
        emoji: '😶',
        text: 'Doamna tace și se uită pe geam tot drumul.',
        translation: 'A senhora fica em silêncio e olha pela janela o caminho todo.',
        ending: { tone: 'neutro', title: 'Viagem silenciosa', message: 'O Linu chegou a Brașov, mas perdeu uma boa conversa (e uma boa história).' },
      },
      biserica: {
        emoji: '⛪',
        text: '«Este o biserică gotică foarte veche. În 1689 a fost un incendiu mare și zidurile au rămas negre.»',
        translation: '«É uma igreja gótica muito antiga. Em 1689 houve um grande incêndio e as paredes ficaram pretas.»',
        ending: { tone: 'bom', title: 'Chegou a Brașov!', message: 'O Linu chegou sabendo a história da Igreja Negra, e com uma maçã de presente.' },
      },
    },
  },
  {
    id: 'ro-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Duminică la bunica',
    emoji: '👵',
    summary: 'Almoço de domingo na casa da avó: flores, sarmale e muita comida.',
    cultural_context:
      'Na Romênia se levam flores em número ímpar (par é para funerais), e recusar comida na casa da avó é quase uma ofensa. «Sărut mâna» é o cumprimento tradicional e respeitoso para os mais velhos.',
    start: 'start',
    glossary: [
      ['florărie', 'floricultura'],
      ['trandafir', 'rosa'],
      ['număr par', 'número par'],
      ['Sărut mâna', 'beijo a mão (saudação respeitosa)'],
      ['farfurie', 'prato'],
      ['sătul', 'satisfeito, cheio'],
      ['papanași', 'sonhos fritos com creme e geleia'],
    ],
    nodes: {
      start: {
        emoji: '💐',
        text: 'Este duminică. Linu este invitat la masă la bunica Ioana. Pe drum trece pe lângă o florărie.',
        translation: 'É domingo. Linu foi convidado para almoçar na casa da vovó Ioana. No caminho, ele passa por uma floricultura.',
        choices: [
          { text: 'Cumpără trei trandafiri.', translation: 'Compra três rosas.', next: 'usa' },
          { text: 'Cumpără doi trandafiri.', translation: 'Compra duas rosas.', next: 'doi' },
        ],
      },
      doi: {
        emoji: '🥀',
        text: 'Florăreasa se uită ciudat: «Doi trandafiri? Număr par se duce doar la înmormântare!»',
        translation: 'A florista olha estranho: «Duas rosas? Número par só se leva a enterro!»',
        choices: [{ text: 'Atunci trei, vă rog!', translation: 'Então três, por favor!', next: 'usa' }],
      },
      usa: {
        emoji: '🚪',
        text: 'Bunica deschide ușa: «Ce flori frumoase! Intră, dragul meu!»',
        translation: 'A vovó abre a porta: «Que flores lindas! Entre, meu querido!»',
        choices: [
          { text: 'Sărut mâna, bunico!', translation: 'Beijo a mão, vovó!', next: 'masa' },
          {
            text: 'Bună seara, bunico!',
            translation: 'Boa noite, vovó!',
            wrong: 'Releia o começo: «Este duminică» e é hora do almoço, não de noite. Com os mais velhos, o tradicional é «Sărut mâna!».',
          },
        ],
      },
      masa: {
        emoji: '🥬',
        text: 'Pe masă sunt ciorbă, sarmale și mămăligă. Bunica pune în farfurie trei sarmale. După zece minute: «Mai mănânci, nu?»',
        translation: 'Na mesa há sopa, sarmale e polenta. A vovó põe três sarmale no prato. Dez minutos depois: «Vai comer mais, né?»',
        choices: [
          { text: 'Da, vă rog, sunt delicioase!', translation: 'Sim, por favor, estão deliciosos!', next: 'desert' },
          { text: 'Nu, mulțumesc, sunt sătul.', translation: 'Não, obrigado, estou satisfeito.', next: 'trista' },
        ],
      },
      trista: {
        emoji: '😢',
        text: 'Bunica se uită tristă: «Nu-ți place mâncarea mea?»',
        translation: 'A vovó olha triste: «Você não gosta da minha comida?»',
        choices: [
          { text: 'Ba da! Mai iau una, vă rog.', translation: 'Gosto sim! Pego mais um, por favor.', next: 'desert' },
          {
            text: 'Nu.',
            translation: 'Não.',
            wrong: 'Ai! «Nu» aqui quer dizer «não gosto da sua comida». Para dizer «gosto sim» depois de uma pergunta negativa, o romeno usa «Ba da!».',
          },
        ],
      },
      desert: {
        emoji: '🍩',
        text: 'Bunica e fericită. După sarmale vine desertul: papanași cu smântână și dulceață!',
        translation: 'A vovó está feliz. Depois dos sarmale vem a sobremesa: papanași com creme e geleia!',
        choices: [
          { text: 'Mănâncă papanașii.', translation: 'Come os papanași.', next: 'final_bun' },
          { text: 'Pleacă acasă.', translation: 'Vai para casa.', next: 'final_pleaca' },
        ],
      },
      final_bun: {
        emoji: '🥰',
        text: 'Linu mănâncă până nu mai poate. Bunica îi dă și un pachet cu sarmale pentru acasă.',
        translation: 'Linu come até não aguentar mais. A vovó ainda lhe dá um pacote de sarmale para levar.',
        ending: {
          tone: 'bom',
          title: 'Conquistou a bunica!',
          message: 'Flores em número ímpar, «Sărut mâna» e prato limpo: o Linu entendeu a hospitalidade romena.',
        },
      },
      final_pleaca: {
        emoji: '🚶',
        text: 'Bunica îl conduce la ușă, puțin supărată: «Dar papanașii?»',
        translation: 'A vovó o acompanha até a porta, um pouco chateada: «E os papanași?»',
        ending: { tone: 'neutro', title: 'Saiu cedo demais', message: 'Na Romênia, a sobremesa da avó não se recusa! Tente de novo.' },
      },
    },
  },
  {
    id: 'ro-h4',
    level: 'B1.2',
    cefr: 'B1',
    title: 'O noapte la Castelul Bran',
    emoji: '🏰',
    summary: 'Drácula, Vlad Țepeș e um barulho estranho na torre.',
    cultural_context:
      'Bram Stoker nunca esteve na Romênia. Vlad III (Țepeș) governou a Valáquia no séc. XV e lutou contra os otomanos. O Castelo de Bran foi depois residência da rainha Maria.',
    start: 'start',
    glossary: [
      ['ghid', 'guia'],
      ['de fapt', 'na verdade'],
      ['sicriu', 'caixão'],
      ['domnitor', 'príncipe governante'],
      ['a lupta împotriva', 'lutar contra'],
      ['deodată', 'de repente'],
      ['zgomot', 'barulho'],
      ['turn', 'torre'],
    ],
    nodes: {
      start: {
        emoji: '🏰',
        text: 'Linu vizitează Castelul Bran cu un grup de turiști. Ghidul, domnul Radu, începe: «Mulți cred că aici a locuit Dracula. Dar povestea adevărată este alta.»',
        translation:
          'Linu visita o Castelo de Bran com um grupo de turistas. O guia, o senhor Radu, começa: «Muitos acham que aqui morou o Drácula. Mas a história verdadeira é outra.»',
        choices: [
          { text: 'Ce s-a întâmplat de fapt?', translation: 'O que aconteceu na verdade?', next: 'istorie' },
          { text: 'Unde este sicriul lui Dracula?', translation: 'Onde está o caixão do Drácula?', next: 'sicriu' },
        ],
      },
      sicriu: {
        emoji: '⚰️',
        text: 'Ghidul râde: «Nu există niciun sicriu! Dracula este un personaj din romanul lui Bram Stoker, un scriitor irlandez care nu a fost niciodată în România.»',
        translation:
          'O guia ri: «Não existe caixão nenhum! Drácula é um personagem do romance de Bram Stoker, um escritor irlandês que nunca esteve na Romênia.»',
        choices: [{ text: 'Și atunci, care este povestea adevărată?', translation: 'E então, qual é a história verdadeira?', next: 'istorie' }],
      },
      istorie: {
        emoji: '⚔️',
        text: '«Vlad Țepeș a fost domnitor al Țării Românești în secolul al XV-lea. A luptat împotriva Imperiului Otoman. Legătura lui cu acest castel este foarte slabă.»',
        translation: '«Vlad Țepeș foi príncipe da Valáquia no século XV. Lutou contra o Império Otomano. A ligação dele com este castelo é muito fraca.»',
        choices: [
          {
            text: 'Deci Vlad Țepeș era un vampir?',
            translation: 'Então Vlad Țepeș era um vampiro?',
            wrong: 'Não! O guia disse que Vlad foi um governante real que lutou contra os otomanos. O vampiro é invenção do romance.',
          },
          { text: 'Deci Dracula este o legendă inspirată de Vlad.', translation: 'Então Drácula é uma lenda inspirada em Vlad.', next: 'regina' },
        ],
      },
      regina: {
        emoji: '👑',
        text: '«Exact! Mai târziu, castelul a fost reședința reginei Maria, care l-a iubit foarte mult.» Deodată, se aude un zgomot ciudat din turn…',
        translation:
          '«Exato! Mais tarde, o castelo foi residência da rainha Maria, que o amava muito.» De repente, ouve-se um barulho estranho vindo da torre…',
        choices: [
          { text: 'Urcă în turn să vadă ce este.', translation: 'Sobe na torre para ver o que é.', next: 'turn' },
          { text: 'Rămâne cu grupul.', translation: 'Fica com o grupo.', next: 'grup' },
          {
            text: 'Iese din castel să mănânce.',
            translation: 'Sai do castelo para comer.',
            wrong: 'O barulho veio da torre («turn»). Nada de fugir para comer agora, Linu!',
          },
        ],
      },
      turn: {
        emoji: '🐈‍⬛',
        text: 'În turn, Linu găsește… o pisică neagră care se joacă cu o cheie veche! Ghidul vine după el: «Aha, ai găsit cheia pierdută a muzeului!»',
        translation:
          'Na torre, Linu encontra… uma gata preta brincando com uma chave antiga! O guia vem atrás dele: «Ahá, você achou a chave perdida do museu!»',
        ending: { tone: 'bom', title: 'Herói do castelo!', message: 'O Linu desvendou o mistério da torre e aprendeu a história real do Drácula. 🗝️' },
      },
      grup: {
        emoji: '🔍',
        text: 'Grupul continuă turul. La final, ghidul spune: «Cineva a pierdut azi o cheie veche… Dacă o găsiți, spuneți-mi!»',
        translation: 'O grupo continua o passeio. No final, o guia diz: «Alguém perdeu hoje uma chave antiga… Se a encontrarem, me avisem!»',
        ending: {
          tone: 'neutro',
          title: 'Mistério sem solução',
          message: 'O Linu aprendeu a história verdadeira, mas o barulho na torre continua um mistério…',
        },
      },
    },
  },
  {
    id: 'ro-h5',
    level: 'A2.2',
    cefr: 'A2',
    title: 'La piață',
    emoji: '🍒',
    summary: 'Sábado de feira em Cluj: tomates na balança, uma pechincha e cerejas doces.',
    cultural_context:
      'Nas feiras romenas (piețe), muitos vendedores são pequenos produtores do interior que trazem frutas e verduras da própria horta. Os preços costumam ser por quilo, em lei e bani (100 bani = 1 leu).',
    start: 'start',
    glossary: [
      ['piață', 'feira, mercado'],
      ['tarabă', 'barraca de feira'],
      ['vânzătoare', 'vendedora'],
      ['cântar', 'balança'],
      ['rest', 'troco'],
      ['a gusta', 'provar'],
      ['cireșe', 'cerejas'],
      ['jumătate', 'metade'],
    ],
    nodes: {
      start: {
        emoji: '🧺',
        text: 'Este sâmbătă dimineață în Cluj. Linu merge la piață cu o sacoșă mare. Tarabele sunt pline de fructe și legume de vară.',
        translation: 'É sábado de manhã em Cluj. Linu vai à feira com uma sacola grande. As barracas estão cheias de frutas e verduras de verão.',
        choices: [
          { text: 'Merge la taraba cu roșii.', translation: 'Vai à barraca de tomates.', next: 'rosii' },
          { text: 'Merge la taraba cu fructe.', translation: 'Vai à barraca de frutas.', next: 'cirese' },
        ],
      },
      rosii: {
        emoji: '🍅',
        text: 'O vânzătoare în vârstă strigă: «Roșii de grădină! Opt lei kilogramul!» Roșiile sunt mari și miros a vară.',
        translation: 'Uma vendedora idosa grita: «Tomates da horta! Oito lei o quilo!» Os tomates são grandes e têm cheiro de verão.',
        choices: [
          { text: 'Un kilogram, vă rog.', translation: 'Um quilo, por favor.', next: 'cantar' },
          {
            text: 'Cât costă roșiile?',
            translation: 'Quanto custam os tomates?',
            wrong: 'A vendedora acabou de gritar o preço: «Opt lei kilogramul» = oito lei o quilo.',
          },
        ],
      },
      cantar: {
        emoji: '⚖️',
        text: 'Vânzătoarea pune roșiile pe cântar: «Un kilogram și două sute de grame. Face nouă lei și șaizeci de bani.»',
        translation: 'A vendedora põe os tomates na balança: «Um quilo e duzentos gramas. Dá nove lei e sessenta bani.»',
        choices: [
          { text: 'Poftiți zece lei.', translation: 'Aqui estão dez lei.', next: 'plata' },
          { text: 'Îmi lăsați la nouă lei?', translation: 'Faz por nove lei?', next: 'targ' },
        ],
      },
      targ: {
        emoji: '🌿',
        text: 'Vânzătoarea zâmbește: «Bine, nouă lei, că ești simpatic!» Îi pune în sacoșă și un mănunchi de pătrunjel, gratis.',
        translation: 'A vendedora sorri: «Tá bom, nove lei, porque você é simpático!» Ela ainda põe na sacola dele um maço de salsinha, de graça.',
        choices: [{ text: 'Mulțumesc frumos!', translation: 'Muito obrigado!', next: 'cirese' }],
      },
      plata: {
        emoji: '🪙',
        text: 'Linu dă zece lei. Vânzătoarea îi dă restul, patruzeci de bani: «Mulțumesc! Să vă fie de bine!»',
        translation: 'Linu dá dez lei. A vendedora lhe dá o troco, quarenta bani: «Obrigada! Bom proveito!»',
        choices: [{ text: 'Mulțumesc, la revedere!', translation: 'Obrigado, até logo!', next: 'cirese' }],
      },
      cirese: {
        emoji: '🍒',
        text: 'La o tarabă de alături, un domn vinde cireșe și căpșuni. «Cireșe dulci, din grădina mea! Gustați una!»',
        translation: 'Numa barraca ao lado, um senhor vende cerejas e morangos. «Cerejas doces, do meu quintal! Prove uma!»',
        choices: [
          { text: 'Gustă o cireașă.', translation: 'Prova uma cereja.', next: 'gust' },
          { text: 'Nu, mulțumesc, mă grăbesc.', translation: 'Não, obrigado, estou com pressa.', next: 'final_graba' },
          {
            text: 'Cumpără un kilogram de banane.',
            translation: 'Compra um quilo de bananas.',
            wrong: 'O senhor vende cerejas (cireșe) e morangos (căpșuni), não bananas.',
          },
        ],
      },
      gust: {
        emoji: '😋',
        text: 'Cireașa este dulce și proaspătă. Domnul spune: «Un kilogram costă douăzeci de lei, jumătate de kilogram costă zece lei.» Linu mai are doar zece lei în buzunar.',
        translation: 'A cereja é doce e fresca. O senhor diz: «Um quilo custa vinte lei, meio quilo custa dez lei.» Linu só tem mais dez lei no bolso.',
        choices: [
          { text: 'Jumătate de kilogram, vă rog.', translation: 'Meio quilo, por favor.', next: 'final_bun' },
          {
            text: 'Un kilogram, vă rog.',
            translation: 'Um quilo, por favor.',
            wrong: 'Um quilo custa vinte lei, e o Linu só tem dez. Com dez lei dá para meio quilo (jumătate de kilogram).',
          },
        ],
      },
      final_bun: {
        emoji: '🥰',
        text: 'Linu pleacă din piață fericit, cu o pungă de cireșe. Pe drum spre casă mănâncă jumătate din ele!',
        translation: 'Linu sai da feira feliz, com um saquinho de cerejas. No caminho para casa, come metade delas!',
        ending: {
          tone: 'bom',
          title: 'Freguês de feira!',
          message: 'O Linu entendeu os preços, conferiu a balança e ainda levou as cerejas mais doces de Cluj.',
        },
      },
      final_graba: {
        emoji: '🏃',
        text: 'Linu pleacă repede. Acasă își amintește de cireșele dulci, dar piața s-a închis deja.',
        translation: 'Linu sai correndo. Em casa, ele se lembra das cerejas doces, mas a feira já fechou.',
        ending: { tone: 'neutro', title: 'Pressa demais', message: 'Na feira romena, provar é de graça e faz parte da conversa. Tente de novo!' },
      },
    },
  },
  {
    id: 'ro-h6',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Mărțișor',
    emoji: '🎀',
    summary: '1º de março: um fio vermelho e branco, presentes para as amigas e uma árvore florida.',
    cultural_context:
      'No dia 1º de março, os romenos dão o mărțișor, um enfeite pequeno preso num cordão vermelho e branco, sobretudo às mulheres, para celebrar a chegada da primavera. Muita gente o usa durante março e depois o pendura numa árvore florida, para dar sorte.',
    start: 'start',
    glossary: [
      ['mărțișor', 'enfeite do 1º de março'],
      ['șnur', 'cordão'],
      ['a dărui', 'presentear'],
      ['ghiocel', 'campânula-branca (flor da primavera)'],
      ['trifoi cu patru foi', 'trevo de quatro folhas'],
      ['pom înflorit', 'árvore florida'],
      ['noroc', 'sorte'],
    ],
    nodes: {
      start: {
        emoji: '🧵',
        text: 'Este 1 martie. Linu se plimbă prin București și vede peste tot tarabe mici. Pe ele sunt obiecte mici, legate cu un șnur roșu și alb.',
        translation:
          'É 1º de março. Linu passeia por Bucareste e vê barraquinhas por toda parte. Nelas há objetos pequenos, amarrados com um cordão vermelho e branco.',
        choices: [
          { text: 'Întreabă o vânzătoare ce sunt.', translation: 'Pergunta a uma vendedora o que são.', next: 'ce' },
          { text: 'Trece mai departe, fără să întrebe.', translation: 'Segue em frente, sem perguntar.', next: 'final_ignora' },
        ],
      },
      final_ignora: {
        emoji: '🤔',
        text: 'Seara, la hotel, toate femeile poartă un șnur roșu și alb. Linu nu înțelege de ce.',
        translation: 'À noite, no hotel, todas as mulheres usam um cordão vermelho e branco. Linu não entende por quê.',
        ending: { tone: 'neutro', title: 'Mistério vermelho e branco', message: 'O Linu passou pela festa da primavera sem perceber. Volte e pergunte!' },
      },
      ce: {
        emoji: '🌷',
        text: 'Vânzătoarea explică: «Sunt mărțișoare! Pe 1 martie sărbătorim venirea primăverii. Le dăruim mamelor, prietenelor și colegelor.»',
        translation:
          'A vendedora explica: «São mărțișoare! Em 1º de março celebramos a chegada da primavera. Damos de presente às mães, às amigas e às colegas.»',
        choices: [
          { text: 'Cumpără trei mărțișoare.', translation: 'Compra três mărțișoare.', next: 'cumpara' },
          {
            text: 'Deci așa sărbătoriți iarna?',
            translation: 'Então é assim que vocês celebram o inverno?',
            wrong: 'A vendedora disse «venirea primăverii»: é a chegada da PRIMAVERA (primăvară), não o inverno.',
          },
        ],
      },
      cumpara: {
        emoji: '🎁',
        text: 'Linu alege trei mărțișoare: un ghiocel, un trifoi cu patru foi și o inimă mică. Cui le dă?',
        translation: 'Linu escolhe três mărțișoare: uma campânula-branca, um trevo de quatro folhas e um coraçãozinho. Para quem ele dá?',
        choices: [
          { text: 'Profesoarei lui de română.', translation: 'Para a professora de romeno dele.', next: 'profesoara' },
          { text: 'Le păstrează pe toate pentru el.', translation: 'Guarda todos para ele.', next: 'singur' },
        ],
      },
      singur: {
        emoji: '😅',
        text: 'Linu își prinde toate cele trei mărțișoare în piept. O fată râde: «Trei mărțișoare pe un pinguin? Mărțișorul este un cadou, se dăruiește!»',
        translation: 'Linu prende os três mărțișoare no peito. Uma moça ri: «Três mărțișoare num pinguim? O mărțișor é um presente, é para dar!»',
        choices: [{ text: 'Are dreptate! Le dăruiește.', translation: 'Ela tem razão! Ele vai dá-los de presente.', next: 'profesoara' }],
      },
      profesoara: {
        emoji: '👩‍🏫',
        text: 'Doamna profesoară primește ghiocelul și zâmbește: «Ce drăguț! Mulțumesc, Linu!» Și-l prinde imediat de palton.',
        translation: 'A professora recebe a campânula-branca e sorri: «Que fofo! Obrigada, Linu!» Ela o prende logo no casaco.',
        choices: [{ text: 'Cât timp îl purtați?', translation: 'Por quanto tempo a senhora o usa?', next: 'cat_timp' }],
      },
      cat_timp: {
        emoji: '📅',
        text: 'Profesoara explică: «De obicei îl port toată luna martie. La sfârșitul lunii îl agăț într-un pom înflorit, pentru noroc.»',
        translation: 'A professora explica: «Normalmente eu o uso o mês de março inteiro. No fim do mês, penduro numa árvore florida, para dar sorte.»',
        choices: [
          { text: 'Dă celelalte două mărțișoare colegelor lui.', translation: 'Dá os outros dois mărțișoare às colegas dele.', next: 'colege' },
          {
            text: 'Deci mâine îl aruncați la gunoi?',
            translation: 'Então amanhã a senhora joga no lixo?',
            wrong: 'Não! Ela usa o mărțișor o mês de março inteiro e depois o pendura numa árvore florida, para dar sorte.',
          },
        ],
      },
      colege: {
        emoji: '💝',
        text: 'Linu îi dă Anei trifoiul și Ioanei inima. Fetele sunt foarte bucuroase: «Mulțumim, Linu! Ești primul pinguin cu mărțișoare!»',
        translation: 'Linu dá o trevo à Ana e o coração à Ioana. As meninas ficam muito felizes: «Obrigada, Linu! Você é o primeiro pinguim com mărțișoare!»',
        choices: [{ text: 'Așteaptă până la sfârșitul lui martie.', translation: 'Espera até o fim de março.', next: 'pom' }],
      },
      pom: {
        emoji: '🌸',
        text: 'La sfârșitul lui martie, Linu merge în parc cu profesoara și cu fetele. Ele agață mărțișoarele într-un cireș înflorit. Pomul pare plin de mici cadouri roșii și albe!',
        translation:
          'No fim de março, Linu vai ao parque com a professora e as meninas. Elas penduram os mărțișoare numa cerejeira florida. A árvore parece cheia de presentinhos vermelhos e brancos!',
        ending: {
          tone: 'bom',
          title: 'Primavera romena!',
          message: 'O Linu aprendeu a dar o mărțișor, a usá-lo em março e a pendurá-lo numa árvore florida para dar sorte.',
        },
      },
    },
  },
  {
    id: 'ro-h7',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Crăciun în Maramureș',
    emoji: '🎄',
    summary: 'Véspera de Natal numa aldeia: cozonac, igreja de madeira e colindători na porta.',
    cultural_context:
      'As igrejas de madeira do Maramureș, com torres altas e finas, estão na lista do Patrimônio Mundial da UNESCO desde 1999. Na véspera de Natal, grupos de colindători vão de casa em casa cantando colinde e são recebidos com cozonac, maçãs e nozes.',
    start: 'start',
    glossary: [
      ['Ajunul Crăciunului', 'véspera de Natal'],
      ['gazdă', 'anfitriã, dona da casa'],
      ['cozonac', 'pão doce de Natal e Páscoa'],
      ['aluat', 'massa'],
      ['colindători', 'cantores de colinde'],
      ['colindă', 'canção tradicional de Natal'],
      ['uliță', 'ruazinha de aldeia'],
      ['biserică de lemn', 'igreja de madeira'],
    ],
    nodes: {
      start: {
        emoji: '❄️',
        text: 'Linu petrece Crăciunul într-un sat din Maramureș, la familia Pop. Este Ajunul Crăciunului și afară ninge liniștit. Gazda, tanti Maria, scoate din cuptor doi cozonaci aurii.',
        translation:
          'Linu passa o Natal numa aldeia do Maramureș, com a família Pop. É véspera de Natal e lá fora neva tranquilamente. A dona da casa, a tia Maria, tira do forno dois cozonaci dourados.',
        choices: [
          { text: 'Se oferă să o ajute în bucătărie.', translation: 'Oferece-se para ajudá-la na cozinha.', next: 'bucatarie' },
          { text: 'Iese să se plimbe prin sat.', translation: 'Sai para passear pela aldeia.', next: 'sat' },
        ],
      },
      bucatarie: {
        emoji: '🍞',
        text: 'Tanti Maria îi explică: «Cozonacul cere răbdare: aluatul trebuie să crească la căldură. Diseară vin colindătorii și trebuie să-i primim cu ceva bun.»',
        translation:
          'A tia Maria explica: «O cozonac pede paciência: a massa tem que crescer no calor. Hoje à noite vêm os colindători e temos que recebê-los com algo gostoso.»',
        choices: [
          { text: 'Atunci pregătim mere, nuci și cozonac pentru ei.', translation: 'Então preparamos maçãs, nozes e cozonac para eles.', next: 'seara' },
          {
            text: 'Deci colindătorii vin să cumpere cozonac?',
            translation: 'Então os colindători vêm comprar cozonac?',
            wrong: 'Não! Os colindători vêm cantar, e a família os RECEBE com algo gostoso («să-i primim cu ceva bun»). Ninguém compra nada.',
          },
        ],
      },
      sat: {
        emoji: '⛪',
        text: 'Pe uliță, Linu vede o biserică de lemn cu un turn foarte înalt și subțire. Un bătrân îi spune cu mândrie: «Biserica noastră este foarte veche. Bisericile de lemn din Maramureș sunt în patrimoniul UNESCO!»',
        translation:
          'Na ruazinha, Linu vê uma igreja de madeira com uma torre muito alta e fina. Um velhinho lhe diz com orgulho: «Nossa igreja é muito antiga. As igrejas de madeira do Maramureș são patrimônio da UNESCO!»',
        choices: [
          { text: 'Intră să vadă biserica pe dinăuntru.', translation: 'Entra para ver a igreja por dentro.', next: 'biserica' },
          {
            text: 'Deci biserica este construită din piatră?',
            translation: 'Então a igreja é construída de pedra?',
            wrong: 'O texto diz «biserică de lemn»: lemn = madeira. É justamente por serem de madeira que essas igrejas são famosas.',
          },
        ],
      },
      biserica: {
        emoji: '🕯️',
        text: 'Înăuntru e puțin întuneric și miroase a lemn vechi și a tămâie. Pereții sunt acoperiți cu picturi: sfinți, îngeri și scene din Biblie. Bătrânul zâmbește: «Acum du-te acasă, că diseară vin colindătorii!»',
        translation:
          'Lá dentro está meio escuro e cheira a madeira velha e incenso. As paredes são cobertas de pinturas: santos, anjos e cenas da Bíblia. O velhinho sorri: «Agora vá para casa, que hoje à noite vêm os colindători!»',
        choices: [{ text: 'Se întoarce la familia Pop.', translation: 'Volta para a casa da família Pop.', next: 'seara' }],
      },
      seara: {
        emoji: '🚪',
        text: 'Seara, cineva bate la poartă. Afară stă un grup de flăcăi îmbrăcați în costume populare, cu căciuli de blană. Unul dintre ei întreabă: «Primiți cu colinda?»',
        translation:
          'À noite, alguém bate no portão. Lá fora está um grupo de rapazes vestidos com trajes típicos, com gorros de pele. Um deles pergunta: «Recebem a colindă?»',
        choices: [
          { text: 'Primim! Intrați, vă rog!', translation: 'Recebemos! Entrem, por favor!', next: 'colind' },
          { text: 'Nu, mulțumim, suntem obosiți.', translation: 'Não, obrigado, estamos cansados.', next: 'final_refuz' },
        ],
      },
      final_refuz: {
        emoji: '🌙',
        text: 'Colindătorii pleacă la vecini. Din casa de alături se aude cântecul lor, iar tanti Maria oftează: «Anul acesta nu ne-a colindat nimeni…»',
        translation:
          'Os colindători vão para a casa dos vizinhos. Da casa ao lado se ouve a canção deles, e a tia Maria suspira: «Este ano ninguém cantou colinde para nós…»',
        ending: {
          tone: 'neutro',
          title: 'Um Natal silencioso',
          message: 'Recusar os colindători é perder a parte mais bonita da véspera de Natal. Tente de novo!',
        },
      },
      colind: {
        emoji: '🎶',
        text: 'Flăcăii cântă o colindă veche despre nașterea lui Iisus. Vocile lor umplu toată casa, iar tanti Maria are lacrimi în ochi. La final, gazda le dă cozonac, mere și nuci.',
        translation:
          'Os rapazes cantam uma colindă antiga sobre o nascimento de Jesus. As vozes deles enchem a casa toda, e a tia Maria está com lágrimas nos olhos. No final, a dona da casa lhes dá cozonac, maçãs e nozes.',
        choices: [
          { text: 'Pot să cânt și eu cu voi?', translation: 'Posso cantar com vocês também?', next: 'cantec' },
          {
            text: 'Le cere colindătorilor bani pentru cozonac.',
            translation: 'Pede dinheiro aos colindători pelo cozonac.',
            wrong: 'Ao contrário! É a família que presenteia os cantores com cozonac, maçãs e nozes, como agradecimento pela colindă.',
          },
        ],
      },
      cantec: {
        emoji: '🐧',
        text: 'Linu nu știe versurile, dar flăcăii îl învață refrenul: «Florile dalbe, flori de măr». Pinguinul cântă puțin fals, dar toată lumea râde și cântă cu el.',
        translation:
          'Linu não sabe a letra, mas os rapazes lhe ensinam o refrão: «Florile dalbe, flori de măr» (flores alvas, flores de macieira). O pinguim canta um pouco desafinado, mas todo mundo ri e canta com ele.',
        choices: [{ text: 'Se așază la masă cu toată familia.', translation: 'Senta-se à mesa com a família toda.', next: 'final_bun' }],
      },
      final_bun: {
        emoji: '🎄',
        text: 'Târziu în noapte, Linu stă la masă cu familia Pop. Din alte case se aud colinde. «Crăciun fericit!», spune el, cu gura plină de cozonac.',
        translation:
          'Tarde da noite, Linu está à mesa com a família Pop. De outras casas se ouvem colinde. «Feliz Natal!», diz ele, com a boca cheia de cozonac.',
        ending: { tone: 'bom', title: 'Crăciun fericit!', message: 'O Linu recebeu os colindători, provou o cozonac e até cantou uma colindă no Maramureș.' },
      },
    },
  },
  {
    id: 'ro-h8',
    level: 'B1.1',
    cefr: 'B1',
    title: 'La doctor',
    emoji: '🩺',
    summary: 'Garganta doendo e febre em plena viagem: farmácia, consulta e receita.',
    cultural_context:
      'Na Romênia, o número de emergência é o 112. Remédios simples, como paracetamol, são vendidos na farmácia sem receita, mas antibióticos só com uma rețetă do médico.',
    start: 'start',
    glossary: [
      ['mă doare gâtul', 'estou com dor de garganta'],
      ['febră', 'febre'],
      ['farmacist / farmacistă', 'farmacêutico / farmacêutica'],
      ['cabinet medical', 'consultório'],
      ['sală de așteptare', 'sala de espera'],
      ['amigdalită', 'amigdalite'],
      ['rețetă', 'receita médica'],
      ['pastilă', 'comprimido'],
    ],
    nodes: {
      start: {
        emoji: '🤒',
        text: 'Linu este în vacanță la Sibiu. De două zile îl doare gâtul, iar azi-dimineață s-a trezit și cu febră. Nu are niciun medicament în bagaj.',
        translation:
          'Linu está de férias em Sibiu. Faz dois dias que a garganta dele dói, e hoje de manhã ele acordou também com febre. Não tem nenhum remédio na bagagem.',
        choices: [
          { text: 'Merge la farmacie.', translation: 'Vai à farmácia.', next: 'farmacie' },
          { text: 'Iese să viziteze orașul, ca în fiecare zi.', translation: 'Sai para visitar a cidade, como todo dia.', next: 'oras' },
        ],
      },
      oras: {
        emoji: '🥴',
        text: 'Linu urcă pe jos până în Piața Mare, dar după o oră amețește și trebuie să se așeze pe o bancă. Un polițist se apropie: «Vă simțiți bine, domnule?»',
        translation:
          'Linu sobe a pé até a Praça Grande, mas depois de uma hora fica tonto e precisa se sentar num banco. Um policial se aproxima: «O senhor está se sentindo bem?»',
        choices: [{ text: 'Nu prea… Unde este o farmacie?', translation: 'Não muito… Onde tem uma farmácia?', next: 'farmacie' }],
      },
      farmacie: {
        emoji: '💊',
        text: 'Farmacista îi ia temperatura: 38,5 grade. «Pentru febră vă pot da paracetamol. Dar de când vă doare gâtul?»',
        translation: 'A farmacêutica mede a temperatura dele: 38,5 graus. «Para a febre posso lhe dar paracetamol. Mas desde quando a sua garganta dói?»',
        choices: [
          { text: 'Mă doare de două zile.', translation: 'Dói faz dois dias.', next: 'cabinet' },
          {
            text: 'Mă doare doar de azi-dimineață.',
            translation: 'Dói só desde hoje de manhã.',
            wrong: 'Releia o começo: a garganta dói há dois dias («de două zile»). Só a febre começou hoje de manhã.',
          },
          { text: 'Vreau doar ceva pentru febră.', translation: 'Quero só alguma coisa para a febre.', next: 'paracetamol' },
        ],
      },
      paracetamol: {
        emoji: '🛌',
        text: 'Linu ia paracetamol și se culcă. A doua zi febra a trecut, dar gâtul îl doare și mai tare.',
        translation: 'Linu toma paracetamol e vai se deitar. No dia seguinte a febre passou, mas a garganta dói ainda mais.',
        choices: [
          { text: 'Merge totuși la medic.', translation: 'Mesmo assim vai ao médico.', next: 'cabinet' },
          { text: 'Mai așteaptă o zi.', translation: 'Espera mais um dia.', next: 'final_pat' },
        ],
      },
      final_pat: {
        emoji: '🍵',
        text: 'Linu mai stă în pat două zile, cu ceai și miere. Vacanța se termină, iar el n-a văzut aproape nimic din Sibiu.',
        translation: 'Linu fica mais dois dias de cama, com chá e mel. As férias acabam, e ele não viu quase nada de Sibiu.',
        ending: { tone: 'neutro', title: 'Férias no quarto', message: 'Dor de garganta que não passa pede médico. Tente de novo!' },
      },
      cabinet: {
        emoji: '🏥',
        text: 'Farmacista îi recomandă un cabinet medical din apropiere. La recepție, asistenta îi cere un act de identitate și îi spune: «Luați loc, doamna doctor vă cheamă în zece minute.»',
        translation:
          'A farmacêutica lhe recomenda um consultório ali perto. Na recepção, a enfermeira pede um documento de identidade e diz: «Sente-se, a doutora vai chamá-lo em dez minutos.»',
        choices: [
          { text: 'Îi dă pașaportul și așteaptă în sala de așteptare.', translation: 'Entrega o passaporte e espera na sala de espera.', next: 'consult' },
        ],
      },
      consult: {
        emoji: '🩺',
        text: 'Doamna doctor se uită în gâtul lui: «Aveți o amigdalită. Vă dau o rețetă pentru un antibiotic: o pastilă de două ori pe zi, timp de șapte zile.»',
        translation:
          'A doutora examina a garganta dele: «O senhor está com amigdalite. Vou lhe dar uma receita de antibiótico: um comprimido duas vezes por dia, durante sete dias.»',
        choices: [
          { text: 'Am înțeles: de două ori pe zi, șapte zile.', translation: 'Entendi: duas vezes por dia, sete dias.', next: 'reteta' },
          {
            text: 'Deci iau o singură pastilă și gata?',
            translation: 'Então tomo um comprimido só e pronto?',
            wrong: 'Não: a médica disse um comprimido DUAS vezes por dia («de două ori pe zi»), durante SETE dias («timp de șapte zile»).',
          },
        ],
      },
      reteta: {
        emoji: '📝',
        text: 'Linu se întoarce la farmacie cu rețeta. Farmacista zâmbește: «Acum e în regulă. Fără rețetă nu v-aș fi putut da antibioticul.» Îi explică să ia pastilele după masă.',
        translation:
          'Linu volta à farmácia com a receita. A farmacêutica sorri: «Agora está tudo certo. Sem receita eu não poderia lhe dar o antibiótico.» Ela explica que ele deve tomar os comprimidos depois das refeições.',
        choices: [{ text: 'Urmează tratamentul până la capăt.', translation: 'Segue o tratamento até o fim.', next: 'final_bun' }],
      },
      final_bun: {
        emoji: '🗼',
        text: 'După o săptămână, Linu este din nou în formă și urcă în Turnul Sfatului. De sus, Sibiul pare și mai frumos când ești sănătos.',
        translation:
          'Depois de uma semana, Linu está em forma de novo e sobe na Torre do Conselho. Lá de cima, Sibiu parece ainda mais bonita quando se está com saúde.',
        ending: { tone: 'bom', title: 'Curado e passeando!', message: 'O Linu explicou os sintomas, entendeu a receita e fez o tratamento certinho.' },
      },
    },
  },
  {
    id: 'ro-h9',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Prima zi la Iași',
    emoji: '🏫',
    summary: 'O Linu tem o primeiro dia de aula de romeno em Iași e precisa se apresentar.',
    cultural_context: 'Iași abriga a universidade mais antiga da Romênia, fundada em 1860 e hoje chamada Universidade Alexandru Ioan Cuza.',
    start: 'start',
    glossary: [
      ['școală', 'escola'],
      ['clasă', 'sala de aula'],
      ['profesoară', 'professora'],
      ['Cum te numești?', 'Como você se chama?'],
      ['Câți ani ai?', 'Quantos anos você tem?'],
      ['șapte', 'sete'],
      ['frig', 'frio'],
    ],
    nodes: {
      start: {
        emoji: '🏫',
        text: 'Bună ziua! Eu sunt Linu. Azi sunt la o școală în Iași.',
        translation: 'Bom dia! Eu sou o Linu. Hoje estou em uma escola em Iași.',
        choices: [
          { text: 'Intră în clasă.', translation: 'Entra na sala de aula.', next: 'clasa' },
          { text: 'Stă afară.', translation: 'Fica do lado de fora.', next: 'afara' },
        ],
      },
      afara: {
        emoji: '🥶',
        text: 'Afară este frig. Linu nu are carte și nu are caiet.',
        translation: 'Lá fora está frio. O Linu não tem livro e não tem caderno.',
        choices: [
          { text: 'Intră în clasă.', translation: 'Entra na sala de aula.', next: 'clasa' },
          { text: 'Pleacă acasă.', translation: 'Vai para casa.', next: 'final_acasa' },
        ],
      },
      final_acasa: {
        emoji: '🏠',
        text: 'Linu este acasă. Este singur.',
        translation: 'O Linu está em casa. Está sozinho.',
        ending: { tone: 'neutro', title: 'Aula perdida', message: 'O Linu fugiu do frio, mas perdeu a primeira aula. Tente outro caminho!' },
      },
      clasa: {
        emoji: '👩‍🏫',
        text: 'Profesoara spune: «Bună! Eu sunt doamna Popa. Cum te numești?»',
        translation: 'A professora diz: «Oi! Eu sou a senhora Popa. Como você se chama?»',
        choices: [
          { text: 'Mă numesc Linu.', translation: 'Eu me chamo Linu.', next: 'varsta' },
          {
            text: 'Am zece ani.',
            translation: 'Tenho dez anos.',
            wrong: 'A professora perguntou o seu NOME («Cum te numești?» = Como você se chama?), não a idade.',
          },
        ],
      },
      varsta: {
        emoji: '🎂',
        text: '«Câți ani ai, Linu?» Linu are șapte ani.',
        translation: '«Quantos anos você tem, Linu?» O Linu tem sete anos.',
        choices: [
          { text: 'Am șapte ani.', translation: 'Tenho sete anos.', next: 'colegi' },
          { text: 'Am trei ani.', translation: 'Tenho três anos.', wrong: 'Releia: «Linu are șapte ani.» Șapte = sete.' },
        ],
      },
      colegi: {
        emoji: '👧',
        text: 'Lângă Linu este o fată. «Eu sunt Ioana. Ești din Brazilia?»',
        translation: 'Ao lado do Linu está uma menina. «Eu sou a Ioana. Você é do Brasil?»',
        choices: [
          { text: 'Nu, sunt din Antarctica!', translation: 'Não, sou da Antártida!', next: 'final_bom' },
          { text: 'Da, sunt din Brazilia.', translation: 'Sim, sou do Brasil.', next: 'final_brazilia' },
        ],
      },
      final_bom: {
        emoji: '🐧',
        text: 'Ioana râde: «Un pinguin! Ești prietenul meu.»',
        translation: 'A Ioana ri: «Um pinguim! Você é meu amigo.»',
        ending: { tone: 'bom', title: 'Uma colega nova!', message: 'O Linu se apresentou em romeno e fez a primeira amiga da turma.' },
      },
      final_brazilia: {
        emoji: '🏖️',
        text: 'Ioana este surprinsă: «Un pinguin din Brazilia? Ai o plajă?»',
        translation: 'A Ioana fica surpresa: «Um pinguim do Brasil? Você tem uma praia?»',
        ending: { tone: 'neutro', title: 'Pinguim tropical?', message: 'A Ioana ficou confusa. O Linu vem da Antártida, lembra? Tente de novo!' },
      },
    },
  },
  {
    id: 'ro-h10',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Hotel la Constanța',
    emoji: '🏨',
    summary: 'O Linu chega a um hotel em Constanța, à beira do Mar Negro.',
    cultural_context:
      'Constanța é o maior porto da Romênia no Mar Negro. Na Antiguidade, era a colônia grega de Tomis, onde o poeta romano Ovídio viveu exilado.',
    start: 'start',
    glossary: [
      ['valiză', 'mala'],
      ['mare', 'mar'],
      ['rezervare', 'reserva'],
      ['cameră', 'quarto'],
      ['nouă', 'nove'],
      ['balcon', 'sacada'],
      ['obosit', 'cansado'],
    ],
    nodes: {
      start: {
        emoji: '🧳',
        text: 'Linu este la Constanța. Are o valiză mare.',
        translation: 'O Linu está em Constanța. Ele tem uma mala grande.',
        choices: [
          { text: 'Merge la hotel.', translation: 'Vai ao hotel.', next: 'receptie' },
          { text: 'Merge la mare.', translation: 'Vai ao mar.', next: 'mare' },
        ],
      },
      mare: {
        emoji: '🌊',
        text: 'Marea este frumoasă. Dar valiza este grea!',
        translation: 'O mar é bonito. Mas a mala é pesada!',
        choices: [{ text: 'Merge la hotel.', translation: 'Vai ao hotel.', next: 'receptie' }],
      },
      receptie: {
        emoji: '🛎️',
        text: 'Recepționera spune: «Bună seara! Aveți o rezervare?»',
        translation: 'A recepcionista diz: «Boa noite! O senhor tem uma reserva?»',
        choices: [
          { text: 'Da, am o rezervare. Sunt Linu.', translation: 'Sim, tenho uma reserva. Sou o Linu.', next: 'camera' },
          { text: 'Nu, nu am.', translation: 'Não, não tenho.', next: 'fara' },
        ],
      },
      fara: {
        emoji: '🔑',
        text: '«Nu? Avem o cameră liberă. Este mică, dar are balcon.»',
        translation: '«Não? Temos um quarto livre. É pequeno, mas tem sacada.»',
        choices: [{ text: 'Bine, mulțumesc!', translation: 'Está bem, obrigado!', next: 'camera' }],
      },
      camera: {
        emoji: '🚪',
        text: '«Aveți camera numărul nouă.» Linu are cheia. Ce număr are camera?',
        translation: '«O senhor tem o quarto número nove.» O Linu tem a chave. Qual é o número do quarto?',
        choices: [
          { text: 'Camera numărul nouă.', translation: 'O quarto número nove.', next: 'balcon' },
          { text: 'Camera numărul doi.', translation: 'O quarto número dois.', wrong: 'A recepcionista disse «numărul nouă». Nouă = nove.' },
        ],
      },
      balcon: {
        emoji: '🌅',
        text: 'Camera este mică, dar are balcon. Marea este aproape!',
        translation: 'O quarto é pequeno, mas tem sacada. O mar está perto!',
        choices: [
          { text: 'Stă pe balcon.', translation: 'Fica na sacada.', next: 'final_bom' },
          { text: 'Doarme.', translation: 'Dorme.', next: 'final_somn' },
        ],
      },
      final_bom: {
        emoji: '🌙',
        text: 'Este seară. Marea este liniștită. Linu este fericit.',
        translation: 'É noite. O mar está calmo. O Linu está feliz.',
        ending: { tone: 'bom', title: 'Noite no Mar Negro', message: 'O Linu fez o check-in em romeno e ganhou uma vista linda do mar.' },
      },
      final_somn: {
        emoji: '😴',
        text: 'Linu este obosit. Doarme zece ore!',
        translation: 'O Linu está cansado. Dorme dez horas!',
        ending: { tone: 'neutro', title: 'Soninho', message: 'O Linu descansou bem, mas nem viu o mar. Amanhã tem mais!' },
      },
    },
  },
  {
    id: 'ro-h11',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ouăle din Bucovina',
    emoji: '🥚',
    summary: 'Numa aldeia da Bucovina, o Linu aprende a pintar ovos de Páscoa.',
    cultural_context:
      'Na Bucovina, os ovos de Páscoa são decorados com cera de abelha quente, e o vermelho é a cor tradicional. O mosteiro de Voroneț é famoso pelo seu azul, o «albastru de Voroneț».',
    start: 'start',
    glossary: [
      ['ou / ouă', 'ovo / ovos'],
      ['a picta', 'pintar'],
      ['Paște', 'Páscoa'],
      ['roșu', 'vermelho'],
      ['galben', 'amarelo'],
      ['albastru', 'azul'],
      ['ceară', 'cera'],
      ['mănăstire', 'mosteiro'],
    ],
    nodes: {
      start: {
        emoji: '🏡',
        text: 'Linu vizitează un sat din Bucovina. Doamna Elena pictează ouă de Paște.',
        translation: 'O Linu visita uma aldeia da Bucovina. A senhora Elena pinta ovos de Páscoa.',
        choices: [
          { text: 'Linu intră în casă.', translation: 'O Linu entra na casa.', next: 'masa' },
          { text: 'Linu merge la mănăstire.', translation: 'O Linu vai ao mosteiro.', next: 'manastire' },
        ],
      },
      manastire: {
        emoji: '⛪',
        text: 'Mănăstirea Voroneț are picturi pe pereți. Culoarea albastră este foarte frumoasă.',
        translation: 'O mosteiro de Voroneț tem pinturas nas paredes. A cor azul é muito bonita.',
        choices: [{ text: 'Linu se întoarce la doamna Elena.', translation: 'O Linu volta para a senhora Elena.', next: 'masa' }],
      },
      masa: {
        emoji: '🎨',
        text: 'Pe masă sunt ouă roșii, galbene și negre. Doamna Elena lucrează cu ceară caldă.',
        translation: 'Na mesa há ovos vermelhos, amarelos e pretos. A senhora Elena trabalha com cera quente.',
        choices: [
          { text: 'Linu întreabă: «Ajut și eu?»', translation: 'O Linu pergunta: «Posso ajudar também?»', next: 'ajuta' },
          {
            text: 'Linu ia un ou verde.',
            translation: 'O Linu pega um ovo verde.',
            wrong: 'Releia: na mesa há ovos roșii (vermelhos), galbene (amarelos) e negre (pretos). Não há nenhum ovo verde!',
          },
        ],
      },
      ajuta: {
        emoji: '🥚',
        text: '«Da! Tu alegi culoarea.» Doamna Elena îi dă lui Linu un ou alb.',
        translation: '«Sim! Você escolhe a cor.» A senhora Elena dá ao Linu um ovo branco.',
        choices: [
          { text: 'Linu pictează oul roșu.', translation: 'O Linu pinta o ovo de vermelho.', next: 'rosu' },
          { text: 'Linu pictează oul albastru.', translation: 'O Linu pinta o ovo de azul.', next: 'albastru' },
        ],
      },
      rosu: {
        emoji: '🔴',
        text: 'Oul roșu este tradițional. Doamna Elena zâmbește: «Bravo, Linu!»',
        translation: 'O ovo vermelho é tradicional. A senhora Elena sorri: «Muito bem, Linu!»',
        ending: { tone: 'bom', title: 'Ovo de Páscoa romeno!', message: 'O Linu pintou um ovo vermelho, a cor tradicional da Páscoa na Romênia.' },
      },
      albastru: {
        emoji: '💥',
        text: 'Oul albastru este ca Voroneț. Dar oul cade și se sparge!',
        translation: 'O ovo azul parece Voroneț. Mas o ovo cai e quebra!',
        ending: { tone: 'neutro', title: 'Ops, quebrou!', message: 'A cor era linda, mas o ovo escorregou. Tente de novo com mais cuidado!' },
      },
    },
  },
  {
    id: 'ro-h12',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Vaporul din Tulcea',
    emoji: '⛴️',
    summary: 'O Linu quer pegar o barco de Tulcea para o Delta do Danúbio. Vai chegar na hora?',
    cultural_context:
      'Tulcea é a principal porta de entrada do Delta do Danúbio, Patrimônio Mundial da UNESCO desde 1991 e lar da maior colônia de pelicanos da Europa.',
    start: 'start',
    glossary: [
      ['vapor', 'barco (de passageiros)'],
      ['a pleca', 'partir, sair'],
      ['ora nouă', 'nove horas'],
      ['bilet', 'bilhete'],
      ['dus-întors', 'ida e volta'],
      ['a se întoarce', 'voltar'],
      ['pelican', 'pelicano'],
    ],
    nodes: {
      start: {
        emoji: '⏰',
        text: 'Linu este în Tulcea. Vaporul pleacă spre Delta Dunării la ora nouă. Acum este ora opt.',
        translation: 'O Linu está em Tulcea. O barco parte para o Delta do Danúbio às nove horas. Agora são oito horas.',
        choices: [
          { text: 'Linu cumpără un bilet.', translation: 'O Linu compra um bilhete.', next: 'bilet' },
          { text: 'Linu bea o cafea lungă.', translation: 'O Linu toma um café demorado.', next: 'cafea' },
        ],
      },
      cafea: {
        emoji: '☕',
        text: 'Linu bea cafeaua încet. Ceasul arată ora nouă și zece!',
        translation: 'O Linu bebe o café devagar. O relógio mostra nove e dez!',
        choices: [{ text: 'Linu aleargă la port.', translation: 'O Linu corre para o porto.', next: 'pierdut' }],
      },
      pierdut: {
        emoji: '😩',
        text: 'Vaporul nu mai este în port. Următorul vapor pleacă la ora două.',
        translation: 'O barco não está mais no porto. O próximo barco parte às duas horas.',
        ending: { tone: 'neutro', title: 'Barco perdido', message: 'O café demorou demais e o Linu perdeu o barco das nove. Tente de novo!' },
      },
      bilet: {
        emoji: '🎟️',
        text: 'Casiera întreabă: «Bilet dus-întors?» Vaporul se întoarce la ora cinci.',
        translation: 'A bilheteira pergunta: «Bilhete de ida e volta?» O barco volta às cinco horas.',
        choices: [{ text: 'Da, dus-întors, vă rog.', translation: 'Sim, ida e volta, por favor.', next: 'vapor' }],
      },
      vapor: {
        emoji: '⛴️',
        text: 'Vaporul pleacă. Apa este verde și cerul este albastru. Ghidul întreabă: «La ce oră ne întoarcem?»',
        translation: 'O barco parte. A água é verde e o céu é azul. O guia pergunta: «A que horas nós voltamos?»',
        choices: [
          { text: 'La ora cinci.', translation: 'Às cinco horas.', next: 'pelicani' },
          {
            text: 'La ora nouă.',
            translation: 'Às nove horas.',
            wrong: 'O barco PARTIU às nove (pleacă). A volta (se întoarce) é às cinco: «la ora cinci».',
          },
        ],
      },
      pelicani: {
        emoji: '🦢',
        text: 'Linu vede păsări mari și albe. Sunt pelicani! Linu face o fotografie.',
        translation: 'O Linu vê pássaros grandes e brancos. São pelicanos! O Linu tira uma foto.',
        choices: [
          { text: 'Linu salută pelicanii.', translation: 'O Linu cumprimenta os pelicanos.', next: 'final_bom' },
          { text: 'Linu sare în apă.', translation: 'O Linu pula na água.', next: 'final_apa' },
        ],
      },
      final_bom: {
        emoji: '📸',
        text: 'Pelicanii zboară deasupra vaporului. Linu are o fotografie superbă.',
        translation: 'Os pelicanos voam por cima do barco. O Linu tem uma foto maravilhosa.',
        ending: { tone: 'bom', title: 'Amigos no Delta!', message: 'O Linu pegou o barco na hora e viu os pelicanos do Delta do Danúbio.' },
      },
      final_apa: {
        emoji: '🏊',
        text: 'Linu înoată lângă vapor. Ghidul râde: «Un pinguin în Delta Dunării!»',
        translation: 'O Linu nada ao lado do barco. O guia ri: «Um pinguim no Delta do Danúbio!»',
        ending: { tone: 'neutro', title: 'Mergulho surpresa', message: 'O Linu se divertiu na água, mas os pelicanos fugiram assustados!' },
      },
    },
  },
  {
    id: 'ro-h13',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Fotbal la Timișoara',
    emoji: '⚽',
    summary: 'Num parque de Timișoara, o Linu é convidado para uma partida de futebol.',
    cultural_context:
      'Em 1884, Timișoara foi a primeira cidade da Europa continental a ter iluminação pública elétrica nas ruas. A cidade também é conhecida pelo Parque das Rosas (Parcul Rozelor).',
    start: 'start',
    glossary: [
      ['parc', 'parque'],
      ['trandafir', 'rosa'],
      ['minge', 'bola'],
      ['a juca', 'jogar'],
      ['tricou', 'camiseta'],
      ['verde', 'verde'],
      ['poartă', 'gol (a trave)'],
    ],
    nodes: {
      start: {
        emoji: '🌳',
        text: 'Este sâmbătă. Linu se plimbă prin Parcul Rozelor din Timișoara. Niște copii joacă fotbal.',
        translation: 'É sábado. O Linu passeia pelo Parque das Rosas de Timișoara. Algumas crianças jogam futebol.',
        choices: [
          { text: 'Linu privește jocul.', translation: 'O Linu olha o jogo.', next: 'priveste' },
          { text: 'Linu miroase trandafirii.', translation: 'O Linu cheira as rosas.', next: 'trandafiri' },
        ],
      },
      trandafiri: {
        emoji: '🌹',
        text: 'Trandafirii sunt roșii, albi și galbeni. Deodată, mingea cade lângă Linu!',
        translation: 'As rosas são vermelhas, brancas e amarelas. De repente, a bola cai ao lado do Linu!',
        choices: [{ text: 'Linu duce mingea la copii.', translation: 'O Linu leva a bola para as crianças.', next: 'priveste' }],
      },
      priveste: {
        emoji: '👦',
        text: 'Un băiat strigă: «Avem doar cinci jucători. Joci cu noi?»',
        translation: 'Um menino grita: «Só temos cinco jogadores. Você joga com a gente?»',
        choices: [
          { text: 'Da, joc!', translation: 'Sim, eu jogo!', next: 'echipa' },
          { text: 'Nu, mulțumesc.', translation: 'Não, obrigado.', next: 'final_banca' },
        ],
      },
      final_banca: {
        emoji: '🍦',
        text: 'Linu stă pe o bancă. Mănâncă o înghețată și privește meciul.',
        translation: 'O Linu senta num banco. Toma um sorvete e assiste à partida.',
        ending: { tone: 'neutro', title: 'Torcedor no banco', message: 'O Linu curtiu o sorvete, mas ficou de fora do jogo. Que tal jogar da próxima vez?' },
      },
      echipa: {
        emoji: '👕',
        text: 'Băiatul spune: «Noi avem tricouri verzi. Ei au tricouri roșii.» Meciul începe la ora patru.',
        translation: 'O menino diz: «Nós temos camisetas verdes. Eles têm camisetas vermelhas.» A partida começa às quatro horas.',
        choices: [
          { text: 'Linu ia un tricou verde.', translation: 'O Linu pega uma camiseta verde.', next: 'meci' },
          {
            text: 'Linu ia un tricou roșu.',
            translation: 'O Linu pega uma camiseta vermelha.',
            wrong: 'O menino disse «noi avem tricouri verzi» (nós temos camisetas verdes). O vermelho é do outro time (ei = eles).',
          },
        ],
      },
      meci: {
        emoji: '🏃',
        text: 'Linu aleargă pe iarbă. Mingea vine la Linu!',
        translation: 'O Linu corre na grama. A bola vem para o Linu!',
        choices: [
          { text: 'Linu șutează la poartă.', translation: 'O Linu chuta para o gol.', next: 'gol' },
          { text: 'Linu pasează la băiat.', translation: 'O Linu passa para o menino.', next: 'pasa' },
        ],
      },
      gol: {
        emoji: '🥅',
        text: 'Gol! Copiii strigă și aplaudă. Linu dansează pe iarbă.',
        translation: 'Gol! As crianças gritam e aplaudem. O Linu dança na grama.',
        ending: { tone: 'bom', title: 'Goleador!', message: 'O Linu marcou um gol para o time verde em Timișoara.' },
      },
      pasa: {
        emoji: '🤝',
        text: 'Băiatul marchează. «Mulțumesc, Linu!» Echipa verde câștigă.',
        translation: 'O menino marca. «Obrigado, Linu!» O time verde ganha.',
        ending: { tone: 'bom', title: 'Espírito de equipe', message: 'Com um bom passe, o Linu ajudou o time verde a vencer.' },
      },
    },
  },
  {
    id: 'ro-h14',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Rucsacul pierdut',
    emoji: '🎒',
    summary: 'O Linu esquece a mochila no bonde em Timișoara e precisa recuperá-la.',
    cultural_context: 'Timișoara foi, em 1884, a primeira cidade da Europa continental a ter iluminação pública elétrica nas ruas.',
    start: 'start',
    glossary: [
      ['rucsac', 'mochila'],
      ['am pierdut', 'eu perdi'],
      ['obiecte pierdute', 'achados e perdidos'],
      ['vatman', 'motorista de bonde'],
      ['cheile mele', 'minhas chaves'],
      ['al meu', 'meu (o meu)'],
      ['tramvai', 'bonde'],
    ],
    nodes: {
      start: {
        emoji: '🚋',
        text: 'Linu a ajuns ieri la Timișoara. Azi dimineață a luat tramvaiul spre centru. Când a coborât în Piața Unirii, a observat că rucsacul lui nu mai este în spate!',
        translation:
          'Linu chegou ontem a Timișoara. Hoje de manhã ele pegou o bonde para o centro. Quando desceu na Praça da União, percebeu que a mochila dele não está mais nas costas!',
        choices: [
          { text: 'Merge la biroul de obiecte pierdute.', translation: 'Vai ao balcão de achados e perdidos.', next: 'birou' },
          { text: 'Aleargă înapoi la stația de tramvai.', translation: 'Corre de volta ao ponto do bonde.', next: 'statie' },
        ],
      },
      statie: {
        emoji: '🏃',
        text: 'Linu a alergat la stație, dar tramvaiul a plecat deja. O doamnă i-a spus: «Am văzut un rucsac pe scaun, dar vatmanul l-a luat.»',
        translation: 'Linu correu até o ponto, mas o bonde já tinha partido. Uma senhora disse a ele: «Eu vi uma mochila no banco, mas o motorista a pegou.»',
        choices: [
          { text: 'Merge la biroul de obiecte pierdute.', translation: 'Vai ao balcão de achados e perdidos.', next: 'birou' },
          {
            text: 'Îi cere doamnei rucsacul.',
            translation: 'Pede a mochila à senhora.',
            wrong: 'A senhora só VIU a mochila («am văzut» = eu vi). Quem a pegou foi o motorista do bonde: «vatmanul l-a luat» = o motorista a pegou.',
          },
        ],
      },
      birou: {
        emoji: '🏢',
        text: 'La birou, un funcționar întreabă: «Bună ziua! Ce ați pierdut?» Linu răspunde: «Am pierdut rucsacul meu în tramvai.» Funcționarul întreabă: «Ce culoare are rucsacul dumneavoastră?»',
        translation:
          'No balcão, um funcionário pergunta: «Bom dia! O que o senhor perdeu?» Linu responde: «Perdi a minha mochila no bonde.» O funcionário pergunta: «De que cor é a sua mochila?»',
        choices: [
          { text: 'E albastru, cu un pinguin mic pe buzunar.', translation: 'É azul, com um pinguinzinho no bolso.', next: 'descriere' },
          {
            text: 'L-am pierdut azi dimineață.',
            translation: 'Eu a perdi hoje de manhã.',
            wrong: 'O funcionário perguntou a COR da mochila («Ce culoare are…?» = que cor tem…?), não quando você a perdeu.',
          },
        ],
      },
      descriere: {
        emoji: '🗄️',
        text: 'Funcționarul deschide un dulap mare: «Avem trei rucsaci albaștri. Ce ați avut în rucsac?» Linu se gândește.',
        translation: 'O funcionário abre um armário grande: «Temos três mochilas azuis. O que o senhor tinha na mochila?» Linu pensa.',
        choices: [
          { text: 'Am avut cartea mea de română și cheile mele.', translation: 'Eu tinha o meu livro de romeno e as minhas chaves.', next: 'gasit' },
          { text: 'Nu mai știu…', translation: 'Não lembro mais…', next: 'nustiu' },
        ],
      },
      nustiu: {
        emoji: '🤔',
        text: 'Funcționarul ridică din umeri: «Îmi pare rău, fără o descriere nu vă pot da rucsacul. Mai gândiți-vă puțin!»',
        translation: 'O funcionário dá de ombros: «Sinto muito, sem uma descrição não posso lhe dar a mochila. Pense mais um pouco!»',
        choices: [
          { text: 'Se gândește din nou.', translation: 'Pensa de novo.', next: 'descriere' },
          { text: 'Pleacă acasă.', translation: 'Vai para casa.', next: 'final_neutro' },
        ],
      },
      gasit: {
        emoji: '🔑',
        text: 'Funcționarul a deschis un rucsac albastru și a scos o carte de română și trei chei. «Acesta este rucsacul dumneavoastră?» Linu a strigat: «Da, este al meu!»',
        translation: 'O funcionário abriu uma mochila azul e tirou um livro de romeno e três chaves. «Esta é a sua mochila?» Linu gritou: «Sim, é minha!»',
        choices: [
          { text: 'Îi mulțumește și semnează hârtia.', translation: 'Agradece e assina o papel.', next: 'final_bom' },
          {
            text: 'Spune că nu este rucsacul lui.',
            translation: 'Diz que não é a mochila dele.',
            wrong: 'Linu disse «Da, este al meu!» — «Sim, é minha!». O livro e as chaves que ele descreveu estavam lá dentro.',
          },
        ],
      },
      final_bom: {
        emoji: '☕',
        text: 'Linu a semnat și și-a luat rucsacul. Apoi a stat pe o terasă în Piața Unirii și a băut o cafea. Toată ziua a ținut rucsacul lângă el!',
        translation:
          'Linu assinou e pegou a mochila. Depois sentou num terraço na Praça da União e tomou um café. O dia inteiro ele manteve a mochila perto dele!',
        ending: { tone: 'bom', title: 'Mochila de volta!', message: 'O Linu descreveu direitinho o que tinha perdido e recuperou as coisas dele.' },
      },
      final_neutro: {
        emoji: '🚪',
        text: 'Linu a plecat acasă fără rucsac. În fața ușii și-a amintit: «Cartea mea de română! Cheile mele!» Fără chei, nu a putut intra în apartament…',
        translation:
          'Linu foi para casa sem a mochila. Em frente à porta ele lembrou: «Meu livro de romeno! Minhas chaves!» Sem as chaves, não conseguiu entrar no apartamento…',
        ending: {
          tone: 'neutro',
          title: 'Trancado do lado de fora',
          message: 'Faltou descrever o que havia na mochila. Tente de novo e lembre-se do livro e das chaves!',
        },
      },
    },
  },
  {
    id: 'ro-h15',
    level: 'A2.2',
    cefr: 'A2',
    title: 'O zi la Castelul Peleș',
    emoji: '🏰',
    summary: 'O Linu vai a Sinaia, nas montanhas, para visitar o Castelo Peleș.',
    cultural_context:
      'O Castelo Peleș, em Sinaia, foi construído para Carol I, o primeiro rei da Romênia, a partir de 1873. A cidade deve o nome ao Mosteiro de Sinaia, fundado no fim do século XVII.',
    start: 'start',
    glossary: [
      ['gară', 'estação de trem'],
      ['brad', 'pinheiro (abeto)'],
      ['mănăstire', 'mosteiro'],
      ['o să ajungi', 'você vai chegar'],
      ['nu atingeți', 'não toquem'],
      ['mai frumos decât', 'mais bonito que'],
      ['scară', 'escada'],
    ],
    nodes: {
      start: {
        emoji: '🚉',
        text: 'Linu coboară din tren în gara din Sinaia. Deasupra orașului sunt munții Bucegi. «Azi o să văd Castelul Peleș!» își spune el fericit.',
        translation:
          'Linu desce do trem na estação de Sinaia. Acima da cidade ficam os montes Bucegi. «Hoje vou ver o Castelo Peleș!» diz ele para si mesmo, feliz.',
        choices: [
          { text: 'Pornește pe jos spre castel.', translation: 'Parte a pé em direção ao castelo.', next: 'parc' },
          { text: 'Întreabă un taximetrist cât o să coste drumul.', translation: 'Pergunta a um taxista quanto vai custar a corrida.', next: 'taxi' },
        ],
      },
      taxi: {
        emoji: '🚕',
        text: '«O să coste douăzeci de lei», spune taximetristul. «Dar pe jos e mai frumos decât cu mașina. Mergeți prin parc, nu e departe!»',
        translation: '«Vai custar vinte lei», diz o taxista. «Mas a pé é mais bonito que de carro. Vá pelo parque, não é longe!»',
        choices: [
          { text: 'Ascultă sfatul și merge pe jos.', translation: 'Segue o conselho e vai a pé.', next: 'parc' },
          {
            text: 'Crede că taximetristul îi recomandă mașina.',
            translation: 'Acha que o taxista está recomendando o carro.',
            wrong:
              '«Pe jos e mai frumos decât cu mașina» = a pé é MAIS bonito do que de carro. O taxista recomendou ir a pé pelo parque («mergeți prin parc»).',
          },
        ],
      },
      parc: {
        emoji: '🌲',
        text: 'Drumul urcă printre brazi înalți și trece pe lângă o mănăstire veche. Un călugăr îi spune: «Orașul are numele mănăstirii noastre. Mergi înainte și în zece minute o să ajungi la castel!»',
        translation:
          'O caminho sobe entre pinheiros altos e passa ao lado de um mosteiro antigo. Um monge lhe diz: «A cidade tem o nome do nosso mosteiro. Siga em frente e em dez minutos você vai chegar ao castelo!»',
        choices: [{ text: 'Mulțumește și merge mai departe.', translation: 'Agradece e continua.', next: 'castel' }],
      },
      castel: {
        emoji: '🏰',
        text: 'În fața lui Linu apare castelul, cu turnuri ascuțite și ziduri pictate. E mai mare și mai frumos decât în poze! Lângă el se vede Pelișor, un castel mai mic.',
        translation:
          'Na frente do Linu aparece o castelo, com torres pontudas e paredes pintadas. É maior e mais bonito que nas fotos! Ao lado dele se vê o Pelișor, um castelo menor.',
        choices: [
          { text: 'Cumpără bilet și intră la Peleș.', translation: 'Compra o ingresso e entra no Peleș.', next: 'ghid' },
          { text: 'Se așază pe o bancă să deseneze castelul.', translation: 'Senta num banco para desenhar o castelo.', next: 'final_desen' },
        ],
      },
      final_desen: {
        emoji: '✏️',
        text: 'Linu desenează o oră întreagă și uită de vizită. Când ajunge la casă, grupurile de azi sunt pline. «Mâine o să vin mai devreme», promite el.',
        translation:
          'Linu desenha uma hora inteira e esquece da visita. Quando chega à bilheteria, os grupos de hoje estão lotados. «Amanhã vou vir mais cedo», promete ele.',
        ending: { tone: 'neutro', title: 'Só por fora', message: 'O desenho ficou lindo, mas o interior do castelo vai ter que esperar até amanhã.' },
      },
      ghid: {
        emoji: '🗝️',
        text: 'Înăuntru, ghida spune: «Castelul a fost construit pentru regele Carol I. Vă rog, nu atingeți nimic și rămâneți lângă grup!» Peste tot sunt lemn sculptat, oglinzi și covoare vechi.',
        translation:
          'Lá dentro, a guia diz: «O castelo foi construído para o rei Carol I. Por favor, não toquem em nada e fiquem perto do grupo!» Por toda parte há madeira entalhada, espelhos e tapetes antigos.',
        choices: [
          { text: 'Merge cuminte lângă grup.', translation: 'Anda comportado perto do grupo.', next: 'scara' },
          {
            text: 'Mângâie cu aripa o vază veche.',
            translation: 'Acaricia com a asa um vaso antigo.',
            wrong: 'A guia usou o imperativo negativo: «nu atingeți nimic» = não toquem em NADA. E pediu «rămâneți lângă grup» = fiquem perto do grupo.',
          },
        ],
      },
      scara: {
        emoji: '🪜',
        text: '«Acum o să urcăm la etaj», spune ghida. «Scara de lemn e veche și mai îngustă decât cea de la intrare, așa că mergeți încet!»',
        translation: '«Agora vamos subir ao andar de cima», diz a guia. «A escada de madeira é antiga e mais estreita que a da entrada, então andem devagar!»',
        choices: [
          { text: 'Urcă încet, ținându-se de balustradă.', translation: 'Sobe devagar, segurando no corrimão.', next: 'final_bom' },
          { text: 'Aleargă pe scară ca să ajungă primul.', translation: 'Corre na escada para chegar primeiro.', next: 'final_grabit' },
        ],
      },
      final_bom: {
        emoji: '👑',
        text: 'Sus, Linu vede săli cu tavane pictate și ferestre colorate. La ieșire, îi spune ghidei: «Castelul e mai frumos decât un basm! Voi reveni cu prietenii mei.»',
        translation:
          'Lá em cima, Linu vê salões com tetos pintados e janelas coloridas. Na saída, diz à guia: «O castelo é mais bonito que um conto de fadas! Vou voltar com os meus amigos.»',
        ending: { tone: 'bom', title: 'Visita de rei', message: 'O Linu seguiu as instruções da guia e viu o Peleș de ponta a ponta.' },
      },
      final_grabit: {
        emoji: '😳',
        text: 'Linu alunecă și cade pe o treaptă. Ghida îl ajută să se ridice: «Te rog, data viitoare ascultă ce spun!» Linu vede restul castelului, dar cu obrajii roșii.',
        translation:
          'Linu escorrega e cai num degrau. A guia o ajuda a se levantar: «Por favor, da próxima vez escute o que eu digo!» Linu vê o resto do castelo, mas com as bochechas vermelhas.',
        ending: {
          tone: 'neutro',
          title: 'Escorregão real',
          message: 'A guia avisou: «mergeți încet» = andem devagar. O imperativo era um conselho importante!',
        },
      },
    },
  },
  {
    id: 'ro-h16',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Înscrierea de la Iași',
    emoji: '📝',
    summary: 'O Linu tenta se matricular num curso de romeno para estrangeiros na universidade de Iași.',
    cultural_context:
      'A Universidade de Iași, fundada em 1860, é a universidade moderna mais antiga da Romênia. O Palácio da Cultura, no fim do bulevar Ștefan cel Mare, é o cartão-postal da cidade.',
    start: 'start',
    glossary: [
      ['a se înscrie', 'matricular-se'],
      ['trebuie să completați', 'o senhor precisa preencher'],
      ['formular', 'formulário'],
      ['îl am', 'eu o tenho (masc./neutro)'],
      ['s-o plătiți', 'que a pague (a taxa)'],
      ['casierie', 'caixa (guichê de pagamento)'],
      ['chitanță', 'recibo'],
      ['a ține locul', 'guardar o lugar'],
    ],
    nodes: {
      start: {
        emoji: '🎓',
        text: 'Linu vrea să vorbească româna mai bine, așa că a venit la Iași. Aici vrea să se înscrie la un curs de limba română pentru străini, la universitate. Dar orașul e atât de frumos, încât e tentat să-l viziteze mai întâi.',
        translation:
          'Linu quer falar romeno melhor, por isso veio a Iași. Aqui ele quer se matricular num curso de língua romena para estrangeiros, na universidade. Mas a cidade é tão bonita que ele fica tentado a visitá-la primeiro.',
        choices: [
          { text: 'Merge direct la secretariat.', translation: 'Vai direto à secretaria.', next: 'secretariat' },
          { text: 'Pleacă să vadă orașul.', translation: 'Sai para ver a cidade.', next: 'oras' },
        ],
      },
      oras: {
        emoji: '🏰',
        text: 'Linu se plimbă pe bulevardul Ștefan cel Mare și ajunge la Palatul Culturii. Vrea să-l fotografieze din toate părțile. Deodată se uită la ceas: secretariatul se închide la ora unu, iar acum e douăsprezece și jumătate!',
        translation:
          'Linu passeia pelo bulevar Ștefan cel Mare e chega ao Palácio da Cultura. Quer fotografá-lo de todos os lados. De repente olha o relógio: a secretaria fecha à uma, e agora é meio-dia e meia!',
        choices: [
          { text: 'Aleargă la universitate.', translation: 'Corre para a universidade.', next: 'secretariat' },
          { text: 'Mai face câteva poze.', translation: 'Tira mais algumas fotos.', next: 'final_inchis' },
        ],
      },
      final_inchis: {
        emoji: '🔒',
        text: 'Când ajunge Linu, ușa secretariatului e închisă. Pe ea scrie: «Program: 9:00–13:00». Trebuie să vină din nou mâine, dar măcar are poze frumoase.',
        translation:
          'Quando Linu chega, a porta da secretaria está fechada. Nela está escrito: «Horário: 9h–13h». Ele precisa voltar amanhã, mas pelo menos tem fotos bonitas.',
        ending: { tone: 'neutro', title: 'Secretaria fechada', message: 'O Palácio da Cultura roubou o tempo do Linu. A matrícula fica para amanhã!' },
      },
      secretariat: {
        emoji: '🗂️',
        text: 'La secretariat, o doamnă cu ochelari îl primește. «Ca să vă înscrieți, trebuie să completați formularul ăsta și să-mi arătați pașaportul», spune ea. «Îl aveți la dumneavoastră?»',
        translation:
          'Na secretaria, uma senhora de óculos o recebe. «Para se matricular, o senhor precisa preencher este formulário e me mostrar o passaporte», diz ela. «O senhor o tem aí?»',
        choices: [
          { text: 'Da, îl am. Poftiți.', translation: 'Sim, eu o tenho. Aqui está.', next: 'formular' },
          { text: 'Nu, l-am lăsat la hotel.', translation: 'Não, eu o deixei no hotel.', next: 'hotel' },
          {
            text: 'Da, o am. Poftiți.',
            translation: 'Sim, eu a tenho. Aqui está.',
            wrong: '«Pașaportul» é neutro, e no singular o neutro se comporta como masculino: o pronome é «îl» (îl am), não «o» (que é feminino).',
          },
        ],
      },
      hotel: {
        emoji: '🏨',
        text: 'Doamna oftează: «Atunci trebuie să-l aduceți azi. Vă aștept până la ora unu.» Din fericire, hotelul lui Linu e la zece minute de mers pe jos.',
        translation:
          'A senhora suspira: «Então o senhor precisa trazê-lo hoje. Espero o senhor até a uma.» Por sorte, o hotel do Linu fica a dez minutos a pé.',
        choices: [{ text: 'Aleargă la hotel și se întoarce cu pașaportul.', translation: 'Corre ao hotel e volta com o passaporte.', next: 'formular' }],
      },
      formular: {
        emoji: '🖊️',
        text: 'Linu completează formularul și i-l dă doamnei. Ea îl citește atent: «Mai trebuie să-mi dați o fotografie. Iar taxa trebuie s-o plătiți la casierie, la etajul unu.»',
        translation:
          'Linu preenche o formulário e o entrega à senhora. Ela o lê com atenção: «O senhor ainda precisa me dar uma fotografia. E a taxa o senhor tem que pagá-la no caixa, no primeiro andar.»',
        choices: [
          { text: 'Îi dă o fotografie și merge la casierie.', translation: 'Dá uma fotografia e vai ao caixa.', next: 'casierie' },
          {
            text: 'Scoate banii ca să plătească taxa chiar acolo.',
            translation: 'Tira o dinheiro para pagar a taxa ali mesmo.',
            wrong:
              'Ela disse «taxa trebuie s-o plătiți la casierie, la etajul unu»: a taxa («o») deve ser paga no caixa, no primeiro andar, não na secretaria.',
          },
        ],
      },
      casierie: {
        emoji: '🧍',
        text: 'La casierie e o coadă lungă. Un student din spatele lui îi spune: «Dacă vrei, îți țin eu locul. Poți să te duci să-ți iei o cafea.» Linu îi mulțumește, dar nu știe ce să facă.',
        translation:
          'No caixa há uma fila longa. Um estudante atrás dele diz: «Se quiser, eu guardo o seu lugar. Você pode ir pegar um café.» Linu agradece, mas não sabe o que fazer.',
        choices: [
          { text: 'Rămâne la coadă.', translation: 'Fica na fila.', next: 'final_bom' },
          { text: 'Acceptă și merge să ia cafea.', translation: 'Aceita e vai pegar café.', next: 'final_prieten' },
        ],
      },
      final_bom: {
        emoji: '✅',
        text: 'Linu așteaptă cuminte, plătește taxa și primește chitanța. O duce la secretariat, iar doamna o ștampilează: «Gata! Cursul începe luni. Trebuie să fiți aici la ora nouă.»',
        translation:
          'Linu espera bem-comportado, paga a taxa e recebe o recibo. Ele o leva à secretaria, e a senhora o carimba: «Pronto! O curso começa segunda-feira. O senhor precisa estar aqui às nove.»',
        ending: { tone: 'bom', title: 'Matriculado!', message: 'O Linu entendeu cada passo da burocracia: passaporte, formulário, foto e taxa no caixa.' },
      },
      final_prieten: {
        emoji: '🤝',
        text: 'Linu ia două cafele: una pentru el și una pentru student. Când se întoarce, e chiar rândul lui, așa că plătește taxa. Studentul se oferă să-i arate orașul în weekend: acum Linu are și un curs, și un prieten.',
        translation:
          'Linu pega dois cafés: um para ele e um para o estudante. Quando volta, é justamente a vez dele, então paga a taxa. O estudante se oferece para lhe mostrar a cidade no fim de semana: agora Linu tem um curso e um amigo.',
        ending: { tone: 'bom', title: 'Curso e amizade', message: 'Confiar no colega de fila valeu a pena: o Linu se matriculou e ganhou um guia em Iași.' },
      },
    },
  },
  {
    id: 'ro-h17',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Ceasul din Sighișoara',
    emoji: '🕰️',
    summary: 'Na cidadela de Sighișoara, um senhor conta ao Linu como era a vida em volta da Torre do Relógio.',
    cultural_context:
      'A cidadela de Sighișoara, Patrimônio da UNESCO, é uma das poucas cidadelas medievais da Europa ainda habitadas. A Torre do Relógio tem figuras de madeira que representam os dias da semana.',
    start: 'start',
    glossary: [
      ['când eram copil', 'quando eu era criança'],
      ['urcam', 'eu subia'],
      ['mergea în fiecare zi', 'ia todos os dias'],
      ['a avea grijă de', 'cuidar de'],
      ['figurină de lemn', 'figura de madeira'],
      ['pe vremuri', 'antigamente'],
      ['a face cu mâna', 'acenar'],
    ],
    nodes: {
      start: {
        emoji: '🏘️',
        text: 'Linu urcă pe străzile înguste spre cetatea din Sighișoara. Lângă Turnul cu Ceas, un bătrân cu mustață albă curăță o bicicletă veche. Îl vede pe Linu și îi spune: «Când eram copil, urcam în turnul ăsta în fiecare duminică.»',
        translation:
          'Linu sobe pelas ruas estreitas até a cidadela de Sighișoara. Perto da Torre do Relógio, um velho de bigode branco limpa uma bicicleta antiga. Ele vê o Linu e diz: «Quando eu era criança, subia nesta torre todo domingo.»',
        choices: [
          { text: 'Îl întreabă ce făcea în turn.', translation: 'Pergunta o que ele fazia na torre.', next: 'turn' },
          { text: 'Îl întreabă despre bicicletă.', translation: 'Pergunta sobre a bicicleta.', next: 'bicicleta' },
        ],
      },
      bicicleta: {
        emoji: '🚲',
        text: '«Bicicleta asta era a tatălui meu», spune bătrânul. «Cu ea mergea în fiecare zi la fabrică, jos în oraș. Pe atunci, pe străzile astea nu treceau aproape deloc mașini.»',
        translation:
          '«Esta bicicleta era do meu pai», diz o velho. «Com ela ele ia todos os dias à fábrica, lá embaixo na cidade. Naquela época, quase não passavam carros por estas ruas.»',
        choices: [
          { text: 'Îl întreabă despre turn.', translation: 'Pergunta sobre a torre.', next: 'turn' },
          {
            text: 'Crede că tatăl lui a mers o singură dată la fabrică.',
            translation: 'Acha que o pai dele foi uma única vez à fábrica.',
            wrong: '«Mergea în fiecare zi» está no imperfeito, que descreve um hábito: o pai ia à fábrica TODOS os dias, não uma vez só.',
          },
        ],
      },
      turn: {
        emoji: '⚙️',
        text: '«Bunicul meu avea grijă de ceasul din turn», explică bătrânul. «Eu îl ajutam: ungeam roțile, ștergeam praful și mă uitam la figurinele de lemn. Pentru fiecare zi a săptămânii era altă figurină.»',
        translation:
          '«Meu avô cuidava do relógio da torre», explica o velho. «Eu o ajudava: lubrificava as engrenagens, tirava o pó e ficava olhando as figuras de madeira. Para cada dia da semana havia uma figura diferente.»',
        choices: [
          { text: 'Îl întreabă cum era să-l ajute pe bunic.', translation: 'Pergunta como era ajudar o avô.', next: 'amintiri' },
          { text: 'Îl roagă să-i arate turnul.', translation: 'Pede que ele lhe mostre a torre.', next: 'vizita' },
        ],
      },
      amintiri: {
        emoji: '🌅',
        text: '«Mă trezeam devreme, înainte de școală, ca să văd figurina zilei», zâmbește bătrânul. «Colegii mei nu mă credeau când le povesteam. Bunicul spunea că ceasul e ca un bunic: nu se grăbește niciodată, dar nici nu întârzie.»',
        translation:
          '«Eu acordava cedo, antes da escola, para ver a figura do dia», sorri o velho. «Meus colegas não acreditavam quando eu contava. O avô dizia que o relógio é como um avô: nunca tem pressa, mas também nunca se atrasa.»',
        choices: [
          { text: 'Îl roagă să-i arate turnul.', translation: 'Pede que ele lhe mostre a torre.', next: 'vizita' },
          {
            text: 'Crede că bătrânul dormea mereu până târziu.',
            translation: 'Acha que o velho sempre dormia até tarde.',
            wrong: '«Mă trezeam devreme» = eu acordava cedo. O imperfeito mostra que era um costume: ele acordava cedo todos os dias para ver a figura.',
          },
        ],
      },
      vizita: {
        emoji: '🎟️',
        text: 'Bătrânul îl duce pe Linu până la intrarea în turn. «Acum aici e muzeu», spune el. «Pe vremuri intram fără bilet; acum plătesc și eu, ca toată lumea.»',
        translation:
          'O velho leva o Linu até a entrada da torre. «Agora aqui é museu», diz ele. «Antigamente eu entrava sem ingresso; agora eu pago também, como todo mundo.»',
        choices: [
          { text: 'Cumpără bilete pentru amândoi.', translation: 'Compra ingressos para os dois.', next: 'sus' },
          { text: 'Îi mulțumește și pleacă să viziteze cetatea singur.', translation: 'Agradece e vai visitar a cidadela sozinho.', next: 'final_neutro' },
        ],
      },
      sus: {
        emoji: '🏙️',
        text: 'Din vârful turnului, Linu vede acoperișurile colorate ale cetății. Bătrânul are lacrimi în ochi: «De aici îl vedeam pe tata când pleca dimineața cu bicicleta. Eu îi făceam cu mâna, iar el suna din clopoțel.»',
        translation:
          'Do alto da torre, Linu vê os telhados coloridos da cidadela. O velho está com lágrimas nos olhos: «Daqui eu via meu pai quando ele saía de manhã de bicicleta. Eu acenava para ele, e ele tocava a campainha.»',
        choices: [{ text: 'Îi spune că e o amintire foarte frumoasă.', translation: 'Diz que é uma lembrança muito bonita.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🫖',
        text: 'Bătrânul zâmbește și îl invită pe Linu la el acasă, la un ceai și o felie de cozonac. Pe drum, îi mai spune o sută de povești despre cetate. Seara, Linu se simte aproape ca un localnic.',
        translation:
          'O velho sorri e convida o Linu para a casa dele, para um chá e uma fatia de cozonac. No caminho, conta mais cem histórias sobre a cidadela. À noite, Linu se sente quase um morador local.',
        ending: { tone: 'bom', title: 'Memórias da torre', message: 'O Linu ouviu com atenção como era a vida antigamente e ganhou um amigo em Sighișoara.' },
      },
      final_neutro: {
        emoji: '🚶',
        text: 'Linu se plimbă singur prin cetate și vede case colorate și biserici vechi. E frumos, dar ceva îi lipsește. Se gândește la bătrân și la poveștile pe care nu le-a mai auzit.',
        translation:
          'Linu passeia sozinho pela cidadela e vê casas coloridas e igrejas antigas. É bonito, mas falta alguma coisa. Ele pensa no velho e nas histórias que não chegou a ouvir.',
        ending: { tone: 'neutro', title: 'Passeio solitário', message: 'A cidadela é linda, mas as histórias do velho relojoeiro ficaram para outra vez.' },
      },
    },
  },
  {
    id: 'ro-h18',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Crucile albastre din Săpânța',
    emoji: '💙',
    summary: 'No Maramureș, o Linu visita o Cemitério Alegre de Săpânța e ouve a história de um ferreiro pintado numa cruz.',
    cultural_context:
      'O Cemitério Alegre (Cimitirul Vesel) de Săpânța, no Maramureș, tem cruzes de madeira pintadas de azul, com cenas e versos bem-humorados sobre a vida de quem está enterrado. A tradição começou nos anos 1930 com o artesão local Stan Ioan Pătraș.',
    start: 'start',
    glossary: [
      ['cruce', 'cruz'],
      ['versuri', 'versos'],
      ['fierar', 'ferreiro'],
      ['a potcovi', 'ferrar (cavalos)'],
      ['ceteră', 'violino (no Maramureș)'],
      ['soacră', 'sogra'],
      ['se trezea', 'ele acordava'],
      ['poartă maramureșeană', 'portão de madeira entalhada do Maramureș'],
    ],
    nodes: {
      start: {
        emoji: '🚌',
        text: 'Linu a ajuns cu autobuzul în Săpânța, un sat din Maramureș, aproape de granița cu Ucraina. Toată lumea îi spunea că aici e un cimitir vesel. Linu nu înțelegea cum poate un cimitir să fie vesel, așa că a venit să vadă cu ochii lui.',
        translation:
          'Linu chegou de ônibus a Săpânța, uma aldeia do Maramureș, perto da fronteira com a Ucrânia. Todo mundo lhe dizia que aqui há um cemitério alegre. Linu não entendia como um cemitério pode ser alegre, então veio ver com os próprios olhos.',
        choices: [
          { text: 'Intră direct în cimitir.', translation: 'Entra direto no cemitério.', next: 'cimitir' },
          { text: 'Vorbește mai întâi cu o femeie de la poartă.', translation: 'Fala primeiro com uma mulher no portão.', next: 'femeia' },
        ],
      },
      femeia: {
        emoji: '🧶',
        text: 'Femeia, tanti Maria, vinde covorașe țesute lângă poartă. «Când eram mică, veneau foarte puțini turiști», îi povestește ea. «Acum vin autobuze întregi. Hai, te duc la crucea bunicului meu!»',
        translation:
          'A mulher, a tia Maria, vende tapetinhos tecidos perto do portão. «Quando eu era pequena, vinham pouquíssimos turistas», conta ela. «Agora vêm ônibus inteiros. Vamos, eu te levo à cruz do meu avô!»',
        choices: [
          { text: 'Merge cu tanti Maria.', translation: 'Vai com a tia Maria.', next: 'cruce_bunic' },
          { text: 'Îi mulțumește, dar vrea să se plimbe singur.', translation: 'Agradece, mas quer passear sozinho.', next: 'singur' },
        ],
      },
      cimitir: {
        emoji: '✝️',
        text: 'Printre copaci, Linu vede sute de cruci de lemn, toate vopsite într-un albastru puternic. Pe fiecare cruce e o pictură mică și câteva versuri. O femeie cu basma îl ajunge din urmă: «Eu sunt tanti Maria. Bunicul meu e acolo, lângă biserică. Vino să-l cunoști!»',
        translation:
          'Entre as árvores, Linu vê centenas de cruzes de madeira, todas pintadas de um azul forte. Em cada cruz há uma pequena pintura e alguns versos. Uma mulher de lenço na cabeça o alcança: «Eu sou a tia Maria. Meu avô está ali, perto da igreja. Venha conhecê-lo!»',
        choices: [
          { text: 'Merge cu ea la biserică.', translation: 'Vai com ela até a igreja.', next: 'cruce_bunic' },
          { text: 'Preferă să citească singur crucile.', translation: 'Prefere ler as cruzes sozinho.', next: 'singur' },
        ],
      },
      cruce_bunic: {
        emoji: '🔨',
        text: 'Pe cruce e pictat un bărbat care bate un fier roșu pe nicovală. «Bunicul era fierarul satului», povestește tanti Maria. «Se trezea înainte de răsărit, potcovea caii toată ziua, iar seara cânta la ceteră pentru nepoți.»',
        translation:
          'Na cruz está pintado um homem batendo um ferro em brasa na bigorna. «O avô era o ferreiro da aldeia», conta a tia Maria. «Ele acordava antes do nascer do sol, ferrava cavalos o dia inteiro e, à noite, tocava violino para os netos.»',
        choices: [
          { text: 'O roagă să-i citească versurile.', translation: 'Pede que ela leia os versos para ele.', next: 'versuri' },
          {
            text: 'Crede că bunicul a potcovit un cal o singură dată.',
            translation: 'Acha que o avô ferrou um cavalo uma única vez.',
            wrong: '«Potcovea caii toată ziua» está no imperfeito: descreve o que ele fazia todos os dias, um hábito, e não uma ação única.',
          },
        ],
      },
      versuri: {
        emoji: '📜',
        text: 'Tanti Maria citește cu voce tare: «Eu am fost fierar în sat, / Dimineața ciocăneam, / Seara-n ceteră cântam. / Numai soacra mă certa / Când la crâșmă mă găsea.» Linu izbucnește în râs, apoi se oprește speriat: oare are voie să râdă într-un cimitir?',
        translation:
          'A tia Maria lê em voz alta: «Eu fui ferreiro na aldeia, / De manhã eu martelava, / À noite tocava violino. / Só a sogra brigava comigo / Quando me achava no bar.» Linu cai na risada, depois para, assustado: será que pode rir num cemitério?',
        choices: [
          { text: 'O întreabă pe tanti Maria dacă a greșit că a râs.', translation: 'Pergunta à tia Maria se fez mal em rir.', next: 'ras' },
          {
            text: 'Crede că soacra îl certa pentru că nu muncea.',
            translation: 'Acha que a sogra brigava com ele porque ele não trabalhava.',
            wrong:
              'Os versos dizem que a sogra brigava «când la crâșmă mă găsea» = quando o encontrava no bar. O imperfeito conta uma cena que se repetia, e ele trabalhava muito («dimineața ciocăneam»).',
          },
        ],
      },
      ras: {
        emoji: '😄',
        text: '«Aici oamenii nu plângeau prea mult», zâmbește tanti Maria. «Meșterul care sculpta crucile zicea că moartea nu trebuie să ne sperie. Veneam aici cu mama, citeam versurile și râdeam împreună.» Apoi îl invită pe Linu la ea acasă, la o plăcintă.',
        translation:
          '«Aqui as pessoas não choravam muito», sorri a tia Maria. «O artesão que esculpia as cruzes dizia que a morte não deve nos assustar. Eu vinha aqui com a minha mãe, a gente lia os versos e ria junto.» Depois convida o Linu para comer uma torta na casa dela.',
        choices: [
          { text: 'Acceptă invitația.', translation: 'Aceita o convite.', next: 'final_bom' },
          { text: 'Spune că trebuie să prindă autobuzul.', translation: 'Diz que precisa pegar o ônibus.', next: 'final_autobuz' },
        ],
      },
      singur: {
        emoji: '🌧️',
        text: 'Linu se plimbă singur printre cruci. Pe una e pictată o învățătoare, pe alta un cioban cu oile lui. Încearcă să citească versurile, dar multe cuvinte sunt în grai local și nu le înțelege. Deodată, începe să plouă tare.',
        translation:
          'Linu passeia sozinho entre as cruzes. Numa está pintada uma professora, noutra um pastor com as suas ovelhas. Ele tenta ler os versos, mas muitas palavras estão no falar local e ele não as entende. De repente, começa a chover forte.',
        choices: [{ text: 'Fuge spre stația de autobuz.', translation: 'Corre para o ponto de ônibus.', next: 'final_ploaie' }],
      },
      final_ploaie: {
        emoji: '☔',
        text: 'Ud până la pene, Linu așteaptă autobuzul. A văzut picturile, dar poveștile din spatele lor au rămas un mister. Își promite că data viitoare va căuta pe cineva din sat care să i le explice.',
        translation:
          'Molhado até as penas, Linu espera o ônibus. Viu as pinturas, mas as histórias por trás delas ficaram um mistério. Ele promete a si mesmo que da próxima vez vai procurar alguém da aldeia para explicá-las.',
        ending: {
          tone: 'neutro',
          title: 'Histórias sem narrador',
          message: 'As cruzes de Săpânța contam vidas inteiras, mas ouvir quem conhecia essas pessoas faz toda a diferença.',
        },
      },
      final_autobuz: {
        emoji: '🚏',
        text: 'Linu își ia rămas-bun și fuge la stație. În autobuz, spre Sighet, se gândește la fierarul care se trezea înainte de răsărit și cânta seara pentru nepoți. Zâmbește singur tot drumul.',
        translation:
          'Linu se despede e corre para o ponto. No ônibus, a caminho de Sighet, pensa no ferreiro que acordava antes do nascer do sol e tocava à noite para os netos. Vai sorrindo sozinho a viagem toda.',
        ending: {
          tone: 'neutro',
          title: 'Um sorriso na estrada',
          message: 'O Linu entendeu o espírito do Cemitério Alegre, mas perdeu a torta e as outras histórias da tia Maria.',
        },
      },
      final_bom: {
        emoji: '🥧',
        text: 'Casa tantei Maria are o poartă mare de lemn, sculptată cu funii și sori, ca multe porți din Maramureș. La masă, ea îi povestește cum bunicul o lua pe genunchi și îi cânta la ceteră când era mică. Linu pleacă seara cu o plăcintă în rucsac și cu o poveste pe care n-o va uita.',
        translation:
          'A casa da tia Maria tem um grande portão de madeira, entalhado com cordas e sóis, como muitos portões do Maramureș. À mesa, ela conta como o avô a colocava no colo e tocava violino para ela quando era pequena. Linu vai embora à noite com uma torta na mochila e uma história que não vai esquecer.',
        ending: {
          tone: 'bom',
          title: 'Uma vida numa cruz azul',
          message: 'O Linu entendeu as histórias no imperfeito e descobriu por que em Săpânța se ri até no cemitério.',
        },
      },
    },
  },
  {
    id: 'ro-h19',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Sub pământ, la Salina Turda',
    emoji: '🧂',
    summary: 'O Linu desce à Salina Turda, uma antiga mina de sal, e acaba servindo de intérprete para uma turista brasileira.',
    cultural_context:
      'A Salina Turda, perto de Cluj, é uma mina de sal explorada durante séculos e reformada como atração turística em 2010. Lá embaixo há uma roda-gigante e um lago subterrâneo onde se pode andar de barco, e a temperatura fica em torno de 10–12 °C o ano inteiro.',
    start: 'start',
    glossary: [
      ['salină', 'mina de sal'],
      ['sare', 'sal'],
      ['geacă', 'jaqueta'],
      ['roată panoramică', 'roda-gigante'],
      ['a vâsli', 'remar'],
      ['ați putea să…', 'o(a) senhor(a) poderia…'],
      ['v-aș ruga să…', 'eu lhe pediria que…'],
      ['aer sărat', 'ar salgado'],
    ],
    nodes: {
      start: {
        emoji: '☀️',
        text: 'Linu a venit la Turda, lângă Cluj, ca să viziteze salina. Afară sunt treizeci de grade, iar la intrare e o coadă lungă. Un domn din fața lui spune că jos, în mină, ar fi mult mai răcoare. Linu, care e pinguin, zâmbește fericit.',
        translation:
          'Linu veio a Turda, perto de Cluj, para visitar a mina de sal. Lá fora faz trinta graus, e na entrada há uma fila longa. Um senhor na frente dele diz que lá embaixo, na mina, estaria muito mais fresco. Linu, que é pinguim, sorri feliz.',
        choices: [
          {
            text: '«Mă scuzați, ați putea să-mi spuneți ce ar trebui să iau cu mine?»',
            translation: '«Com licença, o senhor poderia me dizer o que eu deveria levar comigo?»',
            next: 'sfat',
          },
          { text: 'Cumpără biletul și intră imediat.', translation: 'Compra o ingresso e entra imediatamente.', next: 'galerie' },
        ],
      },
      sfat: {
        emoji: '🧥',
        text: 'Domnul, care se numește Pop, îi explică că ar fi bine să aibă o geacă, pentru că jos sunt doar vreo douăsprezece grade tot anul. Spune că fiica lui vine des aici, fiindcă medicul i-a zis că aerul sărat i-ar face bine la plămâni. «Eu n-aș coborî niciodată fără pulover», adaugă el.',
        translation:
          'O senhor, que se chama Pop, explica que seria bom ter uma jaqueta, porque lá embaixo fazem só uns doze graus o ano todo. Diz que a filha dele vem aqui com frequência, porque o médico lhe disse que o ar salgado faria bem aos pulmões dela. «Eu nunca desceria sem pulôver», acrescenta.',
        choices: [
          { text: 'Linu râde: «Mie mi-ar plăcea și mai frig!»', translation: 'Linu ri: «Eu gostaria de ainda mais frio!»', next: 'galerie' },
          {
            text: 'Înțelege că jos ar fi foarte cald.',
            translation: 'Entende que lá embaixo estaria muito quente.',
            wrong:
              'O senhor disse que embaixo há «doar vreo douăsprezece grade tot anul» = só uns doze graus o ano todo, e que ele «n-ar coborî niciodată fără pulover» = nunca desceria sem pulôver. Lá dentro é frio.',
          },
        ],
      },
      galerie: {
        emoji: '⛏️',
        text: 'Linu merge printr-un tunel lung, săpat direct în sare. Pereții sunt cenușii, cu dungi albe, și ar fi sărați dacă i-ai gusta. La capăt se deschide o sală uriașă, cu o roată panoramică luminată. Un indicator arată că mai jos, într-o altă mină, e un lac subteran.',
        translation:
          'Linu anda por um túnel longo, escavado direto no sal. As paredes são cinzentas, com listras brancas, e seriam salgadas se você as provasse. No fim, abre-se um salão enorme, com uma roda-gigante iluminada. Uma placa indica que mais abaixo, numa outra mina, há um lago subterrâneo.',
        choices: [
          { text: 'Urcă mai întâi în roata panoramică.', translation: 'Sobe primeiro na roda-gigante.', next: 'roata' },
          { text: 'Coboară direct spre lac.', translation: 'Desce direto para o lago.', next: 'lac' },
        ],
      },
      roata: {
        emoji: '🎡',
        text: 'Angajatul de la roată îi spune politicos: «V-aș ruga să nu vă ridicați în picioare în cabină.» Din vârful roții, Linu vede toată sala: pereții de sare, oamenii mici ca furnicile și, sus de tot, tavanul care se pierde în întuneric. Se gândește că bunicul lui n-ar crede niciodată că există un munte gol pe dinăuntru.',
        translation:
          'O funcionário da roda-gigante diz educadamente: «Eu lhe pediria que não ficasse de pé na cabine.» Do alto da roda, Linu vê o salão inteiro: as paredes de sal, as pessoas pequenas como formigas e, lá no alto, o teto que se perde na escuridão. Ele pensa que o avô dele nunca acreditaria que existe uma montanha oca por dentro.',
        choices: [{ text: 'Coboară apoi la lac.', translation: 'Depois desce até o lago.', next: 'lac' }],
      },
      lac: {
        emoji: '🛶',
        text: 'Jos, pe malul lacului, se închiriază bărci. Lângă Linu, o turistă din Brazilia îi spune în portugheză că i-ar plăcea să se plimbe cu barca, dar că îi e frică să vâslească singură. Casiera nu înțelege nimic și se uită la Linu: «Ați putea să-mi spuneți ce vrea doamna?»',
        translation:
          'Lá embaixo, na margem do lago, alugam-se barcos. Ao lado do Linu, uma turista do Brasil lhe diz em português que gostaria de passear de barco, mas que tem medo de remar sozinha. A caixa não entende nada e olha para o Linu: «O senhor poderia me dizer o que a senhora quer?»',
        choices: [
          {
            text: '«Doamna spune că ar vrea să se plimbe cu barca, dar că îi e frică să vâslească singură.»',
            translation: '«A senhora diz que gostaria de passear de barco, mas que tem medo de remar sozinha.»',
            next: 'barca',
          },
          {
            text: '«Doamna spune că ar vrea să înoate în lac.»',
            translation: '«A senhora diz que gostaria de nadar no lago.»',
            wrong:
              'A turista não falou em nadar. Ela disse que gostaria de passear de barco, mas tem medo de remar sozinha. No discurso indireto: «spune că ar vrea să se plimbe cu barca».',
          },
          { text: '«Îmi pare rău, n-aș vrea să mă amestec.»', translation: '«Sinto muito, eu não gostaria de me intrometer.»', next: 'final_singur' },
        ],
      },
      final_singur: {
        emoji: '🚶',
        text: 'Linu se plimbă singur pe malul lacului, iar turista pleacă tristă. Barca goală plutește pe apa neagră. Mai târziu, la ieșire, Linu se gândește că ar fi putut să-i facă cuiva ziua mai frumoasă.',
        translation:
          'Linu passeia sozinho pela margem do lago, e a turista vai embora triste. O barco vazio flutua na água escura. Mais tarde, na saída, Linu pensa que poderia ter deixado o dia de alguém mais bonito.',
        ending: {
          tone: 'neutro',
          title: 'Passeio solitário',
          message: 'A mina é linda, mas o Linu perdeu a chance de ajudar alguém — e de treinar o discurso indireto.',
        },
      },
      barca: {
        emoji: '🚣',
        text: 'Casiera zâmbește: «Dacă ați merge împreună, ar fi un singur bilet.» Linu vâslește, iar turista, Ana, îi povestește că n-a mai văzut niciodată o mină de sare. La un moment dat, ea îl roagă: «Ai putea să vâslești mai încet? Aș vrea să fac o poză cu luminile reflectate în apă.»',
        translation:
          'A caixa sorri: «Se vocês fossem juntos, seria um ingresso só.» Linu rema, e a turista, Ana, conta que nunca tinha visto uma mina de sal. Em certo momento, ela pede: «Você poderia remar mais devagar? Eu gostaria de tirar uma foto das luzes refletidas na água.»',
        choices: [
          { text: 'Vâslește încet și ține barca pe loc.', translation: 'Rema devagar e deixa o barco parado.', next: 'final_bom' },
          {
            text: 'Vâslește mai repede, ca să ajungă primii la mal.',
            translation: 'Rema mais rápido, para chegarem primeiro à margem.',
            next: 'final_stropit',
          },
        ],
      },
      final_stropit: {
        emoji: '💦',
        text: 'Barca sare înainte și apa sărată îi stropește pe amândoi. Poza Anei iese mișcată, cu o aripă de pinguin în colț. Ana râde totuși: «Dacă aș fi știut, aș fi luat o umbrelă!»',
        translation:
          'O barco dá um tranco para a frente e a água salgada respinga nos dois. A foto da Ana sai tremida, com uma asa de pinguim no canto. Mesmo assim, Ana ri: «Se eu soubesse, teria trazido um guarda-chuva!»',
        ending: {
          tone: 'neutro',
          title: 'Foto molhada',
          message: 'Ana pediu «ai putea să vâslești mai încet?» — um pedido educado no condicional para remar MAIS DEVAGAR.',
        },
      },
      final_bom: {
        emoji: '📸',
        text: 'Linu ține barca nemișcată, iar Ana face o poză superbă: luminile par stele sub apă. La ieșire, domnul Pop îi întreabă cum a fost. Linu îi spune că Ana ar vrea să revină la anul cu toată familia.',
        translation:
          'Linu mantém o barco imóvel, e a Ana tira uma foto maravilhosa: as luzes parecem estrelas debaixo d’água. Na saída, o senhor Pop pergunta como foi. Linu conta que a Ana gostaria de voltar no ano que vem com a família toda.',
        ending: {
          tone: 'bom',
          title: 'Estrelas debaixo da terra',
          message: 'O Linu fez pedidos educados, traduziu direitinho em discurso indireto e ganhou uma amiga na Salina Turda.',
        },
      },
    },
  },
  {
    id: 'ro-h20',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Un apartament cu vitralii la Oradea',
    emoji: '🪟',
    summary: 'O Linu começa a trabalhar em Oradea e tenta alugar um apartamento num prédio Art Nouveau.',
    cultural_context:
      'Oradea tem um dos maiores conjuntos de prédios Art Nouveau (Secession) da Romênia, a maioria do início do século XX. O Palácio Vulturul Negru (Águia Negra), de 1908, tem uma galeria coberta por um teto de vitral.',
    start: 'start',
    glossary: [
      ['a închiria', 'alugar'],
      ['proprietar', 'proprietário'],
      ['vitraliu', 'vitral'],
      ['fier forjat', 'ferro forjado'],
      ['sobă de teracotă', 'fogão/aquecedor de cerâmica'],
      ['calorifer', 'aquecedor (radiador)'],
      ['aș dori', 'eu gostaria'],
      ['v-ar deranja dacă…', 'o(a) incomodaria se…'],
    ],
    nodes: {
      start: {
        emoji: '📚',
        text: 'Linu s-a mutat la Oradea, unde lucrează acum la biblioteca orașului. Colega lui, Ilona, îi arată un anunț: un apartament într-o clădire veche de pe strada Republicii, cu vitralii și balcoane de fier forjat. Ar fi perfect, dar Linu n-a mai închiriat niciodată o locuință și e emoționat.',
        translation:
          'Linu se mudou para Oradea, onde agora trabalha na biblioteca da cidade. A colega dele, Ilona, mostra um anúncio: um apartamento num prédio antigo da rua Republicii, com vitrais e sacadas de ferro forjado. Seria perfeito, mas Linu nunca alugou uma moradia e está nervoso.',
        choices: [
          { text: '«Ilona, ai putea să suni tu în locul meu?»', translation: '«Ilona, você poderia ligar no meu lugar?»', next: 'ilona' },
          { text: 'Sună chiar el la proprietar.', translation: 'Ele mesmo liga para o proprietário.', next: 'telefon' },
        ],
      },
      ilona: {
        emoji: '☕',
        text: 'Ilona râde. «Aș putea, dar tu o să locuiești acolo, nu eu. Ți-aș da totuși un sfat: începe cu „aș dori” și vorbește politicos, proprietarii de aici sunt mândri de clădirile lor.» Linu respiră adânc și ia telefonul.',
        translation:
          'Ilona ri. «Eu poderia, mas é você que vai morar lá, não eu. Mesmo assim eu te daria um conselho: comece com „eu gostaria” e fale com educação, os proprietários daqui têm orgulho dos seus prédios.» Linu respira fundo e pega o telefone.',
        choices: [{ text: 'Sună la proprietar.', translation: 'Liga para o proprietário.', next: 'telefon' }],
      },
      telefon: {
        emoji: '📞',
        text: 'Răspunde domnul Farkas, proprietarul. «Bună ziua, aș dori să vă întreb despre apartamentul din anunț», spune Linu. Domnul Farkas îi explică: chiria ar fi o mie opt sute de lei pe lună, iar clădirea e monument istoric, deci nimeni n-ar avea voie să schimbe ferestrele sau ușile.',
        translation:
          'Atende o senhor Farkas, o proprietário. «Bom dia, eu gostaria de lhe perguntar sobre o apartamento do anúncio», diz Linu. O senhor Farkas explica: o aluguel seria mil e oitocentos lei por mês, e o prédio é monumento histórico, então ninguém teria permissão para trocar as janelas ou as portas.',
        choices: [
          { text: '«Ați putea să mi-l arătați sâmbătă?»', translation: '«O senhor poderia mostrá-lo para mim no sábado?»', next: 'vizita' },
          {
            text: '«Perfect! Aș vrea să pun ferestre noi, de plastic.»',
            translation: '«Perfeito! Eu gostaria de colocar janelas novas, de plástico.»',
            wrong:
              'O proprietário disse que o prédio é monumento histórico e que «nimeni n-ar avea voie să schimbe ferestrele» = ninguém teria permissão de trocar as janelas.',
          },
        ],
      },
      vizita: {
        emoji: '🏛️',
        text: 'Sâmbătă, Linu urcă o scară cu balustradă de fier forjat, în formă de flori. Apartamentul are tavane înalte, parchet vechi și o sobă mare de teracotă verde. Domnul Farkas spune că iarna ar trebui să faci focul dimineața și seara, pentru că în apartament nu sunt calorifere.',
        translation:
          'No sábado, Linu sobe uma escada com corrimão de ferro forjado em forma de flores. O apartamento tem pé-direito alto, taco antigo e um grande aquecedor de cerâmica verde. O senhor Farkas diz que no inverno seria preciso acender o fogo de manhã e à noite, porque no apartamento não há radiadores.',
        choices: [
          {
            text: '«V-ar deranja dacă aș face câteva poze, ca să i le arăt unei prietene?»',
            translation: '«O senhor se incomodaria se eu tirasse algumas fotos, para mostrá-las a uma amiga?»',
            next: 'poze',
          },
          {
            text: '«Mi-ar plăcea mai mult ceva modern, cu calorifere.»',
            translation: '«Eu gostaria mais de algo moderno, com radiadores.»',
            next: 'final_bloc',
          },
        ],
      },
      final_bloc: {
        emoji: '🏢',
        text: 'Linu închiriază până la urmă o garsonieră într-un bloc nou, la marginea orașului. E caldă și comodă, dar pereții sunt albi și goi. Uneori, după lucru, se plimbă pe strada Republicii și se uită lung la vitraliile colorate.',
        translation:
          'No fim, Linu aluga uma quitinete num prédio novo, na periferia da cidade. É quente e confortável, mas as paredes são brancas e vazias. Às vezes, depois do trabalho, ele passeia pela rua Republicii e fica olhando os vitrais coloridos.',
        ending: {
          tone: 'neutro',
          title: 'Conforto sem charme',
          message: 'O Linu escolheu o prático. Os prédios Art Nouveau de Oradea continuam ali, esperando por ele.',
        },
      },
      poze: {
        emoji: '📱',
        text: 'Domnul Farkas acceptă zâmbind. Linu îi trimite pozele Ilonei, care îl sună imediat: «Ce frumos! Dar ce ți-a zis de sobă? N-am înțeles din mesajul tău.»',
        translation:
          'O senhor Farkas aceita sorrindo. Linu manda as fotos para a Ilona, que liga na hora: «Que lindo! Mas o que ele te disse sobre o aquecedor? Não entendi pela sua mensagem.»',
        choices: [
          {
            text: '«Mi-a zis că iarna ar trebui să fac focul dimineața și seara, pentru că nu sunt calorifere.»',
            translation: '«Ele me disse que no inverno eu teria que acender o fogo de manhã e à noite, porque não há radiadores.»',
            next: 'decizie',
          },
          {
            text: '«Mi-a zis că soba e doar decorativă și că n-aș folosi-o niciodată.»',
            translation: '«Ele me disse que o aquecedor é só decorativo e que eu nunca o usaria.»',
            wrong:
              'O proprietário disse que «iarna ar trebui să faci focul dimineața și seara» = no inverno seria preciso acender o fogo de manhã e à noite, porque não há radiadores. O aquecedor funciona de verdade.',
          },
        ],
      },
      decizie: {
        emoji: '🤔',
        text: 'Ilona îi spune că, dacă ar fi în locul lui, ar lua apartamentul fără să stea pe gânduri. Domnul Farkas mai are o singură condiție: ar vrea un chiriaș care să aibă grijă de vitralii. Linu se uită la lumina colorată care cade pe podea.',
        translation:
          'Ilona diz que, se estivesse no lugar dele, pegaria o apartamento sem pensar duas vezes. O senhor Farkas tem só mais uma condição: gostaria de um inquilino que cuidasse dos vitrais. Linu olha para a luz colorida que cai no chão.',
        choices: [
          {
            text: '«Vă promit că aș avea grijă de ele ca de ochii din cap!»',
            translation: '«Eu lhe prometo que cuidaria deles como da menina dos meus olhos!»',
            next: 'final_bom',
          },
          { text: '«Aș vrea să mă mai gândesc până mâine.»', translation: '«Eu gostaria de pensar mais até amanhã.»', next: 'final_asteptare' },
        ],
      },
      final_asteptare: {
        emoji: '⏳',
        text: 'A doua zi, Linu îl sună pe domnul Farkas. Acesta îi spune politicos că ar fi fost bucuros să i-l dea lui, dar că a închiriat deja apartamentul unei studente la arte. Linu oftează și deschide din nou pagina cu anunțuri.',
        translation:
          'No dia seguinte, Linu liga para o senhor Farkas. Ele diz educadamente que teria ficado feliz em alugá-lo para ele, mas que já alugou o apartamento para uma estudante de artes. Linu suspira e abre de novo a página de anúncios.',
        ending: {
          tone: 'neutro',
          title: 'Chegou tarde',
          message: 'Apartamentos bonitos no centro de Oradea não esperam muito. Da próxima vez, o Linu vai decidir mais rápido.',
        },
      },
      final_bom: {
        emoji: '🔑',
        text: 'Domnul Farkas râde și îi dă cheile. În prima seară, Linu face focul în soba verde și privește cum lumina apusului trece prin vitralii și desenează flori pe perete. Apoi îi scrie Ilonei că ar trebui să vină la el la un ceai, sâmbăta viitoare.',
        translation:
          'O senhor Farkas ri e lhe entrega as chaves. Na primeira noite, Linu acende o fogo no aquecedor verde e vê a luz do pôr do sol passar pelos vitrais e desenhar flores na parede. Depois escreve para a Ilona que ela deveria vir tomar um chá na casa dele no sábado seguinte.',
        ending: {
          tone: 'bom',
          title: 'Casa Art Nouveau',
          message: 'O Linu fez pedidos educados no condicional, repassou direitinho o que ouviu e ganhou um lar cheio de luz colorida em Oradea.',
        },
      },
    },
  },
  {
    id: 'ro-h21',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Pe Transfăgărășan',
    emoji: '🏔️',
    summary: 'O Linu sonha subir a estrada Transfăgărășan até o lago Bâlea, mas não tem carro.',
    cultural_context:
      'A Transfăgărășan atravessa os Montes Făgăraș e foi construída entre 1970 e 1974. Por causa da neve, o trecho mais alto, perto do lago Bâlea, costuma ficar aberto só no verão e no começo do outono; no inverno, dá para chegar ao lago de teleférico.',
    start: 'start',
    glossary: [
      ['gazdă', 'anfitriã, dona da pensão'],
      ['vecin', 'vizinho'],
      ['furtună', 'tempestade'],
      ['serpentine', 'curvas sinuosas'],
      ['cascadă', 'cachoeira'],
      ['dacă aș fi în locul tău', 'se eu fosse você'],
      ['ar fi bine să…', 'seria bom…'],
      ['telecabină', 'teleférico'],
    ],
    nodes: {
      start: {
        emoji: '🌄',
        text: 'E iulie și Linu stă la o pensiune la poalele Munților Făgăraș. De mult visează să urce pe Transfăgărășan până la Lacul Bâlea. Problema e că n-are mașină. La micul dejun, se gândește ce ar putea face.',
        translation:
          'É julho e Linu está numa pousada no sopé dos Montes Făgăraș. Há muito tempo ele sonha subir a Transfăgărășan até o lago Bâlea. O problema é que ele não tem carro. No café da manhã, ele pensa no que poderia fazer.',
        choices: [
          { text: 'O întreabă pe gazdă ce i-ar recomanda.', translation: 'Pergunta à anfitriã o que ela recomendaria.', next: 'sfat' },
          { text: 'Pornește singur, pe jos.', translation: 'Sai sozinho, a pé.', next: 'pe_jos' },
        ],
      },
      sfat: {
        emoji: '📻',
        text: 'Doamna Maria, gazda, spune că vecinul ei, domnul Radu, urcă azi la lac cu mașina și că l-ar putea lua și pe Linu. Mai spune că la radio au anunțat furtună după-amiază, deci ar fi bine să plece devreme. «Dacă aș fi în locul tău, aș pleca imediat după cafea», adaugă ea.',
        translation:
          'A dona Maria, a anfitriã, diz que o vizinho dela, o senhor Radu, sobe hoje até o lago de carro e que poderia levar Linu também. Diz ainda que no rádio anunciaram tempestade à tarde, então seria bom sair cedo. «Se eu fosse você, sairia logo depois do café», acrescenta ela.',
        choices: [
          { text: '«Ați putea să-l sunați pe domnul Radu, vă rog?»', translation: '«A senhora poderia ligar para o senhor Radu, por favor?»', next: 'masina' },
          {
            text: '«Perfect, atunci plec liniștit după-amiază.»',
            translation: '«Perfeito, então saio tranquilo à tarde.»',
            wrong:
              'A dona Maria disse que no rádio «au anunțat furtună după-amiază» — anunciaram tempestade À TARDE — e que «ar fi bine să plece devreme», seria bom sair CEDO.',
          },
          { text: '«Aș prefera să merg pe jos.»', translation: '«Eu preferiria ir a pé.»', next: 'pe_jos' },
        ],
      },
      pe_jos: {
        emoji: '🥾',
        text: 'Linu pornește pe jos pe marginea șoselei. După două ore e obosit, iar drumul urcă tot mai abrupt. O mașină veche oprește lângă el. Șoferul, domnul Radu, vecinul gazdei, îl întreabă: «N-ai vrea să urci cu mine?»',
        translation:
          'Linu sai a pé pela beira da estrada. Depois de duas horas está cansado, e a estrada sobe cada vez mais íngreme. Um carro velho para ao lado dele. O motorista, o senhor Radu, vizinho da anfitriã, pergunta: «Você não gostaria de subir comigo?»',
        choices: [{ text: '«Da, v-aș fi foarte recunoscător!»', translation: '«Sim, eu ficaria muito grato ao senhor!»', next: 'masina' }],
      },
      masina: {
        emoji: '🚗',
        text: 'Domnul Radu conduce încet pe serpentine. Îi povestește lui Linu că șoseaua a fost construită în anii ’70 și că iarna e închisă din cauza zăpezii. Lângă o cascadă, încetinește: «Ai vrea să facem o pauză aici sau să mergem direct la lac?»',
        translation:
          'O senhor Radu dirige devagar pelas curvas. Conta a Linu que a estrada foi construída nos anos 70 e que no inverno fica fechada por causa da neve. Perto de uma cachoeira, ele diminui a velocidade: «Você gostaria de fazer uma pausa aqui ou de ir direto ao lago?»',
        choices: [
          { text: '«Aș vrea să văd cascada.»', translation: '«Eu gostaria de ver a cachoeira.»', next: 'cascada' },
          { text: '«Am putea merge direct la lac.»', translation: '«Poderíamos ir direto ao lago.»', next: 'lac' },
        ],
      },
      cascada: {
        emoji: '💦',
        text: 'Cascada Bâlea cade de sus, printre stânci. Linu face poze și ar sta aici toată ziua. Dar domnul Radu se uită la cer: dinspre vârfuri vin nori negri. «Dacă mai stăm mult, ne prinde furtuna sus», spune el.',
        translation:
          'A cachoeira Bâlea cai do alto, entre as rochas. Linu tira fotos e ficaria ali o dia todo. Mas o senhor Radu olha para o céu: dos picos vêm nuvens negras. «Se ficarmos muito tempo, a tempestade nos pega lá em cima», diz ele.',
        choices: [
          { text: '«Aveți dreptate, haideți să plecăm.»', translation: '«O senhor tem razão, vamos embora.»', next: 'lac' },
          { text: '«V-aș ruga să mai stăm puțin.»', translation: '«Eu pediria ao senhor que ficássemos mais um pouco.»', next: 'final_furtuna' },
          {
            text: '«Deci furtuna a trecut deja?»',
            translation: '«Então a tempestade já passou?»',
            wrong:
              'A tempestade ainda não chegou: as nuvens negras estão vindo. «Dacă mai stăm mult, ne prinde furtuna» = SE ficarmos muito, a tempestade nos pega.',
          },
        ],
      },
      final_furtuna: {
        emoji: '⛈️',
        text: 'Peste zece minute începe o ploaie rece, cu tunete. Nu mai pot urca, așa că se întorc încet la pensiune. Doamna Maria îi face un ceai și îi spune că muntele l-ar aștepta și mâine.',
        translation:
          'Dez minutos depois começa uma chuva fria, com trovões. Não dá mais para subir, então eles voltam devagar para a pousada. A dona Maria prepara um chá para ele e diz que a montanha o esperaria amanhã também.',
        ending: {
          tone: 'neutro',
          title: 'A montanha espera',
          message: 'O Linu viu a cachoeira, mas não chegou ao lago. Na montanha, vale ouvir quem avisa sobre o tempo.',
        },
      },
      lac: {
        emoji: '🏞️',
        text: 'La Lacul Bâlea, aerul e rece și apa e limpede între munți. Norii sunt încă departe. Domnul Radu îl întreabă: «Ce ai prefera: un ceai cald la cabană sau o plimbare scurtă în jurul lacului?»',
        translation:
          'No lago Bâlea, o ar está frio e a água é límpida entre as montanhas. As nuvens ainda estão longe. O senhor Radu pergunta: «O que você preferiria: um chá quente no refúgio ou uma caminhada curta em volta do lago?»',
        choices: [
          { text: '«Aș bea cu plăcere un ceai.»', translation: '«Eu tomaria um chá com prazer.»', next: 'final_ceai' },
          { text: '«Mi-ar plăcea să ne plimbăm puțin.»', translation: '«Eu gostaria que caminhássemos um pouco.»', next: 'final_plimbare' },
        ],
      },
      final_ceai: {
        emoji: '🍵',
        text: 'La cabană, Linu își încălzește aripile lângă sobă. Îi spune domnului Radu că ar vrea să revină aici și iarna. Domnul Radu râde: iarna n-ar putea urca cu mașina, ci doar cu telecabina.',
        translation:
          'No refúgio, Linu esquenta as asas perto do fogão. Diz ao senhor Radu que gostaria de voltar ali também no inverno. O senhor Radu ri: no inverno ele não poderia subir de carro, só de teleférico.',
        ending: { tone: 'bom', title: 'Chá nas alturas', message: 'O Linu chegou ao lago Bâlea antes da tempestade e já planeja a próxima visita.' },
      },
      final_plimbare: {
        emoji: '🐐',
        text: 'Pe malul lacului, Linu vede niște capre negre pe o stâncă. Domnul Radu îi spune că ar fi norocos dacă le-ar fotografia de aproape. Linu face o singură poză, clară și perfectă, apoi se întorc la mașină înainte de ploaie.',
        translation:
          'Na margem do lago, Linu vê algumas camurças numa rocha. O senhor Radu diz que ele teria sorte se as fotografasse de perto. Linu tira uma única foto, nítida e perfeita, e depois eles voltam ao carro antes da chuva.',
        ending: {
          tone: 'bom',
          title: 'Encontro na montanha',
          message: 'O Linu saiu cedo, como aconselharam, e voltou com uma foto rara das camurças dos Cárpatos.',
        },
      },
    },
  },
  {
    id: 'ro-h22',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Pelicanii din Deltă',
    emoji: '🦢',
    summary: 'O Linu vira voluntário no Delta do Danúbio e ajuda a contar os ninhos dos pelicanos.',
    cultural_context:
      'O Delta do Danúbio é patrimônio mundial da UNESCO desde 1991 e abriga a maior colônia de pelicanos-brancos da Europa. Muitas partes do delta só são alcançadas de barco.',
    start: 'start',
    glossary: [
      ['a cărei / al cărui', 'cujo / cuja (de quem)'],
      ['vestă de salvare', 'colete salva-vidas'],
      ['binoclu', 'binóculo'],
      ['stuf', 'junco'],
      ['cuib', 'ninho'],
      ['plasă de pescuit', 'rede de pesca'],
      ['pui', 'filhote'],
      ['mal', 'margem (de rio)'],
    ],
    nodes: {
      start: {
        emoji: '🚢',
        text: 'Linu ajunge la Tulcea, orașul care este poarta Deltei Dunării. Acolo îl așteaptă Ioana, o biologă a cărei muncă este să numere păsările din Deltă. «Mâine plecăm cu barca unchiului meu, Vasile», îi spune ea. «Vii cu noi?»',
        translation:
          'Linu chega a Tulcea, a cidade que é a porta do Delta do Danúbio. Lá o espera Ioana, uma bióloga cujo trabalho é contar as aves do Delta. «Amanhã saímos com o barco do meu tio, Vasile», ela lhe diz. «Você vem com a gente?»',
        choices: [
          { text: '«Sigur, vin cu plăcere!»', translation: '«Claro, vou com prazer!»', next: 'barca' },
          { text: '«Prefer să rămân în oraș.»', translation: '«Prefiro ficar na cidade.»', next: 'oras' },
        ],
      },
      oras: {
        emoji: '🐠',
        text: 'Linu rămâne în Tulcea și vizitează un acvariu cu pești din Deltă. Pe un panou citește despre pelicanii albi, ale căror cuiburi sunt numărate în fiecare an de voluntari. Linu se gândește la invitația Ioanei.',
        translation:
          'Linu fica em Tulcea e visita um aquário com peixes do Delta. Num painel ele lê sobre os pelicanos-brancos, cujos ninhos são contados todo ano por voluntários. Linu pensa no convite da Ioana.',
        choices: [
          { text: 'Îi scrie Ioanei că s-a răzgândit.', translation: 'Escreve para a Ioana que mudou de ideia.', next: 'barca' },
          { text: 'Se întoarce la hotel.', translation: 'Volta para o hotel.', next: 'final_oras' },
        ],
      },
      final_oras: {
        emoji: '🏨',
        text: 'Linu se uită la televizor în camera hotelului. A doua zi, Ioana îi trimite poze cu sute de pelicani. «Data viitoare vii cu noi!», îi scrie ea.',
        translation:
          'Linu assiste televisão no quarto do hotel. No dia seguinte, Ioana lhe manda fotos com centenas de pelicanos. «Da próxima vez você vem com a gente!», ela lhe escreve.',
        ending: {
          tone: 'neutro',
          title: 'O delta pelo celular',
          message: 'O Linu viu os pelicanos só em foto. O Delta do Danúbio se conhece de barco. Tente de novo!',
        },
      },
      barca: {
        emoji: '🛶',
        text: 'Dimineața, Vasile îi dă lui Linu o vestă de salvare și un binoclu. «Binoclul este al fiului meu, care studiază la Constanța», spune el. Barca intră pe un canal îngust, pe ale cărui maluri cresc stuf și sălcii. Ioana îl întreabă pe Linu: «Știi al cui e binoclul?»',
        translation:
          'De manhã, Vasile dá ao Linu um colete salva-vidas e um binóculo. «O binóculo é do meu filho, que estuda em Constanța», diz ele. O barco entra num canal estreito, em cujas margens crescem juncos e salgueiros. Ioana pergunta ao Linu: «Você sabe de quem é o binóculo?»',
        choices: [
          { text: '«E al fiului lui Vasile.»', translation: '«É do filho do Vasile.»', next: 'pelicani' },
          {
            text: '«E al Ioanei.»',
            translation: '«É da Ioana.»',
            wrong: 'Vasile disse «Binoclul este al fiului meu» — o binóculo é do filho dele (al fiului = do filho), o rapaz que estuda em Constanța.',
          },
        ],
      },
      pelicani: {
        emoji: '🪺',
        text: 'Pe un lac mare, Linu vede sute de pelicani albi. Ioana îi explică: «Aceasta este cea mai mare colonie de pelicani din Europa. Treaba noastră este să le numărăm cuiburile.» Linu numără atent, dar deodată observă un pui care se zbate într-o plasă de pescuit.',
        translation:
          'Num lago grande, Linu vê centenas de pelicanos brancos. Ioana lhe explica: «Esta é a maior colônia de pelicanos da Europa. Nosso trabalho é contar os ninhos deles.» Linu conta com atenção, mas de repente nota um filhote que se debate numa rede de pesca.',
        choices: [
          { text: 'Îi spune Ioanei ce a văzut.', translation: 'Conta à Ioana o que viu.', next: 'plasa' },
          { text: 'Continuă să numere, ca să nu greșească socoteala.', translation: 'Continua contando, para não errar a conta.', next: 'final_numarat' },
        ],
      },
      final_numarat: {
        emoji: '📋',
        text: 'Linu termină numărătoarea: o mie două sute de cuiburi! Seara însă, Ioana vede în poze puiul prins în plasă. «Păcat, l-am fi putut ajuta», spune ea încet.',
        translation:
          'Linu termina a contagem: mil e duzentos ninhos! À noite, porém, Ioana vê nas fotos o filhote preso na rede. «Que pena, poderíamos tê-lo ajudado», diz ela baixinho.',
        ending: {
          tone: 'neutro',
          title: 'Conta certa, filhote preso',
          message: 'O Linu fez a contagem perfeita, mas deixou passar quem precisava de ajuda. Tente de novo!',
        },
      },
      plasa: {
        emoji: '🕸️',
        text: 'Ioana se uită prin binoclu: «Plasa este a unui pescar care nu respectă regulile rezervației.» Vasile oprește motorul: «Nu ne putem apropia cu barca, ca să nu speriem păsările. Dar tu, Linu, care înoți mai bine decât oricine, poți ajunge la pui fără zgomot.»',
        translation:
          'Ioana olha pelo binóculo: «A rede é de um pescador que não respeita as regras da reserva.» Vasile desliga o motor: «Não podemos nos aproximar com o barco, para não assustar as aves. Mas você, Linu, que nada melhor do que qualquer um, pode chegar ao filhote sem barulho.»',
        choices: [
          { text: 'Linu sare în apă și înoată încet spre pui.', translation: 'Linu pula na água e nada devagar até o filhote.', next: 'salvare' },
          {
            text: 'Linu îi cere lui Vasile să pornească motorul și să meargă repede.',
            translation: 'Linu pede ao Vasile que ligue o motor e vá rápido.',
            wrong:
              'Vasile desligou o motor justamente para não assustar as aves («ca să nu speriem păsările»). Ele sugeriu que o Linu fosse nadando, sem barulho.',
          },
        ],
      },
      salvare: {
        emoji: '🐧',
        text: 'Linu înoată în liniște și taie plasa cu ciocul. Puiul, ale cărui aripi erau prinse, se eliberează și înoată spre mama lui. Vasile strânge plasa, pe care o va duce la paznicii rezervației.',
        translation:
          'Linu nada em silêncio e corta a rede com o bico. O filhote, cujas asas estavam presas, se solta e nada até a mãe. Vasile recolhe a rede, que ele vai levar aos guardas da reserva.',
        choices: [{ text: 'Se întorc la Tulcea.', translation: 'Voltam para Tulcea.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Seara, Ioana scrie în raport numele celui care a salvat puiul: «Linu, voluntar din Antarctica». Vasile îi dă pinguinului cel mai mare pește din captura zilei. «Pentru eroul Deltei!», spune el.',
        translation:
          'À noite, Ioana escreve no relatório o nome de quem salvou o filhote: «Linu, voluntário da Antártida». Vasile dá ao pinguim o maior peixe da pesca do dia. «Para o herói do Delta!», diz ele.',
        ending: { tone: 'bom', title: 'Herói do Delta!', message: 'O Linu contou ninhos, salvou um filhote de pelicano e ganhou o melhor peixe do dia.' },
      },
    },
  },
  {
    id: 'ro-h23',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Scrisoarea din anticariat',
    emoji: '✉️',
    summary: 'Em Iași, o Linu acha uma carta antiga dentro de um livro usado e tenta entregá-la a quem pertence.',
    cultural_context:
      'A Universidade Alexandru Ioan Cuza de Iași, fundada em 1860, é a universidade mais antiga da Romênia moderna. Iași é conhecida como uma cidade de estudantes, livrarias e poetas.',
    start: 'start',
    glossary: [
      ['anticariat', 'sebo (livraria de usados)'],
      ['plic', 'envelope'],
      ['nepoată', 'neta / sobrinha'],
      ['străbunică', 'bisavó'],
      ['a ierta', 'perdoar'],
      ['ceartă', 'briga, discussão'],
      ['căruia', 'a quem (dativo de «care»)'],
    ],
    nodes: {
      start: {
        emoji: '📚',
        text: 'Linu studiază un semestru la Iași, la cea mai veche universitate din România. Într-un anticariat din centru cumpără o carte de poezii. Între pagini găsește o scrisoare veche, pe al cărei plic scrie: «Pentru Mihai, de la sora lui, Elena. 1978».',
        translation:
          'Linu estuda um semestre em Iași, na universidade mais antiga da Romênia. Num sebo do centro ele compra um livro de poesias. Entre as páginas encontra uma carta antiga, em cujo envelope está escrito: «Para Mihai, da irmã dele, Elena. 1978».',
        choices: [
          { text: 'Se întoarce în anticariat să întrebe despre carte.', translation: 'Volta ao sebo para perguntar sobre o livro.', next: 'anticar' },
          { text: 'Păstrează scrisoarea ca suvenir.', translation: 'Guarda a carta como lembrança.', next: 'final_suvenir' },
          {
            text: 'Caută o femeie pe nume Elena, care a primit scrisoarea.',
            translation: 'Procura uma mulher chamada Elena, que recebeu a carta.',
            wrong:
              'O envelope diz «Pentru Mihai, de la sora lui, Elena»: a carta é PARA o Mihai, e vem DA irmã dele (sora lui), a Elena. Quem a recebeu foi o Mihai.',
          },
        ],
      },
      final_suvenir: {
        emoji: '🗃️',
        text: 'Linu pune scrisoarea într-un sertar. Uneori se întreabă cine erau Mihai și Elena, dar nu află niciodată.',
        translation: 'Linu põe a carta numa gaveta. Às vezes se pergunta quem eram Mihai e Elena, mas nunca descobre.',
        ending: {
          tone: 'neutro',
          title: 'Uma história na gaveta',
          message: 'A carta ficou sem destino. Às vezes vale a pena fazer uma pergunta. Tente de novo!',
        },
      },
      anticar: {
        emoji: '🧓',
        text: 'Anticarul, un domn în vârstă, se uită la carte: «Am cumpărat-o luna trecută de la nepoata unui profesor care a murit anul acesta. Profesorul se numea Mihai Popa.» Apoi adaugă: «Nepoata lui locuiește acum în casa bunicului ei, pe strada Lăpușneanu.»',
        translation:
          'O dono do sebo, um senhor de idade, olha o livro: «Comprei-o no mês passado da neta de um professor que morreu este ano. O professor se chamava Mihai Popa.» Depois acrescenta: «A neta dele mora agora na casa do avô dela, na rua Lăpușneanu.»',
        choices: [
          { text: 'Merge la casa profesorului, pe strada Lăpușneanu.', translation: 'Vai à casa do professor, na rua Lăpușneanu.', next: 'casa' },
          {
            text: 'Îi cere anticarului adresa casei lui.',
            translation: 'Pede ao dono do sebo o endereço da casa dele.',
            wrong:
              'O dono do sebo disse que a neta mora «în casa bunicului ei» — na casa do avô DELA, ou seja, do professor Mihai. A casa do dono do sebo não tem nada a ver.',
          },
        ],
      },
      casa: {
        emoji: '🏠',
        text: 'Îi deschide o tânără pe nume Ana. Linu îi explică povestea și îi arată plicul. Ana devine emoționată: «Elena este sora bunicului meu. Locuiește la Suceava, dar ei doi nu mai vorbeau de mulți ani, după o ceartă. Bunicul nu ne-a spus niciodată de ce.»',
        translation:
          'Quem abre é uma jovem chamada Ana. Linu lhe explica a história e mostra o envelope. Ana fica emocionada: «Elena é a irmã do meu avô. Ela mora em Suceava, mas os dois não se falavam havia muitos anos, depois de uma briga. O vovô nunca nos disse por quê.»',
        choices: [
          { text: 'O roagă pe Ana să citească scrisoarea.', translation: 'Pede à Ana que leia a carta.', next: 'scrisoare' },
          { text: 'Îi dă Anei scrisoarea și pleacă.', translation: 'Dá a carta à Ana e vai embora.', next: 'final_plecat' },
        ],
      },
      final_plecat: {
        emoji: '🚪',
        text: 'Ana îi mulțumește lui Linu și închide ușa. Scrisoarea a ajuns acasă, dar Linu nu va afla niciodată ce scria în ea.',
        translation: 'Ana agradece ao Linu e fecha a porta. A carta voltou para casa, mas o Linu nunca vai saber o que estava escrito nela.',
        ending: { tone: 'neutro', title: 'Entregue, mas incompleto', message: 'A carta chegou à família, mas a história ficou pela metade. Tente de novo!' },
      },
      scrisoare: {
        emoji: '📜',
        text: 'Ana citește cu voce tare: «Dragă Mihai, îți trimit cartea mamei, pe care o iubeai atât de mult. Iartă-mă pentru cuvintele mele de la nunta ta. Elena.» Ana ridică privirea: «Deci cartea a fost a străbunicii mele!»',
        translation:
          'Ana lê em voz alta: «Querido Mihai, te mando o livro da mamãe, que você amava tanto. Perdoe-me pelas minhas palavras no seu casamento. Elena.» Ana levanta os olhos: «Então o livro foi da minha bisavó!»',
        choices: [
          {
            text: 'Linu înțelege: cartea a fost a mamei lui Mihai și a Elenei.',
            translation: 'Linu entende: o livro foi da mãe do Mihai e da Elena.',
            next: 'idee',
          },
          {
            text: 'Linu înțelege: cartea a fost a soției lui Mihai.',
            translation: 'Linu entende: o livro foi da esposa do Mihai.',
            wrong:
              'Elena escreveu «îți trimit cartea mamei» — o livro DA MÃE (mamei = da mãe), a mãe dos dois irmãos. Por isso a Ana diz que era da bisavó dela.',
          },
        ],
      },
      idee: {
        emoji: '💡',
        text: 'Linu are o idee: «Hai să-i ducem Elenei cartea și scrisoarea! Poate vrea să știe că fratele ei le-a păstrat.» Ana ezită puțin: «N-am cunoscut-o niciodată pe sora bunicului. Dar Suceava nu e departe…»',
        translation:
          'Linu tem uma ideia: «Vamos levar à Elena o livro e a carta! Talvez ela queira saber que o irmão os guardou.» Ana hesita um pouco: «Nunca conheci a irmã do vovô. Mas Suceava não é longe…»',
        choices: [
          { text: 'Merg împreună la Suceava.', translation: 'Vão juntos a Suceava.', next: 'suceava' },
          { text: 'Îi trimit Elenei cartea prin poștă.', translation: 'Mandam o livro à Elena pelo correio.', next: 'final_posta' },
        ],
      },
      final_posta: {
        emoji: '📮',
        text: 'După o săptămână, Ana primește o carte poștală de la Suceava: «Mulțumesc nepoatei fratelui meu și prietenului ei. Veniți să mă vedeți!» Ana zâmbește, dar Linu s-a întors deja acasă.',
        translation:
          'Depois de uma semana, Ana recebe um cartão-postal de Suceava: «Obrigada à neta do meu irmão e ao amigo dela. Venham me ver!» Ana sorri, mas o Linu já voltou para casa.',
        ending: {
          tone: 'neutro',
          title: 'Resposta pelo correio',
          message: 'A família voltou a se falar, mas o Linu perdeu o reencontro. Quer tentar a viagem a Suceava?',
        },
      },
      suceava: {
        emoji: '🚌',
        text: 'La Suceava, le deschide ușa o doamnă cu părul alb. Când vede cartea mamei ei, Elena începe să plângă: «Fratele meu, căruia i-am scris de atâtea ori, nu mi-a răspuns niciodată. Credeam că nu m-a iertat.» Ana îi spune încet: «A păstrat scrisoarea dumneavoastră toată viața.»',
        translation:
          'Em Suceava, quem abre a porta é uma senhora de cabelos brancos. Quando vê o livro da mãe dela, Elena começa a chorar: «Meu irmão, para quem escrevi tantas vezes, nunca me respondeu. Eu achava que ele não tinha me perdoado.» Ana lhe diz baixinho: «Ele guardou a carta da senhora a vida inteira.»',
        choices: [{ text: 'Linu îi dă Elenei cartea.', translation: 'Linu dá o livro à Elena.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🤝',
        text: 'Elena o îmbrățișează pe Ana, nepoata pe care n-o cunoscuse. Apoi îi dă lui Linu un borcan cu dulceață: «Pentru pinguinul căruia îi datorez această zi.» Ana promite că o va vizita în fiecare lună.',
        translation:
          'Elena abraça Ana, a sobrinha-neta que ela não conhecia. Depois dá ao Linu um pote de doce: «Para o pinguim a quem devo este dia.» Ana promete visitá-la todo mês.',
        ending: { tone: 'bom', title: 'Família reunida!', message: 'Uma carta esquecida num livro usado reaproximou uma família. Belo trabalho, Linu!' },
      },
    },
  },
  {
    id: 'ro-h24',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Festivalul de la Sighișoara',
    emoji: '🏰',
    summary: 'No festival medieval de Sighișoara, o Linu ajuda uma trupe de teatro e acaba no palco.',
    cultural_context:
      'A cidadela de Sighișoara é patrimônio mundial da UNESCO desde 1999 e uma das poucas cidadelas medievais ainda habitadas da Europa. Todo verão ela recebe um festival medieval, com trajes de época, música e teatro de rua.',
    start: 'start',
    glossary: [
      ['cetate', 'cidadela, fortaleza'],
      ['Turnul cu Ceas', 'a Torre do Relógio'],
      ['trupă de teatru', 'trupe de teatro'],
      ['coif', 'elmo'],
      ['coroană', 'coroa'],
      ['șorț', 'avental'],
      ['comoară', 'tesouro'],
      ['replică', 'fala (de uma peça)'],
    ],
    nodes: {
      start: {
        emoji: '🏰',
        text: 'Este vară, iar cetatea Sighișoarei, ale cărei străzi sunt pietruite și înguste, e plină de oameni pentru festivalul medieval. Linu se oprește lângă Turnul cu Ceas. O femeie îmbrăcată ca o regină îl strigă: «Pinguinule! Actorul care trebuia să ne ajute e bolnav. Ne dai o mână de ajutor?»',
        translation:
          'É verão, e a cidadela de Sighișoara, cujas ruas são de pedra e estreitas, está cheia de gente para o festival medieval. Linu para perto da Torre do Relógio. Uma mulher vestida de rainha o chama: «Pinguim! O ator que devia nos ajudar está doente. Você nos dá uma mão?»',
        choices: [
          { text: 'Acceptă să ajute trupa.', translation: 'Aceita ajudar a trupe.', next: 'trupa' },
          { text: 'Mai întâi vrea să urce în Turnul cu Ceas.', translation: 'Primeiro quer subir na Torre do Relógio.', next: 'turn' },
        ],
      },
      turn: {
        emoji: '🕰️',
        text: 'Linu urcă în Turnul cu Ceas, din vârful căruia se vede toată cetatea. Un ghid le arată turiștilor figurinele de lemn ale ceasului: fiecare zi a săptămânii are figurina ei. Jos, în piață, trupa de teatru încă îl caută pe Linu.',
        translation:
          'Linu sobe na Torre do Relógio, de cujo alto se vê toda a cidadela. Um guia mostra aos turistas as figuras de madeira do relógio: cada dia da semana tem a sua figura. Lá embaixo, na praça, a trupe de teatro ainda procura o Linu.',
        choices: [
          { text: 'Coboară repede și caută trupa.', translation: 'Desce rápido e procura a trupe.', next: 'trupa' },
          { text: 'Rămâne în turn până seara.', translation: 'Fica na torre até a noite.', next: 'final_turn' },
        ],
      },
      final_turn: {
        emoji: '🌇',
        text: 'Linu admiră apusul de soare peste acoperișurile colorate. Din piață se aud aplauze: piesa s-a jucat fără el.',
        translation: 'Linu admira o pôr do sol sobre os telhados coloridos. Da praça se ouvem aplausos: a peça foi apresentada sem ele.',
        ending: {
          tone: 'neutro',
          title: 'Vista linda, palco vazio',
          message: 'O Linu viu a cidadela lá de cima, mas perdeu a chance de entrar na festa. Tente de novo!',
        },
      },
      trupa: {
        emoji: '🧺',
        text: 'Regina, care este de fapt directoarea trupei, doamna Rodica, îi dă lui Linu un coș cu costume. «Ascultă bine: coiful e al cavalerului, coroana e a mea, iar șorțul i-l dai bucătarului, tânărul cu mustață.» Lângă Linu așteaptă un cavaler înalt și un tânăr cu mustață.',
        translation:
          'A rainha, que na verdade é a diretora da trupe, dona Rodica, dá ao Linu um cesto com figurinos. «Preste atenção: o elmo é do cavaleiro, a coroa é minha, e o avental você dá ao cozinheiro, o rapaz de bigode.» Ao lado do Linu esperam um cavaleiro alto e um rapaz de bigode.',
        choices: [
          { text: 'Îi dă cavalerului coiful și bucătarului șorțul.', translation: 'Dá ao cavaleiro o elmo e ao cozinheiro o avental.', next: 'costume' },
          {
            text: 'Îi dă cavalerului șorțul și bucătarului coiful.',
            translation: 'Dá ao cavaleiro o avental e ao cozinheiro o elmo.',
            wrong:
              'A Rodica disse «coiful e al cavalerului» (o elmo é DO cavaleiro) e «șorțul i-l dai bucătarului» (o avental você dá AO cozinheiro). Um cavaleiro de avental seria engraçado, mas não é o combinado!',
          },
        ],
      },
      costume: {
        emoji: '🐉',
        text: 'Toți actorii sunt gata. Dar Rodica pare îngrijorată: «Actorul al cărui rol era dragonul nu a venit. Costumul lui e verde, cu o coadă lungă… și ar fi perfect pentru cineva mic.» Toată trupa se uită la Linu.',
        translation:
          'Todos os atores estão prontos. Mas a Rodica parece preocupada: «O ator cujo papel era o dragão não veio. O figurino dele é verde, com um rabo comprido… e seria perfeito para alguém pequeno.» A trupe inteira olha para o Linu.',
        choices: [
          { text: 'Linu îmbracă costumul dragonului.', translation: 'Linu veste o figurino do dragão.', next: 'dragon' },
          { text: 'Linu spune că îi e frică de scenă.', translation: 'Linu diz que tem medo de palco.', next: 'final_public' },
        ],
      },
      final_public: {
        emoji: '👏',
        text: 'Linu se așază în public. Piesa este frumoasă, dar fără dragon, cavalerul nu are cu cine să lupte. Rodica îi zâmbește lui Linu la final: «Poate anul viitor.»',
        translation:
          'Linu se senta na plateia. A peça é bonita, mas sem dragão o cavaleiro não tem com quem lutar. No fim, a Rodica sorri para o Linu: «Quem sabe no ano que vem.»',
        ending: { tone: 'neutro', title: 'Espectador', message: 'O Linu ajudou nos bastidores, mas o dragão ficou faltando. Coragem, tente de novo!' },
      },
      dragon: {
        emoji: '⚔️',
        text: 'Pe scenă, cavalerul ridică sabia în fața dragonului. Linu uită replica. Rodica, a cărei voce se aude doar de lângă scenă, îi șoptește: «Spune-i cavalerului că comoara castelului este a poporului!»',
        translation:
          'No palco, o cavaleiro ergue a espada diante do dragão. Linu esquece a fala. Rodica, cuja voz só se ouve perto do palco, cochicha para ele: «Diga ao cavaleiro que o tesouro do castelo é do povo!»',
        choices: [
          { text: 'Linu strigă: «Comoara castelului este a poporului!»', translation: 'Linu grita: «O tesouro do castelo é do povo!»', next: 'final_bom' },
          {
            text: 'Linu strigă: «Comoara castelului este a cavalerului!»',
            translation: 'Linu grita: «O tesouro do castelo é do cavaleiro!»',
            wrong: 'A Rodica cochichou «comoara castelului este a poporului» — o tesouro é DO POVO (a poporului), não do cavaleiro.',
          },
          { text: 'Linu fuge de pe scenă.', translation: 'Linu foge do palco.', next: 'final_fuga' },
        ],
      },
      final_fuga: {
        emoji: '🏃',
        text: 'Dragonul fuge printre spectatori, iar cavalerul rămâne singur pe scenă, cu sabia în mână. Publicul râde, dar piesa se termină mai devreme.',
        translation:
          'O dragão foge por entre os espectadores, e o cavaleiro fica sozinho no palco, de espada na mão. O público ri, mas a peça termina mais cedo.',
        ending: { tone: 'neutro', title: 'O dragão fugiu!', message: 'O Linu teve medo na hora H. Na próxima, escute a fala que a Rodica sopra!' },
      },
      final_bom: {
        emoji: '🎭',
        text: 'Cavalerul coboară sabia, iar publicul aplaudă. Dragonul, care trebuia să fie învins, devine eroul piesei. La sfârșit, Rodica îi dă lui Linu o coroană mică de carton: «Anul viitor, rolul dragonului este al tău!»',
        translation:
          'O cavaleiro abaixa a espada, e o público aplaude. O dragão, que devia ser derrotado, vira o herói da peça. No fim, a Rodica dá ao Linu uma coroinha de papelão: «No ano que vem, o papel do dragão é seu!»',
        ending: {
          tone: 'bom',
          title: 'Estrela do festival!',
          message: 'O Linu distribuiu os figurinos certos, virou dragão e salvou a peça no festival medieval de Sighișoara.',
        },
      },
    },
  },
  {
    id: 'ro-h25',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Chipul lui Decebal',
    emoji: '🛥️',
    summary:
      'O Linu perde o primeiro barco em Orșova e acaba navegando pelas Cazanele do Danúbio com um velho pescador para ver o rosto de Decebal esculpido na rocha.',
    cultural_context:
      'Nas Cazanele Dunării, o trecho mais estreito do Danúbio nas Portas de Ferro, na fronteira com a Sérvia, fica o rosto do rei dácio Decebal esculpido na rocha: tem cerca de 55 metros de altura, foi feito entre 1994 e 2004 e é considerado a maior escultura em rocha da Europa. Na margem sérvia, ali perto, está a Tabula Traiana, uma placa romana da época do imperador Trajano.',
    start: 'start',
    glossary: [
      ['stâncă', 'rochedo'],
      ['mal', 'margem'],
      ['sculptat', 'esculpido'],
      ['pescar', 'pescador'],
      ['plecase', 'tinha partido'],
      ['deși', 'embora'],
      ['totuși', 'mesmo assim'],
      ['prin urmare', 'portanto'],
    ],
    nodes: {
      start: {
        emoji: '⚓',
        text: 'Linu ajunsese la Orșova cu trenul de noapte și alergase direct spre port. Totuși, prima barcă plecase deja cu zece minute înainte. Pe chei mai rămăseseră două variante: barca mică a unui pescar bătrân, nea Petru, și un vapor mare pentru turiști, care pleca abia la prânz.',
        translation:
          'Linu tinha chegado a Orșova no trem noturno e tinha corrido direto para o porto. Mesmo assim, o primeiro barco já tinha partido dez minutos antes. No cais tinham sobrado duas opções: o barquinho de um velho pescador, o seu Petru, e um navio grande para turistas, que só saía ao meio-dia.',
        choices: [
          { text: 'Merge cu barca mică a lui nea Petru.', translation: 'Vai no barquinho do seu Petru.', next: 'petru' },
          { text: 'Așteaptă vaporul de la prânz.', translation: 'Espera o navio do meio-dia.', next: 'vapor' },
          {
            text: 'Urcă repede în prima barcă, care încă îl aștepta.',
            translation: 'Sobe rápido no primeiro barco, que ainda o esperava.',
            wrong:
              'Releia: «prima barcă plecase deja» — o primeiro barco já tinha partido dez minutos antes. O mais-que-perfeito «plecase» mostra que isso aconteceu antes de o Linu chegar ao porto.',
          },
        ],
      },
      vapor: {
        emoji: '🚢',
        text: 'Linu a stat trei ore pe chei, deși soarele ardea. Când a urcat în sfârșit pe vapor, puntea era deja plină de turiști gălăgioși. Pe chei, nea Petru încă nu plecase și îi făcea cu mâna, zâmbind.',
        translation:
          'Linu ficou três horas no cais, embora o sol estivesse ardendo. Quando finalmente subiu no navio, o convés já estava cheio de turistas barulhentos. No cais, o seu Petru ainda não tinha partido e acenava para ele, sorrindo.',
        choices: [
          { text: 'Rămâne pe vapor.', translation: 'Fica no navio.', next: 'vapor_final' },
          { text: 'Coboară în grabă și merge cu nea Petru.', translation: 'Desce às pressas e vai com o seu Petru.', next: 'petru' },
        ],
      },
      petru: {
        emoji: '🛶',
        text: 'Nea Petru pescuise o viață întreagă în Cazane, prin urmare cunoștea fiecare stâncă. În timp ce barca intra în defileu, i-a povestit lui Linu că aici Dunărea e foarte îngustă și foarte adâncă. Deși vântul bătea tare, pescarul părea complet liniștit.',
        translation:
          'O seu Petru tinha pescado a vida inteira nas Cazane, portanto conhecia cada rochedo. Enquanto o barco entrava no desfiladeiro, contou ao Linu que ali o Danúbio é muito estreito e muito fundo. Embora o vento soprasse forte, o pescador parecia completamente tranquilo.',
        choices: [
          { text: 'Îl întreabă de chipul lui Decebal.', translation: 'Pergunta a ele sobre o rosto de Decebal.', next: 'decebal' },
          {
            text: 'Îi cere să se apropie de stânci, ca să facă poze bune.',
            translation: 'Pede que ele chegue perto dos rochedos, para tirar boas fotos.',
            next: 'aproape',
          },
        ],
      },
      aproape: {
        emoji: '🌊',
        text: 'Nea Petru a clătinat din cap: «Acolo curentul e puternic, iar săptămâna trecută o barcă se lovise de stânci.» Totuși, Linu a insistat, iar pescarul s-a apropiat încet. Valurile au început să legene barca tot mai tare, și lui Linu i s-a făcut rău.',
        translation:
          'O seu Petru balançou a cabeça: «Ali a correnteza é forte, e na semana passada um barco tinha batido nos rochedos.» Mesmo assim, o Linu insistiu, e o pescador se aproximou devagar. As ondas começaram a balançar o barco cada vez mais, e o Linu passou mal.',
        choices: [
          { text: 'Își cere scuze și îl roagă să se îndepărteze.', translation: 'Pede desculpas e pede que ele se afaste.', next: 'decebal' },
          { text: 'Insistă să rămână lângă stânci.', translation: 'Insiste em ficar perto dos rochedos.', next: 'rau' },
        ],
      },
      decebal: {
        emoji: '🗿',
        text: 'Nea Petru a zâmbit: «Până în 1994, aici nu fusese decât o stâncă goală. Oamenii au lucrat zece ani la chipul ăsta.» După o cotitură, Linu l-a văzut: un rege uriaș cu barbă, sculptat direct în munte. Nu mai văzuse niciodată ceva atât de mare făcut de mâna omului.',
        translation:
          'O seu Petru sorriu: «Até 1994, aqui não havia nada além de um rochedo nu. As pessoas trabalharam dez anos neste rosto.» Depois de uma curva, o Linu o viu: um rei gigante de barba, esculpido direto na montanha. Nunca tinha visto nada tão grande feito pela mão humana.',
        choices: [
          { text: 'Îl roagă pe nea Petru să-i povestească despre rege.', translation: 'Pede ao seu Petru que lhe conte sobre o rei.', next: 'poveste' },
          {
            text: 'Crede că statuia stă acolo de pe vremea dacilor.',
            translation: 'Acha que a estátua está ali desde a época dos dácios.',
            wrong:
              'O seu Petru disse que até 1994 ali «nu fusese decât o stâncă goală» — só tinha havido rocha nua. A escultura é moderna, levou dez anos para ser feita.',
          },
        ],
      },
      poveste: {
        emoji: '📜',
        text: 'Nea Petru i-a explicat că Decebal fusese ultimul rege al dacilor și că luptase împotriva romanilor lui Traian. «Nu departe, pe malul sârbesc, romanii lăsaseră o placă de piatră, Tabula Traiana», a adăugat el. Linu s-a uitat de la un mal la altul: de o parte regele învins, de cealaltă amintirea împăratului învingător.',
        translation:
          'O seu Petru explicou que Decebal tinha sido o último rei dos dácios e que tinha lutado contra os romanos de Trajano. «Não muito longe, na margem sérvia, os romanos tinham deixado uma placa de pedra, a Tabula Traiana», acrescentou. O Linu olhou de uma margem para a outra: de um lado o rei vencido, do outro a lembrança do imperador vencedor.',
        choices: [
          { text: 'Îl roagă să continue prin Cazane până la apus.', translation: 'Pede que ele continue pelas Cazane até o pôr do sol.', next: 'apus' },
          {
            text: 'Înțelege că placa de piatră fusese lăsată de daci.',
            translation: 'Entende que a placa de pedra tinha sido deixada pelos dácios.',
            wrong:
              'O seu Petru disse «romanii lăsaseră o placă» — foram os romanos que tinham deixado a placa, não os dácios. Os dácios eram o povo do Decebal, o rei vencido.',
          },
        ],
      },
      apus: {
        emoji: '🌇',
        text: 'Au trecut prin Cazanele Mici chiar când soarele apunea după munți. Linu își notase în caiet tot ce îi povestise nea Petru, ca să nu uite nimic. «Mâine vin iar», i-a promis el pescarului, care a râs: «Te aștept, pinguinule!»',
        translation:
          'Passaram pelas Cazanele Mici bem na hora em que o sol se punha atrás das montanhas. O Linu tinha anotado no caderno tudo o que o seu Petru lhe contara, para não esquecer nada. «Amanhã eu volto», prometeu ao pescador, que riu: «Te espero, pinguim!»',
        ending: {
          tone: 'bom',
          title: 'Frente a frente com um rei',
          message: 'O Linu perdeu o primeiro barco, mas ganhou um guia melhor: viu o rosto de Decebal e ouviu a história dos dácios e dos romanos.',
        },
      },
      rau: {
        emoji: '🤢',
        text: 'Linu a rămas lângă stânci până când i s-a învârtit capul de tot. Prin urmare, nea Petru a trebuit să se întoarcă imediat la Orșova. Linu văzuse chipul lui Decebal doar câteva secunde, și acelea cu ochii pe jumătate închiși.',
        translation:
          'O Linu ficou perto dos rochedos até ficar completamente tonto. Portanto, o seu Petru teve que voltar imediatamente para Orșova. O Linu tinha visto o rosto de Decebal só por alguns segundos, e ainda com os olhos meio fechados.',
        ending: {
          tone: 'neutro',
          title: 'Enjoo no Danúbio',
          message: 'Teimar contra a correnteza não vale a pena. Da próxima vez, o Linu vai ouvir quem conhece o rio.',
        },
      },
      vapor_final: {
        emoji: '📸',
        text: 'Vaporul a trecut prin fața lui Decebal fără să se oprească. Linu a făcut câteva poze printre capetele turiștilor, însă n-a înțeles aproape nimic din povestea regelui. Seara, a citit pe telefon tot ce pierduse și a regretat că nu plecase cu nea Petru.',
        translation:
          'O navio passou diante de Decebal sem parar. O Linu tirou algumas fotos entre as cabeças dos turistas, mas não entendeu quase nada da história do rei. À noite, leu no celular tudo o que tinha perdido e se arrependeu de não ter ido com o seu Petru.',
        ending: {
          tone: 'neutro',
          title: 'Visto de longe',
          message: 'O Linu viu o rosto de Decebal, mas só de passagem. Às vezes o barquinho do pescador conta mais do que o navio grande.',
        },
      },
    },
  },
  {
    id: 'ro-h26',
    level: 'B2.1',
    cefr: 'B2',
    title: 'În Peștera Urșilor',
    emoji: '🐻',
    summary: 'O Linu visita a Caverna dos Ursos, nos Montes Apuseni, descobre como ela foi encontrada e quase se perde do grupo no escuro.',
    cultural_context:
      'A Peștera Urșilor (Caverna dos Ursos), perto da aldeia de Chișcău, no condado de Bihor, nos Montes Apuseni, foi descoberta em 1975, quando uma explosão numa pedreira de mármore abriu a sua entrada. Lá dentro foram encontrados muitos ossos de ursos-das-cavernas, uma espécie extinta há milhares de anos.',
    start: 'start',
    glossary: [
      ['peșteră', 'caverna'],
      ['stalactită', 'estalactite'],
      ['os', 'osso'],
      ['carieră', 'pedreira'],
      ['potecă', 'trilha'],
      ['se stinseseră', 'tinham se apagado'],
      ['deși', 'embora'],
      ['în schimb', 'em compensação'],
    ],
    nodes: {
      start: {
        emoji: '⛰️',
        text: 'Linu citise despre Peștera Urșilor încă de acasă, într-o carte despre Munții Apuseni. Ajuns în satul Chișcău, a observat că toți turiștii purtau geci groase, deși afară era foarte cald. Ghidul, domnul Mihai, le explica tuturor că înăuntru e frig tot anul.',
        translation:
          'O Linu já tinha lido sobre a Caverna dos Ursos em casa, num livro sobre os Montes Apuseni. Ao chegar à aldeia de Chișcău, reparou que todos os turistas usavam casacos grossos, embora lá fora fizesse muito calor. O guia, o senhor Mihai, explicava a todos que lá dentro faz frio o ano inteiro.',
        choices: [
          { text: 'Cumpără o geacă de la chioșc.', translation: 'Compra um casaco no quiosque.', next: 'geaca' },
          {
            text: 'Intră așa cum e: e pinguin, nu-i e frică de frig.',
            translation: 'Entra do jeito que está: é pinguim, não tem medo de frio.',
            next: 'fara_geaca',
          },
          {
            text: 'Crede că peștera e caldă, fiindcă afară e cald.',
            translation: 'Acha que a caverna é quente, já que lá fora está calor.',
            wrong:
              'O texto diz que os turistas usavam casacos «deși afară era foarte cald» — embora lá fora fizesse calor. O guia explicou que lá dentro faz frio o ano inteiro.',
          },
        ],
      },
      geaca: {
        emoji: '🧥',
        text: 'Cu geaca nouă pe umeri, Linu s-a alăturat grupului. Domnul Mihai a povestit că peștera fusese descoperită în 1975, după ce muncitorii dintr-o carieră de marmură aruncaseră în aer o stâncă. În spatele pietrei se ascunsese, timp de mii de ani, o lume întreagă de stalactite.',
        translation:
          'Com o casaco novo nos ombros, o Linu se juntou ao grupo. O senhor Mihai contou que a caverna tinha sido descoberta em 1975, depois que os operários de uma pedreira de mármore tinham explodido um rochedo. Atrás da pedra tinha ficado escondido, por milhares de anos, um mundo inteiro de estalactites.',
        choices: [
          { text: 'Întreabă de ce se numește «a Urșilor».', translation: 'Pergunta por que ela se chama «dos Ursos».', next: 'ursi' },
          { text: 'Rămâne în urmă ca să privească stalactitele.', translation: 'Fica para trás para olhar as estalactites.', next: 'in_urma' },
        ],
      },
      fara_geaca: {
        emoji: '🐧',
        text: 'Domnul Mihai a râs: «Un pinguin nu are nevoie de geacă, prin urmare tu ești singurul turist fericit azi!» Ceilalți tremurau de frig, în schimb Linu se simțea ca acasă. A pășit primul în peșteră, chiar lângă ghid.',
        translation:
          'O senhor Mihai riu: «Um pinguim não precisa de casaco, portanto você é o único turista feliz hoje!» Os outros tremiam de frio; em compensação, o Linu se sentia em casa. Entrou primeiro na caverna, bem ao lado do guia.',
        choices: [
          { text: 'Îl întreabă pe ghid despre urși.', translation: 'Pergunta ao guia sobre os ursos.', next: 'ursi' },
          { text: 'Se oprește să atingă o stalactită.', translation: 'Para para tocar numa estalactite.', next: 'atinge' },
        ],
      },
      atinge: {
        emoji: '✋',
        text: 'Domnul Mihai l-a oprit blând: «Nu atinge! Stalactitele cresc foarte încet, iar grăsimea de pe mâini le poate opri creșterea.» Linu s-a rușinat, pentru că nu știuse asta. Totuși, ghidul i-a zâmbit și l-a luat cu el mai departe.',
        translation:
          'O senhor Mihai o deteve com gentileza: «Não toque! As estalactites crescem muito devagar, e a gordura das mãos pode parar o crescimento delas.» O Linu ficou envergonhado, porque não sabia disso. Mesmo assim, o guia sorriu para ele e o levou adiante.',
        choices: [
          { text: 'Îi mulțumește și merge cu grupul spre sala urșilor.', translation: 'Agradece e vai com o grupo para a sala dos ursos.', next: 'ursi' },
        ],
      },
      ursi: {
        emoji: '🦴',
        text: 'Ghidul i-a condus într-o sală mare, unde se vedeau oase vechi și un schelet întreg. «Aici trăiseră urșii de peșteră, o specie care a dispărut de mii de ani», a spus el. «Veneau să hiberneze, iar unii nu mai ieșiseră niciodată.»',
        translation:
          'O guia os levou a uma sala grande, onde se viam ossos antigos e um esqueleto inteiro. «Aqui tinham vivido os ursos-das-cavernas, uma espécie que desapareceu há milhares de anos», disse ele. «Vinham hibernar, e alguns nunca mais tinham saído.»',
        choices: [
          { text: 'Urmează grupul spre ieșire, fascinat.', translation: 'Segue o grupo em direção à saída, fascinado.', next: 'final_bom' },
          { text: 'Rămâne singur să mai privească scheletul.', translation: 'Fica sozinho para olhar mais o esqueleto.', next: 'in_urma' },
          {
            text: 'Se teme că urșii încă mai hibernează acolo iarna.',
            translation: 'Tem medo de que os ursos ainda hibernem ali no inverno.',
            wrong:
              'O guia disse que os ursos «trăiseră» ali (tinham vivido) e que são «o specie care a dispărut de mii de ani» — uma espécie extinta há milhares de anos. Não há mais ursos-das-cavernas.',
          },
        ],
      },
      in_urma: {
        emoji: '🔦',
        text: 'Linu s-a oprit în fața unor stalactite care semănau cu tuburile unei orgi. Când s-a întors, grupul plecase deja și luminile din sala aceea se stinseseră. Deși îi bătea inima tare, și-a amintit că ghidul le spusese să nu părăsească niciodată poteca.',
        translation:
          'O Linu parou diante de estalactites que pareciam os tubos de um órgão. Quando se virou, o grupo já tinha ido embora e as luzes daquela sala tinham se apagado. Embora o coração batesse forte, lembrou que o guia tinha dito para nunca sair da trilha.',
        choices: [
          { text: 'Rămâne pe potecă și strigă după ajutor.', translation: 'Fica na trilha e grita por ajuda.', next: 'salvat' },
          { text: 'Pornește singur prin întuneric, pe o scurtătură.', translation: 'Sai sozinho pelo escuro, por um atalho.', next: 'ratacit' },
        ],
      },
      salvat: {
        emoji: '💡',
        text: 'După câteva minute, Linu a văzut lumina unei lanterne. Domnul Mihai observase că lipsea cineva și se întorsese după el. «Bravo că ai rămas pe potecă», i-a spus ghidul, iar Linu a terminat vizita alături de grup.',
        translation:
          'Depois de alguns minutos, o Linu viu a luz de uma lanterna. O senhor Mihai tinha percebido que faltava alguém e tinha voltado para buscá-lo. «Muito bem que você ficou na trilha», disse o guia, e o Linu terminou a visita junto com o grupo.',
        ending: {
          tone: 'bom',
          title: 'Calma no escuro',
          message: 'O Linu se distraiu, mas lembrou da regra do guia e ficou na trilha. Assim foi encontrado rapidinho.',
        },
      },
      ratacit: {
        emoji: '😳',
        text: 'Linu a mers câțiva pași prin întuneric și a alunecat pe o piatră umedă. Nu se lovise rău, însă își pierduse complet orientarea. Când ghidul l-a găsit, vizita se terminase deja, iar Linu a ieșit afară rușinat și plin de noroi.',
        translation:
          'O Linu deu alguns passos no escuro e escorregou numa pedra úmida. Não tinha se machucado muito, mas tinha perdido completamente a orientação. Quando o guia o encontrou, a visita já tinha terminado, e o Linu saiu envergonhado e cheio de lama.',
        ending: { tone: 'neutro', title: 'Atalho no escuro', message: 'Numa caverna, não existe atalho. O Linu saiu bem, mas perdeu o final da visita.' },
      },
      final_bom: {
        emoji: '🎉',
        text: 'La ieșire, Linu era încântat. Aflase într-o oră mai multe decât citise în toată cartea de acasă. Și-a cumpărat o cană cu un urs de peșteră desenat pe ea, ca amintire din Apuseni.',
        translation:
          'Na saída, o Linu estava encantado. Tinha aprendido em uma hora mais do que tinha lido no livro inteiro em casa. Comprou uma caneca com um urso-das-cavernas desenhado, como lembrança dos Apuseni.',
        ending: {
          tone: 'bom',
          title: 'Na toca dos ursos',
          message: 'O Linu ouviu o guia, respeitou a caverna e descobriu a história dos ursos-das-cavernas dos Apuseni.',
        },
      },
    },
  },
  {
    id: 'ro-h27',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Un articol pentru Craiova',
    emoji: '📰',
    summary: 'No primeiro dia num jornal de Craiova, o Linu precisa escrever até as três da tarde uma matéria sobre o Parque Nicolae Romanescu.',
    cultural_context:
      'Craiova é a maior cidade da Oltênia, no sudoeste da Romênia. O seu Parque Nicolae Romanescu, com um grande lago e uma ponte suspensa, foi projetado pelo paisagista francês Édouard Redont e inaugurado no início do século XX.',
    start: 'start',
    glossary: [
      ['redacție', 'redação'],
      ['articol', 'artigo, matéria'],
      ['a preda', 'entregar'],
      ['pod suspendat', 'ponte suspensa'],
      ['lucrase', 'tinha trabalhado'],
      ['deși', 'embora'],
      ['prin urmare', 'portanto'],
      ['în schimb', 'em compensação'],
    ],
    nodes: {
      start: {
        emoji: '🏢',
        text: 'Linu se mutase la Craiova de o săptămână și își găsise de lucru la un ziar local. În prima zi a ajuns la redacție cu o jumătate de oră mai devreme, deși nu dormise aproape deloc de emoție. Șefa, doamna Elena, i-a dat imediat prima sarcină: un articol scurt despre Parcul Romanescu, gata până la ora trei.',
        translation:
          'O Linu tinha se mudado para Craiova havia uma semana e tinha arranjado trabalho num jornal local. No primeiro dia chegou à redação meia hora mais cedo, embora quase não tivesse dormido de emoção. A chefe, a dona Elena, lhe deu na hora a primeira tarefa: uma matéria curta sobre o Parque Romanescu, pronta até as três.',
        choices: [
          { text: 'Merge imediat în parc să vorbească cu oamenii.', translation: 'Vai imediatamente ao parque conversar com as pessoas.', next: 'parc' },
          {
            text: 'Scrie articolul de la birou, cu informații de pe internet.',
            translation: 'Escreve a matéria no escritório, com informações da internet.',
            next: 'birou',
          },
          {
            text: 'Se relaxează: articolul trebuie predat abia mâine.',
            translation: 'Relaxa: a matéria só precisa ser entregue amanhã.',
            wrong: 'A chefe pediu a matéria «gata până la ora trei» — pronta até as três, no mesmo dia. Ninguém falou em amanhã.',
          },
        ],
      },
      parc: {
        emoji: '🌳',
        text: 'Parcul era imens, cu un lac mare și alei umbroase. Pe podul suspendat, Linu a cunoscut un bătrân, domnul Ion, care venea acolo de când era copil. Deși se grăbea, Linu s-a așezat lângă el pe bancă.',
        translation:
          'O parque era imenso, com um lago grande e alamedas sombreadas. Na ponte suspensa, o Linu conheceu um senhor idoso, o seu Ion, que ia ali desde criança. Embora estivesse com pressa, o Linu se sentou ao lado dele no banco.',
        choices: [
          { text: 'Îl roagă să-i povestească despre parc.', translation: 'Pede que ele conte sobre o parque.', next: 'poveste' },
          { text: 'Face doar câteva poze și se grăbește înapoi.', translation: 'Só tira algumas fotos e volta correndo.', next: 'poze' },
        ],
      },
      poveste: {
        emoji: '👴',
        text: 'Domnul Ion i-a spus că bunicul lui lucrase ca grădinar în parc și că îl plimbase pe lac cu barca în copilărie. «Parcul l-a proiectat un francez, prin urmare seamănă cu grădinile de la Paris», a zâmbit el. Linu a notat totul, fascinat, până când a observat că era deja ora două.',
        translation:
          'O seu Ion contou que o avô dele tinha trabalhado como jardineiro no parque e que o tinha levado para passear de barco no lago quando criança. «Quem projetou o parque foi um francês, portanto ele se parece com os jardins de Paris», sorriu. O Linu anotou tudo, fascinado, até perceber que já eram duas horas.',
        choices: [
          { text: 'Îi mulțumește și scrie articolul în autobuz.', translation: 'Agradece e escreve a matéria no ônibus.', next: 'scris' },
          {
            text: 'Mai rămâne puțin, fiindcă povestea e prea frumoasă.',
            translation: 'Fica mais um pouco, porque a história é bonita demais.',
            next: 'intarziere',
          },
          {
            text: 'Scrie că domnul Ion lucrase el însuși ca grădinar în parc.',
            translation: 'Escreve que o próprio seu Ion tinha trabalhado como jardineiro no parque.',
            wrong: 'O texto diz «bunicul lui lucrase ca grădinar» — quem tinha trabalhado como jardineiro era o avô dele, não o seu Ion.',
          },
        ],
      },
      poze: {
        emoji: '📷',
        text: 'Linu a făcut câteva poze cu lacul și s-a întors în fugă la birou. Avea imagini frumoase, în schimb nu avea nicio poveste. Doamna Elena s-a uitat la ecran și l-a întrebat: «Și oamenii? Ce spun craiovenii despre parcul lor?»',
        translation:
          'O Linu tirou algumas fotos do lago e voltou correndo ao escritório. Tinha imagens bonitas; em compensação, não tinha nenhuma história. A dona Elena olhou para a tela e perguntou: «E as pessoas? O que os moradores de Craiova dizem do parque deles?»',
        choices: [
          { text: 'Recunoaște că n-a vorbit cu nimeni.', translation: 'Admite que não falou com ninguém.', next: 'sincer' },
          { text: 'Inventează un interviu.', translation: 'Inventa uma entrevista.', next: 'inventat' },
        ],
      },
      birou: {
        emoji: '💻',
        text: 'Linu a copiat câteva date de pe internet și a terminat articolul în douăzeci de minute. Doamna Elena l-a citit în tăcere. «E corect, totuși e rece. Nu ai fost acolo, nu-i așa?»',
        translation:
          'O Linu copiou alguns dados da internet e terminou a matéria em vinte minutos. A dona Elena leu em silêncio. «Está correto, mas mesmo assim está frio. Você não foi lá, não é?»',
        choices: [
          { text: 'Recunoaște și cere voie să meargă în parc.', translation: 'Admite e pede permissão para ir ao parque.', next: 'parc' },
          {
            text: 'Spune că nu are rost, fiindcă datele sunt aceleași.',
            translation: 'Diz que não adianta, porque os dados são os mesmos.',
            next: 'articol_rece',
          },
        ],
      },
      scris: {
        emoji: '🎉',
        text: 'Linu a scris pe telefon tot drumul și a predat articolul la trei fără cinci. Doamna Elena l-a citit și a zâmbit: «Ai vorbit cu oamenii, nu doar cu internetul. Bine ai venit în echipă!» Seara, Linu i-a trimis un mesaj domnului Ion: articolul lui apărea a doua zi.',
        translation:
          'O Linu escreveu no celular durante todo o caminho e entregou a matéria às três menos cinco. A dona Elena leu e sorriu: «Você conversou com as pessoas, não só com a internet. Bem-vindo à equipe!» À noite, o Linu mandou uma mensagem ao seu Ion: a matéria sairia no dia seguinte.',
        ending: {
          tone: 'bom',
          title: 'Primeira matéria publicada!',
          message: 'O Linu foi ao parque, ouviu um morador e ainda entregou no prazo. Um ótimo começo em Craiova.',
        },
      },
      intarziere: {
        emoji: '⏰',
        text: 'Când Linu a ajuns la redacție, trecuse deja de ora patru. Doamna Elena închisese pagina și pusese altceva în locul articolului lui. «Povestea e bună, însă un ziar nu așteaptă», i-a spus ea, iar articolul a apărut abia săptămâna următoare.',
        translation:
          'Quando o Linu chegou à redação, já tinham passado das quatro. A dona Elena tinha fechado a página e tinha posto outra coisa no lugar da matéria dele. «A história é boa, mas um jornal não espera», disse ela, e a matéria só saiu na semana seguinte.',
        ending: {
          tone: 'neutro',
          title: 'Prazo perdido',
          message: 'A história era ótima, mas no jornal o relógio manda. A matéria do Linu saiu, só que atrasada.',
        },
      },
      sincer: {
        emoji: '🙂',
        text: 'Doamna Elena a apreciat sinceritatea lui. «Mai ai o oră. Du-te înapoi și vorbește cu cineva», i-a spus ea. Linu a găsit lângă lac un grup de studenți, iar articolul a ieșit scurt, dar plin de viață.',
        translation:
          'A dona Elena gostou da sinceridade dele. «Você ainda tem uma hora. Volte lá e converse com alguém», disse ela. O Linu encontrou perto do lago um grupo de estudantes, e a matéria ficou curta, mas cheia de vida.',
        ending: {
          tone: 'bom',
          title: 'Sinceridade vale ouro',
          message: 'O Linu admitiu o erro e ganhou uma segunda chance. A chefe percebeu que pode confiar nele.',
        },
      },
      inventat: {
        emoji: '😳',
        text: 'Linu a scris un «interviu» cu un bătrân imaginar. Doamna Elena a ridicat din sprâncene: «Interesant... deși în parc nu există nicio fântână de aur.» Linu s-a înroșit și a trebuit să rescrie totul, prin urmare a stat la birou până seara târziu.',
        translation:
          'O Linu escreveu uma «entrevista» com um senhor imaginário. A dona Elena levantou as sobrancelhas: «Interessante... embora no parque não exista nenhuma fonte de ouro.» O Linu ficou vermelho e teve que reescrever tudo, portanto ficou no escritório até tarde da noite.',
        ending: { tone: 'neutro', title: 'Entrevista inventada', message: 'Num jornal, inventar é o pior erro. O Linu aprendeu da forma mais constrangedora.' },
      },
      articol_rece: {
        emoji: '📄',
        text: 'Doamna Elena a publicat articolul, deși nu era încântată. Textul a apărut într-un colț al paginii, lângă programul TV. Linu a înțeles că, data viitoare, trebuie să iasă din birou.',
        translation:
          'A dona Elena publicou a matéria, embora não estivesse encantada. O texto saiu num canto da página, ao lado da programação da TV. O Linu entendeu que, da próxima vez, precisa sair do escritório.',
        ending: { tone: 'neutro', title: 'Matéria de canto de página', message: 'Dados certos não bastam: uma boa matéria precisa de gente de verdade.' },
      },
    },
  },
  {
    id: 'ro-h28',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Dosarul lui Linu',
    emoji: '📁',
    summary: 'O Linu precisa tirar a autorização de residência em Timișoara e enfrenta a burocracia romena.',
    cultural_context:
      'Foi em Timișoara que começou, em dezembro de 1989, a revolução que derrubou o regime comunista na Romênia. Hoje a Piața Victoriei, no centro, lembra esses acontecimentos.',
    start: 'start',
    glossary: [
      ['permis de ședere', 'autorização de residência'],
      ['programare', 'agendamento'],
      ['a depune', 'protocolar, entregar (documentos)'],
      ['contract de închiriere', 'contrato de aluguel'],
      ['proprietar', 'proprietário, senhorio'],
      ['a elibera', 'emitir (um documento)'],
      ['ghișeu', 'guichê'],
      ['Stimate domnule', 'Prezado senhor'],
    ],
    nodes: {
      start: {
        emoji: '🏛️',
        text: 'Linu locuiește de trei luni în Timișoara și are nevoie de un permis de ședere. Pe site-ul instituției scrie: «Cererile se depun numai pe bază de programare. Dosarele incomplete nu vor fi acceptate.» Linu își bea cafeaua și se gândește ce să facă.',
        translation:
          'Linu mora há três meses em Timișoara e precisa de uma autorização de residência. No site da instituição está escrito: «Os pedidos são protocolados somente com agendamento. Processos incompletos não serão aceitos.» Linu toma seu café e pensa no que fazer.',
        choices: [
          { text: 'Își face o programare online.', translation: 'Faz um agendamento online.', next: 'programare' },
          { text: 'Merge direct la birou, fără programare.', translation: 'Vai direto ao escritório, sem agendamento.', next: 'fara_programare' },
          {
            text: 'Duce doar pașaportul, pentru că dosarele incomplete sunt primite oricum.',
            translation: 'Leva só o passaporte, porque processos incompletos são recebidos de qualquer jeito.',
            wrong:
              'Releia o aviso: «Dosarele incomplete nu vor fi acceptate» = os processos incompletos NÃO serão aceitos. «Vor fi acceptate» é voz passiva no futuro, e o «nu» nega tudo.',
          },
        ],
      },
      fara_programare: {
        emoji: '🚶',
        text: 'La birou este o coadă lungă. După o oră, un funcționar îi spune: «Ne pare rău, domnule, fără programare nu puteți fi primit. Vă rugăm să reveniți după ce vă programați.» Oamenii din coadă se uită la Linu.',
        translation:
          'No escritório há uma fila longa. Depois de uma hora, um funcionário lhe diz: «Sentimos muito, senhor, sem agendamento o senhor não pode ser atendido. Pedimos que volte depois de agendar.» As pessoas da fila olham para o Linu.',
        choices: [
          { text: 'Se întoarce acasă și își face programare.', translation: 'Volta para casa e faz o agendamento.', next: 'programare' },
          {
            text: 'Se ceartă cu funcționarul și cere să vorbească cu șeful.',
            translation: 'Discute com o funcionário e pede para falar com o chefe.',
            next: 'final_cearta',
          },
        ],
      },
      final_cearta: {
        emoji: '😤',
        text: 'Șeful vine, ascultă politicos și repetă exact același lucru: fără programare, cererea nu poate fi primită. Linu pierde toată dimineața și pleacă fără nimic.',
        translation:
          'O chefe vem, escuta educadamente e repete exatamente a mesma coisa: sem agendamento, o pedido não pode ser recebido. Linu perde a manhã inteira e sai sem nada.',
        ending: {
          tone: 'neutro',
          title: 'Manhã perdida',
          message: 'Na burocracia, discutir raramente adianta: as regras foram escritas antes de você chegar. Tente de novo, com agendamento!',
        },
      },
      programare: {
        emoji: '📧',
        text: 'A doua zi, Linu primește un e-mail: «Stimate domnule Linu, vă informăm că programarea dumneavoastră a fost confirmată pentru 14 octombrie, ora 10:00. Vă rugăm să prezentați pașaportul, contractul de închiriere și dovada asigurării medicale. Cu stimă, Serviciul pentru Imigrări.»',
        translation:
          'No dia seguinte, Linu recebe um e-mail: «Prezado senhor Linu, informamos que o seu agendamento foi confirmado para 14 de outubro, às 10h. Pedimos que apresente o passaporte, o contrato de aluguel e o comprovante do seguro-saúde. Atenciosamente, Serviço de Imigração.»',
        choices: [
          { text: 'Pregătește toate cele trei documente.', translation: 'Prepara os três documentos.', next: 'birou' },
          {
            text: 'Pregătește doar pașaportul; celelalte documente vor fi cerute mai târziu.',
            translation: 'Prepara só o passaporte; os outros documentos serão pedidos mais tarde.',
            wrong:
              'O e-mail pede que ele apresente os TRÊS documentos no dia: pașaportul, contractul de închiriere e dovada asigurării medicale. Nada diz que serão pedidos depois.',
          },
        ],
      },
      birou: {
        emoji: '🗂️',
        text: 'Pe 14 octombrie, funcționara verifică dosarul cu atenție. «Pașaportul și asigurarea sunt în regulă. Dar contractul de închiriere nu a fost semnat de proprietar. Fără semnătura lui, documentul nu poate fi luat în considerare.»',
        translation:
          'Em 14 de outubro, a funcionária confere o processo com atenção. «O passaporte e o seguro estão em ordem. Mas o contrato de aluguel não foi assinado pelo proprietário. Sem a assinatura dele, o documento não pode ser levado em consideração.»',
        choices: [
          {
            text: 'Îl sună pe domnul Popescu, proprietarul, și îl roagă să vină.',
            translation: 'Liga para o senhor Popescu, o proprietário, e pede que ele venha.',
            next: 'proprietar',
          },
          { text: 'Semnează chiar el, în locul proprietarului.', translation: 'Ele mesmo assina, no lugar do proprietário.', next: 'final_semnatura' },
          {
            text: '«Dar eu am semnat deja contractul!»',
            translation: '«Mas eu já assinei o contrato!»',
            wrong:
              '«Nu a fost semnat de proprietar» = não foi assinado PELO proprietário. Na passiva, «de» indica quem faz a ação: a assinatura que falta é a do dono do apartamento, não a do Linu.',
          },
        ],
      },
      final_semnatura: {
        emoji: '🚫',
        text: 'Funcționara ridică sprâncenele: «Domnule, un document semnat de altă persoană decât proprietarul nu este valabil. Dosarul dumneavoastră este respins.» Linu trebuie să facă o nouă programare, peste o lună.',
        translation:
          'A funcionária ergue as sobrancelhas: «Senhor, um documento assinado por outra pessoa que não o proprietário não é válido. Seu processo foi indeferido.» Linu precisa fazer um novo agendamento, daqui a um mês.',
        ending: {
          tone: 'neutro',
          title: 'Processo indeferido',
          message: 'Atalho em documento oficial sempre dá errado. Peça a assinatura de quem deve assinar!',
        },
      },
      proprietar: {
        emoji: '✍️',
        text: 'Domnul Popescu vine în pauza de prânz și semnează contractul. Funcționara zâmbește: «Perfect. Dosarul a fost înregistrat. Permisul va fi eliberat în cel mult 30 de zile. Poate fi trimis prin poștă sau îl puteți ridica personal de la ghișeul 3.»',
        translation:
          'O senhor Popescu vem no horário de almoço e assina o contrato. A funcionária sorri: «Perfeito. O processo foi registrado. A autorização será emitida em no máximo 30 dias. Pode ser enviada pelo correio ou o senhor pode retirá-la pessoalmente no guichê 3.»',
        choices: [
          { text: '«Îl ridic personal, vă mulțumesc.»', translation: '«Eu retiro pessoalmente, obrigado.»', next: 'final_bom' },
          { text: '«Prin poștă, vă rog.»', translation: '«Pelo correio, por favor.»', next: 'final_posta' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'După trei săptămâni, Linu primește permisul la ghișeul 3. Ca să sărbătorească, se plimbă prin Piața Victoriei, unde în 1989 a început revoluția. Domnul Popescu îl invită la o ciorbă.',
        translation:
          'Depois de três semanas, Linu recebe a autorização no guichê 3. Para comemorar, ele passeia pela Piața Victoriei, onde em 1989 começou a revolução. O senhor Popescu o convida para uma sopa.',
        ending: { tone: 'bom', title: 'Morador oficial!', message: 'O Linu enfrentou a burocracia com paciência e agora mora legalmente em Timișoara.' },
      },
      final_posta: {
        emoji: '📬',
        text: 'Un plic oficial este lăsat în cutia poștală a lui Linu după 25 de zile. Înăuntru se află permisul de ședere. Linu îl pune într-o ramă, ca pe o diplomă.',
        translation:
          'Um envelope oficial é deixado na caixa de correio do Linu depois de 25 dias. Dentro está a autorização de residência. Linu a coloca num porta-retratos, como um diploma.',
        ending: { tone: 'bom', title: 'Chegou pelo correio!', message: 'Processo completo, assinatura certa e autorização em casa. Bem-vindo a Timișoara!' },
      },
    },
  },
  {
    id: 'ro-h29',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Stagiu la Horezu',
    emoji: '🏺',
    summary: 'O Linu quer fazer um estágio de verão numa oficina de cerâmica de Horezu e precisa se candidatar com uma carta formal.',
    cultural_context:
      'O artesanato da cerâmica de Horezu, no condado de Vâlcea, foi inscrito em 2012 na lista de Patrimônio Cultural Imaterial da UNESCO. As peças são pintadas à mão com motivos tradicionais, entre os quais o mais famoso é o galo, o «cocoșul de Horezu».',
    start: 'start',
    glossary: [
      ['atelier', 'oficina, ateliê'],
      ['olar', 'oleiro'],
      ['lut', 'argila'],
      ['stagiu', 'estágio'],
      ['scrisoare de intenție', 'carta de apresentação'],
      ['a fi reținut', 'ser selecionado'],
      ['Stimată doamnă', 'Prezada senhora'],
      ['Cu stimă', 'Atenciosamente'],
    ],
    nodes: {
      start: {
        emoji: '📰',
        text: 'Linu citește pe site-ul unui atelier de ceramică din Horezu un anunț: «Se caută un stagiar pentru lunile de vară. Candidaturile se depun prin scrisoare, la adresa atelierului. Dosarele incomplete nu vor fi luate în considerare.» Linu se îndrăgostise de farfuriile pictate cu cocoși la un târg din București și vrea să învețe meseria.',
        translation:
          'O Linu lê no site de uma oficina de cerâmica de Horezu um anúncio: «Procura-se um estagiário para os meses de verão. As candidaturas são entregues por carta, no endereço da oficina. Dossiês incompletos não serão levados em consideração.» O Linu tinha se apaixonado pelos pratos pintados com galos numa feira em Bucareste e quer aprender o ofício.',
        choices: [
          { text: 'Scrie o scrisoare formală către atelier.', translation: 'Escreve uma carta formal para a oficina.', next: 'formala' },
          {
            text: 'Trimite un mesaj pe telefon: «Bună! Pot să vin la voi vara asta?»',
            translation: 'Manda uma mensagem no celular: «Oi! Posso ir aí neste verão?»',
            next: 'informala',
          },
          {
            text: 'Se duce direct la atelier, fiindcă stagiarul este ales pe loc.',
            translation: 'Vai direto à oficina, já que o estagiário é escolhido na hora.',
            wrong:
              'O anúncio diz «Candidaturile se depun prin scrisoare» — as candidaturas são entregues por carta. O «se» passivo descreve o procedimento oficial; ninguém é escolhido na hora.',
          },
        ],
      },
      informala: {
        emoji: '📱',
        text: 'Răspunsul vine a doua zi, scurt și politicos: «Stimate domn, candidaturile sunt primite numai prin scrisoare, conform anunțului. Vă rugăm să respectați procedura.» Linu se simte puțin jenat, fiindcă tonul lui fusese mult prea familiar.',
        translation:
          'A resposta chega no dia seguinte, curta e educada: «Prezado senhor, as candidaturas são recebidas somente por carta, conforme o anúncio. Pedimos que respeite o procedimento.» O Linu fica um pouco sem graça, porque o tom dele tinha sido informal demais.',
        choices: [
          { text: 'Își cere scuze și scrie o scrisoare formală.', translation: 'Pede desculpas e escreve uma carta formal.', next: 'formala' },
          { text: 'Renunță, supărat.', translation: 'Desiste, chateado.', next: 'renunta' },
        ],
      },
      formala: {
        emoji: '✍️',
        text: 'Atelierul este condus de doamna Maria, un meșter olar cunoscut în toată zona. Linu începe așa: «Stimată doamnă Maria, vă adresez această scrisoare pentru a-mi depune candidatura la stagiul anunțat pe site-ul dumneavoastră.» Acum trebuie să decidă ce scrie în paragraful următor.',
        translation:
          'A oficina é dirigida pela dona Maria, uma mestre oleira conhecida em toda a região. O Linu começa assim: «Prezada senhora Maria, dirijo-lhe esta carta para apresentar a minha candidatura ao estágio anunciado no seu site.» Agora ele precisa decidir o que escrever no parágrafo seguinte.',
        choices: [
          { text: 'Descrie ce știe să facă și de ce vrea să învețe.', translation: 'Descreve o que sabe fazer e por que quer aprender.', next: 'experienta' },
          {
            text: 'Scrie trei pagini despre istoria ceramicii românești.',
            translation: 'Escreve três páginas sobre a história da cerâmica romena.',
            next: 'prea_lunga',
          },
        ],
      },
      prea_lunga: {
        emoji: '📚',
        text: 'Linu scrie trei pagini despre olăritul din toată țara. Recitind textul, observă că despre el însuși nu a fost scris aproape nimic. O scrisoare de intenție trebuie totuși să arate de ce candidatul merită să fie ales.',
        translation:
          'O Linu escreve três páginas sobre a olaria do país inteiro. Relendo o texto, percebe que sobre ele mesmo não foi escrito quase nada. Uma carta de apresentação, porém, precisa mostrar por que o candidato merece ser escolhido.',
        choices: [
          { text: 'O scurtează și vorbește despre sine.', translation: 'Encurta a carta e fala de si mesmo.', next: 'experienta' },
          { text: 'O trimite așa cum este.', translation: 'Envia do jeito que está.', next: 'lunga_final' },
        ],
      },
      experienta: {
        emoji: '📨',
        text: 'Linu scrie: «Deși nu am lucrat niciodată la roata olarului, am urmat un curs de pictură pe ceramică. Sunt dispus să învăț și să respect regulile atelierului.» Încheie cu «Cu stimă, Linu» și trimite scrisoarea prin poștă, împreună cu CV-ul.',
        translation:
          'O Linu escreve: «Embora nunca tenha trabalhado no torno de oleiro, fiz um curso de pintura em cerâmica. Estou disposto a aprender e a respeitar as regras da oficina.» Termina com «Atenciosamente, Linu» e envia a carta pelo correio, junto com o currículo.',
        choices: [{ text: 'Așteaptă răspunsul cu răbdare.', translation: 'Espera a resposta com paciência.', next: 'raspuns' }],
      },
      raspuns: {
        emoji: '✉️',
        text: 'După două săptămâni sosește un plic: «Candidatura dumneavoastră a fost analizată cu atenție. Sunteți invitat la o probă practică la atelier, pe data de 10 iunie. Veți fi primit de doamna Maria la ora nouă.» Linu citește scrisoarea de trei ori.',
        translation:
          'Depois de duas semanas chega um envelope: «A sua candidatura foi analisada com atenção. O senhor está convidado para uma prova prática na oficina, no dia 10 de junho. Será recebido pela dona Maria às nove horas.» O Linu lê a carta três vezes.',
        choices: [
          { text: 'Ajunge la Horezu cu o zi înainte, ca să nu întârzie.', translation: 'Chega a Horezu um dia antes, para não se atrasar.', next: 'proba' },
          {
            text: 'Anunță tuturor prietenilor că a fost deja acceptat ca stagiar.',
            translation: 'Anuncia a todos os amigos que já foi aceito como estagiário.',
            wrong:
              'A carta diz que a candidatura «a fost analizată» (foi analisada) e que ele está convidado para uma prova prática. Ele ainda não foi aceito: a vaga depende da prova.',
          },
        ],
      },
      proba: {
        emoji: '🎨',
        text: 'La atelier, doamna Maria îi arată lutul roșu, care fusese pregătit de dimineață. «Aici, fiecare farfurie este pictată de mână, iar niciun model nu este copiat de la mașină», îi explică ea. Linu primește o farfurie și trebuie să picteze pe ea un cocoș.',
        translation:
          'Na oficina, a dona Maria mostra a ele a argila vermelha, que tinha sido preparada de manhã. «Aqui, cada prato é pintado à mão, e nenhum desenho é copiado de máquina», explica ela. O Linu recebe um prato e precisa pintar nele um galo.',
        choices: [
          { text: 'Pictează încet și cu atenție un cocoș simplu.', translation: 'Pinta devagar e com cuidado um galo simples.', next: 'final_bom' },
          {
            text: 'Îi cere întâi doamnei Maria să-i arate modelul tradițional.',
            translation: 'Pede primeiro à dona Maria que lhe mostre o modelo tradicional.',
            next: 'final_bom',
          },
        ],
      },
      final_bom: {
        emoji: '🐓',
        text: 'Cocoșul lui Linu iese puțin strâmb, dar plin de viață. Doamna Maria zâmbește: «Tehnica se învață. Răbdarea, în schimb, nu se învață ușor, iar dumneavoastră o aveți.» O săptămână mai târziu, Linu primește confirmarea oficială: a fost acceptat ca stagiar pentru toată vara.',
        translation:
          'O galo do Linu sai um pouco torto, mas cheio de vida. A dona Maria sorri: «A técnica se aprende. A paciência, em compensação, não se aprende fácil, e o senhor a tem.» Uma semana depois, o Linu recebe a confirmação oficial: foi aceito como estagiário para o verão inteiro.',
        ending: {
          tone: 'bom',
          title: 'Aprendiz de oleiro!',
          message: 'O Linu escreveu uma carta formal correta, falou de si mesmo e passou na prova prática. O verão em Horezu promete!',
        },
      },
      renunta: {
        emoji: '😔',
        text: 'Linu închide telefonul și nu mai scrie nimic. Locul de stagiar este ocupat de altcineva, iar Linu își cumpără, în schimb, o farfurie de Horezu de la un târg. E frumoasă, dar nu a fost pictată de el.',
        translation:
          'O Linu fecha o celular e não escreve mais nada. A vaga de estagiário é ocupada por outra pessoa, e o Linu compra, em vez disso, um prato de Horezu numa feira. É bonito, mas não foi pintado por ele.',
        ending: {
          tone: 'neutro',
          title: 'Desistência precipitada',
          message: 'Uma resposta educada não é um «não». Bastava pedir desculpas e seguir o procedimento.',
        },
      },
      lunga_final: {
        emoji: '📭',
        text: 'După trei săptămâni, Linu primește un răspuns politicos: «Vă mulțumim pentru interes. Din păcate, candidatura dumneavoastră nu a fost reținută.» Scrisoarea fusese frumoasă, însă vorbea despre ceramică, nu despre el.',
        translation:
          'Depois de três semanas, o Linu recebe uma resposta educada: «Agradecemos o seu interesse. Infelizmente, a sua candidatura não foi selecionada.» A carta tinha sido bonita, mas falava de cerâmica, não dele.',
        ending: {
          tone: 'neutro',
          title: 'Carta errada',
          message: 'Numa carta de apresentação, o assunto principal é o candidato. O Linu vai lembrar disso na próxima vez.',
        },
      },
    },
  },
  {
    id: 'ro-h30',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Scrisoarea din podea',
    emoji: '📜',
    summary: 'Em Iași, o Linu encontra uma carta antiga escondida no piso e precisa decidir o que fazer com ela.',
    cultural_context:
      'Durante a Primeira Guerra Mundial, com Bucareste ocupada, Iași serviu como capital da Romênia (1916–1918). A cidade também abriga a universidade mais antiga do país, fundada em 1860.',
    start: 'start',
    glossary: [
      ['plic', 'envelope'],
      ['anticariat', 'sebo, antiquário'],
      ['cerere', 'requerimento, pedido'],
      ['registratură', 'protocolo (setor)'],
      ['subsemnatul', 'o abaixo assinado'],
      ['a dona', 'doar'],
      ['a restaura', 'restaurar'],
      ['arhivist', 'arquivista'],
    ],
    nodes: {
      start: {
        emoji: '🏚️',
        text: 'Linu s-a mutat într-un apartament vechi din centrul Iașiului. Când repară o scândură a podelei, găsește un plic îngălbenit. Pe plic este scris de mână: «Iași, martie 1917». Înăuntru se află o scrisoare lungă.',
        translation:
          'Linu se mudou para um apartamento antigo no centro de Iași. Ao consertar uma tábua do piso, encontra um envelope amarelado. No envelope está escrito à mão: «Iași, março de 1917». Dentro há uma carta longa.',
        choices: [
          { text: 'Duce plicul la Arhivele Naționale.', translation: 'Leva o envelope ao Arquivo Nacional.', next: 'arhiva' },
          {
            text: 'Duce plicul la un anticariat, să vadă cât valorează.',
            translation: 'Leva o envelope a um antiquário, para ver quanto vale.',
            next: 'anticariat',
          },
        ],
      },
      anticariat: {
        emoji: '🕰️',
        text: 'Anticarul se uită la plic fără prea mult interes: «Asemenea scrisori se găsesc peste tot. Vă ofer cincizeci de lei.» Totuși, Linu observă că mâinile anticarului tremură puțin.',
        translation:
          'O antiquário olha o envelope sem muito interesse: «Cartas assim se encontram em todo lugar. Ofereço cinquenta lei.» Mesmo assim, Linu percebe que as mãos do antiquário tremem um pouco.',
        choices: [
          { text: 'Acceptă cei cincizeci de lei.', translation: 'Aceita os cinquenta lei.', next: 'final_vandut' },
          { text: 'Se răzgândește și merge la arhivă.', translation: 'Muda de ideia e vai ao arquivo.', next: 'arhiva' },
        ],
      },
      final_vandut: {
        emoji: '💸',
        text: 'O lună mai târziu, Linu vede scrisoarea într-o vitrină, cu o etichetă: «Document rar, 1917 – 2.000 de lei». Povestea din scrisoare nu va fi citită niciodată de istorici.',
        translation:
          'Um mês depois, Linu vê a carta numa vitrine, com uma etiqueta: «Documento raro, 1917 – 2.000 lei». A história da carta nunca será lida por historiadores.',
        ending: {
          tone: 'neutro',
          title: 'Negócio da China… para o antiquário',
          message: 'Mãos que tremem dizem mais que palavras. Tente de novo e leve a carta a quem sabe o valor histórico dela!',
        },
      },
      arhiva: {
        emoji: '🏛️',
        text: 'La intrarea în arhivă, portarul îi explică: «Documentele sunt primite numai pe bază de cerere scrisă, adresată directorului. Cererea se depune la registratură, la etajul întâi.» Apoi îi dă un formular.',
        translation:
          'Na entrada do arquivo, o porteiro explica: «Os documentos só são recebidos mediante requerimento escrito, dirigido ao diretor. O requerimento é protocolado no setor de protocolo, no primeiro andar.» Depois lhe entrega um formulário.',
        choices: [
          { text: 'Completează formularul și urcă la etajul întâi.', translation: 'Preenche o formulário e sobe ao primeiro andar.', next: 'cerere' },
          {
            text: 'Îi lasă plicul portarului și pleacă acasă.',
            translation: 'Deixa o envelope com o porteiro e vai para casa.',
            wrong:
              'O porteiro disse que os documentos «sunt primite numai pe bază de cerere scrisă» = só são recebidos mediante requerimento escrito, entregue no protocolo. Ele não pode simplesmente ficar com o envelope.',
          },
        ],
      },
      cerere: {
        emoji: '📝',
        text: 'Linu scrie: «Domnule Director, subsemnatul Linu, domiciliat în Iași, vă rog să aprobați analizarea unui document găsit în locuința mea. Vă mulțumesc. Cu stimă, Linu.» Funcționara de la registratură pune o ștampilă: «Cererea a fost înregistrată cu numărul 245. Veți fi contactat de un specialist.»',
        translation:
          'Linu escreve: «Senhor Diretor, eu, abaixo assinado, Linu, residente em Iași, peço que aprove a análise de um documento encontrado em minha residência. Obrigado. Atenciosamente, Linu.» A funcionária do protocolo carimba: «O requerimento foi registrado com o número 245. O senhor será contatado por um especialista.»',
        choices: [{ text: 'Așteaptă răspunsul.', translation: 'Aguarda a resposta.', next: 'specialist' }],
      },
      specialist: {
        emoji: '🔍',
        text: 'Doamna arhivist îl sună după trei zile: «Scrisoarea a fost scrisă de un tânăr soldat și era adresată mamei lui. Pe atunci Iașiul era capitala țării, pentru că Bucureștiul fusese ocupat. Ați dori ca documentul să fie donat arhivei sau să fie păstrat de dumneavoastră?»',
        translation:
          'A arquivista liga para ele depois de três dias: «A carta foi escrita por um jovem soldado e era dirigida à mãe dele. Naquela época Iași era a capital do país, porque Bucareste tinha sido ocupada. O senhor gostaria que o documento fosse doado ao arquivo ou que ficasse com o senhor?»',
        choices: [
          { text: '«Aș vrea să fie donat arhivei.»', translation: '«Gostaria que fosse doado ao arquivo.»', next: 'donatie' },
          { text: '«Prefer să o păstrez eu.»', translation: '«Prefiro ficar com ela.»', next: 'final_pastrare' },
          {
            text: '«Deci mama i-a scris fiului ei, soldatul?»',
            translation: '«Então a mãe escreveu para o filho, o soldado?»',
            wrong:
              'É o contrário: «a fost scrisă de un tânăr soldat» = foi escrita POR um jovem soldado, e «era adresată mamei lui» = era dirigida À mãe dele. Na passiva, quem vem depois de «de» é o autor da ação.',
          },
        ],
      },
      donatie: {
        emoji: '🖼️',
        text: 'Arhivista zâmbește: «Documentul va fi restaurat și va fi expus în luna mai, la o expoziție despre Primul Război Mondial. Numele dumneavoastră va fi menționat ca donator.» Linu primește și o copie a scrisorii.',
        translation:
          'A arquivista sorri: «O documento será restaurado e exposto em maio, numa exposição sobre a Primeira Guerra Mundial. O seu nome será mencionado como doador.» Linu recebe também uma cópia da carta.',
        choices: [{ text: 'Merge la deschiderea expoziției.', translation: 'Vai à abertura da exposição.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'La expoziție, o doamnă în vârstă se oprește lung în fața scrisorii. «Soldatul acesta era străbunicul meu», îi spune ea lui Linu, cu lacrimi în ochi. «Credeam că scrisorile lui fuseseră pierdute pentru totdeauna.»',
        translation:
          'Na exposição, uma senhora idosa para por muito tempo diante da carta. «Este soldado era meu bisavô», ela diz ao Linu, com lágrimas nos olhos. «Eu achava que as cartas dele tinham se perdido para sempre.»',
        ending: {
          tone: 'bom',
          title: 'Uma carta volta para casa',
          message: 'O Linu seguiu o caminho formal, doou a carta e ajudou uma família a reencontrar sua história.',
        },
      },
      final_pastrare: {
        emoji: '🗃️',
        text: 'Linu primește scrisoarea înapoi, împreună cu o copie digitală făcută de arhivă. O pune într-un dosar, pe raft. Uneori o recitește seara, dar se întreabă cine ar mai fi vrut să o citească.',
        translation:
          'Linu recebe a carta de volta, junto com uma cópia digital feita pelo arquivo. Guarda-a numa pasta, na estante. Às vezes a relê à noite, mas se pergunta quem mais gostaria de lê-la.',
        ending: {
          tone: 'neutro',
          title: 'Tesouro na estante',
          message: 'A carta está segura, mas a história dela ficou só com o Linu. Que tal tentar a doação?',
        },
      },
    },
  },
  {
    id: 'ro-h31',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Nori pe Transfăgărășan',
    emoji: '🚴',
    summary: 'O Linu sobe a Transfăgărășan de bicicleta, mas nuvens se juntam sobre as montanhas.',
    cultural_context:
      'A Transfăgărășan (DN7C) atravessa os Montes Făgăraș e foi construída entre 1970 e 1974; perto do lago glacial Bâlea Lac, ela passa dos 2.000 metros de altitude.',
    start: 'start',
    glossary: [
      ['serpentină', 'curva em zigue-zague'],
      ['ceață', 'neblina'],
      ['stână', 'abrigo de pastores na montanha'],
      ['cioban', 'pastor de ovelhas'],
      ['a da de', 'encontrar, topar com'],
      ['a ploua cu găleata', 'chover a cântaros'],
      ['ud leoarcă', 'encharcado'],
      ['a rămâne cu gura căscată', 'ficar de queixo caído'],
    ],
    nodes: {
      start: {
        emoji: '⛰️',
        text: 'Linu urcă pe Transfăgărășan cu bicicleta, pedalând încet printre serpentine. Dimineața era senină, iar munții păreau desenați cu creionul. Ajungând la o curbă largă, se oprește să bea apă. Privind în sus, vede niște nori gri care se strâng deasupra crestelor.',
        translation:
          'Linu sobe a Transfăgărășan de bicicleta, pedalando devagar entre as curvas. A manhã estava limpa, e as montanhas pareciam desenhadas a lápis. Chegando a uma curva larga, ele para para beber água. Olhando para cima, vê umas nuvens cinzentas que se juntam sobre as cristas.',
        choices: [
          {
            text: 'Continuă să urce, grăbindu-se să ajungă la Bâlea Lac înainte de ploaie.',
            translation: 'Continua subindo, apressando-se para chegar ao Bâlea Lac antes da chuva.',
            next: 'urcare',
          },
          { text: 'Se oprește la o stână pe care o vede lângă drum.', translation: 'Para em um abrigo de pastores que vê perto da estrada.', next: 'stana' },
          {
            text: 'Se bucură de soarele puternic care strălucește deasupra crestelor.',
            translation: 'Aproveita o sol forte que brilha sobre as cristas.',
            wrong:
              'Releia a última frase: «Privind în sus» (olhando para cima), o Linu vê nuvens cinzentas («nori gri») se juntando sobre as cristas — não sol forte. O gerúndio «privind» mostra o que ele faz no momento em que vê.',
          },
        ],
      },
      urcare: {
        emoji: '🌫️',
        text: 'Linu pedalează din toate puterile, dar ceața coboară peste drum mai repede decât se aștepta și începe să burnițeze. Mașinile trec pe lângă el claxonând, cu farurile aprinse. Un motociclist oprit pe marginea drumului îi face semn să se oprească. «Ești ud leoarcă! Sus bate un vânt de te ia pe sus. Eu zic să mai aștepți puțin aici.»',
        translation:
          'Linu pedala com todas as forças, mas a neblina desce sobre a estrada mais rápido do que ele esperava e começa a garoar. Os carros passam por ele buzinando, com os faróis acesos. Um motociclista parado na beira da estrada faz sinal para ele parar. «Você está encharcado! Lá em cima está ventando de te levar pelos ares. Eu acho que você devia esperar mais um pouco aqui.»',
        choices: [
          {
            text: 'Îl ascultă și așteaptă lângă el, adăpostindu-se sub o stâncă.',
            translation: 'Ouve o conselho e espera ao lado dele, abrigando-se debaixo de uma rocha.',
            next: 'asteptare',
          },
          { text: 'Urcă mai departe, încăpățânat.', translation: 'Continua subindo, teimoso.', next: 'final_ceata' },
        ],
      },
      final_ceata: {
        emoji: '🥶',
        text: 'Linu ajunge la Bâlea Lac tremurând, ud până la piele. Nu vede nici lacul, nici munții, ci doar o ceață albă cât cuprinde. Intră în cabană și comandă un ceai fierbinte, ținând cana cu ambele aripi. «Am urcat degeaba», oftează el, dar măcar a învățat o lecție.',
        translation:
          'Linu chega ao Bâlea Lac tremendo, molhado até os ossos. Não vê nem o lago nem as montanhas, só uma neblina branca a perder de vista. Entra no refúgio e pede um chá bem quente, segurando a caneca com as duas asas. «Subi à toa», suspira ele, mas pelo menos aprendeu uma lição.',
        ending: {
          tone: 'neutro',
          title: 'Chegou, mas não viu nada',
          message: 'O Linu chegou ao Bâlea Lac, mas a neblina escondeu tudo. Na montanha, vale a pena ouvir quem conhece o tempo.',
        },
      },
      asteptare: {
        emoji: '🏍️',
        text: 'Stând adăpostiți sub stâncă, cei doi încep să povestească. Motociclistul, pe nume Radu, vine din Pitești și a urcat pe Transfăgărășan de zeci de ori. «Muntele ăsta nu glumește», spune el, uitându-se la cer. După o jumătate de oră, vântul împrăștie norii și soarele iese din nou.',
        translation:
          'Abrigados debaixo da rocha, os dois começam a conversar. O motociclista, chamado Radu, vem de Pitești e já subiu a Transfăgărășan dezenas de vezes. «Esta montanha não brinca», diz ele, olhando para o céu. Depois de meia hora, o vento espalha as nuvens e o sol aparece de novo.',
        choices: [
          { text: 'Pornesc împreună spre Bâlea Lac.', translation: 'Partem juntos para o Bâlea Lac.', next: 'lac' },
          {
            text: 'Pleacă imediat înapoi, fiindcă ploaia a ținut toată ziua.',
            translation: 'Volta imediatamente, porque a chuva durou o dia todo.',
            wrong: 'O texto diz que, depois de meia hora («după o jumătate de oră»), o vento espalhou as nuvens e o sol voltou. A chuva não durou o dia todo.',
          },
        ],
      },
      stana: {
        emoji: '🐑',
        text: 'Linu lasă bicicleta lângă gard și se apropie de stână. Un cioban bătrân, înfășurat într-un cojoc, îl primește zâmbind. «Hai înăuntru, că acum se pornește ploaia», îi zice el, arătând spre nori. Pe masă îl așteaptă mămăligă, brânză de burduf și o cană de lapte proaspăt muls.',
        translation:
          'Linu deixa a bicicleta perto da cerca e se aproxima do abrigo. Um pastor velho, enrolado num casaco de pele de carneiro, o recebe sorrindo. «Entra, que a chuva já vai começar», diz ele, apontando para as nuvens. Na mesa esperam por ele polenta, queijo de burduf e uma caneca de leite recém-ordenhado.',
        choices: [
          { text: 'Acceptă invitația și se așază la masă.', translation: 'Aceita o convite e se senta à mesa.', next: 'masa' },
          { text: 'Mulțumește politicos și pleacă mai departe.', translation: 'Agradece educadamente e segue em frente.', next: 'urcare' },
        ],
      },
      masa: {
        emoji: '🧀',
        text: 'Afară plouă cu găleata, dar în stână e cald și miroase a fum. Ciobanul îi povestește cum urcă oile la munte primăvara și cum le coboară toamna. Ascultându-l, Linu uită complet de oboseală. «Ai dat de noi exact la momentul potrivit», râde ciobanul.',
        translation:
          'Lá fora chove a cântaros, mas no abrigo está quente e cheira a fumaça. O pastor conta como sobe com as ovelhas para a montanha na primavera e como as desce no outono. Ouvindo-o, Linu esquece completamente o cansaço. «Você nos encontrou bem na hora certa», ri o pastor.',
        choices: [
          { text: 'Îl întreabă cum se face brânza de burduf.', translation: 'Pergunta como se faz o queijo de burduf.', next: 'branza' },
          { text: 'Așteaptă să stea ploaia și pornește spre lac.', translation: 'Espera a chuva parar e parte para o lago.', next: 'lac' },
        ],
      },
      branza: {
        emoji: '🎁',
        text: 'Ciobanul îi explică, gesticulând, cum se frământă brânza și cum se îndeasă apoi în coajă de brad. La plecare, îi dă o bucată învelită într-un ștergar. «Să ai drum bun și să nu uiți de noi!» Linu pornește la vale fluierând, cu cel mai frumos suvenir din Carpați.',
        translation:
          'O pastor explica, gesticulando, como o queijo é amassado e depois socado dentro de casca de abeto. Na despedida, dá a ele um pedaço embrulhado num pano bordado. «Boa viagem, e não se esqueça de nós!» Linu desce a montanha assobiando, com o suvenir mais bonito dos Cárpatos.',
        ending: {
          tone: 'bom',
          title: 'O melhor suvenir dos Cárpatos',
          message: 'O Linu fugiu da chuva, conheceu a vida dos pastores e ainda levou queijo de verdade para casa.',
        },
      },
      lac: {
        emoji: '🏞️',
        text: 'Urcând ultimele serpentine, Linu simte că-i ard picioarele, dar nu se lasă bătut. Ajuns sus, rămâne cu gura căscată: lacul Bâlea strălucește ca o oglindă între piscurile golașe. Turiștii fac poze, iar vântul rece îi ciufulește penele. «A meritat fiecare pedală», își zice el, zâmbind până la urechi.',
        translation:
          'Subindo as últimas curvas, Linu sente as pernas arderem, mas não se dá por vencido. Chegando lá em cima, fica de queixo caído: o lago Bâlea brilha como um espelho entre os picos pelados. Os turistas tiram fotos, e o vento frio lhe arrepia as penas. «Valeu cada pedalada», diz a si mesmo, sorrindo de orelha a orelha.',
        ending: { tone: 'bom', title: 'No topo da Transfăgărășan', message: 'Com paciência e um bom conselho, o Linu viu o Bâlea Lac com o céu limpo.' },
      },
    },
  },
  {
    id: 'ro-h32',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Pădurea din Lacul Roșu',
    emoji: '🏞️',
    summary: 'O Linu visita o Lago Vermelho e as Gargantas do Bicaz: vai remar entre troncos, escalar com alpinistas ou provar doce nas barraquinhas?',
    cultural_context:
      'O Lago Vermelho (Lacul Roșu) se formou no século XIX, quando um deslizamento de terra represou um riacho e inundou uma floresta — os troncos de pinheiro ainda saem da água. Logo abaixo do lago começam as Gargantas do Bicaz, um desfiladeiro de paredes altíssimas cortado por uma estrada e muito procurado por escaladores.',
    start: 'start',
    glossary: [
      ['trunchi', 'tronco'],
      ['chei', 'garganta, desfiladeiro'],
      ['tarabă', 'barraca de feira'],
      ['a sta în cumpănă', 'hesitar, ficar em dúvida'],
      ['a-și lua inima în dinți', 'criar coragem'],
      ['cu inima cât un purice', 'morrendo de medo'],
      ['cu chiu, cu vai', 'a duras penas'],
      ['a o lua la sănătoasa', 'sair correndo, fugir'],
    ],
    nodes: {
      start: {
        emoji: '🚌',
        text: 'Linu coboară din autobuz la Lacul Roșu, cu harta în mână și cu aparatul foto atârnându-i de gât. Apa e verde-închis, iar din ea ies zeci de trunchiuri de brazi, ascuțite ca niște creioane. Un bătrân care închiriază bărci îl strigă, făcându-i semn cu mâna: «Hai la o plimbare, că mai încolo, în chei, e numai asfalt și mașini!» Linu stă în cumpănă: barca sau drumul prin chei?',
        translation:
          'Linu desce do ônibus no Lago Vermelho, com o mapa na mão e a câmera pendurada no pescoço. A água é verde-escura, e dela saem dezenas de troncos de pinheiro, pontudos como lápis. Um velho que aluga barcos o chama, acenando com a mão: «Vem dar um passeio, que mais adiante, nas gargantas, é só asfalto e carro!» Linu fica em dúvida: o barco ou a estrada pelas gargantas?',
        choices: [
          { text: 'Închiriază o barcă și vâslește printre trunchiuri.', translation: 'Aluga um barco e rema entre os troncos.', next: 'lac' },
          { text: 'Pornește pe jos spre Cheile Bicazului.', translation: 'Parte a pé rumo às Gargantas do Bicaz.', next: 'chei' },
          {
            text: 'Se miră că lacul nu are niciun copac în el.',
            translation: 'Estranha que o lago não tenha nenhuma árvore dentro.',
            wrong: 'É o contrário: da água saem dezenas de troncos de pinheiro («ies zeci de trunchiuri de brazi»), pontudos como lápis.',
          },
        ],
      },
      lac: {
        emoji: '🛶',
        text: 'Vâslind încet printre trunchiuri, Linu are impresia că plutește deasupra unei păduri scufundate. Bătrânul, venit cu el în barcă, îi povestește că lacul s-a născut acum aproape două sute de ani, când o bucată de munte s-a prăbușit și a blocat pârâul. «Apa a acoperit brazii, iar vârfurile lor au rămas afară, ca să ne aducă aminte», spune el. Linu ascultă cu gura căscată, uitând complet de oboseala drumului.',
        translation:
          'Remando devagar entre os troncos, Linu tem a impressão de flutuar sobre uma floresta submersa. O velho, que veio com ele no barco, conta que o lago nasceu há quase duzentos anos, quando um pedaço de montanha desabou e bloqueou o riacho. «A água cobriu os pinheiros, e as pontas deles ficaram de fora, para nos lembrar», diz ele. Linu escuta de queixo caído, esquecendo completamente o cansaço da viagem.',
        choices: [
          {
            text: 'Îi mulțumește bătrânului și pornește spre chei, încântat de poveste.',
            translation: 'Agradece ao velho e parte rumo às gargantas, encantado com a história.',
            next: 'chei',
          },
          {
            text: 'Se întoarce la mal și caută ceva de mâncare la tarabe.',
            translation: 'Volta para a margem e procura algo para comer nas barraquinhas.',
            next: 'taraba',
          },
          {
            text: 'Îl întreabă pe bătrân de ce au tăiat oamenii brazii din lac.',
            translation: 'Pergunta ao velho por que as pessoas cortaram os pinheiros do lago.',
            wrong:
              'Ninguém cortou os pinheiros: segundo o velho, a água cobriu as árvores («apa a acoperit brazii») quando um pedaço da montanha desabou e bloqueou o riacho, e só as pontas ficaram de fora.',
          },
        ],
      },
      chei: {
        emoji: '🧗',
        text: 'Intrând în chei, Linu simte cum pereții de piatră se ridică deasupra lui la sute de metri. Drumul șerpuiește printre stânci, iar mașinile trec încet, claxonând la fiecare curbă strâmtă. De undeva de sus se aud voci și un clinchet metalic de carabiniere. Ridicând ochii, dă de o echipă de alpiniști agățați de perete ca niște păianjeni.',
        translation:
          'Entrando nas gargantas, Linu sente as paredes de pedra se erguerem centenas de metros acima dele. A estrada serpenteia entre as rochas, e os carros passam devagar, buzinando a cada curva estreita. De algum lugar lá de cima se ouvem vozes e um tilintar metálico de mosquetões. Levantando os olhos, ele dá com uma equipe de alpinistas pendurados na parede como aranhas.',
        choices: [
          {
            text: 'Se apropie de peretele alpiniștilor și îi salută.',
            translation: 'Aproxima-se da parede dos alpinistas e os cumprimenta.',
            next: 'alpinisti',
          },
          { text: 'Merge mai departe, până la tarabele cu suveniruri.', translation: 'Segue em frente, até as barraquinhas de lembrancinhas.', next: 'taraba' },
        ],
      },
      alpinisti: {
        emoji: '🪢',
        text: 'La baza peretelui, o instructoare pe nume Irina strânge frânghiile, zâmbind. «Vrei să încerci?» îl întreabă ea. «Avem un traseu scurt pentru începători, iar eu te asigur de jos, deci n-ai de ce să-ți faci griji.» Linu se uită la perete, apoi la aripioarele lui scurte, și înghite în sec.',
        translation:
          'Na base da parede, uma instrutora chamada Irina recolhe as cordas, sorrindo. «Quer tentar?», pergunta ela. «Temos uma via curta para iniciantes, e eu faço a sua segurança lá de baixo, então você não tem por que se preocupar.» Linu olha para a parede, depois para as suas nadadeiras curtas, e engole em seco.',
        choices: [
          { text: 'Își ia inima în dinți și acceptă.', translation: 'Cria coragem e aceita.', next: 'escalada' },
          { text: 'Refuză politicos și merge mai departe pe jos.', translation: 'Recusa educadamente e segue a pé.', next: 'taraba' },
        ],
      },
      escalada: {
        emoji: '⛑️',
        text: 'Cu casca pe cap și legat în coardă, Linu urcă încet, căutând cu grijă fiecare priză. La jumătatea traseului, privește în jos și i se înmoaie picioarele: drumul pare o panglică subțire. «Nu te uita în jos! Respiră și mergi mai departe!» îi strigă Irina, ținând coarda bine întinsă. Linu stă agățat de stâncă, cu inima cât un purice.',
        translation:
          'De capacete na cabeça e amarrado na corda, Linu sobe devagar, procurando com cuidado cada agarra. No meio da via, olha para baixo e as pernas amolecem: a estrada parece uma fita fininha. «Não olhe para baixo! Respire e continue!», grita Irina, mantendo a corda bem esticada. Linu está agarrado à rocha, morrendo de medo.',
        choices: [
          { text: 'Respiră adânc și continuă să urce.', translation: 'Respira fundo e continua subindo.', next: 'final_varf' },
          { text: 'O roagă pe Irina să-l coboare.', translation: 'Pede à Irina que o desça.', next: 'final_jos' },
        ],
      },
      final_varf: {
        emoji: '🏔️',
        text: 'Cu chiu, cu vai, Linu ajunge la capătul traseului și atinge stânca cu aripa, triumfător. De acolo, vede cheile șerpuind spre vale și, departe, luciul verde al Lacului Roșu. Coborât încet de Irina, e întâmpinat cu aplauze de toată echipa. «Ai urcat ca un adevărat alpinist», îi spune ea, «deși ai aripi, nu gheare!»',
        translation:
          'A duras penas, Linu chega ao fim da via e toca a rocha com a asa, triunfante. Dali, vê as gargantas serpenteando rumo ao vale e, ao longe, o brilho verde do Lago Vermelho. Descido devagar pela Irina, é recebido com aplausos por toda a equipe. «Você subiu como um alpinista de verdade», diz ela, «mesmo tendo asas, e não garras!»',
        ending: { tone: 'bom', title: 'Pinguim alpinista', message: 'Com medo, mas respirando fundo, o Linu completou a via e viu as gargantas lá do alto.' },
      },
      final_jos: {
        emoji: '☕',
        text: 'Irina îl coboară încet, fără să-l certe câtuși de puțin. Ajuns jos, Linu se simte puțin rușinat, dar alpiniștii îl bat pe umăr, spunându-i că prima dată e mereu cea mai grea. Îi dau o cană de ceai fierbinte și îi arată fotografiile făcute de pe traseu. Linu râde: văzut de jos, peretele pare mult mai prietenos.',
        translation:
          'Irina o desce devagar, sem dar nem a menor bronca. Chegando embaixo, Linu se sente um pouco envergonhado, mas os alpinistas lhe dão tapinhas no ombro, dizendo que a primeira vez é sempre a mais difícil. Dão a ele uma caneca de chá quente e mostram as fotos tiradas da via. Linu ri: vista de baixo, a parede parece bem mais simpática.',
        ending: {
          tone: 'neutro',
          title: 'Meia parede já conta',
          message: 'O Linu não chegou ao fim da via, mas teve coragem de tentar — e ganhou novos amigos.',
        },
      },
      taraba: {
        emoji: '🫐',
        text: 'La marginea drumului sunt înșirate tarabe cu ceramică, căciuli de lână și borcane cu dulceață de afine. O vânzătoare îi oferă să guste, lăudându-și marfa: «Afinele le-am cules chiar eu, de pe munte!» Tocmai atunci, cerul se întunecă și încep să cadă picături mari. Vânzătorii se grăbesc să-și acopere marfa cu folii de plastic.',
        translation:
          'À beira da estrada estão enfileiradas barraquinhas com cerâmica, gorros de lã e potes de doce de mirtilo. Uma vendedora oferece para ele provar, elogiando a mercadoria: «Os mirtilos fui eu mesma que colhi, lá na montanha!» Justo nessa hora, o céu escurece e começam a cair gotas grossas. Os vendedores se apressam a cobrir a mercadoria com lonas de plástico.',
        choices: [
          { text: 'O ajută pe vânzătoare să-și acopere taraba.', translation: 'Ajuda a vendedora a cobrir a barraca.', next: 'final_taraba' },
          { text: 'O ia la sănătoasa spre stația de autobuz.', translation: 'Sai correndo para o ponto de ônibus.', next: 'final_fuga' },
        ],
      },
      final_taraba: {
        emoji: '🌈',
        text: 'Linu ține folia cu amândouă aripile, în timp ce vânzătoarea strânge borcanele, udă până la piele. Ploaia trece la fel de repede cum a venit, iar deasupra stâncilor apare un curcubeu. Drept mulțumire, femeia îi dă un borcan de dulceață și îi spune că vara viitoare îl așteaptă la cules de afine. Linu pleacă zâmbind, cu borcanul strâns la piept.',
        translation:
          'Linu segura a lona com as duas asas, enquanto a vendedora recolhe os potes, encharcada até os ossos. A chuva passa tão rápido quanto veio, e sobre as rochas aparece um arco-íris. Como agradecimento, a mulher lhe dá um pote de doce e diz que no verão que vem o espera para colher mirtilos. Linu vai embora sorrindo, com o pote apertado contra o peito.',
        ending: {
          tone: 'bom',
          title: 'Doce de mirtilo e arco-íris',
          message: 'Ajudando na hora da chuva, o Linu ganhou um presente e um convite para voltar às montanhas.',
        },
      },
      final_fuga: {
        emoji: '🌧️',
        text: 'Linu fuge spre stație, sărind peste bălți, și ajunge în autobuz ud leoarcă, tremurând de frig. Prin geamul aburit, vede cum ploaia se oprește după cinci minute. Vânzătorii își scot din nou marfa, râzând și glumind între ei. Linu oftează: a fugit degeaba și nici n-a apucat să guste dulceața.',
        translation:
          'Linu corre para o ponto, pulando as poças, e chega ao ônibus encharcado, tremendo de frio. Pelo vidro embaçado, vê a chuva parar depois de cinco minutos. Os vendedores expõem de novo a mercadoria, rindo e brincando entre si. Linu suspira: fugiu à toa e nem chegou a provar o doce.',
        ending: {
          tone: 'neutro',
          title: 'Fugiu à toa',
          message: 'Chuva de montanha costuma passar rápido. Se tivesse ficado, o Linu teria provado o doce de mirtilo.',
        },
      },
    },
  },
  {
    id: 'ro-h33',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Premiera de la Cluj',
    emoji: '🎬',
    summary: 'O Linu apresenta seu primeiro curta-metragem num festival de cinema em Cluj — e tudo pode dar errado antes da sessão.',
    cultural_context:
      'O Festival Internacional de Cinema da Transilvânia (TIFF) acontece todo ano em Cluj-Napoca desde 2002 e é o maior festival de cinema da Romênia; parte das sessões é ao ar livre, num telão na Piața Unirii.',
    start: 'start',
    glossary: [
      ['scurtmetraj', 'curta-metragem'],
      ['a avea trac', 'ter frio na barriga (medo de palco)'],
      ['proiecționist', 'projecionista'],
      ['subtitrare', 'legenda (de filme)'],
      ['vatman', 'condutor de bonde'],
      ['a-și sufleca mânecile', 'arregaçar as mangas'],
      ['a bate câmpii', 'divagar, falar sem nexo'],
      ['a fi în al nouălea cer', 'estar nas nuvens de felicidade'],
    ],
    nodes: {
      start: {
        emoji: '🚆',
        text: 'Linu coboară din tren la Cluj cu rucsacul în spinare și cu un nod în gât. Scurtmetrajul lui, «Ultimul tramvai», a fost selecționat la festival și va fi proiectat chiar în seara asta. Mergând spre centru, vede afișul filmului lipit pe un stâlp și îi vine să sară în sus de bucurie. Totuși, are un trac teribil: e prima dată când filmul lui va fi văzut de oameni necunoscuți.',
        translation:
          'Linu desce do trem em Cluj com a mochila nas costas e um nó na garganta. O curta-metragem dele, «O último bonde», foi selecionado para o festival e será exibido esta noite mesmo. Indo para o centro, vê o cartaz do filme colado num poste e tem vontade de pular de alegria. Mesmo assim, está com um frio na barriga terrível: é a primeira vez que o filme dele será visto por desconhecidos.',
        choices: [
          {
            text: 'Merge direct la cinematograf, ca să verifice copia filmului.',
            translation: 'Vai direto ao cinema, para conferir a cópia do filme.',
            next: 'cabina',
          },
          {
            text: 'Se plimbă prin oraș, ca să-și mai liniștească nervii.',
            translation: 'Passeia pela cidade, para acalmar um pouco os nervos.',
            next: 'plimbare',
          },
          {
            text: 'Se întreabă, trist, de ce festivalul i-a respins filmul.',
            translation: 'Pergunta-se, triste, por que o festival recusou o filme dele.',
            wrong:
              'O filme não foi recusado: ele foi selecionado («a fost selecționat») e será exibido esta noite. O Linu até vê o cartaz dele colado num poste.',
          },
        ],
      },
      plimbare: {
        emoji: '🏛️',
        text: 'În Piața Unirii, niște tehnicieni montează un ecran uriaș pentru proiecțiile în aer liber, trăgând cabluri printre bănci. Un domn în vârstă, stând pe o bancă, îi spune că vine la festival în fiecare an și că n-a ratat nicio ediție. «Aici, publicul e sincer: dacă filmul e bun, aplaudă; dacă nu, pleacă fără să-și facă griji că te supără», râde el. Tocmai atunci îi sună telefonul lui Linu: e proiecționistul, care pare foarte îngrijorat.',
        translation:
          'Na Piața Unirii, alguns técnicos montam um telão enorme para as sessões ao ar livre, puxando cabos entre os bancos. Um senhor de idade, sentado num banco, conta que vem ao festival todo ano e que não perdeu nenhuma edição. «Aqui o público é sincero: se o filme é bom, aplaude; se não é, vai embora sem se preocupar se vai te chatear», ri ele. Justo nessa hora o telefone do Linu toca: é o projecionista, que parece muito preocupado.',
        choices: [
          { text: 'Se întoarce în fugă la cinematograf.', translation: 'Volta correndo para o cinema.', next: 'cabina' },
          {
            text: 'Rămâne liniștit pe bancă, convins că proiecționistul îl sună ca să-l felicite.',
            translation: 'Fica tranquilo no banco, convencido de que o projecionista está ligando para dar os parabéns.',
            wrong: 'O projecionista parece muito preocupado («pare foarte îngrijorat»), então dificilmente está ligando para dar parabéns — algo deu errado.',
          },
        ],
      },
      cabina: {
        emoji: '📽️',
        text: 'În cabina de proiecție, proiecționistul, un tip cu ochelari rotunzi, îi arată ecranul, scărpinându-se în cap. Filmul merge, dar subtitrarea în engleză a dispărut complet, iar în sală vor fi mulți invitați străini. «Mai avem o oră până la proiecție», zice el. «Ori o refacem acum, ori dăm filmul așa cum e.»',
        translation:
          'Na cabine de projeção, o projecionista, um sujeito de óculos redondos, mostra a tela para ele, coçando a cabeça. O filme roda, mas a legenda em inglês desapareceu completamente, e na sala haverá muitos convidados estrangeiros. «Ainda temos uma hora até a sessão», diz ele. «Ou refazemos agora, ou passamos o filme do jeito que está.»',
        choices: [
          {
            text: 'Își suflecă mânecile și refac împreună subtitrarea.',
            translation: 'Arregaça as mangas e os dois refazem juntos a legenda.',
            next: 'reparat',
          },
          {
            text: 'Lasă filmul fără subtitrare, sperând că imaginile vor vorbi singure.',
            translation: 'Deixa o filme sem legenda, esperando que as imagens falem por si.',
            next: 'fara_subtitrare',
          },
        ],
      },
      reparat: {
        emoji: '⏱️',
        text: 'Lucrând contra cronometru, cei doi potrivesc replică cu replică, bând cafea după cafea. Cu cinci minute înainte de începere, subtitrarea apare perfect sincronizată pe ecran. Sala se umple, luminile se sting, iar Linu, ascuns pe ultimul rând, își ține respirația. Publicul râde exact unde trebuie și, la final, aplauzele durează aproape un minut.',
        translation:
          'Trabalhando contra o relógio, os dois acertam fala por fala, tomando café atrás de café. Cinco minutos antes do começo, a legenda aparece perfeitamente sincronizada na tela. A sala enche, as luzes se apagam, e Linu, escondido na última fila, prende a respiração. O público ri exatamente onde deve e, no fim, os aplausos duram quase um minuto.',
        choices: [{ text: 'Urcă pe scenă pentru sesiunea de întrebări.', translation: 'Sobe ao palco para a sessão de perguntas.', next: 'intrebari' }],
      },
      fara_subtitrare: {
        emoji: '😬',
        text: 'Filmul începe, iar Linu observă îngrozit cum câțiva spectatori străini se uită unii la alții, nedumeriți. La prima scenă cu dialog, un domn din rândul doi își scoate telefonul, căutând probabil o traducere. Văzând situația, moderatorul festivalului se apleacă spre Linu și îi șoptește ceva. «Vrei să traduci tu, live, din sală? Ar fi o premieră!»',
        translation:
          'O filme começa, e Linu nota, apavorado, que alguns espectadores estrangeiros se entreolham, confusos. Na primeira cena com diálogo, um senhor da segunda fila pega o celular, provavelmente procurando uma tradução. Vendo a situação, o moderador do festival se inclina para o Linu e cochicha algo. «Quer traduzir você mesmo, ao vivo, da plateia? Seria uma estreia!»',
        choices: [
          {
            text: 'Ia microfonul și traduce replicile în engleză, pe măsură ce rulează filmul.',
            translation: 'Pega o microfone e traduz as falas para o inglês, à medida que o filme passa.',
            next: 'final_live',
          },
          {
            text: 'Refuză și așteaptă, cu inima strânsă, să se termine filmul.',
            translation: 'Recusa e espera, com o coração apertado, o filme terminar.',
            next: 'intrebari',
          },
        ],
      },
      final_live: {
        emoji: '🎙️',
        text: 'La început, Linu traduce cu vocea tremurândă, apoi tot mai sigur pe el. Când vatmanul din film spune o glumă, Linu o traduce atât de comic, încât toată sala izbucnește în râs. La final, publicul aplaudă în picioare, iar moderatorul declară că a fost cea mai neobișnuită proiecție a ediției. Linu e în al nouălea cer.',
        translation:
          'No começo, Linu traduz com a voz trêmula, depois cada vez mais seguro de si. Quando o condutor de bonde do filme conta uma piada, Linu a traduz de um jeito tão engraçado que a sala inteira cai na gargalhada. No fim, o público aplaude de pé, e o moderador declara que foi a sessão mais inusitada da edição. Linu está nas nuvens.',
        ending: { tone: 'bom', title: 'Tradução ao vivo', message: 'Em vez de se esconder, o Linu transformou o problema em espetáculo — e a plateia adorou.' },
      },
      intrebari: {
        emoji: '🎤',
        text: 'Pe scenă, moderatorul îi dă microfonul, iar oamenii încep să pună întrebări. Un critic cu fular roșu se ridică, zâmbind ironic: «Nu e cam naiv un film de doisprezece minute despre un vatman bătrân?» În sală se lasă o liniște apăsătoare, iar Linu simte că i se usucă gura. Toate privirile sunt ațintite asupra lui.',
        translation:
          'No palco, o moderador lhe passa o microfone, e as pessoas começam a fazer perguntas. Um crítico de cachecol vermelho se levanta, sorrindo com ironia: «Não é meio ingênuo um filme de doze minutos sobre um velho condutor de bonde?» Na sala cai um silêncio pesado, e Linu sente a boca secar. Todos os olhares estão cravados nele.',
        choices: [
          {
            text: 'Răspunde calm, explicând de ce l-a ales pe vatman ca personaj.',
            translation: 'Responde com calma, explicando por que escolheu o condutor de bonde como personagem.',
            next: 'final_bun',
          },
          {
            text: 'Se enervează și începe să vorbească despre toate filmele pe care le-a văzut vreodată.',
            translation: 'Fica nervoso e começa a falar de todos os filmes que já viu na vida.',
            next: 'final_bate',
          },
          {
            text: 'Îi mulțumește criticului pentru complimentul entuziast.',
            translation: 'Agradece ao crítico pelo elogio entusiasmado.',
            wrong: 'O crítico não fez um elogio: ele sorriu com ironia («zâmbind ironic») e perguntou se o filme não é ingênuo demais.',
          },
        ],
      },
      final_bun: {
        emoji: '🚋',
        text: 'Linu respiră adânc și povestește că l-a cunoscut pe vatman într-o noapte de iarnă, în ultimul tramvai din Iași. Omul i-a vorbit despre orașul văzut din cabină timp de patruzeci de ani, iar Linu n-a mai putut uita povestea. «Uneori, poveștile mici sunt cele mai mari», încheie el, iar criticul dă din cap, impresionat, notând ceva în carnet. După proiecție, doi producători îl caută, întrebându-l ce plănuiește să filmeze în continuare.',
        translation:
          'Linu respira fundo e conta que conheceu o condutor numa noite de inverno, no último bonde de Iași. O homem falou da cidade vista da cabine durante quarenta anos, e Linu nunca mais conseguiu esquecer a história. «Às vezes, as histórias pequenas são as maiores», conclui ele, e o crítico acena com a cabeça, impressionado, anotando algo no caderno. Depois da sessão, dois produtores o procuram, perguntando o que ele planeja filmar em seguida.',
        ending: {
          tone: 'bom',
          title: 'Resposta de diretor',
          message: 'O Linu respondeu à provocação com calma e sinceridade — e ainda ganhou contatos para o próximo filme.',
        },
      },
      final_bate: {
        emoji: '🌀',
        text: 'Linu o ia pe arătură, sărind de la un film la altul și bătând câmpii minute în șir. Moderatorul încearcă de două ori să-l întrerupă politicos, dar degeaba. Câțiva spectatori se uită la ceas, iar criticul zâmbește și mai ironic. Seara, la hotel, Linu își dă seama că a vorbit despre orice, numai despre întrebare nu.',
        translation:
          'Linu sai pela tangente, pulando de um filme para outro e divagando por vários minutos. O moderador tenta duas vezes interrompê-lo educadamente, mas em vão. Alguns espectadores olham o relógio, e o crítico sorri com ainda mais ironia. À noite, no hotel, Linu percebe que falou de tudo, menos da pergunta.',
        ending: {
          tone: 'neutro',
          title: 'Falou, falou e não respondeu',
          message: 'O nervosismo fez o Linu divagar («a bate câmpii»). Numa sessão de perguntas, uma resposta curta e sincera vale mais.',
        },
      },
    },
  },
  {
    id: 'ro-h34',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Dezbatere la radio în Timișoara',
    emoji: '📻',
    summary: 'O Linu é convidado para um debate no rádio: fechar ou não o centro histórico de Timișoara para os carros?',
    cultural_context:
      'Timișoara foi, em 1884, uma das primeiras cidades da Europa a ter iluminação pública elétrica nas ruas; também foi ali que começou a Revolução Romena de dezembro de 1989.',
    start: 'start',
    glossary: [
      ['dezbatere', 'debate'],
      ['consider că', 'considero que'],
      ['din punctul meu de vedere', 'do meu ponto de vista'],
      ['a susține', 'defender, apoiar'],
      ['a fi de acord', 'concordar'],
      ['compromis', 'meio-termo, acordo'],
      ['ascultător', 'ouvinte'],
      ['consultare publică', 'consulta pública'],
    ],
    nodes: {
      start: {
        emoji: '🎙️',
        text: 'Linu locuiește de o lună în Timișoara și a fost invitat la o emisiune de dezbateri la un post de radio local. Tema de azi este dacă centrul istoric ar trebui închis complet pentru mașini. Moderatoarea, Ioana, explică regula: fiecare invitat are două minute ca să-și susțină punctul de vedere. «Linu, începem cu tine: ești pentru sau împotriva închiderii?»',
        translation:
          'Linu mora há um mês em Timișoara e foi convidado para um programa de debates numa rádio local. O tema de hoje é se o centro histórico deveria ser fechado completamente para os carros. A moderadora, Ioana, explica a regra: cada convidado tem dois minutos para defender o seu ponto de vista. «Linu, começamos com você: você é a favor ou contra o fechamento?»',
        choices: [
          {
            text: 'Consider că centrul ar trebui să fie doar pentru pietoni și bicicliști.',
            translation: 'Considero que o centro deveria ser só para pedestres e ciclistas.',
            next: 'pro',
          },
          {
            text: 'Aș prefera să aud mai întâi și argumentele celorlalți.',
            translation: 'Eu preferiria ouvir primeiro também os argumentos dos outros.',
            next: 'asculta',
          },
        ],
      },
      pro: {
        emoji: '🚲',
        text: 'Linu respiră adânc: «Din punctul meu de vedere, un centru fără mașini ar fi mai curat, mai liniștit și mai sigur pentru copii.» Celălalt invitat, domnul Popescu, care are un magazin de pantofi în centru, clatină din cap. «Înțeleg argumentul, însă mulți dintre clienții mei sunt în vârstă și vin cu mașina.» «Dacă închideți centrul, eu pierd jumătate dintre ei», adaugă el.',
        translation:
          'Linu respira fundo: «Do meu ponto de vista, um centro sem carros seria mais limpo, mais tranquilo e mais seguro para as crianças.» O outro convidado, o sr. Popescu, que tem uma loja de sapatos no centro, balança a cabeça. «Entendo o argumento, porém muitos dos meus clientes são idosos e vêm de carro.» «Se vocês fecharem o centro, eu perco metade deles», acrescenta ele.',
        choices: [
          {
            text: 'Propune un compromis care să țină cont și de clienții în vârstă.',
            translation: 'Propõe um meio-termo que leve em conta também os clientes idosos.',
            next: 'compromis',
          },
          { text: '«Atunci clienții în vârstă pot să stea acasă.»', translation: '«Então os clientes idosos podem ficar em casa.»', next: 'final_nepoliticos' },
          {
            text: '«Mă bucur că și dumneavoastră susțineți închiderea completă!»',
            translation: '«Que bom que o senhor também apoia o fechamento total!»',
            wrong:
              'O sr. Popescu NÃO apoia o fechamento. «Înțeleg argumentul, însă…» significa «Entendo o argumento, porém…»: ele reconhece a sua ideia, mas é contra, porque perderia os clientes idosos que vêm de carro.',
          },
        ],
      },
      asculta: {
        emoji: '👂',
        text: 'Ioana îi dă cuvântul întâi domnului Popescu, care are un magazin în centru: «Nu sunt de acord cu închiderea, pentru că clienții mei în vârstă vin cu mașina.» Apoi intră în direct Andra, o studentă: «Eu cred exact contrariul: aerul din centru e tot mai poluat, iar pe bicicletă mă simt în pericol.» Ioana se întoarce spre Linu. «Ai auzit ambele părți. Care e concluzia ta?»',
        translation:
          'Ioana dá a palavra primeiro ao sr. Popescu, que tem uma loja no centro: «Não concordo com o fechamento, porque os meus clientes idosos vêm de carro.» Depois entra ao vivo a Andra, uma estudante: «Eu penso exatamente o contrário: o ar do centro está cada vez mais poluído, e de bicicleta eu me sinto em perigo.» Ioana se vira para o Linu. «Você ouviu os dois lados. Qual é a sua conclusão?»',
        choices: [
          {
            text: 'Consider că amândoi au dreptate în parte și că e nevoie de un compromis.',
            translation: 'Considero que os dois têm razão em parte e que é preciso um meio-termo.',
            next: 'compromis',
          },
          {
            text: '«Sunt de acord cu Andra: mașinile trebuie să rămână în centru.»',
            translation: '«Concordo com a Andra: os carros devem continuar no centro.»',
            wrong:
              'A Andra defende o contrário! «Eu cred exact contrariul» (eu penso exatamente o contrário): ela reclama da poluição e do perigo para os ciclistas, ou seja, é a favor de fechar o centro. Quem quer os carros é o sr. Popescu.',
          },
        ],
      },
      compromis: {
        emoji: '🤝',
        text: 'Linu propune ca mașinile să aibă acces doar dimineața, între șase și zece, pentru aprovizionare, iar persoanele cu dizabilități să primească permise speciale. În plus, de la parcările de la marginea centrului ar putea circula un autobuz gratuit. Domnul Popescu se gândește: «Sună rezonabil, deși aș vrea garanții că autobuzul chiar va circula.» Deodată, un ascultător sună furios: «Toate dezbaterile astea sunt inutile, primăria oricum face ce vrea!»',
        translation:
          'Linu propõe que os carros tenham acesso só de manhã, entre seis e dez, para abastecimento, e que as pessoas com deficiência recebam autorizações especiais. Além disso, dos estacionamentos na borda do centro poderia circular um ônibus gratuito. O sr. Popescu pensa: «Parece razoável, embora eu quisesse garantias de que o ônibus vai mesmo circular.» De repente, um ouvinte liga furioso: «Todos esses debates são inúteis, a prefeitura faz o que quer de qualquer jeito!»',
        choices: [
          { text: 'Îi răspunde calm, cu argumente.', translation: 'Responde a ele com calma, com argumentos.', next: 'calm' },
          { text: 'Îl întrerupe și ridică tonul.', translation: 'Interrompe o ouvinte e levanta o tom de voz.', next: 'final_cearta' },
        ],
      },
      calm: {
        emoji: '🗣️',
        text: 'Linu zâmbește, deși ascultătorul l-a luat prin surprindere: «Vă înțeleg frustrarea. Totuși, sunt convins că, dacă cetățenii tac, sigur nu se schimbă nimic.» Ascultătorul face o pauză lungă: «Bine, poate că aveți dreptate.» Ioana anunță că joi va avea loc o consultare publică la primărie, unde oricine își poate prezenta propunerile.',
        translation:
          'Linu sorri, embora o ouvinte o tenha pegado de surpresa: «Entendo a sua frustração. Mesmo assim, estou convencido de que, se os cidadãos ficarem calados, com certeza nada muda.» O ouvinte faz uma pausa longa: «Está bem, talvez o senhor tenha razão.» Ioana anuncia que na quinta haverá uma consulta pública na prefeitura, onde qualquer pessoa pode apresentar suas propostas.',
        choices: [
          {
            text: 'Promite că va merge joi la primărie cu propunerea scrisă.',
            translation: 'Promete que vai à prefeitura na quinta com a proposta por escrito.',
            next: 'final_bom',
          },
        ],
      },
      final_bom: {
        emoji: '🏛️',
        text: 'Joi, sala de la primărie e plină. Linu își citește propunerea, iar domnul Popescu, spre surprinderea tuturor, o susține public. Ascultătorul furios de la radio e și el acolo și îi strânge mâna lui Linu. «N-am crezut că o dezbatere poate schimba ceva», recunoaște el.',
        translation:
          'Na quinta, a sala da prefeitura está cheia. Linu lê a sua proposta, e o sr. Popescu, para surpresa de todos, a apoia publicamente. O ouvinte furioso do rádio também está lá e aperta a mão do Linu. «Eu não achava que um debate pudesse mudar alguma coisa», admite ele.',
        ending: {
          tone: 'bom',
          title: 'Argumentar com respeito funciona',
          message: 'O Linu defendeu a sua opinião, ouviu o outro lado e construiu um meio-termo que convenceu até quem era contra.',
        },
      },
      final_nepoliticos: {
        emoji: '😬',
        text: 'În studio se face liniște. Domnul Popescu se ridică jignit, iar Ioana trece repede la publicitate. Pe pagina emisiunii apar zeci de comentarii supărate. «Ai avut argumente bune, dar le-ai pierdut pe toate într-o singură frază», îi spune Ioana după emisiune.',
        translation:
          'No estúdio, faz-se silêncio. O sr. Popescu se levanta ofendido, e Ioana passa rápido para os comerciais. Na página do programa aparecem dezenas de comentários irritados. «Você tinha bons argumentos, mas perdeu todos numa única frase», diz Ioana depois do programa.',
        ending: {
          tone: 'neutro',
          title: 'Argumento sem empatia',
          message: 'O Linu tinha razão sobre a poluição, mas desprezou os idosos e perdeu o público. Numa discussão, o tom também conta.',
        },
      },
      final_cearta: {
        emoji: '📵',
        text: 'Linu și ascultătorul încep să vorbească în același timp, tot mai tare. Ioana încearcă să-i calmeze, dar în cele din urmă închide legătura telefonică. Emisiunea se termină fără nicio concluzie. «Păcat, propunerea ta era chiar bună», oftează domnul Popescu.',
        translation:
          'Linu e o ouvinte começam a falar ao mesmo tempo, cada vez mais alto. Ioana tenta acalmá-los, mas no fim desliga a ligação. O programa termina sem nenhuma conclusão. «Pena, a sua proposta era mesmo boa», suspira o sr. Popescu.',
        ending: {
          tone: 'neutro',
          title: 'Briga em vez de debate',
          message: 'Ao levantar o tom, o Linu transformou o debate em briga, e a boa proposta dele se perdeu.',
        },
      },
    },
  },
  {
    id: 'ro-h35',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Un hotel pe dune?',
    emoji: '🏖️',
    summary: 'Em Constanța, o Linu participa de um debate público sobre a construção de um hotel nas dunas de Mamaia.',
    cultural_context:
      'Mamaia é uma estância balneária numa faixa estreita de areia entre o Mar Negro e o lago Siutghiol, ao norte de Constanța; a erosão das praias é um problema conhecido do litoral romeno. Na orla de Constanța fica o Cassino, prédio art nouveau do início do século XX que virou símbolo da cidade.',
    start: 'start',
    glossary: [
      ['faleză', 'orla, calçadão à beira-mar'],
      ['dună', 'duna'],
      ['salvamar', 'salva-vidas'],
      ['țăruș', 'estaca'],
      ['dezbatere publică', 'debate público'],
      ['a lua cuvântul', 'tomar a palavra'],
      ['din punctul meu de vedere', 'do meu ponto de vista'],
      ['a fi împotriva', 'ser contra'],
    ],
    nodes: {
      start: {
        emoji: '🌊',
        text: 'Linu se plimbă pe faleza din Constanța, pe lângă clădirea albă a Cazinoului, când dă peste un afiș: «Dezbatere publică: un hotel nou pe plaja din Mamaia?» Câteva minute mai târziu, îl sună prietena lui, Mihaela, care lucrează ca salvamar de zece veri. «Vii diseară la dezbatere? Consider că e important să vorbească și oameni fără interese în afacere», îi spune ea. Linu știe puțin despre subiect, dar e curios să afle mai multe.',
        translation:
          'Linu passeia pela orla de Constanța, ao lado do prédio branco do Cassino, quando dá com um cartaz: «Debate público: um hotel novo na praia de Mamaia?» Alguns minutos depois, liga para ele a amiga Mihaela, que trabalha como salva-vidas há dez verões. «Você vem hoje à noite ao debate? Considero importante que falem também pessoas sem interesse no negócio», diz ela. Linu sabe pouco sobre o assunto, mas está curioso para saber mais.',
        choices: [
          {
            text: 'Merge întâi pe plajă, ca să vadă locul cu ochii lui.',
            translation: 'Vai primeiro à praia, para ver o lugar com os próprios olhos.',
            next: 'plaja',
          },
          { text: 'Merge direct la dezbatere.', translation: 'Vai direto ao debate.', next: 'dezbatere' },
          {
            text: 'Crede că Mihaela îl invită la o petrecere pe plajă.',
            translation: 'Acha que a Mihaela está convidando para uma festa na praia.',
            wrong:
              'A Mihaela está convidando o Linu para um debate público («dezbatere publică») à noite, sobre um hotel novo na praia de Mamaia — não para uma festa.',
          },
        ],
      },
      plaja: {
        emoji: '🏝️',
        text: 'În nordul stațiunii Mamaia, Linu găsește țăruși înfipți chiar în dune, legați cu bandă roșie și albă. Un pescar bătrân, care își repară plasa pe nisip, îi spune că marea a mâncat mult din plajă în ultimii ani. «După mine, dacă betonăm și dunele, într-o zi valurile o să bată direct în pereții hotelurilor», zice el. Linu face câteva fotografii, gândindu-se că i-ar putea fi utile diseară.',
        translation:
          'No norte da estância de Mamaia, Linu encontra estacas fincadas bem nas dunas, amarradas com fita vermelha e branca. Um pescador velho, que conserta a rede na areia, conta que o mar comeu muito da praia nos últimos anos. «Para mim, se concretarmos também as dunas, um dia as ondas vão bater direto nas paredes dos hotéis», diz ele. Linu tira algumas fotos, pensando que podem ser úteis à noite.',
        choices: [
          {
            text: 'Pleacă spre sala de dezbatere, cu fotografiile în telefon.',
            translation: 'Vai para a sala do debate, com as fotos no celular.',
            next: 'dezbatere',
          },
        ],
      },
      dezbatere: {
        emoji: '🏛️',
        text: 'Sala de la primărie e plină de hotelieri, pescari, studenți și pensionari. Reprezentantul firmei de construcții ia primul cuvântul: «Din punctul nostru de vedere, proiectul aduce locuri de muncă și turiști tot anul. Plaja aceea e acum goală și nefolosită.» Mihaela ridică mâna și răspunde că o plajă goală nu e o plajă nefolosită, ci una care îi apără pe toți de furtuni. Moderatorul se întoarce apoi spre Linu: «Dumneavoastră ce părere aveți?»',
        translation:
          'A sala da prefeitura está cheia de hoteleiros, pescadores, estudantes e aposentados. O representante da construtora toma a palavra primeiro: «Do nosso ponto de vista, o projeto traz empregos e turistas o ano inteiro. Aquela praia hoje está vazia e sem uso.» Mihaela levanta a mão e responde que uma praia vazia não é uma praia sem uso, mas uma que protege todo mundo das tempestades. O moderador então se vira para o Linu: «E o senhor, qual é a sua opinião?»',
        choices: [
          {
            text: 'Își spune opinia calm, sprijinindu-se pe argumente.',
            translation: 'Dá a sua opinião com calma, apoiando-se em argumentos.',
            next: 'argument',
          },
          {
            text: 'Îl acuză pe reprezentantul firmei că se gândește doar la bani.',
            translation: 'Acusa o representante da construtora de só pensar em dinheiro.',
            next: 'final_atac',
          },
          {
            text: 'Spune că e de acord cu Mihaela, care susține construirea hotelului.',
            translation: 'Diz que concorda com a Mihaela, que defende a construção do hotel.',
            wrong:
              'A Mihaela é contra o hotel: para ela, a praia vazia protege todos das tempestades. Quem defende o projeto é o representante da construtora.',
          },
        ],
      },
      argument: {
        emoji: '🗣️',
        text: '«Consider că turismul e important pentru oraș și nu sunt împotriva hotelurilor în general», începe Linu. «Totuși, din punctul meu de vedere, dunele nu sunt un loc gol: ele țin nisipul pe loc, iar Mihaela vede în fiecare vară cum marea ia tot mai mult din plajă.» Reprezentantul firmei zâmbește: «Frumos spus, dar cine le dă oamenilor de aici de lucru iarna? Dunele?» Câțiva oameni din sală aplaudă, iar Linu simte că trebuie să vină cu o propunere concretă.',
        translation:
          '«Considero que o turismo é importante para a cidade e não sou contra hotéis em geral», começa Linu. «No entanto, do meu ponto de vista, as dunas não são um lugar vazio: elas seguram a areia no lugar, e a Mihaela vê todo verão o mar levar cada vez mais praia.» O representante da construtora sorri: «Bonito discurso, mas quem dá trabalho ao pessoal daqui no inverno? As dunas?» Algumas pessoas na sala aplaudem, e Linu sente que precisa apresentar uma proposta concreta.',
        choices: [
          {
            text: 'Propune ca hotelul să fie construit mai în spate, pe un teren deja betonat, fără să se atingă de dune.',
            translation: 'Propõe que o hotel seja construído mais para trás, num terreno já concretado, sem mexer nas dunas.',
            next: 'compromis',
          },
          {
            text: 'Cere interzicerea oricărei construcții noi pe tot litoralul.',
            translation: 'Pede a proibição de qualquer construção nova em todo o litoral.',
            next: 'final_interdictie',
          },
          {
            text: 'Recunoaște că, din punctul lui de vedere, dunele sunt un loc gol.',
            translation: 'Admite que, do ponto de vista dele, as dunas são um lugar vazio.',
            wrong: 'Foi o contrário: o Linu disse que as dunas não são um lugar vazio («nu sunt un loc gol»), porque seguram a areia no lugar.',
          },
        ],
      },
      compromis: {
        emoji: '🤝',
        text: 'Propunerea lui Linu stârnește murmure în sală. Proprietara unei terase din zonă ia cuvântul: «Sunt de acord cu el. Dacă dispare plaja, nu mai vin nici turiștii, deci n-o să mai avem ce câștiga.» Chiar și reprezentantul firmei recunoaște, fără prea mult entuziasm, că terenul din spatele plajei ar putea fi analizat. Moderatorul anunță că propunerile scrise se primesc până vineri.',
        translation:
          'A proposta do Linu provoca murmúrios na sala. A dona de um bar da região toma a palavra: «Concordo com ele. Se a praia desaparecer, os turistas também não vêm mais, e aí não vamos ter o que ganhar.» Até o representante da construtora admite, sem muito entusiasmo, que o terreno atrás da praia poderia ser analisado. O moderador anuncia que as propostas por escrito serão recebidas até sexta-feira.',
        choices: [
          {
            text: 'Se oferă să scrie propunerea împreună cu Mihaela.',
            translation: 'Oferece-se para escrever a proposta junto com a Mihaela.',
            next: 'final_bun',
          },
          {
            text: 'Pleacă acasă mulțumit, convins că ceilalți se vor ocupa de rest.',
            translation: 'Vai para casa satisfeito, convencido de que os outros cuidarão do resto.',
            next: 'final_uitat',
          },
        ],
      },
      final_bun: {
        emoji: '📝',
        text: 'Toată săptămâna, Linu și Mihaela lucrează la propunere, adunând fotografii ale dunelor, mărturii ale pescarilor și opinia unui profesor de geografie. Vineri, depun documentul la primărie, semnat de peste trei sute de localnici. Câteva săptămâni mai târziu, primăria anunță că hotelul va fi construit pe terenul din spate, iar dunele vor rămâne neatinse. Mihaela îl duce pe Linu pe plajă și îi arată, mândră, iarba care crește liniștită pe dune.',
        translation:
          'A semana inteira, Linu e Mihaela trabalham na proposta, reunindo fotos das dunas, depoimentos dos pescadores e a opinião de um professor de geografia. Na sexta, entregam o documento na prefeitura, assinado por mais de trezentos moradores. Algumas semanas depois, a prefeitura anuncia que o hotel será construído no terreno de trás, e as dunas ficarão intactas. Mihaela leva o Linu à praia e mostra, orgulhosa, o capim que cresce tranquilo nas dunas.',
        ending: {
          tone: 'bom',
          title: 'As dunas ficaram',
          message: 'O Linu deu a sua opinião com argumentos, ouviu o outro lado e transformou a ideia numa proposta concreta.',
        },
      },
      final_atac: {
        emoji: '💥',
        text: 'Sala se împarte imediat în două tabere care strigă una la alta. Reprezentantul firmei se declară jignit și refuză să mai răspundă la întrebări. Moderatorul încheie dezbaterea mai devreme, iar Mihaela îi spune lui Linu, oftând: «Aveai dreptate pe fond, dar ai pierdut sala.» Linu înțelege că un atac la persoană nu e un argument.',
        translation:
          'A sala se divide na hora em dois grupos que gritam um com o outro. O representante da construtora se declara ofendido e se recusa a responder a mais perguntas. O moderador encerra o debate mais cedo, e Mihaela diz ao Linu, suspirando: «Você tinha razão no mérito, mas perdeu a plateia.» Linu entende que um ataque pessoal não é um argumento.',
        ending: {
          tone: 'neutro',
          title: 'Ataque não é argumento',
          message: 'Acusar a pessoa em vez de discutir as ideias transformou o debate em briga. Opinião se defende com argumentos.',
        },
      },
      final_interdictie: {
        emoji: '🚫',
        text: 'Propunerea lui Linu cade prost: proprietarii de terase și chelnerii din sală protestează imediat. «Și noi din ce trăim?» strigă cineva din spate. Dezbaterea se transformă într-o ceartă, iar ideea de a proteja dunele se pierde în gălăgie. În drum spre casă, Linu recunoaște că a ignorat nevoile celorlalți.',
        translation:
          'A proposta do Linu cai mal: os donos de bares e os garçons na sala protestam na hora. «E nós vivemos de quê?», grita alguém lá do fundo. O debate vira uma discussão, e a ideia de proteger as dunas se perde no barulho. A caminho de casa, Linu reconhece que ignorou as necessidades dos outros.',
        ending: {
          tone: 'neutro',
          title: 'Tudo ou nada',
          message: 'Proibir tudo ignorou quem vive do turismo. Um bom argumento leva em conta os interesses do outro lado.',
        },
      },
      final_uitat: {
        emoji: '🚜',
        text: 'Linu se întoarce acasă mulțumit, convins că a făcut destul. Vinerea trece fără ca cineva să depună vreo propunere scrisă. Luna următoare, primăria aprobă proiectul inițial, iar pe dune apar primele buldozere. Linu își dă seama că o opinie spusă într-o sală nu schimbă nimic dacă nu e urmată de fapte.',
        translation:
          'Linu volta para casa satisfeito, convencido de que fez o bastante. A sexta-feira passa sem que ninguém entregue nenhuma proposta por escrito. No mês seguinte, a prefeitura aprova o projeto original, e nas dunas aparecem as primeiras escavadeiras. Linu percebe que uma opinião dita numa sala não muda nada se não vier acompanhada de ação.',
        ending: {
          tone: 'neutro',
          title: 'Opinião sem ação',
          message: 'O Linu argumentou bem, mas ninguém levou a proposta adiante. Às vezes, depois de opinar, é preciso agir.',
        },
      },
    },
  },
  {
    id: 'ro-h36',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Zvonul de la Iași',
    emoji: '📰',
    summary: 'No jornal dos estudantes em Iași, o Linu precisa decidir: publicar logo um boato viral ou checar antes?',
    cultural_context: 'A Universidade de Iași, fundada em 1860 durante o governo do príncipe Alexandru Ioan Cuza, é a universidade mais antiga da Romênia.',
    start: 'start',
    glossary: [
      ['zvon', 'boato'],
      ['a verifica', 'verificar, checar'],
      ['în opinia mea', 'na minha opinião'],
      ['credibilitate', 'credibilidade'],
      ['a răspândi', 'espalhar'],
      ['sursă', 'fonte'],
      ['corectură', 'correção, errata'],
      ['redactor-șef', 'editor-chefe'],
    ],
    nodes: {
      start: {
        emoji: '📱',
        text: 'Linu studiază un semestru la Iași, prin Erasmus, și scrie pentru ziarul studenților. Luni dimineață, pe grupul facultății apare o postare care se răspândește rapid: «Biblioteca facultății se închide definitiv din lipsă de bani!» Radu, redactorul-șef, e entuziasmat: «Publicăm imediat! Dacă mai așteptăm, ne-o iau alții înainte.» Toți cei din redacție se uită la Linu.',
        translation:
          'Linu estuda um semestre em Iași, pelo Erasmus, e escreve para o jornal dos estudantes. Segunda de manhã, no grupo da faculdade aparece uma postagem que se espalha rápido: «A biblioteca da faculdade vai fechar definitivamente por falta de dinheiro!» Radu, o editor-chefe, está empolgado: «Vamos publicar agora! Se esperarmos mais, os outros saem na frente.» Todos na redação olham para o Linu.',
        choices: [
          {
            text: 'Îi spune că, din punctul lui de vedere, informația trebuie verificată mai întâi.',
            translation: 'Diz a ele que, do seu ponto de vista, a informação precisa ser verificada primeiro.',
            next: 'verificare',
          },
          { text: 'Scrie repede articolul, așa cum vrea Radu.', translation: 'Escreve a matéria rapidinho, como o Radu quer.', next: 'publicat' },
        ],
      },
      verificare: {
        emoji: '🔎',
        text: 'Radu protestează: «Dar toată lumea vorbește despre asta! Nu poate fi o minciună.» Linu îi răspunde calm: «Faptul că mii de oameni distribuie o știre nu dovedește că este adevărată.» «În opinia mea, credibilitatea ziarului contează mai mult decât viteza.» Radu oftează: «Bine, ai o oră. Convinge-mă.»',
        translation:
          'Radu protesta: «Mas todo mundo está falando disso! Não pode ser mentira.» Linu responde com calma: «O fato de milhares de pessoas compartilharem uma notícia não prova que ela seja verdadeira.» «Na minha opinião, a credibilidade do jornal importa mais do que a velocidade.» Radu suspira: «Está bem, você tem uma hora. Me convença.»',
        choices: [
          { text: 'Sună la secretariatul facultății.', translation: 'Liga para a secretaria da faculdade.', next: 'secretariat' },
          { text: 'Caută autorul postării originale.', translation: 'Procura o autor da postagem original.', next: 'autor' },
        ],
      },
      autor: {
        emoji: '🙈',
        text: 'Autoarea postării este Bianca, o studentă în anul întâi. Ea recunoaște, jenată: «Am văzut un afiș cu „Închis” pe ușa sălii de lectură și am presupus restul.» «Nu credeam că postarea o să se răspândească așa.» Nu-și mai amintește ce altceva scria pe afiș.',
        translation:
          'A autora da postagem é a Bianca, uma caloura. Ela admite, envergonhada: «Eu vi um cartaz com „Fechado” na porta da sala de leitura e presumi o resto.» «Eu não achava que a postagem fosse se espalhar assim.» Ela não lembra mais o que mais estava escrito no cartaz.',
        choices: [
          {
            text: 'Merge la secretariat ca să afle ce scria exact pe afiș.',
            translation: 'Vai à secretaria para descobrir o que exatamente dizia o cartaz.',
            next: 'secretariat',
          },
          {
            text: 'Notează că Bianca a mințit intenționat ca să facă scandal.',
            translation: 'Anota que a Bianca mentiu de propósito para causar escândalo.',
            wrong:
              'A Bianca não mentiu de propósito. Ela disse «am presupus restul» (presumi o resto) e «nu credeam că…» (eu não achava que…): foi uma conclusão precipitada, não má-fé.',
          },
        ],
      },
      secretariat: {
        emoji: '📋',
        text: 'Secretara zâmbește și îi arată anunțul oficial: «Biblioteca nu se închide. Doar sala de lectură se renovează timp de două săptămâni.» «Între timp, cărțile se pot împrumuta în continuare de la ghișeul de la parter.» Linu înțelege că zvonul a pornit de la o informație adevărată, dar deformată.',
        translation:
          'A secretária sorri e mostra o aviso oficial: «A biblioteca não vai fechar. Só a sala de leitura vai ser reformada durante duas semanas.» «Enquanto isso, os livros continuam podendo ser emprestados no balcão do térreo.» Linu entende que o boato nasceu de uma informação verdadeira, mas distorcida.',
        choices: [
          {
            text: 'Îi explică lui Radu că e vorba doar de o renovare temporară.',
            translation: 'Explica ao Radu que se trata só de uma reforma temporária.',
            next: 'articol',
          },
          {
            text: 'Îi spune lui Radu că biblioteca se închide pentru totdeauna.',
            translation: 'Diz ao Radu que a biblioteca vai fechar para sempre.',
            wrong:
              'A secretária disse o contrário: «Biblioteca nu se închide», a biblioteca NÃO vai fechar. Só a sala de leitura será reformada por duas semanas, e os livros continuam sendo emprestados.',
          },
        ],
      },
      articol: {
        emoji: '✍️',
        text: 'Radu citește notițele lui Linu și dă din cap. «Ai avut dreptate, dar acum avem altă problemă: o știre falsă demontată nu e la fel de spectaculoasă.» Cei doi discută câteva minute despre titlu. Radu vrea ceva care să atragă atenția, Linu vrea ceva corect.',
        translation:
          'Radu lê as anotações do Linu e concorda com a cabeça. «Você tinha razão, mas agora temos outro problema: uma notícia falsa desmentida não é tão espetacular.» Os dois discutem alguns minutos sobre o título. Radu quer algo que chame a atenção, Linu quer algo correto.',
        choices: [
          {
            text: 'Propune titlul «Biblioteca rămâne deschisă: cum s-a născut un zvon».',
            translation: 'Propõe o título «A biblioteca continua aberta: como nasceu um boato».',
            next: 'final_bom',
          },
          {
            text: 'Acceptă titlul lui Radu: «Studenta care a păcălit tot campusul».',
            translation: 'Aceita o título do Radu: «A estudante que enganou o campus inteiro».',
            next: 'final_senzational',
          },
        ],
      },
      publicat: {
        emoji: '📈',
        text: 'Articolul apare pe site în zece minute și adună mii de vizualizări într-o oră. Apoi decanatul publică un comunicat: biblioteca nu se închide, doar sala de lectură se renovează două săptămâni. În comentarii, cititorii acuză ziarul că răspândește știri false. Radu, palid, îl întreabă pe Linu: «Și acum ce facem?»',
        translation:
          'A matéria sai no site em dez minutos e junta milhares de visualizações em uma hora. Depois a direção da faculdade publica um comunicado: a biblioteca não vai fechar, só a sala de leitura será reformada por duas semanas. Nos comentários, os leitores acusam o jornal de espalhar notícias falsas. Radu, pálido, pergunta ao Linu: «E agora, o que a gente faz?»',
        choices: [
          {
            text: 'Publică imediat o corectură și își cer scuze cititorilor.',
            translation: 'Publicam imediatamente uma correção e pedem desculpas aos leitores.',
            next: 'final_corectie',
          },
          {
            text: 'Șterg articolul și speră că nimeni nu a observat.',
            translation: 'Apagam a matéria e esperam que ninguém tenha percebido.',
            next: 'final_ascuns',
          },
        ],
      },
      final_bom: {
        emoji: '🏆',
        text: 'Articolul lui Linu explică pas cu pas cum o informație adevărată a devenit un zvon. Bianca îi mulțumește că nu a făcut-o de râs și scrie chiar ea un comentariu despre lecția învățată. Profesoara de jurnalism folosește textul la curs ca exemplu. Radu recunoaște: «Din punctul meu de vedere, ăsta e cel mai bun articol al nostru din semestrul ăsta.»',
        translation:
          'A matéria do Linu explica passo a passo como uma informação verdadeira virou um boato. A Bianca agradece por ele não a ter feito passar vergonha e ela mesma escreve um comentário sobre a lição aprendida. A professora de jornalismo usa o texto na aula como exemplo. Radu admite: «Do meu ponto de vista, essa é a nossa melhor matéria deste semestre.»',
        ending: {
          tone: 'bom',
          title: 'Jornalismo de verdade',
          message: 'O Linu defendeu a checagem antes da pressa e publicou uma matéria correta, útil e justa com todos.',
        },
      },
      final_senzational: {
        emoji: '😔',
        text: 'Titlul atrage multe clicuri, dar Bianca primește zeci de mesaje răutăcioase. Ea scrie redacției că nu a vrut să păcălească pe nimeni și că se simte umilită. Mulți studenți consideră că ziarul a fost nedrept cu ea. Linu regretă că nu și-a susținut propriul titlu până la capăt.',
        translation:
          'O título atrai muitos cliques, mas a Bianca recebe dezenas de mensagens maldosas. Ela escreve à redação que não quis enganar ninguém e que se sente humilhada. Muitos estudantes consideram que o jornal foi injusto com ela. Linu se arrepende de não ter defendido o próprio título até o fim.',
        ending: {
          tone: 'neutro',
          title: 'Correto, mas cruel',
          message: 'Os fatos estavam certos, mas o título sensacionalista expôs uma colega que só tinha errado sem querer.',
        },
      },
      final_corectie: {
        emoji: '📝',
        text: 'Corectura apare în aceeași seară, cu scuze clare pentru cititori. Unii apreciază sinceritatea, alții spun că nu vor mai avea încredere în ziar. Radu propune o regulă nouă: nicio știre nu se publică fără cel puțin două surse. «De acum înainte verificăm totul, oricât de grăbiți am fi», spune el.',
        translation:
          'A correção sai na mesma noite, com desculpas claras aos leitores. Alguns apreciam a sinceridade, outros dizem que não vão mais confiar no jornal. Radu propõe uma regra nova: nenhuma notícia é publicada sem pelo menos duas fontes. «De agora em diante, a gente verifica tudo, por mais pressa que tenhamos», diz ele.',
        ending: {
          tone: 'neutro',
          title: 'Lição aprendida',
          message: 'A pressa custou caro, mas assumir o erro publicamente salvou parte da credibilidade do jornal.',
        },
      },
      final_ascuns: {
        emoji: '📸',
        text: 'Linu și Radu șterg articolul, dar cineva făcuse deja capturi de ecran. A doua zi, pozele circulă pe toate grupurile, alături de întrebarea «De ce și-a ascuns ziarul greșeala?». Scandalul este acum mai mare decât zvonul inițial. Redacția pierde jumătate dintre cititori într-o săptămână.',
        translation:
          'Linu e Radu apagam a matéria, mas alguém já tinha feito capturas de tela. No dia seguinte, as imagens circulam em todos os grupos, junto com a pergunta «Por que o jornal escondeu o próprio erro?». O escândalo agora é maior que o boato inicial. A redação perde metade dos leitores em uma semana.',
        ending: {
          tone: 'neutro',
          title: 'Pior a emenda que o soneto',
          message: 'Esconder o erro fez o jornal parecer desonesto. Na imprensa, a correção pública vale mais que o silêncio.',
        },
      },
    },
  },
  {
    id: 'ro-h37',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Ironie la birou',
    emoji: '💼',
    summary: 'Primeiro dia do Linu numa empresa de Timișoara: entre ironias, «tu» e «dumneavoastră», ele precisa ler o tom dos colegas.',
    cultural_context:
      'Em romeno, «dumneavoastră» é o tratamento formal para desconhecidos, pessoas mais velhas e superiores, mas em empresas jovens é comum todos se tratarem por «tu». Timișoara foi a primeira cidade da Europa continental com iluminação pública elétrica nas ruas, em 1884.',
    start: 'start',
    glossary: [
      ['a se tutui', 'tratar-se por «tu»'],
      ['a lua peste picior', 'zoar, tirar sarro de alguém'],
      ['pe bune?', 'sério? (coloquial)'],
      ['a face mișto (de)', 'zoar, fazer piada (de) — coloquial'],
      ['a-și da ochii peste cap', 'revirar os olhos'],
      ['ședință', 'reunião'],
      ['a ridica din umeri', 'dar de ombros'],
    ],
    nodes: {
      start: {
        emoji: '🏢',
        text: 'Linu începe azi un job nou la o firmă de software din Timișoara. Colegul lui de birou, Andrei, îi strânge aripa și îi explică regulile nescrise: «Aici ne tutuim toți, chiar și cu șefa. Doar să nu-i spui „dumneavoastră”, că se simte de o sută de ani.» Andrei face cu ochiul, iar Linu nu-și dă seama dacă vorbește serios. Peste zece minute, șefa, Irina, trece pe lângă biroul lor.',
        translation:
          'Linu começa hoje num emprego novo numa empresa de software em Timișoara. O colega de mesa, Andrei, aperta a asa dele e explica as regras não escritas: «Aqui todo mundo se trata por tu, até com a chefe. Só não a chame de „dumneavoastră”, que ela se sente com cem anos.» Andrei pisca, e Linu não sabe se ele está falando sério. Dez minutos depois, a chefe, Irina, passa pela mesa deles.',
        choices: [
          { text: '«Pe bune sau mă iei peste picior?»', translation: '«Sério, ou você está tirando sarro de mim?»', next: 'pebune' },
          {
            text: 'Linu se ridică și o salută foarte politicos: «Bună ziua, doamnă, mă bucur să vă cunosc.»',
            translation: 'Linu se levanta e a cumprimenta muito educadamente: «Bom dia, senhora, prazer em conhecê-la.»',
            next: 'sefa_formal',
          },
        ],
      },
      pebune: {
        emoji: '🤨',
        text: 'Andrei râde: «Pe jumătate. Ne tutuim, asta e adevărat. Partea cu „o sută de ani” e contribuția mea personală.» Irina se oprește lângă ei; a auzit tot și ridică o sprânceană: «Mulțumesc, Andrei, ești mereu atât de galant.» Apoi îi întinde mâna lui Linu: «Eu sunt Irina, bine ai venit! La zece avem ședință, și tu prezinți primul.»',
        translation:
          'Andrei ri: «Meio a meio. A gente se trata por tu, isso é verdade. A parte dos „cem anos” é contribuição minha.» Irina para ao lado deles; ouviu tudo e ergue uma sobrancelha: «Obrigada, Andrei, você é sempre tão galante.» Depois estende a mão para o Linu: «Eu sou a Irina, seja bem-vindo! Às dez temos reunião, e você apresenta primeiro.»',
        choices: [
          {
            text: 'Irina l-a lăudat pe Andrei: el e cel mai politicos om din birou.',
            translation: 'Irina elogiou o Andrei: ele é a pessoa mais educada do escritório.',
            wrong:
              'Era ironia! Irina disse «ești mereu atât de galant» com a sobrancelha erguida, logo depois de Andrei brincar que ela se sentia com cem anos. Ela quis dizer o contrário: que ele não foi nada galante.',
          },
          { text: 'Linu își pregătește laptopul pentru ședință.', translation: 'Linu prepara o laptop para a reunião.', next: 'sedinta' },
        ],
      },
      sefa_formal: {
        emoji: '😅',
        text: 'Irina zâmbește, puțin amuzată: «Vai, „doamnă” și „dumneavoastră”? Mă faci să mă simt de o sută de ani. Spune-mi Irina și tutuiește-mă, te rog.» Andrei se preface că tușește, ca să nu râdă: «Ți-am zis eu.» Irina adaugă: «La zece avem ședință, și tu prezinți primul.»',
        translation:
          'Irina sorri, um pouco divertida: «Nossa, „senhora” e „dumneavoastră”? Assim você me faz sentir com cem anos. Me chame de Irina e me trate por tu, por favor.» Andrei finge tossir para não rir: «Eu te avisei.» Irina acrescenta: «Às dez temos reunião, e você apresenta primeiro.»',
        choices: [{ text: 'Linu își pregătește laptopul pentru ședință.', translation: 'Linu prepara o laptop para a reunião.', next: 'sedinta' }],
      },
      sedinta: {
        emoji: '📽️',
        text: 'La ședință, Linu își conectează laptopul, dar proiectorul se stinge chiar pe primul slide. Andrei oftează teatral: «Minunat. Exact ce ne lipsea într-o luni dimineață.» Toată lumea râde, iar cineva adaugă: «Timișoara a fost primul oraș din Europa continentală cu iluminat electric pe străzi, și noi nu putem porni un proiector.» Irina se uită la Linu: «Ai prins ce voia să zică Andrei?»',
        translation:
          'Na reunião, Linu conecta o laptop, mas o projetor apaga bem no primeiro slide. Andrei suspira de forma teatral: «Maravilha. Era exatamente o que faltava numa segunda de manhã.» Todos riem, e alguém acrescenta: «Timișoara foi a primeira cidade da Europa continental com iluminação elétrica nas ruas, e a gente não consegue ligar um projetor.» Irina olha para o Linu: «Você pegou o que o Andrei quis dizer?»',
        choices: [
          {
            text: '«Da, că lui Andrei îi place când se strică proiectorul.»',
            translation: '«Sim, que o Andrei gosta quando o projetor quebra.»',
            wrong:
              '«Minunat. Exact ce ne lipsea» é ironia: Andrei suspirou de forma teatral, ou seja, quis dizer que a pane era a última coisa de que precisavam numa segunda de manhã.',
          },
          {
            text: '«Am prins. Andrei, dacă tot ești așa de entuziasmat, îți las ție onoarea să-l repornești.»',
            translation: '«Peguei. Andrei, já que você está tão empolgado, deixo para você a honra de religá-lo.»',
            next: 'pranz',
          },
          { text: 'Linu nu spune nimic și se uită în podea, jenat.', translation: 'Linu não diz nada e olha para o chão, constrangido.', next: 'tacere' },
        ],
      },
      tacere: {
        emoji: '☕',
        text: 'Linu termină prezentarea în grabă, cu vocea stinsă. În pauză, Andrei vine la biroul lui cu două cafele: «Hei, n-am vrut să te jignesc. La noi, când ceva merge prost, facem mișto de situație, nu de om.» Apoi adaugă, mai încet: «Altfel am plânge de trei ori pe zi.» Îi întinde o cafea și așteaptă un răspuns.',
        translation:
          'Linu termina a apresentação às pressas, com a voz apagada. No intervalo, Andrei vem à mesa dele com dois cafés: «Ei, não quis te ofender. Aqui, quando algo dá errado, a gente zoa a situação, não a pessoa.» Depois acrescenta, mais baixo: «Senão a gente chorava três vezes por dia.» Ele estende um café e espera uma resposta.',
        choices: [
          {
            text: '«Bine, atunci data viitoare fac eu mișto de laptopul tău.»',
            translation: '«Tá bom, então da próxima vez sou eu que zoo o seu laptop.»',
            next: 'pranz',
          },
          {
            text: '«Prefer să păstrăm lucrurile profesionale, dacă nu te superi.»',
            translation: '«Prefiro que a gente mantenha as coisas profissionais, se não se importa.»',
            next: 'final_rece',
          },
        ],
      },
      pranz: {
        emoji: '🍲',
        text: 'La prânz, Andrei și Irina îl duc pe Linu la o cantină de lângă birou. Andrei îi arată meniul cu un aer grav: «Ciorbă de burtă. Nu e pentru oricine, e doar pentru cei curajoși.» Irina își dă ochii peste cap: «Nu-l asculta, e doar o supă. Dar dacă vrei să-l impresionezi, comand-o.» Linu se uită la meniu și ia o hotărâre.',
        translation:
          'No almoço, Andrei e Irina levam o Linu a um restaurante simples perto do escritório. Andrei mostra o cardápio com ar sério: «Sopa de bucho. Não é para qualquer um, só para os corajosos.» Irina revira os olhos: «Não dê ouvidos, é só uma sopa. Mas, se quiser impressioná-lo, peça.» Linu olha o cardápio e toma uma decisão.',
        choices: [
          {
            text: '«Am supraviețuit iernilor din Antarctica. O ciorbă nu mă sperie.»',
            translation: '«Sobrevivi aos invernos da Antártida. Uma sopa não me assusta.»',
            next: 'final_bom',
          },
          { text: '«Doamnă Irina, dumneavoastră ce îmi recomandați?»', translation: '«Dona Irina, o que a senhora me recomenda?»', next: 'final_formal' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu mănâncă toată ciorba, cu smântână și ardei iute, fără să clipească. Andrei aplaudă: «Gata, ai trecut testul. Ești oficial de-al nostru.» Irina râde: «Iar mâine tu faci glumele despre proiector.» Linu simte că, în prima zi, a învățat cea mai importantă regulă nescrisă: aici umorul e o formă de prietenie.',
        translation:
          'Linu toma a sopa inteira, com creme azedo e pimenta, sem piscar. Andrei aplaude: «Pronto, passou no teste. Agora é oficialmente um de nós.» Irina ri: «E amanhã é você quem faz as piadas sobre o projetor.» Linu sente que, no primeiro dia, aprendeu a regra não escrita mais importante: aqui o humor é uma forma de amizade.',
        ending: {
          tone: 'bom',
          title: 'Um de nós!',
          message: 'Você entendeu a ironia e respondeu no mesmo tom. Em muitos escritórios romenos, o humor e o «tu» são sinais de confiança.',
        },
      },
      final_formal: {
        emoji: '🧾',
        text: 'Irina oftează și zâmbește: «Iar „doamnă”! Linu, o să te amendez cu o cafea de fiecare dată când îmi spui așa.» Andrei își notează ceva pe un șervețel: «Prima cafea. Țin eu evidența.» Linu râde și el, puțin roșu în obraji. Până la sfârșitul săptămânii, îi datorează Irinei șapte cafele.',
        translation:
          'Irina suspira e sorri: «De novo „senhora”! Linu, vou te multar em um café toda vez que você me chamar assim.» Andrei anota algo num guardanapo: «Primeiro café. Eu fico com a contabilidade.» Linu ri também, um pouco corado. Até o fim da semana, ele deve sete cafés à Irina.',
        ending: {
          tone: 'neutro',
          title: 'Sete cafés de dívida',
          message: 'Educação nunca é crime, mas aqui a chefe pediu o «tu». Saber quando largar o formal também faz parte da fluência.',
        },
      },
      final_rece: {
        emoji: '🧊',
        text: 'Andrei ridică din umeri: «Cum vrei.» Din ziua aceea, colegii îi vorbesc lui Linu politicos, dar fără glume. Nimeni nu-l mai ia peste picior, însă nici nu-l mai cheamă la prânz. Uneori îi aude râzând în bucătărie și se întreabă ce a pierdut.',
        translation:
          'Andrei dá de ombros: «Como quiser.» Daquele dia em diante, os colegas falam com o Linu com educação, mas sem piadas. Ninguém mais tira sarro dele, mas também ninguém mais o chama para almoçar. Às vezes ele os ouve rindo na copa e se pergunta o que perdeu.',
        ending: {
          tone: 'neutro',
          title: 'Educado, mas de fora',
          message: 'A provocação do Andrei era um convite para entrar no grupo. Na Romênia, como no Brasil, zoar alguém costuma ser sinal de intimidade.',
        },
      },
    },
  },
  {
    id: 'ro-h38',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Nuntă la Iași',
    emoji: '💒',
    summary: 'Linu vai ao casamento de uma amiga em Iași e precisa acertar o tom: no brinde, nas piadas do tio e no «roubo da noiva».',
    cultural_context:
      'Nos casamentos romenos, os nași (padrinhos) têm papel central, e os convidados costumam dar dinheiro de presente. Uma tradição comum é o «furatul miresei»: amigos ou parentes «roubam» a noiva durante a festa, e o noivo precisa pagar um resgate de brincadeira, geralmente bebida e alguma prenda divertida.',
    start: 'start',
    glossary: [
      ['mire / mireasă', 'noivo / noiva'],
      ['naș / nași', 'padrinho / padrinhos de casamento'],
      ['urare', 'votos, brinde'],
      ['a răscumpăra', 'resgatar'],
      ['nepotu-meu', 'meu sobrinho (coloquial)'],
      ['ca lumea', 'direito, como se deve (coloquial)'],
      ['a chicoti', 'dar risadinhas'],
    ],
    nodes: {
      start: {
        emoji: '💃',
        text: 'Linu a fost invitat la nunta prietenei lui, Ioana, într-un restaurant mare din Iași. Muzica e deja tare, iar pe mese sunt mai multe feluri de mâncare decât poate număra. La masa lui stă nenea Costel, unchiul mirelui, care îl măsoară din cap până în picioare. «Ia te uită, un pinguin!», zice el. «Măcar tu ai venit gata îmbrăcat la costum, nu ca nepotu-meu, care și-a căutat cravata toată dimineața.»',
        translation:
          'Linu foi convidado para o casamento da amiga, Ioana, num restaurante grande de Iași. A música já está alta, e nas mesas há mais pratos do que ele consegue contar. Na mesa dele está o tio Costel, tio do noivo, que o mede da cabeça aos pés. «Olha só, um pinguim!», diz ele. «Pelo menos você já veio de terno, não como o meu sobrinho, que passou a manhã inteira procurando a gravata.»',
        choices: [
          {
            text: '«Da, și nici n-am dat un leu pe el. E costumul de familie.»',
            translation: '«Pois é, e nem paguei um leu por ele. É o terno da família.»',
            next: 'masa',
          },
          { text: '«Vă mulțumesc frumos, domnule. Încântat de cunoștință.»', translation: '«Muito obrigado, senhor. Muito prazer.»', next: 'costel_formal' },
          {
            text: 'Linu se supără: nenea Costel a spus că e îmbrăcat prost.',
            translation: 'Linu fica chateado: o tio Costel disse que ele está malvestido.',
            wrong:
              'Pelo contrário! Costel fez uma piada elogiosa: pinguins parecem estar sempre de terno. A crítica («nu ca nepotu-meu») era para o sobrinho, que passou a manhã procurando a gravata.',
          },
        ],
      },
      costel_formal: {
        emoji: '🍷',
        text: 'Nenea Costel pufnește în râs: «„Domnule”? Mă, eu sunt Costel pentru toată lumea. Lasă „domnul” pentru preot și pentru primar.» Îi umple paharul cu vin și ciocnește cu el: «Așa, acum ne cunoaștem ca lumea.» Linu înțelege că la o nuntă prea multă politețe te face să pari străin.',
        translation:
          'O tio Costel cai na risada: «„Senhor”? Ô, eu sou Costel para todo mundo. Deixa o „senhor” para o padre e para o prefeito.» Ele enche o copo do Linu de vinho e brinda com ele: «Pronto, agora a gente se conhece direito.» Linu entende que, num casamento, educação demais faz você parecer um estranho.',
        choices: [{ text: 'Linu ciocnește și el și se relaxează.', translation: 'Linu brinda também e relaxa.', next: 'masa' }],
      },
      masa: {
        emoji: '🎤',
        text: 'După miezul nopții, nașul ia microfonul și anunță că a venit momentul urărilor. Ioana îi face semn lui Linu: el e următorul. Nenea Costel se apleacă spre el și îi șoptește, cu o față cât se poate de serioasă: «Zi-le de fosta lui Mihai, mireasa abia așteaptă să audă povestea.» Apoi râde atât de tare, încât se înroșește tot. Linu se ridică, cu microfonul în aripă.',
        translation:
          'Depois da meia-noite, o padrinho pega o microfone e anuncia que chegou a hora dos brindes. Ioana faz sinal para o Linu: ele é o próximo. O tio Costel se inclina e cochicha, com a cara mais séria do mundo: «Conta da ex do Mihai, a noiva está doida para ouvir essa história.» Depois ri tanto que fica todo vermelho. Linu se levanta, com o microfone na asa.',
        choices: [
          {
            text: 'Linu povestește despre fosta lui Mihai, pentru că nenea Costel a zis că mireasa abia așteaptă.',
            translation: 'Linu conta sobre a ex do Mihai, porque o tio Costel disse que a noiva mal podia esperar.',
            wrong:
              'Costel estava sendo irônico: ninguém quer ouvir falar da ex do noivo no casamento! Repare que ele riu tanto que ficou vermelho logo depois. «Abia așteaptă» aqui quer dizer exatamente o contrário.',
          },
          {
            text: 'Linu face o urare scurtă: le dorește să se certe doar pe cine spală vasele.',
            translation: 'Linu faz um brinde curto: deseja que eles só briguem por quem lava a louça.',
            next: 'toast_bun',
          },
          {
            text: 'Linu citește un discurs foarte oficial, pregătit de acasă.',
            translation: 'Linu lê um discurso muito oficial, preparado em casa.',
            next: 'toast_formal',
          },
        ],
      },
      toast_bun: {
        emoji: '🥂',
        text: '«Dragi Ioana și Mihai», începe Linu, «vă doresc o viață lungă și fericită, iar singura voastră ceartă să fie pe cine spală vasele.» Sala izbucnește în râs, iar Mihai strigă: «Eu, eu le spăl!» Nenea Costel bate cu furculița în pahar: «Asta da urare! Pinguinul știe ce vorbește.» Dar când Linu se așază, observă că scaunul miresei e gol.',
        translation:
          '«Queridos Ioana e Mihai», começa Linu, «desejo a vocês uma vida longa e feliz, e que a única briga de vocês seja sobre quem lava a louça.» O salão explode em risadas, e Mihai grita: «Eu, eu lavo!» O tio Costel bate com o garfo no copo: «Isso é que é brinde! O pinguim sabe do que fala.» Mas, quando Linu se senta, percebe que a cadeira da noiva está vazia.',
        choices: [{ text: '«Stați puțin… unde e Ioana?»', translation: '«Espera aí… cadê a Ioana?»', next: 'furat' }],
      },
      toast_formal: {
        emoji: '📜',
        text: 'Linu scoate o foaie din buzunar: «Stimată asistență, prin prezenta îmi exprim deosebita considerație față de proaspeții soți…» În sală se face liniște, apoi cineva chicotește. Nenea Costel strigă: «Ai adus-o de la primărie, cu ștampilă cu tot?» Linu termină în grabă, iar lumea aplaudă politicos. Când se așază, observă că scaunul miresei e gol.',
        translation:
          'Linu tira uma folha do bolso: «Prezados presentes, por meio desta, expresso minha elevada consideração pelos recém-casados…» O salão fica em silêncio, depois alguém dá uma risadinha. O tio Costel grita: «Trouxe isso da prefeitura, com carimbo e tudo?» Linu termina às pressas, e o pessoal aplaude por educação. Quando se senta, percebe que a cadeira da noiva está vazia.',
        choices: [{ text: '«Stați puțin… unde e Ioana?»', translation: '«Espera aí… cadê a Ioana?»', next: 'furat' }],
      },
      furat: {
        emoji: '👰',
        text: 'Prietenii mirelui vin în fugă: «Au furat-o pe mireasă!» Totuși, toată lumea zâmbește, iar lăutarii cântă mai tare ca înainte. Nașul îi explică lui Linu că „hoții” sunt verii Ioanei și că mirele trebuie s-o răscumpere. «Iar tu», adaugă el, bătându-l pe umăr, «vei fi negociatorul nostru.»',
        translation:
          'Os amigos do noivo chegam correndo: «Roubaram a noiva!» Mesmo assim, todo mundo sorri, e os músicos tocam mais alto do que antes. O padrinho explica ao Linu que os „ladrões” são os primos da Ioana e que o noivo precisa resgatá-la. «E você», acrescenta ele, dando um tapinha no ombro dele, «vai ser o nosso negociador.»',
        choices: [
          {
            text: 'Linu sună imediat la poliție: cineva a răpit-o pe Ioana!',
            translation: 'Linu liga imediatamente para a polícia: alguém sequestrou a Ioana!',
            wrong:
              'Calma! É o «furatul miresei», uma brincadeira tradicional: ninguém está preocupado, todos sorriem e a música continua. Os „ladrões” são os primos da Ioana, e o noivo tem de «resgatar» a noiva.',
          },
          { text: 'Linu merge la „hoți” să negocieze.', translation: 'Linu vai até os „ladrões” para negociar.', next: 'negociere' },
        ],
      },
      negociere: {
        emoji: '🍾',
        text: 'Verii Ioanei își anunță prețul: o sticlă de șampanie, o ladă de bere și un dans din partea pinguinului. Mihai se uită disperat la Linu, pentru că știe că prietenul lui n-a dansat niciodată horă. Nenea Costel strigă din spate: «Hai, pinguinule, că doar n-ai venit să stai pe gheață!» Toată sala se întoarce spre Linu și așteaptă.',
        translation:
          'Os primos da Ioana anunciam o preço: uma garrafa de champanhe, uma caixa de cerveja e uma dança por conta do pinguim. Mihai olha desesperado para o Linu, porque sabe que o amigo nunca dançou uma horă. O tio Costel grita lá de trás: «Vai, pinguim, que você não veio aqui para ficar no gelo!» O salão inteiro se vira para o Linu e espera.',
        choices: [
          { text: 'Linu își scutură penele și intră în mijlocul sălii.', translation: 'Linu sacode as penas e vai para o meio do salão.', next: 'final_bom' },
          {
            text: 'Linu scoate câteva bancnote, ca să termine mai repede.',
            translation: 'Linu tira algumas notas para acabar logo com aquilo.',
            next: 'final_bani',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu dansează hora cu verii Ioanei, legănându-se ca pe gheață, iar în câteva secunde toată sala se prinde în horă. Ioana este „eliberată” în aplauze, iar Mihai îl îmbrățișează: «Mi-ai salvat nunta, frate!» Nenea Costel îi strigă peste muzică: «Și acum, când facem nunta ta?» Linu râde și dansează până dimineață.',
        translation:
          'Linu dança a horă com os primos da Ioana, balançando como se estivesse no gelo, e em poucos segundos o salão inteiro entra na roda. Ioana é „libertada” sob aplausos, e Mihai o abraça: «Você salvou o meu casamento, irmão!» O tio Costel grita por cima da música: «E agora, quando é o seu casamento?» Linu ri e dança até de manhã.',
        ending: {
          tone: 'bom',
          title: 'Rei da pista',
          message: 'Você entrou no espírito da festa: humor, dança e nenhuma formalidade a mais. Casamento romeno se ganha na pista!',
        },
      },
      final_bani: {
        emoji: '💸',
        text: 'Linu întinde bancnotele verilor: «Vă rog, să terminăm repede.» Verii ridică din umeri, iau banii și o aduc pe Ioana înapoi. Totul se rezolvă în două minute, dar lumea pare puțin dezamăgită. «Eficient», zice nenea Costel, «dar nuntă fără dans e ca sarmaua fără smântână.»',
        translation:
          'Linu entrega as notas aos primos: «Por favor, vamos acabar logo.» Os primos dão de ombros, pegam o dinheiro e trazem a Ioana de volta. Tudo se resolve em dois minutos, mas o pessoal parece meio decepcionado. «Eficiente», diz o tio Costel, «mas casamento sem dança é como sarma sem creme azedo.»',
        ending: {
          tone: 'neutro',
          title: 'Resgate sem graça',
          message: 'O resgate da noiva é teatro, não transação. Os primos queriam espetáculo; pagar e pronto resolve, mas tira a graça.',
        },
      },
    },
  },
  {
    id: 'ro-h39',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Bilețel pe ușă',
    emoji: '📝',
    summary: 'Em Constanța, Linu recebe um bilhete irônico da vizinha de baixo e precisa acertar o tom para fazer as pazes.',
    cultural_context:
      'Grande parte dos romenos das cidades mora em blocos de apartamentos (blocuri), muitos construídos no período comunista; cada prédio tem uma associação de proprietários que afixa avisos no «avizier» da entrada. A plăcintă dobrogeană, torta de massa fina com queijo, é típica da Dobrogea, a região de Constanța.',
    start: 'start',
    glossary: [
      ['bilețel', 'bilhetinho'],
      ['a nu închide un ochi', 'não pregar o olho'],
      ['avizier', 'mural de avisos (do prédio)'],
      ['n-am păscut porcii împreună', 'não temos intimidade (lit. não pastoreamos porcos juntos)'],
      ['tanti', 'tia, senhora (coloquial)'],
      ['dumneata', 'você (tratamento semiformal, típico de pessoas mais velhas)'],
      ['a se înmuia', 'amolecer, ceder'],
    ],
    nodes: {
      start: {
        emoji: '🚪',
        text: 'Linu s-a mutat de o lună într-un bloc din Constanța, la câteva străzi de mare. Azi-dimineață găsește pe ușă un bilețel scris de mână, cu litere foarte ordonate: «Stimate vecin de la etajul 4, vă mulțumim din suflet pentru concertul de aseară, de la ora două noaptea. Ne-a plăcut atât de mult, încât n-am mai închis un ochi.» Semnat: «Vecinii de la etajul 3». Linu își amintește că a cântat la chitară până târziu, cu fereastra deschisă.',
        translation:
          'Linu se mudou há um mês para um prédio em Constanța, a poucas ruas do mar. Hoje de manhã ele encontra na porta um bilhete escrito à mão, com letras muito caprichadas: «Prezado vizinho do 4º andar, agradecemos de coração pelo concerto de ontem, às duas da manhã. Gostamos tanto que não pregamos o olho.» Assinado: «Os vizinhos do 3º andar». Linu lembra que tocou violão até tarde, com a janela aberta.',
        choices: [
          {
            text: 'Linu e mândru: vecinilor le-a plăcut concertul, așa că diseară cântă din nou, și mai tare.',
            translation: 'Linu fica orgulhoso: os vizinhos gostaram do concerto, então hoje à noite ele toca de novo, e mais alto.',
            wrong:
              'Cuidado com a ironia! «Ne-a plăcut atât de mult, încât n-am mai închis un ochi» quer dizer que os vizinhos não conseguiram dormir por causa do barulho. O bilhete é uma reclamação educada, e bem ácida.',
          },
          {
            text: 'Coboară la etajul 3 și bate la ușă, ca să-și ceară scuze.',
            translation: 'Desce ao 3º andar e bate na porta para pedir desculpas.',
            next: 'usa',
          },
          {
            text: 'Scrie și el un bilețel, cu umor, și îl lipește la avizier.',
            translation: 'Escreve ele também um bilhete, com humor, e cola no mural de avisos.',
            next: 'bilet',
          },
        ],
      },
      usa: {
        emoji: '👓',
        text: 'Îi deschide o doamnă în vârstă, cu ochelarii pe vârful nasului și cu o privire rece. «Da? Cu ce vă pot ajuta?», întreabă ea, pe un ton de ghișeu. Pe ușă scrie „Fam. Popescu”, cu aceleași litere ordonate ca pe bilețel. Linu își dă seama că a găsit autoarea.',
        translation:
          'Quem abre é uma senhora de idade, com os óculos na ponta do nariz e um olhar frio. «Sim? Em que posso ajudar?», pergunta ela, em tom de guichê de repartição. Na porta está escrito „Fam. Popescu”, com as mesmas letras caprichadas do bilhete. Linu percebe que encontrou a autora.',
        choices: [
          {
            text: '«Bună ziua, doamnă Popescu. Am venit să vă cer scuze pentru zgomotul de aseară.»',
            translation: '«Bom dia, dona Popescu. Vim pedir desculpas pelo barulho de ontem à noite.»',
            next: 'cald',
          },
          {
            text: '«Salut, tanti! Tu ai scris biletul? Era mișto, am râs mult.»',
            translation: '«E aí, tia! Foi você que escreveu o bilhete? Ficou massa, ri muito.»',
            next: 'rece',
          },
        ],
      },
      rece: {
        emoji: '🤨',
        text: 'Doamna ridică o sprânceană: «„Tanti”? „Tu”? „Mișto”?» Face o pauză lungă, apoi spune rar: «Tinere, eu și cu dumneata n-am păscut porcii împreună.» Adaugă, sec: «Am fost profesoară de română patruzeci de ani. Biletul nu era o glumă.» Și ține mâna pe clanță, gata să închidă.',
        translation:
          'A senhora ergue uma sobrancelha: «„Tia”? „Tu”? „Massa”?» Faz uma pausa longa e depois diz devagar: «Meu jovem, eu e você não temos essa intimidade.» Acrescenta, seca: «Fui professora de romeno por quarenta anos. O bilhete não era piada.» E mantém a mão na maçaneta, pronta para fechar.',
        choices: [
          {
            text: '«Aveți dreptate, îmi cer scuze. Am vorbit prea familiar. Și pentru aseară îmi pare sincer rău.»',
            translation: '«A senhora tem razão, peço desculpas. Falei com intimidade demais. E sinto muito, sinceramente, por ontem à noite.»',
            next: 'cald',
          },
          { text: '«Of, relaxează-te, era doar o chitară.»', translation: '«Ah, relaxa, era só um violão.»', next: 'final_rece' },
        ],
      },
      bilet: {
        emoji: '📌',
        text: 'Linu scrie cu grijă: «Dragi vecini, concertul de aseară a fost ultimul din turneu. Artistul își cere scuze și promite că de acum va cânta doar la duș, foarte încet.» A doua zi, sub biletul lui, cineva a adăugat cu un scris ordonat: «Mulțumim. Și dușul tot la două noaptea?» Pe scară, Linu se întâlnește cu o doamnă în vârstă, cu ochelarii pe vârful nasului, care îl privește lung. «Deci dumneata ești artistul», spune ea, fără să zâmbească.',
        translation:
          'Linu escreve com cuidado: «Queridos vizinhos, o concerto de ontem foi o último da turnê. O artista pede desculpas e promete que, de agora em diante, só vai cantar no chuveiro, bem baixinho.» No dia seguinte, embaixo do bilhete dele, alguém acrescentou com letra caprichada: «Agradecemos. E o chuveiro também vai ser às duas da manhã?» Na escada, Linu cruza com uma senhora de idade, óculos na ponta do nariz, que o encara demoradamente. «Então o senhor é o artista», diz ela, sem sorrir.',
        choices: [
          {
            text: '«Eu sunt, din păcate. Vă rog să mă iertați pentru aseară, n-am realizat cât de tare se aude.»',
            translation: '«Sou eu, infelizmente. Me perdoe por ontem à noite, não percebi o quanto dava para ouvir.»',
            next: 'cald',
          },
          {
            text: '«Eu sunt. Și recunosc că răspunsul dumneavoastră a fost mai bun decât biletul meu.»',
            translation: '«Sou eu. E admito que a resposta da senhora foi melhor do que o meu bilhete.»',
            next: 'cald',
          },
        ],
      },
      cald: {
        emoji: '🥧',
        text: 'Doamna Popescu se înmoaie puțin și își scoate ochelarii. «Bine, bine. Eu mă scol la cinci, de-aia m-am supărat. La vârsta mea, somnul e mai prețios decât aurul.» Apoi, aproape zâmbind, adaugă: «Duminică fac plăcintă dobrogeană. Poftim și dumneata la o felie, dacă nu cumva ai alt concert programat.»',
        translation:
          'A dona Popescu amolece um pouco e tira os óculos. «Tudo bem, tudo bem. Eu acordo às cinco, por isso fiquei brava. Na minha idade, o sono vale mais que ouro.» Depois, quase sorrindo, acrescenta: «Domingo vou fazer plăcintă dobrogeană. Venha comer uma fatia, se é que o senhor não tem outro concerto marcado.»',
        choices: [
          {
            text: '«Niciun concert, promit. Vin cu drag și aduc eu desertul.»',
            translation: '«Nenhum concerto, prometo. Vou com prazer e eu levo a sobremesa.»',
            next: 'final_bom',
          },
          {
            text: 'Linu își pregătește chitara pentru duminică: doamna vrea să-l audă cântând.',
            translation: 'Linu prepara o violão para domingo: a senhora quer ouvi-lo tocar.',
            wrong:
              '«Dacă nu cumva ai alt concert programat» é uma alfinetada bem-humorada, não um pedido de show. Ela está convidando para comer torta e lembrando, de leve, a noite barulhenta.',
          },
          { text: '«Mulțumesc frumos, dar duminică nu pot.»', translation: '«Muito obrigado, mas domingo não posso.»', next: 'final_politicos' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Duminică, Linu coboară la etajul 3 cu o cutie de prăjituri. Plăcinta dobrogeană e fierbinte, cu brânză, iar doamna Popescu îi povestește despre Constanța de altădată. La plecare, îi spune: «Poți să-mi zici doamna Elena.» A doua zi, pe ușa lui Linu apare un bilet nou, cu aceleași litere ordonate: «Mulțumim pentru liniște. Etajul 3.»',
        translation:
          'No domingo, Linu desce ao 3º andar com uma caixa de doces. A plăcintă dobrogeană está quentinha, com queijo, e a dona Popescu conta histórias da Constanța de antigamente. Na saída, ela diz: «Pode me chamar de dona Elena.» No dia seguinte, aparece na porta do Linu um bilhete novo, com as mesmas letras caprichadas: «Agradecemos pelo silêncio. 3º andar.»',
        ending: {
          tone: 'bom',
          title: 'Paz no prédio',
          message: 'Você leu a ironia do bilhete, acertou o tom e ganhou uma vizinha, além de uma fatia de plăcintă dobrogeană.',
        },
      },
      final_politicos: {
        emoji: '🙂',
        text: 'Doamna Popescu dă din cap: «Cum doriți.» Din ziua aceea, se salută politicos pe scară, și atât. Linu nu mai cântă noaptea, iar bilețelele dispar de pe ușă. Uneori, duminica, simte miros de plăcintă pe casa scării și se întreabă cum ar fi fost.',
        translation:
          'A dona Popescu faz que sim com a cabeça: «Como quiser.» Daquele dia em diante, os dois se cumprimentam educadamente na escada, e só. Linu não toca mais à noite, e os bilhetes somem da porta. Às vezes, aos domingos, ele sente cheiro de torta no corredor da escada e fica imaginando como teria sido.',
        ending: {
          tone: 'neutro',
          title: 'Vizinhos cordiais',
          message: 'O conflito acabou, mas o convite era a chance de virar amizade. O «dacă nu cumva ai alt concert» era um sinal de paz com humor.',
        },
      },
      final_rece: {
        emoji: '📋',
        text: 'Doamna Popescu închide ușa fără un cuvânt. A doua zi, la avizierul blocului apare un anunț oficial al asociației de proprietari: «Se reamintește locatarilor că după ora 22 este necesară liniștea.» Linu știe foarte bine pentru cine a fost scris. De atunci, vecinii îl salută pe scară doar cu un „bună ziua” rece.',
        translation:
          'A dona Popescu fecha a porta sem dizer uma palavra. No dia seguinte, aparece no mural do prédio um aviso oficial da associação de proprietários: «Lembramos aos moradores que após as 22h é necessário silêncio.» Linu sabe muito bem para quem aquilo foi escrito. Desde então, os vizinhos o cumprimentam na escada só com um „bom dia” frio.',
        ending: {
          tone: 'neutro',
          title: 'Aviso no mural',
          message: 'Tratar uma senhora desconhecida por «tu», «tanti» e «mișto» soou desrespeitoso. Com gente mais velha, na dúvida, comece pelo formal.',
        },
      },
    },
  },
  {
    id: 'ro-h40',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Numărătoarea pelicanilor',
    emoji: '🦢',
    summary:
      'O Linu passa uma semana numa estação de pesquisa no Delta do Danúbio contando pelicanos — e descobre que ciência também é saber o que os dados não provam.',
    cultural_context:
      'O Delta do Danúbio é Patrimônio Mundial da UNESCO desde 1991 e abriga a maior colônia de pelicanos-brancos da Europa, além de uma população menor do raro pelicano-crespo.',
    start: 'start',
    glossary: [
      ['cuibărit', 'período de nidificação (ninhada)'],
      ['a monitoriza', 'monitorar'],
      ['aluviuni', 'sedimentos trazidos pelo rio'],
      ['în amonte', 'rio acima, a montante'],
      ['cauzalitate', 'causalidade'],
      ['ipoteză', 'hipótese'],
      ['conservare', 'conservação (da natureza)'],
      ['specie', 'espécie'],
    ],
    nodes: {
      start: {
        emoji: '🛶',
        text: 'Linu a acceptat o invitație neobișnuită: să petreacă o săptămână la o stație de cercetare din Delta Dunării, lângă satul Crișan. Coordonatoarea echipei, o ornitologă pe nume Irina, îi explică de la început miza proiectului: «Monitorizăm dinamica populațiilor de pelicani, iar datele noastre ajung în rapoarte care influențează politicile de conservare.» Delta, adaugă ea, este un ecosistem fragil, în care orice intervenție umană are consecințe greu de anticipat. Linu trebuie să hotărască cu ce începe.',
        translation:
          'Linu aceitou um convite incomum: passar uma semana numa estação de pesquisa no Delta do Danúbio, perto da aldeia de Crișan. A coordenadora da equipe, uma ornitóloga chamada Irina, explica desde o início o que está em jogo no projeto: «Monitoramos a dinâmica das populações de pelicanos, e nossos dados chegam a relatórios que influenciam as políticas de conservação.» O delta, acrescenta ela, é um ecossistema frágil, em que qualquer intervenção humana tem consequências difíceis de prever. Linu precisa decidir por onde começa.',
        choices: [
          { text: 'Cere să citească protocolul de cercetare.', translation: 'Pede para ler o protocolo de pesquisa.', next: 'protocol' },
          { text: 'Sare direct în barcă, spre canale.', translation: 'Pula direto no barco, rumo aos canais.', next: 'barca' },
        ],
      },
      protocol: {
        emoji: '📋',
        text: 'Protocolul este redactat într-un limbaj tehnic, dar Linu îl parcurge cu atenție. Numărătoarea se face din barcă, de la o distanță de cel puțin două sute de metri, pentru ca păsările să nu fie deranjate în perioada de cuibărit. Orice perturbare poate duce la abandonarea cuiburilor, iar ouăle rămase neprotejate devin pradă pescărușilor. Datele se notează separat pentru pelicanul comun și pentru pelicanul creț, o specie mult mai rară. La final, Irina îl întreabă ce a reținut.',
        translation:
          'O protocolo é redigido numa linguagem técnica, mas Linu o percorre com atenção. A contagem é feita do barco, a uma distância de pelo menos duzentos metros, para que as aves não sejam perturbadas no período de ninhada. Qualquer perturbação pode levar ao abandono dos ninhos, e os ovos que ficam desprotegidos viram presa das gaivotas. Os dados são anotados separadamente para o pelicano-comum e para o pelicano-crespo, uma espécie muito mais rara. No fim, Irina pergunta o que ele guardou.',
        choices: [
          {
            text: '«Trebuie să păstrăm distanța, ca păsările să nu-și abandoneze cuiburile.»',
            translation: '«Temos que manter distância, para que as aves não abandonem os ninhos.»',
            next: 'colonie',
          },
          {
            text: '«Trebuie să ne apropiem cât mai mult, ca să numărăm ouăle.»',
            translation: '«Temos que chegar o mais perto possível, para contar os ovos.»',
            wrong:
              'O protocolo diz o contrário: a contagem é feita a pelo menos duzentos metros, porque qualquer perturbação no período de ninhada (cuibărit) pode levar ao abandono dos ninhos (abandonarea cuiburilor).',
          },
        ],
      },
      barca: {
        emoji: '🌊',
        text: 'Linu urcă în barcă fără să fi citit protocolul. Pe drum, Irina îi vorbește despre aluviuni: Dunărea transportă anual cantități uriașe de sedimente, iar unele zone ale deltei cresc, în timp ce altele sunt erodate de valurile mării. Barajele construite în amonte rețin însă o parte din aceste sedimente, ceea ce modifică echilibrul natural al zonei. Când se apropie de colonie, Linu, entuziasmat, vrea fotografii cât mai de aproape.',
        translation:
          'Linu sobe no barco sem ter lido o protocolo. No caminho, Irina fala sobre os sedimentos: o Danúbio transporta todo ano quantidades enormes de sedimentos, e algumas áreas do delta crescem, enquanto outras são erodidas pelas ondas do mar. As barragens construídas rio acima, porém, retêm parte desses sedimentos, o que altera o equilíbrio natural da região. Quando se aproximam da colônia, Linu, empolgado, quer fotos o mais de perto possível.',
        choices: [
          { text: 'Îi cere barcagiului să se apropie de pelicani.', translation: 'Pede ao barqueiro que se aproxime dos pelicanos.', next: 'final_deranj' },
          {
            text: 'O întreabă mai întâi pe Irina care este distanța corectă.',
            translation: 'Primeiro pergunta a Irina qual é a distância correta.',
            next: 'colonie',
          },
        ],
      },
      colonie: {
        emoji: '🔭',
        text: 'La răsărit, barca se oprește la marginea unei lagune, la distanța prevăzută. Prin binoclu, Linu vede sute de pelicani albi, iar printre ei câteva exemplare de un alb mai cenușiu, cu penele ciufulite pe cap. Irina șoptește: «Aceia sunt pelicani creți. Sunt de câteva ori mai puțin numeroși, așa că fiecare individ contează în statistică.» Linu știe că o eroare de numărare ar putea distorsiona concluziile unui studiu întreg. Irina îi arată tabelul: «Pe care îi treci în coloana separată?»',
        translation:
          'Ao nascer do sol, o barco para na borda de uma laguna, à distância prevista. Pelo binóculo, Linu vê centenas de pelicanos brancos e, entre eles, alguns exemplares de um branco mais acinzentado, com as penas desgrenhadas na cabeça. Irina sussurra: «Aqueles são pelicanos-crespos. São várias vezes menos numerosos, então cada indivíduo conta na estatística.» Linu sabe que um erro de contagem poderia distorcer as conclusões de um estudo inteiro. Irina mostra a tabela: «Quais você anota na coluna separada?»',
        choices: [
          {
            text: 'Pe cei cu penele ciufulite pe cap: pelicanii creți.',
            translation: 'Os de penas desgrenhadas na cabeça: os pelicanos-crespos.',
            next: 'date',
          },
          {
            text: 'Pe cei albi, pentru că sunt cei mai rari.',
            translation: 'Os brancos, porque são os mais raros.',
            wrong:
              'Os brancos são centenas — são o pelicano-comum. Os raros («de câteva ori mai puțin numeroși», várias vezes menos numerosos) são os pelicanos-crespos, de branco acinzentado e penas desgrenhadas.',
          },
        ],
      },
      date: {
        emoji: '📊',
        text: 'Seara, la stație, echipa compară cifrele cu cele din anii precedenți. Populația de pelicani comuni pare stabilă, însă Irina observă o scădere îngrijorătoare a numărului de cuiburi într-o zonă unde s-au intensificat excursiile cu bărci cu motor. «Corelația nu înseamnă automat cauzalitate», avertizează ea, «dar ipoteza merită verificată.» Echipa trebuie să decidă ce recomandare include în raportul preliminar.',
        translation:
          'À noite, na estação, a equipe compara os números com os dos anos anteriores. A população de pelicanos-comuns parece estável, mas Irina nota uma queda preocupante do número de ninhos numa área onde se intensificaram os passeios de barco a motor. «Correlação não significa automaticamente causalidade», adverte ela, «mas a hipótese merece ser verificada.» A equipe precisa decidir que recomendação incluir no relatório preliminar.',
        choices: [
          {
            text: 'Propune un studiu suplimentar înainte de orice concluzie fermă.',
            translation: 'Propõe um estudo complementar antes de qualquer conclusão firme.',
            next: 'final_bom',
          },
          {
            text: 'Propune interzicerea imediată a oricărui turism în Deltă.',
            translation: 'Propõe a proibição imediata de todo o turismo no Delta.',
            next: 'drastic',
          },
          {
            text: 'Declară că datele demonstrează clar că bărcile turiștilor sunt vinovate.',
            translation: 'Declara que os dados demonstram claramente que os barcos dos turistas são os culpados.',
            wrong:
              'Irina acabou de avisar: «corelația nu înseamnă automat cauzalitate» — correlação não é automaticamente causalidade. Os dados sugerem uma hipótese, que ainda precisa ser verificada; não provam nada.',
          },
        ],
      },
      drastic: {
        emoji: '⚖️',
        text: 'Irina zâmbește, dar clatină din cap. «Înțeleg intenția, însă o măsură atât de drastică ar afecta comunitățile locale, care trăiesc în mare parte din pescuit și turism. Conservarea funcționează doar dacă oamenii din zonă o susțin.» Ea îi sugerează o soluție de compromis: limitarea accesului bărcilor cu motor în jurul coloniilor pe durata cuibăritului. Linu cântărește argumentele.',
        translation:
          'Irina sorri, mas balança a cabeça. «Entendo a intenção, mas uma medida tão drástica afetaria as comunidades locais, que vivem em grande parte da pesca e do turismo. A conservação só funciona se as pessoas da região a apoiarem.» Ela sugere uma solução de meio-termo: limitar o acesso de barcos a motor em volta das colônias durante o período de ninhada. Linu pesa os argumentos.',
        choices: [
          { text: 'Acceptă compromisul și îl include în raport.', translation: 'Aceita o meio-termo e o inclui no relatório.', next: 'final_bom' },
          { text: 'Insistă pe interdicția totală.', translation: 'Insiste na proibição total.', next: 'final_respins' },
        ],
      },
      final_deranj: {
        emoji: '🪶',
        text: 'Barcagiul ezită, dar Linu insistă, iar barca înaintează. În câteva secunde, zeci de pelicani își iau zborul, lăsând cuiburile descoperite, iar pescărușii profită imediat de ocazie. Irina oprește motorul și îi explică, pe un ton sec, că tocmai de aceea există protocolul. Numărătoarea din ziua aceea este compromisă.',
        translation:
          'O barqueiro hesita, mas Linu insiste, e o barco avança. Em poucos segundos, dezenas de pelicanos levantam voo, deixando os ninhos descobertos, e as gaivotas aproveitam na hora a oportunidade. Irina desliga o motor e explica, num tom seco, que é justamente para isso que existe o protocolo. A contagem daquele dia está comprometida.',
        ending: {
          tone: 'neutro',
          title: 'Perto demais',
          message: 'Na pesquisa de campo, a pressa atrapalha os dados e os animais. Leia o protocolo e tente de novo!',
        },
      },
      final_respins: {
        emoji: '📁',
        text: 'Irina notează propunerea, dar comitetul științific o respinge ca nerealistă și lipsită de fundament empiric. Raportul iese fără nicio recomandare concretă, iar problema coloniei rămâne nerezolvată încă un sezon. Linu înțelege, cu întârziere, că în știința aplicată o idee bună trebuie să fie și aplicabilă.',
        translation:
          'Irina anota a proposta, mas o comitê científico a rejeita como irrealista e sem fundamento empírico. O relatório sai sem nenhuma recomendação concreta, e o problema da colônia fica sem solução por mais uma temporada. Linu entende, tarde demais, que na ciência aplicada uma boa ideia também precisa ser aplicável.',
        ending: {
          tone: 'neutro',
          title: 'Radical demais',
          message: 'Conservação que ignora as pessoas da região raramente sai do papel. Tente o caminho do meio-termo!',
        },
      },
      final_bom: {
        emoji: '🎉',
        text: 'Raportul preliminar recomandă un studiu de impact și, până la rezultate, zone de liniște în jurul coloniilor pe durata cuibăritului. Pescarii și ghizii locali sunt consultați, iar majoritatea acceptă măsura. În ultima zi, Irina îi strânge aripa lui Linu: «Datele tale au contat. Și, mai ales, ai înțeles ce nu demonstrează ele.»',
        translation:
          'O relatório preliminar recomenda um estudo de impacto e, até os resultados, zonas de silêncio em volta das colônias durante a ninhada. Os pescadores e guias locais são consultados, e a maioria aceita a medida. No último dia, Irina aperta a asa do Linu: «Seus dados contaram. E, sobretudo, você entendeu o que eles não demonstram.»',
        ending: {
          tone: 'bom',
          title: 'Cientista do Delta!',
          message: 'O Linu contou pelicanos com rigor, separou correlação de causalidade e ajudou a proteger a colônia.',
        },
      },
    },
  },
  {
    id: 'ro-h41',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Între document și amintire',
    emoji: '📜',
    summary: 'Voluntário num museu de Alba Iulia, o Linu precisa explicar a Grande União de 1918 a adolescentes céticos — escolhendo bem as fontes.',
    cultural_context:
      'Em 1º de dezembro de 1918, a Grande Assembleia Nacional reunida em Alba Iulia proclamou a união da Transilvânia com a Romênia; desde 1990, essa data é o Dia Nacional romeno.',
    start: 'start',
    glossary: [
      ['sursă primară', 'fonte primária'],
      ['rezoluție', 'resolução (documento oficial)'],
      ['memorii', 'memórias (livro de lembranças)'],
      ['popoare conlocuitoare', 'povos que vivem no mesmo território'],
      ['reformă agrară', 'reforma agrária'],
      ['revendicare', 'reivindicação'],
      ['a confrunta', 'confrontar, cotejar'],
    ],
    nodes: {
      start: {
        emoji: '🏰',
        text: 'Linu s-a oferit voluntar la muzeul din Alba Iulia, cu câteva zile înainte de 1 Decembrie, Ziua Națională a României. Istoricul muzeului, domnul Mureșan, îi încredințează o sarcină delicată: să prezinte unui grup de liceeni contextul Marii Uniri din 1918. «Nu vreau o lecție de manual», precizează el. «Vreau ca elevii să înțeleagă procesul istoric, nu doar data.» Pe masă se află două surse: o copie a rezoluției adoptate la Alba Iulia și o carte de memorii scrisă de un participant, la câteva decenii după eveniment.',
        translation:
          'Linu se ofereceu como voluntário no museu de Alba Iulia, poucos dias antes de 1º de Dezembro, o Dia Nacional da Romênia. O historiador do museu, o senhor Mureșan, confia a ele uma tarefa delicada: apresentar a um grupo de alunos do ensino médio o contexto da Grande União de 1918. «Não quero uma aula de livro didático», especifica ele. «Quero que os alunos entendam o processo histórico, não só a data.» Na mesa há duas fontes: uma cópia da resolução adotada em Alba Iulia e um livro de memórias escrito por um participante, algumas décadas depois do evento.',
        choices: [
          { text: 'Începe cu rezoluția, adică sursa primară.', translation: 'Começa pela resolução, ou seja, a fonte primária.', next: 'rezolutie' },
          { text: 'Începe cu memoriile, care par mai captivante.', translation: 'Começa pelas memórias, que parecem mais envolventes.', next: 'memorii' },
        ],
      },
      rezolutie: {
        emoji: '📜',
        text: 'Textul rezoluției este dens, cu o formulare aproape juridică. Linu observă că documentul nu se limitează la proclamarea unirii Transilvaniei cu România: el enunță și principiile noului stat, printre care deplina libertate națională pentru toate popoarele conlocuitoare, votul universal și o reformă agrară radicală. Domnul Mureșan subliniază că unele dintre aceste angajamente au fost aplicate doar parțial în deceniile următoare. «Aici e miezul discuției», spune el. «Între promisiune și realitate există întotdeauna o distanță, iar istoricul trebuie s-o măsoare.»',
        translation:
          'O texto da resolução é denso, com uma redação quase jurídica. Linu percebe que o documento não se limita a proclamar a união da Transilvânia com a Romênia: ele enuncia também os princípios do novo Estado, entre eles a plena liberdade nacional para todos os povos que viviam no território, o voto universal e uma reforma agrária radical. O senhor Mureșan ressalta que alguns desses compromissos foram aplicados só parcialmente nas décadas seguintes. «Aqui está o cerne da discussão», diz ele. «Entre a promessa e a realidade sempre existe uma distância, e o historiador tem que medi-la.»',
        choices: [
          {
            text: 'Le va spune elevilor: «Documentul promitea drepturi și pentru minorități, dar nu toate promisiunile au fost respectate.»',
            translation: 'Vai dizer aos alunos: «O documento prometia direitos também para as minorias, mas nem todas as promessas foram cumpridas.»',
            next: 'elevi',
          },
          {
            text: 'Le va spune elevilor: «Rezoluția a proclamat doar unirea, fără alte principii.»',
            translation: 'Vai dizer aos alunos: «A resolução proclamou só a união, sem outros princípios.»',
            wrong:
              'O texto diz que o documento «nu se limitează» (não se limita) a proclamar a união: ele também enuncia princípios, como liberdade para os povos conviventes, voto universal e reforma agrária.',
          },
        ],
      },
      memorii: {
        emoji: '📖',
        text: 'Memoriile sunt scrise cu emoție: autorul descrie mulțimea uriașă, steagurile, drumul făcut pe jos din satele Munților Apuseni, frigul și entuziasmul. Totuși, Linu remarcă detalii care nu concordă cu alte surse, de pildă un număr de participanți vădit exagerat. Domnul Mureșan explică: «Memoria este o sursă prețioasă, dar reconstruiește trecutul prin filtrul anilor. De aceea, istoricul o confruntă mereu cu documentele de epocă.» Linu trebuie să decidă cum folosește cartea.',
        translation:
          'As memórias são escritas com emoção: o autor descreve a multidão enorme, as bandeiras, o caminho feito a pé desde as aldeias dos Montes Apuseni, o frio e o entusiasmo. Mesmo assim, Linu nota detalhes que não batem com outras fontes, por exemplo um número de participantes claramente exagerado. O senhor Mureșan explica: «A memória é uma fonte preciosa, mas reconstrói o passado pelo filtro dos anos. Por isso o historiador sempre a confronta com os documentos da época.» Linu precisa decidir como usar o livro.',
        choices: [
          {
            text: 'Folosește memoriile ca ilustrație, dar le confruntă cu rezoluția.',
            translation: 'Usa as memórias como ilustração, mas as confronta com a resolução.',
            next: 'rezolutie',
          },
          {
            text: 'Prezintă memoriile ca pe un adevăr incontestabil.',
            translation: 'Apresenta as memórias como uma verdade incontestável.',
            next: 'final_mit',
          },
          {
            text: 'Le spune elevilor că memoriile au fost scrise chiar în seara de 1 decembrie 1918.',
            translation: 'Diz aos alunos que as memórias foram escritas na própria noite de 1º de dezembro de 1918.',
            wrong:
              'No início, o texto diz que o livro foi escrito «la câteva decenii după eveniment» — algumas décadas depois. É justamente por isso que a memória passa pelo «filtro dos anos».',
          },
        ],
      },
      elevi: {
        emoji: '🧑‍🎓',
        text: 'Grupul de liceeni intră în Sala Unirii. O elevă ridică mâna, vizibil sceptică: «De ce ar trebui să ne intereseze un eveniment de acum mai bine de o sută de ani? Mi se pare ceva abstract.» Colegii ei chicotesc, iar profesoara lor pare stânjenită. Linu simte că răspunsul lui va decide dacă vizita devine o conversație autentică sau o simplă formalitate.',
        translation:
          'O grupo de alunos entra na Sala da União. Uma aluna levanta a mão, visivelmente cética: «Por que deveria nos interessar um evento de mais de cem anos atrás? Me parece uma coisa abstrata.» Os colegas dão risadinhas, e a professora deles parece constrangida. Linu sente que a resposta dele vai decidir se a visita vira uma conversa autêntica ou uma mera formalidade.',
        choices: [
          {
            text: 'Leagă evenimentul de drepturi pe care elevii le consideră firești azi.',
            translation: 'Liga o evento a direitos que os alunos consideram naturais hoje.',
            next: 'dezbatere',
          },
          { text: 'Recită o listă lungă de date, nume și cifre.', translation: 'Recita uma longa lista de datas, nomes e números.', next: 'final_plictis' },
        ],
      },
      dezbatere: {
        emoji: '💬',
        text: 'Linu le explică faptul că votul universal și dreptul țăranilor la pământ, pe care ei le consideră de la sine înțelese, au fost cândva revendicări politice îndrăznețe. Discuția se aprinde: elevii vor să afle de ce drepturile minorităților au fost respectate doar parțial și ce a însemnat, concret, reforma agrară pentru familiile lor. Domnul Mureșan urmărește dezbaterea de la distanță, cu un zâmbet discret. La final, eleva sceptică vine la Linu cu o ultimă întrebare: «Unde putem citi textul complet?»',
        translation:
          'Linu explica que o voto universal e o direito dos camponeses à terra, que eles tomam como óbvios, já foram reivindicações políticas ousadas. A discussão pega fogo: os alunos querem saber por que os direitos das minorias foram respeitados só parcialmente e o que significou, concretamente, a reforma agrária para as famílias deles. O senhor Mureșan acompanha o debate à distância, com um sorriso discreto. No fim, a aluna cética vem até o Linu com uma última pergunta: «Onde a gente pode ler o texto completo?»',
        choices: [
          {
            text: 'Îi dă copia rezoluției și o invită la biblioteca muzeului.',
            translation: 'Dá a ela a cópia da resolução e a convida à biblioteca do museu.',
            next: 'final_bom',
          },
        ],
      },
      final_mit: {
        emoji: '🗿',
        text: 'Elevii ascultă povestea cu plăcere, dar unul dintre ei găsește pe telefon cifre complet diferite și îl pune pe Linu în încurcătură. Prezentarea se transformă într-o dispută despre cine are dreptate, iar procesul istoric trece pe plan secund. Domnul Mureșan îi amintește, după vizită, că o sursă emoționantă nu este neapărat o sursă exactă.',
        translation:
          'Os alunos ouvem a história com gosto, mas um deles encontra no celular números completamente diferentes e deixa o Linu numa saia justa. A apresentação vira uma disputa sobre quem tem razão, e o processo histórico fica em segundo plano. O senhor Mureșan lembra a ele, depois da visita, que uma fonte emocionante não é necessariamente uma fonte exata.',
        ending: {
          tone: 'neutro',
          title: 'Lenda em vez de história',
          message: 'Memórias são valiosas, mas precisam ser confrontadas com documentos da época. Tente de novo!',
        },
      },
      final_plictis: {
        emoji: '🥱',
        text: 'După cinci minute de date și nume, jumătate dintre elevi se uită pe telefon, iar eleva sceptică pare confirmată în bănuielile ei. Vizita se încheie politicos, dar fără nicio întrebare. Linu își dă seama că a răspuns la «ce» și «când», dar a ocolit complet întrebarea «de ce».',
        translation:
          'Depois de cinco minutos de datas e nomes, metade dos alunos está olhando o celular, e a aluna cética parece confirmada em suas suspeitas. A visita termina educadamente, mas sem nenhuma pergunta. Linu percebe que respondeu ao «o quê» e ao «quando», mas desviou completamente da pergunta «por quê».',
        ending: {
          tone: 'neutro',
          title: 'Aula de decoreba',
          message: 'História sem sentido para o presente vira lista de datas. Tente conectar o passado com a vida dos alunos!',
        },
      },
      final_bom: {
        emoji: '🎉',
        text: 'Pe 1 Decembrie, Linu o revede pe elevă în mulțimea adunată în cetate, cu rezoluția printată și plină de sublinieri. «Am găsit trei lucruri cu care nu sunt de acord», îi spune ea, mândră. Domnul Mureșan râde: «Asta înseamnă că ai făcut o treabă excelentă, Linu. Istoria bine predată nu produce admiratori, ci cititori critici.»',
        translation:
          'No 1º de Dezembro, Linu revê a aluna na multidão reunida na cidadela, com a resolução impressa e cheia de sublinhados. «Achei três coisas com que eu não concordo», diz ela, orgulhosa. O senhor Mureșan ri: «Isso quer dizer que você fez um trabalho excelente, Linu. História bem ensinada não produz admiradores, e sim leitores críticos.»',
        ending: {
          tone: 'bom',
          title: 'Historiador de verdade!',
          message: 'O Linu usou a fonte primária, mostrou a distância entre promessa e realidade e despertou o espírito crítico dos alunos.',
        },
      },
    },
  },
  {
    id: 'ro-h42',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Zerourile care au dispărut',
    emoji: '💸',
    summary: 'Estagiário numa revista de economia em Iași, o Linu precisa escrever sobre a denominação do leu — com rigor, mas sem esquecer as pessoas.',
    cultural_context:
      'Em 1º de julho de 2005, a Romênia fez a denominação da moeda: 10.000 lei antigos passaram a valer 1 leu novo (RON). O nome «leu» (leão) vem do táler holandês com a figura de um leão, que circulava na região séculos atrás.',
    start: 'start',
    glossary: [
      ['denominare', 'denominação (corte de zeros da moeda)'],
      ['putere de cumpărare', 'poder de compra'],
      ['inflație galopantă', 'inflação galopante'],
      ['economii', 'economias, poupança'],
      ['redactor-șef', 'editor-chefe'],
      ['mărturie', 'depoimento, testemunho'],
      ['riguros', 'rigoroso'],
    ],
    nodes: {
      start: {
        emoji: '📰',
        text: 'Linu face un stagiu la redacția unei reviste economice din Iași. Redactorul-șef, domnul Pavel, îi propune un subiect aparent simplu: denominarea leului din 2005. «Scrie ceva accesibil, dar riguros», îi cere el. «Cititorii noștri detestă deopotrivă jargonul inutil și simplificările grosolane.» În aceeași seară, gazda lui Linu, doamna Viorica, scoate dintr-un sertar un teanc de bancnote vechi, pline de zerouri.',
        translation:
          'Linu faz um estágio na redação de uma revista de economia em Iași. O editor-chefe, o senhor Pavel, propõe a ele um assunto aparentemente simples: a denominação do leu em 2005. «Escreva algo acessível, mas rigoroso», pede ele. «Nossos leitores detestam igualmente o jargão inútil e as simplificações grosseiras.» Na mesma noite, a senhoria do Linu, dona Viorica, tira de uma gaveta um maço de cédulas antigas, cheias de zeros.',
        choices: [
          {
            text: 'O roagă pe doamna Viorica să-i povestească despre anii aceia.',
            translation: 'Pede a dona Viorica que conte sobre aqueles anos.',
            next: 'gazda',
          },
          {
            text: 'A doua zi, se duce direct la bibliotecă să se documenteze.',
            translation: 'No dia seguinte, vai direto à biblioteca pesquisar.',
            next: 'biblioteca',
          },
        ],
      },
      gazda: {
        emoji: '👵',
        text: '«Pe la sfârșitul anilor ’90, salariul meu se măsura în milioane, dar tot nu-mi ajungea până la sfârșitul lunii», oftează doamna Viorica. Ea îi povestește cum prețurile creșteau de la o lună la alta și cum economiile de o viață ale unor vecini s-au topit în câțiva ani. În unele perioade, spune ea, oamenii se grăbeau să cheltuie banii imediat, înainte ca aceștia să-și piardă valoarea. Linu înțelege că, dincolo de cifre, inflația a avut un cost social și psihologic enorm. Pentru articol, are însă nevoie și de date verificate.',
        translation:
          '«Lá pelo fim dos anos 90, meu salário se media em milhões, mas mesmo assim não dava até o fim do mês», suspira dona Viorica. Ela conta como os preços subiam de um mês para o outro e como as economias de uma vida inteira de alguns vizinhos derreteram em poucos anos. Em certos períodos, diz ela, as pessoas corriam para gastar o dinheiro na hora, antes que ele perdesse o valor. Linu entende que, além dos números, a inflação teve um custo social e psicológico enorme. Para o artigo, porém, ele também precisa de dados verificados.',
        choices: [{ text: 'Merge la bibliotecă să verifice informațiile.', translation: 'Vai à biblioteca verificar as informações.', next: 'biblioteca' }],
      },
      biblioteca: {
        emoji: '📚',
        text: 'La Biblioteca Centrală Universitară din Iași, Linu consultă studii și rapoarte oficiale. Află că, la 1 iulie 2005, a fost introdus leul nou: zece mii de lei vechi au devenit un singur leu. Denominarea nu a modificat puterea de cumpărare, ci doar unitatea de măsură, la fel cum o distanță rămâne aceeași, fie că o exprimi în metri, fie în centimetri. Măsura a devenit posibilă abia după ce inflația scăzuse considerabil, așa că n-a fost cauza stabilizării, ci mai degrabă o consecință și un semnal al ei.',
        translation:
          'Na Biblioteca Central Universitária de Iași, Linu consulta estudos e relatórios oficiais. Descobre que, em 1º de julho de 2005, foi introduzido o leu novo: dez mil lei antigos viraram um único leu. A denominação não alterou o poder de compra, só a unidade de medida, assim como uma distância continua a mesma, quer você a expresse em metros, quer em centímetros. A medida só se tornou possível depois que a inflação tinha caído consideravelmente; portanto, não foi a causa da estabilização, e sim uma consequência e um sinal dela.',
        choices: [{ text: 'Se întoarce acasă cu notițele.', translation: 'Volta para casa com as anotações.', next: 'intrebare' }],
      },
      intrebare: {
        emoji: '🪙',
        text: 'Acasă, doamna Viorica îi flutură prin fața ochilor o bancnotă veche de un milion de lei. «Ei, domnule economist», îl provoacă ea, «cât ar fi valorat asta în lei noi, în ziua denominării?» Linu zâmbește: e primul test practic al documentării lui. Dacă greșește aici, cum ar putea explica mecanismul unor cititori exigenți?',
        translation:
          'Em casa, dona Viorica agita diante dos olhos dele uma cédula antiga de um milhão de lei. «E aí, senhor economista», provoca ela, «quanto isto teria valido em lei novos, no dia da denominação?» Linu sorri: é o primeiro teste prático da pesquisa dele. Se errar aqui, como poderia explicar o mecanismo a leitores exigentes?',
        choices: [
          { text: '«O sută de lei noi.»', translation: '«Cem lei novos.»', next: 'articol' },
          {
            text: '«Zece mii de lei noi.»',
            translation: '«Dez mil lei novos.»',
            wrong: 'A regra era: zece mii de lei vechi = un leu nou (10.000 antigos = 1 novo). Então 1.000.000 ÷ 10.000 = 100 lei novos (o sută de lei).',
          },
        ],
      },
      articol: {
        emoji: '✍️',
        text: 'Linu scrie o primă versiune și i-o trimite domnului Pavel. Acesta o citește și face o observație: «Ai explicat corect mecanismul, dar textul e sec. Unde sunt oamenii?» Linu ezită între două variante: să includă povestea doamnei Viorica, ca exemplu concret al efectelor inflației, sau să adauge mai multe grafice și indicatori macroeconomici. Termenul de predare este a doua zi dimineață.',
        translation:
          'Linu escreve uma primeira versão e a envia ao senhor Pavel. Ele a lê e faz uma observação: «Você explicou o mecanismo corretamente, mas o texto está seco. Cadê as pessoas?» Linu hesita entre duas opções: incluir a história de dona Viorica, como exemplo concreto dos efeitos da inflação, ou acrescentar mais gráficos e indicadores macroeconômicos. O prazo de entrega é na manhã seguinte.',
        choices: [
          {
            text: 'Include mărturia doamnei Viorica, cu acordul ei.',
            translation: 'Inclui o depoimento de dona Viorica, com o consentimento dela.',
            next: 'acord',
          },
          {
            text: 'Adaugă zece grafice și o avalanșă de termeni tehnici.',
            translation: 'Acrescenta dez gráficos e uma avalanche de termos técnicos.',
            next: 'final_jargon',
          },
        ],
      },
      acord: {
        emoji: '🤝',
        text: 'Doamna Viorica acceptă, cu o singură condiție: să nu-i fie publicat numele complet. Linu îi respectă dorința și construiește articolul în jurul contrastului dintre două epoci: cea în care oamenii cărau salariul în teancuri de bancnote și cea de azi, cu o monedă relativ stabilă. Domnul Pavel citește textul, apoi ridică privirea și îl testează: «Deci, pe scurt, tăierea zerourilor a oprit inflația?»',
        translation:
          'Dona Viorica aceita, com uma única condição: que seu nome completo não seja publicado. Linu respeita o desejo dela e constrói o artigo em torno do contraste entre duas épocas: aquela em que as pessoas carregavam o salário em maços de cédulas e a de hoje, com uma moeda relativamente estável. O senhor Pavel lê o texto, depois levanta os olhos e o testa: «Então, resumindo, cortar os zeros acabou com a inflação?»',
        choices: [
          {
            text: '«Nu. Denominarea a fost posibilă tocmai pentru că inflația scăzuse deja.»',
            translation: '«Não. A denominação foi possível justamente porque a inflação já tinha caído.»',
            next: 'final_bom',
          },
          {
            text: '«Da, după tăierea zerourilor, prețurile au scăzut de zece mii de ori.»',
            translation: '«Sim, depois do corte dos zeros, os preços caíram dez mil vezes.»',
            wrong:
              'Na biblioteca, o Linu leu que a denominação «nu a modificat puterea de cumpărare» (não mudou o poder de compra) e que não foi a causa da estabilização, e sim uma consequência dela. Preços e salários foram divididos pelo mesmo número.',
          },
        ],
      },
      final_jargon: {
        emoji: '📉',
        text: 'Articolul final este impecabil din punct de vedere tehnic, dar aproape imposibil de citit. Domnul Pavel îl publică doar pe site, unde strânge câteva zeci de vizualizări. «Rigoarea fără claritate nu ajunge la nimeni», oftează el, fără reproș, dar și fără entuziasm.',
        translation:
          'O artigo final é impecável do ponto de vista técnico, mas quase impossível de ler. O senhor Pavel o publica só no site, onde junta algumas dezenas de visualizações. «Rigor sem clareza não chega a ninguém», suspira ele, sem censura, mas também sem entusiasmo.',
        ending: {
          tone: 'neutro',
          title: 'Jargão demais',
          message: 'Um texto econômico precisa de dados e de gente. Tente incluir o depoimento de dona Viorica!',
        },
      },
      final_bom: {
        emoji: '🎉',
        text: 'Articolul apare în numărul următor al revistei și provoacă un val de scrisori de la cititori care își amintesc propriile teancuri de bancnote. Domnul Pavel îi propune lui Linu o rubrică lunară despre istoria economică a României. Doamna Viorica decupează articolul și îl pune la loc de cinste, lângă bancnota ei de un milion.',
        translation:
          'O artigo sai na edição seguinte da revista e provoca uma onda de cartas de leitores que se lembram dos próprios maços de cédulas. O senhor Pavel propõe ao Linu uma coluna mensal sobre a história econômica da Romênia. Dona Viorica recorta o artigo e o coloca num lugar de honra, ao lado da sua cédula de um milhão.',
        ending: {
          tone: 'bom',
          title: 'Jornalista econômico!',
          message: 'O Linu explicou a denominação com rigor, sem jargão, e deu voz a quem viveu a inflação.',
        },
      },
    },
  },
  {
    id: 'ro-h43',
    level: 'C2',
    cefr: 'C2',
    title: 'Albastrul de Voroneț',
    emoji: '🎨',
    summary: 'Na Bucovina, Linu conhece um velho pintor de igrejas que guarda o segredo por trás do azul de Voroneț: a paciência.',
    cultural_context:
      'O Mosteiro de Voroneț, erguido em 1488 por ordem de Estêvão, o Grande (Ștefan cel Mare), é famoso pelo «azul de Voroneț» das pinturas externas e faz parte das igrejas pintadas do norte da Moldávia, Patrimônio Mundial da UNESCO.',
    start: 'start',
    glossary: [
      ['amu (moldovenesc)', 'acum — agora'],
      ['îi (moldovenesc)', 'este — é, está'],
      ['zugrav', 'pintor de igrejas (antigo); hoje, pintor de paredes'],
      ['pisălog', 'pilão'],
      ['zise', 'disse (perfeito simples de a zice)'],
      ['Graba strică treaba', 'A pressa estraga o trabalho'],
      ['Încetul cu încetul se face oțetul', 'Devagar se faz o vinagre (devagar se vai ao longe)'],
      ['poale-n brâu', 'pastel doce moldavo recheado de queijo'],
    ],
    nodes: {
      start: {
        emoji: '⛪',
        text: 'Ploua mărunt și rece când Linu coborî din autobuz la Voroneț. Mănăstirea se ivi dintre meri ca o corabie albastră trasă la mal. Pinguinul rămase împietrit în fața zidului de apus, unde sfinți și păcătoși așteptau, de aproape cinci veacuri, Judecata de Apoi. Lângă poartă, un bătrân cu cușmă își ferea de ploaie o cutie de lemn. Linu simți că și zidul, și bătrânul aveau ceva să-i spună.',
        translation:
          'Chovia fino e frio quando Linu desceu do ônibus em Voroneț. O mosteiro surgiu entre as macieiras como um navio azul puxado para a margem. O pinguim ficou petrificado diante da parede oeste, onde santos e pecadores esperavam, havia quase cinco séculos, o Juízo Final. Perto do portão, um velho de gorro de pele protegia da chuva uma caixa de madeira. Linu sentiu que tanto a parede quanto o velho tinham algo a lhe dizer. (Coborî, se ivi, rămase, simți: perfeito simples, o tempo da narração literária.)',
        choices: [
          { text: 'Se apropie de bătrânul cu cutia.', translation: 'Aproxima-se do velho da caixa.', next: 'batran' },
          { text: 'Se adăpostește în pridvor și citește ghidul.', translation: 'Abriga-se no alpendre da igreja e lê o guia.', next: 'ghid' },
        ],
      },
      ghid: {
        emoji: '📖',
        text: 'Sub streașina pridvorului, Linu deschise ghidul, ale cărui pagini miroseau a hârtie udă. Citi că biserica fu ridicată în 1488, din porunca lui Ștefan cel Mare, iar pictura de afară fu adăugată mai târziu, în vremea mitropolitului Grigore Roșca. Mai citi că albastrul acela, zis de Voroneț, stă pe ziduri de sute de ani, în bătaia vânturilor, fără să pălească prea tare. Cum se făcea vopseaua, ghidul nu spunea limpede; spunea doar că nimeni nu mai știe cu siguranță. Când ploaia se domoli, bătrânul cu cutia îi făcu semn cu mâna.',
        translation:
          'Sob o beiral do alpendre, Linu abriu o guia, cujas páginas cheiravam a papel molhado. Leu que a igreja foi erguida em 1488, por ordem de Estêvão, o Grande, e que a pintura externa foi acrescentada mais tarde, no tempo do metropolita Grigore Roșca. Leu ainda que aquele azul, chamado de Voroneț, está nas paredes há centenas de anos, açoitado pelos ventos, sem desbotar muito. Como se fazia a tinta, o guia não dizia com clareza; dizia apenas que ninguém mais sabe com certeza. Quando a chuva amainou, o velho da caixa lhe fez um sinal com a mão.',
        choices: [
          { text: 'Se duce la bătrân.', translation: 'Vai até o velho.', next: 'batran' },
          {
            text: 'Pleacă dezamăgit, fiindcă ghidul spune că albastrul s-a șters de tot.',
            translation: 'Vai embora decepcionado, porque o guia diz que o azul se apagou por completo.',
            wrong:
              'O guia diz o contrário: o azul está nas paredes há centenas de anos «fără să pălească prea tare» — sem desbotar muito. O que ninguém sabe ao certo é a receita da tinta.',
          },
        ],
      },
      batran: {
        emoji: '👴',
        text: 'Bătrânul avea ochii mici și vii, ca două mure în fundul unui coș. «Amu, fătul meu, ci cauți tu pi-aici pi vremea asta? Îi frig și ploaia nu-i de șagă», zise el pe moldovenește. Linu învățase la Iași că „amu” înseamnă „acum”, că „îi” ține adesea locul lui „este”, iar „ci” și „pi” sunt „ce” și „pe”, rostite ca-n Bucovina. Bătrânul se prezentă: Toader, zugrav de biserici, adică pictor, cum se zicea pe vremuri. Deschise cutia, și Linu văzu înăuntru pietre albăstrui, un pisălog și câteva pensule legate cu ață.',
        translation:
          'O velho tinha olhos pequenos e vivos, como duas amoras no fundo de um cesto. «Agora, meu filho, o que você procura por aqui com um tempo destes? Está frio e a chuva não é brincadeira», disse ele à moda moldava. Linu tinha aprendido em Iași que «amu» significa «acum» (agora), que «îi» muitas vezes faz as vezes de «este» (é/está), e que «ci» e «pi» são «ce» e «pe», pronunciados como na Bucovina. O velho se apresentou: Toader, «zugrav» de igrejas, isto é, pintor, como se dizia antigamente. Abriu a caixa, e Linu viu lá dentro pedras azuladas, um pilão e alguns pincéis amarrados com linha.',
        choices: [
          { text: 'Îl întreabă pe Toader despre taina albastrului.', translation: 'Pergunta ao Toader sobre o segredo do azul.', next: 'secret' },
          {
            text: 'Îi dă lui Toader fularul, fiindcă a înțeles că bătrânului îi este frig.',
            translation: 'Dá o cachecol ao Toader, porque entendeu que o velho está com frio.',
            wrong:
              'Em moldovenesc, «îi frig» quer dizer «e frig» — está frio (o tempo). O Toader não disse que ele próprio sentia frio; falava do tempo e da chuva, e perguntava o que Linu fazia ali.',
          },
        ],
      },
      secret: {
        emoji: '🔷',
        text: 'Toader râse încet și zise: «Taina? Taina îi în răbdare, nu în piatră.» Apoi îi povesti că zugravii de altădată frecau piatra ceasuri întregi, până se făcea pulbere mai fină decât făina. Unii zic c-ar fi fost azurit, alții pun la socoteală și varul ud, și oul, și cenușa, dar el mărturisi că nimeni nu mai știe rețeta întreagă. «Încetul cu încetul se face oțetul», adăugă, iar ochii i se făcură și mai mici. Îi propuse lui Linu să rămână la el peste noapte, ca să frece împreună pigment în zori, pentru o icoană veche pe care o avea de restaurat.',
        translation:
          'Toader riu baixinho e disse: «O segredo? O segredo está na paciência, não na pedra.» Depois contou que os pintores de antigamente esfregavam a pedra horas a fio, até virar um pó mais fino que farinha. Uns dizem que seria azurita, outros levam em conta também a cal úmida, o ovo e a cinza, mas ele confessou que ninguém mais sabe a receita inteira. «Devagar se faz o vinagre», acrescentou, e seus olhos ficaram ainda menores. Propôs a Linu que passasse a noite na casa dele, para moerem pigmento juntos ao amanhecer, para um ícone antigo que ele tinha de restaurar.',
        choices: [
          { text: 'Primește invitația și rămâne.', translation: 'Aceita o convite e fica.', next: 'ramane' },
          { text: 'Mulțumește și pleacă spre Suceava cu ultimul autobuz.', translation: 'Agradece e parte para Suceava no último ônibus.', next: 'plecare' },
        ],
      },
      plecare: {
        emoji: '🚌',
        text: 'Linu mulțumi frumos și alergă după ultimul autobuz spre Suceava. Pe geamul aburit, mănăstirea se făcu tot mai mică, până nu mai rămase din ea decât o pată albastră în amurg. La hotel, căută pe telefon albastrul de Voroneț și găsi o mie de păreri, dar niciuna nu mirosea a var și a ploaie. Își aminti vorba lui Toader despre oțet și răbdare. Poate altă dată, își zise, va avea mai mult timp decât grabă.',
        translation:
          'Linu agradeceu gentilmente e correu atrás do último ônibus para Suceava. Pela janela embaçada, o mosteiro foi ficando cada vez menor, até restar dele apenas uma mancha azul no crepúsculo. No hotel, pesquisou no celular sobre o azul de Voroneț e encontrou mil opiniões, mas nenhuma cheirava a cal e a chuva. Lembrou-se do ditado do Toader sobre vinagre e paciência. Talvez de outra vez, disse a si mesmo, ele tivesse mais tempo do que pressa.',
        ending: {
          tone: 'neutro',
          title: 'O azul ficou para trás',
          message: 'O Linu viu Voroneț, mas partiu antes de aprender o segredo do velho pintor. Volte e aceite o convite!',
        },
      },
      ramane: {
        emoji: '🏡',
        text: 'Casa lui Toader stătea la marginea satului, cu prispa spre apus și cu mere înșirate pe pervaz. Baba Veronica îi puse în față poale-n brâu calde și o cană de lapte, zicându-i: «Mănâncă, puiule, că de-aiasta nu găsești la oraș.» Linu pricepu că „aiasta” e „asta” pe moldovenește, iar „puiule” i se păru cel mai potrivit nume pentru un pinguin. Seara, la lumina lămpii, Toader îi spuse că în sat se zice «Omul sfințește locul», adică un loc e atât de bun cât îl face omul care trăiește în el. Linu adormi târziu, cu gândul la pietrele albastre din cutie.',
        translation:
          'A casa do Toader ficava na beira da aldeia, com a varanda voltada para o poente e maçãs enfileiradas no parapeito. A velha Veronica pôs diante dele «poale-n brâu» quentinhos e uma caneca de leite, dizendo: «Coma, filhote, que disto você não encontra na cidade.» Linu entendeu que «aiasta» é «asta» (isto) em moldovenesc, e «puiule» (filhote) lhe pareceu o nome mais adequado para um pinguim. À noite, à luz do lampião, Toader contou que na aldeia se diz «O homem santifica o lugar», isto é, um lugar é tão bom quanto o faz quem vive nele. Linu adormeceu tarde, pensando nas pedras azuis da caixa.',
        choices: [{ text: 'Se culcă, ca să fie treaz în zori.', translation: 'Deita-se para estar desperto ao amanhecer.', next: 'zori' }],
      },
      zori: {
        emoji: '🌅',
        text: 'Toader îl trezi pe când cocoșii abia începuseră să cânte. «Cine se scoală de dimineață departe ajunge», zise bătrânul, punându-i în aripi pisălogul. Linu frecă piatra albastră în piuliță, încet, apoi și mai încet, cum i se arătase. După un ceas, pulberea nu era încă destul de fină, iar aripile începură să-l doară. Toader tăcea și se uita la el ca la o pâine care încă n-a crescut.',
        translation:
          'Toader o acordou quando os galos mal tinham começado a cantar. «Quem acorda cedo vai longe», disse o velho, pondo-lhe o pilão nas asas. Linu esfregou a pedra azul no almofariz, devagar, depois mais devagar ainda, como lhe haviam mostrado. Depois de uma hora, o pó ainda não estava fino o bastante, e as asas começaram a doer. Toader calava e olhava para ele como para um pão que ainda não cresceu.',
        choices: [
          {
            text: 'Continuă să frece, cu răbdare, cum îl învățase Toader.',
            translation: 'Continua a moer, com paciência, como o Toader lhe ensinara.',
            next: 'final_bom',
          },
          {
            text: 'Toarnă toată apa deodată, ca să termine mai repede.',
            translation: 'Despeja toda a água de uma vez, para terminar mais rápido.',
            next: 'final_graba',
          },
          {
            text: 'Se întoarce în pat, căci bătrânul zise că cine se scoală devreme nu ajunge nicăieri.',
            translation: 'Volta para a cama, pois o velho disse que quem acorda cedo não chega a lugar nenhum.',
            wrong:
              'O provérbio diz o contrário: «Cine se scoală de dimineață departe ajunge» — quem acorda cedo vai longe. O Toader queria o Linu acordado e trabalhando.',
          },
        ],
      },
      final_graba: {
        emoji: '💧',
        text: 'Apa se revărsă peste marginea piuliței, iar pulberea se făcu o zeamă albăstruie, plină de cocoloașe. Toader oftă, dar nu se supără. «Graba strică treaba, fătul meu», zise el, ștergând masa cu o cârpă. Culoarea aceea nu mai era bună de pus pe o icoană, ci doar de vopsit gardul. Linu învăță, cu penele pătate de albastru, că unele lucruri nu se lasă grăbite.',
        translation:
          'A água transbordou pela borda do almofariz, e o pó virou um caldo azulado, cheio de grumos. Toader suspirou, mas não se zangou. «A pressa estraga o trabalho, meu filho», disse ele, limpando a mesa com um pano. Aquela cor já não servia para um ícone, só para pintar a cerca. Linu aprendeu, com as penas manchadas de azul, que certas coisas não se deixam apressar.',
        ending: {
          tone: 'neutro',
          title: 'A pressa estraga tudo',
          message: 'O Linu quis acelerar e estragou o pigmento. «Graba strică treaba»: tente de novo, com calma.',
        },
      },
      final_bom: {
        emoji: '🖌️',
        text: 'Pe la amiază, pulberea ajunse fină ca fumul, iar Toader o amestecă cu grijă. Cu o pensulă subțire, bătrânul atinse colțul icoanei, și albastrul se aprinse pe lemn ca cerul după ploaie. «Încetul cu încetul se face oțetul», zise el mulțumit și îi întinse lui Linu pensula. Linu puse, tremurând, un singur punct albastru pe mantia unui înger. Când plecă spre Suceava, știa că în icoana aceea rămăsese pentru totdeauna și o fărâmă din răbdarea lui.',
        translation:
          'Por volta do meio-dia, o pó ficou fino como fumaça, e Toader o misturou com cuidado. Com um pincel fino, o velho tocou o canto do ícone, e o azul se acendeu na madeira como o céu depois da chuva. «Devagar se faz o vinagre», disse ele, satisfeito, e estendeu o pincel a Linu. Linu pôs, tremendo, um único ponto azul no manto de um anjo. Quando partiu para Suceava, sabia que naquele ícone tinha ficado para sempre também uma migalha da sua paciência.',
        ending: {
          tone: 'bom',
          title: 'Um ponto de azul de Voroneț',
          message: 'O Linu entendeu o dialeto moldavo, os provérbios do Toader e deixou sua marca num ícone restaurado.',
        },
      },
    },
  },
  {
    id: 'ro-h44',
    level: 'C2',
    cefr: 'C2',
    title: 'Ruga din Banat',
    emoji: '🎻',
    summary: 'Um colega convida o Linu para a «ruga», a festa do padroeiro numa aldeia do Banat, onde se fala um romeno cheio de palavras próprias.',
    cultural_context:
      'Timișoara foi, em 1884, uma das primeiras cidades da Europa com iluminação pública elétrica nas ruas. No Banat, a «ruga» é a grande festa anual da aldeia, no dia do santo padroeiro da igreja, com comida, música e dança.',
    start: 'start',
    glossary: [
      ['fain (bănățean/ardelenesc)', 'bonito, bom, legal'],
      ['io', 'eu (regional)'],
      ['dă (bănățean)', 'de'],
      ['paradaisă (bănățean)', 'roșie — tomate'],
      ['crumpi (bănățean)', 'cartofi — batatas'],
      ['cucuruz (bănățean)', 'porumb — milho'],
      ['rugă (în Banat)', 'festa do padroeiro da aldeia'],
      ['Vorba dulce mult aduce', 'Palavra doce traz muito (com gentileza se consegue muito)'],
    ],
    nodes: {
      start: {
        emoji: '🏛️',
        text: 'Toamna se lăsase peste Timișoara ca o eșarfă de culoarea mierii. Linu lucra de o lună la un birou din centru și, seară de seară, trecea prin Piața Victoriei, pe sub felinare. Un coleg, Dragoș, îi povesti că orașul fu, în 1884, printre cele dintâi din Europa cu străzi luminate electric. Apoi, fără multă vorbă, îl pofti duminică la ruga din satul bunicilor săi, de lângă Lugoj. «Ruga-i sărbătoarea hramului, măi pinguine, adică mâncare, muzică și joc până noaptea; nu scapi de ea așa ușor», râse Dragoș.',
        translation:
          'O outono tinha pousado sobre Timișoara como uma echarpe cor de mel. Linu trabalhava havia um mês num escritório do centro e, noite após noite, passava pela Praça da Vitória, sob os postes de luz. Um colega, Dragoș, contou-lhe que a cidade foi, em 1884, uma das primeiras da Europa com ruas iluminadas a eletricidade. Depois, sem muita conversa, convidou-o no domingo para a «ruga» da aldeia dos avós, perto de Lugoj. «A ruga é a festa do padroeiro, ô pinguim, ou seja, comida, música e dança até de noite; você não escapa dela tão fácil», riu Dragoș.',
        choices: [
          { text: 'Primește bucuros invitația.', translation: 'Aceita com alegria o convite.', next: 'sat' },
          {
            text: 'Refuză politicos, căci a înțeles că la rugă se merge doar ca să te rogi toată ziua în biserică.',
            translation: 'Recusa educadamente, pois entendeu que à «ruga» se vai só para rezar o dia todo na igreja.',
            wrong:
              'Apesar do nome (parecido com «rugăciune», oração), o Dragoș explicou que a ruga é a festa do padroeiro: «mâncare, muzică și joc până noaptea» — comida, música e dança até de noite.',
          },
        ],
      },
      sat: {
        emoji: '👵',
        text: 'Duminică dimineață, satul mirosea a fum de grătar, a gutui și a tămâie. Tanti Floarea, bunica lui Dragoș, le ieși înainte cu mâinile pline de făină. «Bine ai venit, dragă! Io-s Floarea. Ce fain că ai venit dă la Timișoara!», zise ea, pe bănățenește. Dragoș îi șopti lui Linu că „io” e „eu”, că „fain” înseamnă „frumos” sau „bun”, iar „dă” ține locul lui „de”. Apoi bătrâna îl privi cu ochi de general: «Amu, du-te în grădină și adă-mi vreo trei paradaise pentru ciorbă!»',
        translation:
          'No domingo de manhã, a aldeia cheirava a fumaça de churrasco, a marmelo e a incenso. Tia Floarea, a avó do Dragoș, veio recebê-los com as mãos cheias de farinha. «Seja bem-vindo, querido! Eu sou a Floarea. Que bom que você veio de Timișoara!», disse ela, à moda do Banat. Dragoș cochichou ao Linu que «io» é «eu», que «fain» significa «bonito» ou «bom», e que «dă» faz as vezes de «de». Depois a velha o olhou com olhos de general: «Agora vá à horta e me traga umas três «paradaise» para a sopa!»',
        choices: [{ text: 'Merge în grădină.', translation: 'Vai à horta.', next: 'gradina' }],
      },
      gradina: {
        emoji: '🍅',
        text: 'Grădina era o adevărată împărăție: la capăt foșneau rânduri de cucuruz uscat, iar lângă gard stăteau grămezi de crumpi scoși de curând. Pe araci atârnau, grele și roșii, cele din urmă paradaise ale anului. Linu își aminti ce-i spusese Dragoș pe drum: bănățenii zic „cucuruz” la porumb, „crumpi” la cartofi și „paradaisă” la roșie, cuvinte împrumutate de la vecini de-a lungul veacurilor. O pisică portocalie îl urmărea bănuitoare de pe un butoi. Linu își suflecă aripile și se hotărî.',
        translation:
          'A horta era um verdadeiro reino: no fundo farfalhavam fileiras de «cucuruz» seco, e junto à cerca havia montes de «crumpi» recém-colhidos. Nas estacas pendiam, pesados e vermelhos, os últimos «paradaise» do ano. Linu lembrou o que o Dragoș lhe dissera no caminho: no Banat se diz «cucuruz» para milho, «crumpi» para batata e «paradaisă» para tomate, palavras emprestadas dos vizinhos ao longo dos séculos. Um gato laranja o observava, desconfiado, de cima de um barril. Linu arregaçou as asas e se decidiu.',
        choices: [
          { text: 'Culege trei roșii mari și le duce în bucătărie.', translation: 'Colhe três tomates grandes e os leva à cozinha.', next: 'masa' },
          {
            text: 'Umple un coș cu cartofi și îl duce în bucătărie.',
            translation: 'Enche um cesto de batatas e o leva à cozinha.',
            wrong: '«Paradaisă» é tomate (em romeno padrão, «roșie»). Batata, no Banat, é «crumpi». A tia Floarea pediu tomates para a sopa.',
          },
        ],
      },
      masa: {
        emoji: '🍲',
        text: 'Până la prânz, curtea se umplu de rude, de vecini și de un unchi venit tocmai din Germania. Pe masa lungă de sub nuc se perindară ciorba, sarmalele, friptura și prăjiturile, fiecare mai gustoasă decât cea dinainte. Când Linu vru să se oprească, tanti Floarea îi mai puse o sarma în farfurie: «Mănâncă, că la rugă nu se numără!» Unchiul ridică paharul și zise: «Vorba dulce mult aduce, dar o sarma bună aduce și mai mult!» Deodată, din ulița de jos se auzi taraful, și toată lumea se ridică de la masă.',
        translation:
          'Até o meio-dia, o quintal se encheu de parentes, de vizinhos e de um tio vindo lá da Alemanha. Na mesa comprida debaixo da nogueira desfilaram a sopa, os charutos de repolho, o assado e os doces, cada um mais gostoso que o anterior. Quando Linu quis parar, tia Floarea pôs mais um charuto no prato dele: «Coma, que na ruga não se conta!» O tio ergueu o copo e disse: «Palavra doce traz muito, mas um bom charuto de repolho traz ainda mais!» De repente, da rua de baixo se ouviu a banda de música, e todo mundo se levantou da mesa.',
        choices: [
          { text: 'Merge cu toții la horă.', translation: 'Vai com todos para a roda de dança.', next: 'hora' },
          { text: 'Rămâne la masă, cu încă o farfurie de sarmale.', translation: 'Fica à mesa, com mais um prato de charutos.', next: 'final_somn' },
        ],
      },
      final_somn: {
        emoji: '😴',
        text: 'Linu hotărî că sarmalele meritau mai multă atenție decât dansul. După a treia farfurie, umbra nucului îl legănă ca pe un prunc, iar pinguinul adormi cu ciocul în piept. Se trezi la apus, când lăutarii tăcuseră și mesele fuseseră strânse. Tanti Floarea îi puse pe umeri un pled și zise: «Las’, dragă, și somnul după sarmale e tot rugă.» Linu știa însă că pierduse partea cea mai faină a zilei.',
        translation:
          'Linu decidiu que os charutos de repolho mereciam mais atenção que a dança. Depois do terceiro prato, a sombra da nogueira o embalou como a um bebê, e o pinguim adormeceu com o bico no peito. Acordou ao pôr do sol, quando os músicos já tinham se calado e as mesas tinham sido recolhidas. Tia Floarea pôs-lhe uma manta nos ombros e disse: «Deixa, querido, a soneca depois dos charutos também é ruga.» Linu sabia, porém, que tinha perdido a parte mais «faină» (legal) do dia.',
        ending: { tone: 'neutro', title: 'Soneca de ruga', message: 'O Linu comeu como um rei, mas dormiu durante a dança. Volte e vá para a roda!' },
      },
      hora: {
        emoji: '💃',
        text: 'Pe ulița mare, tinerii în costume populare se prinseseră deja în horă, iar fetele purtau salbe care sclipeau în soare. Muzica bănățeană era iute și săltăreață, cu o vioară care parcă alerga după propriul ecou. O fată cu năframă albă îi întinse lui Linu mâna: «Hai la joc, că dansul nu se învață stând pe margine!» Linu se uită la labele lui scurte și palmate, apoi la Dragoș, care râdea în hohote. Un bătrân de lângă gard îi strigă: «Cine nu joacă la rugă nu-i dă-al nostru!»',
        translation:
          'Na rua principal, os jovens em trajes típicos já tinham se dado as mãos na roda, e as moças usavam colares de moedas que brilhavam ao sol. A música do Banat era rápida e saltitante, com um violino que parecia correr atrás do próprio eco. Uma moça de lenço branco estendeu a mão ao Linu: «Vem dançar, que dança não se aprende ficando na beirada!» Linu olhou para seus pés curtos e palmados, depois para o Dragoș, que ria às gargalhadas. Um velho junto à cerca gritou-lhe: «Quem não dança na ruga não é dos nossos!» («dă-al nostru» = «de-al nostru».)',
        choices: [
          { text: 'Îi ia mâna fetei și intră în horă.', translation: 'Pega a mão da moça e entra na roda.', next: 'joc' },
          { text: 'Rămâne lângă gard și doar bate din aripi.', translation: 'Fica junto à cerca e só bate as asas.', next: 'final_timid' },
        ],
      },
      joc: {
        emoji: '🎶',
        text: 'Primii pași fură un dezastru: Linu călcă pe picioarele a doi dansatori și pe poala unei fuste. Dar fata îi numără încet ritmul, iar hora se învârtea mai departe, răbdătoare ca o roată de moară. Până la al treilea cântec, pinguinul prinsese pasul și chiar bătu din aripi exact când trebuia. Bătrânul de lângă gard scoase o chiuitură atât de lungă, încât până și câinii se opriră din lătrat. Dragoș își șterse lacrimile de râs și zise: «Amu ești bănățean dă-al nostru!»',
        translation:
          'Os primeiros passos foram um desastre: Linu pisou nos pés de dois dançarinos e na barra de uma saia. Mas a moça contou-lhe o ritmo devagar, e a roda seguia girando, paciente como uma roda de moinho. Até a terceira música, o pinguim tinha pegado o passo e até bateu as asas exatamente na hora certa. O velho junto à cerca soltou um grito de festa tão longo que até os cachorros pararam de latir. Dragoș enxugou as lágrimas de tanto rir e disse: «Agora você é banatense, dos nossos!»',
        choices: [{ text: 'Rămâne în horă până seara.', translation: 'Fica na roda até a noite.', next: 'final_bom' }],
      },
      final_timid: {
        emoji: '👀',
        text: 'Linu rămase lângă gard, bătând din aripi în ritmul viorii. Fata ridică din umeri și se prinse în horă cu altcineva. Jocul se învârti toată seara fără el, iar bătrânul nu mai strigă nimic spre pinguin. La plecare, Dragoș îl bătu pe umăr: «Lasă, frate, că nu-i foc; dar la anul nu mai scapi.» Linu știa însă că la horă, ca și în viață, nimic nu se învață stând pe margine.',
        translation:
          'Linu ficou junto à cerca, batendo as asas no ritmo do violino. A moça deu de ombros e entrou na roda com outra pessoa. A dança girou a noite toda sem ele, e o velho não gritou mais nada para o pinguim. Na saída, Dragoș lhe deu um tapinha no ombro: «Deixa, irmão, não é o fim do mundo; mas ano que vem você não escapa.» Linu sabia, porém, que na roda, como na vida, nada se aprende ficando na beirada.',
        ending: { tone: 'neutro', title: 'Da beirada da roda', message: 'O Linu viu a festa de fora. Na ruga, quem não dança perde o melhor. Tente de novo!' },
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu dansă până când felinarele satului se aprinseră unul câte unul, ca odinioară străzile Timișoarei. La plecare, tanti Floarea îi umplu o sacoșă cu prăjituri, paradaise și un borcan de zacuscă. «Să vii și la anul, dragă, că ruga fără tine nu mai e așa faină», zise ea. Pe drumul spre casă, Linu își repetă în gând cuvintele noi: fain, crumpi, cucuruz, paradaisă. Se simțea, pentru prima oară, nu un turist, ci un oaspete.',
        translation:
          'Linu dançou até os postes da aldeia se acenderem um a um, como antigamente as ruas de Timișoara. Na saída, tia Floarea encheu-lhe uma sacola de doces, «paradaise» e um pote de zacuscă. «Venha também no ano que vem, querido, que a ruga sem você não é tão boa», disse ela. No caminho de volta, Linu repetiu mentalmente as palavras novas: fain, crumpi, cucuruz, paradaisă. Sentia-se, pela primeira vez, não um turista, mas um convidado.',
        ending: {
          tone: 'bom',
          title: 'Banatense de coração!',
          message: 'O Linu entendeu o falar do Banat, trouxe os tomates certos e dançou na roda da ruga.',
        },
      },
    },
  },
  {
    id: 'ro-h45',
    level: 'C2',
    cefr: 'C2',
    title: 'Gheața din adâncuri',
    emoji: '🧊',
    summary: 'Nos Montes Apuseni, Linu acompanha uma pesquisadora e um velho guia até uma caverna que guarda gelo de milhares de anos.',
    cultural_context:
      'A caverna de Scărișoara, nos Montes Apuseni, abriga uma das maiores geleiras subterrâneas da Europa, com gelo acumulado ao longo de milhares de anos. Os moradores tradicionais dessas montanhas são chamados de «moți».',
    start: 'start',
    glossary: [
      ['no (ardelenesc)', 'ei bine — bem, então'],
      ['musai (ardelenesc)', 'neapărat, trebuie — é obrigatório'],
      ['pită (ardelenesc)', 'pâine — pão'],
      ['nu-i bai (ardelenesc)', 'nu-i nicio problemă — não tem problema'],
      ['a se hodini (regional)', 'a se odihni — descansar'],
      ['bade', 'tratamento respeitoso para um homem mais velho (Transilvânia)'],
      ['Apa trece, pietrele rămân', 'A água passa, as pedras ficam'],
      ['se depuseră', 'se depositaram (perfeito simples de a se depune)'],
    ],
    nodes: {
      start: {
        emoji: '⛰️',
        text: 'Drumul spre Gârda de Sus șerpuia printre dealuri împădurite, unde casele cu acoperișuri ascuțite de paie stăteau răzlețe, ca niște oi rătăcite. Linu coborî din microbuz în fața unei pensiuni, cu rucsacul în spinare și cu inima bătându-i de nerăbdare. Acolo îl aștepta Ana, o cercetătoare din Cluj care studia de ani buni gheața din Peștera Scărișoara. Lângă ea, un moț bătrân, cu pălărie mică și cojoc, își sprijinea bărbia în toiag. «Ăsta-i bade Ionuț, cel mai bun ghid din munții ăștia», zise Ana, iar bătrânul dădu din cap fără grabă.',
        translation:
          'A estrada para Gârda de Sus serpenteava entre colinas cobertas de mata, onde as casas de telhados pontudos de palha ficavam espalhadas, como ovelhas desgarradas. Linu desceu da van diante de uma pousada, com a mochila nas costas e o coração batendo de impaciência. Ali o esperava Ana, uma pesquisadora de Cluj que estudava havia anos o gelo da Caverna de Scărișoara. Ao lado dela, um velho «moț», de chapéu pequeno e casaco de pele de carneiro, apoiava o queixo no cajado. «Este é o bade Ionuț, o melhor guia destas montanhas», disse Ana, e o velho assentiu sem pressa.',
        choices: [
          {
            text: 'Pornește cu ei spre peșteră chiar în după-amiaza aceea.',
            translation: 'Parte com eles para a caverna naquela mesma tarde.',
            next: 'pregatire',
          },
          { text: 'Rămâne la pensiune să se odihnească după drum.', translation: 'Fica na pousada para descansar da viagem.', next: 'final_pensiune' },
        ],
      },
      final_pensiune: {
        emoji: '🛏️',
        text: 'Linu hotărî că muntele putea să aștepte până a doua zi. Dormi ca un urs, iar dimineața află că Ana și bade Ionuț plecaseră în zori, fiindcă prognoza anunța ploi pentru toată săptămâna. Gazda îi puse în față pită caldă și îi zise, pe ardelenește: «No, nu-i bai, dragu’ meu, muntele nu fuge nicăieri.» Linu înțelese că „nu-i bai” înseamnă „nu-i nicio problemă”, dar tot i se strânse inima. Ghețarul de sub pământ rămase, deocamdată, doar o poză dintr-o broșură.',
        translation:
          'Linu decidiu que a montanha podia esperar até o dia seguinte. Dormiu como um urso, e de manhã soube que Ana e o bade Ionuț tinham partido ao amanhecer, porque a previsão anunciava chuva para a semana toda. A dona da pousada pôs diante dele «pită» (pão) quentinha e disse, à moda da Transilvânia: «Bem, não tem problema, meu querido, a montanha não foge para lugar nenhum.» Linu entendeu que «nu-i bai» significa «não tem problema», mas mesmo assim seu coração se apertou. A geleira subterrânea ficou, por enquanto, apenas uma foto num folheto.',
        ending: {
          tone: 'neutro',
          title: 'A montanha esperou',
          message: 'O Linu descansou demais e perdeu a expedição. Volte e parta com a Ana e o bade Ionuț!',
        },
      },
      pregatire: {
        emoji: '🧥',
        text: 'Înainte de plecare, bade Ionuț îl cercetă pe Linu din creștet până-n labe și clătină din cap. «No, musai să te îmbraci gros, că-n peșteră îi iarnă și-n toiul verii», zise el. Ana îi explică râzând că „no” e un fel de „ei bine” ardelenesc, iar „musai”, venit din maghiară, înseamnă „neapărat”. Bătrânul mai puse în desagă o pită mare, slănină și ceapă, căci, zise el, «pe munte, burta goală nu urcă». Linu privi haina groasă de pe scaun, apoi penele lui, care îl apăraseră cândva de gerurile Antarcticii.',
        translation:
          'Antes da partida, o bade Ionuț examinou o Linu da cabeça aos pés e balançou a cabeça. «Bem, é obrigatório você se agasalhar, que na caverna é inverno até em pleno verão», disse ele. Ana explicou, rindo, que «no» é uma espécie de «ei bine» (bem, então) da Transilvânia, e que «musai», vindo do húngaro, significa «obrigatoriamente». O velho ainda pôs no alforje um pão grande, toucinho e cebola, pois, disse ele, «na montanha, barriga vazia não sobe». Linu olhou o casaco grosso na cadeira, depois suas penas, que um dia o tinham protegido das geadas da Antártida.',
        choices: [
          { text: 'Își ia haina groasă și pornește.', translation: 'Pega o casaco grosso e parte.', next: 'urcare' },
          {
            text: 'Lasă haina la pensiune, căci bătrânul zise că nu e nevoie de ea.',
            translation: 'Deixa o casaco na pousada, pois o velho disse que não é necessário.',
            wrong:
              '«Musai» quer dizer «neapărat» — obrigatoriamente. O bade Ionuț disse que é PRECISO se agasalhar, porque na caverna «îi iarnă și-n toiul verii»: é inverno até em pleno verão.',
          },
        ],
      },
      urcare: {
        emoji: '🌲',
        text: 'Poteca urca printre brazi atât de înalți, încât cerul se vedea doar ca o panglică albastră. Bade Ionuț mergea încet, dar fără oprire, iar Linu, deși pornise în frunte, rămase curând în urmă, gâfâind. «Apa trece, pietrele rămân», zise bătrânul la un moment dat, arătând spre bolovanii dintr-un pârâu, neclintiți sub apa care curgea peste ei. Ana îi tâlcui vorba: vremurile grele trec, iar ce e temeinic rămâne. La o cotitură, printre brazi se zări o stână, de unde venea miros de fum și de caș proaspăt.',
        translation:
          'A trilha subia entre abetos tão altos que o céu se via apenas como uma fita azul. O bade Ionuț andava devagar, mas sem parar, e Linu, embora tivesse saído na frente, logo ficou para trás, ofegante. «A água passa, as pedras ficam», disse o velho a certa altura, apontando para as pedras de um riacho, imóveis sob a água que corria por cima delas. Ana lhe explicou o ditado: os tempos difíceis passam, e o que é sólido permanece. Numa curva, entre os abetos, avistou-se um curral de pastores, de onde vinha cheiro de fumaça e de queijo fresco.',
        choices: [
          { text: 'Se opresc la stână.', translation: 'Param no curral dos pastores.', next: 'stana' },
          { text: 'Merg mai departe, fără popas.', translation: 'Seguem em frente, sem parada.', next: 'intrare' },
        ],
      },
      stana: {
        emoji: '🧀',
        text: 'Ciobanul, un om tânăr cu fața arsă de soare, îi primi cu un «Bine ați venit!» și cu o strachină de caș. Când văzu pinguinul, rămase o clipă cu gura căscată, apoi zise: «Io am văzut multe pe muntele ăsta, dar d-ăsta încă nu!» Linu gustă cașul și bău lapte dintr-o cană de lemn, iar ciobanul îi arătă câinii care păzeau turma de urși și de lupi. Bade Ionuț îi spuse că moții au trăit veacuri de-a rândul din lemn, din vite și din ce le dădea muntele. Hodiniți și sătui, porniră mai departe spre gura peșterii.',
        translation:
          'O pastor, um homem jovem de rosto queimado de sol, recebeu-os com um «Sejam bem-vindos!» e com uma tigela de queijo fresco. Quando viu o pinguim, ficou um instante boquiaberto, depois disse: «Eu já vi muita coisa nesta montanha, mas uma coisa destas ainda não!» Linu provou o queijo e bebeu leite numa caneca de madeira, e o pastor lhe mostrou os cães que guardavam o rebanho dos ursos e dos lobos. O bade Ionuț contou que os moți viveram séculos a fio da madeira, do gado e do que a montanha lhes dava. Descansados («hodiniți» = «odihniți») e saciados, seguiram para a boca da caverna.',
        choices: [{ text: 'Merge spre peșteră.', translation: 'Vai em direção à caverna.', next: 'intrare' }],
      },
      intrare: {
        emoji: '🕳️',
        text: 'Gura peșterii se deschise deodată în fața lor ca un puț uriaș, cu pereții îmbrăcați în mușchi și ferigi. O scară lungă de metal cobora în adânc, iar de jos urca un aer rece, cu miros de piatră udă. Când ajunseră la fund, Linu văzu un bloc de gheață cât o biserică, cu straturi subțiri așezate unul peste altul, ca inelele unui trunchi de copac. Ana puse mâna pe gheață cu grijă, ca pe spatele unui animal bătrân. «Fiecare strat e o iarnă, iar cele de jos se depuseră acum câteva mii de ani», zise ea încet.',
        translation:
          'A boca da caverna se abriu de repente diante deles como um poço gigante, com as paredes cobertas de musgo e samambaias. Uma longa escada de metal descia para as profundezas, e de baixo subia um ar frio, com cheiro de pedra molhada. Quando chegaram ao fundo, Linu viu um bloco de gelo do tamanho de uma igreja, com camadas finas dispostas uma sobre a outra, como os anéis de um tronco de árvore. Ana pôs a mão no gelo com cuidado, como nas costas de um animal velho. «Cada camada é um inverno, e as de baixo se depositaram há alguns milhares de anos», disse ela baixinho.',
        choices: [
          { text: 'O ajută pe Ana să măsoare straturile vechi.', translation: 'Ajuda a Ana a medir as camadas antigas.', next: 'proba' },
          {
            text: 'Se miră că toată gheața asta s-a format iarna trecută.',
            translation: 'Espanta-se de que todo esse gelo tenha se formado no inverno passado.',
            wrong:
              'Ana disse que cada camada é UM inverno e que as de baixo «se depuseră acum câteva mii de ani» — se depositaram há alguns milhares de anos. «Se depuseră» é o perfeito simples literário de «a se depune».',
          },
        ],
      },
      proba: {
        emoji: '🔦',
        text: 'Ana îi dădu lui Linu o lanternă și un carnețel, iar ea începu să măsoare cu grijă grosimea straturilor. Între ele se vedeau dungi întunecate: praf, cenușă, poate polen din veri de mult uitate. «Gheața asta ține minte tot: iernile grele, verile fierbinți, pădurile de pe munte», îi explică ea. Apoi adăugă, mai încet, că în ultimele decenii ghețarul se subțiază și că fiecare măsurătoare contează. După două ceasuri, frigul începu să-i intre lui Linu până în oase, deși era pinguin.',
        translation:
          'Ana deu ao Linu uma lanterna e um caderninho, e começou a medir com cuidado a espessura das camadas. Entre elas se viam faixas escuras: poeira, cinza, talvez pólen de verões há muito esquecidos. «Este gelo guarda na memória tudo: os invernos duros, os verões quentes, as florestas da montanha», explicou ela. Depois acrescentou, mais baixo, que nas últimas décadas a geleira está afinando e que cada medição conta. Depois de duas horas, o frio começou a entrar nos ossos do Linu, apesar de ele ser pinguim.',
        choices: [
          { text: 'Rămâne lângă Ana până la ultima măsurătoare.', translation: 'Fica ao lado da Ana até a última medição.', next: 'final_bom' },
          { text: 'Urcă singur la suprafață, să se încălzească.', translation: 'Sobe sozinho à superfície, para se esquentar.', next: 'final_frig' },
        ],
      },
      final_frig: {
        emoji: '☀️',
        text: 'Linu urcă scara treaptă cu treaptă, până când soarele îi atinse ciocul ca o palmă caldă. Sus, bade Ionuț stătea pe o piatră și mânca pită cu slănină, liniștit ca muntele. «No, ți-o fost frig, ai?», întrebă bătrânul, zâmbind pe sub mustață. Ana ieși abia după un ceas, cu carnețelul plin, dar cu o măsurătoare mai puțin decât plănuise, căci nu avusese cine să-i țină lanterna. Linu înțelese că răbdarea, ca și gheața, se strânge strat cu strat.',
        translation:
          'Linu subiu a escada degrau por degrau, até o sol tocar seu bico como uma palma quente. Lá em cima, o bade Ionuț estava sentado numa pedra comendo pão com toucinho, tranquilo como a montanha. «Então, sentiu frio, hein?», perguntou o velho, sorrindo por baixo do bigode («ți-o fost» = «ți-a fost», no falar regional). Ana saiu só uma hora depois, com o caderninho cheio, mas com uma medição a menos do que planejara, pois não tivera quem segurasse a lanterna. Linu entendeu que a paciência, como o gelo, se acumula camada por camada.',
        ending: {
          tone: 'neutro',
          title: 'Frio demais',
          message: 'O Linu desistiu antes do fim e a Ana ficou sem uma medição. Tente de novo e fique até a última camada!',
        },
      },
      final_bom: {
        emoji: '🏔️',
        text: 'Linu rămase, cu lanterna ținută drept, deși aripile îi tremurau de frig. Ultimul strat măsurat avea, după socotelile Anei, câteva mii de ani, iar ea îl notă cu o mână care nu tremura deloc. Când ieșiră la lumină, bade Ionuț le întinse pită și slănină și zise: «Apa trece, pietrele rămân, iar omul harnic ajunge în cărți.» În seara aceea, în raportul Anei, la rubrica asistenți, apăru un nume nou: Linu, pinguin. Iar pinguinul adormi fericit, gândindu-se că și gheața din Antarctica, de acasă, ține minte totul.',
        translation:
          'Linu ficou, com a lanterna bem firme, embora as asas tremessem de frio. A última camada medida tinha, pelas contas da Ana, alguns milhares de anos, e ela a anotou com uma mão que não tremia nem um pouco. Quando saíram para a luz, o bade Ionuț lhes estendeu pão e toucinho e disse: «A água passa, as pedras ficam, e o homem trabalhador vai parar nos livros.» Naquela noite, no relatório da Ana, na seção de assistentes, apareceu um nome novo: Linu, pinguim. E o pinguim adormeceu feliz, pensando que o gelo da Antártida, lá de casa, também guarda tudo na memória.',
        ending: {
          tone: 'bom',
          title: 'Assistente de glaciologia!',
          message: 'O Linu entendeu o falar da Transilvânia, desceu à geleira de Scărișoara e ajudou a medir gelo de milhares de anos.',
        },
      },
    },
  },
];
