import type { ArticleSeed } from '../artigos';

/** Artigos culturais graduados do finlandês (ver src/data/artigos.ts). */
export const ARTIGOS_FI: ArticleSeed[] = [
  {
    id: 'fi-a-sauna',
    level: 'A1.1',
    title: 'Sauna',
    emoji: '🧖',
    paragraphs: [
      'Sauna on kuuma huone, ja Suomessa se on hyvin tärkeä. Saunassa istutaan ja heitetään vettä kiukaalle.',
      'Perhe menee saunaan, ja sen jälkeen juodaan kylmää vettä.',
    ],
    translation: [
      'A sauna é um cômodo quente, e na Finlândia ela é muito importante. Na sauna, a gente fica sentado e joga água nas pedras quentes do fogão (“kiuas”).',
      'A família vai à sauna, e depois bebe-se água gelada.',
    ],
    glossary: [
      ['sauna / saunassa / saunaan', 'sauna / na sauna / para a sauna'],
      ['heitetään', 'joga-se (de “heittää”, jogar)'],
      ['kiukaalle', 'no fogão da sauna (de “kiuas”)'],
    ],
    forms: [['vettä', 'vesi']],
    questions: [
      { q: 'Onde se joga a água na sauna?', options: ['No chão', 'Nas pedras quentes do fogão', 'Na cabeça'], answer: 1 },
      { q: 'O que se bebe depois da sauna?', options: ['Água gelada', 'Café quente', 'Sopa'], answer: 0 },
    ],
  },
  {
    id: 'fi-a-juhannus',
    level: 'A2.1',
    title: 'Juhannus',
    emoji: '🔥',
    paragraphs: [
      'Juhannus on kesän suuri juhla. Sitä vietetään kesäkuussa, kun yöt ovat valoisia ja aurinko laskee vain hetkeksi.',
      'Moni suomalainen lähtee juhannukseksi mökille. Siellä uidaan, syödään makkaraa ja poltetaan kokko.',
      'Kaupungit ovat juhannuksena hiljaisia, koska niin moni on lähtenyt pois.',
    ],
    translation: [
      'O juhannus é a grande festa do verão. É comemorado em junho, quando as noites são claras e o sol se põe só por um instante.',
      'Muitos finlandeses vão para a casa de campo (“mökki”) no juhannus. Lá se nada, come-se linguiça e acende-se uma grande fogueira (“kokko”).',
      'As cidades ficam silenciosas no juhannus, porque tanta gente foi embora.',
    ],
    glossary: [
      ['juhla', 'festa'],
      ['kesäkuussa', 'em junho'],
      ['aurinko', 'o sol'],
      ['mökille', 'para a casa de campo (de “mökki”)'],
      ['poltetaan', 'queima-se, acende-se (de “polttaa”)'],
      ['kokko', 'fogueira grande'],
    ],
    questions: [
      { q: 'Quando é o juhannus?', options: ['Em junho', 'No Natal', 'Em março'], answer: 0 },
      { q: 'Para onde vão muitos finlandeses?', options: ['Para a casa de campo', 'Para o exterior', 'Para o trabalho'], answer: 0 },
      { q: 'Como ficam as cidades no juhannus?', options: ['Cheias de turistas', 'Silenciosas', 'Com desfiles'], answer: 1 },
    ],
  },
  {
    id: 'fi-a-muumit',
    level: 'B1.1',
    title: 'Muumit',
    emoji: '🦛',
    paragraphs: [
      'Muumit ovat valkoisia, pyöreitä olentoja, jotka muistuttavat vähän virtahepoja. Ne asuvat Muumilaaksossa yhdessä ystäviensä kanssa.',
      'Muumit keksi Tove Jansson, suomalainen taiteilija ja kirjailija. Hän kirjoitti kirjansa ruotsiksi, koska hänen äidinkielensä oli ruotsi. Suomessa ruotsi on toinen virallinen kieli.',
      'Ensimmäinen Muumi-kirja ilmestyi vuonna 1945, heti sodan jälkeen. Nykyään Muumit tunnetaan kaikkialla maailmassa, ja Naantalissa on Muumimaailma, jossa lapset voivat tavata Muumipeikon.',
    ],
    translation: [
      'Os Mumins são criaturas brancas e redondas que lembram um pouco hipopótamos. Eles moram no Vale dos Mumins com os amigos.',
      'Quem inventou os Mumins foi Tove Jansson, artista e escritora finlandesa. Ela escreveu os livros em sueco, porque a língua materna dela era o sueco. Na Finlândia, o sueco é a outra língua oficial, com os mesmos direitos do finlandês.',
      'O primeiro livro dos Mumins saiu em 1945, logo depois da guerra. Hoje os Mumins são conhecidos no mundo inteiro, e em Naantali existe o Mundo dos Mumins, onde as crianças podem conhecer o Mumintroll.',
    ],
    glossary: [
      ['virtahepoja', 'hipopótamos'],
      ['taiteilija', 'artista'],
      ['kirjailija', 'escritor, escritora'],
      ['äidinkielensä', 'a língua materna dela'],
      ['maailmassa', 'no mundo'],
      ['nykyään', 'hoje em dia'],
    ],
    forms: [['sodan', 'sota']],
    questions: [
      { q: 'Em que língua Tove Jansson escreveu os livros?', options: ['Em finlandês', 'Em sueco', 'Em inglês'], answer: 1 },
      { q: 'Com que bicho os Mumins se parecem um pouco?', options: ['Com hipopótamos', 'Com gatos', 'Com pinguins'], answer: 0 },
      { q: 'Quando saiu o primeiro livro?', options: ['Em 1945, logo depois da guerra', 'Em 1917', 'Em 1990'], answer: 0 },
    ],
  },
  {
    id: 'fi-a-kalevala',
    level: 'B2.1',
    title: 'Kalevala',
    emoji: '📖',
    paragraphs: [
      'Kalevala on Suomen kansalliseepos. Sen kokosi lääkäri Elias Lönnrot, joka kulki 1800-luvulla Karjalassa ja kirjoitti muistiin vanhoja runoja, joita ihmiset lauloivat.',
      'Ensimmäinen versio ilmestyi vuonna 1835 ja laajempi vuonna 1849. Runoissa seikkailevat viisas laulaja Väinämöinen, seppä Ilmarinen ja nuori Lemminkäinen, ja niiden keskellä on salaperäinen Sampo, joka tuo onnea ja rikkautta.',
      'Kalevala antoi suomalaisille itsetuntoa aikana, jolloin Suomi kuului Venäjään. Se innoitti Jean Sibeliusta ja Akseli Gallen-Kallelaa, ja Kalevalan päivää vietetään joka vuosi 28. helmikuuta.',
    ],
    translation: [
      'A Kalevala é a epopeia nacional da Finlândia. Quem a reuniu foi o médico Elias Lönnrot, que andou pela Carélia no século XIX e anotou poemas antigos que o povo cantava.',
      'A primeira versão saiu em 1835, e uma mais longa em 1849. Nos poemas vivem aventuras o sábio cantor Väinämöinen, o ferreiro Ilmarinen e o jovem Lemminkäinen, e no meio de tudo está o misterioso Sampo, que traz sorte e riqueza.',
      'A Kalevala deu autoestima aos finlandeses numa época em que a Finlândia pertencia à Rússia. Ela inspirou Jean Sibelius e Akseli Gallen-Kallela, e o Dia da Kalevala é comemorado todo ano em 28 de fevereiro.',
    ],
    glossary: [
      ['luvulla', 'no século (em “1800-luvulla”, no século XIX)'],
      ['salaperäinen', 'misterioso'],
      ['jolloin', 'em que, quando'],
      ['innoitti', 'inspirou'],
    ],
    questions: [
      { q: 'Quem reuniu a Kalevala?', options: ['O médico Elias Lönnrot', 'O compositor Jean Sibelius', 'O rei da Suécia'], answer: 0 },
      { q: 'O que é o Sampo?', options: ['Um rio da Carélia', 'Um objeto misterioso que traz sorte e riqueza', 'O nome do ferreiro'], answer: 1 },
      { q: 'A que país a Finlândia pertencia quando a Kalevala saiu?', options: ['À Suécia', 'À Rússia', 'A nenhum: já era independente'], answer: 1 },
    ],
  },
  {
    id: 'fi-a-agricola',
    level: 'C1.1',
    title: 'Mikael Agricola',
    emoji: '✒️',
    paragraphs: [
      'Mikael Agricolaa kutsutaan suomen kirjakielen isäksi. Hän opiskeli Wittenbergissä Martti Lutherin johdolla, ja reformaation mukaisesti hän halusi, että kansa voisi lukea Raamattua omalla kielellään.',
      'Vuonna 1543 ilmestyi hänen aapisensa, ensimmäinen suomeksi painettu kirja, ja vuonna 1548 Uusi testamentti. Koska yhteistä kirjakieltä ei vielä ollut, Agricola joutui keksimään paljon sanoja itse, ja osa niistä on yhä käytössä. Kirjoitusasun hän otti ruotsista, saksasta ja latinasta.',
      'Nykyään Agricolan kuolinpäivää, 9. huhtikuuta, vietetään suomen kielen päivänä, ja silloin liputetaan.',
    ],
    translation: [
      'Mikael Agricola é chamado de pai do finlandês escrito. Ele estudou em Wittenberg sob a orientação de Martinho Lutero e, como pregava a Reforma, queria que o povo pudesse ler a Bíblia na própria língua.',
      'Em 1543 saiu a sua cartilha, o primeiro livro impresso em finlandês, e em 1548 o Novo Testamento. Como ainda não havia uma língua escrita comum, Agricola teve de inventar muitas palavras ele mesmo, e parte delas continua em uso. A forma de escrever, ele tirou do sueco, do alemão e do latim.',
      'Hoje, o dia da morte de Agricola, 9 de abril, é comemorado como o Dia da Língua Finlandesa, e nesse dia se hasteia a bandeira.',
    ],
    glossary: [
      ['reformaation', 'da Reforma protestante (genitivo de “reformaatio”)'],
      ['aapisensa', 'a cartilha dele (de “aapinen”)'],
      ['kirjoitusasun', 'a forma escrita, a ortografia'],
      ['kuolinpäivää', 'o dia da morte'],
      ['liputetaan', 'hasteia-se a bandeira'],
      ['latinasta', 'do latim'],
    ],
    questions: [
      { q: 'Por que Agricola queria textos em finlandês?', options: ['Para que o povo pudesse ler a Bíblia na própria língua', 'Para agradar o rei da Suécia', 'Para vender livros no exterior'], answer: 0 },
      { q: 'Qual foi o primeiro livro impresso em finlandês?', options: ['A Kalevala', 'A cartilha de Agricola, de 1543', 'Um jornal de Turku'], answer: 1 },
      { q: 'O que se comemora em 9 de abril?', options: ['O Dia da Língua Finlandesa', 'O Dia da Kalevala', 'A independência'], answer: 0 },
    ],
  },
];
