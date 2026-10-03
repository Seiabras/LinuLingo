import type { LanguagePack } from '../types';
import { VOCAB_TER } from './vocabulario';
import { UNITS_TER } from './curriculo';
import { GRAMMAR_TER } from './gramatica';
import { STORIES_TER } from './historias';
import { COMMUNITY_TER, ETYMOLOGY_TER, JOURNAL_PROMPTS_TER, SCENARIOS_TER, SHADOWING_TER } from './extras';

export const TERENA: LanguagePack = {
  code: 'ter',
  name: 'Terena',
  // “têrenoe” é o nome que os terena dão a si e à língua (pt.wikipedia.org/wiki/Língua_terena); na
  // grafia sem acentos de Silva (2013): “terenoe” (“ihikexovo terenoe”, estudando terena, p. 88).
  nativeName: 'Terenoe',
  // território: Mato Grosso do Sul (também SP e MT) — bandeira do Brasil, na falta de um símbolo
  // próprio da língua.
  flag: '🇧🇷',
  lineage: {
    family: 'Aruak (Arawak)',
    // Glottolog (tere1279, conferido em glottolog.org): Arawakan › Southern Maipuran › Bolivian
    // Arawakan › Terena-Kinikinao-Chane. As infobox da Wikipédia em português e em inglês dizem
    // Aruaque › Meridional › Bolívia-Paraná, o mesmo agrupamento com outro nome. O baniwa (kpc) fica
    // noutro ramo da família (Japurá-Colômbia).
    branches: ['Maipure meridional', 'Aruak boliviano', 'Terena-Kinikinao-Chané'],
    region:
      'Mato Grosso do Sul — sobretudo nas terras indígenas da região de Miranda e Aquidauana, como Cachoeirinha, Taunay/Ipegue, Limão Verde, Buriti e Lalima —, com aldeias também em São Paulo (Araribá e Icatu) e em Mato Grosso; cooficial no município de Miranda (MS) desde 2017',
    writing:
      'Alfabeto latino, na ortografia das escolas terena (criada nos anos 1960 e revista em 2007): cinco vogais (a, e, i, o, u), apóstrofo para a oclusiva glotal, x para o som de “ch”, v e y como semivogais, e os grupos mb, nd, ng, nz e nj que marcam a 1ª pessoa (eu, meu); um m no fim da palavra indica vogais nasais',
  },
  // nenhum serviço de síntese de voz consultado tem voz para o terena: os áudios usam a voz do
  // aparelho, se houver (o mesmo caso das outras línguas indígenas do app).
  speechLocale: 'ter',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, 67 palavras, 4 tópicos de gramática, 2 histórias), no terena da Terra Indígena Cachoeirinha (Miranda, MS), onde a língua ainda é a mais usada no dia a dia. O terena é uma língua viva da família aruak, falada por cerca de 15 mil pessoas, sobretudo em Mato Grosso do Sul; é parente distante do baniwa, a outra língua aruak deste app. O vocabulário e as frases vêm do dicionário terena-português de Denise Silva (2013), feito com professores e falantes de Cachoeirinha, e do curso “Aprenda Terêna” de Nancy Butler e Elizabeth Ekdahl (1979), de onde saem os cumprimentos, o nome e os números. A grafia é a das escolas terena, como em Silva: sem acentos, com k e com as vogais iguais escritas uma vez só — por isso o “Ihárooti” do curso de 1979 aparece aqui como “Iharoti”. Nas fontes não há um “oi” fixo: o terena cumprimenta perguntando “Na keyeye?” (como vai?). Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_TER,
  units: UNITS_TER,
  etymology: ETYMOLOGY_TER,
  community: COMMUNITY_TER,
  scenarios: SCENARIOS_TER,
  stories: STORIES_TER,
  grammar: GRAMMAR_TER,
  journalPrompts: JOURNAL_PROMPTS_TER,
  shadowing: SHADOWING_TER,
  // a grafia de Silva (2013) não usa acentos nem letras fora do teclado português; o apóstrofo da
  // oclusiva glotal já está em qualquer teclado.
  specialChars: [],
  // sem gênero gramatical (Butler e Ekdahl 1979, 3.1; Silva 2013, 3.2.2.3): o sexo só aparece por
  // palavras diferentes (hoyeno, homem/macho; seno, mulher/fêmea).
  genders: [],
  greeting: 'Na keyeye?',
  sampleSentence: 'Na keyeye? Linu ngoeha. Hinga!',
  phrases: {
    hi: 'Na keyeye?',
    // Butler e Ekdahl (1979), 31.4: “Áinapo yácoe” (obrigado), na grafia de Silva
    thanks: 'Ainapo yakoe!',
    // “hinga” é verbete de Silva (2013): “vamos”
    letsStart: ['Hinga!', 'Vamos!'],
  },
  formalMarkers:
    'O terena não tem um “você” formal separado: o mesmo jeito de falar serve para qualquer pessoa, e títulos como “senhor” e “senhora” não são comuns — “yeno João” pode ser tanto “a esposa de João” quanto “a esposa do Sr. João”. Alguns jovens e crianças usam “titio” como título de respeito: “titio João”.',
  cognateNote:
    'O terena não é parente do português: é uma língua indígena da família aruak, que se espalhou pela América do Sul muito antes da chegada dos europeus — uma família totalmente diferente da indo-europeia (a do português) e também da tupi-guarani. Dentro do app, o parente do terena é o baniwa, do Alto Rio Negro, mas de outro ramo da família, bem distante. O que o terena tem em comum com o português veio pelo contato: empréstimos como “panana” (banana), “mbola” (bola), “lumingu” (domingo) e os números de quatro em diante (“kuaturu kaxe”, quinta-feira, é “quatro dias” depois do domingo). E também há palavras vindas do guarani, como “marakaya” (gato).',
};
