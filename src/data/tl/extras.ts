import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no tagalo). */
export const COMMUNITY_TL: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Kumusta ka? Ano ang pangalan mo?',
    // erro típico: esquecer o “si” antes do nome próprio (o português não tem equivalente)
    content: 'Mabuti ako. Ako Bruno.',
    reference: 'Mabuti ako. Ako si Bruno.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Malaki ba ang bahay mo?',
    // erro típico: traduzir ao pé da letra do português (sujeito-verbo-predicado) em vez do predicado
    // tagalo vindo primeiro, e esquecer o “ang”
    content: 'Hindi, bahay ko maliit.',
    reference: 'Hindi, maliit ang bahay ko.',
  },
];

/** Cenários de conversa (registro formal/informal). */
export const SCENARIOS_TL: ScenarioSeed[] = [
  {
    id: 'tl-s1',
    title: 'Kaibigan sa Maynila',
    emoji: '🙋',
    cefr: 'A1',
    register: 'informal',
    persona: 'Maria, colega do curso de tagalo',
    description: 'Maria puxa conversa com você numa praça de Manila. É informal, entre futuros amigos.',
    turns: [
      {
        bot: 'Kumusta ka? Ano ang pangalan mo?',
        botTranslation: 'Como você está? Qual é o seu nome?',
        keywords: ['mabuti', 'ako si', 'pangalan'],
        suggestions: ['Mabuti ako, salamat! Ako si Ana.', 'Mabuti ako. Ako si Pedro.'],
      },
      {
        bot: 'Saan ka mula?',
        botTranslation: 'De onde você é?',
        keywords: ['mula', 'brasil'],
        suggestions: ['Ako ay mula sa Brasil.', 'Mula sa Brasil ako.'],
      },
      {
        bot: 'Malaki ba ang pamilya mo?',
        botTranslation: 'A sua família é grande?',
        keywords: ['malaki', 'maliit', 'pamilya'],
        suggestions: ['Maliit ang pamilya namin.', 'Malaki ang pamilya namin.'],
      },
    ],
  },
];

/**
 * Palavras do tagalo com uma etimologia que vale contar: camadas de empréstimo do espanhol (333 anos
 * de colonização), do malaio (contato austronésio antigo, antes da chegada europeia) e do chinês
 * hokkien (comércio chinês antigo nas Filipinas), ao lado de palavras nativas herdadas direto do
 * proto-malaio-polinésio. Fontes: en.wiktionary.org (verbete de cada palavra, seção “==Tagalog==”),
 * conferidas também contra en.wikipedia.org/wiki/Tagalog_language.
 */
