import type { LanguagePack } from '../types';
import { VOCAB_NHD } from './vocabulario';
import { UNITS_NHD } from './curriculo';
import { GRAMMAR_NHD } from './gramatica';
import { STORIES_NHD } from './historias';
import { COMMUNITY_NHD, ETYMOLOGY_NHD, JOURNAL_PROMPTS_NHD, SCENARIOS_NHD, SHADOWING_NHD } from './extras';

export const GUARANI_NANDEVA: LanguagePack = {
  code: 'nhd',
  name: 'Guarani Ñandeva',
  // “Ava ñe'ẽ” (lit. “fala da gente”) é como o próprio povo nomeia a sua língua — confirmado em
  // pib.socioambiental.org/pt/Povo:Guarani_Ñandeva (ISA, “Povos Indígenas no Brasil”), que também
  // registra a autodesignação do povo, “avá katú eté” (gente verdadeira, autêntica), e o nome
  // “ñandeva” (nós, nossa gente), usado pelo próprio povo e por outros grupos guarani. “Chiripá” (e o
  // diminutivo “txiripa'i”, dado pelos vizinhos mbyá) é um apelido vindo de fora.
  nativeName: 'Ava ñe\'ẽ',
  // território: Mato Grosso do Sul e outros estados do sul/sudeste do Brasil (onde vive a maioria dos
  // falantes), leste do Paraguai e Misiones (Argentina) — emoji de bandeira do Brasil, como os outros
  // pacotes guarani brasileiros deste app (gun, kgk), já que o português não tem bandeira própria do
  // povo e a maioria dos falantes está no Brasil.
  flag: '🇧🇷',
  lineage: {
    family: 'Tupi',
    branches: ['Tupi-guarani', 'Guarani (subgrupo I)'],
    region:
      'Mato Grosso do Sul e, em menor número, Paraná, São Paulo, Santa Catarina e Rio Grande do Sul (Brasil, cerca de 13 mil falantes, segundo o Instituto Socioambiental), leste do Paraguai (cerca de 2,4 mil) e província de Misiones, na Argentina (cerca de mil)',
    writing:
      'Alfabeto latino, na mesma convenção ortográfica geral do guarani: “ñ” para a nasal palatal, apóstrofo (puso) para a oclusiva glotal, e til para marcar vogal nasal (ã, ẽ, ĩ, õ, ũ, ỹ) — veja a aba Gramática para a fonologia específica (vogais orais e nasais, harmonia nasal), descrita em en.wikipedia.org/wiki/Chiripá_language a partir da Ethnologue (25ª ed., 2022) e da dissertação de Consuelo de Paiva Godinho Costa, “Nhandewa Aywu” (Unicamp, 2003).',
  },
  // nenhum serviço de síntese de voz consultado (Google, incluindo o Cloud Text-to-Speech) tem voz
  // para o ñandeva: os áudios usam a voz do aparelho, se houver — o mesmo caso dos outros pacotes
  // indígenas deste app (gun, kgk, kpc, tuo, yrl).
  speechLocale: 'nhd',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, 43 palavras, 4 tópicos de gramática, 2 histórias), no guarani ñandeva (também chamado avá guarani ou chiripá) — língua indígena viva do subgrupo I da família tupi-guarani, com código ISO 639-3 próprio, “nhd” (nome primário “Chiripá”, nome alternativo “Ava Guaraní”, confirmado em iso639-3.sil.org/code/nhd). É DIFERENTE do guarani paraguaio padrão (pacote “gn” deste app), do guarani mbyá (pacote “gun”) e do guarani kaiowá (pacote “kgk”): as quatro variedades pertencem ao mesmo subgrupo guarani da família tupi-guarani — o mbyá e o ñandeva, em especial, têm intercasamento comum entre falantes, segundo a Wikipédia em inglês (“Mbyá Guarani language”) —, mas cada uma tem fonologia, vocabulário cultural e fontes de documentação próprios. A Ethnologue trata o chiripá/ñandeva como inteligível com o guarani paraguaio só “por bilinguismo”, não de forma automática (artigo “Guarani languages” da Wikipédia em inglês), por isso o ñandeva, como o mbyá e o kaiowá, tem pacote próprio neste app, em vez de entrar como uma simples variante regional (o romeno falado na Romênia e na Moldávia, por exemplo). Nenhuma palavra deste pacote foi aproveitada dos pacotes gn/gun/kgk sem conferência própria e específica para o ñandeva: a fonte principal é pib.socioambiental.org/pt/Povo:Guarani_Ñandeva (Instituto Socioambiental, ISA), complementada por pt.wikipedia.org/wiki/Nhandeva, en.wikipedia.org/wiki/Chiripá_language, en.wikipedia.org/wiki/Guarani_languages e en.wikipedia.org/wiki/Mbyá_Guarani_language, incluindo uma dissertação específica sobre a língua (Godinho Costa, “Nhandewa Aywu”, Unicamp, 2003) cujo texto completo não consegui abrir em nenhum repositório acadêmico testado (usei só o resumo dela citado pela Wikipédia, nunca apresentado como leitura direta). As fontes consultadas não registram numerais, cores, partes do corpo nem a maioria dos pronomes e verbos comuns documentados especificamente para o ñandeva — só a fonologia geral e um vocabulário concentrado em identidade, parentesco, agricultura e religião — por isso o curso usa a frase testemunhal real “Txe Nhandeva ete.” (citada pelo ISA) como saudação, em vez de inventar um “oi” ou um “obrigado” que nenhuma fonte registra, do mesmo jeito que os pacotes kpc (baniwa), tuo (tukano) e kgk (kaiowá) já fazem neste app nas suas próprias lacunas. Da A2.1 até o C2 chega nas próximas atualizações, conforme mais vocabulário e gramática puderem ser conferidos em fontes específicas da língua.',
  },
  vocab: VOCAB_NHD,
  units: UNITS_NHD,
  etymology: ETYMOLOGY_NHD,
  community: COMMUNITY_NHD,
  scenarios: SCENARIOS_NHD,
  stories: STORIES_NHD,
  grammar: GRAMMAR_NHD,
  journalPrompts: JOURNAL_PROMPTS_NHD,
  shadowing: SHADOWING_NHD,
  // ñ (nasal palatal) não existe no português; apóstrofo (puso) marca uma pausa curta na garganta; os
  // acentos de til sobre as vogais marcam a nasalização — ver gramatica.ts, tópico de fonologia.
  specialChars: ['ñ', 'ã', 'ẽ', 'ĩ', 'õ', 'ũ', 'ỹ', '\''],
  // nenhuma fonte consultada registra gênero gramatical (m/f/n) no ñandeva: como nos outros pacotes
  // guarani deste app (gn, gun, kgk), os substantivos não se dividem por gênero.
  genders: [],
  // frase testemunhal real, citada pelo Instituto Socioambiental (ISA) em pib.socioambiental.org/pt/
  // Povo:Guarani_Ñandeva — usada aqui no lugar de um “oi” inventado, que nenhuma fonte registra.
  greeting: 'Txe Nhandeva ete.',
  sampleSentence: 'Txe Nhandeva ete. Avá katú eté. Tekoha marangatu!',
  phrases: {
    hi: 'Txe Nhandeva ete.',
    // nenhuma fonte registra um “obrigado” fixo em ñandeva: “marangatu” (sagrado, puro, bom) é usado
    // aqui como expressão de apreço, do mesmo jeito que o pacote kgk usa “porã” (bom) e o kpc usa
    // “keepe” (lit. “com carne”, gordo) onde a língua não tem um “obrigado” separado documentado.
    thanks: 'Marangatu!',
    // também não há, nas fontes, um “vamos!” imperativo: usamos a palavra real “oguata” (caminhar,
    // também usada para os deslocamentos migratórios do povo, segundo o ISA) como convite para
    // começar agora, sem inventar uma forma nova — mesma estratégia do kpc, que reaproveita “núawa”
    // (eu irei) com o mesmo propósito.
    letsStart: ['Oguata!', 'Caminhar! (lit. “caminhar”; usado aqui como convite para começar agora)'],
  },
  formalMarkers:
    'Nenhuma fonte consultada registra uma forma de tratamento “formal” separada da informal no ñandeva — um traço que, pelas fontes disponíveis, parece comum aos outros pacotes guarani deste app (gn, gun, kgk) e às demais línguas indígenas já incluídas (kpc, tuo).',
  cognateNote:
    'O ñandeva é parente do guarani paraguaio (pacote “gn”), do guarani mbyá (“gun”) e do guarani kaiowá (“kgk”) já neste app: as quatro variedades vêm do mesmo subgrupo I da família tupi-guarani, e o ñandeva é especialmente próximo do mbyá — intercasamento entre falantes das duas variedades é comum, segundo a Wikipédia em inglês. Isso aparece no vocabulário: palavras como “tamõi” (avô, também líder de família extensa), “jari” (avó), “jaguaretê” (onça) e “mbaraka” (chocalho sagrado) têm formas e até sentidos culturais quase idênticos no kaiowá, cada um confirmado numa fonte própria e específica (ver etimologias). Com o português, o parentesco é mais distante: o ñandeva não descende do latim nem de nenhuma língua europeia, mas dois séculos de contato deixaram uma marca na direção ñandeva → português, como no caso de “mbaraka”, que deu a palavra “maraca”. O que mais chama atenção no vocabulário ñandeva, mostrado na aba de etimologia, é a formação interna de palavras: o próprio nome do povo, “ñandeva”, nasce do pronome coletivo “ñande” (nós) mais um sufixo, e o nome do papagaio, “parakau ñe\'ẽngatu”, descreve a ave pelo próprio canto (“papagaio do bom falar”).',
};
