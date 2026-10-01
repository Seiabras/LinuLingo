import type { ArticleSeed } from '../artigos';

/** Artigos culturais graduados do sueco (ver src/data/artigos.ts). */
export const ARTIGOS_SV: ArticleSeed[] = [
  {
    id: 'sv-a-fika',
    level: 'A1.1',
    title: 'Fika',
    emoji: '☕',
    paragraphs: [
      'I Sverige fikar man. Man dricker kaffe och äter en kanelbulle.',
      'Man fikar med vänner eller på jobbet.',
    ],
    translation: [
      'Na Suécia, as pessoas fazem fika. Toma-se café e come-se um pão de canela.',
      'Faz-se fika com amigos ou no trabalho.',
    ],
    glossary: [
      ['fikar', 'fazem fika (pausa para o café)'],
      ['kaffe', 'café'],
      ['kanelbulle', 'pão doce de canela'],
    ],
    forms: [
      ['äter', 'äta'],
    ],
    questions: [
      { q: 'O que é fika?', options: ['Um esporte de inverno', 'Uma pausa com café e alguma coisa para comer', 'Uma festa de verão'], answer: 1 },
      { q: 'Com quem se faz fika?', options: ['Sozinho, sempre', 'Com amigos ou no trabalho', 'Só com a família no Natal'], answer: 1 },
    ],
  },
  {
    id: 'sv-a-midsommar',
    level: 'A2.2',
    title: 'Midsommar',
    emoji: '🌼',
    paragraphs: [
      'Midsommar firas i slutet av juni. Man dansar runt en hög stång med blommor och sjunger om små grodor – och hoppar som dem!',
      'Sedan äter man sill, potatis och jordgubbar. Många har blommor i håret.',
    ],
    translation: [
      'O Midsommar é comemorado no fim de junho. Dança-se em volta de um mastro alto com flores e canta-se sobre rãzinhas — pulando como elas!',
      'Depois se come arenque, batata e morangos. Muitos põem flores no cabelo.',
    ],
    glossary: [
      ['midsommar', 'festa do meio do verão'],
      ['juni', 'junho'],
      ['stång', 'mastro'],
      ['blommor', 'flores'],
      ['potatis', 'batata'],
    ],
    forms: [
      ['äter', 'äta'],
      ['små', 'liten'],
    ],
    questions: [
      { q: 'Quando é o Midsommar?', options: ['Em dezembro', 'No fim de junho', 'No primeiro dia da primavera'], answer: 1 },
      { q: 'O que se faz ao cantar sobre as rãzinhas?', options: ['Pula-se como rãs', 'Fica-se em silêncio', 'Nada-se no lago'], answer: 0 },
      { q: 'O que se come?', options: ['Arenque, batata e morangos', 'Pizza', 'Carne de rena e sorvete'], answer: 0 },
    ],
  },
  {
    id: 'sv-a-allemansratten',
    level: 'B1.1',
    title: 'Allemansrätten',
    emoji: '⛺',
    paragraphs: [
      'I Sverige har alla rätt att röra sig fritt i naturen, också på mark som någon annan äger. Det kallas allemansrätten. Man får gå, cykla och tälta ett eller ett par dygn på samma plats, om man inte är för nära ett hus. Man får också plocka blommor, bär och svamp.',
      'Men rätten kommer med ansvar. Regeln brukar sammanfattas så här: “inte störa – inte förstöra”. Man ska inte skräpa ner, inte göra upp eld när det är torrt och inte störa djuren eller de människor som bor där.',
    ],
    translation: [
      'Na Suécia, todos têm o direito de circular livremente pela natureza, até em terras que pertencem a outra pessoa. Isso se chama “allemansrätten”, o direito de todos. Pode-se caminhar, pedalar e acampar um ou dois dias no mesmo lugar, se não for perto demais de uma casa. Também se pode colher flores, frutinhas e cogumelos.',
      'Mas o direito vem com responsabilidade. A regra costuma ser resumida assim: “não perturbar — não destruir”. Não se deve deixar lixo, nem acender fogo quando está seco, nem perturbar os animais ou as pessoas que moram ali.',
    ],
    glossary: [
      ['äger', 'é dono de'],
      ['allemansrätten', 'o direito de todos à natureza'],
      ['tälta', 'acampar'],
      ['dygn', 'dia inteiro (24 h)'],
      ['blommor', 'flores'],
      ['sammanfattas', 'ser resumida'],
      ['eld', 'fogo'],
    ],
    questions: [
      { q: 'O que o allemansrätten permite?', options: ['Circular e acampar pouco tempo na natureza, mesmo em terra alheia', 'Caçar em qualquer lugar', 'Construir uma casa no mato'], answer: 0 },
      { q: 'Qual é a regra resumida?', options: ['“Primeiro a chegar, primeiro a ficar”', '“Não perturbar — não destruir”', '“Só com licença”'], answer: 1 },
      { q: 'Quando não se deve acender fogo?', options: ['Quando está seco', 'À noite', 'No inverno'], answer: 0 },
    ],
  },
  {
    id: 'sv-a-nobel',
    level: 'B2.1',
    title: 'Nobelpriset',
    emoji: '🏅',
    paragraphs: [
      'Den svenske kemisten och uppfinnaren Alfred Nobel (1833–1896) blev rik på dynamiten. I sitt testamente, som han skrev 1895, bestämde han att hans förmögenhet skulle användas till priser åt dem som hade gjort mänskligheten störst nytta.',
      'De första priserna delades ut 1901. I dag delas priserna i fysik, kemi, medicin och litteratur ut i Stockholm den 10 december, dagen då Nobel dog, medan fredspriset delas ut i Oslo samma dag. Priset i ekonomi kom till först 1968, genom Sveriges riksbank.',
    ],
    translation: [
      'O químico e inventor sueco Alfred Nobel (1833–1896) ficou rico com a dinamite. No seu testamento, que escreveu em 1895, decidiu que a sua fortuna seria usada para prêmios a quem tivesse trazido o maior benefício à humanidade.',
      'Os primeiros prêmios foram entregues em 1901. Hoje os prêmios de física, química, medicina e literatura são entregues em Estocolmo em 10 de dezembro, o dia em que Nobel morreu, enquanto o prêmio da paz é entregue em Oslo no mesmo dia. O prêmio de economia só foi criado em 1968, pelo banco central da Suécia.',
    ],
    glossary: [
      ['dynamiten', 'a dinamite'],
      ['testamente', 'testamento'],
      ['mänskligheten', 'a humanidade'],
      ['litteratur', 'literatura'],
      ['fredspriset', 'o prêmio da paz'],
    ],
    forms: [
      ['dog', 'dö'],
    ],
    questions: [
      { q: 'Como Alfred Nobel ficou rico?', options: ['Com a dinamite', 'Com petróleo', 'Com um banco'], answer: 0 },
      { q: 'Onde é entregue o prêmio da paz?', options: ['Em Estocolmo', 'Em Oslo', 'Em Genebra'], answer: 1 },
      { q: 'Por que a cerimônia é em 10 de dezembro?', options: ['É o dia em que Nobel morreu', 'É o aniversário do rei', 'É o fim do ano letivo'], answer: 0 },
    ],
  },
  {
    id: 'sv-a-offentlighet',
    level: 'C1.1',
    title: 'Offentlighetsprincipen',
    emoji: '📂',
    paragraphs: [
      'Redan 1766 antog Sverige en tryckfrihetsförordning som gav medborgarna rätt att ta del av myndigheternas handlingar – den första lagen i sitt slag i världen.',
      'Principen lever kvar. I dag kan vem som helst begära att få läsa en allmän handling, till exempel ett avtal som kommunen har skrivit eller e-post till en myndighet, utan att behöva säga vem man är eller varför man vill se den. Vissa uppgifter kan dock hållas hemliga enligt lag, till exempel för att skydda enskildas privatliv eller rikets säkerhet.',
    ],
    translation: [
      'Já em 1766 a Suécia aprovou uma lei de liberdade de imprensa que deu aos cidadãos o direito de ter acesso aos documentos das autoridades — a primeira lei do tipo no mundo.',
      'O princípio continua vivo. Hoje qualquer pessoa pode pedir para ler um documento público, por exemplo um contrato que o município assinou ou um e-mail enviado a um órgão público, sem precisar dizer quem é nem por que quer vê-lo. Algumas informações, porém, podem ser mantidas em sigilo por lei, por exemplo para proteger a vida privada de alguém ou a segurança do país.',
    ],
    glossary: [
      ['tryckfrihetsförordning', 'lei de liberdade de imprensa'],
      ['begära', 'pedir, exigir'],
      ['e-post', 'e-mail'],
    ],
    forms: [
      ['gav', 'ge'],
    ],
    questions: [
      { q: 'O que a lei de 1766 garantiu?', options: ['O direito de votar', 'O direito de ter acesso aos documentos das autoridades', 'O direito de acampar'], answer: 1 },
      { q: 'Quem pede um documento público precisa…', options: ['dizer quem é e por quê', 'não precisa dizer quem é nem por quê', 'ser jornalista'], answer: 1 },
      { q: 'O que pode continuar em sigilo?', options: ['Nada', 'Informações para proteger a vida privada ou a segurança do país', 'Todos os contratos'], answer: 1 },
    ],
  },
];
