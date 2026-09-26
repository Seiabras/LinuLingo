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
          { text: 'O pizza, vă rog.', translation: 'Uma pizza, por favor.', wrong: 'A padeira ri: «Nu avem pizza, aici este o brutărie!» (Não temos pizza, aqui é uma padaria!) Olhe de novo o que há na prateleira.' },
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
    cultural_context: 'A Gara de Nord é a principal estação de Bucareste. Brașov, nos Cárpatos, é famosa pela Igreja Negra, que ganhou a cor escura num incêndio em 1689.',
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
          { text: 'Vreau un covrig.', translation: 'Quero uma rosca.', wrong: 'A atendente perguntou «Unde?» (Onde / para onde?). Ela vende passagens, não comida!' },
        ],
      },
      automat: {
        emoji: '🖥️',
        text: 'Automatul are meniu în română. Linu scrie «Brașov». Pe ecran apare: «Dus sau dus-întors?»',
        translation: 'A máquina tem menu em romeno. Linu digita «Brașov». Na tela aparece: «Só ida ou ida e volta?»',
        choices: [
          { text: 'Dus-întors.', translation: 'Ida e volta.', next: 'pret' },
          { text: 'Anulare.', translation: 'Cancelar.', wrong: '«Anulare» quer dizer cancelar, e a compra seria perdida! «Dus» = ida, «dus-întors» = ida e volta.' },
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
          { text: 'Da, stai aici!', translation: 'Sim, senta aí!', wrong: 'Com uma senhora desconhecida, o formal fica melhor: «Da, poftiți!» (poftiți = forma educada).' },
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
    cultural_context: 'Na Romênia se levam flores em número ímpar (par é para funerais), e recusar comida na casa da avó é quase uma ofensa. «Sărut mâna» é o cumprimento tradicional e respeitoso para os mais velhos.',
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
          { text: 'Bună seara, bunico!', translation: 'Boa noite, vovó!', wrong: 'Releia o começo: «Este duminică» e é hora do almoço, não de noite. Com os mais velhos, o tradicional é «Sărut mâna!».' },
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
          { text: 'Nu.', translation: 'Não.', wrong: 'Ai! «Nu» aqui quer dizer «não gosto da sua comida». Para dizer «gosto sim» depois de uma pergunta negativa, o romeno usa «Ba da!».' },
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
        ending: { tone: 'bom', title: 'Conquistou a bunica!', message: 'Flores em número ímpar, «Sărut mâna» e prato limpo: o Linu entendeu a hospitalidade romena.' },
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
    cultural_context: 'Bram Stoker nunca esteve na Romênia. Vlad III (Țepeș) governou a Valáquia no séc. XV e lutou contra os otomanos. O Castelo de Bran foi depois residência da rainha Maria.',
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
        translation: 'Linu visita o Castelo de Bran com um grupo de turistas. O guia, o senhor Radu, começa: «Muitos acham que aqui morou o Drácula. Mas a história verdadeira é outra.»',
        choices: [
          { text: 'Ce s-a întâmplat de fapt?', translation: 'O que aconteceu na verdade?', next: 'istorie' },
          { text: 'Unde este sicriul lui Dracula?', translation: 'Onde está o caixão do Drácula?', next: 'sicriu' },
        ],
      },
      sicriu: {
        emoji: '⚰️',
        text: 'Ghidul râde: «Nu există niciun sicriu! Dracula este un personaj din romanul lui Bram Stoker, un scriitor irlandez care nu a fost niciodată în România.»',
        translation: 'O guia ri: «Não existe caixão nenhum! Drácula é um personagem do romance de Bram Stoker, um escritor irlandês que nunca esteve na Romênia.»',
        choices: [{ text: 'Și atunci, care este povestea adevărată?', translation: 'E então, qual é a história verdadeira?', next: 'istorie' }],
      },
      istorie: {
        emoji: '⚔️',
        text: '«Vlad Țepeș a fost domnitor al Țării Românești în secolul al XV-lea. A luptat împotriva Imperiului Otoman. Legătura lui cu acest castel este foarte slabă.»',
        translation: '«Vlad Țepeș foi príncipe da Valáquia no século XV. Lutou contra o Império Otomano. A ligação dele com este castelo é muito fraca.»',
        choices: [
          { text: 'Deci Vlad Țepeș era un vampir?', translation: 'Então Vlad Țepeș era um vampiro?', wrong: 'Não! O guia disse que Vlad foi um governante real que lutou contra os otomanos. O vampiro é invenção do romance.' },
          { text: 'Deci Dracula este o legendă inspirată de Vlad.', translation: 'Então Drácula é uma lenda inspirada em Vlad.', next: 'regina' },
        ],
      },
      regina: {
        emoji: '👑',
        text: '«Exact! Mai târziu, castelul a fost reședința reginei Maria, care l-a iubit foarte mult.» Deodată, se aude un zgomot ciudat din turn…',
        translation: '«Exato! Mais tarde, o castelo foi residência da rainha Maria, que o amava muito.» De repente, ouve-se um barulho estranho vindo da torre…',
        choices: [
          { text: 'Urcă în turn să vadă ce este.', translation: 'Sobe na torre para ver o que é.', next: 'turn' },
          { text: 'Rămâne cu grupul.', translation: 'Fica com o grupo.', next: 'grup' },
          { text: 'Iese din castel să mănânce.', translation: 'Sai do castelo para comer.', wrong: 'O barulho veio da torre («turn»). Nada de fugir para comer agora, Linu!' },
        ],
      },
      turn: {
        emoji: '🐈‍⬛',
        text: 'În turn, Linu găsește… o pisică neagră care se joacă cu o cheie veche! Ghidul vine după el: «Aha, ai găsit cheia pierdută a muzeului!»',
        translation: 'Na torre, Linu encontra… uma gata preta brincando com uma chave antiga! O guia vem atrás dele: «Ahá, você achou a chave perdida do museu!»',
        ending: { tone: 'bom', title: 'Herói do castelo!', message: 'O Linu desvendou o mistério da torre e aprendeu a história real do Drácula. 🗝️' },
      },
      grup: {
        emoji: '🔍',
        text: 'Grupul continuă turul. La final, ghidul spune: «Cineva a pierdut azi o cheie veche… Dacă o găsiți, spuneți-mi!»',
        translation: 'O grupo continua o passeio. No final, o guia diz: «Alguém perdeu hoje uma chave antiga… Se a encontrarem, me avisem!»',
        ending: { tone: 'neutro', title: 'Mistério sem solução', message: 'O Linu aprendeu a história verdadeira, mas o barulho na torre continua um mistério…' },
      },
    },
  },
];
