import type { LanguagePack } from '../types';
import { VOCAB_TL } from './vocabulario';
import { UNITS_TL } from './curriculo';
import { GRAMMAR_TL } from './gramatica';
import { STORIES_TL } from './historias';
import { COMMUNITY_TL, ETYMOLOGY_TL, JOURNAL_PROMPTS_TL, SCENARIOS_TL, SHADOWING_TL } from './extras';

export const TAGALO: LanguagePack = {
  code: 'tl',
  name: 'Tagalo',
  // autoglotônimo “Wikang Tagalog” (lit. “língua tagalo”), confirmado no infobox de
  // en.wikipedia.org/wiki/Tagalog_language.
  nativeName: 'Wikang Tagalog',
  // bandeira das Filipinas: o tagalo é a língua nativa de Metro Manila e boa parte de Luzon, e foi
  // escolhido em 1937 como base do filipino, a língua nacional do país.
  flag: '🇵🇭',
  lineage: {
    family: 'Austronésio',
    // cadeia completa conforme o infobox de en.wikipedia.org/wiki/Tagalog_language: Austronesian >
    // Malayo-Polynesian > Philippine > Greater Central Philippine > Central Philippine >
    // Kasiguranin–Tagalog > Tagalog. Note que esse caminho é DIFERENTE do indonésio (ramo malaico) e
    // do maori/havaiano (ramo oceânico > polinésio): o tagalo é filipino, não malaico nem polinésio,
    // apesar de todos serem austronésios.
    branches: ['Malaio-polinésio', 'Filipino', 'Grande Filipino Central', 'Filipino Central', 'Kasiguranin-Tagalo'],
    region:
      'Metro Manila e boa parte da ilha de Luzon, nas Filipinas (Luzon Central, Calabarzon, partes de Mimaropa, do Bicol e de Ilocos) — base do filipino, língua nacional falada em todo o arquipélago.',
    writing:
      'Alfabeto latino (o antigo silabário baybayin, ᜆᜄᜎᜓᜄ᜔, foi substituído pelo alfabeto latino durante a colonização espanhola). Veja a aba Gramática para o “ng” (som nasal único) e o glottal stop.',
  },
  // nenhum serviço de síntese de voz consultado nesta sessão foi testado diretamente; 'fil-PH'
  // (filipino) é a aproximação de locale mais comum em plataformas como Android/Google para o tagalo,
  // já que as duas línguas compartilham quase todo o vocabulário e toda a gramática (confirmado em
  // en.wikipedia.org/wiki/Tagalog_language). Na prática, os áudios usam a voz do aparelho, se houver.
  speechLocale: 'fil-PH',
  available: true,
  incomplete: {
    until: 'A2.2',
    note:
      'Até o nível A2 completo por enquanto (4 unidades, mais de cem palavras, 8 tópicos de gramática, 4 histórias), no tagalo (Wikang Tagalog) — língua filipina (ramo filipino da família austronésia) falada nativamente em Metro Manila e boa parte de Luzon, e base do filipino, língua nacional das Filipinas desde 1937. Toda palavra foi conferida em en.wiktionary.org (seção “==Tagalog==” de cada verbete), com reforço de en.wikipedia.org/wiki/Tagalog_language, en.wikipedia.org/wiki/Tagalog_grammar, en.wikipedia.org/wiki/Tagalog_phonology, en.wikipedia.org/wiki/Climate_of_the_Philippines, en.wikipedia.org/wiki/Jeepney e omniglot.com/language/phrases/tagalog.php — nenhuma palavra foi inventada. As frases de exemplo combinam palavras conferidas seguindo regras gramaticais também conferidas (marcação ang/ng/sa, ligante na/-ng, partícula de pergunta “ba”, “si” antes de nome próprio, inversão com “ay”, aspecto do verbo); onde a fonte já trazia a frase pronta (como “Kumusta ka?”, “Kain tayo!”, “Walâ akóng pera.” e “Masakit ang tiyan ko.”), ela foi reaproveitada tal como está. O sistema de foco do verbo (o traço mais famoso do tagalo) agora cobre, além do -um-/-in- do A1, os prefixos mag-/ma-/mang-, o aspecto completado/incompleto/contemplado e os prefixos maka-/magpa-/maki-; mas os afixos de foco locativo, benefactivo e instrumental mais raros ainda ficam para níveis mais avançados. Do B1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_TL,
  units: UNITS_TL,
  etymology: ETYMOLOGY_TL,
  community: COMMUNITY_TL,
  scenarios: SCENARIOS_TL,
  stories: STORIES_TL,
  grammar: GRAMMAR_TL,
  journalPrompts: JOURNAL_PROMPTS_TL,
  shadowing: SHADOWING_TL,
  // o tagalo se escreve com o alfabeto latino comum, sem letra extra: o “ng” é um dígrafo (duas letras
  // já existentes), e o glottal stop não tem letra própria na escrita do dia a dia (só nos dicionários,
  // como acento) — ver gramatica.ts.
  specialChars: [],
  // o tagalo não marca gênero gramatical: “siya” serve tanto para “ele” quanto para “ela”, e os
  // substantivos não se dividem por gênero — confirmado em en.wikipedia.org/wiki/Tagalog_grammar.
  genders: [],
  greeting: 'Kumusta!',
  sampleSentence: 'Kumusta! Ako si Linu. Mabuti ba kayo?',
  phrases: {
    hi: 'Kumusta!',
    thanks: 'Salamat!',
    // “Magsimula” (começar) é mag- + a raiz “simula” (en.wiktionary.org/wiki/magsimula), usado aqui no
    // mesmo padrão hortativo (verbo + “tayo”) já confirmado em “Kain tayo!” (en.wiktionary.org/wiki/tayo).
    letsStart: ['Magsimula tayo!', 'Vamos começar! (incluindo quem ouve)'],
  },
  formalMarkers:
    'O tagalo não troca de pronome como o “tu”/“você” do português: em vez disso, acrescenta-se a partícula “po” (e “opo” para “sim”) em quase qualquer frase para mostrar respeito a quem é mais velho ou desconhecido — confirmado em en.wikipedia.org/wiki/Tagalog_grammar e omniglot.com/language/phrases/tagalog.php.',
  cognateNote:
    'O tagalo é uma língua austronésia (ramo filipino), sem parentesco com o português — mas, depois de 333 anos de colonização espanhola, carrega uma camada grande de palavras emprestadas do espanhol, muitas reconhecíveis de cara: “kumusta” (de “¿cómo está?”), “mesa” e “pamilya” (família), por exemplo. Outras palavras vêm do malaio, de contatos austronésios bem mais antigos — “pinto” (porta) e “salamat” (obrigado, que também chegou ao indonésio como “selamat”) — e do chinês hokkien, herança do comércio chinês antigo: “kuya” (irmão mais velho) e “ate” (irmã mais velha). Por baixo dessas camadas, o vocabulário mais básico — “bahay” (casa), “gatas” (leite), os números — é herdado direto do proto-malaio-polinésio, a mesma raiz do indonésio, do maori e do havaiano já neste app; “bahay” é inclusive parente direto do havaiano “hale”. Ver a aba de etimologia para os detalhes de cada palavra.',
};
