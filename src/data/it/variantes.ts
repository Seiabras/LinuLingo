import type { LanguageVariant } from '../types';
import { toIpaIt } from '@/services/ipa-it';

/** Variantes do italiano: o italiano padrão da Itália (o do app) e o italiano da Suíça. */
export const VARIANTS_IT: LanguageVariant[] = [
  {
    code: 'it-IT',
    country: 'ITA',
    kind: 'dialeto',
    speechLocale: 'it-IT',
    ipa: (t) => toIpaIt(t),
    name: 'Italiano padrão',
    flag: '🇮🇹',
    summary: 'O padrão do app: o italiano da escola, dos jornais e da RAI, nascido do florentino literário e entendido de Bolzano a Palermo, com “Lei” no tratamento formal.',
    card: {
      id: 'it-it-c1',
      title: 'Por que o italiano padrão?',
      emoji: '🇮🇹',
      history:
        'O italiano padrão nasceu do florentino escrito do século XIV, a língua de Dante, Petrarca e Boccaccio. Quando a Itália se unificou, em 1861, só uma pequena minoria da população usava o italiano no dia a dia: quase todos falavam o dialeto da sua região. A língua comum se espalhou com a escola obrigatória, o serviço militar, as migrações internas e, a partir de 1954, a televisão da RAI. Os dialetos continuam vivos, mas hoje praticamente todos os italianos falam o italiano padrão.',
      culture_tip:
        'Cada região tem o seu sotaque, e os italianos reconhecem de onde você é pela primeira frase. O app usa o italiano padrão, sem marcas regionais: é o que você ouve no noticiário e aprende em qualquer escola. Com desconhecidos, em lojas e repartições, use “Lei” e “buongiorno” ou “buonasera” (já a partir do meio da tarde); o “ciao” fica para amigos, família e gente jovem.',
      grammar_why:
        'Três marcas do padrão: (1) o tratamento formal é “Lei”, com o verbo na 3ª pessoa do singular, mesmo falando com um homem: “Lei è brasiliano?”; nas cartas formais, escreve-se “Lei” com maiúscula; (2) “voi” é o plural de “tu” e também serve no formal: “Voi di dove siete?”; o antigo “Loro” formal quase só se ouve em hotéis e restaurantes chiques; (3) para o passado, a fala usa o passato prossimo: “Ieri sono andato al mare”. O passato remoto (“andai”) é o tempo da literatura e da história; na fala, sobrevive sobretudo no Sul.',
      grammar_examples: [
        ['Buongiorno, signora. Lei è di Milano?', 'Bom dia, senhora. A senhora é de Milão?'],
        ['Ciao Marco, tu sei di Roma?', 'Oi, Marco, você é de Roma?'],
        ['Ragazzi, voi venite stasera?', 'Pessoal, vocês vêm hoje à noite?'],
        ['Ieri sono andato al mare con mia sorella.', 'Ontem fui à praia com a minha irmã.'],
        ['Dante nacque a Firenze nel 1265.', 'Dante nasceu em Florença em 1265 (passato remoto, o tempo da história).'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'Consoantes duplas se pronunciam longas, segurando o som: “caro” (caro) × “carro” (carroça), “nono” (nono) × “nonno” (avô), “pala” (pá) × “palla” (bola). Errar a dupla muda a palavra.',
      '“E” e “o” podem ser abertas ou fechadas, como no português: “pèsca” (pêssego) × “pésca” (pescaria), “bòtte” (pancadas) × “bótte” (barril). A escrita não marca a diferença, e a distribuição muda de região para região.',
      'O “s” entre vogais: no Norte soa [z], como o nosso “s” de “casa”; na Toscana e no Sul, muitas vezes soa [s]. As duas pronúncias são corretas, e o app aceita as duas.',
      'Raddoppiamento sintattico: no Centro e no Sul, depois de certas palavras curtas (a, da, e, è, tre, più…), a consoante da palavra seguinte dobra: “a casa” soa “a ccasa”, “tre case” soa “tre ccase”. No Norte isso não acontece.',
      'O “r” é sempre vibrante, com a ponta da língua, como o “r” de “caro” (nunca o “r” de “rato” do carioca). E as vogais finais nunca se reduzem: “latte” termina em “e” bem clara, não em “i”.',
    ],
    vocab: [
      ['anguria', 'cocomero', 'melancia', 'no Centro (Toscana, Roma); no Sul também se diz “melone d’acqua”'],
      ['papà', 'babbo', 'papai', 'na Toscana; “Babbo Natale” (Papai Noel) se diz em toda a Itália'],
      ['bambino', 'bimbo', 'criança, menino', 'sobretudo na Toscana; entendido em toda a Itália'],
      ['formaggio', 'cacio', 'queijo', 'no Centro e no Sul: “cacio e pepe”, “caciocavallo”'],
      ['adesso, ora', 'mo’', 'agora', 'coloquial no Centro-Sul (Roma, Nápoles)'],
      ['ragazzo', 'guaglione (Napoli), toso (Veneto)', 'rapaz, moleque', 'palavras que vêm dos dialetos'],
      ['marinare la scuola', 'bigiare (Lombardia), fare sega (Roma), fare filone (Napoli), fare forca (Toscana)', 'matar aula', 'cada região tem o seu jeito de dizer'],
      ['rosetta', 'michetta', 'pãozinho redondo com gomos', 'em Milão; em Roma e no Centro, “rosetta”'],
      ['arancino', 'arancina', 'bolinho de arroz frito', 'em Palermo, “arancina”; em Catânia, “arancino”'],
      ['figo', 'ganzo', 'legal, massa', 'gíria toscana; “figo” é a gíria de toda a Itália'],
      ['gruccia', 'stampella, ometto', 'cabide', '“stampella” no Centro-Sul, “ometto” no Norte'],
      ['avere (fame, sonno)', 'tenere (fame, sonno)', 'estar com (fome, sono)', 'no Sul se ouve “tengo fame”; na escrita, use “ho fame”'],
    ],
  },
  {
    code: 'it-CH',
    country: 'CHE',
    kind: 'dialeto',
    speechLocale: 'it-CH',
    ipa: (t) => toIpaIt(t),
    name: 'Italiano da Suíça',
    flag: '🇨🇭',
    summary:
      'O italiano do Ticino e dos vales do sul dos Grisões: mesma gramática do padrão, com sotaque do norte e palavras próprias, os “helvetismos”, como “natel”, “azione” e “licenza di condurre”.',
    card: {
      id: 'it-ch-c1',
      title: 'Natel, azione e franchi',
      emoji: '🇨🇭',
      history:
        'O italiano é uma das quatro línguas nacionais da Suíça, ao lado do alemão, do francês e do romanche. É a língua do cantão do Ticino e de quatro vales do sul dos Grisões (Mesolcina, Calanca, Bregaglia e Valposchiavo). Cerca de 8% dos moradores da Suíça têm o italiano como língua principal. As leis federais são publicadas também em italiano, e por isso a língua ganhou um vocabulário administrativo próprio.',
      culture_tip:
        'No Ticino se paga em francos suíços, os trens e os ônibus postais amarelos saem na hora exata e várias vezes por ano há votações populares sobre leis e projetos. Para comer como um ticinese, procure um “grotto”: um restaurante rústico com mesas de granito à sombra das castanheiras. O dialeto ticinese, parente do lombardo, ainda se ouve nas famílias e nos vilarejos, mas com quem vem de fora todos falam italiano.',
      grammar_why:
        'A gramática é a mesma do italiano padrão: “Lei” no formal, “tu” entre amigos, passato prossimo na fala. A diferença está no vocabulário. Como a Suíça convive com o alemão e o francês, muitas palavras vêm dessas línguas ou da linguagem oficial da Confederação: “azione” (promoção, do alemão “Aktion”), “natel” (celular), “licenza di condurre” (carteira de motorista), “riservazione” (reserva). Um italiano da Itália entende quase tudo, mas estranha algumas. Reconheça essas palavras; no app seguimos o padrão da Itália.',
      grammar_examples: [
        ['Ti mando un messaggio sul natel.', 'Te mando uma mensagem no celular. (Itália: sul cellulare)'],
        ['Oggi il caffè è in azione al supermercato.', 'Hoje o café está em promoção no supermercado. (Itália: in offerta)'],
        ['Ho finalmente la licenza di condurre!', 'Finalmente tirei a carteira de motorista! (Itália: la patente)'],
        ['Prendiamo l’autopostale per salire in valle.', 'Vamos pegar o ônibus postal para subir o vale.'],
        ['Ho fatto una riservazione per le otto.', 'Fiz uma reserva para as oito. (Itália: una prenotazione)'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'O sotaque é do norte, parecido com o da Lombardia: o “s” entre vogais soa sempre [z], como no português: “casa” soa “caza”, “rosa” soa “roza”.',
      'Não há raddoppiamento sintattico: “a casa” soa como se escreve, sem dobrar o “c”. As consoantes duplas dentro da palavra existem, mas soam um pouco mais curtas que no Centro e no Sul da Itália.',
      'Como no norte da Itália, muitas vezes o “e” fechado do padrão soa aberto no fim da palavra: “perché” soa quase “perchè”.',
      'A melodia lembra a de Milão e de Como, com um toque dos dialetos locais. Palavras vindas do alemão e do francês mantêm a tônica de origem: “natel” é na-TEL.',
    ],
    vocab: [
      ['cellulare', 'natel', 'celular', 'na-TEL; nasceu como nome do serviço de telefonia móvel suíço'],
      ['offerta', 'azione', 'promoção, oferta', 'do alemão “Aktion”: “il caffè è in azione”'],
      ['patente (di guida)', 'licenza di condurre', 'carteira de motorista'],
      ['autobus (di linea)', 'autopostale', 'ônibus postal', 'os ônibus amarelos que chegam aos vilarejos de montanha'],
      ['raccoglitore', 'classificatore', 'fichário, pasta de argolas'],
      ['cassetta delle lettere', 'bucalettere', 'caixa de correio'],
      ['prenotazione', 'riservazione', 'reserva', 'do francês “réservation”'],
      ['parcheggio multipiano', 'autosilo', 'edifício-garagem'],
      ['parcheggio', 'posteggio', 'estacionamento, vaga', 'também se ouve em partes da Itália'],
      ['CAP (codice di avviamento postale)', 'NPA (numero postale d’avviamento)', 'CEP'],
      ['stipendio', 'salario', 'salário', 'na Itália, “salario” soa técnico; na Suíça é a palavra do dia a dia'],
      ['farmaco, medicina', 'medicamento', 'remédio', 'na Itália, “medicamento” soa antiquado'],
      ['voto (scolastico)', 'nota', 'nota (da escola)', 'no Ticino as notas vão de 1 a 6, e 6 é a melhor'],
      ['recinzione (metallica)', 'ramina', 'cerca de arame, alambrado'],
      ['assicurazione sanitaria', 'cassa malati', 'plano de saúde', 'obrigatório para todos os moradores da Suíça'],
      ['registrarsi (in comune)', 'annunciarsi', 'registrar-se (na prefeitura)', 'quem se muda deve “annunciarsi” no comune'],
      ['giunta comunale', 'Municipio', 'governo municipal', 'no Ticino o Municipio é o órgão de governo; na Itália, é o prédio da prefeitura'],
      ['consiglio regionale', 'Gran Consiglio', 'parlamento do cantão'],
      ['osteria di campagna', 'grotto', 'restaurante rústico', 'mesas de granito ao ar livre, polenta e boccalino'],
      ['pedaggio autostradale', 'vignetta', 'pedágio', 'na Suíça não há cabines: compra-se uma vinheta anual, adesiva ou digital'],
      ['euro', 'franco', 'moeda', 'o franco suíço se divide em 100 centesimi'],
    ],
    stories: [
      {
        id: 'it-ch-h1',
        variant: 'it-CH',
        level: 'A2.1',
        cefr: 'A2',
        title: 'Linu a Lugano',
        emoji: '🦢',
        summary: 'No primeiro dia em Lugano, Linu descobre o que é uma “azione” no supermercado e decide onde fazer um piquenique com a amiga Chiara.',
        cultural_context:
          'Lugano fica às margens do lago de Lugano, também chamado Ceresio, e a praça principal da cidade, a piazza della Riforma, dá para o lago. Do bairro de Cassarate, um funicular sobe até o Monte Brè, com vista para o lago e as montanhas.',
        start: 'start',
        glossary: [
          ['è arrivato', 'chegou (passato prossimo com essere)'],
          ['hanno comprato', 'compraram'],
          ['hanno speso', 'gastaram'],
          ['il natel', 'o celular (Suíça)'],
          ['in azione', 'em promoção (Suíça)'],
          ['la funicolare', 'o funicular'],
          ['in riva al lago', 'à beira do lago'],
          ['il cigno', 'o cisne'],
        ],
        nodes: {
          start: {
            emoji: '🚆',
            text: 'Linu è arrivato a Lugano in treno. Sul natel trova un messaggio della sua amica Chiara: “Ciao Linu! Sono in piazza della Riforma, vicino al lago. Hai già mangiato?”',
            translation: 'Linu chegou a Lugano de trem. No celular, encontra uma mensagem da sua amiga Chiara: “Oi, Linu! Estou na piazza della Riforma, perto do lago. Você já comeu?”',
            choices: [
              { text: '“Non ho ancora mangiato. Arrivo subito!”', translation: '“Ainda não comi. Já estou chegando!”', next: 'piazza' },
              {
                text: 'Linu aspetta Chiara alla stazione.',
                translation: 'Linu espera a Chiara na estação.',
                wrong: 'A Chiara escreveu que está na praça: “Sono in piazza della Riforma, vicino al lago”. É lá que o Linu deve ir encontrá-la!',
              },
            ],
          },
          piazza: {
            emoji: '🏛️',
            text: 'In piazza Chiara lo abbraccia: “Neanch’io ho mangiato. Andiamo al supermercato: oggi il formaggio è in azione!” In Svizzera “azione” vuol dire offerta: il formaggio costa meno.',
            translation: 'Na praça, a Chiara o abraça: “Eu também não comi. Vamos ao supermercado: hoje o queijo está em promoção!” Na Suíça, “azione” quer dizer oferta: o queijo está mais barato.',
            choices: [{ text: 'Vanno insieme al supermercato.', translation: 'Vão juntos ao supermercado.', next: 'spesa' }],
          },
          spesa: {
            emoji: '🧀',
            text: 'Al supermercato hanno comprato pane, formaggio e uva. Hanno speso solo dodici franchi. Chiara dice: “Facciamo un picnic sul Monte Brè? Si sale con la funicolare. Oppure restiamo in riva al lago.”',
            translation: 'No supermercado, compraram pão, queijo e uva. Gastaram só doze francos. A Chiara diz: “Vamos fazer um piquenique no Monte Brè? Sobe-se de funicular. Ou então ficamos à beira do lago.”',
            choices: [
              { text: 'Prendono la funicolare.', translation: 'Pegam o funicular.', next: 'bre' },
              { text: 'Restano in riva al lago.', translation: 'Ficam à beira do lago.', next: 'lago' },
              {
                text: 'Hanno speso tutti i soldi e tornano a casa.',
                translation: 'Gastaram todo o dinheiro e voltam para casa.',
                wrong: '“Hanno speso solo dodici franchi”: gastaram só doze francos. Graças à “azione”, a compra saiu barata!',
              },
            ],
          },
          bre: {
            emoji: '🚠',
            text: 'La funicolare parte da Cassarate e sale piano piano. Dalla cima Linu vede il lago, la città e le montagne. “È il panorama più bello del mio viaggio!”, dice.',
            translation: 'O funicular sai de Cassarate e sobe devagarinho. Do alto, Linu vê o lago, a cidade e as montanhas. “É a vista mais bonita da minha viagem!”, diz.',
            choices: [
              { text: 'Fanno il picnic sul prato.', translation: 'Fazem o piquenique no gramado.', next: 'final_bre' },
              { text: 'Linu vuole scendere a piedi.', translation: 'Linu quer descer a pé.', next: 'final_piedi' },
            ],
          },
          lago: {
            emoji: '🦢',
            text: 'Si siedono su una panchina in riva al lago. Un cigno si avvicina e guarda il pane di Linu con molto interesse.',
            translation: 'Sentam-se num banco à beira do lago. Um cisne se aproxima e olha o pão do Linu com muito interesse.',
            choices: [
              { text: 'Linu dà un po’ di pane al cigno.', translation: 'Linu dá um pouco de pão ao cisne.', next: 'final_cigni' },
              { text: 'Linu mette il pane nello zaino.', translation: 'Linu guarda o pão na mochila.', next: 'final_lago' },
            ],
          },
          final_bre: {
            emoji: '🧺',
            text: 'Mangiano pane e formaggio al sole. Chiara chiede: “Ti è piaciuta la mia città?” Linu risponde: “Moltissimo! Oggi ho visto il lago più bello della Svizzera.”',
            translation: 'Comem pão e queijo ao sol. A Chiara pergunta: “Você gostou da minha cidade?” Linu responde: “Demais! Hoje eu vi o lago mais bonito da Suíça.”',
            ending: {
              tone: 'bom',
              title: 'Piquenique nas alturas',
              message: 'Você acompanhou o dia no passato prossimo: “è arrivato”, “hanno comprato”, “hanno speso”. E aprendeu que, na Suíça, “azione” é promoção.',
            },
          },
          final_piedi: {
            emoji: '🥾',
            text: 'Scendono a piedi per un sentiero ripido. Dopo un’ora Linu ha le zampe stanchissime. “La prossima volta prendiamo la funicolare anche per scendere!”, dice ridendo.',
            translation: 'Descem a pé por uma trilha íngreme. Depois de uma hora, o Linu está com os pés cansadíssimos. “Da próxima vez, pegamos o funicular para descer também!”, diz rindo.',
            ending: {
              tone: 'neutro',
              title: 'Pés de pinguim',
              message: 'A vista valeu a pena, mas a descida foi longa. Pinguins nadam melhor do que caminham!',
            },
          },
          final_cigni: {
            emoji: '😅',
            text: 'Il cigno mangia il pane in un secondo. Poi arrivano altri dieci cigni! Linu e Chiara scappano con il formaggio e l’uva, ridendo come matti.',
            translation: 'O cisne come o pão num segundo. Depois chegam mais dez cisnes! Linu e Chiara fogem com o queijo e a uva, rindo feito loucos.',
            ending: {
              tone: 'neutro',
              title: 'Piquenique dos cisnes',
              message: 'Os cisnes do lago agradecem. Na Suíça, aliás, não se deve dar pão às aves: faz mal a elas.',
            },
          },
          final_lago: {
            emoji: '⛵',
            text: 'Il cigno se ne va. Linu e Chiara mangiano tranquilli e guardano i battelli sul lago. “Che bella giornata!”, dice Linu.',
            translation: 'O cisne vai embora. Linu e Chiara comem tranquilos e olham os barcos no lago. “Que dia lindo!”, diz Linu.',
            ending: {
              tone: 'bom',
              title: 'Tarde no lago',
              message: 'Um piquenique tranquilo à beira do Ceresio. Você entendeu o dia inteiro no passato prossimo!',
            },
          },
        },
      },
      {
        id: 'it-ch-h2',
        variant: 'it-CH',
        level: 'B1.1',
        cefr: 'B1',
        title: 'L’autopostale per la Verzasca',
        emoji: '🚌',
        summary: 'Linu e o amigo Matteo pegam o ônibus postal para a Val Verzasca, onde a água verde da ponte de Lavertezzo é um convite perigoso.',
        cultural_context:
          'A Val Verzasca, perto de Locarno, é famosa pela água verde e transparente e pelo Ponte dei Salti, em Lavertezzo, uma ponte de pedra com dois arcos. A água do rio é muito fria e as correntes enganam: todo verão as autoridades pedem prudência aos banhistas. Os ônibus amarelos do autopostale chegam aos vilarejos de montanha de toda a Suíça.',
        start: 'start',
        glossary: [
          ['glieli preparo', 'eu os preparo para o senhor'],
          ['li tenga', 'guarde-os (imperativo com Lei)'],
          ['non tuffatevi', 'não mergulhem (imperativo negativo com voi)'],
          ['fallo', 'faça isso (imperativo com tu + lo)'],
          ['dammene uno', 'me dá um (deles)'],
          ['ne vuoi uno?', 'você quer um (deles)?'],
          ['l’autopostale', 'o ônibus postal (Suíça)'],
          ['la riva', 'a margem, a beira'],
        ],
        nodes: {
          start: {
            emoji: '🏞️',
            text: 'Linu è a Locarno con il suo amico Matteo. Oggi vogliono andare in Val Verzasca con l’autopostale. Matteo gli dice: “Compra tu i biglietti, io prendo i panini. Ci vediamo alla fermata tra dieci minuti!”',
            translation: 'Linu está em Locarno com seu amigo Matteo. Hoje eles querem ir à Val Verzasca de ônibus postal. Matteo diz a ele: “Compra você as passagens, eu pego os sanduíches. A gente se vê no ponto daqui a dez minutos!”',
            choices: [
              { text: 'Linu va a comprare i biglietti.', translation: 'Linu vai comprar as passagens.', next: 'biglietti' },
              {
                text: 'Linu va a comprare i panini.',
                translation: 'Linu vai comprar os sanduíches.',
                wrong: '“Compra tu i biglietti, io prendo i panini”: o imperativo “compra” é para o Linu, e as passagens são tarefa dele. Os sanduíches ficam com o Matteo.',
              },
            ],
          },
          biglietti: {
            emoji: '🎫',
            text: 'Alla biglietteria, l’impiegata gli chiede: “Andata e ritorno fino a Sonogno? Glieli preparo subito.” Poi aggiunge: “Li tenga bene, perché il controllore passa spesso.” Linu mette i biglietti nello zaino e corre alla fermata.',
            translation: 'Na bilheteria, a funcionária pergunta: “Ida e volta até Sonogno? Já preparo para o senhor.” Depois acrescenta: “Guarde-as bem, porque o fiscal passa com frequência.” Linu põe as passagens na mochila e corre para o ponto.',
            choices: [{ text: 'Salgono sull’autopostale.', translation: 'Entram no ônibus postal.', next: 'autopostale' }],
          },
          autopostale: {
            emoji: '🚌',
            text: 'L’autopostale giallo sale lungo la valle, tra boschi e case di pietra. A Lavertezzo Matteo dice: “Scendiamo qui! Voglio farti vedere il Ponte dei Salti.” Poi ci ripensa: “Oppure restiamo sull’autopostale fino a Sonogno, alla fine della valle.”',
            translation: 'O ônibus postal amarelo sobe pelo vale, entre bosques e casas de pedra. Em Lavertezzo, Matteo diz: “Vamos descer aqui! Quero te mostrar o Ponte dei Salti.” Depois repensa: “Ou então ficamos no ônibus até Sonogno, no fim do vale.”',
            choices: [
              { text: 'Scendono a Lavertezzo.', translation: 'Descem em Lavertezzo.', next: 'ponte' },
              { text: 'Continuano fino a Sonogno.', translation: 'Continuam até Sonogno.', next: 'sonogno' },
            ],
          },
          ponte: {
            emoji: '🌉',
            text: 'Il Ponte dei Salti è un vecchio ponte di pietra con due archi, sopra un’acqua verde e trasparente. Linu è entusiasta: “Tuffiamoci!” Ma un cartello dice: “Attenzione: acqua fredda e correnti pericolose. Non tuffatevi dal ponte.” Matteo aggiunge: “Se vuoi fare il bagno, fallo dove l’acqua è calma, vicino alla riva.”',
            translation: 'O Ponte dei Salti é uma velha ponte de pedra com dois arcos, sobre uma água verde e transparente. Linu fica empolgado: “Vamos mergulhar!” Mas uma placa diz: “Atenção: água fria e correntes perigosas. Não mergulhem da ponte.” Matteo acrescenta: “Se quiser tomar banho, faça isso onde a água está calma, perto da margem.”',
            choices: [
              { text: 'Linu fa il bagno vicino alla riva.', translation: 'Linu toma banho perto da margem.', next: 'riva' },
              { text: 'Linu si tuffa dal ponte.', translation: 'Linu mergulha da ponte.', next: 'final_tuffo' },
              {
                text: 'Il cartello invita a tuffarsi dal ponte.',
                translation: 'A placa convida a mergulhar da ponte.',
                wrong: '“Non tuffatevi dal ponte” é um imperativo negativo com “voi”: a placa manda NÃO mergulhar. A água é fria e as correntes, perigosas.',
              },
            ],
          },
          riva: {
            emoji: '🐧',
            text: 'Linu entra nell’acqua e nuota felice: per un pinguino è perfetta! Matteo invece ci mette solo un piede e grida: “È gelata! Nuota tu, io ti guardo da qui.” Poi tira fuori i panini: “Ne vuoi uno?”',
            translation: 'Linu entra na água e nada feliz: para um pinguim, está perfeita! Já o Matteo põe só um pé e grita: “Está gelada! Nada você, eu te olho daqui.” Depois tira os sanduíches da mochila: “Quer um?”',
            choices: [{ text: '“Sì, dammene uno, grazie!”', translation: '“Sim, me dá um, obrigado!”', next: 'final_panini' }],
          },
          sonogno: {
            emoji: '🏘️',
            text: 'Sonogno è l’ultimo paese della valle: case di pietra, fiori alle finestre e un grande silenzio. Una signora gli consiglia: “Andate a vedere la cascata, è a venti minuti da qui. Ma non tornate tardi: l’ultimo autopostale non aspetta nessuno!”',
            translation: 'Sonogno é o último vilarejo do vale: casas de pedra, flores nas janelas e um grande silêncio. Uma senhora aconselha: “Vão ver a cachoeira, fica a vinte minutos daqui. Mas não voltem tarde: o último ônibus não espera ninguém!”',
            choices: [{ text: 'Vanno alla cascata.', translation: 'Vão até a cachoeira.', next: 'cascata' }],
          },
          cascata: {
            emoji: '💦',
            text: 'La cascata è alta e fa un rumore fortissimo. Linu fa tante foto e si dimentica dell’ora. All’improvviso Matteo guarda l’orologio: “Corri! L’autopostale parte fra cinque minuti!”',
            translation: 'A cachoeira é alta e faz um barulho fortíssimo. Linu tira um monte de fotos e esquece a hora. De repente, Matteo olha o relógio: “Corre! O ônibus sai daqui a cinco minutos!”',
            choices: [{ text: 'Corrono alla fermata.', translation: 'Correm para o ponto.', next: 'final_corsa' }],
          },
          final_tuffo: {
            emoji: '😰',
            text: 'Linu si tuffa dal ponte. L’acqua è gelida anche per un pinguino e la corrente lo porta lontano. Per fortuna riesce a salire su una roccia. Matteo è pallido: “Non farlo mai più!”',
            translation: 'Linu mergulha da ponte. A água está gelada até para um pinguim, e a correnteza o leva para longe. Por sorte, ele consegue subir numa pedra. Matteo está pálido: “Nunca mais faça isso!”',
            ending: {
              tone: 'neutro',
              title: 'Susto no rio',
              message: 'Linu saiu inteiro, mas a placa tinha razão: “non tuffatevi”. Na Verzasca, a água cristalina engana.',
            },
          },
          final_panini: {
            emoji: '🥪',
            text: 'Mangiano i panini seduti sulle rocce, al sole. Matteo dice: “Sabato prossimo torniamoci con Chiara!” Linu è d’accordo: la Verzasca è il suo nuovo posto preferito.',
            translation: 'Comem os sanduíches sentados nas pedras, ao sol. Matteo diz: “Sábado que vem, vamos voltar aqui com a Chiara!” Linu concorda: a Verzasca é o seu novo lugar preferido.',
            ending: {
              tone: 'bom',
              title: 'Banho seguro',
              message: 'Você entendeu os imperativos e os pronomes do caminho: “glieli preparo”, “non tuffatevi”, “fallo”, “dammene uno”.',
            },
          },
          final_corsa: {
            emoji: '🏃',
            text: 'Arrivano alla fermata proprio mentre l’autista chiude la porta. L’autista li vede, riapre e sorride: “Salite, salite!” Linu si siede e si addormenta subito.',
            translation: 'Chegam ao ponto bem na hora em que o motorista fecha a porta. O motorista os vê, abre de novo e sorri: “Subam, subam!” Linu se senta e dorme na hora.',
            ending: {
              tone: 'bom',
              title: 'No último minuto',
              message: 'Por um triz! “Salite” (subam, entrem): lembre que “salire” é subir, e não sair.',
            },
          },
        },
      },
      {
        id: 'it-ch-h3',
        variant: 'it-CH',
        level: 'B1.3',
        cefr: 'B1',
        title: 'Un sabato a Bellinzona',
        emoji: '🏰',
        summary: 'Em Bellinzona, Linu e a amiga Giulia passeiam entre o mercado e os castelos e tentam conseguir uma mesa num grotto num sábado à noite.',
        cultural_context:
          'Bellinzona, a capital do Ticino, tem três castelos medievais (Castelgrande, Montebello e Sasso Corbaro), Patrimônio Mundial da UNESCO desde 2000; eles controlavam as rotas para os passos alpinos. Todo sábado de manhã há mercado no centro histórico. Os “grotti” são restaurantes rústicos típicos do Ticino, com mesas de granito à sombra das castanheiras.',
        start: 'start',
        glossary: [
          ['penso che sia meglio', 'acho que é melhor'],
          ['prima che faccia caldo', 'antes que fique quente'],
          ['credo che sia', 'acho que é'],
          ['vuoi che saliamo?', 'quer que a gente suba?'],
          ['bisogna che facciamo', 'é preciso que façamos'],
          ['a meno che non preferisca', 'a não ser que o senhor prefira'],
          ['la riservazione', 'a reserva (Suíça)'],
          ['il grotto', 'restaurante rústico do Ticino'],
        ],
        nodes: {
          start: {
            emoji: '🏰',
            text: 'È sabato mattina e Linu è a Bellinzona, la capitale del Ticino, con la sua amica Giulia. In centro c’è il mercato e sulle colline si vedono i tre castelli. Giulia dice: “Penso che sia meglio visitare prima i castelli, prima che faccia troppo caldo. Ma se preferisci, cominciamo dal mercato.”',
            translation: 'É sábado de manhã e Linu está em Bellinzona, a capital do Ticino, com sua amiga Giulia. No centro tem mercado e nas colinas se veem os três castelos. Giulia diz: “Acho que é melhor visitar primeiro os castelos, antes que fique quente demais. Mas, se você preferir, começamos pelo mercado.”',
            choices: [
              { text: 'Salgono subito a Castelgrande.', translation: 'Sobem logo para o Castelgrande.', next: 'castello' },
              { text: 'Vanno prima al mercato.', translation: 'Vão primeiro ao mercado.', next: 'mercato' },
            ],
          },
          mercato: {
            emoji: '🧀',
            text: 'Al mercato ci sono formaggi d’alpe, castagne, pane e salumi. Un contadino offre a Linu un pezzo di formaggella: “Assaggi, prego! Credo che sia il formaggio più buono del Ticino.” Giulia gli sussurra: “Tutti i contadini dicono così!”',
            translation: 'No mercado há queijos de montanha, castanhas, pão e frios. Um produtor oferece ao Linu um pedaço de formaggella: “Prove, por favor! Acho que é o queijo mais gostoso do Ticino.” Giulia cochicha para ele: “Todos os produtores dizem isso!”',
            choices: [
              { text: 'Linu compra un pezzo di formaggella e poi salgono al castello.', translation: 'Linu compra um pedaço de formaggella e depois sobem ao castelo.', next: 'castello' },
              {
                text: 'Il contadino ammette che il suo formaggio non è buono.',
                translation: 'O produtor admite que o queijo dele não é bom.',
                wrong: '“Credo che sia il formaggio più buono del Ticino”: ele acha que o queijo dele é o MELHOR do Ticino. “Sia” é o congiuntivo de “essere”, obrigatório depois de “credo che”.',
              },
            ],
          },
          castello: {
            emoji: '🗼',
            text: 'Castelgrande è enorme, con torri alte e mura grigie. Giulia racconta che i tre castelli sono patrimonio dell’UNESCO dal 2000 e che nel Medioevo controllavano la strada verso i passi alpini. Poi chiede: “Vuoi che saliamo anche a Montebello? Da lassù la vista è ancora più bella.”',
            translation: 'O Castelgrande é enorme, com torres altas e muralhas cinzentas. Giulia conta que os três castelos são patrimônio da UNESCO desde 2000 e que, na Idade Média, controlavam a estrada para os passos alpinos. Depois pergunta: “Quer que a gente suba também até o Montebello? Lá de cima a vista é ainda mais bonita.”',
            choices: [
              { text: '“Sì, voglio che tu mi faccia vedere tutto!”', translation: '“Sim, quero que você me mostre tudo!”', next: 'montebello' },
              { text: '“Sono stanco: è meglio che ci riposiamo un po’.”', translation: '“Estou cansado: é melhor a gente descansar um pouco.”', next: 'riposo' },
            ],
          },
          montebello: {
            emoji: '⛰️',
            text: 'Il sentiero per Montebello è ripido e Linu arriva senza fiato. Dalle mura vede la valle, il fiume Ticino e le montagne. Giulia dice: “Stasera ti porto in un grotto. Però bisogna che facciamo una riservazione: il sabato è sempre pieno.”',
            translation: 'A trilha para o Montebello é íngreme, e Linu chega sem fôlego. Das muralhas, vê o vale, o rio Ticino e as montanhas. Giulia diz: “Hoje à noite vou te levar a um grotto. Mas é preciso que a gente faça uma reserva: no sábado está sempre lotado.”',
            choices: [
              { text: 'Linu telefona subito al grotto.', translation: 'Linu liga na hora para o grotto.', next: 'telefono' },
              { text: 'Linu pensa che non sia necessario.', translation: 'Linu acha que não é necessário.', next: 'final_pieno' },
            ],
          },
          riposo: {
            emoji: '🍦',
            text: 'Si siedono all’ombra nel cortile del castello e mangiano un gelato. Giulia propone: “Stasera andiamo in un grotto? Bisogna che telefoniamo presto, perché il sabato è sempre pieno.”',
            translation: 'Sentam-se à sombra no pátio do castelo e tomam um sorvete. Giulia propõe: “Hoje à noite vamos a um grotto? É preciso que a gente ligue logo, porque no sábado está sempre lotado.”',
            choices: [
              { text: 'Linu telefona subito al grotto.', translation: 'Linu liga na hora para o grotto.', next: 'telefono' },
              { text: 'Linu propone di andarci senza telefonare.', translation: 'Linu propõe ir sem ligar.', next: 'final_pieno' },
            ],
          },
          telefono: {
            emoji: '📞',
            text: 'Risponde un signore: “Grotto del Sasso, buongiorno!” Linu chiede un tavolo per due alle sette e mezza. Il signore risponde: “Mi dispiace, alle sette e mezza è tutto pieno. Le posso dare un tavolo alle sei, a meno che non preferisca venire alle nove.”',
            translation: 'Atende um senhor: “Grotto del Sasso, bom dia!” Linu pede uma mesa para dois às sete e meia. O senhor responde: “Sinto muito, às sete e meia está tudo lotado. Posso lhe dar uma mesa às seis, a não ser que o senhor prefira vir às nove.”',
            choices: [
              { text: '“Alle sei va benissimo, grazie.”', translation: '“Às seis está ótimo, obrigado.”', next: 'final_presto' },
              { text: '“Allora veniamo alle nove.”', translation: '“Então vamos às nove.”', next: 'final_tardi' },
              {
                text: 'Linu capisce che il grotto è chiuso il sabato.',
                translation: 'Linu entende que o grotto fecha aos sábados.',
                wrong: 'O grotto não está fechado: só às sete e meia está lotado. “A meno che non preferisca venire alle nove” (a não ser que prefira vir às nove) oferece outro horário.',
              },
            ],
          },
          final_presto: {
            emoji: '🌰',
            text: 'Alle sei il grotto è tranquillo. Mangiano polenta e brasato su un tavolo di granito, sotto i castagni, e bevono una gazzosa. Giulia sorride: “Spero che tu torni presto in Ticino!”',
            translation: 'Às seis o grotto está tranquilo. Comem polenta com carne assada numa mesa de granito, embaixo das castanheiras, e tomam uma gasosa. Giulia sorri: “Espero que você volte logo ao Ticino!”',
            ending: {
              tone: 'bom',
              title: 'Jantar sob as castanheiras',
              message: 'Você entendeu o dia inteiro no congiuntivo: “penso che sia”, “vuoi che saliamo”, “bisogna che facciamo”, “spero che tu torni”.',
            },
          },
          final_tardi: {
            emoji: '🎶',
            text: 'Alle nove il grotto è pieno di musica e di voci. Linu mangia la polenta alle dieci di sera e il giorno dopo si sveglia tardissimo. “Ne è valsa la pena”, dice sbadigliando.',
            translation: 'Às nove o grotto está cheio de música e de vozes. Linu come a polenta às dez da noite e no dia seguinte acorda tardíssimo. “Valeu a pena”, diz bocejando.',
            ending: {
              tone: 'bom',
              title: 'Noite de festa',
              message: 'Jantar tarde, mas com mesa garantida: a reserva salvou a noite.',
            },
          },
          final_pieno: {
            emoji: '😕',
            text: 'La sera arrivano al grotto senza riservazione. Il cameriere allarga le braccia: “Mi dispiace, è tutto pieno fino alla chiusura.” Mangiano un panino in piazza e Giulia sospira: “Te l’avevo detto che bisognava riservare!”',
            translation: 'À noite chegam ao grotto sem reserva. O garçom abre os braços: “Sinto muito, está tudo lotado até o fechamento.” Comem um sanduíche na praça, e Giulia suspira: “Eu te disse que precisava reservar!”',
            ending: {
              tone: 'neutro',
              title: 'Sem mesa',
              message: '“Bisogna che facciamo una riservazione”: a Giulia avisou. No Ticino, no sábado à noite, reserve sempre.',
            },
          },
        },
      },
    ],
  },
];
