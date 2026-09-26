import type { StorySeed } from '../types';

/**
 * Histórias interativas em romeno. Cada nó tem texto e tradução; as escolhas ficam
 * em romeno e testam a compreensão. Escolhas com `wrong` mostram uma dica e não avançam.
 */
export const STORIES_RO: StorySeed[] = [
  {
    id: 'ro-h1',
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
];
