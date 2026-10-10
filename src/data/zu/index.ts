import type { LanguagePack } from '../types';
import { VOCAB_ZU } from './vocabulario';
import { UNITS_ZU } from './curriculo';
import { GRAMMAR_ZU } from './gramatica';
import { STORIES_ZU } from './historias';
import { COMMUNITY_ZU, ETYMOLOGY_ZU, JOURNAL_PROMPTS_ZU, SCENARIOS_ZU, SHADOWING_ZU } from './extras';
import { ACCENTS_ZU } from './sotaques';

export const ZULU: LanguagePack = {
  code: 'zu',
  name: 'Zulu',
  nativeName: 'isiZulu',
  // bandeira da África do Sul: país onde a imensa maioria dos falantes vive e onde o isiZulu é a língua
  // mais falada em casa e uma das línguas oficiais (en.wikipedia.org/wiki/Zulu_language); a língua
  // também é falada em comunidades no Zimbábue e no Lesoto, mas não há um símbolo próprio da língua
  // neste app.
  flag: '🇿🇦',
  lineage: {
    family: 'Níger-Congo',
    // cadeia confirmada na infobox de en.wikipedia.org/wiki/Zulu_language: Niger–Congo > Atlantic–Congo
    // > Volta-Congo > Benue–Congo > Bantoid > Southern Bantoid > Bantu > Southern Bantu > Nguni-Tsonga >
    // Nguni > Zunda > Zulu — a mesma cadeia do isiXhosa até o nó Zunda, onde as duas línguas se separam.
    branches: ['Atlântico-congolês', 'Volta-congolês', 'Benue-congolês', 'Bantoide', 'Bantoide meridional', 'Banto', 'Banto meridional', 'Nguni-tsonga', 'Nguni', 'Zunda'],
    region: 'KwaZulu-Natal e sul de Mpumalanga, no sudeste da África do Sul, com comunidades no Zimbábue e no Lesoto',
    writing: 'Alfabeto latino, com três letras de clique (c, q, x) e dígrafos como bh, dl, hl, kh, ng, ny, sh, tsh, xh',
  },
  speechLocale: 'zu-ZA',
  available: true,
  incomplete: {
    until: 'A2.2',
    note:
      'A1 e A2 completos por enquanto (4 unidades, 96 palavras, 8 tópicos de gramática, 4 histórias), no isiZulu, língua banta do ramo nguni falada por cerca de 12 milhões de pessoas como língua materna (2013–2017) e mais 16 milhões como segunda língua (2002) — é a língua mais falada em casa na África do Sul, onde é uma das 12 línguas oficiais desde 1994, com falantes também no Zimbábue e no Lesoto, segundo en.wikipedia.org/wiki/Zulu_language, que também confirma a classificação genealógica usada acima, o sistema de 16 classes de substantivo e o traço mais conhecido da língua: os sons de clique (as letras c, q e x, 18 variantes contando versões aspiradas e nasalizadas), um traço compartilhado com outras línguas do sul da África por causa de contato histórico com línguas coissã — sem um número exato de quanto do vocabulário tem essa origem, ao contrário do que foi possível confirmar para o isiXhosa. O vocabulário foi conferido palavra por palavra no Wiktionary em inglês (en.wiktionary.org/wiki/<palavra>, uma página por palavra, com duas raízes numerais confirmadas à parte no Wiktionary em zulu), as saudações, a despedida, a pergunta/resposta de apresentação, os numerais e os sinais do dia a dia (abrir/fechar/entrada/saída) vêm também do roteiro de conversação da Wikivoyage (en.wikivoyage.org/wiki/Zulu_phrasebook), e as frases de exemplo só combinam essas palavras com regras de verbo confirmadas em en.wikipedia.org/wiki/Zulu_grammar: a concordância de sujeito, a cópula (“ng-” antes de vogal), a alternância entre a forma disjunta do presente (com “-ya-”, quando o verbo fecha a oração ou é seguido só de advérbio) e a conjunta (sem “-ya-”, quando segue objeto direto), a negação do presente (prefixo “a-” mais concordância secundária, com a vogal final trocando de “-a” para “-i”) e, nas duas unidades novas de nível A2 (acrescentadas nesta sessão): o passado recente (sufixo “-ile”/forma curta “-ē”, ex. “Sihambile”/“Sihambē izolo”), o passado remoto (prefixo “-ā-”, ex. “Sāhamba”), a negação do passado (sufixo “-anga”, ex. “Asihambanga”), o futuro imediato e distante (prefixos “-zo(ku)-”/“-yo(ku)-”, ex. “Ngizokuza”, eu virei, e “Ngizokwakha”, eu vou construir, com o infixo “-ku-”/“-kw-” exigido pelos verbos de uma sílaba ou iniciados por vogal) e a concordância de objeto (“-ngi-”, “-m-” de classe 1 e o reflexivo “-zi-”, ex. “Ngiyambona”, eu o/a vejo, e “Ngizomsiza”, eu vou ajudá-lo/a). Como o isiZulu tem um sistema de concordância de classes nominais rico, mas as fontes consultadas até aqui só confirmam esse sistema em detalhe, com frase de exemplo citada, para poucas classes (1, 1a, 2, 5 e 9) e para um conjunto ainda pequeno de verbos, o curso continua evitando deliberadamente inventar concordâncias para classes ou verbos não vistos nessas fontes: as 27 palavras novas da A2 que pertencem a outras classes (isipho, isitolo e isikhwama, classe 7; ubusuku, classe 14; ukusa, classe 15) por isso só aparecem como objeto de verbo (que não exige concordância própria) ou em sua forma locativa já atestada (“ebusuku”, “ekuseni”), nunca como sujeito de um verbo conjugado — preferindo, de novo, um alcance menor e honesto a arriscar uma concordância errada. Possessivos (“meu”, “de alguém”) também ficam de fora desta entrega: a Wikipédia em inglês dá a fórmula e exemplos para classes 5, 6, 7, 11 e 15, mas nenhum para as classes 1/1a/2/9 mais usadas no vocabulário deste curso, então as histórias e frases novas preferem “um amigo” a “meu amigo”. Do B1.1 ao C2 chega nas próximas atualizações, conforme mais gramática e vocabulário puderem ser conferidos em fontes específicas da língua.',
  },
  vocab: VOCAB_ZU,
  units: UNITS_ZU,
  etymology: ETYMOLOGY_ZU,
  community: COMMUNITY_ZU,
  scenarios: SCENARIOS_ZU,
  stories: STORIES_ZU,
  accents: ACCENTS_ZU,
  grammar: GRAMMAR_ZU,
  journalPrompts: JOURNAL_PROMPTS_ZU,
  shadowing: SHADOWING_ZU,
  // nenhuma letra do isiZulu tem acento ou diacrítico: os sons de clique (c, q, x) já usam letras do
  // alfabeto latino comum, presentes em qualquer teclado português.
  specialChars: [],
  // sem gênero gramatical: o isiZulu tem classes de substantivo (umu-/aba-, u-/o-, i(n)-/izi(n)-…), não
  // masculino, feminino ou neutro — a mesma solução já usada no isiXhosa, no suaíli e no huni kuĩ deste
  // app.
  genders: [],
  greeting: 'Sawubona',
  sampleSentence: 'Sawubona! Igama lami nginguLinu. Ngifunda isiZulu!',
  phrases: {
    hi: 'Sawubona!',
    thanks: 'Ngiyabonga!',
    // não há, nas fontes consultadas, um imperativo isolado para “vamos!”: reaproveitamos a frase real
    // atestada “Ngifunda isiZulu” (eu estudo zulu — forma conjunta, sem “-ya-”, porque há objeto depois)
    // como convite para começar agora, sem inventar uma forma nova.
    letsStart: ['Ngifunda isiZulu!', 'Eu estudo zulu! (usado aqui como convite para começar agora)'],
  },
  formalMarkers:
    '“Sawubona” cumprimenta uma só pessoa; “Sanibonani” cumprimenta várias pessoas, ou mostra respeito a alguém mais velho ou a um estranho — mesmo sendo uma só pessoa. O mesmo vale para “Unjani?” (como você está, uma pessoa) e “Ninjani?” (como vocês estão, ou com respeito a alguém mais velho) — uma distinção confirmada no Wiktionary em inglês.',
  cognateNote:
    'O isiZulu não é parente do português: é uma língua banta viva da família Níger-Congo, nativa do sudeste da África do Sul — uma família totalmente diferente da indo-europeia (a mesma do português). Não há ancestral comum, então não existem cognatos “de berço” entre as duas línguas. O parente de verdade do isiZulu, dentro do app, é o isiXhosa (código xh, que já tem curso aqui): as duas vêm do mesmo ramo nguni, dividem boa parte do vocabulário básico e da gramática (a mesma lógica de classes de substantivo e de concordância do verbo) e os falantes das duas línguas costumam se entender razoavelmente bem, embora não sejam a mesma língua. Os sons de clique (as letras c, q e x) marcam as duas, um traço compartilhado com outras línguas do sul da África por causa do contato histórico com línguas coissã da região. Já o que o isiZulu tem em comum com o português veio por um caminho bem mais recente e indireto: alguns empréstimos do africâner, fruto do contato colonial — “ikati” (gato, do africâner “kat”) e “isikole” (escola, do africâner “skool”), mostrados na aba de etimologia.',
};