export const ETYMOLOGY_TL: EtymologySeed[] = [
  {
    word: 'kumusta',
    root_word: '¿cómo está? (espanhol)',
    origin_language: 'Espanhol',
    cognates: c(['es', 'cómo está']),
    evolution_note: 'O cumprimento “kumusta” vem direto do espanhol “¿cómo está?” (como está?), encurtado e adaptado à fonética do tagalo durante os 333 anos de colonização espanhola nas Filipinas. Hoje é só o “oi”/“como vai” do dia a dia — ninguém mais sente a palavra como “estrangeira”.',
    transparent: true,
  },
  {
    word: 'salamat',
    root_word: 'salāma (árabe) → selamat (malaio)',
    origin_language: 'Árabe, via malaio',
    cognates: c(['id', 'selamat']),
    evolution_note: 'Assim como o indonésio “selamat” (outra língua austronésia deste app), o tagalo “salamat” vem, pela mesma rota de comércio, do árabe “salama” (segurança) via o malaio “selamat”. No indonésio a palavra ainda carrega o sentido de “segurança/saudação” em expressões como “selamat pagi” (bom dia); no tagalo, o sentido se estreitou e virou especificamente “obrigado”.',
    transparent: false,
  },
  {
    word: 'bahay',
    root_word: '*balay (proto-malaio-polinésio)',
    origin_language: 'Proto-malaio-polinésio (herança austronésia nativa, não é empréstimo)',
    cognates: c(['haw', 'hale'], ['ms', 'balai']),
    evolution_note: 'Palavra nativa, não emprestada: “bahay” (casa) vem do proto-malaio-polinésio “*balay”, com perda do “l” no caminho até o tagalo. É parente direto do havaiano “hale” (casa, também neste app) e do malaio “balai” (salão) — uma palavra do dia a dia que conecta as línguas austronésias já presentes no LinuLingo.',
    transparent: false,
  },
  {
    word: 'pinto',
    root_word: 'pintu (malaio de Brunei)',
    origin_language: 'Malaio',
    cognates: c(['id', 'pintu'], ['ms', 'pintu']),
    evolution_note: 'Apesar de lembrar o espanhol “pintar”, “pinto” (porta) não tem nenhuma relação com isso: veio do malaio “pintu” (porta), a mesma raiz do indonésio “pintu” — um contato antigo entre línguas austronésias do Sudeste Asiático, bem anterior à chegada dos espanhóis.',
    transparent: false,
  },
  {
    word: 'kuya',
    root_word: '哥仔 (ko-iá, hokkien)',
    origin_language: 'Chinês hokkien',
    cognates: c(['hokkien', 'ko-iá']),
    evolution_note: '“Kuya” (irmão mais velho) vem do chinês hokkien “ko-iá”, herança dos comerciantes chineses estabelecidos nas Filipinas há séculos. Hoje a palavra já não soa “chinesa” para a maioria dos filipinos, e vale para qualquer homem mais velho, parente ou não.',
    transparent: false,
  },
  {
    word: 'ate',
    root_word: '阿姊 (á-chí, hokkien)',
    origin_language: 'Chinês hokkien',
    cognates: c(['hokkien', 'á-chí']),
    evolution_note: 'Par de “kuya”: “ate” (irmã mais velha) também vem do hokkien, de “á-chí”. Kuya e ate mostram a camada chinesa do vocabulário tagalo, ao lado da camada malaia (mais antiga) e da espanhola (mais recente, de 333 anos de colonização).',
    transparent: false,
  },
  {
    word: 'gatas',
    root_word: '*ʀatas (proto-malaio-polinésio)',
    origin_language: 'Proto-malaio-polinésio (herança austronésia nativa, não é empréstimo)',
    cognates: c(['nia', 'ota (úbere)']),
    evolution_note: 'Outra palavra nativa: “gatas” (leite) vem direto do proto-malaio-polinésio “*ʀatas”, com um parente em nias (língua da Indonésia) “ota” (úbere). Mostra que boa parte do vocabulário básico do tagalo — comida, corpo, natureza — é herdada da família austronésia, não emprestada.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_TL: [string, string][] = [
  ['Kumusta ka?', 'Como você está?'],
  ['Sino si Nanay at si Tatay sa iyong pamilya?', 'Quem são a mãe e o pai na sua família?'],
  ['Mabuti ba ang pagkain sa iyong bahay?', 'A comida na sua casa é boa?'],
  ['Malaki o maliit ang iyong bahay?', 'A sua casa é grande ou pequena?'],
];

export const SHADOWING_TL: [string, string][] = [
  ['Kumusta ka? Mabuti ako, salamat!', 'Como você está? Estou bem, obrigado!'],
  ['Ako si Maria. Ikaw?', 'Eu sou a Maria. E você?'],
  ['Kain tayo! Mabuti ang pagkain.', 'Vamos comer! A comida é boa.'],
  ['Maliit ang bahay namin, pero mabuti.', 'A nossa casa é pequena, mas é boa.'],
  ['Salamat po, Nanay. Mabuti po ako.', 'Obrigado, mamãe. Estou bem. (as duas frases, com respeito)'],
];
